<template>
    <div class="project">
        <a :href="project.to" class="clickable">
            <img
                :src="require(`~/assets/images/projects/${project.image}`)"
                class="project-image"
            />
        </a>
        <span
            class="project-description"
            :class="{ canExpand }"
            @click="expanded = !expanded"
            v-html="formattedDescription"
        />
    </div>
</template>

<script>
const maxLen = 200;

export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        expanded: false
    }),
    computed: {
        formattedDescription() {
            const formatted = this.project.description.replaceAll("\n", "<br />");
            
            return this.expanded
                ? formatted
                : formatted.substring(0, maxLen) + "...";
        },
        canExpand() {
            return this.project.description.length > maxLen;
        }
    }
};
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