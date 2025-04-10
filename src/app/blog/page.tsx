import { Suspense } from 'react';
import BlogList from './blog-list';
import { sanityClient } from '@/lib/sanity/client';
import { allPostsQuery, totalPostsQuery } from '@/lib/sanity/queries';
import BlogSkeleton from './blog-skeleton';

// This function runs at build time
export async function generateStaticParams() {
  const total = await sanityClient.fetch(totalPostsQuery);
  const POSTS_PER_PAGE = 10;
  const pages = Math.ceil(total / POSTS_PER_PAGE);
  
  return Array.from({ length: pages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

// This function runs at build time
async function getInitialPosts() {
  const [posts, total] = await Promise.all([
    sanityClient.fetch(allPostsQuery, { start: 0, end: 10 }),
    sanityClient.fetch(totalPostsQuery)
  ]);

  console.log("posts", posts);
  
  return {
    posts,
    total
  };
}

export default async function BlogPage() {
  const { posts, total } = await getInitialPosts();
  console.log("posts", posts);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative pt-40 md:pt-48 pb-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-[url('/blog/pattern.svg')] opacity-20" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Latest Cricket News & Stories
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Stay updated with the latest news, match reports, and exclusive stories from India Masters
            </p>
          </div>
        </div>
      </div>

        <BlogList initialPosts={posts} totalPosts={total} />
      {/* <Suspense fallback={<BlogSkeleton />}>
      </Suspense> */}
    </div>
  );
} 