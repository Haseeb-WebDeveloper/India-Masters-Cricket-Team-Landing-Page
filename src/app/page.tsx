import { HeroSection } from "@/components/layout/hero-section";
import { OurTeam } from "@/components/layout/our-team";
import { ArticleSection } from "@/components/layout/artical-section";
import { RankingSection } from "@/components/layout/ranking-section";
import { ScheduleSection } from "@/components/layout/schedule-section";
import { Logos3 } from "@/components/logos3";
import RollingGallery from "@/components/layout/logo-gallery";
import StorySection from "@/components/layout/story-section";
import { ContactSection } from "@/components/layout/contact-section";
import { Suspense } from "react";
import BlogSection from "@/components/layout/blog-section";
import { fetchFeaturedPosts } from "@/lib/sanity/client";
import ScrollHandler from "@/components/scroll-handling";




// Make the page async
export default async function Home() {
  const posts = await fetchFeaturedPosts();

  return (
    <>
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      <HeroSection />
      <RollingGallery autoplay={true} pauseOnHover={true} />
      <OurTeam />
      <ScheduleSection />
      <RankingSection />
      <Logos3 />
      <StorySection />
      <BlogSection posts={posts} />
      <ArticleSection />
      <ContactSection />
    </>
  );
}
