"use client";

import { Navbar } from "@/components/layout/navbar";
import { motion } from "framer-motion";

const allProjects = [
  {
    year: "2026",
    title: "Gopher Pay",
    stack: ["Go", "Kafka", "Redis"],
    link: "#",
    type: "Fintech",
  },
  {
    year: "2026",
    title: "PromptLib",
    stack: ["NestJS", "MongoDB"],
    link: "#",
    type: "AI Tooling",
  },
  {
    year: "2025",
    title: "National Digital Twin",
    stack: ["FastAPI", "PostgreSQL"],
    link: "#",
    type: "IoT",
  },
  {
    year: "2025",
    title: "Smart Farming Portal",
    stack: ["NestJS", "MLflow"],
    link: "#",
    type: "AgriTech",
  },
  {
    year: "2024",
    title: "Bank Statement Search",
    stack: ["NestJS", "Algorithms"],
    link: "#",
    type: "Data",
  },
];

export default function ProjectsArchive() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        <header className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
            ARCHIVE.
          </h1>
          <p className="text-zinc-500 font-medium">
            A complete list of things I've built.
          </p>
        </header>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-400 text-xs uppercase tracking-widest">
              <th className="py-4 font-black">Year</th>
              <th className="py-4 font-black">Project</th>
              <th className="py-4 hidden md:table-cell font-black">
                Built with
              </th>
              <th className="py-4 text-right font-black">Link</th>
            </tr>
          </thead>
          <tbody>
            {allProjects.map((project, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-zinc-100 dark:border-zinc-900 group hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
              >
                <td className="py-6 text-sm font-mono text-zinc-400">
                  {project.year}
                </td>
                <td className="py-6 font-bold text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </td>
                <td className="py-6 hidden md:table-cell">
                  <div className="flex gap-2">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-500"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-6 text-right text-emerald-500 font-bold text-sm">
                  <a
                    href={project.link}
                    className="hover:underline flex items-center justify-end gap-2"
                  >
                    External <span className="text-xs">↗</span>
                  </a>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
