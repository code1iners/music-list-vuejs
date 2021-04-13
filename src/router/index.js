import { createRouter, createWebHistory } from "vue-router";
import Routes from "../router/routes/Routes";
import RoutePlaylist from "../router/routes/playlists/RoutePlaylist";
import RouteAuth from "../router/routes/auth/RouteAuth";

const routes = [...Routes, ...RouteAuth, ...RoutePlaylist];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
