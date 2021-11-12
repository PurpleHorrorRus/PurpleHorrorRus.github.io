<template>
    <div id="contact">
        <span id="contact-label" v-text="'Обратная связь с разработчиком:'" />
        <a href="https://vk.com/id529592613">
            <font-awesome-icon id="vk-icon" :icon="['fab', 'vk']" />
        </a>
        <a href="https://github.com/PurpleHorrorRus">
            <font-awesome-icon id="github-icon" :icon="['fab', 'github']" />
        </a>
        <a href="https://twitch.tv/infinitehorror">
            <font-awesome-icon id="twitch-icon" :icon="['fab', 'twitch']" />
        </a>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#contact {
    margin-top: 10px;

    * {
        user-select: none;
    }

    span,
    a,
    svg {
        font-size: 10pt;
        color: #6d6d6d;
    }

    svg {
        margin-right: 5px;

        font-size: 12pt;

        vertical-align: middle;

        &:hover {
            cursor: pointer;
        }

        &#vk-icon {
            &:hover {
                color: rgb(117, 117, 252);
            }
        }

        &#github-icon {
            &:hover {
                color: #fff;
            }
        }

        &#twitch-icon {
            &:hover {
                color: #6441a5;
            }
        }
    }
}
</style>
