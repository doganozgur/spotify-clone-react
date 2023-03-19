import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar";
import Navigation from "./Navigation";
import User from "./User";

export default function Header() {
  const location = useLocation();
  const isSearchPage = location.pathname.includes("search");

  return (
    <header className="flex justify-between items-center gap-4 pt-4 pb-8">
      <Navigation />
      {isSearchPage && <SearchBar />}
      <User />
    </header>
  );
}
