import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { collection_data } from "../assets/data/collection";
import CollectionItems from "../components/CollectionItems";

export default function Collection() {
  return (
    <>
      {collection_data ? (
        <CollectionItems data={collection_data} title={"Çalma Listeleri"} />
      ) : (
        <Skeleton
          count={2}
          baseColor="#121212"
          highlightColor="#939393"
          height={260}
        />
      )}
    </>
  );
}
