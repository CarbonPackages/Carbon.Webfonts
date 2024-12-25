import React, { useState, useEffect } from "react";
import { Icon, IconButton, TextInput } from "@neos-project/react-ui-components";
import injectNeosProps from "./Component/injectNeosProps";
import { getFontCollection, injectStylesheet } from "./Helper";
import FontFamilyPreview from "./Component/FontFamilyPreview";
import { DropDown } from "@neos-project/react-ui-components";
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
    );

    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

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
                        placeholder={i18nRegistry.translate("search", "Neos.Neos", "Main")}
                        allowEmpty={true}
                        setFocus={true}
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
                                {i18nRegistry.translate(`fontType.${type}`, type, [], "Carbon.Webfonts", "Main")}
                            </li>

                            {Object.values(items).map(({ label, cssFile, value, display }) => {
                                if (!searchTerm || fuzzysearch(searchTerm.toLowerCase(), label.toLowerCase())) {
                                    return (
                                        <li>
                                            <button
                                                key={label}
                                                onClick={() => {
                                                    commit(value);
                                                }}
                                                {...stylex.props(styles.button)}
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
