import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import styled from "styled-components";

import { findTiles } from "../utils/findTiles";
import { getTile } from "../utils/getTile";

import DropZone from "./_reusables/DropZone";
import Tile from "./_reusables/Tile";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(50, 1fr);
  grid-template-rows: repeat(50, 1fr);
  gap: var(--space-00);

  overflow: scroll;
`;

export default function Grid() {
  const tiles = useSelector((state: RootState) => state.user.tiles);

  return (
    <Wrapper className="card" id="game-grid">
      {Array(2500).fill(null).map((_, index) => {
        if (tiles && findTiles(tiles, 'grid', index)) {
          return (
            <DropZone key={index} id={`grid-${index}`} dropZoneType="grid">
              <Tile
                {...getTile(tiles, 'grid', index)}
                hide={false}
              />
            </DropZone>
          );
        }

        return (
          <DropZone key={index} id={`grid-${index}`} dropZoneType="grid" />
        );
      })}
    </Wrapper>
  );
};