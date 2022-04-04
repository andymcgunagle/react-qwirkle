import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { findTiles } from "../../utils/findTiles";
import { getTile } from "../../utils/getTile";

import { StyledComponent } from "styled-components";

import DropZone from "../_reusables/DropZone";
import Tile from "../_reusables/Tile";

export default function TileSection({
  dropZoneType,
  hide,
  numTiles,
  tileId,
  Wrapper,
}: TileSectionProps) {
  const tiles = useSelector((state: RootState) => state.user.tiles);

  return (
    <Wrapper className="card">
      {Array(numTiles).fill(null).map((_, index) => {
        if (tiles && findTiles(tiles, `${tileId}`, index)) {
          return (
            <DropZone
              key={index}
              id={`${dropZoneType}-${index}`}
              dropZoneType={dropZoneType}
            >
              <Tile
                {...getTile(tiles, `${tileId}`, index)}
                hide={hide}
              />
            </DropZone>
          );
        }

        return (
          <DropZone
            key={index}
            id={`${dropZoneType}-${index}`}
            dropZoneType={dropZoneType}
            isCenter={dropZoneType === "grid" && index === ((2500 / 2) - 25)}
          />
        );
      })}
    </Wrapper>
  );
};

interface TileSectionProps {
  dropZoneType: "bag" | "grid" | "player",
  hide: boolean;
  numTiles: number;
  tileId: "bag" | "grid" | `player-${string}`;
  Wrapper: StyledComponent<"div", any, {}, never>;
}