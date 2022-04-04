import styled from 'styled-components';
import Tile from './Tile';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-4);


  animation: var(--animation-fade-in);
  height: calc(100vh - var(--space-2) * 2);

  & > :first-child {
    animation: var(--animation-spin);
    height: var(--space-10);
    width: var(--space-10);
  }
  
  & > * {
    animation: var(--animation-pulse);
    font-size: var(--font-size-14);
  }
`;

export default function Loading() {
  return (
    <Wrapper>
      <Tile
        color='#029657'
        hide={false}
        position=''
        id=''
        shape='star'
      />
      <p>Loading</p>
    </Wrapper>
  );
};
