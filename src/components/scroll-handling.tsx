"use client"

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ScrollHandler() {
    const searchParams = useSearchParams();
  
    useEffect(() => {
      const section = searchParams.get("scrollTo");
      if (section) {
        const element = document.getElementById(section);
        if (element) {
          setTimeout(() => {
            const headerHeight = document.querySelector("header")?.clientHeight || 0;
            const elementTop = element.getBoundingClientRect().top + window.scrollY;
            const offsetTop = elementTop - headerHeight;
  
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
          }, 200);
        }
      }
    }, [searchParams]);
  
    return null;
  }