<template>
    <div id="index-page" class="page">
        <About />
        <Projects />
        <Stack />
    </div>
</template>

<script>
import About from "~/components/General/Content/About";
import Projects from "~/components/General/Content/Projects";
import Stack from "~/components/General/Content/Stack";

export default {
    components: {
        About,
        Projects,
        Stack
    }
};
</script>

<style lang="scss">
#index-page {
    grid-area: page;

    width: 100%;

    background: var(--backdrop);

    box-shadow: 1px 1px 2px 0px #00000033;
}
</style>