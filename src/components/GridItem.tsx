import { NavLink } from "react-router-dom";

import { Icon } from "../utils/Icons";
import { TrackTypes } from "../utils/types";

type Props = {
  data: TrackTypes;
};

function GridItem({ data }: Props) {
  /**
   * Decides border radius of the images
   * @param {string} type
   * @returns {string} Classname for border radius
   */
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

  return (
    <NavLink
      to="/"
      className="flex flex-col bg-darkGray p-4 rounded-md hover:bg-active transition duration-300 ease cursor-pointer relative group"
    >
      {
        <img
          src={data.img}
          alt={data.title}
          className={`mb-4 object-cover w-full h-full ${imageStyle(data.type)}`}
        />
      }
      <div className="h-16">
        <h4 className="item-title overflow-hidden overflow-ellipsis whitespace-nowrap">
          {data.title}
        </h4>
        <p className="item-desc line-clamp-2">{data.desc}</p>
      </div>
      <button className="w-12 h-12 rounded-full bg-primary items-center justify-center absolute bottom-24 right-6 hidden group-hover:flex">
        <Icon size={16} name="play" />
      </button>
    </NavLink>
  );
}

export default GridItem;
