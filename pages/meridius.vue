<template>
    <div id="container">
        <Header />
        <div id="content">
            <div id="meridius">
                <Description />
                <img
                    id="MeridiusScreenshot"
                    src="https://raw.githubusercontent.com/PurpleHorrorRus/Meridius/master/screenshots/0.png"
                    alt="Meridius screenshot"
                />
            </div>
        </div>
        <div id="features">
            <div
                v-for="(featuresChunk, index) of featuresSplitted"
                :key="index"
                class="features-chunk"
            >
                <Feature
                    v-for="feature of featuresChunk"
                    :key="feature.text"
                    :feature="feature"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Header from "~/components/Meridius/Header";
import Description from "~/components/Meridius/Description";
import Feature from "~/components/Meridius/Feature";

import features from "~/assets/meta/meridius/features.json";

export default {
    components: {
        Header,
        Description,
        Feature
    },
    layout: "empty",
    data: () => ({
        features
    }),
    head: {
        title: "Meridius - музыкальный плеер для ВКонтакте",
        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: "meridius_favicon.ico"
            },
            {
                rel: "canonical",
                href: "https://purplehorrorrus.github.io/meridius"
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@700&display=swap"
            }
        ],
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Meridius - музыкальный плеер для ВКонтакте"
            },
            {
                hid: "keywords",
                name: "keywords",
                // eslint-disable-next-line max-len
                content: "Meridius, Music player, VK, vk.com, ВКонтакте, музыкальный плеер для ВК, музыкальный плеер для ВКонтакте, музыкальный плеер для ВК"
            }
        ]
    },
    computed: {
        featuresSplitted() {
            return features.reduce(
                (acc, e, i) => (
                    i % 10 ? acc[acc.length - 1].push(e) : acc.push([e]), acc
                ),
                []
            );
        }
    }
};
</script>

<style lang="scss">
#container {
    position: absolute;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px auto auto;
    grid-template-areas: "header" "content" "features";

    left: 0px;
    top: 0px;

    width: 100%;
    height: 100%;

    padding-bottom: 20px;

    background: var(--primary);

    overflow-x: hidden;
    overflow-y: auto;

    #content {
        grid-area: content;

        display: flex;
        justify-content: center;

        background-color: #141413;

        #meridius {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;

            width: 100%;

            padding-bottom: 10px;

            background: #0f0f0f0f;

            #MeridiusScreenshot {
                width: 40%;

                border-radius: 8px;

                @media screen and (orientation: portrait) {
                    width: 90vw;
                }
            }
        }
    }

    @media screen and (orientation: portrait) {
        #features {
            flex-direction: column;
            row-gap: 10px;

            padding: 10px;
        }
    }

    #features {
        grid-area: features;

        display: flex;
        justify-content: space-evenly;

        margin-top: 10px;

        .features-chunk {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 10px;
        }
    }
}
</style>