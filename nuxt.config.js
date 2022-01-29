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
        "~assets/styles/colors.css",
        "~assets/styles/global.scss"
    ],
    plugins: [
        {
            src: "~plugins/tooltip.js",
            mode: "client"
        }
    ]
};