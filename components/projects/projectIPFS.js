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
      <div className="  mb-24 ">
        <div className="text-4xl text-center">IPFS Life</div>
        <div className="text-center my-10">
          {" "}
          <div>
            <b>Project:</b>{" "}
            <a className="underline" href="https://ip-fs.life" target="_blank">
              {" "}
              https://ip-fs.life
            </a>
          </div>
          <div>
            <b>Language:</b> Javascipt
          </div>
          <div>
            <b>Purpose:</b> Web-based gateway to distributed (IPFS) network
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
          <div className="mt-6 mx-10 text-lg max-w-4xl  text-center">
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
   
   
      
    </>
  );
};
