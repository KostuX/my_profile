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
            <b>Name:</b>{" "}
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
            User-friendly gateway to IPFS network. It act as a bridge from WEB
            2.0 to WEB 3.0. Project hides all the complexity of the
            decentralised networks and provide service similar to centralised
            systems with which users are more familiar. IPFS gateway allow users
            to transfer larger files compared to other most commonly used
            solutions such messengers or emails, and reduce the complexity
            compared to sharing over cloud storage. Since IPFS is a public
            network, sharing files privately may require a slightly different
            solution - file encryption may restrict others from viewing the
            content. Ip-fs.cloud probably the fastest way to share a file
            between one or many people at the same time. All you need to do is
            add a reference to a file to a ”Public Wall” from where anyone could
            access it. The ability to stream video files directly from IPFS
            network also available. Users can upload videos from their phones
            and almost immediately play them on TV or other devices that support
            WEB browsers with built-in HTML5 player. Apart from adding
            simplicity in the adaption of distributed networks, we should not
            forget that this is one step stone in possibly the most significant
            change in technologies since WEB2. Decentralised systems are much
            more efficient- fewer expenses for business, and since data is
            transferred directly (P2P), less energy is wasted, which makes it
            beneficial to our ecosystem. Since IPFS is a decentralized network
            consisting of a distributed file 4 system, no central entity becomes
            a choke point to serve all requests for content. Instead, any node
            in the P2P network that has the content cached can serve it. This
            torrent-like file share, where peer downloads files from multiple
            users concurrently, speeds up the process.
          </div>
        </div>
      </div>
      <div className="h-screen border mt-56">
        {" "}
        <div>Page preview</div>
        <iframe src="https://ip-fs.cloud" width="100%" height="100%"></iframe>
      </div>
    </>
  );
};
