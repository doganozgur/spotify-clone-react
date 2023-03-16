import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

export default function Content() {
  return (
    <main className="flex-1 overflow-auto">
      <Navbar />
      <div className="px-8 py-5">
        <Outlet />
      </div>
    </main>
  );
}
