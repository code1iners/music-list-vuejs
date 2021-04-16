<template>
  <div class="flex flex-col">
    <button
      class="btn-blue uppercase text-sm font-normal tracking-wide"
      @click="handleShowFormToggle"
    >
      {{ AddSongButtonText }}
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
    const AddSongButtonText = ref("Add song");
    const showForm = ref(false);

    const { update } = useDocument("playlists", props.playlist.id);

    // note. Song add function.
    const handleSongAdd = async () => {
      const newSong = {
        id: props.playlist.value.songs.length,
        title: title.value,
        artist: artist.value,
        description: description.value,
      };

      // note. Update playlist songs.
      await update({ songs: [...props.playlist.value.songs, newSong] });

      // note. Initialize values.
      title.value = "";
      artist.value = "";
      showForm.value = false;
    };

    const handleShowFormToggle = () => {
      showForm.value = !showForm.value;
      if (showForm.value) {
        AddSongButtonText.value = "Cancel";
      } else {
        AddSongButtonText.value = "Add song";
      }
    };

    return {
      title,
      artist,
      description,
      AddSongButtonText,
      showForm,
      handleSongAdd,
      handleShowFormToggle,
    };
  },
};
</script>

<style></style>
