import { Link } from "react-router-dom";
import { Icon } from "../../utils/Icons";

export default function DownloadButton() {
  return (
    <Link
      to="download"
      className="flex items-center px-6 h-12 space-x-4 w-100 bg-black text-sm text-link hover:text-white pb-{100%] cursor-pointer"
    >
      <Icon name="download" />
      <span className="text-sm">Uygulamayı Yükle</span>
    </Link>
  );
}
