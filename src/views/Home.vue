<template>
  <div class="home mx-auto">
    <div v-if="collectionError" class="error">{{ collectionError }}</div>
    <div v-if="documents" class="w-4/5 mx-auto">
      <ListView :playlists="documents" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import getCollection from "../composables/getCollection";
import ListView from "../components/ListView.vue";

export default {
  name: "Home",
  components: { ListView },
  setup() {
    const { documents, error: collectionError } = getCollection("playlists");
    return { documents, collectionError };
  },
};
</script>
