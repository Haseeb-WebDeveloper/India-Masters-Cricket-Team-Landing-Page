"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
  AnimationControls,
} from "framer-motion";

const IMGS = [
  "/partners/1.svg",
  "/partners/3.svg",
  "/partners/2.svg",
  "/partners/2.svg",
  "/partners/3.svg",
  "/partners/1.svg",
  "/partners/1.svg",
  "/partners/2.svg",
  "/partners/3.svg",
] as const;

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const RollingGallery = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}: RollingGalleryProps) => {
  const galleryImages = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 640 : false
  );
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3D geometry
  const cylinderWidth = isScreenSizeSm ? 1100 : 2400;
  const faceCount = galleryImages.length;
  const faceWidth = (cylinderWidth / faceCount) * 0.5;
  const radius = (cylinderWidth / (2 * Math.PI)) * 0.6;

  // Framer Motion
  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  // Convert rotation -> 3D transform
  const transform = useTransform(
    rotation,
    (val: number) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest: { rotateY?: number }) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_: never, info: PanInfo) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: never, info: PanInfo) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);

    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-foreground/5 md:py-28 pt-24 pb-12">
      <div className="max-w-[1550px] mx-auto h-full px-2  md:px-12">
        <div className="flex flex-col lg:flex-row items-center ">
          {/* Left side content */}
          <div className="md:w-[50%] w-full flex flex-col justify-center">
            <div>
              <h2 className="text-[2rem] md:text-[4rem] text-center md:text-left font-custom font-medium uppercase leading-tight">
                Our Broadcast Partners
              </h2>
            </div>
          </div>

          {/* Right side - Logo Gallery */}
          <div className="md:w-[50%] w-full min-h-[150px]">
            <div className="flex h-full items-center justify-center [perspective:2000px] [transform-style:preserve-3d]">
              <motion.div
                drag="x"
                dragElastic={0}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                animate={controls}
                onUpdate={handleUpdate}
                style={{
                  transform: transform,
                  rotateY: rotation,
                  width: cylinderWidth,
                  transformStyle: "preserve-3d",
                }}
                className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
              >
                {galleryImages.map((url, i) => (
                  <div
                    key={i}
                    className="group absolute flex h-fit items-center justify-center  [backface-visibility:hidden] "
                    style={{
                      width: `${faceWidth}px`,
                      transform: `rotateY(${
                        (360 / faceCount) * i
                      }deg) translateZ(${radius}px)`,
                    }}
                  >
                    <img
                      src={url}
                      alt="gallery"
                      className="pointer-events-none h-[120px] w-[200px] rounded-[15px] object-contain
                               transition-transform duration-300 ease-out group-hover:scale-105
                               sm:h-[140px] sm:w-[240px]"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RollingGallery;
