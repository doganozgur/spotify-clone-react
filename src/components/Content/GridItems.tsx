import { NavLink } from "react-router-dom";

import GridItem from "../GridItem";
import { TrackTypes } from "../../utils/types";

type Props = {
  data: TrackTypes[];
  title: string;
  more?: boolean;
};

function GridItems({ data, title, more = true }: Props) {
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
      <div className="grid grid-cols-7 gap-4">
        {data.map((info: TrackTypes) => (
          <GridItem key={info.id} data={info} />
        ))}
      </div>
    </section>
  );
}
export default GridItems;
