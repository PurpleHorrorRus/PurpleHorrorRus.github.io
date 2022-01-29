<template>
    <div id="contact">
        <span id="contact-label" v-text="'Обратная связь с разработчиком:'" />
        <a href="https://vk.com/id529592613">
            <VKIcon id="vk-icon" class="icon" />
        </a>
        <a href="https://github.com/PurpleHorrorRus">
            <GithubIcon id="github-icon" class="icon" />
        </a>
    </div>
</template>

<script>
import VKIcon from "~/assets/icons/vk.svg";
import GithubIcon from "~/assets/icons/github.svg";

export default {
    components: {
        VKIcon,
        GithubIcon
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

        &#vk-icon {
            &:hover {
                fill: #0077FF;
            }
        }

        &#github-icon {
            &:hover {
                fill: #ffffff;
            }
        }

        &#twitch-icon {
            &:hover {
                fill: #6441a5;
            }
        }
    }
}
</style>