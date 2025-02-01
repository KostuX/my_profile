import DefaultLayout from "../layouts/default";
import { Index_block1 } from "../components/index/block1";
import { Index_block2 } from "../components/index/tools";
import { Index_block3 } from "../components/index/education";
import { Index_block4 } from "../components/index/certificates";
import { Index_block5 } from "../components/index/contact";
import { Divider } from "@nextui-org/react";

import React, { useEffect, useState } from "react";

let content = [
  <Index_block1 />,
  <Index_block2 />,
  <Index_block3 />,
  <Index_block4 />,
  <Index_block5 />,
];

export default function Home({ data }) {
  useEffect(() => {
    import("@google/model-viewer").catch(console.error);
    // get user IP address
    async function getIP() {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();

        let ip = data.ip;
        // let ip = '1.1.1.1'
        console.log(ip)

        let data_add = {
          type: "add",
          data: { type: "connected", data: { ip: ip } },
        };
        fetch("/api/LoggerAPI", {
          method: "POST",
          body: JSON.stringify(data_add),
          headers: { "Content-type": "application/json" },
        });
      } catch (error) {
        console.error("Error fetching the IP address:", error);
      }
    }
    getIP();

    // scroll event listener
    addEventListener("scroll", (event) => { });
    onscroll = (event) => {
      let lastScrollTop = 0;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    //
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
        <div className="mt-24 mb-24">
          <div key={i}>{e}</div>
          {(content.length != i+1) && <Divider/> }          
        </div>
      ))}
    </DefaultLayout>
  );
}


