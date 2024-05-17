import DefaultLayout from "../layouts/default";
import { withIronSessionSsr } from "iron-session/next";
import { ironOptions } from "../config/session/session_config";
import { Card } from "@nextui-org/react";
import { TypeAnimation } from "react-type-animation";
import bg from "../public/scetch_profile.png";
import { Sketch_profile } from "../components/sketch";

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

        <span
          className="grid md:grid-cols-2 gap-4 m-3 h-56 content-stretch background-repeat: no-repeat"
          style={{
            backgroundImage: `url(${bg.src})`,
            width: "100%",
            height: "100%",
            "background-repeat": "no-repeat",
            "background-position": "center",
          }}
        >
          <span className="hidden m-10 md:flex">
            <div
              className=" justify-start"
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
            using Microsoft Office, such as Microsoft Word, Excel and others.
            Also, I can troubleshoot/repair various Routers, VPNs as well as
            firewalls and IT security issues. I am a quick learner and
            passionate about technologies. I have been repairing hardware of
            various computers for more than ten years. I can easily assemble and
            disassemble any laptop, desktop, tablet or stationery computer. Due
            to my rich technical knowledge and sharp attention to detail, I am
            able to quickly diagnose defective parts and replace them as well as
            find correct parts for replacement or upgrade. In addition to
            repairing hardware, I am also able to install as well as
            troubleshoot various software, such as Microsoft Windows Operating
            systems. In addition, I have assembled many computers with a water
            cooling and implemented RAID technologies. Similarly, I am able to
            set-up protected subnetwork for extra layer of security as well as
            automate backup of a computer or shared network drive. Furthermore,
            I have significant experience repairing electronic devises - such as
            diagnosing issues and replacing fuses, resistors, mosfets, IC Chips
            and other. I am able to use various equipment, such as multimeter,
            soldering iron, hot air gun and ESR meter. I have assembled and
            programmed multiple DIY drones and possess a solid understanding of
            how drones function. Similarly, I have assembled and programmed 3D
            printers and have significant understanding of 3D printing key
            principles. I have also completed various online courses and YouTube
            tutorials, which helped me learn basics of some programming
            languages, such as Python, C++, Java and JavaScript. I am actively
            looking for opportunities to learn something new. I believe I would
            be a great long-term investment for innovative company like yours,
            which is committed to providing cutting edge technologies to
            reputable clients, such as Microsoft, HP, Dell and others. I can
            promise my exceptional performance, which will help you build even
            better reputation. I am quick at learning any new skills and
            adapting to changing environment, so I will quickly master key
            responsibilities. The enclosed resume expands on my work experience,
            education, online courses completed and other. If you require more
            information, please contact me at your earliest convenience. Thank
            you for your consideration and I am looking forward to hearing back
            from you soon.
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
