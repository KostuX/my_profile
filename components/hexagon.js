export default function Hexagon({size, props}){
    let height = size
    let width = height * 1.15
    return(
            <div

style={{
  height:height,
  width:width,
  overflow:'hidden',
  transform: 'rotate(-30deg)'
}}>
  <div 
  style={{
  height:"100%",
  width:"100%",
   overflow:'hidden',
  transform: 'rotate(60deg)'
}}>

<div 
  style={{

  overflow:'hidden',
  height:"100%",
  width:"100%",
  transform: 'rotate(-120deg)',

}}
  {...props}
  
>



</div>
  </div>


</div>
    )
}