import EmblaCarousel from "../emblaCarousel/Embla";
import Autoplay from "embla-carousel-autoplay";

export const Project_monTool = (props) => {
  const OPTIONS = { loop: true };
  const OPTIONS2 = [Autoplay({ delay: 10000 })];

  const SLIDES = [
    {
      src: "./projectImg/monTool/dashboard.png",
      description: "Modern Design",
    },
    {
      src: "./projectImg/monTool/deviceList.png",
      description: "Supports multiple devices to be monitored",
    },
    {
      src: "./projectImg/monTool/api.png",
      description: "Provides RestAPI gateway",
    },
    {
      src: "./projectImg/monTool/arp.png",
      description:
        "Track ARP table. Optional - get email notification if new devices connected to a network.",
    },
    {
      src: "./projectImg/monTool/ports.png",
      description:
        "Track network ports that are open also as close unvanted application. Compare it to a baseline - send email notification if new ports detected.",
    },
    {
      src: "./projectImg/monTool/baseline.png",
      description: "Baseline is build per each gateway.",
    },
    {
      src: "./projectImg/monTool/events.png",
      description:
        "List of events that are tracked. Optional - email notification",
    },
    {
      src: "./projectImg/monTool/hdd.png",
      description: "Hard Drive usage summary",
    },
    {
      src: "./projectImg/monTool/Latency.png",
      description: "Track network latency, keep history for analytics. ",
    },
    {
      src: "./projectImg/monTool/messageBox.png",
      description: "Send notification to a user",
    },
    {
      src: "./projectImg/monTool/shutdown.png",
      description: "Shutdown remote device",
    },
  ];

  return (
    <>

<>
      <div className="  mb-24 ">
        <div className="text-4xl text-center">MonTool</div>
        <div className="text-center my-10">
          {" "}
          <div>
            <b>Project:</b>{" "}
            <a className="underline" href="https://montool.vercel.app/" target="_blank">
              {" "}
              https://montool.vercel.app/
            </a>
          </div>
          <div>
            <b>Language:</b> Javascipt
          </div>
          <div>
            <b>Purpose:</b> Network monitoring tool (small to medium
            infrastructure)
          </div>
        </div>
        <div className="  mx-5 flex justify-center ">
        <div className="max-w-4xl w-5/6   ">
            <EmblaCarousel
              slides={SLIDES}
              options={OPTIONS}
              options2={OPTIONS2}
            />
          </div>
        </div>
        <div className="w-screen  flex justify-center ">
          {" "}
          <div className="mt-6 text-lg max-w-4xl mx-10  text-center">
          The aim of this project is to monitor network activities and inform
            the administrator if any trackable or unexpected events occur. There
            are three main parts to this project: an application on the computer
            side, a controller, and a website to display collected data to the
            administrator. The benefits of such an application are that it can
            be installed on multiple devices and all collected data can be
            displayed at a single point (the website). The website can be
            accessible 24/7 from any part of the globe. All monitored devices
            are displayed as a list. If a user prefers, email notifications can
            be sent about events that have occurred. Additionally, users will
            have some control over remote devices, such as closing applications
            running on the device and shutting down or restarting computers. An
            API endpoint will also be provided, so it can be easily integrated
            into other applications.
          </div>
        </div>
      </div>
   
   
      
    </>



      {/*}
      <div className="w-screen mt-52  justify-center text-center font-extrabold text-xl">
        Top view
      </div>
      <div className="w-screen md:grid md:grid-cols-2 ">
        <div className="mx-4 m-24 ">
          <div className="text-center "> System Design</div>
          <div className=" flex justify-center">
            {" "}
            <img
              src="monTool/systemDesign.png"
              alt="System Design"
              width="90%"
              height="100%"
            />{" "}
          </div>
        </div>
        <div className="mx-4 m-24 ">
          <div className="text-center"> Database Design</div>
          <div className=" flex justify-center">
            {" "}
            <img
              src="monTool/dbDesign.png"
              alt="Database Design"
              width="90%"
              height="100%"
            />{" "}
          </div>
        </div>
      </div>
      {*/}
    </>
  );
};
