'use client'

import { PortableText } from '@portabletext/react';

export default function Content({ post }: { post: any }) {
  return (
   <>
     {/* Article Content */}
     <div
     className="prose prose-lg dark:prose-invert max-w-none prose-a:underline prose-p:text-foreground/95 prose-p:text-xl prose-p:leading-relaxed "
   >
       <PortableText value={post.content} />
   </div>
   </>
  );
}