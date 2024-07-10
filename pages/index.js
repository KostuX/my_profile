import DefaultLayout from "../layouts/default";
import { withIronSessionSsr } from "iron-session/next";
import { ironOptions } from "../config/session/session_config";
import { Index_block1 } from "../components/index/block1";
import { Index_block2 } from "../components/index/tools";
import { Index_block3 } from "../components/index/education";
import { Index_block4 } from "../components/index/certificates";
import { Index_block5 } from "../components/index/contact";

import React, { useEffect, useState } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let content = [
  <Index_block1 />,
  <Index_block2 />,
  <Index_block3 />,
  <Index_block4 />,
  <Index_block5 />,
];

export default function Home({ data }) {
  useEffect(() => {
     // get IP address
  async function getIP() {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();

      let data_add = {type:'add', data:{type:'connected', data:data.ip}}
      await fetch('/api/LoggerAPI', {method:'POST', body:JSON.stringify(data_add), headers:{'Content-type':'application/json'}})  
    
    } catch (error) {
      console.error("Error fetching the IP address:", error);
    }
  }
getIP()



   
   

    // scroll event listener
    addEventListener("scroll", (event) => {});
    onscroll = (event) => {
      let lastScrollTop = 0;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        console.log("Scroll Direction: Down");
      } else {
        console.log("Scroll Direction: Up");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    import("@google/model-viewer").catch(console.error);
    if (document) {
      const modelViewer = document.getElementById("3d_main");
      document.addEventListener("mousemove", (event) => {
        const width =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;

        const height =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;

        let xPercentage = event.clientX / width;
        let yPercentage = event.clientY / height;

        let xDegVal = (-20 - -35) * xPercentage - 10;
        let yDegVal = (120 - 135) * yPercentage + 100;
        if (modelViewer) {
          modelViewer.cameraOrbit = -xDegVal + "deg " + yDegVal + "deg 10m";
        }
      });
    }
  }, []);

  return (
    <DefaultLayout>
      {content.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
    </DefaultLayout>
  );
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    return {
      props: {  },
    };
  },

  ironOptions
);
