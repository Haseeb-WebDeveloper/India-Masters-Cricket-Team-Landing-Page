'use client'

import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export default function Content({ post }: { post: any }) {
  return (
    <>
      {/* Article Content */}
      <div
        className="prose prose-lg dark:prose-invert max-w-none prose-a:underline prose-p:text-foreground/95 prose-p:text-xl prose-p:leading-relaxed "
      >
        <PortableText
          value={post.content}
          components={{
            types: {
              image: ({ value }: any) => (
                <img
                  src={value.asset.url}
                  alt={value.alt || ''}
                  className="my-[0.5vw] rounded-lg shadow-md object-cover w-full h-auto aspect-video object-center"
                />
                // <Image
                //   src={value.asset.url}
                //   alt={value.alt || ''}
                //   width={800}
                //   height={500}
                //   className="my-[0.5vw] rounded-lg shadow-md object-cover w-full h-auto aspect-video object-center"
                //   priority
                //   placeholder="blur"
                //   blurDataURL={value.asset.url}
                // />
              )
            }
          }}
        />
      </div>
    </>
  );
}