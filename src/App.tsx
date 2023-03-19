import { Outlet } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import BottomBar from "./components/BottomBar";
import Header from "./components/Header";
import useScreenWidth from "./hooks/useScreenWidth";
import MobileNavbar from "./components/MobileNavbar";

export default function App() {
  const screenWidth = useScreenWidth();

  return (
    <>
      <div className="wrapper">
        {screenWidth > 768 && <Sidebar />}
        <div className="flex-1 overflow-auto sm:px-8 px-4">
          <Header />
          <Outlet />
        </div>
      </div>
      {screenWidth > 768 && <BottomBar />}
      {screenWidth <= 768 && <MobileNavbar />}
    </>
  );
}
