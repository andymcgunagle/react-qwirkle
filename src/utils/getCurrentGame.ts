import { getDoc } from "firebase/firestore";
import { TileObject } from "../data/tiles";
import { currentGameRef } from "./currentGameRef";

export async function getCurrentGame(currentGameId: string) {
  const docSnap = await getDoc(currentGameRef(currentGameId));

  if (docSnap.exists()) {
    return docSnap.data().tiles as TileObject[];
  } else {
    console.error("No such document!");
    return null;
  };
};