<template>
    <div id="default-layout" class="layout">
        <Information />
        <slot />
    </div>
</template>

<script setup>
import Information from "~/components/General/Information";
</script>

<style lang="scss">
#default-layout {
    display: grid;
    grid-template-columns: 20% 60%;
    grid-template-rows: max-content max-content;
    grid-template-areas: "information page"
                    "information page";

    justify-content: center;
    column-gap: 15px;

    padding: 20px 0px;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto minmax(0px, 100%);
        grid-template-areas: "information"
                            "page";

        row-gap: 10px;
    }
}
</style>