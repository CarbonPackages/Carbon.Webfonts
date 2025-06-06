var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.11/node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js
function readFromConsumerApi(key) {
  return (...args) => {
    if (window["@Neos:HostPluginAPI"] && window["@Neos:HostPluginAPI"][`@${key}`]) {
      return window["@Neos:HostPluginAPI"][`@${key}`](...args);
    }
    throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
  };
}
var init_readFromConsumerApi = __esm({
  "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.11/node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"() {
  }
});

// node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.11/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js
var require_react = __commonJS({
  "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.11/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js"(exports, module) {
    init_readFromConsumerApi();
    module.exports = readFromConsumerApi("vendor")().React;
  }
});

// node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.11/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js
var require_neos_ui_decorators = __commonJS({
  "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.11/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js"(exports, module) {
    init_readFromConsumerApi();
    module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiDecorators;
  }
});

// node_modules/.pnpm/@stylexjs+stylex@0.10.1/node_modules/@stylexjs/stylex/lib/es/stylex.mjs
var styleq = {};
var hasRequiredStyleq;
function requireStyleq() {
  if (hasRequiredStyleq) return styleq;
  hasRequiredStyleq = 1;
  Object.defineProperty(styleq, "__esModule", {
    value: true
  });
  styleq.styleq = void 0;
  var cache = /* @__PURE__ */ new WeakMap();
  var compiledKey = "$$css";
  function createStyleq(options) {
    var disableCache;
    var disableMix;
    var transform;
    if (options != null) {
      disableCache = options.disableCache === true;
      disableMix = options.disableMix === true;
      transform = options.transform;
    }
    return function styleq2() {
      var definedProperties = [];
      var className = "";
      var inlineStyle = null;
      var nextCache = disableCache ? null : cache;
      var styles = new Array(arguments.length);
      for (var i = 0; i < arguments.length; i++) {
        styles[i] = arguments[i];
      }
      while (styles.length > 0) {
        var possibleStyle = styles.pop();
        if (possibleStyle == null || possibleStyle === false) {
          continue;
        }
        if (Array.isArray(possibleStyle)) {
          for (var _i = 0; _i < possibleStyle.length; _i++) {
            styles.push(possibleStyle[_i]);
          }
          continue;
        }
        var style = transform != null ? transform(possibleStyle) : possibleStyle;
        if (style.$$css) {
          var classNameChunk = "";
          if (nextCache != null && nextCache.has(style)) {
            var cacheEntry = nextCache.get(style);
            if (cacheEntry != null) {
              classNameChunk = cacheEntry[0];
              definedProperties.push.apply(definedProperties, cacheEntry[1]);
              nextCache = cacheEntry[2];
            }
          } else {
            var definedPropertiesChunk = [];
            for (var prop in style) {
              var value = style[prop];
              if (prop === compiledKey) continue;
              if (typeof value === "string" || value === null) {
                if (!definedProperties.includes(prop)) {
                  definedProperties.push(prop);
                  if (nextCache != null) {
                    definedPropertiesChunk.push(prop);
                  }
                  if (typeof value === "string") {
                    classNameChunk += classNameChunk ? " " + value : value;
                  }
                }
              } else {
                console.error("styleq: ".concat(prop, " typeof ").concat(String(value), ' is not "string" or "null".'));
              }
            }
            if (nextCache != null) {
              var weakMap = /* @__PURE__ */ new WeakMap();
              nextCache.set(style, [classNameChunk, definedPropertiesChunk, weakMap]);
              nextCache = weakMap;
            }
          }
          if (classNameChunk) {
            className = className ? classNameChunk + " " + className : classNameChunk;
          }
        } else {
          if (disableMix) {
            if (inlineStyle == null) {
              inlineStyle = {};
            }
            inlineStyle = Object.assign({}, style, inlineStyle);
          } else {
            var subStyle = null;
            for (var _prop in style) {
              var _value = style[_prop];
              if (_value !== void 0) {
                if (!definedProperties.includes(_prop)) {
                  if (_value != null) {
                    if (inlineStyle == null) {
                      inlineStyle = {};
                    }
                    if (subStyle == null) {
                      subStyle = {};
                    }
                    subStyle[_prop] = _value;
                  }
                  definedProperties.push(_prop);
                  nextCache = null;
                }
              }
            }
            if (subStyle != null) {
              inlineStyle = Object.assign(subStyle, inlineStyle);
            }
          }
        }
      }
      var styleProps = [className, inlineStyle];
      return styleProps;
    };
  }
  var styleq$1 = createStyleq();
  styleq.styleq = styleq$1;
  styleq$1.factory = createStyleq;
  return styleq;
}
var styleqExports = /* @__PURE__ */ requireStyleq();
var errorForFn = (name) => new Error(`'stylex.${name}' should never be called at runtime. It should be compiled away by '@stylexjs/babel-plugin'`);
var errorForType = (key) => errorForFn(`types.${key}`);
function props() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }
  const [className, style] = styleqExports.styleq(styles);
  const result = {};
  if (className != null && className !== "") {
    result.className = className;
  }
  if (style != null && Object.keys(style).length > 0) {
    result.style = style;
  }
  return result;
}
function attrs() {
  const {
    className,
    style
  } = props(...arguments);
  const result = {};
  if (className != null && className !== "") {
    result.class = className;
  }
  if (style != null && Object.keys(style).length > 0) {
    result.style = Object.keys(style).map((key) => `${key}:${style[key]};`).join("");
  }
  return result;
}
function stylexCreate(_styles) {
  throw errorForFn("create");
}
function stylexDefineVars(_styles) {
  throw errorForFn("defineVars");
}
var stylexCreateTheme = (_baseTokens, _overrides) => {
  throw errorForFn("createTheme");
};
var stylexInclude = (_styles) => {
  throw errorForFn("include");
};
var create = stylexCreate;
var defineVars = stylexDefineVars;
var createTheme = stylexCreateTheme;
var include = stylexInclude;
var types = {
  angle: (_v) => {
    throw errorForType("angle");
  },
  color: (_v) => {
    throw errorForType("color");
  },
  url: (_v) => {
    throw errorForType("url");
  },
  image: (_v) => {
    throw errorForType("image");
  },
  integer: (_v) => {
    throw errorForType("integer");
  },
  lengthPercentage: (_v) => {
    throw errorForType("lengthPercentage");
  },
  length: (_v) => {
    throw errorForType("length");
  },
  percentage: (_v) => {
    throw errorForType("percentage");
  },
  number: (_v) => {
    throw errorForType("number");
  },
  resolution: (_v) => {
    throw errorForType("resolution");
  },
  time: (_v) => {
    throw errorForType("time");
  },
  transformFunction: (_v) => {
    throw errorForType("transformFunction");
  },
  transformList: (_v) => {
    throw errorForType("transformList");
  }
};
var keyframes = (_keyframes) => {
  throw errorForFn("keyframes");
};
var firstThatWorks = function() {
  throw errorForFn("firstThatWorks");
};
function _stylex() {
  for (var _len2 = arguments.length, styles = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    styles[_key2] = arguments[_key2];
  }
  const [className] = styleqExports.styleq(styles);
  return className;
}
_stylex.props = props;
_stylex.attrs = attrs;
_stylex.create = create;
_stylex.defineVars = defineVars;
_stylex.createTheme = createTheme;
_stylex.include = include;
_stylex.keyframes = keyframes;
_stylex.firstThatWorks = firstThatWorks;
_stylex.types = types;

export {
  __commonJS,
  __toESM,
  readFromConsumerApi,
  init_readFromConsumerApi,
  require_react,
  require_neos_ui_decorators,
  props
};
//# sourceMappingURL=chunk-SGH3THWK.js.map
