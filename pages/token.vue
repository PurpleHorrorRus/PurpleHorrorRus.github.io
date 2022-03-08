<template>
    <div id="token-page">
        <div id="token-page-container">
            <span id="token-page-container-label">
                Ваш Token находится в этом поле. Скопируйте его и вставьте в приложение.
            </span>
            
            <div id="token-page-container-field">
                <span id="token-page-container-field-token" v-text="token" />
                <SolidButton v-tooltip="tooltip" :disabled="copied" @click.native="copy">
                    <CopyIcon v-if="!copied" class="icon" />
                    <CheckIcon v-else class="icon" />
                </SolidButton>
            </div>
        </div>
    </div>
</template>

<script>
import SolidButton from "~/components/Buttons/SolidButton";

import CopyIcon from "~/assets/icons/token/copy.svg";
import CheckIcon from "~/assets/icons/token/check.svg";

const tokenRegex = [
    /access_token=([^&]+)/
];

export default {
    components: { 
        SolidButton,

        CopyIcon,
        CheckIcon
    },
    layout: "empty",
    data: () => ({
        token: "",
        copied: false
    }),
    computed: {
        tooltip() {
            return !this.copied 
                ? "Скопировать" 
                : "Скопировано";
        }
    },
    mounted() {
        for (const regex of tokenRegex) {
            if (regex.test(window.location.href)) {
                this.token = window.location.href.match(regex)[1];
                break;
            }

            if (regex.test(window.location.hash)) {
                this.token = window.location.hash.match(regex)[1];
                break;
            }
        }
    },
    methods: {
        async copy() {
            if (this.token.length > 0 && !this.copied) {
                navigator.clipboard.writeText(this.token);
                this.copied = true;
                
                setTimeout(() => {
                    this.copied = false;
                }, 4000);
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

        &-field {
            display: flex;
            align-items: center;
            column-gap: 10px;

            width: 100%;

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
}
</style>