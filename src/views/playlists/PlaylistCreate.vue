<template>
  <form @submit.prevent="handleSubmit">
    <h4 class="title">Create New Playlist</h4>
    <input
      class="mt-7"
      type="text"
      placeholder="Playlist title"
      v-model="title"
      required
    />
    <textarea
      class="mt-7"
      placeholder="Playlist description..."
      v-model="description"
      required
    ></textarea>
    <!-- Upload playlist image -->
    <label for="cover-image" class="mt-10">Upload playlist cover image</label>
    <input id="cover-image" type="file" @change="handleChange" />
    <div class="error fileError">{{ coverImageFileError }}</div>
    <div class="error"></div>
    <button class="mt-7">Create</button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const title = ref("");
    const description = ref("");
    const coverImageFile = ref(null);
    const coverImageFileError = ref(null);

    const handleSubmit = () => {
      if (coverImageFile.value) {
        console.log(title.value, description.value, coverImageFile.value);
      }
    };
    const handleChange = (e) => {
      const selected = e.target.files[0];
      console.log(selected);
      // Allowed file types
      const types = ["image/png", "image/jpeg", "image/jpg"];
      if (selected && types.includes(selected.type)) {
        coverImageFile.value = selected;
        coverImageFileError.value = null;
      } else {
        coverImageFile.value = null;
        coverImageFileError.value =
          "Please select an image file (png, jpeg, jpg)";
      }
    };

    return {
      title,
      description,
      handleSubmit,
      handleChange,
      coverImageFileError,
    };
  },
};
</script>

<style></style>
