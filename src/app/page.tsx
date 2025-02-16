import { HeroSection } from "@/components/layout/hero-section";
import { OurTeam } from "@/components/layout/our-team";
import { ArticleSection } from "@/components/layout/artical-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurTeam />
      <ArticleSection />
      <div className="h-[100vh] bg-red-500"></div>
    </>
  );
}
