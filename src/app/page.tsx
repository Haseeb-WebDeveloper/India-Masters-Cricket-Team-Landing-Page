'use client'

import { HeroSection } from "@/components/layout/hero-section";
import { OurTeam } from "@/components/layout/our-team";
import { ArticleSection } from "@/components/layout/artical-section";
import { RankingSection } from "@/components/layout/ranking-section";
import { ScheduleSection } from "@/components/layout/schedule-section";
import { Logos3 } from "@/components/logos3";
import RollingGallery from "@/components/layout/logo-gallery";
import { Marquee } from "@/components/magicui/marquee";
import StorySection from "@/components/layout/story-section";
import { ContactSection } from "@/components/layout/contact-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HighlightImages } from "@/components/layout/highlight-images";
import { DynamicHighlightVideos } from "@/components/layout/dynamaic-highlight-videos";
import { useState } from "react";

const demoData = {
  heading: "Our Sponsors",
  logos: [
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
};

export default function Home() {
  const [highlightItems, setHighlightItems] = useState([
    { id: 1, title: "Sample Image", url: "https://picsum.photos/200", type: "image" },
    { id: 2, title: "Sample Video", url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4", type: "video" },
  ]);

  return (
    <>
      <Header />
      <HeroSection />
      <RollingGallery autoplay={true} pauseOnHover={true} />
      <OurTeam />
      <ScheduleSection />
      <RankingSection />
      <Logos3 {...demoData} />
      {/* <DynamicHighlightVideos highlightItems={highlightItems.filter(item => item.type === "video")} />
      <HighlightImages highlightItems={highlightItems.filter(item => item.type === "image")} /> */}
      <StorySection />
      <ArticleSection />
      <ContactSection />
      <Footer />
    </>
  );
}
