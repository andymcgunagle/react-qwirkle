import { useState } from "react";

export default function Zoom() {
  const [isZoomedOut, setIsZoomedOut] = useState(false);

  function zoomOut() {
    document.getElementById('game-grid')!.classList.add('zoom-out');

    for (let dropZone of Array.from(document.getElementsByClassName('drop-zone'))) {
      dropZone.classList.add('zoom-out');
    }

    for (let shape of Array.from(document.getElementsByClassName('shape'))) {
      shape.classList.add('zoom-out');
    }

    setIsZoomedOut(true);
  }

  function zoomIn() {
    document.getElementById('game-grid')!.classList.remove('zoom-out');

    for (let dropZone of Array.from(document.getElementsByClassName('drop-zone'))) {
      dropZone.classList.remove('zoom-out');
    }

    for (let shape of Array.from(document.getElementsByClassName('shape'))) {
      shape.classList.remove('zoom-out');
    }

    setIsZoomedOut(false);
  };

  return (
    <>
      {isZoomedOut ?
        <button onClick={zoomIn} className="with-icon">
          <span className="material-icons-round">zoom_in</span>
          Zoom In
        </button> :
        <button onClick={zoomOut} className="with-icon">
          <span className="material-icons-round">zoom_out</span>
          Zoom out
        </button>}
    </>
  );
};