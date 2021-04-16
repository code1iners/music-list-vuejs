<template>
  <div
    class="flex flex-col border rounded-md py-4 px-6 mt-3 mb-3 transform hover:scale-105 transition duration-200 ease-in-out cursor-default bg-white"
    v-for="song in playlist.songs"
    :key="song.id"
  >
    <div class="flex items-center justify-between bg-white">
      <div class="flex flex-col">
        <div class="flex items-center bg-white">
          <h3 class="font-semibold text-lg bg-white">
            {{ song.title }}
          </h3>
          <span class="ml-2 text-sm text-gray-500 bg-white">by</span>
          <span class="ml-2 text-sm bg-white">{{ song.artist }}</span>
        </div>
        <div>
          <p class="bg-white">{{ song.description }}</p>
        </div>
      </div>
      <button class="btn-red-sm" @click="handleSongDelete(song.id)">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import useDocument from "../composables/useDocument";

export default {
  props: ["playlist"],
  setup(props) {
    const { documentUpdate } = useDocument("playlists", props.playlist.id);
    const handleSongDelete = async (songId) => {
      const updatedSongs = props.playlist.songs.filter((song) => {
        return song.id != songId;
      });

      await documentUpdate({ songs: updatedSongs });
    };
    return { handleSongDelete };
  },
};
</script>

<style></style>
