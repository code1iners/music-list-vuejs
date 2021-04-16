import { ref } from "vue";
import { firestorage } from "../firebase/config";
import getUser from "../composables/getUser";

const { user } = getUser();

const useStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);
  const isPending = ref(false);

  const imageDelete = async (path) => {
    isPending.value = true;

    const storageRef = firestorage.ref(path);
    console.log(`storageRef:${storageRef}`);
    storageRef
      .delete()
      .then((res) => {
        console.log(`imageDelete:${res}`);
      })
      .catch((err) => {
        console.log(err.message);
        error.value = err.message;
      });
  };

  const imageUpload = async (file) => {
    isPending.value = true;
    if (user) {
      filePath.value = `covers/${user.value.uid}/${file.name}`;
      const storageRef = firestorage.ref(filePath.value);

      try {
        const res = await storageRef.put(file);
        url.value = await res.ref.getDownloadURL();
        isPending.value = false;
      } catch (err) {
        console.log(err.message);
        error.value = err.message;
        isPending.value = false;
      }
    }
  };

  return {
    url,
    filePath,
    isPending,
    error,
    imageUpload,
    imageDelete,
  };
};

export default useStorage;
