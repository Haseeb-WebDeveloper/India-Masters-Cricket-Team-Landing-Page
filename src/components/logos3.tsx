"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Our Sponsors",
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "/sponsors/1.svg",
      className: "h-32 w-auto h-32 w-auto drop-shadow-[0_0_6px_rgba(0,0,0,0.9)",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "/sponsors/2.svg",
      className: "h-32 w-auto h-32 w-auto drop-shadow-[0_0_6px_rgba(0,0,0,0.9)",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "/sponsors/3.png",
      className: "h-32 w-auto h-32 w-auto drop-shadow-[0_0_6px_rgba(0,0,0,0.9)",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "/sponsors/7.png",
      className: "h-32 w-auto h-32 w-auto drop-shadow-[0_0_6px_rgba(0,0,0,0.9)",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "/sponsors/5.svg",
      className: "h-32 w-auto h-32 w-auto drop-shadow-[0_0_6px_rgba(0,0,0,0.9)",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "/sponsors/seva.png",
      className: "h-24 w-auto h-24 w-auto drop-shadow-[0_0_6px_rgba(0,0,0,0.9)",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "/sponsors/7.svg",
      className: "h-32 w-auto h-32 w-auto drop-shadow-[0_0_6px_rgba(0,0,0,0.9)",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "/sponsors/8.svg",
      className: "h-32 w-auto h-32 w-auto drop-shadow-[0_0_6px_rgba(0,0,0,0.9)",
    },
    {
      id: "logo-10",
      description: "Logo 10",
      image: "/sponsors/10.png",
      className: "h-32 w-auto h-32 w-auto drop-shadow-[0_0_6px_rgba(0,0,0,0.9)",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="pt-20 pb-24 md:pb-32 md:pt-24 bg-foreground/10  overflow-hidden">
      <div className="mx-auto rounded-2xl flex flex-col items-center gap-10">
        <div className="flex flex-col items-center text-center px-4">
          <h1 className="text-pretty text-[2.5rem] lg:text-[5rem] uppercase font-bold">
            {heading}
          </h1>
        </div>
        <div className="w-full max-w-[90vw] md:max-w-[95vw]">
          <div className="relative mx-auto flex items-center justify-center">
            <Carousel
              opts={{
                loop: true,
                align: "start",
              }}
              plugins={[
                AutoScroll({
                  playOnInit: true,
                  speed: 2,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                  // direction: "rtl",
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-0 md:-ml-4">
                {[...logos, ...logos].map((logo, index) => (
                  <CarouselItem
                    key={`${logo.id}-${index}`}
                    className="flex pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                  >
                    <div className="mx-8 flex shrink-0 items-center justify-center">
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          src={logo.image}
                          alt={logo.description}
                          width={180}
                          height={180}
                          className={`${logo.className} max-w-[180px]`}
                        />
                       
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            {/* Gradient overlays */}
            <div className="absolute -left-1 w-[20px] h-full bg-gradient-to-r from- #171986] from-3% to-transparent"></div>
            <div className="absolute -right-1 w-[20px] h-full bg-gradient-to-l from- #171986] from-3% to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
