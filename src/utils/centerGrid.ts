export function centerGrid(behavior: ScrollBehavior = "smooth") {
  const gridCell = document.getElementById(`grid-${(2500 / 2) - 25}`);

  if (gridCell) {
    gridCell.scrollIntoView({
      behavior,
      block: "center",
      inline: "center",
    });

    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: "smooth",
    // });
  }
};