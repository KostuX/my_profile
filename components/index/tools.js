import { arangeHex } from "../../lib/helper/hexarange";

export const Index_block2 = (props) => {
  return (
    <div className="text-center ">
      <span className="  border-theme_secondary text-xl sm:grid grid-cols-3 gap-4 ">
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

      <span className="hidden sm:flex grid grid-cols-1 gap-4 m-12 justify-center ">
        <div className="row-span-1 flex ">
          <ul className="max-w-56 ">Programming languages: Java, JavaScript, PHP, Python</ul>
          <ul className="max-w-56 ">
            Deployment: AWS, DigitalOcean, Linux, Nginx, Docker, PM2, Grafana,
            Jenkins
          </ul>

          <ul className="max-w-56 "> Web-App: NodeJS, NextJS, Symfony</ul>
          <ul className="max-w-56 ">Database: CocroachDB, MongoDB, MySQL</ul>
          <ul className="max-w-56 ">
            AI/ML: TensorFlow, Keras, Scikit-learn, Jupyter, Neural Networks{" "}
          </ul>
          <ul className="max-w-56 ">Other: Git, RabbitMQ, FireBase, RestAPI, FastAPI, Swager </ul>
        </div>
      </span>
    </div>
  );
};
