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
    <button v-if="!isPending" class="mt-10 btn-blue">Sign In</button>
    <button v-else class="mt-10" :class="{ disabled: isPending }">
      Loading...
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignIn from "@/composables/useSignIn";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const { signIn, isPending, error } = useSignIn();

    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signIn(email.value, password.value);
      if (!error.value) {
        router.push({ name: "Home" });
      }
    };

    return { email, password, handleSubmit, isPending, error };
  },
};
</script>

<style></style>
