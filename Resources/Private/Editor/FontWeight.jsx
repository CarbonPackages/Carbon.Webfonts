import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@neos-project/react-ui-components";
import { injectNeosProps, getFontCollection, getClosestNumber } from "./Helper";
import RangeEditor from "/_Resources/Static/Packages/Carbon.RangeEditor/RangeEditor.js";
import RadioButton from "./Component/RadioButton"

const defaultOptions = {
    disabled: false,
    readonly: false,
    allowEmpty: true,
    useCarbonWebfonts: true,
    placeholder: "",
    choosenFont: "",
    fonts: {},
};

function FontWeight({ id, value, commit, options, highlight, i18nRegistry, onEnterKey, config, carbonWebfonts }) {
    const { disabled, readonly, allowEmpty, useCarbonWebfonts, placeholder, choosenFont } = {
        ...defaultOptions,
        ...config,
        ...options,
    };

    const carbonFontSettings = useCarbonWebfonts ? carbonWebfonts : {};
    const { flat } = getFontCollection(
        { ...carbonFontSettings, ...defaultOptions.fonts, ...config.fonts, ...options.fonts }
    );

    const [font, setFont] = useState(null);
    const [fontWeights, setFontWeights] = useState(null);
    const [type, setType] = useState(null);

    const commitIfChanged = useCallback(
            (newValue) => {
                if (newValue !== value) {
                    commit(newValue);
                }
            },
            [value, commit],
        );

    useEffect(() => {
        if (font === choosenFont) {
            return;
        }
        if (!choosenFont) {
            setFont(null);
            return;
        }
        setFont(choosenFont);
    }, [choosenFont]);

    useEffect(() => {
        if (!font) {
            setFontWeights(null);
            setType(null);
            return;
        }
        const [firstFont] = font.split(",");
        const selectedFont = flat[firstFont.trim()];
        let fontWeight = selectedFont?.fontWeight;
        if (!fontWeight) {
            setFontWeights(null);
            setType(null);
            return;
        }
        if (typeof fontWeight === "string") {
            setType("variable");
            fontWeight = fontWeight.split(" ").sort();
            const min = parseInt(fontWeight[0]);
            const max = parseInt(fontWeight[fontWeight.length - 1]);
            if (value < min) {
                commitIfChanged(min);
            }
            if (value > max) {
                commitIfChanged(max);
            }

            setFontWeights({min, max});
            return;
        }

        setType("fixed");
        if (!Array.isArray(fontWeight)) {
            fontWeight = [fontWeight];
        }
        setFontWeights(fontWeight);
        commitIfChanged(getClosestNumber(fontWeight, value));
    }, [font]);

    return (
        <>
            {type === "variable" && (
                <RangeEditor options={fontWeights} id={id} value={value} highlight={highlight} onEnterKey={onEnterKey} commit={commitIfChanged} />
            )}
            {type === "fixed" && Array.isArray(fontWeights) && fontWeights.map((weight) => (
                <RadioButton key={weight} value={weight} highlight={highlight} onChange={commitIfChanged} currentValue={value} />
            ))}
            {!!value && type !== "variable" && type !== "fixed" && (
                <RadioButton disabled value={value} highlight={highlight} currentValue={value} />
            )}
        </>
    )
}

export default injectNeosProps(FontWeight, "FontWeight");
