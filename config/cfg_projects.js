

export const projects_cfg = [
    {
        title: "IPFS Life",
        link: "https://ip-fs.life",
        language: "JavaScript",
        description_short: "Web-based gateway to distributed (IPFS) network",
        images: [
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
        ],
        description: `User-friendly Gateway to the IPFS Network. My project acts as a
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
            concurrently, speeding up the process.`,
    },
    {
        title: "MonTool",
        link: "https://montool.vercel.app/",
        language: "Javascipt",
        description_short: "Network monitoring tool (small to medium infrastructure)",
        images: [
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
        ],
        description: `The aim of this project is to monitor network activities and inform
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
            into other applications.`,
    },
    {
        title: "RS Nails",
        link: "https://www.rsnails.lt",
        language: "JavaScript",
        description_short: "Local business website",
        images: [
            {
                src: "./projectImg/rsnails/index.png",
                description: "Index",
            },
            {
                src: "./projectImg/rsnails/gallery_1.png",
                description: "3D Gallery",
            },
            {
                src: "./projectImg/rsnails/gallery_2.png",
                description: "2D Gallery",
            },
            {
                src: "./projectImg/rsnails/contact.png",
                description: "Contact",
            },
        ],
        description: "",
    },
    {
        title: "Fix Tune Motors",
        link: "www.fixtunemotors.ie",
        language: "JavaScript",
        description_short: "Local business website",
        images: [
            {
                src: "./projectImg/fixtunemotors/index.png",
                description: "Index",
            },
            {
                src: "./projectImg/fixtunemotors/services.png",
                description: "Services",
            },
            {
                src: "./projectImg/fixtunemotors/reviews.png",
                description: "Reviews",
            },
            {
                src: "./projectImg/fixtunemotors/contact.png",
                description: "Contact",
            },
        ],
        description: "",
    },
    {
        title: "Huffman Tree",
        link: "https://github.com/KostuX/huffman.git",
        language: "Java",
        description_short: "Text encoder/decoder which allows to compress text",
        images: [
            { src: "./projectImg/huffman/app.png", description: "" },
            {
                src: "./projectImg/huffman/Huffman_tree.png",
                description:
                    "Huffman tree  -  example from https://en.wikipedia.org/wiki/Huffman_coding",
            },
            {
                src: "./projectImg/huffman/DefaultTree.png",
                description:
                    "A Huffman tree that has been constructed using the default dataset utilized in this application.",
            },
        ],
        description: `Huffman coding is a scheme that assigns variable-length bit-codes
          (binary strings) to characters, such that the lengths of the codes
          depend on the frequencies of the characters in a typical message. As
          a result, encoded messages take less space (as compared to
          fixed-length encoding such as ASCII or UNICODE) since the letters
          that appear more frequently are assigned shorter codes. This is
          performed by first building a Huffman coding Tree based on a given
          set of frequencies. From the tree, bit-codes for each character are
          determined and then used to encode a message. The tree is also used
          to decode an encoded message as it provides a way to determine which
          bit sequences translate back to a character.`,
    }
]




/*




 {
        title: "temp",
        link:"temp",
        language: "temp",
        description_short: "temp",
        images: [],
        description: "temp",        
    }

 */