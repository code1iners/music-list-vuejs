<template>
  <div class="bg-white py-4 px-3 mb-16">
    <nav class="flex items-center justify-between max-w-screen-xl mx-auto">
      <router-link :to="{ name: 'Home' }" class="flex items-center">
        <img class="h-7 mr-4" src="@/assets/sound.png" alt="App logo" />
        <h1>
          <div class="text-4xl font-bold">Music List</div>
        </h1>
      </router-link>
      <div class="links">
        <span class="btn-text" @click="handleSignOut">Sign out</span>
        <router-link :to="{ name: 'SignUp' }" class="btn-text mx-3"
          >Sign up</router-link
        >
        <router-link :to="{ name: 'SignIn' }" class="btn-text"
          >Sign in</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
// import { onMounted } from "@vue/runtime-core";
// import getUser from "@/composables/getUser";
import useSignOut from "@/composables/useSignOut";

export default {
  setup() {
    const router = useRouter();
    const { signOut, isPending, error } = useSignOut();

    // const { user } = getUser();
    const handleSignOut = async () => {
      await signOut();
      if (!error.value) {
        console.log("Sign out successed");
        router.push({ name: "Home" });
      }
    };

    return { handleSignOut, isPending, error };
  },
};
</script>

<style></style>
