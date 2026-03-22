"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Terminal } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-24 border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          {/* Column 1: Brand & Call to Action */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 dark:bg-zinc-50 transition-transform hover:rotate-12">
                <Terminal className="h-5 w-5 text-zinc-50 dark:text-zinc-900" />
              </div>
              <span className="text-xl font-black tracking-tighter text-zinc-900 dark:text-zinc-100 uppercase">
                Thuan<span className="text-emerald-500">.vn</span>
              </span>
            </div>

            <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-none text-zinc-900 dark:text-zinc-100">
              LET'S BUILD THE <br />
              <span className="dark:text-emerald-500">FUTURE</span> TOGETHER.
            </h3>

            <p className="max-w-md text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
              Software Engineer specializing in scalable backend architectures
              and distributed systems. Currently exploring the intersection of
              AI and Digital Twins.
            </p>
          </div>

          {/* Column 2: Links & Social */}
          <div className="flex flex-col md:items-end gap-8">
            <div className="flex gap-4">
              {[
                {
                  icon: <Github size={20} />,
                  href: "https://github.com/thuanvu301103",
                },
                {
                  icon: <Linkedin size={20} />,
                  href: "https://linkedin.com/in/ngocthuanvu301103",
                },
                {
                  icon: <Mail size={20} />,
                  href: "mailto:vungocthuan1234@gmail.com",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="p-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-emerald-500 hover:text-emerald-500 dark:hover:border-emerald-500 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <nav>
              <ul className="flex flex-wrap gap-x-8 gap-y-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                <li>
                  <a
                    href="#about"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#knowledge"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Knowledge Archive
                  </a>
                </li>
                <li>
                  <a
                    href="#cert"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Certification
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-20 pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
            © {currentYear} — Designed & Built by Vu Ngoc Thuan
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-900 dark:text-zinc-100"
          >
            Back to top
            <div className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 -z-10 h-64 w-64 bg-emerald-500/5 blur-[120px] rounded-full" />
    </footer>
  );
};
