import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Icon } from "../../utils/Icons";
// import { Icon } from "../Icons";
import Menu from "./Menu";
import Playlists from "./Playlists";

export default function Sidebar() {
  return (
    <aside className="flex flex-col flex-shrink-0 w-60 py-6 bg-black">
      {/* Logo */}
      <Logo className="h-10 mb-6 px-6 mr-auto" />
      <Menu />
      <Link
        to="/"
        className="mt-6 h-10 px-6 text-link hover:text-white text-sm font-semibold transition duration-200 flex items-center gap-x-4"
      >
        <span className="bg-link w-6 h-6 rounded-sm flex items-center justify-center">
          <Icon name="createPlaylists" size={12} />
        </span>
        Çalma Listesi Oluştur
      </Link>
      <Link
        to="/"
        className="h-10 px-6 text-link hover:text-white text-sm font-semibold transition duration-200 flex items-center gap-x-4"
      >
        <span className="bg-gradient-135 from-indigo-500 to-blue-300 w-6 h-6 rounded-sm flex items-center justify-center bg-link text-white opacity-60 hover:">
          <Icon name="likedSongs" size={12} />
        </span>
        Beğenilen Şarkılar
      </Link>
      <hr className="my-2 bg-active h-px border-0" />
      <Playlists />
    </aside>
  );
}
