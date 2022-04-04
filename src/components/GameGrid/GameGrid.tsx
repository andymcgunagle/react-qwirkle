import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import styled from "styled-components";

import DropZone from "../_reusables/DropZone";
import Tile from "../_reusables/Tile";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(50, 1fr);
  grid-template-rows: repeat(50, 1fr);
  gap: clamp(0.05rem, 0.1rem + 0.05vw, 0.125rem);

  overflow: scroll;

  &.zoom-out {
    gap: 0;
  }
`;

export default function GameGrid() {
  const tiles = useSelector((state: RootState) => state.user.tiles);

  return (
    <Wrapper className="component-background" id="game-grid">
      {Array(2500).fill(null).map((_, index) => {
        if (tiles && tiles.find(tile => tile.position === `grid-${index}`)) {
          return (
            <DropZone key={index} id={`grid-${index}`} dropZoneType="grid">
              <Tile
                {...tiles.filter(tile => tile.position === `grid-${index}`)[0]}
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