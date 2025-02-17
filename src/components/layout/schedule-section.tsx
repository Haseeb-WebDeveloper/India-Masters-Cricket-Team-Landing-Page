"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Match = {
  id: number;
  team1: {
    name: string;
    logo: string;
    playerImage: string;
    bgColor: string;
  };
  team2: {
    name: string;
    logo: string;
    playerImage: string;
    bgColor: string;
  };
};

const matches: Match[] = [
  {
    id: 1,
    team1: {
      name: "Pakistan",
      logo: "/logos/pak.png",
      playerImage: "/captain/01.png",
      bgColor: "bg-gradient-to-r from-green-600 via-green-500/10 to-transparent",
    },
    team2: {
      name: "India",
      logo: "/logos/ind.png",
      playerImage: "/captain/01.png",
      bgColor: "bg-gradient-to-r from-transparent via-yellow-500/10 to-yellow-600",
    },
  },
  {
    id: 1,
    team1: {
      name: "Pakistan",
      logo: "/logos/pak.png",
      playerImage: "/captain/01.png",
      bgColor: "bg-gradient-to-r from-green-600 via-green-500/10 to-transparent",
    },
    team2: {
      name: "India",
      logo: "/logos/ind.png",
      playerImage: "/captain/01.png",
      bgColor: "bg-gradient-to-r from-transparent via-yellow-500/10 to-yellow-600",
    },
  },
  {
    id: 1,
    team1: {
      name: "Pakistan",
      logo: "/logos/pak.png",
      playerImage: "/captain/01.png",
      bgColor: "bg-gradient-to-r from-green-600 via-green-500/10 to-transparent",
    },
    team2: {
      name: "India",
      logo: "/logos/ind.png",
      playerImage: "/captain/01.png",
      bgColor: "bg-gradient-to-r from-transparent via-yellow-500/10 to-yellow-600",
    },
  },
  {
    id: 1,
    team1: {
      name: "Pakistan",
      logo: "/logos/pak.png",
      playerImage: "/captain/01.png",
      bgColor: "bg-gradient-to-r from-green-600 via-green-500/10 to-transparent",
    },
    team2: {
      name: "India",
      logo: "/logos/ind.png",
      playerImage: "/captain/01.png",
      bgColor: "bg-gradient-to-r from-transparent via-yellow-500/10 to-yellow-600",
    },
  },
];

export function ScheduleSection() {
  return (
    <section className="relative w-full bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-center">
            Upcoming Matches
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="grid gap-6">
            {matches.map((match) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "relative h-40 rounded-lg",
                  "",
                )}
              >
                {/* Content Container */}
                <div className=" h-full grid grid-cols-[1fr,auto,1fr] items-center ">
                  {/* Team 1 */}
                  <div className={`relative w-full h-full ${match.team1.bgColor} rounded-l-lg`}>
                    <div className="absolute bottom-0 left-0 w-1/2 h-56">
                      <Image
                        src={match.team1.playerImage}
                        alt={`${match.team1.name} Player`}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="absolute bottom-0 right-16 w-40 h-[90%]">
                      <Image
                        src={match.team1.logo}
                        alt={match.team1.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* VS */}
                  <div className="px-0">
                    <span className="text-5xl font- text-white">VS</span>
                  </div>

                  {/* Team 2 */}
                  <div className={`relative w-full h-full ${match.team2.bgColor} rounded-r-lg`}>
                    <div className="absolute bottom-0 right-0  w-1/2 h-56">
                      <Image
                        src={match.team2.playerImage}
                        alt={`${match.team2.name} Player`}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="absolute bottom-0 left-16 w-40 h-[90%]">
                      <Image
                        src={match.team2.logo}
                        alt={match.team2.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 