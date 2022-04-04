import { TileObject } from "./createBag";

export function filterTiles(tiles: TileObject[], filter: string): TileObject[] {
  return tiles.filter((tile: TileObject) => tile.position.includes(filter));
};