import Navbar from "components/Navbar";
import MadeFor from "./Content/MadeFor";
import Welcome from "./Content/Welcome";

function Content() {
  return (
    <main className="flex-auto">
      <Navbar />
      <div className="pt-6 px-8 flex flex-col gap-y-6">
        <Welcome />
        <MadeFor />
      </div>
    </main>
  )
}
export default Content