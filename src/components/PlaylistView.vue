<template>
  <div class="">
    <div v-if="playlists.length">
      <div
        class="box box-effect-scale mb-6"
        v-for="playlist in playlists"
        :key="playlist.id"
      >
        <router-link
          :to="{ name: 'PlaylistDetail', params: { id: playlist.id } }"
        >
          <div class="flex items-center bg-white">
            <dir class="w-40 px-3 bg-white flex justify-center items-center">
              <img
                class="thumbnail-sm"
                :src="playlist.coverUrl"
                :alt="playlist.title"
              />
            </dir>

            <div class="w-full flex flex-col w-full ml-6 bg-white">
              <div class="flex items-center bg-white">
                <h3 class="bg-white">{{ playlist.title }}</h3>
                <p class="ml-4 bg-white">( {{ playlist.songs.length }} )</p>
              </div>
              <div class="flex items-center bg-white">
                <span class="text-gray-700 bg-white">Created by</span>
                <span class="ml-1 font-semibold text-lg bg-white">{{
                  playlist.userName
                }}</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div v-else class="w-full bg-white">
      <p class="text-center bg-white">How about create new a playlist?</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["playlists"],
};
</script>

<style></style>
