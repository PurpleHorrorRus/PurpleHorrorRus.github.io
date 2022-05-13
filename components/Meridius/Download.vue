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
const version = "2.4.13";

export default {
    components: {
        WindowsIcon: () => import("~/assets/icons/windows.svg"),
        LinuxIcon: () => import("~/assets/icons/linux.svg")
    },

    computed: {
        links() {
            return {
                // eslint-disable-next-line max-len
                windows: `https://github.com/PurpleHorrorRus/Meridius/releases/download/v${version}/meridius-${version}.exe`,
                flathub: "https://flathub.org/apps/details/io.github.purplehorrorrus.Meridius"
            };
        }
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