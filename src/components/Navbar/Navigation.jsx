import { Icon } from "Icons";

function Navigation() {
  return (
    <div className="flex items-center gap-x-4">
        <a href="/" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black">
            <Icon name="prevIcon" />
        </a>
        <a href="/" className="text-link inline-flex items-center justify-center w-8 h-8 rounded-full bg-black opacity-40">
            <Icon name="nextIcon" />
        </a>
    </div>
  )
}

export default Navigation