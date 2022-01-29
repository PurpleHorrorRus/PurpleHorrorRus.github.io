<template>
    <div class="feature">
        <Component
            :is="require(`~/assets/icons/meridius/${feature.icon}`)"
            class="feature-icon"
            :style="feature.style || {}"
        />
        <span class="feature-label" v-text="feature.text" />
    </div>
</template>

<script>
export default {
    props: {
        feature: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss">
.feature {
    display: flex;
    align-items: center;
    column-gap: 10px;

    &-icon {
        width: 26px;

        fill: #ffffff;
    }

    &-label {
        color: #ffffff;
        font-size: 16px;
    }
}
</style>