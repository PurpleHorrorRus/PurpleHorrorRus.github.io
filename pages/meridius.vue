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
                >
            </div>
        </div>
        <div id="features">
            <div 
                v-for="(chunk, index) of featuresSplitted" 
                :key="index" 
                class="features-chunk"
            >
                <Feature
                    v-for="feature of chunk"
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

import meta from "~/assets/meridius/meta.json";
import features from "~/assets/meridius/features.json";

export default {
    components: {
        Header,
        Description,
        Feature
    },
    data: () => ({
        features
    }),
    head: {
        title: "Meridius - музыкальный плеер для ВКонтакте",
        meta,
        link: [
            { rel: "icon", type: "image/x-icon", href: "meridius_favicon.ico" },
            {
                rel: "canonical",
                href: "https://purplehorrorrus.github.io/meridius/"
            }
        ]
    },
    computed: {
        featuresSplitted() {
            return this.chunk(
                this.features,
                Math.floor(this.features.length / 2) + 1
            );
        }
    },
    methods: {
        chunk(arr, size) {
            return arr.reduce(
                (acc, e, i) => (
                    i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc
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

    #content {
        grid-area: content;

        background-color: #141413;

        #meridius {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;

            padding-top: 10px;

            #MeridiusScreenshot {
                width: 650px;

                padding: 50px;

                border-radius: 25px;

                vertical-align: middle;
            }
        }
    }

    @media screen and (max-width: 880px) {
        #features {
            justify-content: center;
            align-items: center;
            flex-direction: column;
            row-gap: 10px;

            .feature {
                width: 650px;
            }
        }
    }

    #features {
        grid-area: features;

        display: flex;
        justify-content: space-evenly;

        .features-chunk {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 10px;
        }
    }
}
</style>