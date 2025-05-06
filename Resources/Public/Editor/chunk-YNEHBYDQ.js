import {
  __toESM,
  props,
  require_neos_ui_decorators,
  require_react
} from "./chunk-SGH3THWK.js";

// Resources/Private/Editor/Component/FontFamilyPreview.jsx
var import_react = __toESM(require_react(), 1);
var import_neos_ui_decorators = __toESM(require_neos_ui_decorators(), 1);
var styles = {
  output: {
    display: "webfonts-1lliihq",
    marginLeft: "webfonts-1jstro9",
    padding: "webfonts-1gjcfxf",
    overflow: "webfonts-b3r6kr",
    background: "webfonts-1md70p1",
    border: "webfonts-1wty727",
    lineHeight: "webfonts-o5v014",
    height: "webfonts-1vqgdyp",
    color: "webfonts-189eng2",
    outline: "webfonts-zd0ubt",
    width: "webfonts-h8yej3",
    textOverflow: "webfonts-lyipyv",
    cursor: "webfonts-1ypdohk",
    $$css: true
  },
  font: (fontFamily, fontWeight, fontStyle) => [{
    fontFamily: fontFamily == null ? null : "webfonts-t1x0nq",
    fontWeight: fontWeight == null ? null : "webfonts-1oq5gaa",
    fontStyle: fontStyle == null ? null : "webfonts-1sgc6b7",
    fontSize: "webfonts-b4twgi",
    $$css: true
  }, {
    "--fontFamily": fontFamily != null ? fontFamily : void 0,
    "--fontWeight": fontWeight != null ? fontWeight : void 0,
    "--fontStyle": fontStyle != null ? fontStyle : void 0
  }]
};
function FontFamilyPreview({
  id,
  addTitle,
  fonts,
  fontFamily,
  enableFallback,
  placeholderFont,
  placeholder,
  i18nRegistry
}) {
  const [title, setTitle] = (0, import_react.useState)("");
  const [selectedFont, setSelectedFont] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (!fontFamily) {
      setSelectedFont(null);
      setTitle("");
      return;
    }
    const selectedFont2 = getFontBasedOnValue(fontFamily, fonts);
    let title2 = selectedFont2 ? selectedFont2.label : placeholderFont?.label || placeholderFont?.name;
    if (enableFallback && selectedFont2?.fallback) {
      title2 += `, ${selectedFont2.fallback}`;
    }
    if (enableFallback && !selectedFont2 && placeholderFont?.fallback) {
      title2 += `, ${placeholderFont.fallback}`;
    }
    setSelectedFont(selectedFont2);
    setTitle(beautifyFontOutput(title2));
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
  return /* @__PURE__ */ import_react.default.createElement("input", { type: "text", id, readOnly: true, title: addTitle && title ? title : null, ...props(styles.output, displayedFontFamily && styles.font(displayedFontFamily, displayedFontWeight, displayedFontStyle)), value: !!fontFamily && selectedFont?.label || "", placeholder: fontPlaceholderLabel || placeholder });
}
var neosifier = (0, import_neos_ui_decorators.neos)((globalRegistry) => ({
  i18nRegistry: globalRegistry.get("i18n")
}));
var FontFamilyPreview_default = neosifier(FontFamilyPreview);

// Resources/Private/Editor/Component/RadioButton.jsx
var import_react2 = __toESM(require_react(), 1);
var styles2 = {
  highlight: {
    outline: "webfonts-1v2uk0",
    outlineOffset: "webfonts-1hl8ikr",
    zIndex: "webfonts-htitgo",
    borderRadius: "webfonts-1cum3z5",
    $$css: true
  },
  disabled: {
    cursor: "webfonts-1h6gzvc",
    opacity: "webfonts-190dgpg",
    ":where(*)>*_pointerEvents": "webfonts-vszx66",
    $$css: true
  },
  label: {
    display: "webfonts-78zum5",
    alignItems: "webfonts-6s0dn4",
    cursor: "webfonts-1ypdohk",
    minWidth: "webfonts-1oslful",
    minHeight: "webfonts-e0957l",
    padding: "webfonts-1732f5w",
    gap: "webfonts-1iv4zvh",
    marginBottom: "webfonts-adln40",
    ":last-child_marginBottom": "webfonts-zboxd6",
    $$css: true
  },
  radio: (checked) => [{
    display: "webfonts-78zum5",
    width: "webfonts-w4jnvo",
    height: "webfonts-1qx5ct2",
    backgroundColor: (checked ? "var(--colors-PrimaryBlue)" : "var(--colors-ContrastDark)") == null ? null : "webfonts-r5ldyu",
    borderColor: (checked ? "var(--colors-PrimaryBlue)" : "var(--colors-ContrastBrighter)") == null ? null : "webfonts-1u3gezn",
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    borderWidth: "webfonts-mkeg23",
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: "webfonts-1y0btm7",
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderRadius: "webfonts-10hpsqq",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    alignItems: "webfonts-6s0dn4",
    justifyContent: "webfonts-l56j7k",
    $$css: true
  }, {
    "--backgroundColor": (checked ? "var(--colors-PrimaryBlue)" : "var(--colors-ContrastDark)") != null ? checked ? "var(--colors-PrimaryBlue)" : "var(--colors-ContrastDark)" : void 0,
    "--borderColor": (checked ? "var(--colors-PrimaryBlue)" : "var(--colors-ContrastBrighter)") != null ? checked ? "var(--colors-PrimaryBlue)" : "var(--colors-ContrastBrighter)" : void 0
  }],
  dot: (checked) => [{
    display: "webfonts-1lliihq",
    background: (checked ? "var(--colors-ContrastBrightest)" : "var(--colors-UncheckedCheckboxTick)") == null ? null : "webfonts-7m5jml",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    borderRadius: "webfonts-10hpsqq",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    width: "webfonts-lpq68b",
    height: "webfonts-1iflsja",
    $$css: true
  }, {
    "--background": (checked ? "var(--colors-ContrastBrightest)" : "var(--colors-UncheckedCheckboxTick)") != null ? checked ? "var(--colors-ContrastBrightest)" : "var(--colors-UncheckedCheckboxTick)" : void 0
  }]
};
function RadioButton({
  value,
  label,
  highlight,
  onChange = () => {
  },
  currentValue,
  disabled
}) {
  const isCurrent = currentValue == value;
  return /* @__PURE__ */ import_react2.default.createElement("label", { ...props(styles2.label, highlight && isCurrent && styles2.highlight, disabled && styles2.disabled) }, /* @__PURE__ */ import_react2.default.createElement("input", { ...{
    className: "webfonts-10l6tqk webfonts-3rpodo"
  }, type: "radio", value, checked: isCurrent, onChange: () => onChange(value) }), /* @__PURE__ */ import_react2.default.createElement("span", { ...props(styles2.radio(isCurrent)) }, /* @__PURE__ */ import_react2.default.createElement("span", { ...props(styles2.dot(isCurrent)) })), label || value);
}

// Resources/Private/Editor/Helper.js
function getFontWeightConfig(fontName, value, fontList, defaultValue = 400) {
  const font = getFontBasedOnValue(fontName, fontList);
  if (!font) {
    return null;
  }
  let fontWeight = font?.fontWeight;
  if (!fontWeight) {
    return null;
  }
  if (typeof fontWeight === "string") {
    const array = fontWeight.split(" ").map((item) => parseInt(item)).sort((a, b) => a - b);
    const min = array[0];
    const max = array[array.length - 1];
    fontWeight = {
      min,
      max
    };
    return {
      type: "variable",
      value: getFontWeight(fontWeight, value, defaultValue),
      font,
      fontWeight
    };
  }
  if (!Array.isArray(fontWeight)) {
    fontWeight = [fontWeight];
  }
  return {
    type: "fixed",
    value: getFontWeight(fontWeight, value, defaultValue),
    font,
    fontWeight
  };
}
function getFontWeight(numberArrayOrObject, value, defaultValue = 400) {
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
  return numberArrayOrObject.reduce((prev, curr) => Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
}
function getFontBasedOnValue(value, fonts) {
  if (!value || typeof value !== "string") {
    return null;
  }
  const [font] = value.split(",");
  const selectedFont = fonts[font.trim()];
  return selectedFont || null;
}
function getFontCollection(fonts, enableFallback = true, placeholderFont = null, sortFonts = true, allowSystemFonts = true, allowFontFace = true) {
  const object = {
    nested: {},
    flat: {}
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
    if (result.cssFile && !allowFontFace || !result.cssFile && !allowSystemFonts) {
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
        Object.entries(object.nested[type]).sort(([, a], [, b]) => a.label.localeCompare(b.label))
      );
      object.flat = { ...object.flat, ...object.nested[type] };
    }
    for (const font in object.flat) {
      object.flat[font].index = index;
      index++;
    }
  }
  return object;
}
function beautifyFontOutput(string) {
  if (!string || typeof string !== "string") {
    return "";
  }
  return string.replaceAll("'", "").replaceAll('"', "").replaceAll(",", ", ").replaceAll("  ", " ").trim();
}
function injectStylesheet(file) {
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
function getFilePath(file) {
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
    fontWeight: item?.display?.fontWeight || fontWeight
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

export {
  FontFamilyPreview_default,
  RadioButton,
  getFontWeightConfig,
  getFontWeight,
  getFontBasedOnValue,
  getFontCollection,
  beautifyFontOutput,
  injectStylesheet,
  getFilePath
};
//# sourceMappingURL=chunk-YNEHBYDQ.js.map
