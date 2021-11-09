<template>
    <div class="feature">
        <div class="feature-icon">
            <FontAwesomeIcon
                :icon="feature.icon"
                :style="{ color: feature.color || '#fff' }"
            />
        </div>
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
    display: grid;
    grid-template-columns: 40px 1fr;

    margin-bottom: 10px;

    font-size: 14pt;

    .feature-icon {
        svg {
            color: #fff;
        }
    }
}
</style>
