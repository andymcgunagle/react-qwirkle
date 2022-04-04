import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import { updateTilePositionInFirestore } from "../../utils/updateTilePositionInFirestore";
import { handleShapeVisibility } from "../../utils/handleShapeVisibility";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--clr-gray-300);
  height: var(--space-10);
  width: var(--space-10);

  &.zoom-out {
    height: var(--space-6);
    width: var(--space-6);
  }
`;

export default function DropZone({
  id,
  children,
  dropZoneType
}: DropZoneProps) {
  const uid = useSelector((state: RootState) => state.user.uid);
  const currentGameId = useSelector((state: RootState) => state.user.currentGameId);

  async function dropHandler(e: React.DragEvent) {
    e.preventDefault();

    try {
      const tile = document.getElementById(e.dataTransfer.getData("tileId"));
      const dropZone = e.target as HTMLDivElement;

      if (tile && uid && currentGameId) {
        // Show/hide the shape on the tile
        handleShapeVisibility(dropZone, tile);

        // Update the tile's position in Firestore
        if (currentGameId) {
          await updateTilePositionInFirestore({
            currentGameId,
            dropZoneId: dropZone.id,
            tileId: tile.id,
            uid,
          });
        };
      }
    } catch (error) {
      console.error(error);
    };
  };

  return (
    <Wrapper
      className={`drop-zone ${dropZoneType}`}
      id={id}
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
      onDrop={dropHandler}
    >
      {children}
    </Wrapper >
  );
};

interface DropZoneProps {
  children?: JSX.Element,
  dropZoneType: "bag" | "grid" | "player",
  id: string,
};