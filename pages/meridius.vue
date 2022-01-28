<template>
    <div id="container">
        <Header />
        <div id="content">
            <div id="meridius">
                <Description />
                <img
                    id="MeridiusScreenshot"
                    src="https://raw.githubusercontent.com/PurpleHorrorRus/Meridius/master/screenshots/0.png"
                    alt="Meridius screenshot"
                />
            </div>
        </div>
        <div id="features">
            <div
                v-for="(featuresChunk, index) of featuresSplitted"
                :key="index"
                class="features-chunk"
            >
                <Feature
                    v-for="feature of featuresChunk"
                    :key="feature.text"
                    :feature="feature"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "~/components/Meridius/Header";
import Description from "~/components/Meridius/Description";
import Feature from "~/components/Meridius/Feature";

definePageMeta({
    layout: "empty",
    title: "Meridius - музыкальный плеер для ВКонтакте",
});

const features = [
    {
        icon: defineAsyncComponent(() => import("~/assets/icons/meridius/dollar.svg")),
        text: "Приложение абсолютно бесплатное",
        style: {
            fill: "#ff0000",
        }
    },
    {
        icon: defineAsyncComponent(() => import("~/assets/icons/meridius/chip.svg")),
        text: "Низкое потребление системных ресурсов",
    },
    {
        icon: defineAsyncComponent(() => import("~/assets/icons/meridius/rocket.svg")),
        text: "Быстрая работа приложения",
    },
    {
        icon: defineAsyncComponent(() => import("~/assets/icons/meridius/window.svg")),
        text: "Современный красивый и понятный дизайн",
    },
    {
        icon: defineAsyncComponent(() => import("~/assets/icons/meridius/brush.svg")),
        text: "Поддержка цветовых схем",
    },
    {
        icon: defineAsyncComponent(() => import("~/assets/icons/meridius/music.svg")),
        text: "Лёгкое управление и быстрый доступ к аудиозаписям и плейлистам",
    },
    {
        icon: defineAsyncComponent(() => import("~/assets/icons/meridius/search.svg")),
        text: "Поиск музыки, плейлистов, исполнителей, пользователей и сообществ",
    },
    {
        icon: defineAsyncComponent(() => import("~/assets/icons/meridius/down-arrow.svg")),
        text: "Скачивание аудио и целых плейлистов на компьютер",
    },
    {
        icon: defineAsyncComponent(() => import("~/assets/icons/meridius/miniwindow.svg")),
        text: "Мини-плеер, который выводится поверх окон",
    },
    {
        icon: defineAsyncComponent(() => import("~/assets/icons/meridius/keyboard.svg")),
        text: "Поддержка горячих клавиш",
    },
    {
        icon: defineAsyncComponent(() => import("~/assets/icons/meridius/equalizer.svg")),
        text: "Встроенный эквалайзер с предустановками",
    },
    {
        icon: defineAsyncComponent(() => import("~/assets/icons/meridius/normalizer.svg")),
        text: "Встроенный нормалайзер громкости трека с настраиваемым порогом",
    },
    {
        icon: defineAsyncComponent(() => import("~/assets/icons/meridius/station.svg")),
        text: "Вывод названия трека на стрим через OBS Studio или любую другую программу",
    },
    {
        icon: defineAsyncComponent(() => import("~/assets/icons/meridius/youtube.svg")),
        text: "Импорт треков и плейлистов из YouTube",
    },
    {
        icon: defineAsyncComponent(() => import("~/assets/icons/meridius/message-detail.svg")),
        text: "Постоянная связь с разработчиком",
    },
    {
        icon: defineAsyncComponent(() => import("~/assets/icons/meridius/terminal.svg")),
        text: "Встроенный веб-сервер для интеграции ваших приложений с Meridius",
    },
    {
        icon: defineAsyncComponent(() => import("~/assets/icons/meridius/dots-horizontal.svg")),
        text: "И многое другое",
    }
];

const featuresSplitted = computed(() => {
    return features.reduce((acc, e, i) => (i % 10 ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);
});
</script>

<style lang="scss">
#container {
    position: absolute;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px auto auto;
    grid-template-areas: "header" "content" "features";

    left: 0px;
    top: 0px;

    width: 100%;

    #content {
        grid-area: content;

        background-color: #141413;

        #meridius {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;

            padding-top: 10px;

            #MeridiusScreenshot {
                width: 650px;

                padding: 50px;

                border-radius: 25px;

                vertical-align: middle;
            }
        }
    }

    @media screen and (max-width: 880px) {
        #features {
            justify-content: center;
            align-items: center;
            flex-direction: column;
            row-gap: 10px;

            .feature {
                width: 650px;
            }
        }
    }

    #features {
        grid-area: features;

        display: flex;
        justify-content: space-evenly;

        margin-top: 10px;

        .features-chunk {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 10px;
        }
    }
}
</style>