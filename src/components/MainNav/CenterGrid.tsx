import { centerGrid } from "../../utils/centerGrid";

export default function CenterGrid() {
  return (
    <button onClick={() => centerGrid()} className="with-icon">
      <span className="material-icons-round">adjust</span>
      <span>Center grid</span>
    </button>
  );
};
