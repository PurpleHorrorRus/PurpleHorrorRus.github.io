<template>
    <Category :label="'Проекты'" id="index-page-projects">
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

<script setup>
import Category from "~/components/General/Category";
import Project from "~/components/General/Projects/Project";

import MeridiusImage from "~/assets/images/projects/meridius.png";
import OverlayImage from "~/assets/images/projects/overlay.png";
import PackageImage from "~/assets/images/projects/package.png";

const projects = ref([
    {
        id: "meridius",
        image: MeridiusImage,
        to: "/meridius",
        description:
            "Бесплатный и современный музыкальный плеер для социальной сети ВКонтакте.\
        Самый большой личный проект. Пиковый показатель пользователей - 60 человек, в среднем приложением пользуются\
        25~ человек ежедневно. Проект проприетарный не преследует коммерческих целей. Meridius предлагает функционал, не только\
        функционал, соответствующий функционалу самой социальной сети ВКонтакте, но так же предлагает уникальный,\
        вроде эквалайзера, нормализации громкости, горячих клавиш, веб-сервера, цветовых схем, импорт музыки из YouTube и так далее.\n\n\
        Операционная система: Windows 7 и выше, Linux\n\
        Технологии: Nuxt/Vue 2, SCSS, Google Analytics",
    },
    {
        id: "Stream Overlay",
        image: OverlayImage,
        to: "https://github.com/PurpleHorrorRus/StreamOverlay",
        description:
            "Приложение для ведущих прямых трансляций с одним монитором. Приложение выводится поверх всех окон, \
        имеет низкое потребление ресурсов компьютера, интеграцию с чатом Twitch, возможность редактировать виджеты прямых трансляций, \
        менять название и категорию трансляции на Twitch, а также настраивать аккаунт и управлять рекламой на канале.\n\n\
        Операционная система: Windows 7 и выше\n\
        Технологии: Nuxt/Vue 2, SCSS",
    },
    {
        id: "EasyVK AudioAPI",
        image: PackageImage,
        to: "https://github.com/PurpleHorrorRus/EasyVK-AudioAPI",
        description:
            "EasyVK AudioAPI - Библиотека с открытым исходным кодом, реализующая неофициальный Audio API социальной сети ВКонтакте.\
            Используется в качестве ядра в Meridius. Поддерживает авторизацию с помощью логина и пароля, работает \
            с cookies и запросами на сервера социальной сети, имитируя браузер.\n\n\
            Технологии: NodeJS, Jest\n\
            Паттерны: Single responsibility, Dependency inversion",
    },
    {
        id: "simple-helix-api",
        image: PackageImage,
        to: "https://github.com/PurpleHorrorRus/simple-helix-api",
        description:
            "simple-helix-api - Библиотека с открытым исходным кодом, необходимая для простой инициализации и работы с API\
            стриминговой платформы Twitch. Имеет более 200 скачиваний на npm.\n\n\
            Технологии: NodeJS, Jest\n\
            Паттерны: Single responsibility",
    }
]);
</script>

<style lang="scss">
#index-page-projects {
    &-list {
        display: flex;
        column-gap: 10px;

        margin-top: 10px;

        @media screen and (max-width: 900px) {
            row-gap: 20px;

            flex-wrap: wrap;
        }
    }
}
</style>