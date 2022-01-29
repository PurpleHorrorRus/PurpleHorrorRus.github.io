<template>
    <div id="default-layout" class="layout">
        <Information />
        <nuxt />
    </div>
</template>

<script>
import Information from "~/components/General/Information";

export default {
    components: {
        Information
    }
};
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

    height: max-content;

    padding: 20px 0px;

    background: url("~/assets/images/background.jpg");
    background-attachment: fixed;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto minmax(0px, 100%);
        grid-template-areas: "information"
                            "page";

        row-gap: 10px;
    }
}
</style>