import { TileObject } from "../data/tiles";

export function getTile(tiles: TileObject[], section: string, index: number) {
  return tiles.filter(tile => tile.position === `${section}-${index}`)[0];
};
