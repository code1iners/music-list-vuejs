import { ref } from "vue";
import { fireauth } from "../firebase/config";

const error = ref(null);

const signUp = async (email, password, displayName) => {
  try {
    const res = await fireauth.createUserWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error("Could not complete sign up");
    }
    await res.user.updateProfile({ displayName });
    error.value = null;

    return res;
  } catch (err) {
    console.log(err.message1);
    error.value = err.message;
  }
};

const useSignUp = () => {
  return { signUp, error };
};

export default useSignUp;
