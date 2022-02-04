<template>
    <div id="information">
        <img id="information-avatar" src="~/assets/images/avatar.jpg">
        <Credits />
        <Links />
    </div>
</template>

<script>
import Credits from "~/components/General/Information/Credits";
import Links from "~/components/General/Information/Links";

export default {
    components: {
        Credits,
        Links
    }
};
</script>

<style lang="scss">
#information {
    grid-area: information;

    position: sticky;
    top: 20px;

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

    @media screen and (max-width: 900px) {
        position: static;

        grid-template-columns: 1fr 1fr;
        grid-template-rows: max-content max-content;
        grid-template-areas: "avatar links"
                            "bio bio";

        justify-self: flex-start;
        row-gap: 10px;

        width: 100%;

        &-avatar {
            width: 80%;
            height: auto !important;
        }

        &-bio {
            align-self: center;
        }
    }

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