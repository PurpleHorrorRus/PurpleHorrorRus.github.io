<template>
    <div id="main-page-container-content-projects">
        <a id="main-page-container-content-projects-title" class="category" href="https://github.com/PurpleHorrorRus/">
            <span
                id="main-page-container-content-projects-title-text"
                class="category-text"
                v-text="'Мои крупные проекты:'"
            />
        </a>

        <div id="main-page-container-content-projects-list">
            <Project v-for="project of projects" :key="project.title" :project="project" />
        </div>
    </div>
</template>

<script>
import Project from "~/components/Project";

import projects from "~/assets/meta/projects.json";

export default {
    components: {
        Project
    },
    data: () => ({
        projects
    })
};
</script>

<style lang="scss">
#main-page-container-content-projects {
    display: grid;

    padding: 20px;
}
</style>