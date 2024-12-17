import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function Hexagon({ size, props, image }) {
  let height = size;
  let width = height * 1.15;

  let rand = Math.floor(Math.random() * 5);

  const load = useRef(null);
    useEffect(() => {
        const el = load.current
        gsap.fromTo(el, { opacity: 0 }, {
            opacity: 1, duration: rand, scrollTrigger: {
                trigger: el
            }
        })
    }, [])

  return (
    <div ref={load}>
    <div
      style={{
        height: height,
        width: width,
        overflow: "hidden",
        transform: "rotate(-30deg)",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          overflow: "hidden",
          transform: "rotate(60deg)",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            height: "100%",
            width: "100%",
            transform: "rotate(-120deg)",
            backgroundColor: "lightgrey",
            borderStyle: "solid",
          }}
        >
          <img
            style={{
              transform: "rotate(90deg)",
              overflow: "hidden",
              height: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            src={`${image}`}
            alt="image description"
          ></img>
        </div>
      </div>
    </div>
    </div>
  );
}
