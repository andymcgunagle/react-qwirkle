import { doc, getDoc } from "firebase/firestore";
import { firestoreDB } from "../firebase";

export async function getCurrentGameId(uid: string) {
  try {
    const gameRef = doc(firestoreDB, "users", uid, "games", "current");

    const docSnap = await getDoc(gameRef);

    if (docSnap.exists()) {
      // Need to add some sort of type checking for this
      return docSnap.data().currentGameId as string;
    } else {
      console.error("No such document!");
      return null;
    };
  } catch (error) {
    console.error(error);
    return null;
  };
};