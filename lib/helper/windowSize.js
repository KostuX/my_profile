import { useEffect, useState } from "react";

export default function useWindowDimensions() {
  let [width, setWidth] = useState(0);
  let [height, setHeight] = useState(0);
  useEffect(() => {
    if (document) {
      getWindowSize();
      window.addEventListener("resize", getWindowSize);
    }
  }, []);

  function getWindowSize() {
    let width_ =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    setWidth(width_);

    let height_ =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    setHeight(height_);
  }

  return [width, height];
}
