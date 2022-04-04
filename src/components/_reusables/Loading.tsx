import styled from 'styled-components';

import AnimatedTile from './AnimatedTile';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-4);

  animation: var(--animation-fade-in);
  height: calc(100vh - var(--space-2) * 2);
  
  & > p {
    animation: var(--animation-pulse);
    font-size: var(--font-size-14);
  }
`;

export default function Loading() {
  return (
    <Wrapper>
      <AnimatedTile />
      <p>Loading</p>
    </Wrapper>
  );
};
