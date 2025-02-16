"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { cn } from "@/lib/utils";
import { motion, useMotionValue } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Draggable);
}

type TeamMember = {
  id: number;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
};

const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Abhimanyu Mithun",
      role: "Fast Bowler",
      description: "A skilled right-arm fast bowler known for his consistent line and length, bringing valuable pace options to the team.",
      imageUrl: "/team/Abhimanyu-Mithun/long.jpg",
    },
    {
      id: 2,
      name: "Ambati Rayadu",
      role: "Middle-order Batsman",
      description: "A versatile batsman with excellent technique and ability to anchor innings, particularly strong against spin bowling.",
      imageUrl: "/team/Ambati-Rayadu/long.jpg",
    },
    {
      id: 3,
      name: "Dhawal Sunil Kulkarni",
      role: "Fast Bowler",
      description: "An experienced pace bowler with the ability to swing the ball both ways and excel in death overs.",
      imageUrl: "/team/Dhawal-Sunil-Kulkarni/long.webp",
    },
    {
      id: 4,
      name: "Gurkeerat Singh Mann",
      role: "All-rounder",
      description: "A dynamic all-rounder who contributes with both bat and ball, known for his aggressive batting style and useful off-spin.",
      imageUrl: "/team/Gurkeerat-Singh-Mann/long.png",
    },
    {
      id: 5,
      name: "Irfan Pathan",
      role: "All-rounder",
      description: "A talented left-arm swing bowler and capable lower-order batsman, bringing balance to the team with his all-round abilities.",
      imageUrl: "/team/Irfan-Pathan/long.jpg",
    },
    {
      id: 6,
      name: "Naman Vinaykumar Ojha",
      role: "Wicketkeeper-Batsman",
      description: "A skilled wicketkeeper with quick reflexes and a reliable batsman who can accelerate when needed.",
      imageUrl: "/team/Naman-Vinaykumar-Ojha/long.webp",
    },
    {
      id: 7,
      name: "Pawan Negi",
      role: "All-rounder",
      description: "A left-arm spinner and lower-order batsman known for his ability to provide crucial breakthroughs and quick runs.",
      imageUrl: "/team/Pawan-Negi/long.png",
    },
    {
      id: 8,
      name: "Rahul Sharma",
      role: "Spin Bowler",
      description: "A tall leg-spinner who generates good bounce and turn, troubling batsmen with his variations and accuracy.",
      imageUrl: "/team/Rahul-Sharma/long.webp",
    },
    {
      id: 9,
      name: "Ranganath Vinay Kumar",
      role: "Fast Bowler",
      description: "A medium-pace bowler with excellent control and variety, particularly effective in domestic cricket.",
      imageUrl: "/team/Ranganath-Vinay-Kumar/long.webp",
    },
    {
      id: 10,
      name: "Sachin Ramesh Tendulkar",
      role: "Top-order Batsman",
      description: "The 'Master Blaster' - legendary batsman with numerous records, known for his perfect technique and match-winning abilities.",
      imageUrl: "/team/Sachin-Ramesh-Tendulkar/long.jpg",
    },
    {
      id: 11,
      name: "Shahbaz Nadeem",
      role: "Spin Bowler",
      description: "A crafty left-arm spinner known for his economy and ability to take crucial wickets in middle overs.",
      imageUrl: "/team/Shahbaz-Nadeem/long.webp",
    },
    {
      id: 12,
      name: "Stuart Terence Roger Binny",
      role: "All-rounder",
      description: "A reliable medium-pace bowling all-rounder who can contribute with both bat and ball in crucial situations.",
      imageUrl: "/team/Stuart-Terence-Roger-Binny/long.jpg",
    },
    {
      id: 13,
      name: "Suresh Raina",
      role: "Middle-order Batsman",
      description: "An aggressive left-handed batsman and excellent fielder, known for his ability to finish games and handle pressure.",
      imageUrl: "/team/Suresh-Raina/long.jpg",
    },
    {
      id: 14,
      name: "Yusuf Pathan",
      role: "All-rounder",
      description: "A hard-hitting batsman and useful off-spinner, capable of changing the game's momentum with his explosive batting.",
      imageUrl: "/team/Yusuf-Pathan/long.jpg",
    },
    {
      id: 15,
      name: "Yuvraj Singh",
      role: "All-rounder",
      description: "A match-winner known for his elegant batting, useful left-arm spin, and exceptional fielding abilities.",
      imageUrl: "/team/Yuvraj-Singh/long.jpg",
    },
  ];

export function OurTeam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Use motion values for smoother cursor movement
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Handle mouse movement for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother cursor updates
      requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorX.set(e.clientX);
          cursorY.set(e.clientY);
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  useEffect(() => {
    const container = containerRef.current;
    const slider = sliderRef.current;

    if (!container || !slider) return;

    let scrollTrigger: ScrollTrigger;
    let draggable: Draggable;

    // Delay the initialization to ensure proper setup
    const initializeAnimations = () => {
      // Pin the section
      scrollTrigger = ScrollTrigger.create({
        trigger: container,
        pin: true,
        start: "top top",
        end: "+=100%",
      });

      // Calculate the exact bounds for the slider
      const totalWidth = slider.scrollWidth;
      const containerWidth = container.clientWidth;
      const sliderPadding = parseInt(
        window.getComputedStyle(slider).paddingLeft
      );
      const exactBounds = {
        minX: -(totalWidth - containerWidth),
        maxX: 0,
      };

      // Make the slider draggable with enhanced smoothness
      draggable = Draggable.create(slider, {
        type: "x",
        inertia: true,
        bounds: exactBounds,
        edgeResistance: 0.85,
        dragResistance: 0.2,
        onDragStart: () => setIsDragging(true),
        onDragEnd: () => {
          setIsDragging(false);
          // Ensure bounds are respected after inertia
          if (draggable) {
            const currentX = draggable.x;
            if (currentX < exactBounds.minX) {
              gsap.to(slider, {
                x: exactBounds.minX,
                duration: 0.5,
                ease: "power2.out",
              });
            } else if (currentX > exactBounds.maxX) {
              gsap.to(slider, {
                x: exactBounds.maxX,
                duration: 0.5,
                ease: "power2.out",
              });
            }
          }
        },
        onDrag: function () {
          gsap.to(slider, {
            x: this.x,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
          });
        },
      })[0];

      // Initial position check
      const currentX = draggable.x;
      if (currentX < exactBounds.minX || currentX > exactBounds.maxX) {
        gsap.set(slider, {
          x: Math.max(exactBounds.minX, Math.min(exactBounds.maxX, currentX)),
        });
      }
    };

    // Delay initialization to prevent glitches
    const timer = setTimeout(initializeAnimations, 100);

    return () => {
      clearTimeout(timer);
      if (scrollTrigger) scrollTrigger.kill();
      if (draggable) draggable.kill();
    };
  }, []);

  return (
    <section
      id="team"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-background cursor-none"
    >
      {/* Custom Cursor - Increased z-index and made it fixed */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          position: "fixed", // Ensure it stays fixed
        }}
        animate={{
          scale: isDragging ? 1.5 : 1,
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 300,
            damping: 30,
          },
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          {/* Main cursor */}
          <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-sm">
            <span className="text-black text-xs font-medium select-none">
              {isDragging ? "DRAGGING" : "DRAG"}
            </span>
          </div>

          {/* Circular text */}
          <div className="absolute inset-0 animate-spin-slow select-none">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path
                id="curve"
                d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
                fill="transparent"
              />
              <text className="text-[12px]">
                <textPath href="#curve" className="tracking-wider">
                  • SCROLL • EXPLORE • DISCOVER •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </motion.div>

      <div className="absolute inset-0 flex items-center">
        <div
          ref={sliderRef}
          className="flex gap-4 cursor-none px-[max(2rem,calc((100vw-1500px)/2))]"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className={cn(
                "relative h-[95vh] transition-all duration-700 ease-out border border-border rounded-xl",
                activeIndex === index ? "w-[500px]" : "w-[250px]"
              )}
              onMouseEnter={() => !isDragging && setActiveIndex(index)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="relative h-full w-full overflow-hidden rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Image with Parallax */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.imageUrl})` }}
                  animate={{
                    scale: activeIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.7 }}
                />

                {/* Dynamic Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 transition-opacity duration-700"
                  animate={{
                    opacity: activeIndex === index ? 0 : 1,
                  }}
                >
                  {/* Inactive state gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-blue-600/40 to-black/80" />
                </motion.div>

                {/* Active state overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.7 }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  {/* Number */}
                  <span
                    className={cn(
                      "text-8xl font-bold transition-colors duration-700",
                      activeIndex === index ? "text-white/20" : "text-white/40"
                    )}
                  >
                    {String(member.id).padStart(2, "0")}
                  </span>

                  {/* Member Info - Only visible when active */}
                  <div
                    className={cn(
                      "transform transition-all duration-700",
                      activeIndex === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    )}
                  >
                    <h3 className="mt-4 text-2xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-lg text-white/80">{member.role}</p>
                    <p className="mt-2 text-sm text-white/60 max-w-[400px]">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section Title */}
      {/* <div className="absolute left-[10vw] top-12 z-10">
        <h2 className="text-4xl font-bold text-foreground">Our Team</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Meet the champions who make it all possible
        </p>
      </div> */}
    </section>
  );
}
