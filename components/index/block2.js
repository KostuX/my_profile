import list from "../../public/hex logo/list"
export const Index_block2 = (props)=>{
    return(
    <div {...props}>
        <span className="text-center m-50">
            <h1>【Technologies】</h1>
            </span>

              <span className="text-center m-50">
            <div className="col-span-1 mx-56">
            
            {list().map((e)=>(
                
               
            <img class="h-auto max-w-full w-20 h-20 m-2 inline  hover:scale-125 transition-all duration-500" src={`/hex logo/${e}`} alt="image description"></img> 
            ))}
            
            </div>  
            </span>
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