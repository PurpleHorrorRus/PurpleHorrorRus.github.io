<template>
    <Category id="index-page-projects" :label="'Проекты'">
        <div id="index-page-projects-list">
            <Project
                v-for="project of projects"
                :key="project.id"
                :project="project"
            />
        </div>
    </Category>
</template>

<script>
import Category from "~/components/General/Category";
import Project from "~/components/General/Projects/Project";

import projects from "~/assets/meta/projects.json";

export default {
    components: {
        Category,
        Project
    },

    data: () => ({
        projects
    })
};
</script>

<style lang="scss">
#index-page-projects {
    &-list {
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: wrap;

        margin-top: 10px;

        overflow-x: auto;
        overflow-y: hidden;

        @media screen and (max-width: 900px) {
            flex-direction: column;
            row-gap: 20px;
        }
    }
}
</style>