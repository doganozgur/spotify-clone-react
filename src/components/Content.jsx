import Navbar from "components/Navbar";
import MadeFor from "./Content/MadeFor";
import RecentlyPlayed from "./Content/RecentlyPlayed";
import Welcome from "./Content/Welcome";

function Content() {
  return (
    <main className="flex-1">
      <Navbar />
      <div className="pt-6 px-8 flex flex-col gap-y-8">
        <Welcome />
        <MadeFor />
        <RecentlyPlayed />
      </div>
    </main>
  )
}
export default Content