import { ref } from "vue";
import { firestore } from "../firebase/config";

const useDocument = (collection, id) => {
  const error = ref(null);
  const isPending = ref(false);
  const docRef = firestore.collection(collection).doc(id);

  const documentUpdate = async (contents) => {
    error.value = null;
    isPending.value = true;

    await docRef
      .update(contents)
      .then((res) => {
        console.log(`useDocument:${res}`);
        isPending.value = false;
        return res;
      })
      .catch((err) => {
        console.log(`useDocument:${err.message}`);
        error.value = err.message;
        isPending.value = false;
      });

    // note. Other way.
    // try {
    //   const res = await docRef.update(contents);
    //   isPending.value = false;
    //   return res;
    // } catch (err) {
    //   console.log(err.message);
    //   isPending.value = false;
    //   error.value = "could not update the document";
    // }
  };

  const documentDelete = async () => {
    console.log(`document delete:${docRef}`);

    error.value = null;
    isPending.value = true;

    try {
      await docRef.delete();
      isPending.value = false;
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
      isPending.value = false;
    }
  };

  return { documentUpdate, documentDelete, isPending, error };
};

export default useDocument;
