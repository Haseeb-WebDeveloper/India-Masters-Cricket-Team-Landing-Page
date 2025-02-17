"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollBasedVelocityDemo } from "./text-scroll";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

const articles: Article[] = [
  {
    id: 1,
    title:
      "IML 2025: India vs Sri Lanka in Opener - Tendulkar Takes on Sangakkara",
    description:
      "IPL 2025: With Hardik Pandya ineligible to lead MI in opening match vs CSK. Will Rohit Sharma return as skipper?",
    image: "/article/article-1.jpg",
    link: "https://www.livemint.com/sports/cricket-news/international-masters-league-2025-sachin-tendulkars-india-face-kumar-sangakkaras-sri-lanka-in-opener-check-details-11738231372858.html",
  },
  {
    id: 2,
    title:
      "Watson to Lead Australia in Masters League 2025",
    description:
      "Inaugural Season Of International Masters League To Be Played From February 22 To March 16",
    image: "/article/article-2.jpeg",
    link: "https://theprint.in/ani-press-releases/australia-masters-unveil-squad-for-international-masters-league-shane-watson-to-lead/",
  },
  {
    id: 3,
    title:
      "International Masters League Set for Feb 22 - Mar 16",
    description:
      "Inaugural Season Of International Masters League To Be Played From February 22 To March 16",
    image: "/article/article-3.webp",
    link: "https://sports.ndtv.com/cricket/inaugural-season-of-international-masters-league-to-be-played-from-february-22-to-march-16-7489469",
  },
  {
    id: 4,
    title: "Yuvraj to represent India Masters in International Masters League",
    description:
      "Yuvraj to represent India Masters in International Masters League",
    image: "/article/article-4.avif",
    link: "/articles/digital-training",
  },
  {
    id: 5,
    title:
      "IML 2025: Tendulkar vs Sangakkara in Opener - Full Details",
    description:
      "International Masters League: Tendulkar, Sangakkara to meet in opening match - fixtures, cities, live streaming",
    image: "/article/article-5.avif",
    link: "https://timesofindia.indiatimes.com/sports/cricket/news/international-masters-league-tendulkar-sangakkara-to-meet-in-opening-match-fixtures-cities-live-streaming/articleshow/117725543.cms",
  },
  {
    id: 6,
    title: "IML 2025: Full schedule, format, teams and live streaming details",
    description:
      "IML 2025: Full schedule, format, teams and live streaming details",
    image: "/article/article-6.jpg",
    link: "https://www.business-standard.com/cricket/news/iml-2025-full-schedule-format-teams-and-live-streaming-details-125012901306_1.html",
  },
  {
    id: 7,
    title:
      "uvraj, Duminy & Tharanga Join IML 2025 Roster",
    description:
      "International Masters League 2025: Yuvraj Singh, JP Duminy & Upul Tharanga to Play in Inaugural Edition of IML",
    image: "/article/article-7.webp",
    link: "https://www.mykhel.com/cricket/international-masters-league-2025-yuvraj-singh-jp-duminy-upul-tharanga-to-play-in-inaugural-iml-338035.html",
  },
  {
    id: 8,
    title:
      "15-Man Australia Masters Squad Named; Watson to Captain",
    description:
      "Australia Masters announce 15-member squad for International Masters League 2025; Shane Watson named captain",
    image: "/article/article-8.webp",
    link: "https://www.sportstiger.com/news/australia-masters-announce-15-member-squad-for-international-masters-league-2025-shane-watson-named-captain",
  },
];

export function ArticleSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Calculate total width for horizontal scroll
    const sections = gsap.utils.toArray<HTMLElement>(".article-card");
    const totalWidth = sections.reduce(
      (acc, section) => acc + section.offsetWidth + 40, // Added gap
      0
    );

    // Create the horizontal scroll animation
    const horizontalScroll = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${totalWidth - window.innerWidth}`,
        pin: true,
        anticipatePin: 1,
        scrub: 1.5,
        invalidateOnRefresh: true,
      },
    });

    // Add horizontal movement
    horizontalScroll.to(sections, {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
    });

    // Cleanup
    return () => {
      horizontalScroll.kill();
    };
  }, []);

  return (
    <section className="relative bg-background overflow-hidden pt-12">
      {/* Scrolling Heading */}
      <ScrollBasedVelocityDemo />

      {/* Articles Container */}
      <div ref={containerRef} className="relative min-h-screen  border-t border-dashed border-border">
        <div className="flex pl-[8vw]">
          {" "}
          {/* Added left padding to fix starting position */}
          {articles.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="article-card relative w-[120vw] h-[100vh] shrink-0 pr-[10vw] "
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.5 }}
            >
              <div className=" w-full h-full grid grid-cols-2 gap-16 items-center">
                {/* Content */}
                <motion.div
                  className="space-y-8 relative h-full flex flex-col justify-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h3
                    className="text-[4vw] font-bold leading-none uppercase text-foreground/95 tracking-normal"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {article.title}
                  </motion.h3>
                  <motion.p
                    className="text-[1.5vw] text-foreground/90 font-light"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {article.description}
                  </motion.p>

                  {/* Arrow Icon */}
                  <motion.div
                    className="inline-flex items-center gap-2 text-primary pt-16 ml-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.div
                      className="relative group bg-foreground/5 hover:bg-foreground/10 border border-border/80 hover:border-border rounded-full transition-colors duration-300 group-hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <motion.div
                        className=" text-foreground p-4 flex items-center justify-center"
                        whileHover={{ x: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <ArrowRightIcon className="w-12 h-12 -rotate-45 hover:rotate-0 transition-transform duration-300" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Image Container */}
                <motion.div
                  className="relative h-[80%] w-full rounded-xl overflow-hidden"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-contain h-full"
                    priority
                  />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
