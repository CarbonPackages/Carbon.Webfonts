import React, { useState, useEffect, useCallback } from "react";
import { Button, SelectBox } from "@neos-project/react-ui-components";
import injectNeosProps from "./Component/injectNeosProps";
import { getFontCollection, getFontWeightConfig } from "./Helper";
import RangeEditor from "/_Resources/Static/Packages/Carbon.RangeEditor/RangeEditor.js";
import RadioButton from "./Component/RadioButton";

const defaultOptions = {
    disabled: false,
    readonly: false,
    useCarbonWebfonts: true,
    placeholder: "",
    choosenFont: "",
    fonts: {},
};

function FontWeight({
    id,
    value,
    commit,
    options,
    className,
    highlight,
    i18nRegistry,
    onEnterKey,
    config,
    carbonWebfonts,
}) {
    const { disabled, readonly, useCarbonWebfonts, placeholder, choosenFont } = {
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

    if (!!value && type !== "variable" && type !== "fixed") {
        return <RadioButton disabled value={value} highlight={highlight} currentValue={value} />;
    }

    if (type === "variable") {
        return (
            <RangeEditor
                options={fontWeight}
                id={id}
                value={value}
                highlight={highlight}
                onEnterKey={onEnterKey}
                commit={commitIfChanged}
                disabled={disabled}
                readonly={readonly}
            />
        );
    }

    // Fixed
    if (!Array.isArray(fontWeight)) {
        return null;
    }

    if (fontWeight.length < 4) {
        return fontWeight.map((weight) => (
            <RadioButton
                key={`key-${weight}`}
                value={weight}
                highlight={highlight}
                onChange={commitIfChanged}
                currentValue={value}
                disabled={disabled || readonly}
            />
        ));
    }

    const selectBoxOptions = fontWeight.map((weight) => ({
        label: weight,
        value: weight,
    }));

    return (
        <SelectBox
            allowEmpty={false}
            id={id}
            options={selectBoxOptions}
            value={value}
            className={className}
            onValueChange={commitIfChanged}
            disabled={disabled}
            readonly={readonly}
        />
    );
}

export default injectNeosProps(FontWeight, "FontWeight");
