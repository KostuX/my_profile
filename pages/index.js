import DefaultLayout from "../layouts/default";
import { withIronSessionSsr } from "iron-session/next";
import { ironOptions } from "../config/session/session_config";
import { Index_block1 } from "../components/index/block1";
import { Index_block2 } from "../components/index/block2";
import { Index_block3 } from "../components/index/block3";

import React, { useState, useEffect } from "react";

let content = [<Index_block1 />, <Index_block2 />, <Index_block3 />];

export default function Home({ data }) {
  useEffect(() => {
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
  }, []);

  useEffect(() => {
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
    let endpoint = "http:/localhost:3000/api/hello";
    let api_data = { data: "test api" };

    let response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(api_data),
      headers: { "Content-type": "application/json" },
    });
    let res = await response.json();
    let data = res;

    return {
      props: { data },
    };
  },

  ironOptions
);
