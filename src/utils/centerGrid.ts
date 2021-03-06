export function centerGrid(behavior: ScrollBehavior = "smooth") {
  const gridCell = document.getElementById(`grid-${(2500 / 2) - 25}`);

  if (gridCell) {
    gridCell.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
};