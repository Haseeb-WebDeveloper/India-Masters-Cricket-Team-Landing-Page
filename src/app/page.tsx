import { HeroSection } from "@/components/layout/hero-section";
import { OurTeam } from "@/components/layout/our-team";
import { ArticleSection } from "@/components/layout/artical-section";
import { RankingSection } from "@/components/layout/ranking-section";
import { ScheduleSection } from "@/components/layout/schedule-section";
import { Logos3 } from "@/components/logos3"
import RollingGallery from "@/components/layout/logo-gallery";
import { Marquee } from "@/components/magicui/marquee";
import StorySection from "@/components/layout/story-section";
import { ContactSection } from "@/components/layout/contact-section";


const demoData = {
  heading: "Our Sponsers",
  logos: [
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
};


export default function Home() {
  return (
    <>
      <HeroSection />
      <RollingGallery autoplay={true} pauseOnHover={true} />
      <OurTeam />
      <ScheduleSection />
      <RankingSection />
      <Logos3 {...demoData} />
      <StorySection />
      <ArticleSection />
      <ContactSection />
    </>
  );
}
