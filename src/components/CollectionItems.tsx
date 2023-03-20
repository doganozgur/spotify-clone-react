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
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-2 rounded-md flex flex-wrap items-center gap-1 p-9 relative bg-gradient-to-r from-cyan-500 to-blue-500">
          {data.map((item) => (
            <span key={item.id}>{item.artist} •</span>
          ))}
          <div className="absolute bottom-8 left-8">
            <h2 className="text-3xl font-bold">Beğenilen Şarkılar</h2>
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
