import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useAppSelector } from "../../hooks/useAppStore";
import { Icon } from "../../utils/Icons";
import CurrentTrackCover from "./CurrentTrackCover";
import DownloadButton from "./DownloadButton";
// import { Icon } from "../Icons";
import Menu from "./Menu";
import Playlists from "./Playlists";

export default function Sidebar() {
  const { playerSidebar } = useAppSelector((state) => state.player);
  return (
    <aside className="flex flex-col flex-shrink-0 w-60 bg-black">
      {/* Logo */}
      <Link to="/">
        <Logo className="flex-shrink-0 my-6 h-10 px-6 mr-auto" />
      </Link>
      <Menu />
      <ul className="mb-2">
        <li>
          <Link
            to="/"
            className="mt-6 h-10 px-6 text-link hover:text-white text-sm font-semibold transition duration-200 flex items-center gap-x-4"
          >
            <span className="bg-link w-6 h-6 rounded-sm flex items-center justify-center">
              <Icon name="createPlaylists" size={12} />
            </span>
            Çalma Listesi Oluştur
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="h-10 px-6 text-link hover:text-white text-sm font-semibold transition duration-200 flex items-center gap-x-4"
          >
            <span className="bg-gradient-135 from-indigo-500 to-blue-300 w-6 h-6 rounded-sm flex items-center justify-center bg-link text-white opacity-60 hover:">
              <Icon name="likedSongs" size={12} />
            </span>
            Beğenilen Şarkılar
          </Link>
        </li>
      </ul>
      <Playlists />
      <DownloadButton />
      {playerSidebar && <CurrentTrackCover />}
    </aside>
  );
}
