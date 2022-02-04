<template>
    <div id="index-page" class="page">
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
    },
    mounted() {
        // alert("Внимание! На данный момент эта страница ещё не готова. Все картинки - временные и будут заменены со временем.");
    }
};
</script>

<style lang="scss">
#index-page {
    grid-area: page;

    width: 100%;

    background: var(--backdrop);

    box-shadow: 1px 1px 2px 0px #00000033;

    overflow-x: hidden;
    overflow-y: auto;
}
</style>