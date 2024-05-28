import Hexagon from "../../components/hexagon"
import list from "../../public/hex logo/list"

export const arangeHex = (lines)=>{
    let totLength = list().length
    let itemsPerLine = Math.floor(totLength/lines)
    let linesDivs = []
    let rows = []
    let row = []
    let processed = 0
 let eachLine = []
 let move = "0px"



    for(let i = 0; i < totLength; i++){    
        let work = Math.floor(i/itemsPerLine)         
       
        if(work > processed){
            processed++
            rows.push(row)
            row = []
        }       
      
        row.push(<span className="hover:scale-125 transition-all duration-500"> <Hexagon size={80}  image={"/logos/"+list()[i]}/></span>)
       
    }
    rows.push(row)
   
console.log(rows.length)
  
    return( 


    
    <div  >
        
     <div class="flex  ">    {rows[0]}   </div>

     <div class="flex  " style={{right:"45px", position: "relative"}}>    {rows[1]}   </div>
    
   <div class="flex  ">    {rows[2]}   </div>
       <div class="flex  " style={{right:"45px", position: "relative"}}>    {rows[3]}   </div>
     
      </div>
)

/**
    <div className=" flex flex-wrap mx-56">
 {list().map((e)=>(    
  <div className="hover:scale-125 transition-all duration-500 m-1">
<Hexagon size={80}  image={"/logos/"+e}/>
</div>
 ))}
</div>
 */

}