import React, { useState, useEffect } from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import { beautifyFontOutput } from "../Helper";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    placeholder: {
        opacity: 0.65,
    },
    output: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "var(--spacing-Quarter)",
        marginLeft: "calc(var(--spacing-Full) * -1)",
        paddingLeft: "var(--spacing-Full)",
        overflow: "hidden",
        lineHeight: 1,
        height: 40,
    },
    font: (fontFamily, fontWeight, fontStyle) => ({
        fontFamily,
        fontWeight,
        fontStyle,
        fontSize: 18,
    }),
    fontClip: {
        overflowX: "clip",
        textOverflow: "ellipsis",
    },
});

function FontFamilyPreview({
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
        const [font] = fontFamily.split(",");
        const selectedFont = fonts[font.trim()];

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

    return (
        <span
            title={setTitle && title ? title : null}
            {...stylex.props(
                !fontFamily && styles.placeholder,
                styles.output,
                fontFamily &&
                    styles.font(fontFamily, selectedFont?.display?.fontWeight, selectedFont?.display?.fontStyle),
                !fontFamily &&
                    !!placeholderFont?.name &&
                    styles.font(
                        `${placeholderFont.name}${enableFallback && !!placeholderFont.fallback ? `, ${placeholderFont.fallback}` : ""}`,
                    ),
            )}
        >
            {!!(selectedFont?.label || fontPlaceholderLabel) ? (
                <span {...stylex.props(styles.fontClip)}>{selectedFont?.label || fontPlaceholderLabel}</span>
            ) : (
                placeholder
            )}
        </span>
    );
}

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
}));

export default neosifier(FontFamilyPreview);
