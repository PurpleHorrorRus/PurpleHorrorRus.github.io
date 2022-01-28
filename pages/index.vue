<template>
    <div id="index-page" class="page">

    </div>
</template>

<script setup>
definePageMeta({
    layout: "default",
    title: "Test"
});
</script>

<style lang="scss">
#index-page {
    grid-area: page;

    width: 100%;

    background: var(--backdrop);

    box-shadow: 1px 1px 2px 0px #00000033;
}
</style>