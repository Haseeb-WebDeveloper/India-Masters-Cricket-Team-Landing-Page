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
  heading: "Our Brodcast Partners",
  logos: [
    {
      id: "logo-1",
      description: "Astro",
      image: "/partners/logo-1.svg",
      className: "h-40 w-auto",
    },
    {
      id: "logo-2",
      description: "Figma",
      image: "/partners/logo-2.svg",
      className: "h-40 w-auto",
    },
    {
      id: "logo-3",
      description: "Next.js",
      image: "/partners/logo-3.svg",
      className: "h-40 w-auto",
    },
    {
      id: "logo-4",
      description: "React",
      image: "/partners/logo-4.svg",
      className: "h-40 w-auto",
    },
    {
      id: "logo-5",
      description: "shadcn/ui",
      image: "/partners/logo-5.svg",
      className: "h-40 w-auto",
    },
    {
      id: "logo-6",
      description: "Supabase",
      image: "/partners/logo-6.svg",
      className: "h-40 w-auto",
    },
  ],
};


export default function Home() {
  return (
    <>
      <HeroSection />
      <RollingGallery autoplay={true} pauseOnHover={true} />
      <OurTeam />
      <StorySection />
      {/* <Logos3 {...demoData} /> */}
      <ScheduleSection />
      <RankingSection />
      <ArticleSection />
      {/* <ContactSection /> */}
    </>
  );
}
