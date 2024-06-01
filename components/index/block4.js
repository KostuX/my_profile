const textContent = (
  <span className="text-xl text-center">
    <h1 className="mb-5">【Certificates】</h1>

    <h3 className="mb-12">
      Have obtained certifications as JAVA Programmer, as well as Microsoft
      specializations in Networking, Security, Server Administration, and
      Operating Systems, demonstrating my comprehensive technical expertise and
      commitment to continuous learning. These certifications reflect my ability
      to manage complex IT systems and develop robust, secure software
      solutions.
    </h3>
  </span>
);

const certs = [
  {
    title: "European Computer Driving Licence",
    filename: "/certs/JAVA Associate Programmer.png",
  },
  textContent,
  {
    title: "JAVA Foundations Associate (Junior)",
    filename: "/certs/JAVA Foundations Associate (Junior).png",
  },
  { title: "European Computer Driving Licence", filename: "/certs/ECDL.jpg" },

  {
    title: "European Computer Driving Licence",
    filename: "/certs/ComptiaA.png",
  },

  {
    title: "Microsoft Networking Fundamentals",
    filename: "/certs/MS_Network.png",
  },
  {
    title: "Microsoft Operating Systems Fundamentals",
    filename: "/certs/MS_OS.png",
  },
  {
    title: "Microsoft Security Fundamentals",
    filename: "/certs/MS_Security.png",
  },
  {
    title: "Microsoft Server Administration Fundamentals",
    filename: "/certs/MS_Server.png",
  },
];

export const Index_block4 = (props) => {
  return (
    <div className="h-screen grid sm:grid-cols-3 gap-4 ">
      {certs.map((e, index) => (
        <div className=" place-content-around flex">
          {index == 1 ? (
            e
          ) : (
            <img
              className="hover:scale-150 transition-all duration-1000 h-52"
              src={e.filename}
              alt={e.title}
            />
          )}
        </div>
      ))}
    </div>
  );
};
