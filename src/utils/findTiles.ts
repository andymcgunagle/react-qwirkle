import { TileObject } from "../data/tiles";

export function findTiles(tiles: TileObject[], section: string, index: number) {
  return tiles.find(tile => tile.position === `${section}-${index}`);
};