// eslint-disable-next-line no-undef
module.exports = {
    ssr: true,
    target: "static",
    telemetry: false,
    router: {
        base: "/"
    },
    head: {
        htmlAttrs: {
            lang: "ru"
        },
        link: [
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com"
            },

            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            }
        ],
        meta: [
            {
                charset: "utf-8"
            },

            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }
        ]
    },
    build: {
        extend(config) {
            config.module.rules.find(rule => rule.test.test(".svg")).test = /\.(png|jpe?g|gif|webp)$/;
            config.module.rules.push({
                test: /\.svg$/,
                use: [
                    "babel-loader",
                    {
                        loader: "vue-svg-loader",
                        options: {
                            svgo: {
                                plugins: [{ removeDimensions: true }, { removeViewBox: false }]
                            }
                        }
                    }
                ]
            });
        }
    },
    css: [
        "~assets/styles/global.scss",

        "~assets/styles/themes/dark.css",
        "~assets/styles/themes/light.css"
    ],
    plugins: [
        {
            src: "~plugins/tooltip.js",
            mode: "client"
        }
    ],
    modules: [
        "@nuxtjs/sitemap"
    ],
    buildModules: [
        "@nuxtjs/color-mode"
    ],
    sitemap: {
        hostname: "https://purplehorrorrus.github.io",
        trailingSlash: true,
        routes: [
            {
                url: "/meridius",
                changefreq: "daily",
                priority: 1,
                lastmod: new Date()
            }
        ]
    },
    colorMode: {
        preference: "dark",
        fallback: "light",
        hid: "nuxt-color-mode-script",
        globalName: "__NUXT_COLOR_MODE__",
        componentName: "ColorScheme",
        classPrefix: "",
        classSuffix: "-mode",
        storageKey: "nuxt-theme"
    }
};