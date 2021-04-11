import { ref } from "vue";
import { fireauth } from "../firebase/config";

const user = ref(fireauth.currentUser);

fireauth.onAuthStateChanged((_user) => {
  console.log(`User state changed. Current user is : ${_user}`);
  user.value = _user;
});

const getUser = () => {
  return { user: user.value };
};

export default getUser;
