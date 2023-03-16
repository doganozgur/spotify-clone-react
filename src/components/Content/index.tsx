import { Routes, Route } from "react-router-dom";
import Collection from "../../pages/Collection";
import Home from "../../pages/Home";
import Search from "../../pages/Search";
import Navbar from "./Navbar";

function Content() {
  return (
    <main className="flex-1 overflow-auto">
      <Navbar />
      <div className="px-8 py-5">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </div>
    </main>
  );
}
export default Content;
