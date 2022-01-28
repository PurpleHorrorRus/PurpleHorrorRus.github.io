<template>
    <NuxtPage />
</template>

<style lang="scss">
html {
    * {
        box-sizing: border-box;
    }
}

html, body, #__nuxt, #layout {
    position: absolute;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;

    margin: 0;
}

#__nuxt {
    background: var(--primary);
}
</style>