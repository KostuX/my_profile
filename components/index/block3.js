import React, { PureComponent, useState } from "react";
import { Chart } from "./radarChart/radarChart";
import { progressBar } from "../progressBar";
import { Progress } from "@nextui-org/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { Button, ButtonGroup } from "@nextui-org/button";
import "/styles/Carousel.css";
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
];

const charts = [
  { title: "Honors", chart: <Chart data={qq8} />, avg: 72 },
  { title: "QQ6", chart: <Chart data={qq6} />, avg: 82 },
  { title: "Ordinary", chart: <Chart data={qq7} />, avg: 82 },
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
        <span className="   text-xl text-center">
          <h1>Mｙ　ｎａｍｅ　ｉｓ</h1>
          <h1>【Kｏｎｓｔａｎｔａｎｔｉｎａｓ】</h1>
          <h3 className="mb-5">But you can call me Kostas.</h3>
          <h3>
            I'm a Software and Web App Developer with experience in designing,
            developing, and maintaining robust applications. I have skills in
            AI/ML, data & text analytics, software engineering, and web
            front-end development. Currently, my focus is on web app back-end
            development.
          </h3>
          <div className="grid  place-items-center mt-5">
            <img src="/programming_.svg" height={50} width={50} />
          </div>
        </span>
        <span></span>
      </span>

      <div className="h-1/3 ">
        <h1 className="text-center">{charts[activeIndex].title}</h1>
        <span> </span>
        {charts[activeIndex].chart}
      </div>
      <span className=" grid justify-items-center">
        {progressBar({
          value: charts[activeIndex].avg,
          title: "Grade Average",
        })}
      </span>
    </div>
  );
};
