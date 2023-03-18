import { useEffect } from "react";
import { useState } from "react";

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return screenWidth;
}
