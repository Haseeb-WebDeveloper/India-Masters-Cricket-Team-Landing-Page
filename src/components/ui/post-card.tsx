import { Post, urlForImage } from "@/lib/sanity/client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function PostCard({ post }: { post: Post }) {

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      };

  return (
    <motion.div key={post._id} variants={item}>
    <Link href={`/blog/${post.slug}`}>
      <Card className="group overflow-hidden bg-card hover:bg-card/80 transition-colors">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={urlForImage(post.imageUrl).url()}
            alt={post.title}
            width={500}
            height={500}
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
  )
}