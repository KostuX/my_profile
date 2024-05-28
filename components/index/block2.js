
import { arangeHex } from "../../lib/helper/hexarange"
export const Index_block2 = (props)=>{
    return(
    <div {...props}>
        <span  >
            <h1 className="text-center mb-24">【My Tools】</h1>
            </span>

            
            <div className="flex flex-wrap mx-56 justify-center">
            {arangeHex(3)}

            
            </div>  
           
      <span className="grid grid-cols-1 gap-4 m-10">
          <div className="row-span-1 flex">
            <ul>Programming languages: Java, JavaScript, PHP, Python</ul>
            <ul>Deployment: AWS, DigitalOcean, Linux, Nginx, Docker, PM2, Grafana, Jenkins</ul>
	
	<ul>	Web-App: NodeJS, NextJS, Symfony</ul>
	<ul>Database: CocroachDB, MongoDB, MySQL</ul>
<ul>AI/ML: TensorFlow, Keras, Scikit-learn, Jupyter, Neural Networks,  </ul>
<ul>Other: Git, RabbitMQ, FireBase, RestAPI, Swager  </ul>
	
</div>
                 
      </span>





    </div>
    )
}