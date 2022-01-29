<template>
    <Category id="index-page-projects" :label="'Проекты'">
        <p class="category-text">
            Здесь отображены личные проекты, которые Я разрабатываю и
            поддерживаю. Нажмите на описание, чтобы развернуть его.
        </p>

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
        column-gap: 10px;

        margin-top: 10px;

        overflow-x: auto;
        overflow-y: hidden;

        @media screen and (max-width: 900px) {
            row-gap: 20px;

            flex-wrap: wrap;
        }
    }
}
</style>