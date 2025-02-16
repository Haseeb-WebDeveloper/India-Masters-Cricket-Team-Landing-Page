"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { cn, scrollToSection } from "@/lib/utils";
import Link from "next/link";

const navLinks = [
  { href: "about", label: "ABOUT" },
  { href: "team", label: "TEAM" },
  { href: "media", label: "MEDIA" },
  { href: "tickets", label: "TICKETS" },
  { href: "owners", label: "OWNERS" },
  { href: "contact", label: "CONTACT" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the header
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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 mx-auto px-4 py-6 md:py-12 max-w-[1180px] md:px-6"
    >
      <div className="relative mx-auto px-4 py-3 md:py-5 md:px-12">
        {/* Header Background with Border */}
        <div className="absolute inset-0 rounded-full border border-yellow-500 bg-background" />

        <div className="relative flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="nav-link md:hidden text-foreground/90 hover:text-foreground z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={cn(
                "w-6 h-6 transition-transform duration-300",
                isMenuOpen && "rotate-90"
              )}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>

          {/* Left Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.slice(0, 3).map((link, index) => (
              <div key={link.href} className="flex items-center">
                <Link
                  href={`#${link.href}`}
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

          {/* Logo */}
          <div
            ref={logoRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block"
          >
            <div className="relative h-36 w-36 mt-4">
              {/* Enhanced logo glow effect */}
              <div className="absolute inset-0 animate-pulse rounded-full bg-blue-400/20 blur-xl" />

              <Image
                src="/logo.png"
                alt="India Champions Logo"
                width={105}
                height={105}
                className="relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                priority
              />
            </div>
          </div>

          {/* Mobile Logo */}
          <div className="md:hidden relative h-10 w-10">
            <Image
              src="/logo.png"
              alt="India Champions Logo"
              width={40}
              height={40}
              className="relative z-10"
              priority
            />
          </div>

          {/* Right Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.slice(3).map((link, index) => (
              <div key={link.href} className="flex items-center">
                <Link
                  href={`#${link.href}`}
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
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={cn(
            "fixed inset-0 bg-foreground/98 z-40 flex items-center justify-center transition-all duration-300",
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xl font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
