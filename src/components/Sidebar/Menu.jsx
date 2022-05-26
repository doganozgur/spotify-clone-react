import { Icon } from "Icons";

function Menu() {
  return (
      <nav className="px-2">
          <ul className="flex flex-col">
              <li>
                  <a href="/" className="h-10 flex gap-x-4 px-4 items-center text-link hover:text-white text-sm font-semibold transition duration-200">
                    <span>
                      <Icon name="home" />
                    </span>
                    Ana sayfa
                  </a>
              </li>
              <li>
                  <a href="/" className="h-10 flex gap-4 px-4 items-center text-link hover:text-white text-sm font-semibold transition duration-200">
                    <Icon name="search" />
                    Ara
                  </a>
              </li>
              <li>
                  <a href="/" className="h-10 flex gap-4 px-4 items-center text-link hover:text-white text-sm font-semibold transition duration-200">
                    <Icon name="library" />
                    Kitaplığın
                  </a>
              </li>
          </ul>
      </nav>
  )
}

export default Menu