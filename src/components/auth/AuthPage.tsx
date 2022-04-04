import { useLocation, useNavigate } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';

import styled from 'styled-components';
import AnimatedTile from '../_reusables/AnimatedTile';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-2);

  margin: auto;
  max-width: 500px;
  min-height: 100vh;
  padding-bottom: var(--space-16);
`;

export default function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const onButtonClick = () => {
    if (location.pathname !== '/sign-in') navigate('/sign-in');
    else navigate('/sign-up');
  };

  return (
    <Wrapper>
      <AnimatedTile />
      <h2 className="center font-14 clr-brand-700">
        React Qwirkle
      </h2>

      <>{(location.pathname === '/' || location.pathname === '/sign-up') && <SignUp />}</>
      <>{location.pathname === '/sign-in' && <SignIn />}</>

      <button
        onClick={onButtonClick}
        type="button"
        className="text center"
      >
        {
          location.pathname === '/sign-in' ?
            "New here? Click here to sign up." :
            "Already have an account? Click here to sign in."
        }
      </button>
    </Wrapper>
  );
};