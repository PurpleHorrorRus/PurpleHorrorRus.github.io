<template>
    <div
        id="theme-switcher"
        class="clickable shadow"
        @click="switchTheme"
    >
        <SunIcon v-if="!isDarkTheme" class="icon" />
        <MoonIcon v-else class="icon" />
    </div>
</template>

<script>
import SunIcon from "~/assets/icons/sun.svg";
import MoonIcon from "~/assets/icons/moon.svg";

export default {
    components: {
        SunIcon,
        MoonIcon
    },
    computed: {
        isDarkTheme() {
            return this.$colorMode.preference === "dark";
        }
    },
    methods: {
        switchTheme() {
            this.$colorMode.preference = this.isDarkTheme ? "light" : "dark";
        }
    }
};
</script>

<style lang="scss">
#theme-switcher {
    position: fixed;
    bottom: 20px;
    right: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;

    background: var(--secondary);
    border-radius: 200px;

    .icon {
        width: 36px;

        fill: #fff;
    }
}
</style>