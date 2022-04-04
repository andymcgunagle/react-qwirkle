import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import styled from "styled-components";

import TileSection from "./TileSection";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--space-00);
  align-self: center;

  width: fit-content;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function PlayersTiles() {
  const uid = useSelector((state: RootState) => state.user.uid);

  return (
    <TileSection
      dropZoneType="player"
      hide={false}
      numTiles={6}
      tileId={`player-${uid}`}
      Wrapper={Wrapper}
    />
  );
};