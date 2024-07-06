import Hexagon from "../../components/hexagon";
import list from "../../public/hex logo/list";
import useWindowDimensions from "../../lib/helper/windowSize";

import { useRef, useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export const arangeHex = () => {
  let [windowWidth, windowHeight] = useWindowDimensions();

  const text = useRef(null);
  useEffect(()=>{    
    const el = text.current
    gsap.fromTo(el, {opacity:0},{opacity:1, duration:5, scrollTrigger:{
        trigger:el
    }})
  },[])



  let isSmallScreen = windowWidth < 700;

  let margin = isSmallScreen ? 23 : 45;

  let size = isSmallScreen ? 40 : 80;

  let itemsAdjust = windowWidth < 1500 ? 1 : 2

  let totLength = list().length;
  let rows = [];
  let row = [];

  let itemsPL = Math.floor((windowWidth / (size +5) ))- itemsAdjust ;



  for (let i = 0; i < totLength; i++) {
    let _itemsPL = itemsPL;

    if (rows.length % 2 != 0) {
      _itemsPL = itemsPL - 1;
    }

    row.push(
      <span key={i} className="hover:scale-125 transition-all duration-1000" >
        <Hexagon size={size} image={"/logos/" + list()[i]} />
      </span>
    );

    if (row.length == _itemsPL - 1) {
      rows.push(row);
      row = [];
    }
  }
  rows.push(row);

  return (
    <div
      className={`  items-center justify-center  `}
      style={{ marginLeft: margin }}
      ref={text}
    >
   
      {rows.map((e, i) => (
        <div
          key={i}
          className="flex"
          style={i % 2 == 0 ? {} : { marginLeft: margin }}
        >
          {e}
        </div>
      ))}
    </div>
  );
};
