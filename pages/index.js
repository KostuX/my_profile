import DefaultLayout from "../layouts/default";
import { withIronSessionSsr } from "iron-session/next";
import { ironOptions } from "../config/session/session_config";
import { Card } from "@nextui-org/react";
import { TypeAnimation } from "react-type-animation";
import { Shiba } from "../components/shiba";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";


export default function Home({ data }) {



  return (
    <DefaultLayout>
      <div className="justify-between h-full text-center ">
        {/**  <div className="border  m-5  border-theme_secondary">Top Center</div>*/}
        <Shiba/>
        <span
          className="grid md:grid-cols-2 gap-4 m-3 h-56 content-stretch background-repeat: no-repeat"
         
        >
          <span className="hidden m-10 md:flex">
            <div
              className=" justify-start z-50 "
              style={{ width: "50%", height: "100%" }}
            >
              <h1>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Hallo",
                    500, // wait 1s before replacing "Mice" with "Hamsters"
                    "Heloo",
                    500,
                    "Hell0o",
                    500,
                    "Hi!",
                  ]}
                  wrapper="span"
                  speed={30}
                  style={{
                    fontSize: "8em",
                    whiteSpace: "pre-line",
                    display: "block",
                  }}
                  deletionSpeed={90}
                  cursor={false}
                />
                <div className="text-theme_secondary/75 ">
                  <TypeAnimation
                    sequence={[3000, "how are you doing?!"]}
                    style={{
                      fontSize: "2em",
                      marginLeft: "10%",
                      whiteSpace: "pre-line",
                      display: "block",
                    }}
                    cursor={false}
                  />
                </div>

                <div>
                  <TypeAnimation
                    sequence={[5000, "Welcome to my profile.."]}
                    style={{
                      fontSize: "4em",
                      whiteSpace: "pre-line",
                      display: "block",
                    }}
                    cursor={false}
                  />
                </div>
              </h1>
            </div>
          </span>

          <span className="mr-10 ms:mr-52 mt-10  border-theme_secondary text-xl">
            <h1>My name is Konstantinas</h1>I am exceptionally analytical,
            organized and motivated person with rich experience repairing
            computers and various networking issues. I have great knowledge of
            ************* Microsoft Windows versions as well as configuration,
            support and installation experience. Also, I have a solid experience
           
          </span>
        </span>
      </div>
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
