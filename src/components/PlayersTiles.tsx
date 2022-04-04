import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { findTiles } from "../utils/findTiles";
import { getTile } from "../utils/getTile";

import styled from "styled-components";

import DropZone from "./_reusables/DropZone";
import Tile from "./_reusables/Tile";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-00);

  width: fit-content;
`;

export default function PlayersTiles() {
  const uid = useSelector((state: RootState) => state.user.uid);
  const tiles = useSelector((state: RootState) => state.user.tiles);

  return (
    <Wrapper className="card">
      {Array(6).fill(null).map((_, index) => {
        if (tiles && findTiles(tiles, `player-${uid}`, index)) {
          return (
            <DropZone key={index} id={`player-${index}`} dropZoneType="player">
              <Tile
                {...getTile(tiles, `player-${uid}`, index)}
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