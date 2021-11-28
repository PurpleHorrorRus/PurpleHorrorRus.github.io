// eslint-disable-next-line no-undef
module.exports = {
    ssr: false,
    target: "static",
    telemetry: false,
    router: {
        base: "/"
    },
    head: {
        htmlAttrs: {
            lang: "ru"
        },
        title: "InfiniteHorror",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "Meridius - музыкальный плеер для ВКонтакте" },
            { 
                hid: "keywords", 
                name: "keywords", 
                content: "Meridius, Music player, VK, vk.com, ВКонтакте, \
                    музыкальный плеер для ВК, музыкальный плеер для ВКонтакте, музыкальный плеер для ВК" 
            }
        ],
        link: [
            { 
                rel: "icon", type: "image/x-icon", 
                href: "/favicon.ico" 
            },
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
    buildModules: [
        "@nuxtjs/google-analytics"
    ],
    googleAnalytics: {
        id: "UA-157148734-2",
        debug: {
            enabled: false,
            sendHitTask: true
        }
    },
    modules: [
        "@nuxtjs/sitemap"
    ],
    sitemap: {
        hostname: "https://purplehorrorrus.github.io",
        routes: [
            {
                url: "/meridius/",
                changefreq: "daily",
                priority: 1,
                lastmod: new Date()
            }
        ]
    }
};