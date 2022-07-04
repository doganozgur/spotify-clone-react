import GridItem from "components/GridItem";
import { recently_played_data } from "../../assets/recently_played/index";

function RecentlyPlayed() {
  return (
    <section>
      <h2 className="section-title">Recently Played Doğan Özgür</h2>
      <div className="grid grid-cols-7 gap-4">
        {recently_played_data.map((data) => (
          <GridItem data={data} />
        ))}
      </div>
    </section>
  );
}
export default RecentlyPlayed;
