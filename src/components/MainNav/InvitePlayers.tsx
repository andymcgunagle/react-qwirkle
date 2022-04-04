import { useRef, useState } from "react";

import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import { useOnClickOutside } from "../../hooks/useOnClickOutside";

export default function InvitePlayers() {
  const currentGameId = useSelector((state: RootState) => state.user.currentGameId);

  const [copied, setCopied] = useState(false);
  const [showCurrentGameId, setShowCurrentGameId] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dialogRef, () => setShowCurrentGameId(false));

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
      <button onClick={handleButtonClick} className="outlined with-icon">
        <span className="material-icons-round">send</span>
        <span>Invite players</span>
      </button>
      {showCurrentGameId &&
        <div
          className="modal card brand light column-center gap-4"
          onClick={handleCardClick}
          ref={dialogRef}
        >
          <p>
            Click to copy game ID listed below, then share it with your friends.
          </p>
          <button className={`${copied && "success light outlined"}`}>
            {copied ? "Copied!" : currentGameId}
          </button>
        </div>}
    </>
  );
};
