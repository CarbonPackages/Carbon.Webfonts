import esbuild from "esbuild";
import stylexPlugin from "@stylexjs/esbuild-plugin";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import YAML from "yaml";
import extensibilityMap from "@neos-project/neos-ui-extensibility/extensibilityMap.json" with { type: "json" };
import additionalConfig from "./config.json" with { type: "json" };

buildEditor();
generateFontSettings();

function generateFontSettings() {
    const folder = "Resources/Public/Fonts";
    const yamlFilename = "Configuration/Settings.Fonts.yaml";

    const fontList = fs.readdirSync(folder);
    const { fonts, fallbacks } = additionalConfig;
    const settings = {};
    const json = {};
    let counter = 0;

    const setFontConfig = ({ name, group, cssFile, fontWeight, ...config }) => {
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
    };

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

    fs.writeFileSync(yamlFilename, yamlContent);
    fs.writeFileSync(path.join(folder, "config.json"), JSON.stringify(json, null, 2));

    console.log(`\nWrote ${counter} fonts to the settings file.\n`);
}

function buildEditor() {
    const outdir = "Resources/Public/Editor";
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const watch = process.argv.includes("--watch");
    const dev = process.argv.includes("--dev");
    const minify = !dev && !watch;

    /** @type {import("esbuild").BuildOptions} */
    const options = {
        logLevel: "info",
        bundle: true,
        minify,
        sourcemap: watch,
        target: "es2020",
        legalComments: "none",
        entryPoints: ["Resources/Private/Editor/*.js", "Resources/Private/Editor/*.jsx"],
        outdir,
        external: ["/_Resources/Static/Packages/*"],
        alias: extensibilityMap,
        format: "esm",
        splitting: true,
        loader: {
            ".js": "jsx",
        },
        plugins: [
            stylexPlugin({
                classNamePrefix: "webfonts-",
                useCSSLayers: false,
                dev: false,
                generatedCSSFileName: path.resolve(__dirname, outdir, "Main.css"),
                stylexImports: ["@stylexjs/stylex"],
                unstable_moduleResolution: {
                    type: "commonJS",
                    rootDir: __dirname,
                },
            }),
        ],
    };

    if (minify) {
        options.drop = ["debugger"];
        options.pure = ["console.log"];
        options.dropLabels = ["DEV"];
    }

    if (watch) {
        esbuild.context(options).then((ctx) => ctx.watch());
    } else {
        esbuild.build(options);
    }
}
