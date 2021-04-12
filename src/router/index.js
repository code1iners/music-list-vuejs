import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/auth/SignIn.vue";
import SignUp from "../views/auth/SignUp.vue";
import PlaylistCreate from "../views/playlists/PlaylistCreate.vue";
import PlaylistDetail from "../views/playlists/PlaylistDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/playlists/create",
    name: "PlaylistCreate",
    component: PlaylistCreate,
  },
  {
    path: "/playlists/:id",
    name: "PlaylistDetail",
    component: PlaylistDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
