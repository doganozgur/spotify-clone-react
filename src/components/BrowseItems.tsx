import { browse_data } from "../assets/data/browse";
import { BrowseItemType } from "../utils/types";
import BrowseItem from "./BrowseItem";

export default function BrowseItems() {
  return (
    <section>
      <h2 className="section-title mb-4">Hepsine göz at</h2>
      <div className="grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-6">
        {browse_data?.map((item: BrowseItemType) => (
          <BrowseItem key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}
