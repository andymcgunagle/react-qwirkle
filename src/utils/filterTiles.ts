import { TileObject } from "../data/tiles";

export function filterTiles(tiles: TileObject[], filter: string): TileObject[] {
  return tiles.filter((tile: TileObject) => tile.position.includes(filter));
};