<template>
    <div id="index-page" class="page shadow">
        <About />
        <Projects />
        <Stack />

        <ThemeSwitcher />
    </div>
</template>

<script>
import About from "~/components/General/Content/About";
import Projects from "~/components/General/Content/Projects";
import Stack from "~/components/General/Content/Stack";
import ThemeSwitcher from "~/components/General/ThemeSwitcher";

export default {
    components: {
        About,
        Projects,
        Stack,

        ThemeSwitcher
    },
    head() {
        return {
            title: "Никифоров Максим - Главная"
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