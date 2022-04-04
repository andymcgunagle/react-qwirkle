import { useRef } from "react";
import styled from "styled-components";

import Shape from "./Shape";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* Fade in animation is a hacky way to get rid of tile bouncing back after drop */
  animation: var(--animation-fade-in-with-delay);
  background-color: var(--clr-gray-900);
  cursor: grab;
  height: 100%;
  width: 100%;

  &:active {
    cursor: grabbing;
  }
`;

export default function Tile({
  color,
  hide,
  id,
  shape,
}: TileProps) {
  const timerRef = useRef<number>();

  function dragStartHandler(e: React.DragEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;

    e.dataTransfer.setData("tileId", target.id);

    timerRef.current = window.setTimeout(() => {
      (e.target as HTMLDivElement).style.display = "none";
    }, 0);
  };

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
    (e.target as HTMLDivElement).style.display = "flex";
    clearTimeout(timerRef.current);
  };

  return (
    <Wrapper
      draggable={true}
      id={id}
      onDragEnd={dragEndHandler}
      onDragOver={e => e.stopPropagation()}
      onDragStart={dragStartHandler}
      style={{ color }}
    >
      <Shape shape={shape} hide={hide} />
    </Wrapper>
  );
};

interface TileProps {
  color: string,
  id: string,
  position: string,
  shape: string,
  hide: boolean,
};
