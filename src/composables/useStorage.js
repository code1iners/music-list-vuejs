import { ref } from "vue";
import firestorage from "@/firebase/config";
import getUser from "../composables/getUser";

const { user } = getUser();

const useStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);
  const isPending = ref(false);

  const uploadImage = async (file) => {
    if (user) {
      isPending.value = true;

      filePath.value = `covers/${user.uid}/${file.name}`;
      const storageRef = firestorage.ref(filePath.value);

      try {
        const res = await storageRef.put(file);
        url.value = res.ref.getDownloadUrl();
        isPending.value = false;
      } catch (err) {
        console.log(err.message);
        error.value = err.message;
        isPending.value = false;
      }
    }
  };

  return { url, filePath, isPending, error, uploadImage };
};

export default useStorage;
