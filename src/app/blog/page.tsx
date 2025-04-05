'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

// Mock data with more fields
const posts = [
  {
    id: 1,
    title: "A Tale of Friendship, Support, and Cricketing Triumphs of Rohit Sharma and Yuvraj Singh",
    description: "How Yuvraj&apos;s simple gesture helped Rohit bounce back stronger than ever — a heartwarming story of friendship and second chances.",
    date: "2024-03-20",
    slug: "rohit-sharma-yuvi-friendship",
    image: "/blog/rohit-sharma-yuvi-friendship.png",
    category: "Player Stories",
    // readTime: "5 min read",
    author: {
      name: "Rahul Sharma",
      avatar: "/authors/rahul.jpg"
    }
  },
  {
    id: 2,
    title: "The Master Blaster's Big Comeback: Sachin's IML 2025 Saga",
    description: "Sachin&apos;s back at 51 — leading India Masters to glory in IML 2025. The legend just keeps getting better with age!",
    date: "2024-04-04",
    slug: "sachin-iml-2025",
    image: "/blog/sachin-iml-2025.jpg",
    category: "Player Stories",
    // readTime: "4 min read",
    author: {
      name: "Priya Patel",
      avatar: "/authors/priya.jpg"
    }
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-r from-blue-600 to-purple-600">
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

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <motion.div key={post.id} variants={item}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="group overflow-hidden bg-foreground/10">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium">{post.category}</span>
                    </div>
                  </div>
                  <CardHeader>
                    {/* <div className="flex items-center gap-2 mb-2">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span className="text-sm text-muted-foreground">{post.author.name}</span>
                    </div> */}
                    <CardTitle className="text-xl line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-2 mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}</span>
                      {/* <span>{post.readTime}</span> */}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 