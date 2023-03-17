import { setPlayerSidebar } from "../../redux/playerSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { Icon } from "../../utils/Icons";

export default function CurrentTrackCover() {
  const { current } = useAppSelector((state) => state.player);
  const dispatch = useAppDispatch();

  return (
    <div className="pb-[100%] relative group bg-black">
      <img
        className="w-full h-full absolute top-0 right-0"
        src={current?.image}
        alt={current?.title}
      />
      <button
        onClick={() => dispatch(setPlayerSidebar())}
        className="absolute right-1 top-1 -rotate-90 w-6 h-6 hover:scale-[1.1] bg-black bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-60"
      >
        <Icon name="arrowLeft" size={16} />
      </button>
    </div>
  );
}
