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

import links from "~/assets/meta/links.json";

export default {
    components: {
        Link
    },
    data: () => ({
        links: links.map(link => {
            return {
                ...link,
                icon: () => import(`~/assets/icons/${link.icon}`)
            };
        })
    })
};
</script>

<style lang="scss">
#information-bio-links {
    grid-area: "links";

    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
</style>