import EmblaCarousel from "../emblaCarousel/Embla";
import Autoplay from "embla-carousel-autoplay";

export const Project_drone = (props) => {
  const OPTIONS = { loop: true };
  const OPTIONS2 = [Autoplay({ delay: 10000 })];

  const SLIDES = [
    {
      src: "./projectImg/monTool/dashboardd.png",
      description: "Game",
    },
  ];

  return (
    <>

<div className="text-4xl text-center font-bold">Drone Game</div>
        <div className="text-center my-10">
          {" "}
          <div>
            <b>Project:</b>{" "}
            <a href="https://kostux.github.io/Drone_game/" target="_blank">
              {" "}
              https://kostux.github.io/Drone_game/
            </a>
          </div>
          <div>
          <b>Language:</b> C#/C++
          </div>
          <div>
          <b>Purpose:</b> Simple game created using Unity
          </div>
          <div className="  mx-5 w-screen h-screen mt-12 flex justify-center">
          <iframe
            src="https://kostux.github.io/Drone_game/"
            width="80%"
            height="100%"
          ></iframe>
        </div>
        </div>




    
       

    
   
    </>
  );
};
/*

A Web-Based Game Built with Unity features an interactive experience where players control a drone to complete various challenges. Designed for seamless browser-based gameplay, the game utilizes WebGL to deliver high-quality 3D graphics and smooth performance without requiring downloads. Players navigate the drone through different environments, performing tasks such as obstacle avoidance, object collection, and precision landing.
*/
