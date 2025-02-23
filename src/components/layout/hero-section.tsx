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
      className="relative w-full min-h-[120vh] overflow-hidden md:pt-32  bg-black"
    >
      <div ref={imageRef} className="sticky top-0 w-full min-h-[120vh]">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/banner.png"
            alt="Hero Section"
            fill
            priority
            className="object-cover w-full h-full hidden md:block"
          />
         
         <Image
            src="/mobile-banner.png"
            alt="Hero Section"
            fill
            priority
            className="object-contain w-full h-full block md:hidden"
          />
        </div>

        {/* Optional: Hero Content */}
        <div className="relative top-[13vh] left-1/2 -translate-x-1/2  md:hidden z-10 container mx-auto px-4 h-full flex items-center w-full">
          <div className="max-w-2xl w-full">
            <h1 className="text-[3rem] bg-gradient-to-r from-yellow-300 via-blue-300 to-yellow-300 bg-clip-text text-transparent text-3xl md:text-5xl lg:text-[5rem] font-bold text-center uppercase tracking-tight max-w-5xl mx-auto leading-tight md:leading-[6rem">
              India Masters
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
