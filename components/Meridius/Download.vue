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
import WindowsIcon from "~/assets/icons/Windows.svg";
import LinuxIcon from "~/assets/icons/Linux.svg";

export default {
    components: {
        WindowsIcon,
        LinuxIcon
    },
    data: () => ({
        version: "2.2.4"
    }),
    methods: {
        link(ext) {
            // eslint-disable-next-line max-len
            return `https://github.com/PurpleHorrorRus/Meridius/releases/download/v${this.version}/meridius-${this.version}.${ext}`;
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