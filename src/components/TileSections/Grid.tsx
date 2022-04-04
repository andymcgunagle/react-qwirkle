import { useEffect } from "react";

import styled from "styled-components";

import { centerGrid } from "../../utils/centerGrid";

import TileSection from "./TileSection";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(50, 1fr);
  grid-template-rows: repeat(50, 1fr);
  gap: var(--space-00);

  overflow: scroll;
`;

export default function Grid() {

  useEffect(() => centerGrid(), []);

  return (
    <TileSection
      dropZoneType="grid"
      hide={false}
      numTiles={2500}
      tileId="grid"
      Wrapper={Wrapper}
    />
  );
};
