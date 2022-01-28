import { defineNuxtPlugin } from "#app";
import tooltip from "~/plugins/tooltip/tooltip";
import "~/plugins/tooltip/tooltip.css";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.directive("tooltip", tooltip);
});