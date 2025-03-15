/* eslint-disable @next/next/no-img-element */
import { BlurFade } from "@/components/magicui/blur-grid";

const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export function HighlightImages() {
  return (
    <section id="photos" className="container mx-auto py-32 pb-36 ">
        <div className="flex justify-start items-center">
        <h1 className="text-pretty text-[2.5rem] lg:text-[5rem] uppercase font-bold">
            Highlight Images
          </h1>
        </div>
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-4 size-full rounded-lg object-contain"
              src={imageUrl}
              alt={`Random stock image ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
