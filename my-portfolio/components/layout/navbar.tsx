"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Terminal, Github } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-zinc-200/50 bg-white/70 backdrop-blur-xl dark:border-zinc-800/40 dark:bg-[#0a0a0a]/70 transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            href="/"
            className="group flex items-center gap-3 active:scale-95 transition-transform"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 dark:bg-zinc-50 transition-all duration-300 group-hover:rotate-12">
              <Terminal className="h-4 w-4 text-zinc-50 dark:text-zinc-900" />
              <div className="absolute inset-0 rounded-xl bg-emerald-500 opacity-0 blur-md transition-opacity group-hover:opacity-30" />
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tighter text-zinc-900 dark:text-zinc-100 leading-none">
                THUAN.VN
              </span>
              <span className="text-[9px] font-bold text-emerald-500 tracking-[0.2em] uppercase leading-none mt-1">
                Backend Engineer
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-8">
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            <li>
              <a
                href="/#projects"
                className="relative transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 group/link"
              >
                Projects
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-emerald-500 transition-all group-hover/link:w-full" />
              </a>
            </li>
            <li>
              <a
                href="/#techstack"
                className="relative transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 group/link"
              >
                Tech Stack
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-emerald-500 transition-all group-hover/link:w-full" />
              </a>
            </li>
            <li>
              <a
                href="/#about"
                className="relative transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 group/link"
              >
                About
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-emerald-500 transition-all group-hover/link:w-full" />
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-3 pl-4 border-l border-zinc-200 dark:border-zinc-800">
            {/* Social Link - Github */}
            <a
              href="https://github.com/thuanvu301103"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <Github className="h-4 w-4" />
            </a>

            <ThemeToggle />

            {/* Mobile Menu Indicator */}
            <button className="md:hidden flex flex-col gap-1.5 px-2 group">
              <div className="h-[2px] w-5 bg-zinc-900 dark:bg-zinc-100 transition-all group-hover:w-3" />
              <div className="h-[2px] w-3 bg-zinc-900 dark:bg-zinc-100 self-end transition-all group-hover:w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
