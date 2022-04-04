import { centerGameGrid } from "../../utils/centerGameGrid";

export default function CenterGameGrid() {
  return (
    <button onClick={() => centerGameGrid()}>
      Center grid
    </button>
  );
};