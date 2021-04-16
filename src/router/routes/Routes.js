import Home from "@/views/Home.vue";
import RequireAuth from "@/composables/RequireAuth";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: RequireAuth,
  },
];
