<template>
  <div class="error" v-if="playlistError">
    {{ playlistError }}
  </div>
  <div class="playlist flex" v-if="playlist">
    <!-- Left side (Informations) -->
    <div class="flex flex-col items-center w-2/5">
      <img
        class="thumbnail-lg"
        :src="playlist.coverUrl"
        :alt="playlist.title"
      />
      <h3 class="mt-6 font-semibold text-lg">{{ playlist.title }}</h3>
      <p class="mt-3">{{ playlist.description }}</p>
    </div>
    <!-- Right side (Songs) -->
    <div class="w-3/5">
      <button>Add song</button>
      <div v-if="playlist.songs.length">{{ playlist.songs }}</div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import getDocument from "../../composables/getDocument";

export default {
  setup() {
    const route = useRoute();

    const { document: playlist, error: playlistError } = getDocument(
      "playlists",
      route.params.id
    );

    return { playlist, playlistError };
  },
};
</script>

<style></style>
