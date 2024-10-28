<template>
    <div id="index-page" class="page shadow">
        <Projects />
        <ThemeSwitcher />
    </div>
</template>

<script>
import Projects from "~/components/General/Content/Projects";
import ThemeSwitcher from "~/components/General/ThemeSwitcher";

export default {
    components: {
        Projects,

        ThemeSwitcher
    },
    head() {
        return {
            title: "Главная"
        };
    }
};
</script>

<style lang="scss">
#index-page {
    grid-area: page;

    width: 100%;

    background: var(--backdrop);

    overflow-x: hidden;
    overflow-y: auto;
}
</style>