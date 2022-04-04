import { useSelector } from "react-redux";
import { RootState, useTypedDispatch } from "../../redux/store";
import { toggleBag } from "../../redux/userSlice";

export default function OpenBag() {
  const dispatch = useTypedDispatch();
  const isBagOpen = useSelector((state: RootState) => state.user.isBagOpen);

  return (
    <button
      onClick={() => dispatch(toggleBag())}
    >
      {isBagOpen ? "Close Bag" : "Open Bag"}
    </button>
  );
};