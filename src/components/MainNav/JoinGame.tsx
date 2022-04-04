import { useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { doc, updateDoc } from "firebase/firestore";
import { firestoreDB } from "../../firebase";

import styled from "styled-components";

const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - var(--space-2) * 2);
`;

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
      <button onClick={() => setShowJoinGame(!showJoinGame)}>
        Join game
      </button>
      {showJoinGame &&
        <Form className="card" onSubmit={handleSubmit}>
          <h3>Join a game</h3>
          <input
            type="text"
            placeholder="Game ID"
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
          />
          <button
            type="submit"
          >
            Submit
          </button>
        </Form>}
    </>
  );
};
