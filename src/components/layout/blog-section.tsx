"use client"

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { urlForImage } from "@/lib/sanity/client";
import type { Post } from "@/lib/sanity/client";

interface BlogSectionProps {
  posts: Post[];
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

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section className="py-20 bg-foreground/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Stories</h2>
          <p className="text-foreground/90 text-lg max-w-2xl mx-auto">
            Stay updated with the latest featured stories from India Masters Cricket Team
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts?.map((post) => (
            <motion.div key={post._id} variants={item}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="group overflow-hidden bg-card hover:bg-card/80 transition-colors">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={urlForImage(post.imageUrl).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium">{post.category}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between gap-2">
                    <p className="text-foreground/95 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-foreground/80">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-background hover:bg-primary/90 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
} 