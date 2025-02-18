import { Marquee } from "../magicui/marquee";


const demoData = {
  logos: [
    {
      id: "logo-1",
      description: "Astro",
      image: "banner.jpeg",
    },
  ],
};





export default function StorySection() {
  return (
   <section className="bg-foreground/5 pb-24 pt-16 flex justify-center items-center flex-col gap-1">
    <div>
        <h2 className="text-center text-[3.4rem] font-display mb-8 max-w-4xl leading-tight">Classic clips and career-defining highlights of legendary players</h2>
    </div>
     <Marquee 
        className="space-x-0"
        repeat={10}
        pauseOnHover={true}
      >
        {demoData.logos.map((logo) => (
          <div key={logo.id} className="relative flex flex-col items-center justify-center border-border border-2 rounded-lg overflow-hidden hover:[&>div]:opacity-100">
            <img src={logo.image} alt={logo.description} className="h-60 rounded-lg w-auto" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-orange-500/30 opacity-0 transition-opacity duration-300" />
            <h1 className="absolute top-2 left-4 uppercase text-pretty text-white text-2xl font-bold [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]">This is the title so lets see how it looks</h1>
          </div>
        ))}
      </Marquee>
     <Marquee 
        className="space-x-0"
        repeat={10}
        pauseOnHover={true}
        reverse={true}
      >
        {demoData.logos.map((logo) => (
          <div key={logo.id} className="relative flex flex-col items-center justify-center border-border border-2 rounded-lg overflow-hidden hover:[&>div]:opacity-100">
            <img src={logo.image} alt={logo.description} className="h-60 rounded-lg w-auto" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-orange-500/30 opacity-0 transition-opacity duration-300" />
            <h1 className="absolute top-2 left-4 uppercase text-pretty text-white text-2xl font-bold [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]">This is the title so lets see how it looks</h1>
          </div>
        ))}
      </Marquee>
      </section>
  );
}
