import { useRef, useEffect } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const certs = [
  {
    title: "European Computer Driving Licence",
    filename: "/certs/JAVA Associate Programmer.png",
  },

  {
    title: "JAVA Foundations Associate (Junior)",
    filename: "/certs/JAVA Foundations Associate (Junior).png",
  },
  { title: "European Computer Driving Licence", filename: "/certs/ECDL.png" },

  {
    title: "European Computer Driving Licence",
    filename: "/certs/ComptiaA.png",
  },
  {
    title: "ICDL Cloud Computing",
    filename: "/certs/ICDL Cloud.png",
  },

  {
    title: "Microsoft Networking Fundamentals",
    filename: "/certs/MS_Network.png",
  },
  {
    title: "Microsoft Operating Systems Fundamentals",
    filename: "/certs/MS_OS.png",
  },
  {
    title: "Microsoft Security Fundamentals",
    filename: "/certs/MS_Security.png",
  },
  {
    title: "Microsoft Server Administration Fundamentals",
    filename: "/certs/MS_Server.png",
  },
];

export const Index_block4 = (props) => {
  const text = useRef(null);
  useEffect(() => {
    const el = text.current;
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);
  return (
    <div className="mb-24 sm:mb-56 xl:mb-24 flex justify-center mx-0 sm:mx-12" ref={text}>
      <ParallaxProvider >
      <div className=" w-screen ">
        
        <div className="text-xl text-center">
         
            <Parallax speed={1}>
              <h1 className="mb-5 font-bold">【Certificates】</h1>
            </Parallax>
            <Parallax speed={-1}>
              <div className="flex justify-center">
              <h3 className="mb-12 max-w-2xl">
                Have obtained certifications as JAVA Programmer, as well as Microsoft
                specializations in Networking, Security, Server Administration, and
                Operating Systems, demonstrating my comprehensive technical expertise and
                commitment to continuous learning. These certifications reflect my ability
                to manage complex IT systems and develop robust, secure software
                solutions.
              </h3>
              </div>
            </Parallax>
          </div>

        <Parallax speed={1}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 "
          >
            {certs.map((e, index) => (
              <div key={index} className="flex justify-center my-5">
                {
                  <img
                    className="hover:scale-150 transition-all duration-1000 h-52 "
                    src={e.filename}
                    alt={e.title}
                  />
                }
              </div>
            ))}
          </div>
        </Parallax>
        </div>

      </ParallaxProvider>
      
    </div>
  );
};
