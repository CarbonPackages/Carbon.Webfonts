import React, { useState } from "react";
import { Icon, IconButton, TextInput, DropDown } from "@neos-project/react-ui-components";
import injectNeosProps from "./Component/injectNeosProps";
import { getFontCollection, injectStylesheet } from "./Helper";
import FontFamilyPreview from "./Component/FontFamilyPreview";
import fuzzysearch from "fuzzysearch";
import * as stylex from "@stylexjs/stylex";

const defaultOptions = {
    disabled: false,
    readonly: false,
    allowEmpty: true,
    cssFile: false,
    sortFonts: true,
    useCarbonWebfonts: true,
    placeholder: "",
    placeholderFont: false,
    enableFallback: true,
    showIcon: true,
    allowSystemFonts: true,
    allowFontFace: true,
};

const styles = stylex.create({
    font: (fontFamily, fontWeight, fontStyle) => ({
        fontFamily,
        fontWeight,
        fontStyle,
        fontSize: 18,
    }),
    header: {
        display: "flex",
        justifyContent: "space-between",
    },
    disabled: {
        cursor: "not-allowed",
        opacity: 0.65,
        ":where(*)>*": {
            pointerEvents: "none",
        },
    },
    highlight: {
        borderRadius: 2,
        outline: "2px solid var(--colors-Warn)",
        outlineOffset: 2,
    },
    fontGroup: {
        padding: "var(--spacing-Half) var(--spacing-Full)",
        backgroundColor: "var(--colors-ContrastDarker)",
        paddingLeft: "var(--spacing-Full)",
        textTransform: "uppercase",
        fontWeight: 700,
        lineHeight: "30px",
        ":only-child": {
            display: "none",
        },
    },
    button: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "var(--spacing-Half) var(--spacing-Full)",
        border: 0,
        color: "var(--colors-ContrastBrightest)",
        gap: "var(--spacing-Half)",
        textAlign: "left",
        minHeight: "var(--spacing-GoldenUnit)",
        background: "var(--colors-ContrastDarkest)",
        cursor: "pointer",

        ":not(:first-child)": {
            borderTop: "1px solid var(--colors-ContrastNeutral)",
        },
        ":hover": {
            background: "var(--colors-PrimaryBlue)",
        },
        ":focus": {
            outline: "1px solid var(--colors-PrimaryBlue)",
        },
    },
    buttonCurrent: {
        background: "var(--colors-ContrastDarker)",
    },
    block: {
        display: "block !important",
    },
    maxHeight: {
        maxHeight: "var(--fontFamily-MaxHeight, none)",
        overflowY: "auto",
    },
    searchInput: {
        marginLeft: "calc(var(--spacing-Full) * -1)",
        width: "calc(100% + var(--spacing-Full))",
    },
});

function FontFamily({
    id,
    value,
    commit,
    options,
    highlight,
    i18nRegistry,
    onEnterKey,
    config,
    carbonWebfonts,
    scrollable = true,
}) {
    const {
        disabled,
        readonly,
        allowEmpty,
        enableFallback,
        showIcon,
        placeholderFont,
        cssFile,
        sortFonts,
        useCarbonWebfonts,
        placeholder,
        allowSystemFonts,
        allowFontFace,
    } = {
        ...defaultOptions,
        ...config,
        ...options,
    };

    const carbonFontSettings = useCarbonWebfonts ? carbonWebfonts : {};
    const fonts = getFontCollection(
        { ...carbonFontSettings, ...config.fonts, ...options.fonts },
        enableFallback,
        !placeholder && placeholderFont ? placeholderFont : null,
        sortFonts,
        allowSystemFonts,
        allowFontFace,
    );

    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const isCurrent = (fontFamily) => fontFamily === value;
    let nextFontIndex = null;
    let prevFontIndex = null;

    injectStylesheet(cssFile);

    return (
        <DropDown.Stateless
            className={stylex.props(highlight && styles.highlight, readonly || (disabled && styles.disabled)).className}
            isOpen={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            onClose={() => setIsOpen(false)}
        >
            <DropDown.Header className={stylex.props(!!value && allowEmpty && styles.header).className}>
                {isOpen ? (
                    <TextInput
                        id={id}
                        value={searchTerm}
                        onChange={setSearchTerm}
                        placeholder={i18nRegistry.translate("Neos.Neos:Main:search")}
                        allowEmpty={true}
                        setFocus={true}
                        onKeyDown={({ key }) => {
                            if (searchTerm) {
                                return;
                            }
                            if (key == "ArrowRight") {
                                const nextFont = Object.values(fonts.flat).find((font) => font.index === nextFontIndex);
                                if (nextFont) {
                                    commit(nextFont.value);
                                }
                            }
                            if (key == "ArrowLeft") {
                                const prevFont = Object.values(fonts.flat).find((font) => font.index === prevFontIndex);
                                if (prevFont) {
                                    commit(prevFont.value);
                                }
                            }
                        }}
                        containerClassName={
                            stylex.props(styles.searchInput, isOpen && styles.searchInputVisible).className
                        }
                    />
                ) : (
                    <FontFamilyPreview
                        id={id}
                        addTitle={true}
                        fontFamily={value}
                        fonts={fonts.flat}
                        enableFallback={enableFallback}
                        placeholderFont={placeholderFont}
                        placeholder={placeholder}
                    />
                )}
                {allowEmpty && !!value && (
                    <IconButton
                        icon="times"
                        title={i18nRegistry.translate("Carbon.Webfonts:Main:noFont")}
                        onClick={(event) => {
                            commit("");
                            event.stopPropagation();
                        }}
                    />
                )}
            </DropDown.Header>
            <DropDown.Contents
                scrollable={scrollable}
                className={stylex.props(isOpen && styles.block, !scrollable && styles.maxHeight).className}
            >
                {Object.entries(fonts.nested).map(([type, items]) => (
                    <li key={type}>
                        <ul>
                            <li {...stylex.props(styles.fontGroup)}>
                                {i18nRegistry.translate(`Carbon.Webfonts:Main:fontType.${type}`, type)}
                            </li>

                            {Object.values(items).map(({ label, cssFile, value, display, index }) => {
                                const isCurrentFont = isCurrent(value);
                                if (isCurrentFont) {
                                    nextFontIndex = index + 1;
                                    prevFontIndex = index == 0 ? null : index - 1;
                                }

                                if (!searchTerm || fuzzysearch(searchTerm.toLowerCase(), label.toLowerCase())) {
                                    return (
                                        <li key={label}>
                                            <button
                                                onClick={() => {
                                                    commit(value);
                                                }}
                                                {...stylex.props(styles.button, isCurrentFont && styles.buttonCurrent)}
                                            >
                                                <span
                                                    {...stylex.props(
                                                        styles.font(value, display?.fontWeight, display?.fontStyle),
                                                        styles.bigFont,
                                                    )}
                                                >
                                                    {label}
                                                </span>
                                                {!!cssFile && showIcon && (
                                                    <Icon icon="link" title={cssFile !== true ? cssFile : null} />
                                                )}
                                            </button>
                                        </li>
                                    );
                                }
                                return null;
                            })}
                        </ul>
                    </li>
                ))}
            </DropDown.Contents>
        </DropDown.Stateless>
    );
}

export default injectNeosProps(FontFamily, "FontFamily");
