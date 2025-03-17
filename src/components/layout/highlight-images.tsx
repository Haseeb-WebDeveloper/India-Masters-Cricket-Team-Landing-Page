/* eslint-disable @next/next/no-img-element */
import { BlurFade } from "@/components/magicui/blur-grid";

interface HighlightItem {
  id: number;
  title: string;
  url: string;
  type: "image" | "video";
}

interface HighlightImagesProps {
  highlightItems: HighlightItem[];
}

export function HighlightImages({ highlightItems }: HighlightImagesProps) {
  return (
    <section id="photos" className="container mx-auto py-32 pb-36 ">
      <div className="flex justify-start items-center">
        <h1 className="text-pretty text-[2.5rem] lg:text-[5rem] uppercase font-bold">
          Highlight Images
        </h1>
      </div>
      <div className="columns-2 gap-4 sm:columns-3">
        {highlightItems.map((item) => (
          <img
            key={item.id}
            className="mb-4 size-full rounded-lg object-contain"
            src={item.url}
            alt={item.title}
          />
        ))}
      </div>
    </section>
  );
}
