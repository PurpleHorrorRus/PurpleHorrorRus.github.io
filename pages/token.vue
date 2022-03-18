<template>
    <div id="token-page">
        <Field v-if="type === 'token'" :name="'Access Token'" :value="value" />
        <div v-else id="token-page-code">
            <Field :name="'Code'" :value="value.code" />
            <Field :name="'Refresh token'" :value="value.refresh_token" />
        </div>
    </div>
</template>

<script>
import Field from "~/components/Token/Field";

const tokenRegex = [
    /access_token=([^&]+)/
];

const codeRegex = {
    code: /code=([^&]+)/,
    refresh_token: /refresh_token=([^&]+)/
};

export default {
    components: {
        Field
    },

    layout: "empty",
    
    data: () => ({
        value: "",
        type: "token"
    }),

    created() {
        for (const regex of tokenRegex) {
            if (regex.test(window.location.href)) {
                this.value = window.location.href.match(regex)[1];
                return;
            }

            if (regex.test(window.location.hash)) {
                this.value = window.location.hash.match(regex)[1];
                return;
            }
        }
        
        const href = window.location.href;
        if (codeRegex.code.test(href)) {
            this.type = "code";
            this.value = { 
                code: href.match(codeRegex.code)[1], 
                refresh_token: href.match(codeRegex.refresh_token)[1]
            };
        }
    }
};
</script>

<style lang="scss">
#token-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100%;

    background: var(--primary);

    &-code {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        row-gap: 10px;
    }
}
</style>