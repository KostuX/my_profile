
import React, { useEffect, useLayoutEffect, useRef } from 'react';

import  gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)




function App() {
  const main = useRef(null);



  useEffect(()=>{
    
    const el = main.current
    gsap.fromTo(el, {opacity:0},{opacity:1, duration:3, scrollTrigger:{
        trigger:el
    }})

  },[])
 

   return (
    <div >
    <div className='bg-red-500 h-screen' ></div>
      <div className='bg-red-300 h-screen' >
        <span ref={main}>dfdf</span>
            
      </div>
    </ div>
  );
}

export default App;
