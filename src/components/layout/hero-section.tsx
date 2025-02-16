import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative min-h-[200vh] h-full bg-background">
        <Image src="/IM.png" alt="Hero Section" fill className="object-contain object-top absolute inset-0 top-0 left-0" />
    </div>
  );
}

