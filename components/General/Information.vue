<template>
    <div id="information">
        <img src="~/assets/images/avatar.jpg" id="information-avatar">
        <Credits />
        <Links />
    </div>
</template>

<script setup>
import Credits from "~/components/General/Information/Credits";
import Links from "~/components/General/Information/Links";
</script>

<style lang="scss">
#information {
    grid-area: information;

    display: grid;
    grid-template-columns: 250px;
    grid-template-rows: 150px max-content;
    grid-template-areas: "avatar"
                        "bio"
                        "links";
    
    justify-self: flex-end;
    column-gap: 10px;
    row-gap: 10px;

    width: max-content;
    height: max-content;

    background: var(--backdrop);
    box-shadow: 1px 1px 2px 0px #00000033;

    border-radius: 4px;

    > div {
        padding: 10px;
    }

    &-avatar {
        grid-area: avatar;

        display: flex;
        justify-content: center;
        align-items: center;

        justify-self: center;
        align-self: center;

        height: 80%;

        border-radius: 400px;
    }
}
</style>