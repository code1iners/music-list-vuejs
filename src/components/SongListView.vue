<template>
  <div class="flex flex-col mt-3 cursor-default">
    <div v-if="playlist.songs.length" class="bg-white">
      <div v-for="song in playlist.songs" :key="song.id" class="mb-3">
        <div class="box box-effect-scale flex items-center justify-between">
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
          <div
            class="btn-text bg-white text-sm"
            @click="handleSongDelete(song.id)"
          >
            Delete
          </div>
        </div>
      </div>
    </div>

    <div v-else class="w-full text-center box box-effect-scale">
      Does not exists songs yet.
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
