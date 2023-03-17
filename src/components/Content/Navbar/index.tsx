import Navigation from "./Navigation";
import User from "./User";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center pb-8">
      <Navigation />
      <User />
    </nav>
  );
}
