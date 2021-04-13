import { ref, watchEffect } from "vue";
import { firestore } from "@/firebase/config";

const getDocument = (collection, id) => {
  let document = ref(null);
  let error = ref(null);

  let documentRef = firestore.collection(collection).doc(id);
  const unsub = documentRef.onSnapshot(
    (doc) => {
      if (doc.data()) {
        document.value = { ...doc.data(), id: doc.id };
        error.value = null;
      } else {
        error.value = "The document does not exist.";
      }
    },
    (err) => {
      console.log(err.message);
      error.value = err.message;
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { document, error };
};

export default getDocument;
