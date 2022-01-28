<template>
    <div class="technology-category">
        <span class="technology-category-label" v-text="category.label" />
        <div class="technology-category-list">
            <Technology 
                v-for="technology of category.technologies"
                :key="technology.id"
                :technology="technology"
            />
        </div>
    </div>
</template>

<script setup>
import Technology from "~/components/General/Technology/Technology";

defineProps({
    category: {
        type: Object,
        required: true
    }
});
</script>

<style lang="scss">
.technology-category {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    padding: 10px;

    background: var(--backdrop);
    border-radius: 4px;

    &-label {
        font-size: 18px;
        font-weight: bold;
    }

    &-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        margin-top: 10px;
    }
}
</style>