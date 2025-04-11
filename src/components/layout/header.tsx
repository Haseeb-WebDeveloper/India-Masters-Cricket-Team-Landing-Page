"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "#team", label: "TEAM" },
  { href: "#media", label: "MEDIA" },
  { href: "#schedule", label: "SCHEDULE" },
  { href: "#ranking", label: "STANDINGS" },
  { href: "/blog", label: "BLOG" },
  { href: "#contact", label: "CONTACT" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  // Use a ref for last scroll position
  const lastScrollY = useRef<number>(typeof window !== "undefined" ? window.scrollY : 0);
  // Set a threshold (in pixels) to avoid tiny changes
  const scrollThreshold = 10;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the header on initial load
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      // Animate the logo
      gsap.from(logoRef.current, {
        y: -50,
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "elastic.out(1, 0.7)",
      });

      // Animate nav links and dividers
      gsap.from(".nav-link", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.5,
        ease: "power2.out",
      });

      gsap.from(".nav-divider", {
        scaleY: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.7,
        ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        gsap.to(menuRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
        });
      } else {
        gsap.to(menuRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isMenuOpen]);

  // Hide header on scroll down and show on scroll up (only on large devices)
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;
    const updateHeader = () => {
      if (window.innerWidth < 1024 || !headerRef.current) return;

      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // If the difference is less than the threshold, do nothing
          if (Math.abs(currentScrollY - lastScrollY.current) < scrollThreshold) {
            ticking = false;
            return;
          }

          if (currentScrollY < lastScrollY.current) {
            // Scrolling up
            headerRef.current!.style.transform = "translateY(0)";
          } else if (currentScrollY > lastScrollY.current) {
            // Scrolling down
            headerRef.current!.style.transform = "translateY(-100%)";
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", updateHeader);
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
  
    if (href === "/blog") {
      router.push(href);
      return;
    }
  
    // If it's a section link like #team, #schedule etc.
    if (href.startsWith("#")) {
      const targetId = href.slice(1);
  
      if (window.location.pathname === "/") {
        // Already on home page – scroll directly
        const element = document.getElementById(targetId);
        if (element) {
          const headerHeight = headerRef.current?.offsetHeight || 0;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerHeight;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      } else {
        // Navigate to home page and pass section info
        router.push(`/?scrollTo=${targetId}`);
      }
      return;
    }
  
    // If it's just "/"
    if (href === "/") {
      router.push("/");
      return;
    }
  };
  

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 mx-auto px-4 py-4 md:py-8 lg:py-12 max-w-[1180px] md:px-6 transition-transform duration-300"
    >
      <div className="relative mx-auto px-3 py-2 md:px-8 md:py-6 z-[1000]">
        {/* Header Background with Border */}
        <div className="absolute inset-0 rounded-full border border-yellow-500/20 bg-background/80 backdrop-blur-sm " />

        <div className="relative flex items-center justify-between px-4 ">
          {/* Mobile Logo - Left Aligned */}
          <div className="md:hidden relative h-12 w-12">
            <img
              src="/logo.png"
              alt="India Champions Logo"
              width={48}
              height={48}
              className="relative z-10"
            />
          </div>

          {/* Mobile Menu Button - Right Aligned */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative p-2 hover:text-primary transition-colors z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.slice(0, 3).map((link, index) => (
              <div key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="nav-link text-sm text-foreground/90 transition-colors hover:text-foreground tracking-wider"
                >
                  {link.label}
                </Link>
                {index < navLinks.slice(0, 3).length - 1 && (
                  <div className="nav-divider h-5 w-[0.5px] bg-foreground/40 ml-6" />
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Logo */}
          <div
            ref={logoRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block"
          >
            <div className="relative h-28 w-28 lg:h-36 lg:w-36 mt-4">
              <div className="absolute inset-0 animate-pulse rounded-full bg-blue-400/20 blur-xl opacity-50" />
              <img
                src="/logo.png"
                alt="India Champions Logo"
                width={105}
                height={105}
                className="relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              />
            </div>
          </div>

          {/* Desktop Right Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.slice(3).map((link, index) => (
              <div key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="nav-link text-sm text-foreground/90 transition-colors hover:text-foreground tracking-wider"
                >
                  {link.label}
                </Link>
                {index < navLinks.slice(3).length - 1 && (
                  <div className="nav-divider h-5 w-[0.5px] bg-foreground/40 ml-6" />
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Overlay */}
          <div
            ref={menuRef}
            className={cn(
              "fixed inset-0 top-0 left-0 z-40 transition-all duration-500 md:hidden",
              isMenuOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            )}
          >
            {/* Menu Content */}
            <nav className="relative h-[100vh] flex flex-col items-center justify-center gap-8 bg-background">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isMenuOpen
                      ? {
                          opacity: 1,
                          y: 0,
                          transition: { delay: index * 0.1 },
                        }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-3xl font-medium text-white tracking-wider hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
