import { ref } from "vue";
import { fireauth } from "../firebase/config";

const user = ref(fireauth.currentUser);

fireauth.onAuthStateChanged((_user) => {
  // console.log(`User state changed. Current user is : ${_user.email}`);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
