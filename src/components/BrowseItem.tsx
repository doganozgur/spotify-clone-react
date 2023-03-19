import { Link } from "react-router-dom";
import { BrowseItemType } from "../utils/types";

type Props = {
  data: BrowseItemType;
};

export default function BrowseItem({ data }: Props) {
  const { title, image, bgColor } = data;

  return (
    <article>
      <Link
        to=""
        className={`${bgColor} rounded-lg relative overflow-hidden aspect-square block`}
      >
        <h2 className="sm:m-6 m-4 sm:text-2xl text-md">{title}</h2>
        <img
          className=" rotate-45 w-16 absolute -right-2 -bottom-2"
          src={image}
          alt={title}
        />
      </Link>
    </article>
  );
}
