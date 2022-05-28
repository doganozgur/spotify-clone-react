import { Icon } from "Icons";

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8">
      <div className="flex items-center gap-x-4">
        <a href="/" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black">
          <Icon name="arrowLeft" />
        </a>
        <a href="/" className="text-link inline-flex items-center justify-center w-8 h-8 rounded-full bg-black opacity-40">
          <Icon name="arrowRight" />
        </a>
      </div>
      <div className="flex items-center gap-x-8">
        <a href="/" className="border flex leading-6 items-center py-1 px-4 rounded-full text-sm font-semibold border-link">Upgrade</a>
      </div>
    </nav>
  )
}
export default Navbar