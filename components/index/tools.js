import { arangeHex } from "../../lib/helper/hexarange";
import { useRef, useEffect } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)





export const Index_block2 = (props) => {
  const text = useRef(null);
  useEffect(() => {
    const el = text.current
    gsap.fromTo(el, { opacity: 0 }, {
      opacity: 1, duration: 2, scrollTrigger: {
        trigger: el
      }
    })
  }, [])
  return (
    <div className="text-center mb-56 xl:mb-24 xl:h-screen grid grid-cols-1 flex justify-center  " ref={text}>
      <ParallaxProvider>
        <div className=" sm:m-12 text-xl ">
          <Parallax speed={1}>
            <h1 className="mb-5 font-bold">【My tools】</h1>
          </Parallax>
          <Parallax speed={-1}>
            <div className="flex justify-center">
              <h3 className="mb-5  mx-12 max-w-xl">
                Over the past years, I have honed my skills in various programming
                languages, including Java, JavaScript, PHP and Python, while working
                on diverse projects that span web development, mobile app creation,
                and backend system optimization.
              </h3>
            </div>
          </Parallax>

        </div>

        <Parallax speed={1}>
          <div className="">{arangeHex()}</div>
        </Parallax>

        <div className="hidden sm:flex grid grid-cols-1 gap-4 m-12  ">
          <div className="row-span-1 flex ">
            <ul className="max-w-56 "> Java, JavaScript, PHP, Python</ul>
            <ul className="max-w-56 ">
              AWS, DigitalOcean, Linux, Nginx, Docker, PM2, Grafana,
              Jenkins
            </ul>

            <ul className="max-w-56 "> NodeJS, NextJS, Symfony</ul>
            <ul className="max-w-56 "> CocroachDB, MongoDB, MySQL</ul>
            <ul className="max-w-56 ">
              TensorFlow, Keras, Scikit-learn, Jupyter, Neural Networks{" "}
            </ul>
            <ul className="max-w-56 "> Git, RabbitMQ, FireBase, RestAPI, FastAPI, Swager </ul>
          </div>
        </div>
      </ParallaxProvider>
    </div>
  );
};
