"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Cat } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/50 bg-white/70 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-50">
            <Cat className="h-5 w-5 text-zinc-50 dark:text-zinc-900" />
          </div>
          <span className="text-lg font-bold tracking-tight">Neko.dev</span>
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400 md:flex">
            <li>
              <a
                href="#projects"
                className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
              >
                About
              </a>
            </li>
          </ul>
          <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800" />{" "}
          {/* Divider */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
