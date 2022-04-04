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
  overflow: scroll;
`;

export default function Bag() {
  const tiles = useSelector((state: RootState) => state.user.tiles);

  return (
    <Wrapper className="card">
      {Array(108).fill(null).map((_, index) => {
        if (tiles && findTiles(tiles, 'bag', index)) {
          return (
            <DropZone key={index} id={`bag-${index}`} dropZoneType="bag">
              <Tile
                {...getTile(tiles, 'bag', index)}
                hide={true}
              />
            </DropZone>
          );
        }

        return (
          <DropZone key={index} id={`bag-${index}`} dropZoneType="bag" />
        );
      })}
    </Wrapper>
  );
};
