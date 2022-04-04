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