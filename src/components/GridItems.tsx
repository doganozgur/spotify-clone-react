import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import GridItem from "./GridItem";
import { TrackTypes } from "../utils/types";
import useScreenWidth from "../hooks/useScreenWidth";

type Props = {
  data: TrackTypes[];
  title: string;
  more?: boolean;
};

export default function GridItems({ data, title, more = true }: Props) {
  const [itemsToRender, setItemsToRender] = useState(2);

  const screenWidth = useScreenWidth();

  useEffect(() => {
    if (screenWidth < 640) {
      setItemsToRender(2);
    } else if (screenWidth < 768) {
      setItemsToRender(3);
    } else if (screenWidth < 1024) {
      setItemsToRender(4);
    } else if (screenWidth < 1280) {
      setItemsToRender(6);
    } else {
      setItemsToRender(7);
    }
  }, [screenWidth]);

  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="section-title">{title}</h2>
        {more && (
          <NavLink
            to="collections"
            className="text-xs font-semibold uppercase text-link hover:underline"
          >
            See All
          </NavLink>
        )}
      </div>
      <div className="grid xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {data.slice(0, itemsToRender).map((info: TrackTypes) => (
          <GridItem key={info.id} item={info} />
        ))}
      </div>
    </section>
  );
}
