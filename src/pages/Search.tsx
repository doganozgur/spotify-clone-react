import GridItems from "../components/GridItems";
import { search_data } from "../assets/data/search";
import BrowseItems from "../components/BrowseItems";

export default function Search() {
  return (
    <div className="space-y-12">
      <GridItems data={search_data} title={"Yakındaki Aramalar"} more={false} />
      <BrowseItems />
    </div>
  );
}
