import styled from "styled-components";

const MaterialIcon = styled.span`
  font-size: var(--font-size-14) !important;

  &.hide {
    display: none;
  }

  &.zoom-out {
    font-size: var(--font-size-8) !important;
  }
`;

export default function Shape({ hide, shape }: ShapeProps) {
  return (
    <MaterialIcon className={`material-icons-round shape ${hide && 'hide'}`}>
      {shape}
    </MaterialIcon>
  );
};

interface ShapeProps {
  hide: boolean,
  shape: string,
};