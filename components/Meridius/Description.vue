<template>
    <div id="description">
        <div id="meridius-logo">
            <img id="meridius-icon" src="~/assets/meridius/icon.png" alt="Meridius icon">
            <h2 id="logo" v-text="'Meridius'" />
        </div>
        <h3
            id="description-text"
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
#meridius #description {
    display: inline-block;

    #meridius-logo {
        display: block;

        #meridius-icon {
            width: 40px;

            vertical-align: middle;
        }

        #logo {
            display: inline-block;

            font-family: "Fira Sans";
            font-size: 24pt;

            vertical-align: middle;
        }
    }

    &-text {
        display: block;

        max-width: 400px;

        margin-top: 10px;
    }

    #download-link {
        text-decoration: none;
    }
}
</style>
