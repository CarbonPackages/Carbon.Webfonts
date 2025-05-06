import {
  __commonJS,
  __toESM,
  init_readFromConsumerApi,
  readFromConsumerApi,
  require_neos_ui_decorators
} from "./chunk-SGH3THWK.js";

// node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.11/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js
var require_react_ui_components = __commonJS({
  "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.11/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js"(exports, module) {
    init_readFromConsumerApi();
    module.exports = readFromConsumerApi("NeosProjectPackages")().ReactUiComponents;
  }
});

// Resources/Private/Editor/Component/injectNeosProps.js
var import_neos_ui_decorators = __toESM(require_neos_ui_decorators(), 1);
function injectNeosProps(component, configKey) {
  const neosifier = (0, import_neos_ui_decorators.neos)((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    config: globalRegistry.get("frontendConfiguration").get(`Carbon.Webfonts.${configKey}`),
    carbonWebfonts: globalRegistry.get("frontendConfiguration").get("CarbonWebfonts")
  }));
  return neosifier(component);
}

export {
  require_react_ui_components,
  injectNeosProps
};
//# sourceMappingURL=chunk-RJFY352J.js.map
