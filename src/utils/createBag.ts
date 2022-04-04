import { colors, shapes, TileObject } from "../data/tiles";

export function createTiles() {
  let tiles: TileObject[] = [];

  shapes.forEach(shape => {
    colors.forEach(color => {
      tiles.push({ id: `tile-${tiles.length}`, color, shape, position: "bag" });
      tiles.push({ id: `tile-${tiles.length}`, color, shape, position: "bag" });
      tiles.push({ id: `tile-${tiles.length}`, color, shape, position: "bag" });
    });
  });

  return tiles;
};

function randomizeTiles(array: TileObject[]) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  };

  array.forEach((tile, index) => {
    tile.position = `bag-${index}`;
  });

  return array;
};

export function createBag() {
  return randomizeTiles(createTiles());
};