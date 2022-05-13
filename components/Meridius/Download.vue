<template>
    <div id="download-icons">
        <span id="download-icons-label" v-text="'Скачать: '" />
        <a :href="links.windows">
            <WindowsIcon id="download-icons-windows" class="icon" />
        </a>

        <a :href="links.flathub">
            <LinuxIcon id="download-icons-linux" class="icon" />
        </a>
    </div>
</template>

<script>
const tagsLink = "https://api.github.com/repos/PurpleHorrorRus/Meridius/tags";

export default {
    components: {
        WindowsIcon: () => import("~/assets/icons/windows.svg"),
        LinuxIcon: () => import("~/assets/icons/linux.svg")
    },

    data: () => ({
        version: "0.0.0"
    }),

    computed: {
        links() {
            return {
                // eslint-disable-next-line max-len
                windows: `https://github.com/PurpleHorrorRus/Meridius/releases/download/v${this.version}/meridius-${this.version}.exe`,
                flathub: "https://flathub.org/apps/details/io.github.purplehorrorrus.Meridius"
            };
        }
    },

    async created() {
        const response = await fetch(tagsLink);
        const tags = await response.json();
        this.version = tags[0].name.replace("v", "");
    }
};
</script>

<style lang="scss">
#download-icons {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 10px;

    margin: 10px;

    .icon {
        width: 36px;

        fill: #6d6d6d;

        &:hover {
            cursor: pointer;
        }
    }

    &-windows {
        &:hover {
            fill: #4789be;
        }
    }

    &-linux {
        &:hover {
            fill: #ffffff;
        }
    }
}
</style>