import { useState } from "react";

import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import Dialog from "../_reusables/Dialog";

export default function InvitePlayers() {
  const currentGameId = useSelector((state: RootState) => state.user.currentGameId);

  const [copied, setCopied] = useState(false);
  const [showCurrentGameId, setShowCurrentGameId] = useState(false);

  function handleCardClick() {
    if (currentGameId) navigator.clipboard.writeText(currentGameId);
    setCopied(true);
  };

  function handleButtonClick() {
    setCopied(false);
    setShowCurrentGameId(!showCurrentGameId);
  };

  return (
    <>
      <button onClick={handleButtonClick}>
        Invite players
      </button>
      {showCurrentGameId &&
        <Dialog
          className={`${copied && "copied"}`}
          handler={() => setShowCurrentGameId(false)}
          onClick={handleCardClick}
        >
          <p>
            {copied ? "Copied!" : "Click to copy game ID:"}
          </p>
          <p>
            {currentGameId}
          </p>
        </Dialog>}
    </>
  );
};