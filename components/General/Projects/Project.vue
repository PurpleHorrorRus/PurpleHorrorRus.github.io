<template>
    <div class="project">
        <a :href="project.to" class="clickable">
            <img :src="project.image" class="project-image" />
        </a>
        <span
            class="project-description"
            :class="{ canExpand }"
            v-html="formattedDescription"
            @click="expanded = !expanded"
        />
    </div>
</template>

<script setup>
const props = defineProps({
    project: {
        type: Object,
        required: true,
    }
});

const maxLen = 200;
const expanded = ref(false);

const formattedDescription = computed(() => {
    const formatted = props.project.description.replaceAll("\n", "<br />");
    return expanded.value ? formatted : formatted.substring(0, maxLen) + "...";
});

const canExpand = computed(() => props.project.description.length > maxLen);
</script>

<style lang="scss">
.project {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    
    width: 50%;
    height: max-content;

    @media screen and (max-width: 900px) {
        width: 48%;
    }

    &-image {
        width: 100%;

        border-radius: 4px;
    }

    &-description {
        height: max-content;

        padding: 10px;

        background: var(--backdrop);
        border-radius: 4px;

        &.canExpand {
            cursor: pointer;
        }
    }
}
</style>