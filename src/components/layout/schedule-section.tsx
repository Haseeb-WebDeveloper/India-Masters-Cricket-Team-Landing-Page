"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CalendarDays, MapPin, Clock } from "lucide-react";

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
  matchDetails: {
    date: string;
    time: string;
    venue: string;
  };
};

const matches: Match[] = [
  {
    id: 1,
    team1: {
      name: "Pakistan",
      logo: "/logos/pak.png",
      playerImage: "/captain/01.png",
      bgColor:
        "bg-gradient-to-r from-green-600 via-green-600/10 to-transparent",
    },
    team2: {
      name: "India",
      logo: "/logos/ind.png",
      playerImage: "/captain/01.png",
      bgColor:
        "bg-gradient-to-r from-transparent via-yellow-500/10 to-yellow-600",
    },
    matchDetails: {
      date: "March 15, 2024",
      time: "14:30 IST",
      venue: "Dubai International Stadium",
    },
  },
  {
    id: 2,
    team1: {
      name: "India",
      logo: "/logos/ind.png",
      playerImage: "/captain/01.png",
      bgColor:
        "bg-gradient-to-l from-transparent via-yellow-500/10 to-yellow-600",
    },
    team2: {
      name: "Australia",
      logo: "/logos/aus.png",
      playerImage: "/captain/01.png",
      bgColor:
        "bg-gradient-to-r from-transparent via-yellow-500/10 to-yellow-600",
    },
    matchDetails: {
      date: "March 15, 2024",
      time: "14:30 IST",
      venue: "Dubai International Stadium",
    },
  },
  {
    id: 3,
    team1: {
      name: "England",
      logo: "/logos/eng.png",
      playerImage: "/captain/01.png",
      bgColor:
        "bg-gradient-to-r from-green-600 via-green-500/10 to-transparent",
    },
    team2: {
      name: "India",
      logo: "/logos/ind.png",
      playerImage: "/captain/01.png",
      bgColor:
        "bg-gradient-to-r from-transparent via-yellow-500/10 to-yellow-600",
    },
    matchDetails: {
      date: "March 15, 2024",
      time: "14:30 IST",
      venue: "Dubai International Stadium",
    },
  },
  {
    id: 4,
    team1: {
      name: "India",
      logo: "/logos/ind.png",
      playerImage: "/captain/01.png",
      bgColor:
        "bg-gradient-to-r from-green-600 via-green-500/10 to-transparent",
    },
    team2: {
      name: "South Africa",
      logo: "/logos/sa.png",
      playerImage: "/captain/01.png",
      bgColor:
        "bg-gradient-to-r from-transparent via-yellow-500/10 to-yellow-600",
    },
    matchDetails: {
      date: "March 15, 2024",
      time: "14:30 IST",
      venue: "Dubai International Stadium",
    },
  },
];

export function ScheduleSection() {
  return (
    <section className="relative w-full bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-[5rem] text-white outline-text text-center">
            Coming Soon...
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid gap-6">
            {matches.map((match) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-40 group cursor-pointer "
              >
                {/* Base Card */}
                <div className="absolute inset-0 h-full grid grid-cols-[1fr,auto,1fr] items-center  transition-transform duration-500 ">
                  {/* Team 1 */}
                  <div
                    className={`relative w-full h-full ${match.team1.bgColor} transition-all duration-500 rounded-t-md`}
                  >
                    <div className="absolute bottom-0 left-0 w-1/2 h-56 group-hover:opacity-0 transition-opacity duration-500">
                      <Image
                        src={match.team1.playerImage}
                        alt={`${match.team1.name} Player`}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="absolute bottom-1/2 translate-y-1/2 right-16 w-40 h-[60%] group-hover:opacity-0 transition-opacity duration-500">
                      <Image
                        src={match.team1.logo}
                        alt={match.team1.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* VS */}
                  <div className="px-0 group-hover:opacity-0 transition-opacity duration-500">
                    <span className="text-5xl font-medium text-foreground">
                      VS
                    </span>
                  </div>

                  {/* Team 2 */}
                  <div
                    className={`relative w-full h-full ${match.team2.bgColor} transition-all duration-500 rounded-t-md`}
                  >
                    <div className="absolute bottom-0 right-0 w-1/2 h-56 group-hover:opacity-0 transition-opacity duration-500">
                      <Image
                        src={match.team2.playerImage}
                        alt={`${match.team2.name} Player`}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="absolute bottom1/2 translate-y-1/2 left-16 w-40 h-[60%] group-hover:opacity-0 transition-opacity duration-500">
                      <Image
                        src={match.team2.logo}
                        alt={match.team2.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Content */}
                <div className="absolute inset-0 bg-gradient-to-r  opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="h-full flex items-center justify-between px-16">
                    {/* Team 1 Info */}
                    <div className="text-center">
                      <div className="w-20 h-20 relative mb-2">
                        <Image
                          src={match.team1.logo}
                          alt={match.team1.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="font-bold text-xl text-white">
                        {match.team1.name}
                      </h3>
                    </div>

                    {/* Match Details */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2 text-foreground mb-4">
                        <span className="text-3xl font-medium">VS</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-center gap-3 text-foreground/90">
                          <span className="text-sm">
                            {match.matchDetails.date}
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-3 text-white/90">
                          <span className="text-sm">
                            {match.matchDetails.time}
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-3 text-white/90">
                          <span className="text-sm text-center">
                            {match.matchDetails.venue}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Team 2 Info */}
                    <div className="text-center">
                      <div className="w-20 h-20 relative mb-2">
                        <Image
                          src={match.team2.logo}
                          alt={match.team2.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="font-bold text-xl text-white">
                        {match.team2.name}
                      </h3>
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
