"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaYoutube,
  FaDatabase,
  FaRocket,
  FaArrowRight,
  FaDollarSign,
  FaGlobeAsia,
} from "react-icons/fa";

const projects = [
  {
    title: "Gopher Pay",
    tagline: "High-Throughput Payment Engine",
    description:
      "Architected a distributed payment infrastructure with a focus on strict atomicity and high availability.",
    tech: ["Golang", "Kafka", "Redis", "Postgres"],
    challenge:
      "Handling massive concurrent bursts while ensuring zero message loss.",
    links: { github: "https://github.com/thuanvu301103/GopherPay" },
    icon: <FaDollarSign className="text-green-500" />,
  },
  {
    title: "PromptLib",
    tagline: "AI Operations Platform",
    description:
      "A centralized suite for engineering, versioning, and deploying complex AI prompt templates.",
    tech: ["NestJS", "NextJS", "MongoDB", "Docker"],
    image: "/assets/projects/PromptLib Project.gif",
    challenge: "Optimizing NoSQL schemas for efficient metadata filtering.",
    links: {
      github: "https://github.com/thuanvu301103/PromptLib",
      youtube: "https://youtu.be/NZ8I06xu3vk?si=7Pp23RRadNaR9Q7k",
    },
    icon: <FaRocket className="text-cyan-500" />,
  },
  {
    title: "National Digital Twin 15",
    tagline: "Digital Twin",
    description:
      "Next‑generation national digital twin platform designed to comprehensively replicate Vietnam’s entire territorial",
    tech: ["FastAPI", "NestJS", "Clickhouse", "PostgreSQL"],
    image: "/assets/projects/National Digital Twin 15 Project.jpg",
    challenge: "Building effetive data pipline and Optimizing database query",
    links: {
      link: "https://ctgroupvietnam.com/national-digital-twin-15-ndt-15/",
    },
    icon: <FaGlobeAsia className="text-blue-400" />,
  },
  {
    title: "Bank Search",
    tagline: "Financial Indexing",
    description:
      "Custom search algorithms designed to process and index large-scale financial datasets.",
    tech: ["NestJS", "Search Algorithms", "Postgres"],
    metrics: "60% Faster",
    challenge:
      "Overcoming linear query limitations in massive transaction records.",
    links: {
      github: "https://hub.docker.com/u/thuanvu301103/bank-statement-app",
      demo: "#",
    },
    icon: <FaDatabase className="text-purple-500" />,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="px-8 md:px-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            FEATURED <span className="text-emerald-500">PROJECTS.</span>
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-[0.2em]">
            Backend Architecture & Distributed Systems
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-6 px-8 md:px-16 pb-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="flex-none w-[300px] md:w-[380px] snap-start"
          >
            <div className="h-[520px] flex flex-col p-8 rounded-[32px] border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/20 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/5">
              {/* Header: Icon & Metric */}
              <div className="flex justify-between items-center mb-8">
                <div className="text-xl text-zinc-400">{project.icon}</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                  {project.title}
                </h3>
              </div>

              {/* Body */}
              <div className="flex-1">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-4">
                  {project.tagline}
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Challenge - Smaller & Discreet */}
                <div className="mt-6 p-4 rounded-xl bg-white/50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800">
                  <p className="text-[10px] text-zinc-400 leading-normal italic">
                    <span className="font-black not-italic text-zinc-900 dark:text-zinc-200 mr-1 uppercase">
                      Challenge:
                    </span>
                    {project.challenge}
                  </p>
                </div>
              </div>

              {/* Image */}
              {project.image && (
                <div className="flex justify-center w-full p-6">
                  <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-zinc-950/60 backdrop-blur-md rounded-md text-[8px] font-black text-white uppercase tracking-widest">
                      {project.metrics}
                    </div>
                  </div>
                </div>
              )}

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-[9px] font-bold text-zinc-500 dark:text-zinc-400 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer Links */}
              <div className="flex gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
                {project.links.youtube && (
                  <a
                    href={project.links.youtube}
                    className="text-zinc-400 hover:text-emerald-500 transition-colors"
                  >
                    <FaYoutube size={16} />
                  </a>
                )}
                {project.links.link && (
                  <a
                    href={project.links.link}
                    className="text-zinc-400 hover:text-emerald-500 transition-colors"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Archive Link Card */}
        <motion.div className="flex-none w-[200px] snap-start">
          <a
            href="/projects"
            className="h-[520px] flex flex-col items-center justify-center rounded-[32px] border border-dashed border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center mb-3 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              <FaArrowRight size={14} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
              Full Archive
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
