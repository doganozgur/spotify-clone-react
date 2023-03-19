import { useLocation } from "react-router-dom";
import useScreenWidth from "../../hooks/useScreenWidth";
import SearchBar from "../SearchBar";
import Navigation from "./Navigation";
import User from "./User";

export default function Header() {
  const location = useLocation();
  const isSearchPage = location.pathname.includes("search");

  const screenWidth = useScreenWidth();

  return (
    <header className="flex justify-between items-center gap-4 pt-4 sm:pb-8 pb-4">
      {screenWidth > 768 && <Navigation />}
      {isSearchPage && <SearchBar />}
      {screenWidth > 768 && <User />}
    </header>
  );
}
