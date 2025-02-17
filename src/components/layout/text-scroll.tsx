"use client";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { cn } from "@/lib/utils";
import React from "react";

export function ScrollBasedVelocityDemo() {
  return (
    <div className="w-full pb-4">
      <div>
        <div className="w-full mx-auto">
          <div
            className={cn(
              "rounded-xl w-full",
              "flex items-center justify-center"
            )}
          >
            <VelocityScroll
              text='<span>MEDIA</span><span class="outline-text"> CENTRE </span><span>✨</span>'
              default_velocity={4}
              className="font-display uppercase text-center text-[8vw] font-bold tracking-[-0.02em] text-white drop-shadow-sm leading-[10rem] [&_.outline-text]:text-transparent [&_.outline-text]:[-webkit-text-stroke:1.5px_white]"
            />
          </div>
        </div>
      </div>

      <div aria-hidden="true" />
    </div>
  );
}
