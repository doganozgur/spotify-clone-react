import { Icon } from "../utils/Icons";
import { TrackTypes } from "../utils/types";
import { setCurrent } from "../redux/playerSlice";
import { useAppDispatch, useAppSelector } from "../hooks/useAppStore";

type Props = {
  item: TrackTypes;
};

export default function GridItem({ item }: Props) {
  const dispatch = useAppDispatch();

  const { current, playing, controls } = useAppSelector(
    (state) => state.player
  );
  const imageStyle = (type: string) => {
    switch (type) {
      case "artist":
        return "rounded-full";
      case "album":
        return "rounded-md";
      case "podcast":
        return "rounded-2xl";
      default:
        return type;
    }
  };

  const { title, description, image, type } = item;

  const isCurrentItem = current?.id === item.id && playing;

  const updateCurrent = () => {
    if (current?.id === item.id) {
      if (playing) {
        controls?.pause();
      } else {
        controls?.play();
      }
    } else {
      dispatch(setCurrent(item));
    }
  };

  return (
    <article className="flex flex-col bg-darkGray p-4 rounded-md hover:bg-active transition duration-300 ease cursor-pointer relative group">
      <img
        src={image}
        alt={title}
        className={`mb-4 object-cover aspect-square flex-1 ${imageStyle(type)}`}
      />
      <div className="h-16">
        <h4 className="item-title overflow-hidden overflow-ellipsis whitespace-nowrap">
          {title}
        </h4>
        <p className="item-desc line-clamp-2">{description}</p>
      </div>
      <button
        onClick={updateCurrent}
        className={`w-12 h-12 rounded-full bg-primary items-center justify-center absolute bottom-24 right-6 group-hover:flex ${
          !isCurrentItem ? "hidden" : "flex"
        }`}
      >
        <Icon size={16} name={isCurrentItem ? "pause" : "play"} />
      </button>
    </article>
  );
}
