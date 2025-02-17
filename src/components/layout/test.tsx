"use client";

import { cn } from "@/lib/utils";

type MatchFixture = {
  id: number;
  homeTeam: {
    name: string;
    logo: string;
    playerImage?: string;
  };
  awayTeam: {
    name: string;
    logo: string;
    playerImage?: string;
  };
  backgroundColor: string;
};

const fixtures: MatchFixture[] = [
  {
    id: 1,
    homeTeam: {
      name: "Barcelona",
      logo: "/teams/barcelona.svg",
      playerImage: "/players/barca-player.jpg"
    },
    awayTeam: {
      name: "Real Madrid",
      logo: "/teams/real-madrid.svg",
      playerImage: "/players/madrid-player.jpg"
    },
    backgroundColor: "bg-gradient-to-r from-blue-900 to-blue-600"
  },
  {
    id: 2,
    homeTeam: {
      name: "Ajax",
      logo: "/teams/ajax.svg",
      playerImage: "/players/ajax-player.jpg"
    },
    awayTeam: {
      name: "PSV",
      logo: "/teams/psv.svg",
      playerImage: "/players/psv-player.jpg"
    },
    backgroundColor: "bg-gradient-to-r from-red-900 to-red-600"
  },
  {
    id: 3,
    homeTeam: {
      name: "Manchester United",
      logo: "/teams/man-utd.svg",
      playerImage: "/players/united-player.jpg"
    },
    awayTeam: {
      name: "Liverpool",
      logo: "/teams/liverpool.svg",
      playerImage: "/players/liverpool-player.jpg"
    },
    backgroundColor: "bg-gradient-to-r from-red-900 to-red-600"
  },
  {
    id: 4,
    homeTeam: {
      name: "Marseille",
      logo: "/teams/marseille.svg",
      playerImage: "/players/marseille-player.jpg"
    },
    awayTeam: {
      name: "PSG",
      logo: "/teams/psg.svg",
      playerImage: "/players/psg-player.jpg"
    },
    backgroundColor: "bg-gradient-to-r from-blue-900 to-blue-600"
  },
  {
    id: 5,
    homeTeam: {
      name: "Inter Milan",
      logo: "/teams/inter.svg",
      playerImage: "/players/inter-player.jpg"
    },
    awayTeam: {
      name: "Juventus",
      logo: "/teams/juventus.svg",
      playerImage: "/players/juventus-player.jpg"
    },
    backgroundColor: "bg-gradient-to-r from-blue-950 to-blue-800"
  }
];

export function ScheduleSection() {
  return (
    <section className="relative min-h-screen w-full bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-white">
            Upcoming Matches
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {fixtures.map((match) => (
            <div
              key={match.id}
              className={cn(
                "relative h-24 rounded-lg overflow-hidden",
                "shadow-[0_4px_8px_-2px_rgba(0,0,0,0.3)]"
              )}
            >
              {/* Background */}
              <div className={cn(
                "absolute inset-0",
                match.backgroundColor,
                "opacity-90"
              )} />

              {/* Content */}
              <div className="relative h-full flex items-center justify-between px-8">
                {/* Home Team */}
                <div className="flex items-center gap-6">
                  <div className="relative w-16 h-16">
                    <img
                      src={match.homeTeam.logo}
                      alt={match.homeTeam.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* VS */}
                <div className="text-white text-2xl font-bold">
                  VS
                </div>

                {/* Away Team */}
                <div className="flex items-center gap-6">
                  <div className="relative w-16 h-16">
                    <img
                      src={match.awayTeam.logo}
                      alt={match.awayTeam.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Player Images - Absolute positioned */}
              <div className="absolute top-0 left-0 h-full w-1/4">
                {match.homeTeam.playerImage && (
                  <div className="absolute inset-0">
                    <img
                      src={match.homeTeam.playerImage}
                      alt=""
                      className="h-full w-full object-cover object-center opacity-50"
                    />
                  </div>
                )}
              </div>
              <div className="absolute top-0 right-0 h-full w-1/4">
                {match.awayTeam.playerImage && (
                  <div className="absolute inset-0">
                    <img
                      src={match.awayTeam.playerImage}
                      alt=""
                      className="h-full w-full object-cover object-center opacity-50"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}