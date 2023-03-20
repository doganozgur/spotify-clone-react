import { Fragment } from "react";
import { TrackTypes } from "../utils/types";
import GridItem from "./GridItem";

type Props = {
  title: string;
  data: TrackTypes[];
};

export default function CollectionItems({ title, data }: Props) {
  return (
    <section>
      <h2 className="section-title mb-4">{title}</h2>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
        <div className="col-span-2 rounded-md flex flex-wrap items-center gap-1 p-5 relative bg-gradient-to-r from-cyan-500 to-blue-500 min-h-[250px]">
          <div className=" line-clamp-3">
            {data.map((item) => (
              <Fragment key={item.id}>
                <span className="font-light text-sm sm:text-md">
                  {item.artist}
                </span>{" "}
                <span className="text-gray-300 font-light text-sm sm:text-md">
                  {item.title} •{" "}
                </span>
              </Fragment>
            ))}
          </div>
          <div className="absolute bottom-6 left-6">
            <h2 className="sm:text-3xl text-xl font-bold">
              Beğenilen Şarkılar
            </h2>
            <p>65 beğenilen şarkılar</p>
          </div>
        </div>
        {data.map((item) => (
          <GridItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
