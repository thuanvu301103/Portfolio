"use client";

import { motion } from "framer-motion";
import { CatSystemCore } from "./interactive-cat";
import { FaLinkedinIn, FaGithub, FaMediumM } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const HeroSection = () => {
  const socialLinks = [
    {
      label: "Email",
      href: "mailto:vungocthuan1234@gmail.com",
      icon: <FiMail />,
      bgColor: "bg-red-100 dark:bg-red-950/30",
      textColor: "text-red-700 dark:text-red-300",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/ngocthuanvu301103",
      icon: <FaLinkedinIn />,
      bgColor: "bg-sky-100 dark:bg-sky-950/30",
      textColor: "text-sky-700 dark:text-sky-300",
    },
    {
      label: "GitHub",
      href: "https://github.com/thuanvu301103",
      icon: <FaGithub />,
      bgColor: "bg-zinc-100 dark:bg-zinc-800/50",
      textColor: "text-zinc-900 dark:text-zinc-100",
    },
    {
      label: "Medium",
      href: "https://medium.com/@vungocthuan1234",
      icon: <FaMediumM />,
      bgColor: "bg-teal-100 dark:bg-teal-950/30",
      textColor: "text-teal-700 dark:text-teal-300",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 min-h-[60vh] items-stretch border-b border-zinc-200 dark:border-zinc-800">
      {/** Right coulmn */}
      <div className="md:col-span-7 flex flex-col justify-center p-8 md:p-16 border-r border-zinc-200 dark:border-zinc-800">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-zinc-950 dark:text-zinc-50">
            ARCHITECT. <br />
            OPTIMIZE. <br />
            <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              SYSTEMS.
            </span>
          </h1>
          <p className="max-w-md text-lg text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
            I am <span className="font-bold">Vu Ngoc Thuan</span>, a Software
            Engineer specializing in scalable backend architectures and
            distributed systems. Architecting high-performance solutions.
          </p>

          {/** Colored, Rounded Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-6 mt-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest ${link.bgColor} ${link.textColor} hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md`}
              >
                <span className="text-base">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute w-full h-full border-t-2 border-r-2 border-emerald-500/30 rounded-full"
              />

              <div className="w-6 h-6 bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              </div>
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 dark:from-zinc-100 dark:via-zinc-400 dark:to-zinc-100">
              Scroll to explore
            </span>
          </div>
        </motion.div>
      </div>

      {/** Left coulmn */}
      <div className="md:col-span-5 border-l border-zinc-200 dark:border-zinc-800">
        <CatSystemCore />
      </div>
    </section>
  );
};
