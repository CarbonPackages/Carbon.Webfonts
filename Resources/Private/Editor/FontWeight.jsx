import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@neos-project/react-ui-components";
import injectNeosProps from "./Component/injectNeosProps";
import { getFontCollection, getFontWeightConfig } from "./Helper";
import RangeEditor from "/_Resources/Static/Packages/Carbon.RangeEditor/RangeEditor.js";
import RadioButton from "./Component/RadioButton";

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
    const { flat } = getFontCollection({
        ...carbonFontSettings,
        ...defaultOptions.fonts,
        ...config.fonts,
        ...options.fonts,
    });

    const [font, setFont] = useState(null);
    const [fontWeight, setFontWeight] = useState(null);
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
        const obj = getFontWeightConfig(font, value, flat);
        if (!obj) {
            setFontWeight(null);
            setType(null);
            return;
        }
        commitIfChanged(obj.value);
        setType(obj.type);
        setFontWeight(obj.fontWeight);
    }, [font]);

    return (
        <>
            {type === "variable" && (
                <RangeEditor
                    options={fontWeight}
                    id={id}
                    value={value}
                    highlight={highlight}
                    onEnterKey={onEnterKey}
                    commit={commitIfChanged}
                />
            )}
            {type === "fixed" &&
                Array.isArray(fontWeight) &&
                fontWeight.map((weight) => (
                    <RadioButton
                        key={weight}
                        value={weight}
                        highlight={highlight}
                        onChange={commitIfChanged}
                        currentValue={value}
                    />
                ))}
            {!!value && type !== "variable" && type !== "fixed" && (
                <RadioButton disabled value={value} highlight={highlight} currentValue={value} />
            )}
        </>
    );
}

export default injectNeosProps(FontWeight, "FontWeight");
