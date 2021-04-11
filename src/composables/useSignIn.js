import { ref } from "vue";
import { fireauth } from "../firebase/config";

const error = ref(null);
const isPending = ref(false);

const signIn = async (email, password) => {
  isPending.value = true;
  try {
    const res = await fireauth.signInWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error("Could not complete sign in");
    }
    error.value = null;
    isPending.value = false;

    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    isPending.value = false;
  }
};

const useSignIn = () => {
  return { signIn, isPending, error };
};

export default useSignIn;
