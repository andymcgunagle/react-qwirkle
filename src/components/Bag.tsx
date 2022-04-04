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
  overflow: scroll;
`;

export default function Bag() {
  const tiles = useSelector((state: RootState) => state.user.tiles);

  return (
    <Wrapper className="component-background">
      {Array(108).fill(null).map((_, index) => {
        if (tiles && tiles.find(tile => tile.position === `bag-${index}`)) {
          return (
            <DropZone key={index} id={`bag-${index}`} dropZoneType="bag">
              <Tile
                {...tiles.filter(tile => tile.position === `bag-${index}`)[0]}
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
