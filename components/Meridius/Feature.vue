<template>
    <div class="feature">
        <Component
            :is="feature.icon"
            class="feature-icon"
            :style="feature.style || {}"
        />
        <span class="feature-label" v-text="feature.text" />
    </div>
</template>

<script setup>
defineProps({
    feature: {
        type: Object,
        required: true,
    }
});
</script>

<style lang="scss">
.feature {
    display: flex;
    align-items: center;
    column-gap: 10px;

    &-icon {
        width: 26px;

        fill: #fff;
    }

    &-text {
        font-size: 18px;
    }
}
</style>