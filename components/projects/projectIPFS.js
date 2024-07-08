import EmblaCarousel from "../emblaCarousel/Embla";
import Autoplay from "embla-carousel-autoplay";

export const Project_IPFS = (props) => {
  const OPTIONS = { loop: true };
  const OPTIONS2 = [Autoplay({ delay: 10000 })];

  const SLIDES = [
    { src: "./projectImg/ipfs/index.png", description: "Clean Design" },
    {
      src: "./projectImg/ipfs/upload.png",
      description: "Upload single or multiple files. Drop-down field.",
    },
    {
      src: "./projectImg/ipfs/publicWall.png",
      description:
        "Public wall allows to pin any content and asign it to with a tag. This alows to content to be shared with others just by its tag",
    },
    {
      src: "./projectImg/ipfs/media.png",
      description:
        "Media player allows to stream video files directly from distributed (IPFS) network",
    },
    {
      src: "./projectImg/ipfs/encrypt.png",
      description:
        "Content can be encrypted by password (any user that know password can decrypt it) or by using key (only specific user that has a key can decrypt it)",
    },
    {
      src: "./projectImg/ipfs/history.png",
      description:
        "History allows to quickly access files that were previausly uploaded/downloaded also as  manage content that is pinned on remote IPFS storage provider",
    },
    {
      src: "./projectImg/ipfs/stats.png",
      description: "Quick observation of statistics",
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
            <b>Project:</b>{" "}
            <a href="https://ip-fs.cloud" target="_blank">
              {" "}
              ip-fs.cloud
            </a>
          </div>
          <div>
            <b>Language:</b> Javascipt
          </div>
          <div>
            <b>Purpose:</b> Web-based gateway to distributed (IPFS) network
          </div>
          <div className="mt-6">
            User-friendly Gateway to the IPFS Network. My project acts as a
            bridge from Web 2.0 to Web 3.0, simplifying the complexities of
            decentralized networks. It offers a service similar to centralized
            systems, making it more familiar to users. The IPFS gateway allows
            users to transfer larger files compared to common solutions like
            messengers or emails and reduces the complexity of sharing over
            cloud storage. For private sharing, file encryption can restrict
            unauthorized viewing since IPFS is a public network. Ip-fs.cloud is
            probably the fastest way to share files between multiple people
            simultaneously. Users only need to add a file reference to a "Public
            Wall" for public access. The gateway also supports video streaming
            directly from the IPFS network, enabling users to upload videos from
            their phones and play them almost immediately on any HTML5-capable
            web browser. Apart from simplifying the adoption of distributed
            networks, this represents a significant technological shift since
            Web 2.0. Decentralized systems are more efficient, reduce business
            expenses, and waste less energy due to direct peer-to-peer data
            transfer, benefiting our ecosystem. IPFS, as a decentralized network
            with a distributed file system, avoids central choke points. Any
            node with the content cached can serve it, enabling torrent-like
            file sharing where peers download files from multiple sources
            concurrently, speeding up the process.
          </div>
        </div>
      </div>
      <div className="w-screen mt-52  justify-center text-center font-extrabold text-xl">
        Top view
      </div>
      <div className="w-screen md:grid md:grid-cols-2 ">
        <div className="mx-4 m-24 ">
          <div className="text-center "> System Design</div>
          <div className=" flex justify-center">
            {" "}
            <img
              src="systemDesign.png"
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
              src="dbDesign.png"
              alt="Database Design"
              width="90%"
              height="100%"
            />{" "}
          </div>
        </div>
      </div>

      {/*}
      <div className="h-screen border md:m-24">
        {" "}
        <div className="text-center">Page preview</div>
        <iframe  src="https://ip-fs.cloud" width="100%" height="100%"></iframe>
      </div>

      {*/}
    </>
  );
};
