'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from '@/lib/sanity/client';
import type { Post } from '@/lib/sanity/client';
import PostCard from '@/components/ui/post-card';

const POSTS_PER_PAGE = 10;

interface BlogListProps {
  initialPosts: Post[];
  totalPosts: number;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function BlogList({ initialPosts, totalPosts }: BlogListProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMorePosts = async () => {
    try {
      setLoading(true);
      const start = page * POSTS_PER_PAGE;
      const end = start + POSTS_PER_PAGE;
      
      const response = await fetch(`/api/posts?start=${start}&end=${end}`);
      const data = await response.json();
      
      if (data.posts.length > 0) {
        setPosts(prevPosts => [...prevPosts, ...data.posts]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      console.error("Error loading more posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {posts.map((post) => (
          <motion.div key={post._id} variants={item}>
            <PostCard post={post} />
          </motion.div>
        ))}
      </motion.div>

      {posts.length < totalPosts && (
        <div className="text-center mt-12">
          <Button
            onClick={loadMorePosts}
            disabled={loading}
            className="px-6 py-3 rounded-full"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Loading...
              </div>
            ) : (
              'Load More Posts'
            )}
          </Button>
        </div>
      )}
    </div>
  );
} 