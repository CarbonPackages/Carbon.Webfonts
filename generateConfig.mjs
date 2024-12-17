import fs from "fs";
import path from "path";
import YAML from "yaml";

const folder = "Resources/Public/";
const fontList = fs.readdirSync(folder);

const fallback = {
    Display: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    Handwriting: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    "Sans Serif": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    Serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
    Monospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
}
const settings = {};
const json = {}
let counter = 0;

for (const font of fontList) {
    const filepath = path.join(folder, font, "config.json");

    if (!fs.existsSync(filepath)) {
        continue;
    }
    counter++;
    const { name, ...config } = JSON.parse(fs.readFileSync(filepath, "utf8"));
    settings[name] = {
        group: config.group,
        cssFile: config.cssFile,
        fontWeight: config.fontWeight,
    };
    json[name] = config
}

const yamlContent = YAML.stringify(
    {
        Neos: {
            Neos: {
                Ui: {
                    frontendConfiguration: {
                        CarbonWebfonts: {
                            fallback,
                            fonts: settings,
                        },
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
fs.writeFileSync(path.join(folder, "config.json"), JSON.stringify(json, null, 2));

console.log(`\nWrote ${counter} fonts to the settings file.\n`);
