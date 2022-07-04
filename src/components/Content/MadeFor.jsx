import { madefor_data } from "../../assets/madefor/index";
import GridItem from "components/GridItem";

function MadeFor() {
  return (
    <section>
      <h2 className="section-title">Made For Doğan Özgür</h2>
      <div className="grid grid-cols-7 gap-4">
        {madefor_data.map((data) => (
          <GridItem data={data} />
        ))}
      </div>
    </section>
  );
}
export default MadeFor