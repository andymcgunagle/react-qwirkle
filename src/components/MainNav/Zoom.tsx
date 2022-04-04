import { useSelector } from "react-redux";
import { RootState, useTypedDispatch } from "../../redux/store";
import { toggleZoom } from "../../redux/userSlice";

export default function Zoom() {
  const dispatch = useTypedDispatch();
  const isZoomedIn = useSelector((state: RootState) => state.user.isZoomedIn);

  return (
    <button
      className="with-icon"
      onClick={() => dispatch(toggleZoom())}
    >
      <span className="material-icons-round">zoom_in</span>
      {isZoomedIn ? "Zoom out" : "Zoom in"}
    </button>
  );
};