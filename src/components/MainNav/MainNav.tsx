import styled from "styled-components";

import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import CenterGrid from "./CenterGrid";
import JoinGame from "./JoinGame";
import SignOut from "../auth/SignOut";
import StartNewGame from "./StartNewGame";
import Zoom from "./Zoom";
import InvitePlayers from "./InvitePlayers";
import OpenBag from "./OpenBag";

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap-reverse;
  gap: var(--space-4);

  & > div {
    display: flex;
    align-items: center;
    gap: var(--space-6);
    
    overflow-x: scroll;
    padding: 0 var(--space-6);
  }

  @media only screen and (min-width: 768px) {
    justify-content: space-between; 
    gap: var(--space-2);

    & > div {
    gap: var(--space-2);
  
    padding: 0 var(--space-2);
  }
  }
`;

export default function MainNav() {
  const uid = useSelector((state: RootState) => state.user.uid);
  const currentGameId = useSelector((state: RootState) => state.user.currentGameId);

  return (
    <Nav className="row-center">
      <div>
        <OpenBag />
        <Zoom />
        <CenterGrid />
      </div>
      <div>
        {currentGameId === uid && <InvitePlayers />}
        <StartNewGame />
        <JoinGame />
        <SignOut />
      </div>
    </Nav>
  );
};