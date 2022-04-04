import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

import { Route, Routes } from "react-router-dom";

import { useSetUser } from "./hooks/useSetUser";

import styled from "styled-components";

import AuthPage from "./components/auth/AuthPage";
import NotFound from "./components/_reusables/NotFound";
import Board from "./components/Board";
import MainNav from "./components/MainNav/MainNav";
import Loading from "./components/_reusables/Loading";
import { useLoadingState } from "./hooks/useLoadingState";

const Wrapper = styled.div`
  overflow: hidden;
  height: calc(100vh - var(--space-2) * 2);
  width: calc(100vw - var(--space-2) * 2);
`;

export default function App() {
  useSetUser();

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
