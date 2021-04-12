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
    <button v-if="!isPending" class="mt-7">Create</button>
    <button v-else class="mt-7" :class="{ disabled: isPending }">
      Saving...
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useStorage from "@/composables/useStorage";
import useCollection from "@/composables/useCollection";
import getUser from "@/composables/getUser";
import { timestamp } from "@/firebase/config";

export default {
  setup() {
    const router = useRouter();
    const { url, filePath, error: storageError, uploadImage } = useStorage();
    const { addDoc, error: collectionError } = useCollection("playlists");
    const { user } = getUser();

    const title = ref("");
    const description = ref("");
    const coverImageFile = ref(null);
    const coverImageFileError = ref(null);
    const isPending = ref(false);

    const handleSubmit = async () => {
      if (coverImageFile.value) {
        isPending.value = true;
        await uploadImage(coverImageFile.value);
        await addDoc({
          title: title.value,
          description: description.value,
          userId: user.value.uid,
          userName: user.value.displayName,
          coverUrl: url.value,
          filePath: filePath.value,
          songs: [],
          createdAt: timestamp(),
        });

        isPending.value = false;

        if (!collectionError.value) {
          console.log("playlist added");
          router.push({ name: "Home" });
        }
      }
    };
    const handleChange = (e) => {
      const selected = e.target.files[0];
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
      isPending,
      storageError,
    };
  },
};
</script>

<style></style>
