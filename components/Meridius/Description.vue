<template>
    <div id="meridius-description">
        <div id="meridius-description-logo">
            <img id="meridius-description-logo-icon" src="~/assets/images/meridius/icon.png" alt="Meridius icon">
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

<script setup>
import Download from "~/components/Meridius/Download";
import Contact from "~/components/Meridius/Contact";
</script>

<style lang="scss">
#meridius {
    display: flex;
    justify-content: center;

    background: #0f0f0f;

    &-description {
        display: flex;
        flex-direction: column;

        &-logo {
            display: flex;
            align-items: center;
            column-gap: 10px;

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
        }
    }
}
</style>
