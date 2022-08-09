<template>
    <div id="token-page">
        <Field v-if="type === 'token'" :name="'Access Token'" :value="value" />
        <Field v-else :name="'Code'" :value="value" />
    </div>
</template>

<script>
const tokenRegex = [
    /access_token=([^&]+)/
];

const codeRegex = /code=([^&]+)/;

export default {
    components: {
        Field: () => import("~/components/Token/Field")
    },

    layout: "empty",
    
    data: () => ({
        value: "",
        type: "token"
    }),

    created() {
        if (!process.client) {
            return false;
        }

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
        
        if (codeRegex.test(window.location.href)) {
            this.type = "code";
            this.value = window.location.href.match(codeRegex)[1];
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
}
</style>