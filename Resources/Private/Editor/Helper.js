export { default as FontFamilyPreview } from "./Component/FontFamilyPreview";
export { default as RadioButton } from "./Component/RadioButton";

export function getFontWeightConfig(fontName, value, fontList, defaultValue = 400) {
    const font = getFontBasedOnValue(fontName, fontList);
    if (!font) {
        return null;
    }

    let fontWeight = font?.fontWeight;
    if (!fontWeight) {
        return null;
    }
    if (typeof fontWeight === "string") {
        const array = fontWeight
            .split(" ")
            .map((item) => parseInt(item))
            .sort((a, b) => a - b);
        const min = array[0];
        const max = array[array.length - 1];
        fontWeight = {
            min,
            max,
        };
        return {
            type: "variable",
            value: getFontWeight(fontWeight, value, defaultValue),
            font,
            fontWeight,
        };
    }

    if (!Array.isArray(fontWeight)) {
        fontWeight = [fontWeight];
    }
    return {
        type: "fixed",
        value: getFontWeight(fontWeight, value, defaultValue),
        font,
        fontWeight: fontWeight,
    };
}

export function getFontWeight(numberArrayOrObject, value, defaultValue = 400) {
    if (typeof value !== "number") {
        value = defaultValue;
    }
    if (!Array.isArray(numberArrayOrObject)) {
        const { min, max } = numberArrayOrObject;
        if (value < min) {
            return min;
        }
        if (value > max) {
            return max;
        }
        return value;
    }

    return numberArrayOrObject.reduce((prev, curr) => (Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev));
}

export function getFontBasedOnValue(value, fonts) {
    if (!value || typeof value !== "string") {
        return null;
    }
    const [font] = value.split(",");
    const selectedFont = fonts[font.trim()];
    return selectedFont || null;
}

export function getFontCollection(
    fonts,
    enableFallback = true,
    placeholderFont = null,
    sortFonts = true,
    allowSystemFonts = true,
    allowFontFace = true,
) {
    const object = {
        nested: {},
        flat: {},
    };
    if (placeholderFont && placeholderFont.name) {
        generateFontObject(placeholderFont.name, placeholderFont, enableFallback);
    }
    let index = 0;
    for (const key in fonts) {
        const item = fonts[key];
        if (!item) {
            continue;
        }
        const { type, ...result } = generateFontObject(key, item, enableFallback);

        if ((result.cssFile && !allowFontFace) || (!result.cssFile && !allowSystemFonts)) {
            continue;
        }

        if (!object.nested[type]) {
            object.nested[type] = {};
        }
        if (!sortFonts) {
            object.flat[key] = { ...result, index };
            index++;
        }
        object.nested[type][key] = result;
    }
    if (sortFonts) {
        for (const type in object.nested) {
            object.nested[type] = Object.fromEntries(
                Object.entries(object.nested[type]).sort(([, a], [, b]) => a.label.localeCompare(b.label)),
            );
            // We set here the flat list, to have the same order as the nested list
            object.flat = { ...object.flat, ...object.nested[type] };
        }
        for (const font in object.flat) {
            // Add the index to the flat list
            object.flat[font].index = index;
            index++;
        }
    }
    return object;
}

export function beautifyFontOutput(string) {
    if (!string || typeof string !== "string") {
        return "";
    }
    return string.replaceAll("'", "").replaceAll('"', "").replaceAll(",", ", ").replaceAll("  ", " ").trim();
}

export function injectStylesheet(file) {
    const href = getFilePath(file);
    if (!href || document.querySelector(`link[href="${href}"]`)) {
        return null;
    }
    const head = document.head;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    head.appendChild(link);
}

export function getFilePath(file) {
    if (!file || typeof file !== "string") {
        return null;
    }
    if (file.startsWith("resource://")) {
        return file.replace("resource://", "/_Resources/Static/Packages/");
    }
    return file;
}

function generateFontObject(key, item, enableFallback) {
    const label = beautifyFontOutput(item.label || key);
    const fallbackValue = item.fallback || "";
    const fallback = beautifyFontOutput(fallbackValue);
    const type = determineFontType(fallback, item.group);
    const cssFile = item.cssFile === true ? true : getFilePath(item.cssFile);
    const value = `${key}${enableFallback && fallbackValue ? `,${fallbackValue}` : ""}`;
    const fontStyle = item?.fontStyle || "normal";
    const fontWeight = item?.fontWeight || 400;

    const display = {
        fontStyle: item?.display?.fontStyle || fontStyle,
        fontWeight: item?.display?.fontWeight || fontWeight,
    };

    if (typeof cssFile === "string") {
        injectStylesheet(cssFile);
    }

    return { key, label, fallback, fontStyle, fontWeight, display, cssFile, value, type };
}

function determineFontType(fallback, group) {
    if (group) {
        if (group === "Sans Serif") return "sans-serif";
        return group.toLowerCase();
    }
    if (fallback.includes("sans-serif")) return "sans-serif";
    if (fallback.includes("serif")) return "serif";
    if (fallback.includes("monospace")) return "monospace";
    if (fallback.includes("cursive")) return "cursive";
    if (fallback.includes("fantasy")) return "fantasy";
    return "sans-serif";
}
