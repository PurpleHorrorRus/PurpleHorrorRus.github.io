<template>
    <div id="default-layout" class="layout">
        <nuxt />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#default-layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content;
    grid-template-areas: "information page"
                    "information page";

    justify-content: center;
    column-gap: 15px;

    height: max-content;

    padding: 20px 0px;

    background-color: var(--primary);

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto minmax(0px, 100%);
        grid-template-areas: "information"
                            "page";

        row-gap: 10px;

        padding: 0px;
    }
}
</style>