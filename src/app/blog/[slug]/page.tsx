'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import { fetchPostBySlug, urlForImage } from '@/lib/sanity/client'
import type { Post } from '@/lib/sanity/client'
import { PortableText } from '@portabletext/react'

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      const postData = await fetchPostBySlug(slug)
      setPost(postData)
      setLoading(false)
    }
    loadPost()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-background md:pt-52 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-foreground/10 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-foreground/10 rounded w-1/4 mb-8"></div>
            <div className="aspect-video bg-foreground/10 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-foreground/10 rounded w-full"></div>
              <div className="h-4 bg-foreground/10 rounded w-full"></div>
              <div className="h-4 bg-foreground/10 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl">Post not found</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-32 md:py-48 border-b border-foreground/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Navigation */}
          <Link 
            href="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="bg-white/90 dark:bg-gray-900/90 px-3 py-1 rounded-full">
                <span className="text-sm font-medium">{post.category}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={urlForImage(post.imageUrl).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none prose-a:underline prose-p:text-foreground/95 prose-p:text-xl prose-p:leading-relaxed "
          >
              <PortableText value={post.content} />
          </motion.div>
        </div>
      </div>
    </div>
  )
} 