import { neos } from "@neos-project/neos-ui-decorators";

export default function injectNeosProps(component, configKey) {
    const neosifier = neos((globalRegistry) => ({
        i18nRegistry: globalRegistry.get("i18n"),
        config: globalRegistry.get("frontendConfiguration").get(`Carbon.Webfonts.${configKey}`),
        carbonWebfonts: globalRegistry.get("frontendConfiguration").get("CarbonWebfonts"),
    }));
    return neosifier(component);
}
