<template>
    <div id="main-page-container-content-header">
        <div id="main-page-container-content-header-name">
            <span id="main-page-container-content-header-name-Infinite" v-text="'Infinite'" />
            <span id="main-page-container-content-header-name-Horror" v-text="'Horror'" />
        </div>
        <div id="main-page-container-content-header-welcome">
            <span id="main-page-container-content-header-welcome-text" v-text="'Welcome to the Page'" />
            <span id="main-page-container-content-header-welcome-wtc" v-text="wtc" />
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        wtc() {
            return "\"When They Cry...\"";
        }
    }
};
</script>

<style lang="scss">
@font-face {
    font-family: "Arisawa-Kaisho";
    src: url("~/assets/fonts/Arisawa-Kaisho.ttf");
}

#main-page-container-content-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    width: 100%;
    height: max-content;

    &-name {
        display: flex;
        justify-content: center;
        column-gap: 2vw;

        width: 50%;

        &-Infinite,
        &-Horror {
            font-family: "Arisawa-Kaisho";
            font-size: 6vw;
        }

        &-Infinite {
            letter-spacing: -1.3vw;
        }

        &-Horror {
            color: #ff0000;
            letter-spacing: -1vw;
        }
    }

    &-welcome {
        display: flex;

        justify-content: center;
        flex-wrap: wrap;

        margin-top: 10px;

        &-text,
        &-wtc {
            font-family: "Arisawa-Kaisho";
            font-size: 24pt;
            letter-spacing: -6px;
            font-weight: 300;

            width: 100%;

            text-align: center;
        }
    }
}
</style>
