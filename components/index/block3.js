import React, { PureComponent, useState } from "react";
import { Chart } from "./radarChart/radarChart";
import { progressBar } from "../progressBar";

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
    subject: "Communication",
    A: 65,
  },
  {
    subject: "P & P Development",
    A: 74,
  },
  {
    subject: "Network Infrastructure",
    A: 87,
  },
];

const qq7 = [
  {
    subject: "Data Structures and Algorithms",
    A: 83,
    fullMark: 100,
  },
  {
    subject: "Rich Web Applications",
    A: 98,
    fullMark: 100,
  },
  {
    subject: "Advanced Switching and Routing",
    A: 74,
    fullMark: 100,
  },
  {
    subject: "Project Skills",
    A: 70,
    fullMark: 100,
  },
  {
    subject: "Major Group Project",
    A: 90,
    fullMark: 100,
  },
  {
    subject: "Parallel Computing",
    A: 86,
    fullMark: 100,
  },
  {
    subject: "Network Distributed Computing",
    A: 96,
    fullMark: 100,
  },
  {
    subject: "Object Oriented and Design Patterns",
    A: 89,
    fullMark: 100,
  },
  {
    subject: "Troubleshooting IP Networks",
    A: 82,
    fullMark: 100,
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
    subject: "Ubiquitous Computing",
    A: 88,
  },
  {
    subject: "Research Skills",
    A: 89,
  },
  {
    subject: "Data Analytics",
    A: 75,
  },
  {
    subject: "Final Year Project",
    A: 0,
  },

  {
    subject: "Text Analysis",
    A: 0,
  },
  {
    subject: "Web Services",
    A: 0,
  },
  {
    subject: "Computer Vision",
    A: 0,
  },

  {
    subject: "Computtational Intelligence",
    A: 0,
  },
];

const charts = [
  {
    title: "Bachelor of Science (Honours) in ",
    subTitle: "Computing in Information Technology (Level 8)",
    chart: <Chart data={qq8} />,
    avg: 70,
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
    <div className="h-screen ">
      <span className=" text-xl grid grid-cols-3 gap-4 justify-evenly">
        <span></span>
        <span className="text-xl text-center">
          <h1 className="mb-5">【Education】</h1>

          <h3 className="mb-12">
            Maintained a high GPA throughout my academic career, demonstrating
            strong dedication and intellectual capability. Awarded "Student of
            the Year" for exemplary performance during studies. Graduated with
            [Honors/Distinction], recognized for outstanding academic
            achievements and commitment to excellence.
          </h3>
        </span>
        <span></span>
      </span>

      <div className="h-1/3 ">
        <span className="mb-12">
          <h1 className="text-center">{charts[activeIndex].title}</h1>
          <h2 className="text-center">{charts[activeIndex].subTitle}</h2>
        </span>

        <span className="mb-56">{charts[activeIndex].chart} </span>
        <span className="  grid justify-items-center mb-12">
          {progressBar({
            value: charts[activeIndex].avg,
            title: "Grade Average",
          })}
        </span>
      </div>
    </div>
  );
};
