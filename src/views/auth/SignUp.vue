<template>
  <form @submit.prevent="handleSubmit">
    <h1 class="title">Sign Up</h1>
    <input
      class="mt-10"
      type="text"
      placeholder="Username"
      v-model="displayName"
    />
    <input class="mt-10" type="email" placeholder="Email" v-model="email" />
    <input
      class="mt-10"
      type="password"
      placeholder="Password"
      v-model="password"
    />
    <div v-if="error" class="error mt-10">{{ error }}</div>
    <button v-if="!isPending" class="mt-10 btn-green">Sign Up</button>
    <button v-else class="mt-10" :class="{ disabled: isPending }">
      Loading...
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
// import { useRouter } from "vue-router";
import useSignUp from "../../composables/useSignUp";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const displayName = ref("");

    const { signUp, isPending, error } = useSignUp();
    const router = useRouter();
    // const router = useRouter();

    const handleSubmit = async () => {
      await signUp(email.value, password.value, displayName.value);
      if (!error.value) {
        console.log(`sign up successed`);
        router.push({ name: "Home" });
      }
    };

    return { email, password, displayName, handleSubmit, isPending, error };
  },
};
</script>

<style></style>
