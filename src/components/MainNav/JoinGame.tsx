import { useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { doc, updateDoc } from "firebase/firestore";
import { firestoreDB } from "../../firebase";

import Dialog from "../_reusables/Dialog";

export default function JoinGame() {
  const uid = useSelector((state: RootState) => state.user.uid);

  const [showJoinGame, setShowJoinGame] = useState(false);
  const [gameId, setGameId] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      if (uid) {
        await updateDoc(doc(firestoreDB, "users", uid, "games", "current"), { currentGameId: gameId });
        setShowJoinGame(false);
      }
    } catch (error) {
      console.error(error);
    };
  };

  return (
    <>
      <button
        className="with-icon"
        onClick={() => setShowJoinGame(!showJoinGame)}
      >
        <span className="material-icons-round">groups</span>
        <span>Join game</span>
      </button>
      {showJoinGame &&
        <Dialog
          onSubmit={handleSubmit}
          handler={() => setShowJoinGame(false)}
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
        </Dialog>}
    </>
  );
};
