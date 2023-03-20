import { NavLink } from "react-router-dom";
import useScreenWidth from "../../hooks/useScreenWidth";
import { Icon } from "../../utils/Icons";
import MobilePlayer from "../MobilePlayer";

export default function MobileNavbar() {
  const screenWidth = useScreenWidth();

  const notActiveClassname =
    "px-2 flex flex-col gap-2 items-center text-link hover:text-white text-xs transition duration-200 rounded-md";
  const activeClassName =
    "px-2 flex flex-col gap-2 items-center text-white hover:text-white text-xs transition duration-200 rounded-md";
  return (
    <nav className="relative">
      <ul className="flex justify-around items-center h-20 py-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassname
            }
          >
            <span>
              <Icon name="home" />
            </span>
            Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="search"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassname
            }
          >
            <Icon name="searchLight" />
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            to="collection"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassname
            }
          >
            <Icon name="collection" />
            Kitaplığın
          </NavLink>
        </li>
        <li>
          <NavLink
            to="download"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassname
            }
          >
            <Icon name="spotifyIcon" size={24} />
            Uygulamayı Edin
          </NavLink>
        </li>
      </ul>
      {screenWidth <= 768 && <MobilePlayer />}
    </nav>
  );
}
