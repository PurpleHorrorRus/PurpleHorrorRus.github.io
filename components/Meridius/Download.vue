<template>
    <div id="download-icons">
        <span id="download-icons-label" v-text="'Скачать: '" />
        <a :href="link('exe')">
            <font-awesome-icon
                id="download-icons-windows"
                :icon="['fab', 'windows']"
            />
        </a>

        <a :href="link('deb')">
            <font-awesome-icon
                id="download-icons-linux"
                :icon="['fab', 'linux']"
            />
        </a>
    </div>
</template>

<script>
export default {
    data: () => ({
        version: "2.2.1"
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

    margin: 10px;
    gap: 10px;

    svg {
        font-size: 24pt;

        color: #6d6d6d;

        &:hover {
            cursor: pointer;
        }
    }

    &-windows {
        &:hover {
            color: #4789be;
        }
    }

    &-linux {
        &:hover {
            color: #fff;
        }
    }
}
</style>
