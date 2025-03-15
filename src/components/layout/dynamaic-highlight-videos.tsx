"use client"

import { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const videoItems = [
  {
    id: 1,
    title: "Video 1",
    url: "https://cdn.pixabay.com/video/2024/07/24/222837_large.mp4",
   className: "min-h-[480px] w-full" 
},
  {
    id: 2,
    title: "Video 2",
    url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
   className: "min-h-[380px] w-full" 
},
  {
    id: 3,
    title: "Video 3",
    url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
   className: "min-h-[480px] w-full" 
},
  {
    id: 4,
    title: "Video 3",
    url: "https://cdn.pixabay.com/video/2024/07/24/222837_large.mp4",
   className: "min-h-[380px] w-full" 
},
  {
    id: 5,
    title: "Video 3",
    url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
   className: "min-h-[480px] w-full" 
},
  {
    id: 6,
    title: "Video 3",
    url: "https://cdn.pixabay.com/video/2024/07/24/222837_large.mp4",
   className: "min-h-[380px] w-full" 
},
  {
    id: 7,
    title: "Video 3",
    url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
   className: "min-h-[480px] w-full" 
},
];

export function DynamicHighlightVideos() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
  <section className="bg-foreground/5 ">
      <div className="py-24 w-full container mx-auto">
      <h2 className="text-[2.5rem] md:text-[6rem] lg:text-[5rem] font-bold text-center uppercase tracking-tight max-w-5xl mx-auto leading-tight md:leading-[6rem] mb-8">Highlight Videos</h2>
      <ScrollArea className="w-full h-full">
        <div className="flex gap-8 mb-4 items-center justify-center">
          {videoItems.map((video) => (
            <div key={video.id} className={`aspect-video w-full cursor-pointer ${video.className}`}>
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