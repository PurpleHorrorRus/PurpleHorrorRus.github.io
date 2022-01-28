<template>
    <div id="information-bio-links">
        <span id="information-bio-links-label" v-text="'Контакты:'" />
        <Link 
            v-for="link of links"
            :key="link.id"
            :link="link"
        />
    </div>
</template>

<script setup>
import Link from "~/components/General/Information/Links/Link";

const links = shallowRef([
    {
        id: "github",
        icon: defineAsyncComponent(() => import("~/assets/icons/github.svg")),
        label: "GitHub",
        to: "https://github.com/PurpleHorrorRus"
    },
    {
        id: "telegram",
        icon: defineAsyncComponent(() => import("~/assets/icons/telegram.svg")),
        label: "Telegram",
        to: "https://t.me/InfiniteHorror"
    }
]);
</script>

<style lang="scss">
#information-bio-links {
    grid-area: "links";

    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
</style>