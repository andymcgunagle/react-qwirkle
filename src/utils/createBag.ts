export const shapes = [
  "circle", // circle
  "close", // X
  "square", // square
  "diamond", // diamond
  "keyboard_command_key", // clover
  "star", // star
];

export const colors = [
  "#0F72B2", // blue
  "#029657", // green
  "#E77527", // orange
  "#7355A5", // purple
  "#DC3128", // red
  "#D9DF24", // yellow
];

export interface TileObject {
  id: string,
  color: string,
  shape: string,
  position: string,
};

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