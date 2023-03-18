import { useEffect, useState } from "react";

import { welcome_data } from "../assets/data/welcome";
import useScreenWidth from "../hooks/useScreenWidth";

export default function Welcome() {
  const [itemsToRender, setItemsToRender] = useState(2);

  const screenWidth = useScreenWidth();

  useEffect(() => {
    setItemsToRender(screenWidth < 768 ? 2 : screenWidth < 1024 ? 4 : 6);
  }, [screenWidth]);

  return (
    <section>
      <h2 className="section-title">Good evening</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {welcome_data.slice(0, itemsToRender).map((data) => (
          <div
            className="flex items-center h-20 bg-transparent hover:bg-[rgba(255,255,255,.2)] transition duration-300 ease-in rounded cursor-pointer"
            key={data.id}
          >
            <img
              src={data.img}
              alt={data.title}
              className="h-20 w-20 object-cover rounded-tl rounded-bl"
            />
            <div className="px-4">
              <div className="flex items-center">
                <p className="font-semibold">{data.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
