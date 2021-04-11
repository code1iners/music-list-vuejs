import { ref } from "vue";
import { fireauth } from "../firebase/config";

const error = ref(null);

const signIn = async (email, password) => {
  try {
    const res = await fireauth.signInWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error("Could not complete sign in");
    }
    error.value = null;

    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignIn = () => {
  return { signIn, error };
};

export default useSignIn;
