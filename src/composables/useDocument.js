import { ref } from "vue";
import { firestore } from "../firebase/config";

const useDocument = (collection, id) => {
  const error = ref(null);
  const isPending = ref(false);
  const docRef = firestore.collection(collection).doc(id);

  const update = async (contents) => {
    error.value = null;
    isPending.value = true;

    await docRef
      .update(contents)
      .then((res) => {
        console.log(res);
        isPending.value = false;
        return res;
      })
      .catch((err) => {
        console.log(err.message);
        error.value = err.message;
        isPending.value = false;
      });

    // try {
    //   await firestore.collection(collection).add(doc);
    //   isPending.value = false;
    // } catch (err) {
    //   console.log(err.message);
    //   error.value = err.message;
    //   isPending.value = false;
    // }
  };

  return { update, isPending, error };
};

export default useDocument;
