<template>
  <div class="bg-white py-4 px-3 mb-8">
    <nav
      class="flex items-center justify-between max-w-screen-xl mx-auto bg-white"
    >
      <router-link :to="{ name: 'Home' }" class="flex items-center">
        <img class="h-7 mr-4" src="@/assets/sound.png" alt="App logo" />
        <h1>
          <div class="text-4xl font-bold">Music List</div>
        </h1>
      </router-link>
      <div class="links">
        <div v-if="user" class="bg-white">
          <router-link
            :to="{ name: 'PlaylistCreate' }"
            class="btn-text mx-3 bg-white"
            >Create Playlist</router-link
          >
          <span class="btn-text bg-white" @click="handleSignOut">Sign out</span>
        </div>
        <div v-else>
          <router-link :to="{ name: 'SignUp' }" class="btn-text mx-3 bg-white"
            >Sign up</router-link
          >
          <router-link :to="{ name: 'SignIn' }" class="btn-text bg-white"
            >Sign in</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import getUser from "@/composables/getUser";
import useSignOut from "@/composables/useSignOut";

export default {
  setup() {
    const router = useRouter();
    const { signOut, isPending, error } = useSignOut();

    const { user } = getUser();
    const handleSignOut = async () => {
      await signOut();
      if (!error.value) {
        router.push({ name: "Home" });
      }
    };

    return { handleSignOut, isPending, error, user };
  },
};
</script>

<style></style>
