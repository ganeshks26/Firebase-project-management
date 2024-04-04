import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id);

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });

          setError(null);
        } else {
          setError("No data exists");
        }
      },
      (err) => {
        console.error(err.message);
        setError("failed to get the document");
      }
    );

    return () => unsubscribe();
  }, [collection, id]);

  return { document, error };
};
