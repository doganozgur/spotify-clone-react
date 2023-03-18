import { NavLink } from "react-router-dom";
import { Icon } from "../utils/Icons";

export default function MobileNavbar() {
  const notActiveClassname =
    "px-2 flex flex-col gap-2 items-center text-link hover:text-white text-xs transition duration-200 rounded-md";
  const activeClassName =
    "px-2 flex flex-col gap-2 items-center text-white hover:text-white text-xs transition duration-200 rounded-md";
  return (
    <nav>
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
            <Icon name="search" />
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
            to="downloadApp"
            className={({ isActive }) =>
              isActive ? activeClassName : notActiveClassname
            }
          >
            <Icon name="spotifyIcon" size={24} />
            Uygulamayı Edin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
