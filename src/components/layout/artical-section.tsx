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
    title: "Watson to Lead Australia in Masters League 2025",
    description:
      "Inaugural Season Of International Masters League To Be Played From February 22 To March 16",
    image: "/article/article-2.jpeg",
    link: "https://theprint.in/ani-press-releases/australia-masters-unveil-squad-for-international-masters-league-shane-watson-to-lead/",
  },
  {
    id: 3,
    title: "International Masters League Set for Feb 22 - Mar 16",
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
    title: "IML 2025: Tendulkar vs Sangakkara in Opener - Full Details",
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
    title: "Duminy & Tharanga Join IML 2025 Roster",
    description:
      "International Masters League 2025: Yuvraj Singh, JP Duminy & Upul Tharanga to Play in Inaugural Edition of IML",
    image: "/article/article-7.webp",
    link: "https://www.mykhel.com/cricket/international-masters-league-2025-yuvraj-singh-jp-duminy-upul-tharanga-to-play-in-inaugural-iml-338035.html",
  },
  {
    id: 8,
    title: "15-Man Australia Masters Squad Named; Watson to Captain",
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
    if (!container || window.innerWidth < 768) return; // Don't initialize on mobile

    // Calculate total width for horizontal scroll
    const sections = gsap.utils.toArray<HTMLElement>(".article-card");
    const totalWidth = sections.reduce(
      (acc, section) => acc + section.offsetWidth + 40,
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
    <section
      id="media"
      className="relative bg-background overflow-hidden pt-12"
    >
      {/* Scrolling Heading */}
      <ScrollBasedVelocityDemo />

      {/* Desktop Articles Container */}
      <div className="hidden md:block">
        <div
          ref={containerRef}
          className="relative min-h-screen border-t border-dashed border-border"
        >
          <div className="flex pl-[8rem]">
            {articles.map((article, index) => (
              <DesktopArticleCard
                key={article.id}
                article={article}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Articles Container */}
      <div className="md:hidden border-t border-dashed border-border">
        <div className="flex flex-col gap-8 py-12 px-4">
          {articles.map((article, index) => (
            <MobileArticleCard
              key={article.id}
              article={article}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DesktopArticleCard({
  article,
  index,
}: {
  article: any;
  index: number;
}) {
  return (
    <motion.a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="article-card relative w-[120vw] h-[100vh] shrink-0 pr-[10vw]"
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-full grid grid-cols-2 gap-16 items-center">
        <motion.div
          className="space-y-8 relative h-full flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-6xl font-display"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {article.title}
          </motion.h3>
          <motion.p
            className="text-lg text-foreground/60 max-w-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {article.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    </motion.a>
  );
}

function MobileArticleCard({
  article,
  index,
}: {
  article: any;
  index: number;
}) {
  return (
    <motion.a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl overflow-hidden bg-foreground/5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 0.98 }}
    >
      <div className="relative aspect-video">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-display">{article.title}</h3>
        <p className="text-sm text-foreground/60 line-clamp-3">
          {article.description}
        </p>
        <div className="pt-2">
          <span className="text-sm text-primary hover:text-primary/80 transition-colors">
            Read More →
          </span>
        </div>
      </div>
    </motion.a>
  );
}
