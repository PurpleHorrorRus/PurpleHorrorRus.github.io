<template>
    <div id="information" class="shadow">
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

    display: grid;
    justify-self: flex-end;

    width: max-content;
    height: max-content;

    background: var(--backdrop);

    border-radius: 4px;

    @media screen and (min-width: 900px) {
        position: sticky;
        top: 20px;

        grid-template-columns: 220px !important;
    }

    @media screen and (max-width: 900px) {
        position: static;

        grid-template-columns: 1fr max-content;
        grid-template-rows: max-content max-content;
        grid-template-areas: "avatar links"
                            "bio bio";

        justify-self: flex-start;
        column-gap: 0px;
        row-gap: 0px;

        width: 100%;

        &-avatar {
            width: 100%;
            height: auto !important;
        }

        &-bio {
            align-self: center;
        }
    }

    @media screen and (min-width: 550px) and (max-width: 900px) {
        position: static;

        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: max-content;
        grid-template-areas: "avatar bio links";

        &-bio-links {
            justify-content: center;
        }
    }

    @media screen and (min-width: 0px) and (max-width: 400px), (min-width: 900px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 120px max-content max-content;
        grid-template-areas: "avatar"
                            "bio"
                            "links";

        &-avatar {
            width: auto !important;
            height: 100% !important;
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

        width: 80%;
        height: auto;

        max-width: 200px;

        padding: 5px;

        border-radius: 400px;
    }
}
</style>