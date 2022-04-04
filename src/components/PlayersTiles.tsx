import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import styled from "styled-components";

import DropZone from "./_reusables/DropZone";
import Tile from "./_reusables/Tile";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-0);

  width: fit-content;
`;

export default function PlayersTiles() {
  const uid = useSelector((state: RootState) => state.user.uid);
  const tiles = useSelector((state: RootState) => state.user.tiles);

  return (
    <Wrapper className="component-background">
      {Array(6).fill(null).map((_, index) => {
        if (tiles && tiles.find(tile => tile.position === `player-${uid}-${index}`)) {
          return (
            <DropZone key={index} id={`player-${index}`} dropZoneType="player">
              <Tile
                {...tiles.filter(tile => tile.position === `player-${uid}-${index}`)[0]}
                hide={false}
              />
            </DropZone>
          );
        }

        return (
          <DropZone key={index} id={`player-${index}`} dropZoneType="player" />
        );
      })}
    </Wrapper>
  );
};