export default function Playlists() {
  return (
    <ul className="flex-auto overflow-auto h-96 border-t py-1 border-active">
      {Array.from(Array(14), (_, index) => (
        <li key={index}>
          <a
            href="/"
            className="h-8 px-6 flex items-center text-link hover:text-white text-sm transition duration-200"
          >
            {`${index + 1}. Çalma Listem`}
          </a>
        </li>
      ))}
    </ul>
  );
}
