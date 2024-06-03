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
        <div className="  mx-5 sm:w-1/2 h-screen ">
          <EmblaCarousel
            slides={SLIDES}
            options={OPTIONS}
            options2={OPTIONS2}
          />
        </div>
        <div className="mt-12 sm:mt-2 sm:w-1/2 ">
          <div>
            <b>Name:</b>{" "}
            <a href="https://kostux.github.io/Drone_game/" target="_blank">
              {" "}
              hhttps://kostux.github.io/Drone_game/
            </a>
          </div>
          <div>
            <b>Language:</b> C#
          </div>
          <div>
            <b>Purpose:</b> Simple game created using Unity
          </div>
          <div className="mt-6"></div>
        </div>
      </div>
      <div className="h-screen border mt-56">
        {" "}
        <iframe
          src="https://kostux.github.io/Drone_game/"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
};
