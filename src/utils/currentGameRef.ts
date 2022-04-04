import { doc } from "firebase/firestore";
import { firestoreDB } from "../firebase";

export function currentGameRef(currentGameId: string) {
  return doc(firestoreDB, "users", currentGameId, "games", currentGameId);
};