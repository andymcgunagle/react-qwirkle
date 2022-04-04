import styled from "styled-components";

const MaterialIconStyles = styled.span`
  color: var(--clr-secondary-text);
  font-size: var(--font-size-lg);

  &.outlined {
    background: var(--clr-brand);
    border-radius: 100%;
    padding: 0.25rem;
  }

  &.danger {
    color: var(--clr-danger);
  }
  
  &.loading {
    animation: loading-spinner 2s linear infinite;
  }
  
  &.app-loading {
    font-size: var(--font-size-banner-heading);
    color: var(--clr-brand);
  }
`;

export default function MaterialIcon({
  className,
  name,
  onClick,
}: MaterialIconProps) {
  return (
    <MaterialIconStyles className={`material-icons ${className}`} onClick={onClick}>
      {name}
    </MaterialIconStyles>
  );
};

interface MaterialIconProps {
  className?: string,
  name: string,
  onClick?: () => any,
};
