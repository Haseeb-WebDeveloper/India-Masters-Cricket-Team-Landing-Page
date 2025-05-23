"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { cn } from "@/lib/utils";
import {
  isDragging,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Draggable);
}

type TeamMember = {
  id: number;
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  details: {
    age: string;
    dob: string;
    battingStyle?: string;
    bowlingStyle?: string;
  }[];
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sachin Ramesh Tendulkar",
    title: "The Little Master",
    details: [
      {
        age: "51",
        dob: "24 April 1973",
        battingStyle: "Right Handed Batsman",
        bowlingStyle: "",
      },
    ],
    description:
      "Sachin Tendulkar is a global icon, a legend whose name resonates with billions. He's not just a record-breaker; he's a symbol of India's spirit, its unwavering determination, and its enduring love for cricket. The roar of the crowd, the thundering applause, the outpouring of affection. It wasn't just for the runs he scored, but for the pride he imprints on the nation. Each boundary, each masterful stroke, was a testament to his unwavering dedication and the immense love he returned to his people, forging an unbreakable bond that fueled countless victories and cemented his status as the 'God of Cricket'.",
    imageUrl: "team/1.png",
  },
  {
    id: 2,
    name: "Yuvraj Singh",
    title: "The Pied Piper Of Punjab",
    details: [
      {
        age: "43",
        dob: "12 December 1981",
        battingStyle: "Left Handed Batsman",
        bowlingStyle: "Slow Left arm Orthodox",
      },
    ],
    description:
      "Yuvraj Singh, a name synonymous with explosive power and breathtaking versatility. More than just a batsman, he's a force of nature on the field, captivating audiences with his electrifying stroke play and match-winning performances. His ability to adapt, to shift gears from calm precision to ferocious power hitting, has made him a legend. But beyond the statistics and the accolades, it's his connection with the crowd that truly sets him apart. Yuvraj Singh is a spectacle, a crowd-puller, a master of his craft, and a beloved figure whose legacy is etched not just in the records, but in the hearts of countless cricket enthusiasts.",
    imageUrl: "team/2.png",
  },
  {
    id: 3,
    name: "Yusuf Pathan",
    title: "The Pathan Power",
    details: [
      {
        age: "42",
        dob: "17 November 1982",
        battingStyle: "Right Handed batsman",
        bowlingStyle: "Right arm Offbreak",
      },
    ],
    description:
      "Yusuf Pathan, a name that resonates with thunderous power and breathtaking sixes. He's a force of nature, launching the ball into the stratosphere with the ease of a seasoned marksman. His shots aren't just boundaries; they're declarations, announcements of sixes broadcast from the outer universe, each one a testament to his Herculean strength and effortless power. His hands, seemingly forged from iron, wield the bat with an almost casual dominance. He doesn't just hit the ball; he obliterates it, leaving spectators awestruck and opponents in stunned silence.",
    imageUrl: "team/3.png",
  },
  {
    id: 4,
    name: "Irfan Pathan",
    title: "The Blue eyed 'Guddu'",
    details: [
      {
        age: "40",
        dob: "27 October 1984",
        battingStyle: "Left Handed Batsman",
        bowlingStyle: "Left arm Medium fast",
      },
    ],
    description:
      "Irfan Pathan - The Blue Eyed 'Guddu', a name whispered with awe, a true all-rounder whose skills border on the magical. He's not just a cricketer; he's a magician on the field, weaving spells of breathtaking pace bowling and mesmerizing batting. A blink of an eye, and you might miss an impossible catch, a searing yorker, or a stroke of pure genius. His all-around brilliance is captivating. It's the sheer entertainment he delivers, the unpredictability. He's a match-winner, a player whose artistry leaves you breathless and wanting more.",
    imageUrl: "team/4.png",
  },
  {
    id: 5,
    name: "Ambati Thirupathi Rayudu",
    title: "The Resilient 'Amba'",
    details: [
      {
        age: "39",
        dob: "23 September 1985",
        battingStyle: "Right Handed Batsman",
      },
    ],
    description:
      "Ambati Rayudu, the resilient 'Amba' a strategic brilliance with calculated precision. He's a chess master on the Cricket field, a tactician whose skillful mind orchestrates victories. His shots are not merely strokes; they're calculated moves, part of a larger strategy to outwit the opposition. He's a thinker, a planner, a master. He doesn't just play the game; he manipulates it, using his intelligence and skill to turn matches on their head. It's about precision, control and calculated aggression. He's a strategist whose presence commands attention and whose calm decision-making often decides the fate of the match.",
    imageUrl: "team/5.png",
  },
  {
    id: 6,
    name: "Stuart Terence Roger Binny",
    title: "Binny 'The Limited over specialist'",
    details: [
      {
        age: "40",
        dob: "03 June 1984",
        battingStyle: "Right Handed Batsman",
        bowlingStyle: "Right Arm medium fast",
      },
    ],
    description:
      "Stuart Terence Binny - 'The Limited Over Specialist', a name echoing the legacy of his father, yet forging his own path to cricketing greatness. He's not merely a player; he's a testament to perseverance, a testament to the transformative power of consistent effort. Much like his father, Stuart is a force to be reckoned with, a hard-hitting batsman capable of changing the game's momentum in the blink of an eye. His bowling, a blend of medium-paced swing and seam. His journey has been one of resilience, from early struggles to establishing himself as a key all-rounder, his presence in the middle order a source of strength. He's a crisis-solver, a partnership-breaker, a player whose contributions often prove decisive.",
    imageUrl: "team/6.png",
  },
  {
    id: 7,
    name: "Dhawal Sunil Kulkarni",
    title: "Kulkarni 'The quite catalyst'",
    details: [
      {
        age: "36",
        dob: "10 December 1988",
        bowlingStyle: "Right Arm medium Fast",
      },
    ],
    description:
      "Dhawal Sunil Kulkarni 'The Quite Catalyst', a bowler whose mastery of the new ball has made him a force to be reckoned with. He's a craftsman of pace and movement, a right-arm medium-pacer whose consistent accuracy and ability to extract swing make him a nightmare for batsmen. His journey, marked by impressive performances from a young age, is a testament to unwavering dedication and a keen understanding of the game. From early breakthroughs in the Vijay Merchant Trophy to consistently leading wicket-taker in Ranji Trophy, his career is studded with significant contributions in high-stakes matches. Dhawal Kulkarni is more than just a bowler; he is a reliable performer who consistently delivers crucial breakthroughs.",
    imageUrl: "team/7.png",
  },
  {
    id: 8,
    name: "Ranganath Vinay Kumar",
    title: "'The Davangere Express'",
    details: [
      {
        age: "40",
        dob: "12 February 1984",
        bowlingStyle: "Right Arm medium fast",
      },
    ],
    description:
      "Ranganath Vinay Kumar 'The Davangere Express' is a fast bowler whose imposing physique and aggressive style have made him a force to be judged with. He's a physical specimen, a towering presence on the field whose height and raw pace are his greatest weapons. His journey, marked by impressive performances in domestic cricket, showcases his talent and dedication. From early success in the Ranji Trophy, where he led the bowling charts, to helping Karnataka reach the finals, Mithun has consistently demonstrated his ability to deliver crucial breakthroughs. He's a powerhouse, a player whose imposing presence and aggressive style make him a challenging opponent for any batsman.",
    imageUrl: "team/8.png",
  },
  {
    id: 9,
    name: "Shahbaz Nadeem",
    title: "The Nimrod Nadeem",
    details: [
      {
        age: "35",
        dob: "12 August 1989",
        bowlingStyle: "Slow Left arm Orthodox",
      },
    ],
    description:
      "Shahbaz Nadeem 'The Nimrod Nadeem' is a left-arm spinner whose classical approach and consistent performance have earned him a place among India's top bowlers. He's a master of deception, a craftsman of flight and subtle variations who uses his skills to outwit even the most accomplished batsmen. His journey, marked by impressive performances at the first-class level and a move to the Sunrisers Hyderabad, showcases his talent and unwavering determination. From early success at the Under-19 level to becoming a leading wicket-taker in the Ranji Trophy, Nadeem's consistent performances demonstrate his ability to deliver under pressure. Shahbaz Nadeem is a testament to patience and persistence.",
    imageUrl: "team/9.png",
  },
  {
    id: 10,
    name: "Rahul Sharma",
    title: "The Rugged Rahul",
    details: [
      {
        age: "38",
        dob: "30 November 1986",
        bowlingStyle: "Legbreak Googly",
      },
    ],
    description:
      "Rahul Sharma 'The Rugged Rahul', a name that evokes images of flight and bounce, a leg-spinner whose unique style and impressive performances have set him apart. He's a master of extracting unexpected bounce from the pitch, utilizing his height to generate an upward trajectory that unsettles batsmen. His journey, marked by impressive IPL performances and a remarkable comeback from injury, showcases his resilience and determination. From dismissing cricketing legends to delivering crucial breakthroughs in international matches, he's proven his ability to perform under pressure. Rahul Sharma is a testament to how unique variations and skillful execution can elevate a bowler to the highest levels of the game.",
    imageUrl: "team/10.png",
  },
  {
    id: 11,
    name: "Naman Vinaykumar Ojha",
    title: "The Stalwart Naman",
    details: [
      {
        age: "41",
        dob: "20 July 1983",
        battingStyle: "Right Handed batter/Wicketkeeper",
      },
    ],
    description:
      "Naman VinayKumar Ojha 'The Stalwart Naman' a top-order batsman and wicketkeeper whose consistent performances have marked him as a force to be reckoned with. He's a cornerstone of any team, a dependable batsman capable of crafting crucial innings and a steady wicketkeeper behind the stumps. His journey, marked by impressive performances at both domestic and international levels, showcases his adaptability and unwavering dedication. From early success in the Challenger Trophy to impressive displays in the Ranji Trophy and commanding scores for India A, he consistently delivers impactful performances. Naman Ojha is a reliable cornerstone, a consistent performer whose batting prowess and wicketkeeping skills have made him a valuable asset.",
    imageUrl: "team/11.png",
  },
  {
    id: 12,
    name: "Pawan Negi",
    title: "Nimble the Gem Negi",
    details: [
      {
        age: "32",
        dob: "06 January 1993",
        bowlingStyle: "Slow Left arm Orthodox",
      },
    ],
    description:
      "Pawan Negi 'Nimble the Gem Negi', a Twenty20 specialist whose left-arm spin and explosive batting have made him a valuable asset in the shortest format of the game. He's a game-changer, a left-arm spinner capable of turning the tide with his quick spin on turning tracks and a lower-order batsman who can clear the ropes with ease. His journey from a domestic player to a million-dollar IPL buy showcases his talent and unwavering dedication. From impressive performances in domestic limited-overs cricket to representing India in the World T20 and Asia Cup, he's proven his ability to perform at the highest level. Pawan Negi is a dynamic force in T20 cricket.",
    imageUrl: "team/12.png",
  },
  {
    id: 13,
    name: "Gurkeerat Singh Mann",
    title: "Mr. Adaptable/Dynamic Singh",
    details: [
      {
        age: "34",
        dob: "29 June 1990",
        battingStyle: "Right Handed batsman",
      },
    ],
    description:
      "Gurkeerat Singh Mann 'Mr. Adaptable', an all-rounder whose consistent performances have propelled him to the forefront of Indian cricket. He's not just a player; he's a finisher, a match-winner, whose ability to deliver under pressure has made him a valuable asset to any team. His journey, marked by impressive performances in domestic cricket and a rise to the international stage, is a testament to his unwavering dedication and skill. From match-winning scores and crucial wickets in domestic matches to representing India at the ODI level, Gurkeerat has consistently showcased his all-around ability.",
    imageUrl: "team/13.png",
  },
  {
    id: 14,
    name: "Abhimanyu Mithun",
    title: "The unconventional Mithun",
    details: [
      {
        age: "35",
        dob: "25 October 1989",
        bowlingStyle: "Right Arm medium fast",
      },
    ],
    description:
      "Abhimanyu Mithun 'The Unconventional Mithun', is a fast bowler whose imposing physique and aggressive style have made him a force to be judged with. He's a physical specimen, a towering presence on the field whose height and raw pace are his greatest weapons. His journey, marked by impressive performances in domestic cricket, showcases his talent and dedication. From early success in the Ranji Trophy, where he led the bowling charts, to helping Karnataka reach the finals, Mithun has consistently demonstrated his ability to deliver crucial breakthroughs. He's a powerhouse, a player whose imposing presence and aggressive style make him a challenging opponent for any batsman.",
    imageUrl: "team/14.png",
  },
  {
    id: 15,
    name: "Saurabh Sunil Tiwary",
    title: "The Bihari Blizzard",
    details: [
      {
        age: "35",
        dob: "30 December 1989",
        battingStyle: " Left-Handed Batsman",
      },
    ],
    description:
      "Saurabh Tiwary, a name whispered with respect in the corridors of Indian domestic cricket, is a testament to unwavering dedication and quiet determination. Modeled on the cool composure of MS Dhoni, Tiwary's journey from the Jamshedpur grounds to the national stage is a story of consistent performance and unwavering passion.  His elegant left-handed stroke play, honed through years of dedication, has captivated audiences and earned him the moniker of 'The Bihari Blizzard'.  He's a symbol of his state's cricketing spirit, a force of nature who quietly but powerfully makes his mark on the game.",
    imageUrl: "team/15.png",
  },
];

export function OurTeam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Only track cursor when mouse is inside the team section
    const handleMouseEnter = () => {
      document.body.style.cursor = "none";
    };

    const handleMouseLeave = () => {
      document.body.style.cursor = "auto";
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
        requestAnimationFrame(() => {
          cursorX.set(e.clientX);
          cursorY.set(e.clientY);
        });
      }
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    const container = containerRef.current;
    const slider = sliderRef.current;

    if (!container || !slider) return;

    let scrollTrigger: ScrollTrigger;
    let draggable: Draggable;

    const initializeAnimations = () => {
      // Pin the container
      scrollTrigger = ScrollTrigger.create({
        trigger: container,
        // pin: true,
        start: "top top",
        // end: "+=100%",
        scrub: true,
      });

      // Make the slider draggable
      draggable = Draggable.create(slider, {
        type: "x",
        inertia: true,
        bounds: {
          minX: -slider.scrollWidth + window.innerWidth,
          maxX: 0,
        },
        dragResistance: 0.2, // Reduced resistance for smoother drag
        edgeResistance: 0.65,
        onDragStart: () => setIsDragging(true),
        onDragEnd: () => setIsDragging(false),
        onPress: () => setIsDragging(true),
        onRelease: () => setIsDragging(false),
        // Add these properties for better mobile experience
        allowContextMenu: true,
        minimumMovement: 2,
        throwResistance: 3000,
        snap: {
          x: function (endValue) {
            return Math.round(endValue / 50) * 50;
          },
        },
        // Improved momentum settings
        momentum: true,
        momentumMultiplier: 8,
        overshootTolerance: 0.8,
      })[0];

      // Cleanup function
      return () => {
        scrollTrigger.kill();
        draggable.kill();
      };
    };

    initializeAnimations();

    // Cleanup on unmount
    return () => {
      if (scrollTrigger) scrollTrigger.kill();
      if (draggable) draggable.kill();
    };
  }, []);

  return (
    <section
      id="team"
      ref={containerRef}
      className="relative md:min-h-[110vh] min-h-[100vh] h-full w-full overflow-hidden bg-background "
    >
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-screen opacity-0"
        style={{
          x: cursorX,
          y: cursorY,
          position: "fixed",
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
          <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-sm">
            <span className="text-black text-xs font-medium select-none">
              {isDragging ? "DRAGGING" : "DRAG"}
            </span>
          </div>

          <div className="absolute inset-0 animate-spin-slow select-none">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path
                id="curve"
                d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
                fill="transparent"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Title with Parallax */}
      <div className="relative h-[20vh] md:h-[30vh] flex items-center justify-start md:px-[max(2rem,calc((100vw-1500px)/2))] px-6">
        <motion.div style={{ y, opacity }} className="relative z-10 ">
          <span className="text-foreground text-[2.3rem] left-1/2 -translate-x-1/2 lg:text-[5rem] font-bold text-center uppercase tracking-tight max-w-5xl mx-auto leading-tight md:leading-[6rem]">
            PLayers Lineup
          </span>
        </motion.div>
      </div>

      {/* Slider */}
      <div className="absolute inset-0 top-0 flex items-end z-10">
        <div
          ref={sliderRef}
          className="flex gap-4 cursor-none px-[max(2rem,calc((100vw-1500px)/2)) px-4 md:px-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className={cn(
                "relative md:h-[85vh] h-[82vh] transition-all duration-700 ease-out border border-border rounded-xl bg-blue-100",
                activeIndex === index
                  ? "md:w-[500px] w-[300px]"
                  : "md:w-[250px] w-[200px]"
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
                <div className=" w-full h-full">
                  <span
                    className={cn(
                      "text-8xl font-bold transition-colors duration-700 text-center absolute top-0 right-0 p-6 text-border z-10",
                      activeIndex === index ? "text-white/60" : "text-white/20"
                    )}
                  >
                    {String(member.id).padStart(2, "0")}
                  </span>
                </div>
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.imageUrl})` }}
                  animate={{
                    scale: activeIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.7 }}
                />

                <motion.div
                  className="absolute inset-0 transition-opacity duration-700"
                  animate={{
                    opacity: activeIndex === index ? 0 : 1,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/70 via-blue-600/70 to-black/90" />
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.7 }}
                />

                <div className="absolute bottom-0 left-0 w-full p-6 overflow-hidden">
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
                    {/* <h4 className="text-lg text-white/95">{member.title}</h4> */}
                    <div className="mt-2 text-sm text-white/95">
                      {member.details.map((detail, idx) => (
                        <div key={idx} className="space-y-1">
                          {detail.age && <p>Age: {detail.age}</p>}
                          {detail.dob && <p>DOB: {detail.dob}</p>}
                          {detail.battingStyle && (
                            <p>Batting: {detail.battingStyle}</p>
                          )}
                          {detail.bowlingStyle && (
                            <p>Bowling: {detail.bowlingStyle}</p>
                          )}
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-white/95 max-w-[400px] line-clamp-[11] lg:line-clamp-none">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
