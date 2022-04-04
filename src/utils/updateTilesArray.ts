import { TileObject } from "../data/tiles";

export function updateTilesArray({
  dropZoneId,
  tileId,
  tiles,
  uid,
}: UpdateTilesArrayProps) {
  return tiles.map((savedTile: TileObject) => {
    if (savedTile.id === tileId && dropZoneId.includes("player")) {
      return {
        ...savedTile,
        position: `player-${uid}-${dropZoneId.split("-")[dropZoneId.split("-").length - 1]}`,
      };
    }

    if (savedTile.id === tileId) {
      return {
        ...savedTile,
        position: dropZoneId
      };
    }

    return savedTile;
  });
};

interface UpdateTilesArrayProps {
  dropZoneId: string,
  tileId: string,
  tiles: TileObject[],
  uid: string;
}