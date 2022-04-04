import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: var(--clr-brand-700);
  margin: 0;
  opacity: 0.75;
  
  & > .line {
    background-color: var(--clr-brand-700);
    height: 1px;
    width: 100%;
  }
  
  & > span {
    color: var(--clr-brand-700);
    font-size: var(--font-size-0);
  }
`;

export default function HorizontalRuleWithText({
  text,
}: HorizontalRuleWithTextProps) {
  return (
    <Wrapper>
      <div className="line"></div>
      <span>
        {text}
      </span>
      <div className="line"></div>
    </Wrapper>
  );
};

interface HorizontalRuleWithTextProps {
  text: string,
};
