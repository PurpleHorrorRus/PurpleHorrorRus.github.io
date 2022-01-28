<template>
    <div id="header">
        <h1 id="logo" v-text="'Meridius'" />
    </div>
</template>

<script setup>
</script>

<style lang="scss">
#header {
    grid-area: header;
    
    display: flex;
    flex-direction: column;

    padding: 0px 10px;

    background: #161616;

    #logo {
        font-family: "Fira Sans";
        font-size: 24pt;
    }

    #description {
        color: #7e7e7e;
        font-size: 10pt;
    }
}
</style>
