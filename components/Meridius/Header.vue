<template>
    <div id="header">
        <h1 id="logo" v-text="'Meridius'" />
        <span id="description" v-text="'Музыкальный плеер для ВКонтакте'" />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#header {
    grid-area: header;
    padding: 10px;

    #logo {
        font-family: "Fira Sans";
        font-size: 24pt;
    }

    #description {
        display: block;

        color: #7e7e7e;
        font-size: 10pt;
    }
}
</style>
