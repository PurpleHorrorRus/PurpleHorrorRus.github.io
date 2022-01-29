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

<script setup>
import Header from "~/components/Meridius/Header";
import Description from "~/components/Meridius/Description";
import Feature from "~/components/Meridius/Feature";

import head from "~/assets/meta/meridius/head.json";
import features from "~/assets/meta/meridius/features.json";

export default {
    components: {
        Header,
        Description,
        Feature
    },
    head() {
        return head;
    },
    data: () => ({
        features
    }),
    computed: {
        featuresSplitted() { 
            return features.reduce((acc, e, i) => (i % 10 ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);
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
    height: max-content;

    padding-bottom: 20px;

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