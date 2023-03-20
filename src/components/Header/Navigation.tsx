import { useNavigate } from "react-router-dom";

import { Icon } from "../../utils/Icons";

export default function Navigation() {
  let navigate = useNavigate();

  return (
    <div className="flex items-center gap-x-4">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black"
      >
        <Icon name="prev" />
      </button>
      <button
        onClick={() => navigate(1)}
        className="text-link inline-flex items-center justify-center w-8 h-8 rounded-full bg-black opacity-40"
      >
        <Icon name="next" />
      </button>
    </div>
  );
}
