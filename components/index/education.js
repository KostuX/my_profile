import React, { PureComponent, useState } from "react";
import { Chart } from "./radarChart/radarChart";
import { progressBar } from "../progressBar";

import { useRef, useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const qq6 = [
  {
    subject: "Network Security",
    A: 88,
  },
  {
    subject: "IT Administration",
    A: 95,
  },
  {
    subject: "Systems Software",
    A: 83,
  },
  {
    subject: "Network Infrastructure",
    A: 87,
  },

  {
    subject: "P & P Development",
    A: 74,
  },
  {
    subject: "Communication",
    A: 65,
  },
];

const qq7 = [
  {
    subject: "Object Oriented Design Patterns",
    A: 89,
  },
  {
    subject: "Troubleshooting IP Networks",
    A: 82,
  },

  {
    subject: "Project Skills",
    A: 70,
  },
  {
    subject: "Advanced Switching & Routing",
    A: 74,
  },

  {
    subject: "Network Distributed Computing",
    A: 96,
  },
  {
    subject: "Data Structures & Algorithms",
    A: 83,
  },

  {
    subject: "Major Group Project",
    A: 90,
  },
  {
    subject: "Parallel Computing",
    A: 86,
  },
  {
    subject: "Rich Web Applications",
    A: 98,
  },
];

const qq8 = [
  {
    subject: "Applied Human Language Technology",
    A: 84,
  },
  {
    subject: "Derivation of Algorithms",
    A: 72,
  },
  {
    subject: "Data Analytics",
    A: 75,
  },
  {
    subject: "Research Skills",
    A: 89,
  },
  {
    subject: "Ubiquitous Computing",
    A: 88,
  },

  {
    subject: "Final Year Project",
    A: 81,
  },

  {
    subject: "Text Analysis",
    A: 72,
  },
  {
    subject: "Web Services",
    A: 94,
  },
  {
    subject: "Computer Vision",
    A: 73,
  },

  {
    subject: "Computtational Intelligence",
    A: 75,
  },
];

const charts = [
  {
    title: "Bachelor of Science (Honours) in ",
    subTitle: "Computing in Information Technology (Level 8)",
    chart: <Chart data={qq8} />,
    avg: 80,
  },
  {
    title: "Advanced Certificate (QQI Level 6)",
    subTitle: "Computer Systems and Networks",
    chart: <Chart data={qq6} />,
    avg: 82,
  },
  {
    title: "Bachelor of Science (Ordinary) in ",
    subTitle: "Computing in Information Technology (Level 7)",
    chart: <Chart data={qq7} />,
    avg: 85,
  },
];
let inter;
export const Index_block3 = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  let paused_ = false;


  const text = useRef(null);
  useEffect(()=>{    
    const el = text.current
    gsap.fromTo(el, {opacity:0},{opacity:1, duration:3, scrollTrigger:{
        trigger:el
    }})
  },[])

  const nextItem = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex + 1 + charts.length) % charts.length
    );
  };

  clearInterval(inter);
  inter = setInterval(nextItem, 7000);

  let btn = (e) => {
    e.preventDefault();
    if (!paused_) {
      clearInterval(inter);
      setPaused(true);

      paused_ = true;

      console.log(paused);
    } else {
      nextItem();
      inter = setInterval(nextItem, 7000);
      setPaused(false);
      paused_ = false;
    }
  };
  //<Chart data={qq5} />;
  return (
    <div className="mb-56 xl:mb-1 h-fit  " ref={text}>
      <span className=" text-xl gap-4 justify-evenly ">
        
        <span className="text-xl text-center">
          <h1 className="mb-5 mt-12 sm:mt-24">【Education】</h1>

          <h3 className="mb-12 mx-12">
            Maintained a high GPA throughout my academic career, demonstrating
            strong dedication and intellectual capability. Awarded "Student of
            the Year" for exemplary performance during studies. Graduated with
            First Class Honours in Computing in Information Technology, recognized for outstanding academic
            achievements and commitment to excellence.
          </h3>
        </span>
    
      </span>

      <div className="h-1/3 w-screen ">
        <span className="mb-12">
          <h1 className="text-center">{charts[activeIndex].title}</h1>
          <h2 className="text-center">{charts[activeIndex].subTitle}</h2>
        </span>

        <span className="">{charts[activeIndex].chart} </span>
        <span className="mx-12  grid justify-items-center mb-12">
          {progressBar({
            value: charts[activeIndex].avg,
            title: "Grade Average",
          })}
        </span>
      </div>
    </div>
  );
};
