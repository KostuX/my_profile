import { useRef, useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const textContent = (
  <span className="text-xl text-center">
    <h1 className="mb-5">【Certificates】</h1>

    <h3 className="mb-12">
      Have obtained certifications as JAVA Programmer, as well as Microsoft
      specializations in Networking, Security, Server Administration, and
      Operating Systems, demonstrating my comprehensive technical expertise and
      commitment to continuous learning. These certifications reflect my ability
      to manage complex IT systems and develop robust, secure software
      solutions.
    </h3>
  </span>
);

const certs = [
  {
    title: "European Computer Driving Licence",
    filename: "/certs/JAVA Associate Programmer.png",
  },
  textContent,
  {
    title: "JAVA Foundations Associate (Junior)",
    filename: "/certs/JAVA Foundations Associate (Junior).png",
  },
  { title: "European Computer Driving Licence", filename: "/certs/ECDL.jpg" },

  {
    title: "European Computer Driving Licence",
    filename: "/certs/ComptiaA.png",
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
  useEffect(()=>{    
    const el = text.current
    gsap.fromTo(el, {opacity:0},{opacity:1, duration:2, scrollTrigger:{
        trigger:el
    }})
  },[])
  return (
    <div className="xl:min-h-screen grid sm:grid-cols-3 gap-4 mt-56 sm:mt-12 sm:mb-52 " ref={text}>
      {certs.map((e, index) => (
        <div key={index} className=" place-content-around flex">
          {index == 1 ? (
            e
          ) : (
            <img
              className="hover:scale-150 transition-all duration-1000 h-52"
              src={e.filename}
              alt={e.title}
            />
          )}
        </div>
      ))}
    </div>
  );
};
