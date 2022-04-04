import styled from "styled-components";

import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import CenterGrid from "./CenterGrid";
import JoinGame from "./JoinGame";
import SignOut from "../auth/SignOut";
import StartGame from "./StartGame";
import Zoom from "./Zoom";
import InvitePlayers from "./InvitePlayers";

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap-reverse;
  gap: var(--space-2);
  
  padding-bottom: var(--space-2);

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-2);
  }

  @media only screen and (min-width: 768px) {
    justify-content: space-between; 
  }
`;

export default function MainNav() {
  const uid = useSelector((state: RootState) => state.user.uid);
  const currentGameId = useSelector((state: RootState) => state.user.currentGameId);

  return (
    <Nav className="row-center">
      <div>
        <CenterGrid />
        <Zoom />
      </div>
      <div>
        {currentGameId === uid && <InvitePlayers />}
        <StartGame />
        <JoinGame />
        <SignOut />
      </div>
    </Nav>
  );
};