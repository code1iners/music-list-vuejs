<template>
  <div class="error" v-if="getDocumentError">
    {{ getDocumentError }}
  </div>
  <div
    class="playlist flex border rounded-lg shadow-lg p-10 bg-white"
    v-if="playlist"
  >
    <!-- Left side (Informations) -->
    <div class="flex flex-col items-center w-2/5 mx-3 bg-white">
      <img
        class="thumbnail-lg"
        :src="playlist.coverUrl"
        :alt="playlist.title"
      />
      <h3 class="mt-6 font-semibold text-lg bg-white">
        {{ playlist.title }}
      </h3>
      <p class="mt-3 bg-white">{{ playlist.description }}</p>
      <div class="w-full flex mt-6 px-3 bg-white justify-center">
        <button
          class="btn-red w-3/5 uppercase text-sm font-normal tracking-wide"
          @click="handlePlaylistDelete"
        >
          Delete Playlist
        </button>
      </div>
    </div>
    <!-- Right side (Songs) -->
    <div class="w-3/5 mr-3 bg-white">
      <!-- note. Add song form -->
      <SongAddForm :playlist="playlist" />
      <SongListView v-if="playlist.songs.length" :playlist="playlist" />
      <div v-else>Does not exists songs yet.</div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import getDocument from "../../composables/getDocument";
import SongAddForm from "../../components/SongAddForm.vue";
import SongListView from "../../components/SongListView.vue";

export default {
  components: { SongAddForm, SongListView },
  setup() {
    const route = useRoute();
    const { document: playlist, error: getDocumentError } = getDocument(
      "playlists",
      route.params.id
    );

    return {
      playlist,
      getDocumentError,
    };
  },
};
</script>

<style></style>
