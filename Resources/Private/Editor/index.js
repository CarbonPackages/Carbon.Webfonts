import manifest from "@neos-project/neos-ui-extensibility";
import React, { Suspense, lazy } from "react";
import LoadingAnimation from "carbon-neos-loadinganimation/LoadingWithStyleX";

const editors = {
    FontFamily: () => import("./FontFamily"),
};

function generateLazyEditor(name) {
    const LazyEditor = lazy(editors[name]);
    return (props) => (
        <Suspense fallback={<LoadingAnimation isLoading={true} />}>
            <LazyEditor {...props} />
        </Suspense>
    );
}

const keys = Object.keys(editors);
const loaded = keys.map((key) => generateLazyEditor(key));

manifest("Carbon.Webfonts:Editors", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");

    keys.forEach((key, index) => {
        editorsRegistry.set(`Carbon.Webfonts/${key}`, {
            component: loaded[index],
        });
    });
});
