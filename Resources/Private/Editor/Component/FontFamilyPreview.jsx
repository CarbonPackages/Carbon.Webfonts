import React, { useState, useEffect } from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import { beautifyFontOutput, getFontBasedOnValue } from "../Helper";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    output: {
        display: "block",
        marginLeft: "calc(var(--spacing-Full) * -1)",
        padding: "0 0 0 14px",
        overflow: "hidden",
        background: "transparent",
        border: 0,
        lineHeight: 1,
        height: 40,
        color: "var(--colors-ContrastBrightest)",
        outline: "none !important",
        width: "100%",
        textOverflow: "ellipsis",
        cursor: "pointer",
    },
    font: (fontFamily, fontWeight, fontStyle) => ({
        fontFamily,
        fontWeight,
        fontStyle,
        fontSize: "18px !important",
    }),
});

function FontFamilyPreview({
    id,
    addTitle,
    fonts,
    fontFamily,
    enableFallback,
    placeholderFont,
    placeholder,
    i18nRegistry,
}) {
    const [title, setTitle] = useState("");
    const [selectedFont, setSelectedFont] = useState(null);

    useEffect(() => {
        if (!fontFamily) {
            setSelectedFont(null);
            setTitle("");
            return;
        }

        const selectedFont = getFontBasedOnValue(fontFamily, fonts);

        let title = selectedFont ? selectedFont.label : placeholderFont?.label || placeholderFont?.name;
        if (enableFallback && selectedFont?.fallback) {
            title += `, ${selectedFont.fallback}`;
        }
        if (enableFallback && !selectedFont && placeholderFont?.fallback) {
            title += `, ${placeholderFont.fallback}`;
        }

        setSelectedFont(selectedFont);
        setTitle(beautifyFontOutput(title));
    }, [fontFamily]);

    if (placeholder) {
        placeholder = i18nRegistry.translate(placeholder);
    }
    const fontPlaceholderLabel = beautifyFontOutput(placeholderFont?.label || placeholderFont?.name);

    let displayedFontFamily = null;
    let displayedFontWeight = null;
    let displayedFontStyle = null;
    if (fontFamily) {
        displayedFontFamily = fontFamily;
        displayedFontWeight = selectedFont?.display?.fontWeight;
        displayedFontStyle = selectedFont?.display?.fontStyle;
    } else if (placeholderFont?.value) {
        displayedFontFamily = placeholderFont.value;
        displayedFontWeight = placeholderFont?.display?.fontWeight;
        displayedFontStyle = placeholderFont?.display?.fontStyle;
    } else if (placeholderFont?.name) {
        displayedFontFamily = `${placeholderFont.name}${enableFallback && !!placeholderFont.fallback ? `, ${placeholderFont.fallback}` : ""}`;
    }

    return (
        <input
            type="text"
            id={id}
            readOnly
            title={addTitle && title ? title : null}
            {...stylex.props(
                styles.output,
                displayedFontFamily && styles.font(displayedFontFamily, displayedFontWeight, displayedFontStyle),
            )}
            value={(!!fontFamily && selectedFont?.label) || ""}
            placeholder={fontPlaceholderLabel || placeholder}
        />
    );
}

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
}));

export default neosifier(FontFamilyPreview);
