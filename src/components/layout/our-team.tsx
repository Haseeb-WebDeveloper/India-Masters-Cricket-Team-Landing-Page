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
  title: string;
  description: string;
  imageUrl: string;
  details: string;
};

const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Sachin Ramesh Tendulkar",
      title: "The Little Master",
      details: "Age: 51 DOB: 24 April 1973  Batting Style: Right Handed Batsman",
      description: "Sachin Tendulkar is a global icon, a legend whose name resonates with billions.  He's not just a record-breaker; he's a symbol of India's spirit, its unwavering determination, and its enduring love for cricket.  The roar of the crowd, the thundering applause, the outpouring of affection. It wasn't just for the runs he scored, but for the pride he imprints on the nation. Each boundary, each masterful stroke, was a testament to his unwavering dedication and the immense love he returned to his people, forging an unbreakable bond that fueled countless victories and cemented his status as the 'God of Cricket'.",
      imageUrl: "/team/Sachin-Ramesh-Tendulkar/long.jpg",
    },
    {
      id: 2,
      name: "Yuvraj Singh",
      title: "The Pied Piper Of Punjab",
      details: "Age: 43 DOB: 12 December 1981 Batting style: Left Handed Batsman Bowling Style: Slow Left arm Orthodox",
      description: "Yuvraj Singh, a name synonymous with explosive power and breathtaking versatility.  More than just a batsman, he's a force of nature on the field, captivating audiences with his electrifying stroke play and match-winning performances.  His ability to adapt, to shift gears from calm precision to ferocious power hitting, has made him a legend.  But beyond the statistics and the accolades, it's his connection with the crowd that truly sets him apart. Yuvraj Singh is a spectacle, a crowd-puller, a master of his craft, and a beloved figure whose legacy is etched not just in the records, but in the hearts of countless cricket enthusiasts.",
      imageUrl: "/team/Yuvraj-Singh/long.jpg",
    },
    {
      id: 3,
      name: "Irfan Pathan",
      title: "The Blue eyed 'Guddu'",
      details: "Age: 40 DOB: 27 OCTOBER 1984 Batting style: Left Handed Batsman Bowling: Left arm Medium fast",
      description: "Irfan Pathan - The Blue Eyed 'Guddu', a name whispered with awe, a true all-rounder whose skills border on the magical. He's not just a cricketer; he's a magician on the field, weaving spells of breathtaking pace bowling and mesmerizing batting.  A blink of an eye, and you might miss an impossible catch, a searing yorker, or a stroke of pure genius.  His all-around brilliance is captivating. It's the sheer entertainment he delivers, the unpredictability. He's a match-winner, a player whose artistry leaves you breathless and wanting more.",
      imageUrl: "/team/Irfan-Pathan/long.jpg",
    },
    {
      id: 4,
      name: "Ambati Thirupathi Rayudu",
      title: "The Resilient 'Amba'",
      details: "Age: 39  DOB: 23 September 1985 Batting style: Right Handed Batsman",
      description: "Ambati Rayudu, the resilient 'Amba' a strategic brilliance with calculated precision. He's a chess master on the Cricket field, a tactician whose skillful mind orchestrates victories.  His shots are not merely strokes; they're calculated moves, part of a larger strategy to outwit the opposition.  He's a thinker, a planner, a master.  He doesn't just play the game; he manipulates it, using his intelligence and skill to turn matches on their head.  It's about precision, control and calculated aggression. He's a strategist whose presence commands attention and whose calm decision-making often decides the fate of the match.",
      imageUrl: "/team/Ambati-Rayadu/long.jpg",
    },
    {
      id: 5,
      name: "Yusuf Pathan",
      title: "The Pathan Power",
      details: "Age: 42 DOB: 17 Nov 1982 Batting style: Right Handed batsman Bowling style: Right arm Offbreak",
      description: "Yusuf Pathan, a name that resonates with thunderous power and breathtaking sixes. He's a force of nature, launching the ball into the stratosphere with the ease of a seasoned marksman.  His shots aren't just boundaries; they're declarations, announcements of sixes broadcast from the outer universe, each one a testament to his Herculean strength and effortless power.  His hands, seemingly forged from iron, wield the bat with an almost casual dominance.  He doesn't just hit the ball; he obliterates it, leaving spectators awestruck and opponents in stunned silence.",
      imageUrl: "/team/Yusuf-Pathan/long.jpg",
    },
    {
      id: 6,
      name: "Suresh Kumar Raina",
      title: "Sonu The Chinna Thala",
      details: "Age: 38 DOB: 27 November 1986 Batting Style: Left Handed Batsman Bowling style: Right arm Offbreak",
      description: "Suresh Kumar Raina - Sonu The Chinna Thala is a batsman whose skill is matched only by his strategic brilliance. He's not just a player; he's an architect of runs, meticulously crafting his innings with calculated precision and unwavering focus. Every shot is a calculated move, a piece in a larger strategy to maximize his impact and dominate the game.  His energy is channeled with surgical precision. He is a guide, a mentor, whose calm demeanor and strategic brilliance inspire confidence in his teammates.  A master strategist whose calculated plays and elegant stroke-making leave a lasting mark on every match he graces.",
      imageUrl: "/team/Suresh-Raina/long.jpg",
    },
    {
      id: 7,
      name: "Stuart Terence Roger Binny",
      title: "Binny 'The Limited over specialist'",
      details: "Age: 40 DOB: 03 June 1984 Batting Style: Right Handed Batsman  Bowling style: Right Arm medium fast",
      description: "Stuart Terence Binny - 'The Limited Over Specialist', a name echoing the legacy of his father, yet forging his own path to cricketing greatness. He's not merely a player; he's a testament to perseverance, a testament to the transformative power of consistent effort. Much like his father, Stuart is a force to be reckoned with, a hard-hitting batsman capable of changing the game's momentum in the blink of an eye. His bowling, a blend of medium-paced swing and seam.  His journey has been one of resilience, from early struggles to establishing himself as a key all-rounder, his presence in the middle order a source of strength. He's a crisis-solver, a partnership-breaker, a player whose contributions often prove decisive.",
      imageUrl: "/team/Stuart-Terence-Roger-Binny/long.jpg",
    },
    {
      id: 8,
      name: "Dhawal Sunil Kulkarni",
      title: "Kulkarni 'The quite catalyst'",
      details: "Age: 36 DOB: 24 April 1973 Bowling Style: Right Arm medium Fast",
      description: "Dhawal Sunil Kulkarni 'The Quite Catalyst', a bowler whose mastery of the new ball has made him a force to be reckoned with.  He's a craftsman of pace and movement, a right-arm medium-pacer whose consistent accuracy and ability to extract swing make him a nightmare for batsmen. His journey, marked by impressive performances from a young age, is a testament to unwavering dedication and a keen understanding of the game. From early breakthroughs in the Vijay Merchant Trophy to consistently leading wicket-taker in Ranji Trophy,  his career is studded with significant contributions in high-stakes matches.  Dhawal Kulkarni is more than just a bowler; he is a reliable performer who consistently delivers crucial breakthroughs.",
      imageUrl: "/team/Dhawal-Sunil-Kulkarni/long.webp",
    },
    {
      id: 9,
      name: "Ranganath Vinay Kumar",
      title: "'The Davangere Express'",
      details: "Age: 40 DOB: 12 Feb 1984 Bowling style: Right Arm medium fast",
      description: "Ranganath Vinay Kumar 'The Davangere Express' is a cricketer with precision and control, a bowler whose mastery of subtle variations has made him a formidable force. He's a tactician on the field, a master of deception whose arsenal of leg-cutters, slower balls, and pinpoint accuracy keeps batsmen guessing.  His journey, marked by consistent wicket-taking from his early first-class days, is a testament to unwavering skill and a deep understanding of the game.  From mentoring young bowlers to leading Karnataka to the Ranji Trophy final. While his international appearances have been sporadic, his impact in domestic cricket remains undeniable. The 'Davangere Express' continues to deliver, proving that true skill lies not only in raw pace but also in intelligent execution and unwavering precision.",
      imageUrl: "/team/Ranganath-Vinay-Kumar/long.webp",
    },
    {
      id: 10,
      name: "Shahbaz Nadeem",
      title: "The Nimrod Nadeem",
      details: "Age: 35 DOB: 12 August 1989 Bowling style: Slow Left arm Orthodox",
      description: "Shahbaz Nadeem 'The Nimrod Nadeem' is a left-arm spinner whose classical approach and consistent performance have earned him a place among India's top bowlers. He's a master of deception, a craftsman of flight and subtle variations who uses his skills to outwit even the most accomplished batsmen. His journey, marked by impressive performances at the first-class level and a move to the Sunrisers Hyderabad, showcases his talent and unwavering determination. From early success at the Under-19 level to becoming a leading wicket-taker in the Ranji Trophy, Nadeem's consistent performances demonstrate his ability to deliver under pressure. Shahbaz Nadeem is a testament to patience and persistence.",
      imageUrl: "/team/Shahbaz-Nadeem/long.webp",
    },
    {
      id: 11,
      name: "Rahul Sharma",
      title: "The Rugged Rahul",
      details: "Age: 38 DOB: 30 November 1986 Bowling style: Legbreak Googly",
      description: "Rahul Sharma 'The Rugged Rahul', a name that evokes images of flight and bounce, a leg-spinner whose unique style and impressive performances have set him apart. He's a master of extracting unexpected bounce from the pitch, utilizing his height to generate an upward trajectory that unsettles batsmen. His journey, marked by impressive IPL performances and a remarkable comeback from injury, showcases his resilience and determination. From dismissing cricketing legends to delivering crucial breakthroughs in international matches, he's proven his ability to perform under pressure. Rahul Sharma is a testament to how unique variations and skillful execution can elevate a bowler to the highest levels of the game.",
      imageUrl: "/team/Rahul-Sharma/long.webp",
    },
    {
      id: 12,
      name: "Naman Vinaykumar Ojha",
      title: "The Stalwart Naman",
      details: "Age:41 DOB: 20 July 1983 Batting style: Right Handed batter/Wicketkeeper",
      description: "Naman VinayKumar Ojha 'The Stalwart Naman' a top-order batsman and wicketkeeper whose consistent performances have marked him as a force to be reckoned with. He's a cornerstone of any team, a dependable batsman capable of crafting crucial innings and a steady wicketkeeper behind the stumps.  His journey, marked by impressive performances at both domestic and international levels, showcases his adaptability and unwavering dedication. From early success in the Challenger Trophy to impressive displays in the Ranji Trophy and commanding scores for India A, he consistently delivers impactful performances. Naman Ojha is a reliable cornerstone, a consistent performer whose batting prowess and wicketkeeping skills have made him a valuable asset.",
      imageUrl: "/team/Naman-Vinaykumar-Ojha/long.webp",
    },
    {
      id: 13,
      name: "Pawan Negi",
      title: "Nimble the Gem Negi",
      details: "Age: 32 DOB: 06 January 1993 Bowling style: Slow Left arm Orthodox",
      description: "Pawan Negi 'Nimble the Gem Negi', a Twenty20 specialist whose left-arm spin and explosive batting have made him a valuable asset in the shortest format of the game. He's a game-changer, a left-arm spinner capable of turning the tide with his quick spin on turning tracks and a lower-order batsman who can clear the ropes with ease. His journey from a domestic player to a million-dollar IPL buy showcases his talent and unwavering dedication. From impressive performances in domestic limited-overs cricket to representing India in the World T20 and Asia Cup, he's proven his ability to perform at the highest level. Pawan Negi is a dynamic force in T20 cricket.",
      imageUrl: "/team/Pawan-Negi/long.png",
    },
    {
      id: 14,
      name: "Gurkeerat Singh Mann",
      title: "Mr. Adaptable/Dynamic Singh",
      details: "Age: 34 DOB: 29 June 1990 Batting style: Right Handed batsman",
      description: "Gurkeerat Singh Mann 'Mr. Adaptable', an all-rounder whose consistent performances have propelled him to the forefront of Indian cricket. He's not just a player; he's a finisher, a match-winner, whose ability to deliver under pressure has made him a valuable asset to any team. His journey, marked by impressive performances in domestic cricket and a rise to the international stage, is a testament to his unwavering dedication and skill.  From match-winning scores and crucial wickets in domestic matches to representing India at the ODI level, Gurkeerat has consistently showcased his all-around ability.",
      imageUrl: "/team/Gurkeerat-Singh-Mann/long.png",
    },
    {
      id: 15,
      name: "Abhimanyu Mithun",
      title: "The unconventional Mithun",
      details: "Age: 35 DOB: 25 OCTOBER 1989  Bowling Style: Right Arm medium fast",
      description: "Abhimanyu Mithun 'The Unconventional Mithun', is a fast bowler whose imposing physique and aggressive style have made him a force to be judged with. He's a physical specimen, a towering presence on the field whose height and raw pace are his greatest weapons. His journey, marked by impressive performances in domestic cricket, showcases his talent and dedication.  From early success in the Ranji Trophy, where he led the bowling charts, to helping Karnataka reach the finals, Mithun has consistently demonstrated his ability to deliver crucial breakthroughs. He's a powerhouse, a player whose imposing presence and aggressive style make him a challenging opponent for any batsman.",
      imageUrl: "/team/Abhimanyu-Mithun/long.jpg",
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
        // pin: true,
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
              {/* {isDragging ? "DRAGGING" : "DRAG"} */}
              DRAG
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
                  • SCROLL • EXPLORE • DISCOVER
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
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/70 via-blue-600/70 to-black/90" />
                </motion.div>

                {/* Active state overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/10"
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.7 }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 overflow-hidden">
                  {/* Number */}
                  <span
                    className={cn(
                      "text-8xl font-bold transition-colors duration-700",
                      activeIndex === index ? "text-white/30" : "text-white/40"
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
                    {/* <p className="text-lg text-white/90">{member.title}</p> */}
                    <p className="mt-2 text-sm text-white/90">{member.details}</p>
                    <p className="mt-2 text-sm text-white/90 max-w-[400px]">
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
