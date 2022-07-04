import Navigation from "./Navbar/Navigation";
import User from "./Navbar/User";

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8">
      <Navigation />
      <User />
    </nav>
  );
}
export default Navbar;
