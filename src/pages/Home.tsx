import { tracks_data } from "../assets/data/tracks";
import GridItems from "../components/GridItems";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <div className="space-y-12">
      <Welcome />
      <GridItems title="Recently Played" data={tracks_data} />
      <GridItems title="Made For Doğan Özgür" data={tracks_data} />
    </div>
  );
}
