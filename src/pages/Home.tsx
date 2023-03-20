import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { welcome_data } from "../assets/data/welcome";
import { tracks_data } from "../assets/data/tracks";
import GridItems from "../components/GridItems";
import Welcome from "../components/Welcome";
import useScreenWidth from "../hooks/useScreenWidth";
import { Icon } from "../utils/Icons";

export default function Home() {
  const screenWidth = useScreenWidth();

  return (
    <div className="space-y-12">
      {screenWidth < 768 && (
        <button className=" bg-transparent border-none flex ml-auto mx-2 my-6">
          <Icon name="gear" />
        </button>
      )}
      {/* Welcome */}
      {welcome_data ? (
        <Welcome data={welcome_data} />
      ) : (
        <Skeleton
          count={2}
          baseColor="#121212"
          highlightColor="#939393"
          height={80}
        />
      )}
      {/* Recently Played */}
      {tracks_data ? (
        <>
          <GridItems title="Recently played" data={tracks_data} />
          <GridItems title="Made for you" data={tracks_data} />
        </>
      ) : (
        <Skeleton
          count={1}
          baseColor="#121212"
          highlightColor="#939393"
          height={300}
        />
      )}
    </div>
  );
}
