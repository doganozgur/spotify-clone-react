import { collection_data } from "../assets/data/collection";
import CollectionItems from "../components/CollectionItems";

export default function Collection() {
  return (
    <section>
      <CollectionItems data={collection_data} title={"Çalma Listeleri"} />
    </section>
  );
}
