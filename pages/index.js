import DefaultLayout from "../layouts/default";
import { withIronSessionSsr } from "iron-session/next";
import { ironOptions } from "../config/session/session_config";
import { Card } from "@nextui-org/react";
import { TypeAnimation } from "react-type-animation";
import { Shiba } from "../components/Shiba";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import React, { useState, useEffect } from 'react';

export default function Home({ data }) {

  useEffect(() => { import('@google/model-viewer').catch(console.error); }, []);

  useEffect(() => {
    if (document) {  
         const modelViewer = document.getElementById("3d_main");
         if (modelViewer) {
          let xMaxRange = 35;
          let yMaxTop = 135;
          let yMin = 35;
          let yMid = yMaxTop/2;
          
          const orbitCycle = [
            xMaxRange+'deg '+yMaxTop+'deg 10m', // top left
                      ' 0deg '+yMaxTop+'deg 10m', // top 
            -xMaxRange+'deg '+yMaxTop+'deg 10m', // top right
            -xMaxRange+'deg '+yMid+'deg 10m', // mid right
                    ' 0deg '+yMid+'deg 10m', // center
            xMaxRange+'deg '+yMid+'deg 10m', // mid left
            xMaxRange+'deg '+yMin+'deg 10m', // bottom left 65
                    ' 0deg '+yMin+'deg 10m', // bottom mid
            -xMaxRange+'deg '+yMin+'deg 10m', // bottom right
         
            modelViewer.cameraOrbit
          ]
          
         }

         document.addEventListener('mousemove', (event) => {
          const width  = window.innerWidth || document.documentElement.clientWidth || 
          document.body.clientWidth;
      
          const height = window.innerHeight|| document.documentElement.clientHeight|| 
          document.body.clientHeight;

          let xPercentage = event.clientX/width;
          let yPercentage = event.clientY/height;
          
          let xDegVal = ((-20 - (-35)) * xPercentage) + (-35);
          let yDegVal = ((120 - 135) * yPercentage) + 135;
        
          modelViewer.cameraOrbit = -xDegVal+'deg '+ yDegVal+'deg 10m';
      });
      

    }
  }, []);

  return (

    <DefaultLayout>
       <div >
        <model-viewer 
        className='absolute sm:hidden  justify-center items-center h-screen' 
        style={{ height:"100vh", width:"100%", position:"absolute" , zIndex: 0}}  
        id="3d_main" 
        enable-pan shadow-intensity="1"  	
        camera-controls touch-action="pan-y"  			
    interaction-prompt="none"    oncontextmenu="return false;" 
    src="/shiba/untitled.glb" 

    disable-zoom
    >
      
       </model-viewer>

        </div>
       
   
    
      <div className="justify-between h-full text-center " >
        {/**  <div className="border  m-5  border-theme_secondary">Top Center</div>*/}

     
      
    
     
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
