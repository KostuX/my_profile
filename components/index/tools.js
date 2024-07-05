import { arangeHex } from "../../lib/helper/hexarange";
import { useRef, useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)



 

export const Index_block2 = (props) => {
  const text = useRef(null);
  useEffect(()=>{    
    const el = text.current
    gsap.fromTo(el, {opacity:0},{opacity:1, duration:2, scrollTrigger:{
        trigger:el
    }})
  },[])
  return (
    <div className="text-center  mb-56 xl:mb-1 xl:h-screen " ref={text}>
      <span className=" sm:m-12 text-xl sm:grid xl:grid-cols-3 gap-4 ">
        <span></span>
        <span>
          <h1 className="mb-5">【My tools】</h1>

          <h3 className="mb-5   ">
            Over the past years, I have honed my skills in various programming
            languages, including Java, JavaScript, PHP and Python, while working
            on diverse projects that span web development, mobile app creation,
            and backend system optimization.
          </h3>
        </span>
      </span>

      <div className="  ">{arangeHex()}</div>

      <span className="hidden sm:flex grid grid-cols-1 gap-4 m-12 justify-center ">
        <div className="row-span-1 flex ">
          <ul className="max-w-56 ">Programming languages: Java, JavaScript, PHP, Python</ul>
          <ul className="max-w-56 ">
            Deployment: AWS, DigitalOcean, Linux, Nginx, Docker, PM2, Grafana,
            Jenkins
          </ul>

          <ul className="max-w-56 "> Web-App: NodeJS, NextJS, Symfony</ul>
          <ul className="max-w-56 ">Database: CocroachDB, MongoDB, MySQL</ul>
          <ul className="max-w-56 ">
            AI/ML: TensorFlow, Keras, Scikit-learn, Jupyter, Neural Networks{" "}
          </ul>
          <ul className="max-w-56 ">Other: Git, RabbitMQ, FireBase, RestAPI, FastAPI, Swager </ul>
        </div>
      </span>
    </div>
  );
};
