"use client";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { cn } from "@/lib/utils";
import React from "react";

export function ScrollBasedVelocityDemo() {
  return (
    <div className="w-full pb-2">
      <div>
        <div className="w-full mx-auto">
          <div
            className={cn(
              "rounded-xl w-full ",
              "flex items-center justify-center"
            )}
          >
            <VelocityScroll
              text="Media centre ✨ Media centre ✨ Media centre ✨ Media centre ✨"
              default_velocity={3}
              className="font-display uppercase text-center text-[8vw] font-bold tracking-[-0.02em] text-black drop-shadow-sm leading-[10rem]  dark:text-white pointer-events-auto"
            />
          </div>
        </div>
      </div>

      <div aria-hidden="true" />
    </div>
  );
}
