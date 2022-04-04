import { useRef } from "react";
import styled from "styled-components";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

export const Wrapper = styled.dialog`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);

  position: absolute;
  left: 50%;
  top: 50%;

  background-color: var(--clr-brand-100);
  border-radius: var(--border-radius-2);
  border: var(--border-width-2) solid var(--clr-brand-700);
  cursor: pointer;
  max-width: calc(100% - var(--space-2) * 2);
  padding: var(--space-4);
  transform: translate(-50%, -50%);
  
  &:active {
    transform: translate(-50%, -50%) scale(0.95);
  }
  
  & > * {
    color: var(--clr-brand-700);
  }
  
  &.copied {
    background-color: var(--clr-success-100);
    border: var(--border-width-2) solid var(--clr-success-700);
  }

  &.copied > * {
    color: var(--clr-success-700);
  }
`;

export default function Dialog({
  children,
  className,
  handler,
  onClick,
}: DialogProps) {

  const dialogRef = useRef<HTMLElement>(null);
  useOnClickOutside(dialogRef, handler);

  return (
    <Wrapper
      className={className}
      onClick={onClick}
      ref={dialogRef}
    >
      {children}
    </Wrapper>
  );
};

interface DialogProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  handler: (value: React.SetStateAction<boolean>) => void;
  onClick?: () => void;
};