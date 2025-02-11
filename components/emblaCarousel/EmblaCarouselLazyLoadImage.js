import React, { useState, useCallback } from "react";

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`;

export const LazyLoadImage = (props) => {
  const { imgSrc, inView, imgDescription } = props;
  const [hasLoaded, setHasLoaded] = useState(false);

  const setLoaded = useCallback(() => {
    if (inView) setHasLoaded(true);
  }, [inView, setHasLoaded]);

  return (
    <div className="embla__slide">
      <div
        className={"embla__lazy-load".concat(
          hasLoaded ? " embla__lazy-load--has-loaded" : ""
        )}
      >
        {!hasLoaded && <span className="embla__lazy-load__spinner" />}
  
        <img
          className="embla__slide__img embla__lazy-load__img"
          onLoad={setLoaded}
          src={inView ? imgSrc : PLACEHOLDER_SRC}
          alt=""
          data-src={imgSrc}
        />
      
        
        <div>{imgDescription}</div>
      </div>
    </div>
  );
};
