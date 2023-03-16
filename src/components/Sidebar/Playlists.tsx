import { playlist } from "../../assets/index";

export default function Playlists() {
  return (
    <ul className="overflow-auto h-96">
      {playlist.map((item) => (
        <li key={item.id}>
          <a
            href="/"
            className="h-8 px-6 flex items-center text-link hover:text-white text-sm font-semibold transition duration-200"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
