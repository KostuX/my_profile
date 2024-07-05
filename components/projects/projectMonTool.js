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
      <div className=" sm:flex mx-5">
        <div className="  mx-5 sm:w-1/2 ">
          <EmblaCarousel
            slides={SLIDES}
            options={OPTIONS}
            options2={OPTIONS2}
          />
        </div>
        <div className="mt-12 sm:mt-2 sm:w-1/2 ">
          <div>
            <b>Name:</b>{" "}
            <a href="https://montool.vercel.app/" target="_blank">
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
          <div className="mt-6">
            Project contains 3 parts. 1. Application that is installed on
            device/devices and collects all required data. Also it provides
            communication channel which allows administrator remotely interact
            with particular device. 2. Server - for processing data, storing in
            database, communication intermeadian. 3. Website that provides an
            administrator ability to monitore and control remote device/devices.
          </div>
        </div>
      </div>
      <div className="h-screen border md:m-24">
        {" "}
        <div className="text-center">Page preview</div>
        <iframe
          src="https://montool.vercel.app/"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
};
