<template>
  <div class="home mx-auto">
    <div v-if="collectionError" class="error">{{ collectionError }}</div>
    <div v-if="documents" class="w-4/5 mx-auto">
      <PlaylistView :playlists="documents" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import getCollection from "../composables/getCollection";
import PlaylistView from "../components/PlaylistView.vue";

export default {
  name: "Home",
  components: { PlaylistView },
  setup() {
    const { documents, error: collectionError } = getCollection("playlists");
    return { documents, collectionError };
  },
};
</script>
