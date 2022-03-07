<template>
    <div id="token-page">
        <div id="token-page-container">
            <span id="token-page-container-label">
                Ваш Token находится в этом поле. Скопируйте его и вставьте в приложение.
            </span>
            
            <span id="token-page-container-token" v-text="token" />
        </div>
    </div>
</template>

<script>
const tokenRegex = [
    /access_token=(.*?)&/
];

export default {
    layout: "empty",
    data: () => ({
        token: ""
    }),
    mounted() {
        if (window.location.hash) {
            for (const regex of tokenRegex) {
                if (regex.test(window.location.hash)) {
                    this.token = window.location.hash.match(regex)[1];
                    break;
                }
            }
        }
    }
};
</script>

<style lang="scss">
#token-page {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background: var(--primary);

    &-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        row-gap: 10px;

        max-width: 400px;

        padding: 15px;

        background: #333333;
        border-radius: 4px;

        &-token {
            width: 100%;
            
            padding: 10px;

            background: var(--backdrop);
            border: 2px solid #ffffff;
            border-radius: 4px;

            user-select: text;
        }
    }
}
</style>