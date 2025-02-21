"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useRef } from "react";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com",
  },
  {
    name: "Youtube",
    icon: Youtube,
    href: "https://youtube.com",
  },
];

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <footer
      ref={containerRef}
      className="relative w-full bg-background overflow-hidden"
    >
      {/* Background Effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/5 to-foreground/10"
        style={{ opacity }}
      />

      {/* Main heading with parallax */}
      <div className="container mx-auto px-4 py-20">
        <motion.div className="relative" style={{ y, scale }}>
          {/* Shadow Text */}
          {/* <motion.h2
            className="text-[20vw] font-custom text-center leading-none tracking-tighter text-foreground/[0.02] absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{ y: textY }}
          >
            INDIA MASTERS
          </motion.h2> */}

          {/* Main Text */}
          <motion.h2
            className="text-[12vw] font-custom text-center leading-none tracking-tighter text-foreground/70 relative"
            style={{ y: useTransform(textY, (v) => v * 0.5) }}
          >
            INDIA MASTERS
          </motion.h2>
        </motion.div>
      </div>

      {/* Bottom bar with border */}
      <motion.div
        className="border-t border-border"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.8], [0, 1]) }}
      >
        <div className="container mx-auto px-4">
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <motion.p
              className="text-sm text-foreground/60 order-2 md:order-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              © {new Date().getFullYear()} India Masters. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <div className="flex items-center gap-8 order-1 md:order-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.2,
                    color: "hsl(var(--primary))",
                  }}
                  className="text-foreground/60 transition-colors duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 order-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                  <Link
                    href="https://haseebkhan.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/60 hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  Developer
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
