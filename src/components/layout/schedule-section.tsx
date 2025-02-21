"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
      name: "India",
      logo: "/logos/india-masters.svg",
      playerImage: "/captain/01.png",
      bgColor:
        "bg-gradient-to-l from-transparent via-yellow-500/10 to-yellow-600",
    },
    team2: {
      name: "Sri Lanka  ",
      logo: "/logos/sri-lanka-masters.svg",
      playerImage: "/captain/01.png",
      bgColor:
        "bg-gradient-to-l from-[#8E153C] via-[#8E153C]/60",
    },
    matchDetails: {
      date: "Feb 22, 2025",
      time: "19:30 IST",
      venue: "Mumbai",
    },
  },
  {
    id: 2,
    team1: {
      name: "India",
      logo: "/logos/india-masters.svg",
      playerImage: "/captain/01.png",
      bgColor:
        "bg-gradient-to-l from-transparent via-yellow-500/10 to-yellow-600",
    },
    team2: {
      name: "England",
      logo: "/logos/england-masters.svg",
      playerImage: "/captain/01.png",
      bgColor:
        "bg-gradient-to-l from-transparent from-[#418EC1] via-[#418EC1]/50",
    },
    matchDetails: {
      date: "Feb 25, 2025",
      time: "19:30 IST",
      venue: "Mumbai",
    },
  },
  {
    id: 3,
    team1: {
      name: "India",
      logo: "/logos/india-masters.svg",
      playerImage: "/captain/01.png",
      bgColor:
        "bg-gradient-to-l from-transparent via-yellow-500/10 to-yellow-600",
    },
    team2: {
      name: "South Africa",
      logo: "/logos/south-africa-masters.svg",
      playerImage: "/captain/01.png",
      bgColor:
        "bg-gradient-to-l  from-[#6ADFCF] via-[#6ADFCF]/50",
    },
    matchDetails: {
      date: "March 01, 2025",
      time: "19:30 IST",
      venue: "Vadodara",
    },
  },
  {
    id: 4,
    team1: {
      name: "India",
      logo: "/logos/india-masters.svg",
      playerImage: "/captain/01.png",
      bgColor:
        "bg-gradient-to-l from-transparent via-yellow-500/10 to-yellow-600",
    },
    team2: {
      name: "Australia",
      logo: "/logos/australia-masters.svg",
      playerImage: "/captain/01.png",
      bgColor:
        "bg-gradient-to-l from-transparent from-[#B7EE06] via-[#B7EE06]/50",
    },
    matchDetails: {
      date: "March 05, 2025",
      time: "19:30 IST",
      venue: "Vadodara",
    },
  },
  {
    id: 4,
    team1: {
      name: "India",
      logo: "/logos/india-masters.svg",
      playerImage: "/captain/01.png",
      bgColor:
        "bg-gradient-to-l from-transparent via-yellow-500/10 to-yellow-600",
    },
    team2: {
      name: "West Indies",
      logo: "/logos/west-indies-masters.svg",
      playerImage: "/captain/01.png",
      bgColor:
        "bg-gradient-to-l from-[#A3383D] via-[#E4BE2F]-20%",
    },
    matchDetails: {
      date: "March 08, 2025",
      time: "19:30 IST",
      venue: "Raipur",
    },
  },
];

export function ScheduleSection() {
  return (
    <section className="relative w-full bg-background md:pt-24 pt-0 pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="md:mb-12 mb-20">
          <h2 className="md:text-[5rem] text-[3rem] text-white outline-text text-center">
            Coming Soon...
          </h2>
        </div>

        {/* desktop version */}
        <div className="relative max-w-5xl mx-auto hidden md:block">
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
                    <div className="grid grid-cols-2 gap-12 items-center justify-center h-full">
                      <div className="space-y-2">
                        <div className="flex items-center justify-center gap-3 text-foreground/90">
                          <span className="text-lg">
                            {match.matchDetails.date}
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-3 text-white/90">
                          <span className="text-lg">
                            {match.matchDetails.time}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-2 text-foreground">
                          <div className="flex items-center justify-center gap-2 text-lg">
                            <span>Are you ready?</span>
                          </div>
                          <Button variant="brand" size="lg" className="">
                          <Link href="#contact" className="flex items-center justify-center gap-2">
                            <CalendarDays />
                              Book Now
                          </Link>
                          </Button>
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

        {/* mobile version */}
        <div className="w-full mx-auto md:hidden">
          <div className="flex flex-col gap-4">
            {matches.map((match) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full group cursor-pointer "
              >
                {/* Base Card */}
                <div className="w-full h-full flex flex-col gap-4 items-center">
                  {/* Team 1 */}
                  <div
                    className={`flex justify-between w-full h-full ${match.team1.bgColor} transition-all duration-500 rounded-t-md py-2`}
                  >
                    <div className="aspect-square flex items-center justify-center">
                      <Image
                        src={match.team1.playerImage}
                        alt={`${match.team1.name} Player`}
                        className="object-cover object-center w-32 h-32"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="aspect-square flex items-center justify-center">
                      <Image
                        src={match.team1.logo}
                        alt={match.team1.name}
                        width={100}
                        height={100}
                        className="object-contain w-32 h-32"
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
                    className={`flex justify-between w-full h-full ${match.team2.bgColor} transition-all duration-500 rounded-t-md`}
                  >
                    <div className="aspect-square">
                      <Image
                        src={match.team2.playerImage}
                        alt={`${match.team2.name} Player`}
                        className="object-cover object-center w-40 h-40"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="aspect-square flex items-center justify-center">
                      <Image
                        src={match.team2.logo}
                        alt={match.team2.name}
                        width={100}
                        height={100}
                        className="object-contain w-32 h-32"
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Content */}
             
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
