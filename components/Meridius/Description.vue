<template>
    <div id="meridius-description">
        <div id="meridius-description-logo">
            <img
                id="meridius-description-logo-icon"
                src="~/assets/images/meridius/icon.png"
                alt="Meridius icon"
            />
            <h2 id="meridius-description-logo-text" v-text="'Meridius'" />
        </div>
        <h3
            id="meridius-description-text"
            v-text="
                'Современный, красивый, многофункциональный \
                    и бесплатный музыкальный плеер для социальной сети ВКонтакте'
            "
        />

        <Download />
        <Contact />
    </div>
</template>

<script>
import Download from "~/components/Meridius/Download";
import Contact from "~/components/Meridius/Contact";

export default {
    components: {
        Download,
        Contact
    }
};
</script>

<style lang="scss">
#meridius-description {
    display: flex;
    flex-direction: column;

    @media screen and (orientation: portrait) {
        padding: 10px;
    }

    &-logo {
        display: flex;
        align-items: center;
        column-gap: 10px;

        @media screen and (max-width: 900px) {
            justify-content: center;
        }

        &-icon {
            height: 40px;
        }

        &-text {
            font-family: "Fira Sans";
            font-size: 30px;
        }
    }

    &-text {
        width: 400px;

        font-weight: 400;

        @media screen and (max-width: 900px) {
            width: auto;
        }
    }
}
</style>