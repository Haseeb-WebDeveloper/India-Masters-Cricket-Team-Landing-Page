"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type TeamRanking = {
  id: number;
  logo: string;
  name: string;
  matches: number;
  wins: number;
  losses: number;
  points: number;
  nr: number; // No Result matches
  bgColor: string;
};

const rankings: TeamRanking[] = [
  {
    id: 1,
    logo: "/logos/logo.svg",
    name: "MAPUA CARDINALS",
    matches: 9,
    wins: 8,
    losses: 1,
    points: 16,
    nr: 0,
    bgColor: "bg-gradient-to-r from-blue-500 to-red-500",
  },
  {
    id: 2,
    logo: "/logos/logo.svg",
    name: "SAN BEDA RED LIONS",
    matches: 9,
    wins: 7,
    losses: 2,
    points: 14,
    nr: 0,
    bgColor: "bg-gradient-to-r from-blue-500 to-red-500",
  },
  // Add more teams...
];

export function RankingSection() {
  return (
    <section className="relative min-h-screen w-full bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-center">
            Tournament Standings
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-[0.5fr,2.5fr,repeat(5,0.5fr)] gap-0 mb-8 px-8 text-foreground/60">
            <div>Rank</div>
            <div>Team</div>
            <div className="text-center border-l border-border/20 text-sm">
              MAT
            </div>
            <div className="text-center border-l border-border/20 text-sm">
              W
            </div>
            <div className="text-center border-l border-border/20 text-sm">
              L
            </div>
            <div className="text-center border-l border-border/20 text-sm">
              PTS
            </div>
            <div className="text-center border-l border-border/20 text-sm">
              N/R
            </div>
          </div>

          {/* Rankings */}
          <div className="space-y-3">
            {rankings.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white"
                // left side edge row
                style={{
                  clipPath: "polygon(45px 0, 100% 0, 100% 100%, 0 100%, 0 100%)",
                }}
              >
                {/* Background with curved edges */}
                <div className="absolute inset-0 w-[45%] h-full">
                  <div
                    className={cn(
                      "absolute inset-0 opacity-90",
                      team.bgColor
                    )}
                    style={{
                      clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0% 100%)",
                    }}
                  />
                </div>

                <div
                  className={cn(
                    "relative grid grid-cols-[0.5fr,2.5fr,repeat(5,0.5fr)] items-center gap-0 py-4",
                    "shadow-[0_4px_8px_-2px_rgba(0,0,0,0.2)]"
                  )}
                >
                  {/* Rank */}
                  <div className="text-2xl font-bold pl-12">
                    {String(team.id).padStart(2, "0")}
                  </div>

                  {/* Team */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src={team.logo}
                        alt={team.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="font-semibold text-3xl">
                      {team.name}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="text-center border-l border-border/30 text-xl text-background font-medium">
                    {team.matches}
                  </div>
                  <div className="text-center border-l border-border/30 text-xl text-background font-medium">
                    {team.wins}
                  </div>
                  <div className="text-center border-l border-border/30 text-xl text-background font-medium">
                    {team.losses}
                  </div>
                  <div className="text-center border-l border-border/30 text-xl text-background font-medium">
                    {team.points}
                  </div>
                  <div className="text-center border-l border-border/30 text-xl text-background font-medium">
                    {team.nr}
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
