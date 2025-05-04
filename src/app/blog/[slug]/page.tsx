import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import { fetchPostBySlug, fetchPosts, urlForImage } from '@/lib/sanity/client'
import type { Post } from '@/lib/sanity/client'
import { PortableText } from '@portabletext/react'
import Content from '@/components/blog/content'

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await fetchPostBySlug(slug)

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
              width={500}
              height={500}
              priority
              className="object-cover w-full h-full"
            />
          </div>

          <Content post={post} />
        </div>
      </div>
    </div>
  )
} 


export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((post) => ({ slug: post.slug }));
}