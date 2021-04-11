import { ref } from "vue";
import { fireauth } from "../firebase/config";

const error = ref(null);

const signOut = async () => {
  try {
    await fireauth.signOut();
    error.value = null;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignOut = () => {
  return { signOut, error };
};

export default useSignOut;
