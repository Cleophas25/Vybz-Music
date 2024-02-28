import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, doc, getDocs } from "firebase/firestore";

const useFirebaseData = (collectionName) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllSongs = async () => {
      try {
        setIsLoading(true);
        const querySnapshot = await getDocs(collection(db, "songs"));
        let songsArray = [];
        querySnapshot.forEach((doc) => {
          songsArray.push({ ...doc.data() });
          setData(songsArray);
        });
       
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getAllSongs();
  }, []);

  return { data };
};

export default useFirebaseData;
