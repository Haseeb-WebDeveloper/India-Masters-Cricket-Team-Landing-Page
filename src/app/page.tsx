import { HeroSection } from "@/components/layout/hero-section";
import { OurTeam } from "@/components/layout/our-team";
import { ArticleSection } from "@/components/layout/artical-section";
import { RankingSection } from "@/components/layout/ranking-section";
import { RankingTable } from "@/components/layout/ranking-table";
import { ScheduleSection } from "@/components/layout/schedule-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurTeam />
      <ScheduleSection />
      <ArticleSection />
      <RankingSection />
      <RankingTable />
      <ScheduleSection />
    </>
  );
}
