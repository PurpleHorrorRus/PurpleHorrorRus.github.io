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
    meta: {
        meta: [
            {
                charset: "utf-8",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }
        ],
        link: [
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com"
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@700&display=swap"
            }
        ]
    },
    plugins: [
        {
            mode: "client",
            src: "~/plugins/tooltip.js"
        }
    ],
    vite: {
        plugins: [svgo]
    },
    css: ["~/assets/styles/global.scss", "~/assets/styles/colors.css"]
});