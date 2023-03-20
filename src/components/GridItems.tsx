import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

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
    if (screenWidth <= 640) {
      setItemsToRender(2);
    } else if (screenWidth <= 768) {
      setItemsToRender(3);
    } else if (screenWidth < 1024) {
      setItemsToRender(4);
    } else {
      setItemsToRender(6);
    }
  }, [screenWidth]);

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
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
      {screenWidth > 768 ? (
        <div className="grid lg:grid-cols-6 md:grid-cols-4 gap-4">
          {data
            .slice(0, itemsToRender)
            .sort(() => Math.random() - 0.5)
            .map((item: TrackTypes) => (
              <GridItem key={item.id} item={item} />
            ))}
        </div>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={15}
          slidesPerView={2}
          scrollbar={{ draggable: true }}
        >
          {data
            .sort(() => Math.random() - 0.5)
            .map((item: TrackTypes) => (
              <SwiperSlide key={item.id}>
                <GridItem key={item.id} item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </section>
  );
}
