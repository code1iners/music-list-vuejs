import PlaylistCreate from "@/views/playlists/PlaylistCreate.vue";
import PlaylistDetail from "@/views/playlists/PlaylistDetail.vue";
import RequireAuth from "@/composables/RequireAuth";

export default [
  {
    path: "/playlists/create",
    name: "PlaylistCreate",
    component: PlaylistCreate,
    beforeEnter: RequireAuth,
  },
  {
    path: "/playlists/:id",
    name: "PlaylistDetail",
    component: PlaylistDetail,
    props: true,
    beforeEnter: RequireAuth,
  },
];
