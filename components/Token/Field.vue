<template>
    <div class="token-page-field">
        <span class="token-page-field-name" v-text="name" />

        <div class="token-page-field-container">
            <span class="token-page-field-container-value" v-text="value" />
            <SolidButton
                v-tooltip="tooltip"
                :disabled="copied"
                @click.native="copy"
            >
                <CopyIcon v-if="!copied" class="icon" />
                <CheckIcon v-else class="icon" />
            </SolidButton>
        </div>
    </div>
</template>

<script>
import SolidButton from "~/components/Buttons/SolidButton";

import CopyIcon from "~/assets/icons/token/copy.svg";
import CheckIcon from "~/assets/icons/token/check.svg";

export default {
    components: {
        SolidButton,

        CopyIcon,
        CheckIcon
    },

    props: {
        name: {
            type: String,
            required: true
        },

        value: {
            type: String,
            required: false,
            default: ""
        }
    },

    data: () => ({
        copied: false
    }),

    computed: {
        tooltip() {
            return !this.copied 
                ? "Скопировать" 
                : "Скопировано";
        }
    },

    methods: {
        copy() {
            if (this.value.length === 0 || this.copied) {
                return;
            }

            navigator.clipboard.writeText(this.value);
            this.copied = true;

            setTimeout(() => {
                this.copied = false;
            }, 4000);
        }
    }
};
</script>

<style lang="scss">
.token-page-field {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    row-gap: 10px;

    width: 400px;

    padding: 15px;

    background: #333333;
    border-radius: 4px;

    &-container {
        display: flex;
        align-items: center;
        column-gap: 10px;

        width: 100%;

        &-value {
            width: 100%;

            padding: 10px;

            background: var(--backdrop);
            border: 2px solid #ffffff;
            border-radius: 4px;

            user-select: text;
        }
    }
}
</style>