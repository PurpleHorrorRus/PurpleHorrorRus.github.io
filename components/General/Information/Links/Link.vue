<template>
    <a class="link clickable" :href="link.to">
        <Component
            v-if="link.icon"
            :is="link.icon"
            class="link-icon icon"
        />

        <span 
            class="link-label" 
            v-text="link.label" 
        />
    </a>
</template>

<script setup>
const props = defineProps({
    link: {
        type: Object,
        required: true
    }
});
</script>

<style lang="scss">
.link {
    display: flex;
    align-items: center;
    column-gap: 5px;

    width: max-content;

    &-icon {
        width: 24px;
    }

    &-label {
        color: var(--text);
        font-size: 16px;
    }
}
</style>