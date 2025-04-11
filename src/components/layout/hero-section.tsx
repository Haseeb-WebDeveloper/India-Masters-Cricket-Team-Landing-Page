"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    // Create a timeline for the parallax effect
    gsap.to(image, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="hero"
      className="relative w-full md:min-h-[120vh] h-[550px] md:pt-32 overflow-hidden px-4 md:px-0"
    >
      <div ref={imageRef} className="sticky md:top-0 w-full md:h-[100vh] h-full" >
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/new-banner.webp"
            alt="Hero Section"
            className="object-contain object-center w-full h-full hidden md:block "
          />
         
         <img            
            src="/new-mobile-banner.webp"
            alt="Hero Section"
            className="object-contain mt-12 w-full h-full block md:hidden scale-[1.10]"
          />
        </div>

        {/* Optional: Hero Content */}
        {/* <div className="relative top-[13vh] left-1/2 -translate-x-1/2  md:hidden z-10 container mx-auto px-4 h-full flex items-center w-full">
          <div className="max-w-2xl w-full">
            <h1 className="text-[3rem] bg-gradient-to-r from-yellow-300 via-blue-300 to-yellow-300 bg-clip-text text-transparent text-3xl md:text-5xl lg:text-[5rem] font-bold text-center uppercase tracking-tight max-w-5xl mx-auto leading-tight md:leading-[6rem] drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              India Masters
            </h1>
          </div>
        </div> */}
      </div>
    </div>
  );
}
