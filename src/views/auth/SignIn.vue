<template>
  <form @submit.prevent="handleSubmit">
    <h1 class="title">Sign In</h1>
    <input class="mt-10" type="email" placeholder="Email" v-model="email" />
    <input
      class="mt-10"
      type="password"
      placeholder="Password"
      v-model="password"
    />
    <div v-if="error" class="error mt-10">{{ error }}</div>
    <button v-if="!isPending" class="mt-10">Sign In</button>
    <button v-else class="mt-10" :class="{ disabled: isPending }">
      Loading...
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignIn from "@/composables/useSignIn";

export default {
  setup() {
    const { signIn, isPending, error } = useSignIn();

    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signIn(email.value, password.value);
      if (!error.value) {
        console.log("user logged in");
      }
    };

    return { email, password, handleSubmit, isPending, error };
  },
};
</script>

<style></style>
