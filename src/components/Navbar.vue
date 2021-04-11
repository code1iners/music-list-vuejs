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
        <span class="btn-text">Sign out</span>
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
export default {};
</script>

<style></style>
