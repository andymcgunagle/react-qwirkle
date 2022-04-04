import { useRef, useState } from "react";

import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import { firestoreDB } from "../../firebase";
import { setDoc, doc, updateDoc } from "firebase/firestore";

import { createBag } from "../../utils/createBag";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

export default function StartNewGame() {
  const uid = useSelector((state: RootState) => state.user.uid);

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dialogRef, () => setShowConfirmDialog(false));

  async function handleClick() {
    if (uid) {
      await updateDoc(doc(firestoreDB, "users", uid, "games", uid), { tiles: createBag() });

      await setDoc(doc(firestoreDB, "users", uid, "games", "current"), { currentGameId: uid });

      setShowConfirmDialog(false);

      window.location.reload();
    }
  };

  return (
    <>
      <button
        className="outlined with-icon"
        onClick={() => setShowConfirmDialog(true)}
      >
        <span className="material-icons-round">play_circle_filled</span>
        <span>Start new game</span>
      </button>
      {showConfirmDialog &&
        <div
          className="modal card brand light column-center gap-4"
          ref={dialogRef}
        >
          <p>Are you sure you'd like to start a new game?</p>
          <div className="row-center gap-4">
            <button
              onClick={() => setShowConfirmDialog(false)}
              className="standard danger"
              type="button"
            >
              Cancel
            </button>
            <button
              onClick={handleClick}
              type="button"
            >
              Start new game
            </button>
          </div>
        </div>
      }
    </>
  );
};