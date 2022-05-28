import { playlist } from "../../assets/index"

function Playlists() {
  return (
    <ul className="overflow-auto h-80">
        {
            playlist.map((item) => (
                <li key={item.id}>
                    <a href="/" className="h-8 flex items-center text-link hover:text-white text-sm font-semibold transition duration-200">{item.title}</a>
                </li>
            ))
        }
    </ul>
  )
}

export default Playlists