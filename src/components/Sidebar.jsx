import Logo from "../assets/logo.svg"
import Menu from "./Sidebar/Menu"

function Sidebar() {
  return (
    <aside className="w-60 py-6">
      <img src={Logo} alt="Logo" className="h-10 px-6 mb-6" />
      <Menu />
    </aside>
  )
}
export default Sidebar