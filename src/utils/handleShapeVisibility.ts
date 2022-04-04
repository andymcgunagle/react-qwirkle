export function handleShapeVisibility(dropZone: HTMLDivElement, tile: HTMLElement) {
  // If dropped in a bag drop zone, do the following...
  if (dropZone.classList.contains("bag")) {
    tile.firstElementChild?.classList.add("hide");
  };

  // If dropped in a grid drop zone, do the following...
  if (dropZone.classList.contains("grid")) {
    tile.firstElementChild?.classList.remove("hide");
  };

  // If dropped in a player drop zone, do the following...
  if (dropZone.classList.contains("player")) {
    tile.firstElementChild?.classList.remove("hide");
  };
};