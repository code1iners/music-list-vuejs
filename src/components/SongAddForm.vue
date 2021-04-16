<template>
  <div class="flex flex-col">
    <button
      v-if="showForm"
      class="btn-blue uppercase text-sm font-normal tracking-wide"
      @click="handleShowFormToggle"
    >
      Cancel
    </button>
    <button
      v-if="!showForm"
      class="btn-blue uppercase text-sm font-normal tracking-wide"
      @click="handleShowFormToggle"
    >
      Add Song
    </button>

    <form class="w-full" v-if="showForm" @submit.prevent="handleSongAdd">
      <input type="text" placeholder="Title" v-model="title" required />
      <input
        class="mt-6"
        type="text"
        placeholder="Artist"
        v-model="artist"
        required
      />
      <textarea
        class="mt-6"
        placeholder="Description"
        v-model="description"
      ></textarea>
      <button class="mt-6 btn-green">Add</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useDocument from "../composables/useDocument";

export default {
  props: ["playlist"],
  setup(props) {
    const title = ref("");
    const artist = ref("");
    const description = ref("");
    const showForm = ref(false);

    const { documentUpdate } = useDocument("playlists", props.playlist.id);

    // note. Song add function.
    const handleSongAdd = async () => {
      const newSong = {
        id: props.playlist.songs.length,
        title: title.value,
        artist: artist.value,
        description: description.value,
      };

      // note. Update playlist songs.
      await documentUpdate({ songs: [...props.playlist.songs, newSong] });

      //   note. Initialize values.
      title.value = "";
      artist.value = "";
      description.value = "";
      showForm.value = false;
    };

    const handleShowFormToggle = () => {
      showForm.value = !showForm.value;
    };

    return {
      title,
      artist,
      description,
      showForm,
      handleSongAdd,
      handleShowFormToggle,
    };
  },
};
</script>

<style></style>
