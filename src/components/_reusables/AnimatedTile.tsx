import { useEffect, useState } from "react";

import { colors, shapes } from "../../data/tiles";

import Tile from "./Tile";

import styled from 'styled-components';

const Wrapper = styled.div`
  align-self: center;
  animation: var(--animation-spin-and-bounce);
  height: var(--space-10);
  margin-bottom: var(--space-0);
  width: var(--space-10);
`;

export default function AnimatedTile() {
  const [tileShape, setTileShape] = useState(shapes[0]);
  const [tileColor, setTileColor] = useState(colors[0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTileShape(shapes[Math.floor(Math.random() * shapes.length)]);
      setTileColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 2250);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <Tile
        color={tileColor}
        hide={false}
        id=''
        position=''
        shape={tileShape}
      />
    </Wrapper>
  );
};