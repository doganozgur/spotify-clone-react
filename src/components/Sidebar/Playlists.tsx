import { playlist } from "../../assets/data/playlist";

export default function Playlists() {
  return (
    <ul className="flex-auto overflow-auto h-96 border-t py-1 border-active">
      {playlist.map((item) => (
        <li key={item.id}>
          <a
            href="/"
            className="h-8 px-6 flex items-center text-link hover:text-white text-sm transition duration-200"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
