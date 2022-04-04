import { useRef, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { doc, updateDoc } from "firebase/firestore";
import { firestoreDB } from "../../firebase";

import { useOnClickOutside } from "../../hooks/useOnClickOutside";

export default function JoinGame() {
  const uid = useSelector((state: RootState) => state.user.uid);

  const [showJoinGame, setShowJoinGame] = useState(false);
  const [gameId, setGameId] = useState("");

  const dialogRef = useRef<HTMLFormElement>(null);
  useOnClickOutside(dialogRef, () => setShowJoinGame(false));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      if (uid) {
        await updateDoc(doc(firestoreDB, "users", uid, "games", "current"), {
          currentGameId: gameId
        });

        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    };
  };

  return (
    <>
      <button
        className="outlined with-icon"
        onClick={() => setShowJoinGame(!showJoinGame)}
      >
        <span className="material-icons-round">groups</span>
        <span>Join game</span>
      </button>
      {showJoinGame &&
        <form
          className="modal card brand light column-center gap-4"
          onSubmit={handleSubmit}
          ref={dialogRef}
        >
          <h3>
            Join a game
          </h3>
          <input
            onChange={(e) => setGameId(e.target.value)}
            placeholder="Game ID"
            type="text"
            value={gameId}
          />
          <button
            type="submit"
          >
            Submit
          </button>
        </form>}
    </>
  );
};
