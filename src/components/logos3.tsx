"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
  heading = "Our Sponsers",
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "/sponsors/1.svg",
      className: "h-24 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "/sponsors/2.svg",
      className: "h-24 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "/sponsors/3.svg",
      className: "h-24 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "/sponsors/4.svg",
      className: "h-24 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "/sponsors/5.svg",
      className: "h-24 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "/sponsors/6.svg",
      className: "h-24 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "/sponsors/7.svg",
      className: "h-24 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "/sponsors/8.svg",
      className: "h-24 w-auto",
    },
    {
      id: "logo-9",
      description: "Logo 9",
      image: "/sponsors/9.svg",
      className: "h-24 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="pt-32 pb-32">
      <div className=" mx-auto rounded-2xl flex flex-col items-center gap-20">
      <div className=" flex flex-col items-center text-center">
        <h1 className=" text-pretty text-[3rem] lg:text-[5rem] uppercase font-bold">
          {heading}
        </h1>
      </div>
      <div className="">
        <div className="relative mx-auto flex items-center justify-center ">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/8"
                >
                  <div className="mx-8 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      </div>
    </section>
  );
};

export { Logos3 };
