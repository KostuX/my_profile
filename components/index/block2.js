import { arangeHex } from "../../lib/helper/hexarange";

export const Index_block2 = (props) => {
  return (
    <div className="h-screen text-center">
      <span className="  border-theme_secondary text-xl sm:grid grid-cols-3 gap-4 justify-evenly">
        <span></span>
        <span>
          <h1 className="mb-5">【My tools】</h1>

          <h3 className="mb-5   ">
            Over the past years, I have honed my skills in various programming
            languages, including Java, JavaScript, PHP and Python, while working
            on diverse projects that span web development, mobile app creation,
            and backend system optimization.
          </h3>
        </span>
      </span>

      <div className="  ">{arangeHex()}</div>

      <span className="hidden sm:flex grid grid-cols-1 gap-4 m-10">
        <div className="row-span-1 flex">
          <ul>Programming languages: Java, JavaScript, PHP, Python</ul>
          <ul>
            Deployment: AWS, DigitalOcean, Linux, Nginx, Docker, PM2, Grafana,
            Jenkins
          </ul>

          <ul> Web-App: NodeJS, NextJS, Symfony</ul>
          <ul>Database: CocroachDB, MongoDB, MySQL</ul>
          <ul>
            AI/ML: TensorFlow, Keras, Scikit-learn, Jupyter, Neural Networks,{" "}
          </ul>
          <ul>Other: Git, RabbitMQ, FireBase, RestAPI, Swager </ul>
        </div>
      </span>
    </div>
  );
};
