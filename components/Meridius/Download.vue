<template>
    <div id="download-icons">
        <span id="download-icons-label" v-text="'Скачать: '" />
        <a :href="link('exe')">
            <WindowsIcon id="download-icons-windows" class="icon" />
        </a>

        <a :href="link('deb')">
            <LinuxIcon id="download-icons-linux" class="icon" />
        </a>
    </div>
</template>

<script>
import WindowsIcon from "~/assets/icons/windows.svg";
import LinuxIcon from "~/assets/icons/linux.svg";

const version = "2.2.9";

export default {
    components: {
        WindowsIcon,
        LinuxIcon
    },
    methods: {
        link(ext) {
            // eslint-disable-next-line max-len
            return `https://github.com/PurpleHorrorRus/Meridius/releases/download/v${version}/meridius-${version}.${ext}`;
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