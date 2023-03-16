import { NavLink } from "react-router-dom";
import { Icon } from "../../utils/Icons";

// import { Icon } from "Icons";

export default function Menu() {
  const notActiveClassname =
    "h-10 px-6 flex gap-4 items-center text-link hover:text-white text-sm font-semibold transition duration-200";
  const activeClassName =
    "h-10 px-6 flex gap-4 items-center text-white hover:text-white text-sm font-semibold transition duration-200";

  return (
    <nav>
      <ul className="flex flex-col">
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
      </ul>
    </nav>
  );
}
