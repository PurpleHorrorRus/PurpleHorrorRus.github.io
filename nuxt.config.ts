import { defineNuxtConfig } from "nuxt3";

import svgLoader from "vite-svg-loader";

const svgo = svgLoader({
    svgoConfig: {
        plugins: ["removeDimensions"]
    },
    svgo: true
});

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    vite: {
        plugins: [svgo]
    },
    css: ["~/assets/styles/global.scss", "~/assets/styles/colors.css"]
});