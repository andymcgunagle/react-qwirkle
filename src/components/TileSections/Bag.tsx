import styled from "styled-components";

import TileSection from "./TileSection";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(54, 1fr);
  gap: var(--space-00);

  overflow: scroll;
  
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function Bag() {
  return (
    <TileSection
      dropZoneType="bag"
      hide={true}
      numTiles={108}
      tileId="bag"
      Wrapper={Wrapper}
    />
  );
};
