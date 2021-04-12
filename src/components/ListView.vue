<template>
  <div v-for="playlist in playlists" :key="playlist.id">
    <router-link :to="{ name: 'PlaylistDetail', params: { id: playlist.id } }">
      <div class="playlist">
        <dir class="thumbnail px-3">
          <img
            class="w-24 h-24 bg-center bg-cover rounded-md bg-white"
            :src="playlist.coverUrl"
            :alt="playlist.title"
          />
        </dir>

        <div class="flex flex-col w-full ml-6">
          <div class="flex items-center bg-white">
            <h3>{{ playlist.title }}</h3>
            <p class="ml-4">( {{ playlist.songs.length }} )</p>
          </div>
          <div class="flex items-center bg-white">
            <span class="text-gray-700">Created by</span>
            <span class="ml-1 font-semibold text-lg">{{
              playlist.userName
            }}</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["playlists"],
};
</script>

<style></style>
