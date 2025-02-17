import { HeroSection } from "@/components/layout/hero-section";
import { OurTeam } from "@/components/layout/our-team";
import { ArticleSection } from "@/components/layout/artical-section";
import { RankingSection } from "@/components/layout/ranking-section";
export default function Home() {
  return (
    <>
      <HeroSection />
      <OurTeam />
      <ArticleSection />
      <RankingSection />
    </>
  );
}
