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
  nr: number;
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
  },
  {
    id: 2,
    logo: "/logos/logo.svg",
    name: "MAPUA CARDINALS",
    matches: 9,
    wins: 8,
    losses: 1,
    points: 16,
    nr: 0,
  },
  {
    id: 3,
    logo: "/logos/logo.svg",
    name: "MAPUA CARDINALS",
    matches: 9,
    wins: 8,
    losses: 1,
    points: 16,
    nr: 0,
  },
  {
    id: 4,
    logo: "/logos/logo.svg",
    name: "MAPUA CARDINALS",
    matches: 9,
    wins: 8,
    losses: 1,
    points: 16,
    nr: 0,
  },
  {
    id: 5,
    logo: "/logos/logo.svg",
    name: "MAPUA CARDINALS",
    matches: 9,
    wins: 8,
    losses: 1,
    points: 16,
    nr: 0,
  },
  {
    id: 6,
    logo: "/logos/logo.svg",
    name: "MAPUA CARDINALS",
    matches: 9,
    wins: 8,
    losses: 1,
    points: 16,
    nr: 0,
  },
  {
    id: 7,
    logo: "/logos/logo.svg",
    name: "MAPUA CARDINALS",
    matches: 9,
    wins: 8,
    losses: 1,
    points: 16,
    nr: 0,
  },
  {
    id: 8,
    logo: "/logos/logo.svg",
    name: "MAPUA CARDINALS",
    matches: 9,
    wins: 8,
    losses: 1,
    points: 16,
    nr: 0,
  },
  // ... add more teams
];

export function RankingTable() {
  return (
    <section className="relative w-full bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-center">
            League Table
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-6xl mx-auto bg-foreground/5 rounded-lg overflow-hidden border border-border/20"
        >
          {/* Table Header */}
          <div className="grid grid-cols-[0.5fr,0.5fr,2fr,repeat(5,1fr)] gap-0 bg-foreground/10 p-4 border-b border-border/20">
            <div className="text-sm font-medium text-foreground/60">Pos</div>
            <div></div>
            <div className="text-sm font-medium text-foreground/60">Team</div>
            <div className="text-center text-sm font-medium text-foreground/60">MAT</div>
            <div className="text-center text-sm font-medium text-foreground/60">W</div>
            <div className="text-center text-sm font-medium text-foreground/60">L</div>
            <div className="text-center text-sm font-medium text-foreground/60">PTS</div>
            <div className="text-center text-sm font-medium text-foreground/60">N/R</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-border/10">
            {rankings.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="grid grid-cols-[0.5fr,0.5fr,2fr,repeat(5,1fr)] gap-0 p-4 hover:bg-foreground/5 transition-colors group"
              >
                <div className="text-base font-semibold text-foreground/60">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="relative w-8 h-8">
                  <Image
                    src={team.logo}
                    alt={team.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="text-base font-medium">{team.name}</div>
                <div className="text-center">{team.matches}</div>
                <div className="text-center text-green-500">{team.wins}</div>
                <div className="text-center text-red-500">{team.losses}</div>
                <div className="text-center font-semibold">{team.points}</div>
                <div className="text-center">{team.nr}</div>
              </motion.div>
            ))}
          </div>

          {/* Table Footer - Optional stats or notes */}
          <div className="bg-foreground/5 p-4 text-sm text-foreground/60 border-t border-border/20">
            <p>Last updated: February 2024</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 