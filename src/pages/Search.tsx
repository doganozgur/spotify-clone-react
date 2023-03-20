import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import GridItems from "../components/GridItems";
import { search_data } from "../assets/data/search";
import BrowseItems from "../components/BrowseItems";

export default function Search() {
  return (
    <div className="space-y-12">
      {search_data ? (
        <GridItems
          data={search_data}
          title={"Yakındaki aramalar"}
          more={false}
        />
      ) : (
        <Skeleton
          count={2}
          baseColor="#121212"
          highlightColor="#939393"
          height={260}
        />
      )}
      <BrowseItems />
    </div>
  );
}
