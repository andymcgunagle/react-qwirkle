import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux/store";

const MaterialIcon = styled.span`
  &.zoom-in {
    font-size: var(--font-size-14) !important;
  }

  &.hide {
    display: none;
  }

  &.zoom-out {
    font-size: var(--font-size-8) !important;
  }
`;

export default function Shape({ hide, shape }: ShapeProps) {
  const isZoomedIn = useSelector((state: RootState) => state.user.isZoomedIn);

  return (
    <MaterialIcon className={`material-icons-round shape ${isZoomedIn ? "zoom-in" : "zoom-out"} ${hide && 'hide'}`}>
      {shape}
    </MaterialIcon>
  );
};

interface ShapeProps {
  hide: boolean,
  shape: string,
};