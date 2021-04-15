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
      <button class="mb-6" @click="handleShowFormToggle">
        {{ AddSongButtonText }}
      </button>
      <!-- note. Add song form -->
      <form class="w-full" v-if="showForm">
        <input type="text" placeholder="Title" v-model="songTitle" required />
        <input type="text" placeholder="Artist" v-model="songArtist" required />
        <button>Add</button>
      </form>
      <div v-if="playlist.songs.length">{{ playlist.songs }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import getDocument from "../../composables/getDocument";

export default {
  setup() {
    const route = useRoute();
    const AddSongButtonText = ref("Add song");
    const songTitle = ref("");
    const songArtist = ref("");
    const showForm = ref(false);

    const handleShowFormToggle = () => {
      showForm.value = !showForm.value;
      if (showForm.value) {
        AddSongButtonText.value = "Cancel";
      } else {
        AddSongButtonText.value = "Add song";
      }
    };

    const { document: playlist, error: playlistError } = getDocument(
      "playlists",
      route.params.id
    );

    return {
      playlist,
      playlistError,
      AddSongButtonText,
      songTitle,
      songArtist,
      showForm,
      handleShowFormToggle,
    };
  },
};
</script>

<style></style>
