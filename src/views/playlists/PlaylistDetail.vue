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
      <div class="w-full flex mt-3 px-3">
        <button class="btn-green mr-3 w-1/2" @click="handleShowFormToggle">
          {{ AddSongButtonText }}
        </button>
        <button class="btn-red w-1/2" @click="handleSongDelete">
          Delete Song
        </button>
      </div>
    </div>
    <!-- Right side (Songs) -->
    <div class="w-3/5 mr-3">
      <!-- note. Add song form -->
      <form class="w-full" v-if="showForm" @submit.prevent="handleSongAdd">
        <input type="text" placeholder="Title" v-model="songTitle" required />
        <input
          class="mt-6"
          type="text"
          placeholder="Artist"
          v-model="songArtist"
          required
        />
        <button class="mt-6 btn-blue">Add</button>
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

    const handleSongAdd = () => {
      console.log(songTitle.value, songArtist.value);
    };

    const handleSongDelete = () => {
      console.log("delete song");
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
      handleSongAdd,
      handleSongDelete,
    };
  },
};
</script>

<style></style>
