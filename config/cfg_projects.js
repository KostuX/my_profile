

export const projects_cfg = [


    {
        title: "IPFS Life (Web App)",
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
            decentralised networks. It offers a service similar to centralised
            systems, making it more familiar to users. The IPFS gateway allows
            users to transfer larger files compared to common solutions like
            messengers or emails and reduces the complexity of sharing over
            cloud storage. For private sharing, file encryption can restrict
            unauthorised viewing since IPFS is a public network. Ip-fs.cloud is
            probably the fastest way to share files between multiple people
            simultaneously. Users only need to add a file reference to a "Public
            Wall" for public access. The gateway also supports video streaming
            directly from the IPFS network, enabling users to upload videos from
            their phones and play them almost immediately on any HTML5-capable
            web browser. Apart from simplifying the adoption of distributed
            networks, this represents a significant technological shift since
            Web 2.0. Decentralised systems are more efficient, reduce business
            expenses, and waste less energy due to direct peer-to-peer data
            transfer, benefiting our ecosystem. IPFS, as a decentralised network
            with a distributed file system, avoids central choke points. Any
            node with the content cached can serve it, enabling torrent-like
            file sharing where peers download files from multiple sources
            concurrently, speeding up the process.`,
    },
    {
        title: "MonTool (Web App)",
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
        title: "O Rings (Computer Vision)",
        link: "Private",
        language: "Python",
        description_short: "Computer Vision techniques to analyse images. Aim to identify and label faulty O-rings.",
        images: [ 
             { src: "./projectImg/oring/set_1.png", description: "" },
            { src: "./projectImg/oring/set_2.png", description: "" },
            { src: "./projectImg/oring/set_3.png", description: "" },
            { src: "./projectImg/oring/set_4.png", description: "" },],
        description: 'A Computer Vision Application for O-Ring Analysis inspects and classifies O-rings based on their condition using image processing techniques. The process begins with thresholding, which converts the image to a binary format to separate the O-ring from the background. To enhance the shape and remove noise, dilation and erosion are applied, ensuring a clearer representation of the object. The system then extracts regions of interest, isolating the O-ring for further analysis. Perimeter detection is used to examine the contour, identifying irregularities, breaks, or distortions. Statistical analysis follows, measuring key properties such as circularity, thickness variation, and surface defects. Based on these extracted features, the application classifies the O-ring into categories such as good, damaged, or ripped, using predefined thresholds. This automated approach improves quality control in manufacturing by providing fast, accurate, and consistent defect detection.'

    },
    {
        title: "Huffman Tree (Algorithm)",
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
                    "A Huffman tree that has been constructed using the default dataset utilised in this application.",
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
    },
   
    {
        title: "RS Nails (Website)",
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
        description: "A Business Website for Nail Polishing Services showcases a professional nail care brand. Designed with a stylish and modern aesthetic, the website features high-quality images, a portfolio of nail art designs, and customer testimonials to enhance credibility.",
    },
    {
        title: "Fix Tune Motors (Website)",
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
        title: "COVID-19 Simulator (Application)",
        link: "Private",
        language: "C, Gnuplot",
        description_short: "COVID-19 Simulation: Evaluating Lockdown Effectiveness",
        images: [
            { src: "./projectImg/covid/spread.png", description: "Cellular Automata" },
            { src: "./projectImg/covid/lockdown.png", description: "Lockdown Effect On Population" },
        ],
        description: 'A COVID-19 Lockdown Simulation App models the spread of the virus under different lockdown scenarios to evaluate their effectiveness in reducing infections. The app simulates a population where individuals interact and transmit the virus based on parameters like infection rate, recovery time, and mobility restrictions. \can adjust variables such as lockdown start time, intensity (full or partial), and duration to observe their impact on case numbers over time. The simulation visualises outcomes with graphs and heatmaps, helping policymakers and researchers understand the trade-offs between public health and economic impact.'

    },
  
    {
        title: "Chest Infection (AI/ML, Data analytics)",
        link: "Private",
        language: "Python/Jupyter",
        description_short: "",
        images: [
            { src: "./projectImg/ML_chest/baseline.png", description: "Baseline" },
            { src: "./projectImg/ML_chest/augmentation.png", description: "Augmentation to prevent overfiting" },
            { src: "./projectImg/ML_chest/classImbalance.png", description: "Address class imbalance by applying weights." },
            { src: "./projectImg/ML_chest/kerasTuner.png", description: "Keras tuner" },
            { src: "./projectImg/ML_chest/pretrainedModels.png", description: "Test pretrained models" },
            { src: "./projectImg/ML_chest/modelEvaluation.png", description: "Evaluate" },
        ],
        description: 'A Machine Learning System for Chest Infection Analysis and Classification leverages advanced algorithms to detect and categorise chest infections from medical images such as X-rays or CT scans. The system processes input images using techniques like image preprocessing, noise reduction, and feature extraction to enhance diagnostic accuracy. A deep learning model, such as a Convolutional Neural Network (CNN), analyses the images to identify patterns associated with infections like pneumonia, tuberculosis, or COVID-19. The model is trained on labeled medical datasets, learning to differentiate between normal and infected lungs. Statistical measures, including accuracy, sensitivity, and specificity, help evaluate its performance. After analysis, the system classifies the infection and provides a confidence score, assisting healthcare professionals in diagnosis. The model can be integrated into a cloud-based platform for remote accessibility or deployed in hospitals to support radiologists in making faster, data-driven decisions.'

    },
  
 
    {
        title: "Tumor - cancer detection (AI/ML, Data analytics)",
        link: "Private",
        language: "Python/Jupyter",
        description_short: "",
        images: [
            { src: "./projectImg/ML_tumor/age.png", description: "Protein binding by age" }, 
            { src: "./projectImg/ML_tumor/corelation2.png", description: "Correlation" }, 
            { src: "./projectImg/ML_tumor/corelation.png", description: "Correlation Visualisation" },             
            { src: "./projectImg/ML_tumor/outliers.png", description: "Outliers" },
            { src: "./projectImg/ML_tumor/evaluation.png", description: "Evaluation" },],
        description: 'Tumor is an advanced mobile application designed to assist in the early detection of cancer through blood analysis, powered by AI and machine learning technologies. By analysing blood samples, the app utilises sophisticated algorithms to identify biomarkers and other indicators that may suggest the presence of cancerous cells. The machine learning models continuously improve their detection capabilities, providing highly accurate insights that can help healthcare professionals make informed decisions for early diagnosis and treatment. '

    },
    {
        title: "Fake News (AI/ML, Data analytics)",
        link: "Private",
        language: "Python/Jupyter",
        description_short: "Analyse given textual content to detect fake news/post.",
        images: [
            { src: "./projectImg/ML_fakeNews/image.png", description: "" },
            { src: "./projectImg/ML_fakeNews/dataRepresentation.png", description: "" },
            { src: "./projectImg/ML_fakeNews/clustering.png", description: "KKMean, KKMean++ clustering" },
            { src: "./projectImg/ML_fakeNews/wordCloud.png", description: "Wordcloud" },           
            { src: "./projectImg/ML_fakeNews/compareMostCommon.png", description: "Most Common words" },
            { src: "./projectImg/ML_fakeNews/gramAnalysis.png", description: "Lexical analysis" },
            { src: "./projectImg/ML_fakeNews/generalisation.png", description: "Generalisation" },
            { src: "./projectImg/ML_fakeNews/score.png", description: "Evaluation" },
        ],
        description: 'Project leverages advanced artificial intelligence (AI) and machine learning (ML) technologies which may help to combat the spread of misinformation. Using sophisticated algorithms, the system analyses given textual content such as news articles, social media posts, and other content to assess their credibility. By evaluating linguistic patterns and context, it accurately flags potential fake news, helping users distinguish reliable information from misleading or fabricated stories.'

    },



   
    {
        title: "RSS reader (Android App)",
        link: "Private",
        language: "Java (Android)",
        description_short: "RSS reader for mobile device.",
        images: [
          
        ],
        description: 'An RSS Reader App for Android allows users to subscribe to and read RSS feeds, providing a streamlined way to stay updated with news and articles. The app fetches and parses RSS feeds from user-specified sources, displaying content in a clean and user-friendly interface. Users can categorise feeds, bookmark articles, and search through saved content for easy access. To ensure seamless data synchronisation across devices, the app stores user preferences, subscriptions, and bookmarked articles on Firebase. Firebase Firestore manages real-time data storage, while Firebase Authentication allows secure user login. The app periodically updates feeds in the background and supports offline reading by caching recent articles. With push notifications for new articles, customisable themes, and an intuitive design, the app enhances the RSS reading experience while leveraging Firebase for efficient cloud-based storage and synchronisation.'

    },
    {
        title: "NLP (Web App)",
        link: "Private",
        language: "Javasript",
        description_short: "Parse text to tree",
        images: [
            { src: "./projectImg/NLP/image.png", description: "" },
            { src: "./projectImg/NLP/image_1.png", description: "" },
            { src: "./projectImg/NLP/image_2.png", description: "" },
        ],
        description: ''

    },
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