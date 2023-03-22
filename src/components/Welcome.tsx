import { useEffect, useState } from "react";

import useScreenWidth from "../hooks/useScreenWidth";
import { WelcomeItemType } from "../utils/types";

type Props = {
  data: WelcomeItemType[];
};

export default function Welcome({ data }: Props) {
  const [itemsToRender, setItemsToRender] = useState(2);

  const screenWidth = useScreenWidth();

  useEffect(() => {
    setItemsToRender(screenWidth < 768 ? 2 : screenWidth < 1024 ? 4 : 6);
  }, [screenWidth]);

  return (
    <section>
      <h2 className="section-title mb-6">İyi akşamlar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.slice(0, itemsToRender).map((item) => (
          <div
            className="flex items-center h-20 bg-transparent hover:bg-[rgba(255,255,255,.2)] transition duration-300 ease-in rounded cursor-pointer"
            key={item.id}
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-20 w-20 object-cover rounded-tl rounded-bl"
            />
            <div className="px-4">
              <div className="flex items-center">
                <p className="font-semibold">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
