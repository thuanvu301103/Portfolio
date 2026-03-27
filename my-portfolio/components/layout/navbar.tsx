"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Terminal, Github, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Certification", href: "#cert" },
    { name: "Knowledge Archive", href: "#knowledge" },
    { name: "Career Path", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[110] border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl dark:border-zinc-800/40 dark:bg-[#0a0a0a]/80 transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 z-[120]">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 dark:bg-zinc-50">
              <Terminal className="h-4 w-4 text-zinc-50 dark:text-zinc-900" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-zinc-900 dark:text-zinc-100">
                THUAN.VN
              </span>
              <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">
                Backend Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/thuanvu301103"
                  className="flex items-center gap-2 hover:text-emerald-500"
                >
                  <Github className="h-4 w-4" /> GITHUB
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-3 pl-4 border-l border-zinc-200 dark:border-zinc-800">
              <ThemeToggle />

              {/* Mobile Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-zinc-900 dark:text-zinc-100 z-[120]"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-[100%] left-0 right-0 b-10 bg-white dark:bg-[#0a0a0a] border-b border-zinc-200 dark:border-zinc-800 shadow-xl md:hidden"
              style={{ pointerEvents: "auto" }} // Force pointer events
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 py-2 border-b border-zinc-100 dark:border-zinc-900 last:border-0 block w-full"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://github.com/thuanvu301103"
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 py-2 border-b border-zinc-100 dark:border-zinc-900 last:border-0 block w-full"
                >
                  <Github className="h-4 w-4" /> GITHUB
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Backdrop to close menu when clicking outside */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[105] md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};
