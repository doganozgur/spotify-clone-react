import { madefor_data } from "../assets/madefor";
import GridItems from "../components/Content/GridItems";
import Welcome from "../components/Content/Welcome";

export default function Home() {
  return (
    <div className="space-y-12">
      <Welcome />
      <GridItems title="Recently Played" data={madefor_data} />
      <GridItems title="Made For Doğan Özgür" data={madefor_data} />
    </div>
  );
}
