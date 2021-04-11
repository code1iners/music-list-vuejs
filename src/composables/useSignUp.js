import { ref } from "vue";
import { fireauth } from "../firebase/config";

const error = ref(null);
const isPending = ref(false);

const signUp = async (email, password, displayName) => {
  isPending.value = true;
  try {
    const res = await fireauth.createUserWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error("Could not complete sign up");
    }
    await res.user.updateProfile({ displayName });
    error.value = null;
    isPending.value = false;

    return res;
  } catch (err) {
    console.log(err.message1);
    error.value = err.message;
    isPending.value = false;
  }
};

const useSignUp = () => {
  return { signUp, isPending, error };
};

export default useSignUp;
