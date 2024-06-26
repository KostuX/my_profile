import React from "react";
import { TypeAnimation } from "react-type-animation";
export const Index_block1 = (props) => {
  return (
    <div className="" {...props}>
      <span className="grid sm:grid-cols-3 gap-4 justify-evenly">
        <span className="hidden  sm:m-10 sm:flex">
          <div className=" justify-start " style={{ height: "100%" }}>
            <h1>
              <TypeAnimation
                sequence={["Hallo", 500, "Heloo", 500, "Hell0o", 500, "Hi"]}
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
              <div className="ml-10 ">
                <TypeAnimation
                  sequence={[3000, "there!"]}
                  style={{
                    fontSize: "2em",
                    marginLeft: "10%",
                    whiteSpace: "pre-line",
                    display: "block",
                  }}
                  cursor={false}
                />
              </div>
              <div className="text-theme_secondary/75 ">
                <TypeAnimation
                  sequence={[4000, "How are you doing?!"]}
                  style={{
                    fontSize: "3em",
                    marginLeft: "10%",
                    whiteSpace: "pre-line",
                    display: "block",
                  }}
                  cursor={false}
                />
              </div>
            </h1>
          </div>
        </span>

        <span className="m-12 sm:mt-52    bg-theme_secondary-950 border-theme_secondary text-xl  text-center">
          <h1>Mｙ　ｎａｍｅ　ｉｓ</h1>
          <h1>【Konstantinas】</h1>
          <h3 className="mb-5">But you can call me Kostas.</h3>
          <h3>
            I'm a Software and Web App Developer with experience in designing,
            developing, and maintaining robust applications. I have skills in
            AI/ML, data & text analytics, software engineering, and web
            front-end development.
          </h3>
          <div className="grid  place-items-center mt-5">
            <img src="/programming_.svg" height={50} width={50} />
          </div>
        </span>

        <span className=" fixed sm:relative opacity-25 sm:opacity-100 ">
          <model-viewer
            style={{
              height: "100vh",
              width: "100vh",
              zIndex: 0,
            }}
            id="3d_main"
            enable-pan
            shadow-intensity="1"
            camera-controls
            touch-action="pan-y"
            interaction-prompt="none"
            oncontextmenu="return false;"
            src="/shiba/untitled.glb"
            disable-zoom
          ></model-viewer>
        </span>
      </span>
    </div>
  );
};
