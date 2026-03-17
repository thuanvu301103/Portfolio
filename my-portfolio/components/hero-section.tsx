"use client";

import React from "react";
import { motion } from "framer-motion";
import { CatSystemCore } from "./interactive-cat";

export const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 min-h-[60vh] items-stretch border-b border-zinc-200 dark:border-zinc-800">
      <div className="md:col-span-7 flex flex-col justify-center p-8 md:p-16 border-r border-zinc-200 dark:border-zinc-800">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
            STARK. <br />
            SILENT. <br />
            {/* Sử dụng gradient đa màu cho chữ "SYSTEMS" */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-sapphire-500 to-amethyst-500">
              SYSTEMS.
            </span>
          </h1>
          <p className="max-w-md text-lg text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
            Building robust backend architectures with the precision of a
            predator in the night. Specialized in Go, Kafka, and
            High-Concurrency.
          </p>

          <div className="mt-12 flex items-center gap-4">
            {/* Icon Scroll sử dụng màu đa dạng */}
            <div className="w-12 h-12 bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center rounded-sm">
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-emerald-500" />
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-sapphire-500 absolute mt-4" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 dark:from-zinc-100 dark:via-zinc-400 dark:to-zinc-100">
              Scroll to explore
            </span>
          </div>
        </motion.div>
      </div>

      <div className="md:col-span-5 border-l border-zinc-200 dark:border-zinc-800">
        <CatSystemCore />
      </div>
    </section>
  );
};
