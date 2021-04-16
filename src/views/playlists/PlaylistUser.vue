<template>
  <div id="playlist-user">
    <div v-if="playlists" class="w-4/5 mx-auto">
      <PlaylistView :playlists="playlists" />
    </div>
  </div>
</template>

<script>
import getUser from "../../composables/getUser";
import getCollection from "../../composables/getCollection";
import PlaylistView from "../../components/PlaylistView.vue";

export default {
  components: { PlaylistView },
  setup() {
    const { user } = getUser();
    console.log(user.value.uid);
    const {
      documents: playlists,
      getCollectionError,
    } = getCollection("playlists", ["userId", "==", user.value.uid]);

    return { playlists, getCollectionError };
  },
};
</script>

<style></style>
