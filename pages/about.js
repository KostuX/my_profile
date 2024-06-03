import React, { useEffect, useCallback } from "react";

import EmblaCarousel2 from "../components/emblaCarousel/Embla";
import Autoplay from "embla-carousel-autoplay";

export default function EmblaCarousel() {
  const OPTIONS = { loop: true };
  const OPTIONS2 = [Autoplay({ delay: 2000 })];
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <EmblaCarousel2 slides={SLIDES} options={OPTIONS} options2={OPTIONS2} />
  );
}
