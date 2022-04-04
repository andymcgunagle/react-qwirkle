import styled from "styled-components";

import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import CenterGameGrid from "./CenterGameGrid";
import JoinGame from "./JoinGame";
import SignOut from "../auth/SignOut";
import StartGame from "./StartGame";
import Zoom from "./Zoom";
import InvitePlayers from "./InvitePlayers";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--space-2);
  gap: var(--space-2);

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-2);
  }
`;

export default function MainNav() {
  const uid = useSelector((state: RootState) => state.user.uid);
  const currentGameId = useSelector((state: RootState) => state.user.currentGameId);

  return (
    <Nav className="row-center">
      <div>
        <CenterGameGrid />
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