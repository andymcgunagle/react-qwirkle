import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100vh;

  & * .material-icons {
    color: var(--clr-secondary-text);
  }
`;

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <NotFoundPage>
      <h2>
        Oh no! Page not found.
      </h2>
      <button
        onClick={() => navigate({ pathname: '/' })}
        className="with-icon"
      >
        <span className="material-icons">
          arrow_back
        </span>
        <span>
          Return home
        </span>
      </button>
    </NotFoundPage>
  );
};
