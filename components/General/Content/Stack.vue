<template>
    <Category :label="'Стек технологий и навыки'" id="index-page-stack">
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

<script setup>
import Category from "~/components/General/Category";
import TechnologyCategory from "~/components/General/Technology/TechnologyCategory";

/*
    Всё, что идёт ниже - так не должно быть, полностью согласен,
    но, к сожалению, пока что Nuxt 3 не умеет загружать картинки динамически,
    поэтому у меня нет возможности занести всё это в один JSON файл для удобства.
    Issue уже создана в репозитории разработчиков: https://github.com/nuxt/framework/issues/1693
    и со временем это наверняка исправят, буду следить.
*/

import NuxtImage from "~/assets/images/stack/nuxt.png";
import VueImage from "~/assets/images/stack/vue.png";
import NodeImage from "~/assets/images/stack/nodejs.png";
import SCSSImage from "~/assets/images/stack/scss.png";
import HTMLImage from "~/assets/images/stack/html.png";
import JavascriptImage from "~/assets/images/stack/javascript.png";
import CSSImage from "~/assets/images/stack/css.png";
import JQueryImage from "~/assets/images/stack/jquery.png";
import JavaImage from "~/assets/images/stack/java.png";
import GITImage from "~/assets/images/stack/git.png";
import MongoImage from "~/assets/images/stack/mongo.png";

import PythonImage from "~/assets/images/stack/python.png";
import PHPImage from "~/assets/images/stack/php.png";
import MySQLImage from "~/assets/images/stack/mysql.png";
import LinuxImage from "~/assets/images/stack/linux.png";

import TypescriptImage from "~/assets/images/stack/typescript.png";

import ReactImage from "~/assets/images/stack/react.png";
import ReduxImage from "~/assets/images/stack/redux.png";
import SymfonyImage from "~/assets/images/stack/symfony.png";
import LaravelImage from "~/assets/images/stack/laravel.png";

import VSCodeImage from "~/assets/images/stack/vscode.png";
import GithubImage from "~/assets/images/stack/github.png";
import ESLintImage from "~/assets/images/stack/eslint.png";
import PhotoshopImage from "~/assets/images/stack/photoshop.png";

import ThumbsUpImage from "~/assets/images/stack/thumbs-up.png";
import RelievedImage from "~/assets/images/stack/relieved.png";
import HandshakeImage from "~/assets/images/stack/handshake.png";
import BookImage from "~/assets/images/stack/book.png";
import EnglishImage from "~/assets/images/stack/english.png";
import NoSmokingImage from "~/assets/images/stack/no-smoking.png";

import ThinkingImage from "~/assets/images/stack/thinking.png";

const technologies = ref([
    {
        label: "Хорошо знаю",
        technologies: [
            {
                image: NuxtImage,
                color: "#41b883",
                name: "NuxtJS",
                tooltip: "Интересный факт - данный сайт написан на NuxtJS 3"
            },
            {
                image: VueImage,
                color: "#41B883",
                name: "VueJS"
            },
            {
                image: NodeImage,
                color: "#68A063",
                name: "NodeJS"
            },
            {
                image: SCSSImage,
                color: "#cd6799",
                name: "SCSS"
            },
            {
                image: HTMLImage,
                color: "#F06529",
                name: "HTML"
            },
            {
                image: JavascriptImage,
                color: "#F0DB4F",
                name: "Javascript"
            },
            {
                image: CSSImage,
                color: "#264de4",
                name: "CSS"
            },
            {
                image: JQueryImage,
                color: "#0769ad",
                name: "jQuery"
            },
            {
                image: JavaImage,
                color: "#5382a1",
                name: "Java"
            },
            {
                image: GITImage,
                color: "#f34f29",
                name: "GIT"
            },
            {
                image: MongoImage,
                color: "#4DB33D",
                name: "MongoDB"
            }
        ]
    },
    {
        label: "Средний уровень",
        technologies: [
            {
                image: PythonImage,
                color: "#fbcb24",
                name: "Python"
            },
            {
                image: PHPImage,
                color: "#474A8A",
                name: "PHP"
            },
            {
                image: MySQLImage,
                color: "#00758F",
                name: "MySQL"
            },
            {
                image: LinuxImage,
                color: "#ffffff",
                name: "Linux"
            }
        ]
    },
    {
        label: "Изучаю прямо сейчас",
        technologies: [
            {
                image: TypescriptImage,
                color: "#3178C6",
                name: "Typescript"
            }
        ]
    },
    {
        label: "В планах на изучение",
        technologies: [
            {
                image: ReactImage,
                color: "#61dbfb",
                name: "React"
            },
            {
                image: ReduxImage,
                color: "#764abc",
                name: "Redux"
            },
            {
                image: SymfonyImage,
                color: "#ffffff",
                name: "Symfony"
            },
            {
                image: LaravelImage,
                color: "#F05340",
                name: "Laravel"
            }
        ]
    },
    {
        label: "Инструменты для работы",
        technologies: [
            {
                image: VSCodeImage,
                color: "#0078d7",
                name: "Visual Studio Code"
            },
            {
                image: ESLintImage,
                color: "#0000FF",
                name: "ESLint"
            },
            {
                image: GithubImage,
                color: "#7f7f7f",
                name: "GitHub"
            },
            {
                image: PhotoshopImage,
                color: "#07bce3",
                name: "Adobe Photoshop"
            }
        ]
    },
    {
        label: "Персональные навыки",
        technologies: [
            {
                image: ThumbsUpImage,
                color: "#ffffff",
                name: "Прагматичный",
                tooltip: "Всегда доделываю проекты до конца, стараюсь искать самые эффективные решения"
            },
            {
                image: RelievedImage,
                color: "#90ee90",
                name: "Неконфликтный"
            },
            {
                image: HandshakeImage,
                color: "#ffffff",
                name: "Командный игрок"
            },
            {
                image: BookImage,
                color: "#ffffff",
                name: "Люблю учиться",
                tooltip: "Все знания человека - приобретённые. Поэтому нужно постоянно учиться чему-то новому,\
                особенно в нашей профессии"
            },
            {
                image: EnglishImage,
                color: "#c8102e",
                name: "Уверенные знания английского языка",
                tooltip: "Чтение и составление документаций и текстов на английском языке"
            },
            {
                image: NoSmokingImage,
                color: "#000000",
                name: "Без вредных привычек"
            }
        ]
    },
    {
        label: "Отрицательные качества",
        technologies: [
            {
                image: ThinkingImage,
                color: "#ffffff",
                name: "Слишком много думаю",
                tooltip: "Порой мыслей бывает слишком много, из-за чего не получается отдыхать.\
                Но, с другой стороны, эти мысли часто связаны с алгоритмами решения задач\
                или про реализацию той или иной фичи"
            }
        ]
    }
]);
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