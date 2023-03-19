import { ChangeEvent, useState } from "react";
import useScreenWidth from "../hooks/useScreenWidth";
import { Icon } from "../utils/Icons";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearchBar = () => setSearchTerm("");

  const screenWidth = useScreenWidth();

  return (
    <div className="flex-1">
      {screenWidth < 768 && (
        <h1 className="text-3xl font-semibold mb-4 mt-8">Ara</h1>
      )}

      <form className="flex items-center relative max-w-[364px] flex-1">
        <input
          type="text"
          className="sm:rounded-full rounded-[4px] text-sm py-[6px] px-12 h-10 bg-white flex-1 text-black outline-none border-none"
          placeholder="Ne dinlemek istiyorsun?"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <span className="absolute left-3">
          <Icon name="searchDark" size={26} />
        </span>
        {searchTerm && (
          <span className="absolute right-3" onClick={handleClearSearchBar}>
            <Icon name="times" size={26} />
          </span>
        )}
      </form>
    </div>
  );
}
