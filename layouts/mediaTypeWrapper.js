
export default function MediaTypeWrapper({content}){

    function getExtension(url) {
        const extension = url.split('.').pop().split(/\#|\?/)[0]; // Extract file extension
        return extension;
      }

    function mediaType(mediaExt){
        let imageTypes = ['png']
        let videoTypes = ['webm']
        if(imageTypes.includes(mediaExt)){return('image')}
        if(videoTypes.includes(mediaExt)){ return('video')}
    }
    

    let res = <></>
    let mediaLink = content.src
    let mediExt = getExtension(mediaLink) 
    console.log(mediaType(mediExt))

  
   
    /**
       <LazyLoadImage
                   key={index}
                   index={index}
                   imgSrc={e.src}
                   imgDescription={e.description}
                   inView={slidesInView.indexOf(index) > -1}
                 /> 
     
             <video controls>         
               <source src={e.src} type="video/webm"/>          
             </video>
     */
   
    


    return(res);
}