"use client";

import { useEffect, useRef, useState } from "react";
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
    title: "Training in the Digital Age",
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
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });

  // Smoother heading animation
  const headingX = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    ["0%", "-25%", "-75%", "-100%"]
  );

  // Handle cursor movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const heading = headingRef.current;
    if (!container || !heading) return;

    // Auto-scrolling animation for heading
    gsap.to(heading.querySelector(".scroll-text"), {
      xPercent: -50,
      duration: 20,
      repeat: -1,
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 100),
      },
    });

    // ScrollTrigger for heading speed control
    const headingTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const speed = self.getVelocity() * 0.006;
        const direction = self.direction;
        gsap.to(heading.querySelector(".scroll-text"), {
          timeScale: direction * (1 + Math.min(Math.abs(speed), 5)),
          duration: 0.5,
        });
      },
    });

    // Calculate total width for horizontal scroll
    const totalWidth = container.scrollWidth;
    const windowWidth = window.innerWidth;
    const sections = gsap.utils.toArray<HTMLElement>(".article-card");
    const duration = 0.5 * sections.length; // Adjust this value to control scroll speed

    // Create the horizontal scroll animation
    const horizontalScroll = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${totalWidth - windowWidth}`,
        pin: true,
        anticipatePin: 1,
        scrub: 2,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Prevent any potential conflicts with the heading animation
          if (headingTrigger) {
            headingTrigger.refresh();
          }
        },
      },
    });

    // Add horizontal movement
    horizontalScroll.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      duration: duration,
    });

    // Cleanup
    return () => {
      headingTrigger.kill();
      horizontalScroll.kill();
    };
  }, []);

  return (
    <section
      className="relative bg-background overflow-hidden py-20 cursor-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-primary pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: cursorPosition.x - 16,
          y: cursorPosition.y - 16,
          scale: isHovering ? 1 : 0.5,
        }}
        transition={{
          type: "spring",
          damping: 30,
          mass: 0.5,
          stiffness: 400,
        }}
      />

      {/* Improved Scrolling Heading */}
      <motion.div
        ref={headingRef}
        className="sticky top-0 z-10 py-6 overflow-hidden"
      >
        <div className="relative w-[200%]">
          <motion.div
            className="scroll-text whitespace-nowrap text-[10vw] font-bold text-foreground/90 tracking-tighter"
            style={{ x: headingX }}
          >
            <span className="inline-block mr-8">
              LATEST INSIGHTS • CRICKET STORIES • TEAM UPDATES •&nbsp;
            </span>
            <span className="inline-block">
              LATEST INSIGHTS • CRICKET STORIES • TEAM UPDATES •&nbsp;
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Articles Container */}
      <div
        ref={containerRef}
        className="relative min-h-screen max-w-8xl mx-auto"
      >
        <div className="flex items-center justify-center gap-10">
          {articles.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="article-card relative w-screen h-[100vh] shrink-0 py-10"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              whileHover="hover"
            >
              <div className="w-full h-full max-w-8xl mx-auto grid grid-cols-2 items-center justify-between gap-24 bg-foreground/5 px-16 rounded-2xl border border-border">
                <motion.div className="h-full flex flex-col justify-center">
                  <div className="overflow-hidden mb-6">
                    <motion.h3
                      className="text-5xl font-bold leading-tight"
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

                  {/* Improved Read More Icon */}
                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary transform transition-transform duration-300 hover:translate-x-2"
                    >
                      <circle
                        cx="25"
                        cy="25"
                        r="24"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M20 25h15M28 18l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
