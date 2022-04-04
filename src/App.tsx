import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

import { Route, Routes } from "react-router-dom";

import { useSetUser } from "./hooks/useSetUser";

import styled from "styled-components";

import AuthPage from "./components/auth/AuthPage";
import NotFound from "./components/_reusables/NotFound";
import GameBoard from "./components/GameBoard";
import MainNav from "./components/MainNav/MainNav";
import { useEffect, useState } from "react";
import Loading from "./components/_reusables/Loading";

const Wrapper = styled.div`
  overflow: hidden;
  height: calc(100vh - var(--space-2) * 2);
  width: calc(100vw - var(--space-2) * 2);
`;

export default function App() {
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(true);
  useSetUser();

  const uid = useSelector((state: RootState) => state.user.uid);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoadingSpinner(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!uid) return (
    <div className="App">
      {showLoadingSpinner ? <Loading /> :
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
      {showLoadingSpinner ? <Loading /> :
        <>
          <MainNav />
          <Routes>
            <Route path="/" element={<GameBoard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>}
    </Wrapper>
  );
};
