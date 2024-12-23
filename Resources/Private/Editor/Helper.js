import { neos } from "@neos-project/neos-ui-decorators";

export function injectNeosProps(component, configKey) {
    const neosifier = neos((globalRegistry) => ({
        i18nRegistry: globalRegistry.get("i18n"),
        config: globalRegistry.get("frontendConfiguration").get(`Carbon.Webfonts.${configKey}`),
        carbonWebfonts: globalRegistry.get("frontendConfiguration").get("CarbonWebfonts"),
    }));
    return neosifier(component);
}

export function getClosestNumber(numbers, value) {
    return numbers.reduce((prev, curr) => (Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev));
}

export function getFontCollection(fonts, enableFallback, placeholderFont, sortFonts) {
    const object = {
        fonts: {},
        flat: {},
    };
    if (placeholderFont && placeholderFont.name) {
        generateFontObject(placeholderFont.name, placeholderFont, enableFallback);
    }
    for (const key in fonts) {
        const item = fonts[key];
        if (!item) {
            continue;
        }
        const { type, ...result } = generateFontObject(key, item, enableFallback);

        if (!object.fonts[type]) {
            object.fonts[type] = {};
        }
        object.flat[key] = result;
        object.fonts[type][key] = result;
    }
    if (sortFonts) {
        for (const type in object.fonts) {
            object.fonts[type] = Object.fromEntries(
                Object.entries(object.fonts[type]).sort(([, a], [, b]) => a.label.localeCompare(b.label)),
            );
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

    return { label, fallback, fontStyle, fontWeight, display, cssFile, value, type };
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

function getFilePath(file) {
    if (!file || typeof file !== "string") {
        return null;
    }
    if (file.startsWith("resource://")) {
        return file.replace("resource://", "/_Resources/Static/Packages/");
    }
    return file;
}
