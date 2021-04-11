import { ref } from "vue";
import { fireauth } from "../firebase/config";

const error = ref(null);
const isPending = ref(false);

const signOut = async () => {
  isPending.value = true;
  try {
    await fireauth.signOut();
    error.value = null;
    isPending.value = false;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    isPending.value = false;
  }
};

const useSignOut = () => {
  return { signOut, isPending, error };
};

export default useSignOut;
