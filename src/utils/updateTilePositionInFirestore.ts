import { getDoc, updateDoc } from "firebase/firestore";
import { currentGameRef } from "./currentGameRef";
import { updateTilesArray } from "./updateTilesArray";

export async function updateTilePositionInFirestore({
  currentGameId,
  dropZoneId,
  tileId,
  uid,
}: any) {
  try {
    const docSnap = await getDoc(currentGameRef(currentGameId));

    if (docSnap.exists()) {
      await updateDoc(currentGameRef(currentGameId), {
        tiles: updateTilesArray({ tiles: docSnap.data().tiles, tileId, dropZoneId, uid }),
      });
    } else {
      console.error("No such document!");
    }
  } catch (error) {
    console.error(error);
  };
};