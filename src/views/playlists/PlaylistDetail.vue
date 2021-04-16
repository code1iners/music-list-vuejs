<template>
  <div class="error" v-if="getDocumentError">
    {{ getDocumentError }}
  </div>
  <div class="box flex" v-if="playlist">
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
      <button
        v-if="isOwner"
        class="btn-red mt-3 w-3/5 uppercase text-sm font-normal tracking-wide"
        @click="handlePlaylistDelete"
      >
        Delete Playlist
      </button>
    </div>
    <!-- Right side (Songs) -->
    <div class="w-3/5 mr-3 bg-white">
      <!-- note. Add song form -->
      <SongAddForm :playlist="playlist" :isOwner="isOwner" />
      <SongListView :playlist="playlist" :isOwner="isOwner" />
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import getDocument from "../../composables/getDocument";
import useDocument from "../../composables/useDocument";
import useStorage from "../../composables/useStorage";
import getUser from "../../composables/getUser";
import SongAddForm from "../../components/SongAddForm.vue";
import SongListView from "../../components/SongListView.vue";
import { computed } from "@vue/runtime-core";

export default {
  components: { SongAddForm, SongListView },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { document: playlist, error: getDocumentError } = getDocument(
      "playlists",
      route.params.id
    );
    const { documentDelete } = useDocument("playlists", route.params.id);
    const { imageDelete } = useStorage();
    const { user } = getUser();

    const isOwner = computed(() => {
      return (
        playlist.value && user.value && playlist.value.userId == user.value.uid
      );
    });

    const handlePlaylistDelete = async () => {
      console.log(router);
      await documentDelete();
      await imageDelete(playlist.value.filePath);
      router.push({ name: "Home" });
    };

    return {
      playlist,
      getDocumentError,
      handlePlaylistDelete,
      isOwner,
    };
  },
};
</script>

<style></style>
