<template>
    <div id="contact">
        <span id="contact-label" v-text="'Чат поддержки:'" />
        <a href="https://discord.gg/R6gKtbnEVj">
            <DiscordIcon id="discord-icon" class="icon" />
        </a>
    </div>
</template>

<script>
export default {
    components: {
        DiscordIcon: () => import("~/assets/icons/meridius/discord.svg")
    }
};
</script>

<style lang="scss">
#contact {
    display: flex;
    align-items: center;
    column-gap: 10px;
    
    margin-top: 10px;

    * {
        user-select: none;
    }

    &-label {
        color: #6d6d6d;
        font-size: 12px;
    }

    .icon {
        width: 24px;

        fill: #6d6d6d;

        &:hover {
            cursor: pointer;
        }

        &#discord-icon {
            path {
                fill: #6d6d6d;
            }

            &:hover path {
                fill: #5865F2;
            }
        }
    }
}
</style>