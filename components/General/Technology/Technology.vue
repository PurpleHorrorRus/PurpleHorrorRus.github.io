<template>
    <div
        v-tooltip="technology.tooltip || false"
        class="technology"
        :style="technologyStyle"
    >
        <img
            :src="require(`~/assets/images/stack/${technology.image}`)"
            class="technology-image"
        />
        <span class="technology-name" v-text="technology.name" />
    </div>
</template>

<script>
export default {
    props: {
        technology: {
            type: Object,
            required: true
        }
    },
    computed: {
        technologyStyle() {
            return {
                backgroundColor: `${this.technology.color}40`,
                border: `1px solid ${this.technology.color}`
            };
        }
    }
};
</script>

<style lang="scss">
.technology {
    display: flex;
    align-items: center;
    align-content: center;
    column-gap: 5px;

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

        @media screen and (max-width: 900px) {
            font-size: 12px;
        }
    }
}
</style>