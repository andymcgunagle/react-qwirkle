import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

import { Route, Routes } from "react-router-dom";

import { useLoadingState } from "./hooks/useLoadingState";
import { useScrollToTopOnLoad } from "./hooks/useScrollToTopOnLoad";
import { useSetUser } from "./hooks/useSetUser";

import styled from "styled-components";

import AuthPage from "./components/auth/AuthPage";
import NotFound from "./components/_reusables/NotFound";
import Board from "./components/Board";
import MainNav from "./components/MainNav/MainNav";
import Loading from "./components/_reusables/Loading";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  
  height: 100vh;
  max-height: -webkit-fill-available;
  padding: var(--space-2);

  @media only screen and (min-width: 768px) {
    height: calc(100vh - var(--space-2) * 2);
    max-height: -webkit-fill-available;
    overflow: hidden;
    width: calc(100vw - var(--space-2) * 2);
    padding: 0;
  }
`;

export default function App() {
  useSetUser();

  useScrollToTopOnLoad();

  const { isLoading } = useLoadingState();

  const uid = useSelector((state: RootState) => state.user.uid);

  if (!uid) return (
    <div>
      {isLoading ? <Loading /> :
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/sign-up" element={<AuthPage />} />
          <Route path="/sign-in" element={<AuthPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>}
    </div>
  );

  return (
    <Wrapper>
      {isLoading ? <Loading /> :
        <>
          <MainNav />
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>}
    </Wrapper>
  );
};
