import styled from "styled-components";
import Bag from "./Bag";
import Grid from "./Grid";
import PlayersTiles from "./PlayersTiles";

const Wrapper = styled.div`
  display: flex;
  gap: var(--space-2);

  animation: var(--animation-fade-in);
  height: 92.5%;
  width: 100%;
  
  & > .players-tiles-and-bag-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
`;

export default function Board() {
  return (
    <Wrapper>
      <div className="players-tiles-and-bag-wrapper">
        <PlayersTiles />
        <Bag />
      </div>
      <Grid />
    </Wrapper>
  );
};