"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

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
      "IPL 2025: With Hardik Pandya ineligible to lead MI in opening match vs CSK. Will Rohit Sharma return as skipper?",
    description:
      "Discover how modern cricket has transformed from a traditional game to a dynamic sport with innovative strategies and techniques.",
    image: "/article/article-1.avif",
    link: "https://www.livemint.com/sports/cricket-news/international-masters-league-2025-sachin-tendulkars-india-face-kumar-sangakkaras-sri-lanka-in-opener-check-details-11738231372858.html",
  },
  {
    id: 2,
    title: "Inaugural Season Of International Masters League To Be Played From February 22 To March 16",
    description:
      "How technology and data analytics are revolutionizing cricket training and player development.",
    image: "/article/article-1.avif",
    link: "https://theprint.in/ani-press-releases/australia-masters-unveil-squad-for-international-masters-league-shane-watson-to-lead/2489393/",
  },
  {
    id: 3,
    title:
      "Inaugural Season Of International Masters League To Be Played From February 22 To March 16",
    description:
      "How technology and data analytics are revolutionizing cricket training and player development.",
    image: "/article/article-1.avif",
    link: "https://sports.ndtv.com/cricket/inaugural-season-of-international-masters-league-to-be-played-from-february-22-to-march-16-7489469",
  },
  {
    id: 4,
    title: "Yuvraj to represent India Masters in International Masters League",
    description:
      "How technology and data analytics are revolutionizing cricket training and player development.",
    image: "/article/article-1.avif",
    link: "/articles/digital-training",
  },
  {
    id: 5,
    title:
      "International Masters League: Tendulkar, Sangakkara to meet in opening match - fixtures, cities, live streaming",
    description:
      "How technology and data analytics are revolutionizing cricket training and player development.",
    image: "/article/article-1.avif",
    link: "/articles/digital-training",
  },
  {
    id: 6,
    title: "IML 2025: Full schedule, format, teams and live streaming details",
    description:
      "How technology and data analytics are revolutionizing cricket training and player development.",
    image: "/article/article-1.avif",
    link: "/articles/digital-training",
  },
  {
    id: 7,
    title:
      "International Masters League 2025: Yuvraj Singh, JP Duminy & Upul Tharanga to Play in Inaugural Edition of IML",
    description:
      "How technology and data analytics are revolutionizing cricket training and player development.",
    image: "/article/article-1.avif",
    link: "https://www.mykhel.com/cricket/international-masters-league-2025-yuvraj-singh-jp-duminy-upul-tharanga-to-play-in-inaugural-iml-338035.html",
  },
  {
    id: 8,
    title:
      "Australia Masters announce 15-member squad for International Masters League 2025; Shane Watson named captain",
    description:
      "How technology and data analytics are revolutionizing cricket training and player development.",
    image: "/article/article-1.avif",
    link: "https://www.google.com/url?q=https://www.sportstiger.com/news/australia-masters-announce-15-member-squad-for-international-masters-league-2025-shane-watson-named-captain&sa=D&source=docs&ust=1739735337862536&usg=AOvVaw2-9p0oMWbKgJjTFhc-Pbsx",
  },
  // Add more articles...
];

export function ArticleSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });

  // Smoother heading animation
  const headingX = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    ["0%", "-25%", "-75%", "-100%"]
  );

  useEffect(() => {
    const container = containerRef.current;
    const heading = headingRef.current;
    if (!container || !heading) return;

    // Create a separate ScrollTrigger for the heading
    const headingTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      toggleClass: { targets: heading, className: "is-visible" },
    });

    // Calculate total width for horizontal scroll
    const sections = gsap.utils.toArray<HTMLElement>(".article-card");
    const totalWidth = sections.reduce(
      (acc, section) => acc + section.offsetWidth,
      0
    );

    // Create the horizontal scroll animation
    const horizontalScroll = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${totalWidth}`,
        pin: true,
        anticipatePin: 1,
        scrub: 2,
        invalidateOnRefresh: true,
      },
    });

    // Add horizontal movement with adjusted starting position
    horizontalScroll.to(sections, {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
    });

    // Cleanup
    return () => {
      headingTrigger.kill();
      horizontalScroll.kill();
    };
  }, []);

  return (
    <section className="relative bg-background overflow-hidden pb-20 pt-8">
      {/* Improved Scrolling Heading */}
      <motion.div
        ref={headingRef}
        className="sticky top-0 z-10 p-6  overflow-hidden"
      >
        <div className="relative w-[200%]">
          <motion.div
            className="whitespace-nowrap text-[10vw] font-bold text-foreground/90 tracking-tighter"
            style={{ x: headingX }}
          >
            <span className="inline-block mr-8">
             Media centre ❁ 𝕄𝕖𝕕𝕚𝕒 ℂ𝕖𝕟𝕥𝕣𝕖 ❁  Media centre  ❁ 𝕄𝕖𝕕𝕚𝕒 ℂ𝕖𝕟𝕥𝕣 •&nbsp;
            </span>
            <span className="inline-block">
             Media centre ❁ 𝕄𝕖𝕕𝕚𝕒 ℂ𝕖𝕟𝕥𝕣𝕖 ❁  Media centre  ❁ 𝕄𝕖𝕕𝕚𝕒 ℂ𝕖𝕟𝕥𝕣 •&nbsp;
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Articles Container */}
      <div ref={containerRef} className="relative min-h-screen">
        <div className="flex px-10">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className="article-card relative w-[100vw] h-[100vh] shrink-0 py-10 pr-[4vw]"
            >
              <div className="w-full h-full grid grid-cols-2 items-center gap-24 bg-foreground/5 px-16 rounded-2xl border border-border">
                {/* Content */}
                <motion.div
                  className="h-full flex flex-col justify-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {/* Title with animated line */}
                  <div className="overflow-hidden mb-6">
                    <motion.h3
                      className="text-4xl font-bold leading-tight"
                      initial={{ y: 100 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1 + 0.2,
                        ease: [0.25, 1, 0.5, 1],
                      }}
                    >
                      {article.title}
                    </motion.h3>
                  </div>

                  {/* Enhanced Read More Button */}
                  <motion.button
                    className="group flex items-center gap-3 text-lg font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    <span className="relative">
                      Read Article
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </motion.button>
                </motion.div>

                {/* Image Container */}
                <motion.div
                  className="rounded-2xl overflow-hidden flex items-end justify-center"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.1,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={1000}
                    height={1000}
                    className="object-cover aspect-video"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
