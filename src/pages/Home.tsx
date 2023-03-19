import { tracks_data } from "../assets/data/tracks";
import GridItems from "../components/GridItems";
import Welcome from "../components/Welcome";
import useScreenWidth from "../hooks/useScreenWidth";
import { Icon } from "../utils/Icons";

export default function Home() {
  const screenWidth = useScreenWidth();

  return (
    <div className="space-y-12">
      {screenWidth < 768 && (
        <button className=" bg-transparent border-none flex ml-auto mx-2 my-6">
          <Icon name="gear" />
        </button>
      )}
      <Welcome />
      <GridItems title="Recently Played" data={tracks_data} />
      <GridItems title="Made For Doğan Özgür" data={tracks_data} />
    </div>
  );
}
