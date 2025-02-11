import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useEffect, useRef } from "react";
import EmblaCarousel from "../components/emblaCarousel/Embla";
import Autoplay from "embla-carousel-autoplay";


import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

import { Bebas_Neue } from 'next/font/google'
const neue = Bebas_Neue({ subsets: ['latin'], weight: "400" })

export const Projects_layout = (prop) => {
    const OPTIONS = { loop: true };
    const OPTIONS2 = [Autoplay({ delay: 10000 })];

    const load = useRef(null);
    useEffect(() => {
        const el = load.current
        gsap.fromTo(el, { opacity: 0 }, {
            opacity: 1, duration: 3, scrollTrigger: {
                trigger: el
            }
        })
    }, [])

    const project = prop.project

    return (
        <div className="mt-12 mb-12 text-center" ref={load}>
            <ParallaxProvider>
                <Parallax speed={1}>
            <div className={`text-4xl font-bold ${neue.className}`}>{project.title}</div>
            </Parallax>
            <Parallax speed={-1}>
            <div className="mx-4">
                <div>
                    <b>Project: </b>
                    <a className="underline" href={project.link} target="_blank">
                        {project.link}
                    </a>
                </div>
                <div>
                    <b>Language:</b> {project.language}
                </div>
                <div>
                    <b>Purpose: </b> {project.description_short}
                </div>
            </div>
            </Parallax>
            <Parallax speed={1}>

            <div className="flex justify-center">
                <div className="mx-4 mt-6 text-lg max-w-4xl text-center">
                    {project.description}
                </div>
            </div>
           
            </Parallax>
            <Parallax speed={-1}>
            <div className="mt-12 flex justify-center">
                <div className="max-w-4xl w-5/6">
                    <EmblaCarousel
                        slides={project.images}
                        options={OPTIONS}
                        options2={OPTIONS2}
                    />
                </div>
            </div>
            </Parallax>
            </ParallaxProvider>
        </div>
    );
};
