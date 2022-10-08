<template>
    <Category id="index-page-stack" :label="'Стек технологий и навыки'">
        <p class="category-text">
            Вы можете навестись на некоторые пункты, чтобы отобразить
            более подробную информацию
        </p>

        <div id="index-page-stack-list">
            <TechnologyCategory 
                v-for="category of technologies"
                :key="category.label.toLowerCase()"
                :category="category"
            />
        </div>
    </Category>
</template>

<script>
import Category from "../Category.vue";
import TechnologyCategory from "../Technology/TechnologyCategory.vue";

import technologies from "~/assets/meta/technologies.json";

export default {
    components: {
        Category,
        TechnologyCategory
    },

    data: () => ({
        technologies
    })
};
</script>

<style lang="scss">
#index-page-stack {
    &-list {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
}
</style>