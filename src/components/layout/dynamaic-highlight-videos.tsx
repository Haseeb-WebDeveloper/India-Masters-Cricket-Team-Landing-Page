"use client"

import { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface HighlightItem {
  id: number;
  title: string;
  url: string;
  type: "image" | "video";
}

interface DynamicHighlightVideosProps {
  highlightItems: HighlightItem[];
}

export function DynamicHighlightVideos({ highlightItems }: DynamicHighlightVideosProps) {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section className="bg-foreground/5 ">
      <div className="py-24 w-full container mx-auto">
        <h2 className="text-[2.5rem] md:text-[6rem] lg:text-[5rem] font-bold text-center uppercase tracking-tight max-w-5xl mx-auto leading-tight md:leading-[6rem] mb-8">Highlight Videos</h2>
        <ScrollArea className="w-full h-full">
          <div className="flex gap-8 mb-4 items-center justify-center">
            {highlightItems.map((video) => (
              <div key={video.id} className={`aspect-video w-full cursor-pointer`}>
                <video
                  className="w-full h-full object-cover rounded-lg"
                  controls={playingVideo === video.id}
                  onClick={() => setPlayingVideo(video.id)}
                  style={{ aspectRatio: "16/9" }}
                >
                  <source src={video.url} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="w-full bg-foreground/40 rounded-full" />
        </ScrollArea>
      </div>
    </section>
  );
}