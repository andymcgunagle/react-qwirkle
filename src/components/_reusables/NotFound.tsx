import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AnimatedTile from './AnimatedTile';

const NotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  height: 100vh;
  text-align: center;

  & * .material-icons {
    color: var(--clr-secondary-text);
  }
`;

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <NotFoundPage>
      <AnimatedTile />
      <h2 className="font-20">
        Oh no! Page not found.
      </h2>
      <button
        onClick={() => navigate({ pathname: '/' })}
        className="with-icon"
      >
        <span className="material-icons-round">
          arrow_back
        </span>
        <span>
          Return home
        </span>
      </button>
    </NotFoundPage>
  );
};
