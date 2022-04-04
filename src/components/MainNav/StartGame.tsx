import { useState } from "react";

import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import { firestoreDB } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";

import { createBag } from "../../utils/createBag";

import Dialog from "../_reusables/Dialog";

export default function StartGame() {
  const uid = useSelector((state: RootState) => state.user.uid);

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  async function startGame() {
    if (uid) {
      await setDoc(doc(firestoreDB, "users", uid, "games", uid), { tiles: createBag() });
      await setDoc(doc(firestoreDB, "users", uid, "games", "current"), { currentGameId: uid });
      setShowConfirmDialog(false);
    }
  };

  return (
    <>
      <button onClick={() => setShowConfirmDialog(true)}>
        Start new game
      </button>
      {showConfirmDialog &&
        <Dialog handler={() => setShowConfirmDialog(false)}>
          <p>Are you sure you'd like to start a new game?</p>
          <div className="row-center gap-4">
            <button
              onClick={() => setShowConfirmDialog(false)}
              className="standard danger"
            >
              Cancel
            </button>
            <button
              onClick={startGame}
            >
              Start new game
            </button>
          </div>
        </Dialog>
      }
    </>
  );
};