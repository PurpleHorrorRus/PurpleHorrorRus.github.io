<template>
    <div class="technology" :style="technologyStyle" v-tooltip:right="technology.tooltip || false">
        <img :src="technology.image" class="technology-image">
        <span class="technology-name" v-text="technology.name" />
    </div>
</template>

<script setup>
const props = defineProps({
    technology: {
        type: Object,
        required: true
    }
});

const technologyStyle = computed(() => {
    return {
        backgroundColor: `${props.technology.color}40`,
        border: `1px solid ${props.technology.color}`
    };
});
</script>

<style lang="scss">
.technology {
    display: flex;
    align-items: center;
    align-content: center;
    column-gap: 10px;

    width: max-content;
    height: 40px;

    padding: 10px;

    border-radius: 4px;
    
    cursor: default;

    &-image {
        height: 16px;
    }

    &-name {
        color: #ffffff;
        font-size: 16px;
    }
}
</style>