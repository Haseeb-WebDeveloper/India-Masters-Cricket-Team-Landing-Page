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
      className="relative w-full min-h-[120vh] overflow-hidden pt-12 bg-black"
    >
      <div ref={imageRef} className="sticky top-0 w-full min-h-[120vh]">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/banner-2.png"
            alt="Hero Section"
            fill
            priority
            className="object-cover w-full h-full"
          />
         
        </div>

        {/* Optional: Hero Content */}
        {/* <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold text-white mb-6">
              India Masters
            </h1>
            <p className="text-xl text-white/80">
              Experience the legacy of cricket excellence
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
