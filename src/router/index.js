import { createRouter, createWebHistory } from "vue-router";

// Correctly referencing your component files
import HomePage from "../components/pages/HomePage.vue";
import KundenInfo from "../components/pages/KundenInfo.vue";
import KundenSuchen from "../components/pages/KundenSuchen.vue";
import KundeBearbeiten from "../components/pages/KundeBearbeiten.vue";
import KundenHinzufuegen from "../components/pages/KundenHinzufuegen.vue";
import KundenLoeschen from "../components/pages/KundenLoeschen.vue";
import NotFoundPage from "../components/pages/NotFound.vue"; // Ensure the NotFound.vue file exists

const routes = [
  {
    path: "/",
    component: HomePage, // Landing page for the app
  },
  {
    path: "/kunden-info",
    component: KundenInfo,
  },
  {
    path: "/kunden-suchen",
    component: KundenSuchen,
  },
  {
    path: "/kunde-bearbeiten",
    component: KundeBearbeiten,
  },
  {
    path: "/kunden-hinzufuegen",
    component: KundenHinzufuegen,
  },
  {
    path: "/kunden-loeschen",
    component: KundenLoeschen,
  },
  {
    path: "/:pathMatch(.*)*", // For catching any unknown paths
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
