import React, { useState, useEffect } from "react";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    highlight: {
        outline: "var(--colors-Warn) solid 2px",
        outlineOffset: 2,
        zIndex: 2,
        borderRadius: 2,
    },
    disabled: {
        cursor: "not-allowed",
        opacity: 0.65,
        ":where(*)>*": {
            pointerEvents: "none",
        },
    },
    label: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        minWidth: 22,
        minHeight: 22,
        padding: "0 !important",
        gap: "var(--spacing-Half)",
        marginBottom: "var(--spacing-Quarter)",
        ":last-child": {
            marginBottom: 0,
        },
    },
    input: {
        position: "absolute",
        left: -9999,
    },
    radio: (checked) => ({
        display: "flex",
        width: 20,
        height: 20,
        backgroundColor: checked ? "var(--colors-PrimaryBlue)" : "var(--colors-ContrastDark)",
        borderColor: checked ? "var(--colors-PrimaryBlue)" : "var(--colors-ContrastBrighter)",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 9999,
        alignItems: "center",
        justifyContent: "center",
    }),
    dot: (checked) => ({
        display: "block",
        background: checked ? "var(--colors-ContrastBrightest)" : "var(--colors-UncheckedCheckboxTick)",
        borderRadius: 9999,
        width: "var(--spacing-Half)",
        height: "var(--spacing-Half)",
    }),
});

export default function RadioButton({ value, label, highlight, onChange = () => {}, currentValue, disabled }) {
    const isCurrent = currentValue == value;
    return (
        <label {...stylex.props(styles.label, highlight && isCurrent && styles.highlight, disabled && styles.disabled)}>
            <input
                {...stylex.props(styles.input)}
                type="radio"
                value={value}
                checked={isCurrent}
                onChange={() => onChange(value)}
            />
            <span {...stylex.props(styles.radio(isCurrent))}>
                <span {...stylex.props(styles.dot(isCurrent))}></span>
            </span>
            {label || value}
        </label>
    );
}
