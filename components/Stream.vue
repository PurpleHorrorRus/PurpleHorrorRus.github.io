<template>
    <div id="main-page-container-content-stream">
        <a
            id="main-page-container-content-stream-title"
            class="category"
            href="https://twitch.tv/InfiniteHorror/"
        >
            <span
                id="main-page-container-content-stream-title-text"
                class="category-text"
                v-text="'Мои игровые стримы:'"
            />
        </a>

        <div id="twitch-embed" />
    </div>
</template>

<script>
export default {
    head: () => ({
        script: [
            {
                src: "https://player.twitch.tv/js/embed/v1.js",
                defer: true,
                callback: () => {
                    new Twitch.Player("twitch-embed", {
                        channel: "infinitehorror",
                        width: "100%",
                        height: 530
                    });
                }
            }
        ]
    })
};
</script>

<style lang="scss">
#main-page-container-content-stream {
    display: grid;

    padding: 20px;
}
</style>
