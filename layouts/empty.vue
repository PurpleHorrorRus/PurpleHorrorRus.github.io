<template>
    <div id="empty-layout" class="layout">
        <slot />
    </div>
</template>

<script setup>
</script>

<style lang="scss">
#empty-layout {
    overflow-x: hidden;
    overflow-y: auto;
}
</style>