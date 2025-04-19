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
import { fetchFeaturedPosts, fetchImageGallery } from "@/lib/sanity/client";
import ScrollHandler from "@/components/scroll-handling";
import { ImageGallery } from "@/components/layout/image-gallery";
import ClientWrapper from '@/components/client-wrapper';
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";




// Make the page async
export default async function Home() {
  const posts = await fetchFeaturedPosts();

  return (
    <ClientWrapper>
      <main className="fade-in">
        <Header />
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
        <ImageGallery />
        <BlogSection posts={posts} />
        <ArticleSection />
        <ContactSection />
        <Footer />
      </main>
    </ClientWrapper>
  );
}
