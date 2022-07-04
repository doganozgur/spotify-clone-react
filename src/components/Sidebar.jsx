import Logo from "../assets/logo.svg"
import Menu from "./Sidebar/Menu"
import Playlists from "./Sidebar/Playlists"

function Sidebar() {
  return (
    <aside className="w-60 py-6 bg-black ">
      <img src={Logo} alt="Logo" className="h-10 mb-6 px-6" />
      <Menu />
      <div className="mt-6">
        <a
          href="/"
          className="h-10 px-6 text-link hover:text-white text-sm font-semibold transition duration-200 flex items-center gap-x-4"
        >
          <div className="bg-link w-6 h-6 rounded-sm flex items-center justify-center">
            <svg
              xmins="http://www.w3.org/2000/svg"
              role="img"
              height="12"
              width="12"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path
                fill=""
                d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"
              />
            </svg>
          </div>
          Çalma Listesi Oluştur
        </a>
        <a
          href="/"
          className="h-10 px-6 text-link hover:text-white text-sm font-semibold transition duration-200 flex items-center gap-x-4"
        >
          <div className="bg-gradient-135 from-indigo-500 to-blue-300 w-6 h-6 rounded-sm flex items-center justify-center bg-link text-white opacity-60 hover:">
            <svg
              className=""
              xmins="http://www.w3.org/2000/svg"
              role="img"
              height="12"
              width="12"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"
              />
            </svg>
          </div>
          Beğenilen Şarkılar
        </a>
      </div>
      <hr className="my-2 bg-active h-px border-0" />
      <Playlists />
    </aside>
  );
}
export default Sidebar