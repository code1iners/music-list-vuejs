import PlaylistCreate from "@/views/playlists/PlaylistCreate.vue";
import PlaylistDetail from "@/views/playlists/PlaylistDetail.vue";

export default [
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
