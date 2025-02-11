import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LazyLoadImage } from "./EmblaCarouselLazyLoadImage";



const EmblaCarousel = (props) => {
  const { slides, options, options2 } = props;
  const [emblaRed, emblaApi] = useEmblaCarousel(options, options2);
  const [slidesInView, setSlidesInView] = useState([]);

  const updateSlidesInView = useCallback((emblaApi) => {
    setSlidesInView((slidesInView) => {
      if (slidesInView.length === emblaApi.slideNodes().length) {
        emblaApi.off("slidesInView", updateSlidesInView);
      }
      const inView = emblaApi
        .slidesInView()
        .filter((index) => !slidesInView.includes(index));
      return slidesInView.concat(inView);
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateSlidesInView(emblaApi);
    emblaApi.on("slidesInView", updateSlidesInView);
    emblaApi.on("reInit", updateSlidesInView);
  }, [emblaApi, updateSlidesInView]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRed}>
        <div className="embla__container">
          {slides.map((e, index) => (
            <>
            <LazyLoadImage
              key={index}
              index={index}
              imgSrc={e.src}
              imgDescription={e.description}
              inView={slidesInView.indexOf(index) > -1}
            /> 

     

</>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
