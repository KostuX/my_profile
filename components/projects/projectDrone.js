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
      <div className=" sm:flex mx-5">
       
        <div className="mt-12 sm:mt-2 w-screen ">
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
          <div className="  mx-5 w-screen h-screen mt-12 ">
          <iframe
            src="https://kostux.github.io/Drone_game/"
            width="100%"
            height="100%"
          ></iframe>
        </div>
        </div>
      </div>
   
    </>
  );
};
