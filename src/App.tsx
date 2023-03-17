import { Outlet } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import BottomBar from "./components/BottomBar";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="flex-1 overflow-auto px-8 py-6">
          <Navbar />
          <Outlet />
        </div>
      </div>
      <BottomBar />
    </>
  );
}
