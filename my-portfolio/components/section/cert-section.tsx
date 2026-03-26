"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  X,
  ExternalLink,
  ShieldCheck,
  Zap,
  Box,
  Image,
} from "lucide-react";
import { certsData } from "@/data/cert-data";

// --- Types ---
interface CertItem {
  title: string;
  date: string;
  issuer: string;
  score?: string;
  skills: string[];
  impact: string;
  verifyUrl?: string;
  image?: string;
}

interface CertGroup {
  id: string;
  category: string;
  count: string;
  icon: React.ReactNode;
  themeColor: string;
  items: CertItem[];
}

const certificationGroups: CertGroup[] = certsData;

export const CertificationSection = () => {
  const [selectedCert, setSelectedCert] = useState<CertItem | null>(null);

  return (
    <section className="mx-2 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 italic-none relative">
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[750px]">
        {/* --- LEFT SIDE: BENTO HEADER --- */}
        <div className="md:col-span-4 p-8 md:p-16 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/10 flex flex-col justify-between overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-emerald-500" />
              <span className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase">
                Certification Archive
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 leading-[0.8] mb-12">
              CORE <br /> <span className="text-emerald-500">ASSETS.</span>
            </h2>
          </motion.div>

          <div className="space-y-6 relative z-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-[24px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <p className="text-3xl font-black text-emerald-500 mb-1">05</p>
                <p className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">
                  Verified Badges
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
        </div>

        {/* --- RIGHT SIDE: SCROLLABLE COLUMNS --- */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 divide-x divide-zinc-100 dark:divide-zinc-900 h-[750px]">
          {certificationGroups.map((group) => (
            <div
              key={group.id}
              className="relative flex flex-col h-full bg-white dark:bg-zinc-950 overflow-hidden"
            >
              <div className="p-8 border-b border-zinc-100 dark:border-zinc-900 z-30 flex items-center justify-between bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl">
                <div className="flex items-center gap-3 font-black text-[10px] uppercase tracking-widest text-zinc-800 dark:text-zinc-200">
                  <span className={`text-${group.themeColor}-500`}>
                    {group.icon}
                  </span>
                  {group.category}
                </div>
                <span className="text-[9px] font-black text-zinc-400">
                  {group.count}
                </span>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar pb-32">
                {group.items.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    onClick={() => setSelectedCert(item)}
                    className="group/card relative p-6 rounded-[32px] border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 hover:bg-white dark:hover:bg-zinc-900 hover:border-emerald-500/30 transition-all duration-500 cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-wrap gap-1">
                        {item.skills.slice(0, 2).map((s) => (
                          <span
                            key={s}
                            className="px-1.5 py-0.5 border border-zinc-200 dark:border-zinc-700 text-[7px] font-black text-zinc-400 rounded-md uppercase"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <span className="text-[8px] font-bold text-zinc-500 dark:text-zinc-600 uppercase">
                        {item.date}
                      </span>
                    </div>
                    <h4 className="text-lg font-black tracking-tight text-zinc-800 dark:text-zinc-100 group-hover/card:text-emerald-500 transition-colors leading-tight mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">
                      {item.issuer}
                    </p>
                    <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/50 flex gap-2">
                      <Zap
                        size={10}
                        className="text-emerald-500 shrink-0 mt-0.5"
                      />
                      <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                        {item.impact}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="absolute bottom-6 right-6 text-zinc-300 opacity-0 group-hover/card:opacity-100 transition-all"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent pointer-events-none z-20" />
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL SYSTEM --- */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-zinc-950/90 backdrop-blur-md"
            />
            <motion.div
              layoutId={selectedCert.title}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-xl bg-white dark:bg-zinc-900 rounded-[40px] overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800"
            >
              <div className="p-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="space-y-1">
                    <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em]">
                      Credential Details
                    </span>
                    <h3 className="text-4xl font-black text-zinc-950 dark:text-zinc-50 tracking-tighter leading-none">
                      {selectedCert.title}
                    </h3>
                    <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px] mt-2">
                      {selectedCert.issuer} — {selectedCert.date}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-full hover:rotate-90 transition-transform"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase text-zinc-400 tracking-widest flex items-center gap-2">
                        <Box size={12} className="text-emerald-500" /> Mastery
                        Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-[10px] font-bold rounded-lg text-zinc-500 dark:text-zinc-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase text-zinc-400 tracking-widest flex items-center gap-2">
                        <Zap size={12} className="text-blue-500" /> Value Impact
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed italic font-medium">
                        "{selectedCert.impact}"
                      </p>
                    </div>
                  </div>

                  {/* LOGIC: IMAGE FROM PUBLIC */}
                  {selectedCert.image && (
                    <div className="aspect-[16/9] bg-zinc-50 dark:bg-zinc-800 rounded-3xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group">
                      <img
                        src={selectedCert.image}
                        alt={selectedCert.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) =>
                          (e.currentTarget.style.display = "none")
                        } // Fallback if wrong path
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent pointer-events-none" />
                    </div>
                  )}
                </div>

                <div className="mt-10 flex justify-end">
                  {/* LOGIC: DISABLE BUTTON IF NO LINK */}
                  {selectedCert.verifyUrl ? (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      className="group px-8 py-4 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl flex items-center gap-3 hover:bg-emerald-500 dark:hover:bg-emerald-500 hover:text-white transition-all shadow-xl shadow-emerald-500/10"
                    >
                      Verify Credential{" "}
                      <ExternalLink
                        size={14}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-8 py-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl flex items-center gap-3 cursor-not-allowed opacity-60"
                    >
                      Verify Unavailable <ShieldCheck size={14} />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
