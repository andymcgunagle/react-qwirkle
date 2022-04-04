import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/store";
import Bag from "./Bag";
import Grid from "./Grid";
import PlayersTiles from "./PlayersTiles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);

  animation: var(--animation-fade-in);
  height: 90%;
  width: 100%;
  
  & > #sidebar {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
    gap: var(--space-2);
  }

  & button {
    border: 1px solid red;
    align-self: center;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;

    height: 92.5%;

    & > #sidebar {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    }
  }
`;

export default function Board() {
  const isBagOpen = useSelector((state: RootState) => state.user.isBagOpen);

  return (
    <Wrapper>
      <div id="sidebar">
        <PlayersTiles />
        {isBagOpen && <Bag />}
      </div>
      <Grid />
    </Wrapper>
  );
};
