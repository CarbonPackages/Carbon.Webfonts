import fs from "fs";
import path from "path";
import YAML from "yaml";
import additionalConfig from "./config.json" with { type: "json" };

const folder = "Resources/Public/";

const fontList = fs.readdirSync(folder);
const { fonts, fallbacks } = additionalConfig;
const settings = {};
const json = {};
let counter = 0;

for (const name in fonts) {
    setFontConfig({ name, ...fonts[name] });
}

for (const font of fontList) {
    const filepath = path.join(folder, font, "config.json");

    if (!fs.existsSync(filepath)) {
        continue;
    }

    setFontConfig(JSON.parse(fs.readFileSync(filepath, "utf8")));
}

const yamlContent = YAML.stringify(
    {
        Neos: {
            Neos: {
                Ui: {
                    frontendConfiguration: {
                        CarbonWebfonts: settings,
                    },
                },
            },
        },
    },
    {
        collectionStyle: "block",
        indent: 2,
        lineWidth: 0,
        defaultStringType: "PLAIN",
    },
);

fs.writeFileSync("Configuration/Settings.Fonts.yaml", yamlContent);
fs.writeFileSync(
    path.join(folder, "config.json"),
    JSON.stringify(json, null, 2),
);

console.log(`\nWrote ${counter} fonts to the settings file.\n`);

function setFontConfig({ name, group, cssFile, fontWeight, ...config }) {
    counter++;
    // Remove the font name from the fallback list
    const fallback = (config.fallback || fallbacks[group])
        .replace(`${name}`, "")
        .replaceAll('""', "")
        .replaceAll("''", "")
        .replaceAll(",,", ",");
    const fontSetting = {
        group,
        cssFile,
        fontWeight,
        fallback,
    };
    settings[name] = fontSetting;
    json[name] = { ...config, ...fontSetting };
}
