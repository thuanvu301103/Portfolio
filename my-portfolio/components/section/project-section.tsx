"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaDocker,
  FaLeaf,
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
    icon: <FaDollarSign className="text-yellow-500" />,
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
    icon: <FaRocket className="text-green-500" />,
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
    title: "Bank Statement Search",
    tagline: "Financial Indexing",
    description:
      "Custom search algorithms designed to process and index large-scale financial datasets.",
    tech: ["NestJS", "Search Algorithms", "Postgres"],
    challenge:
      "Overcoming linear query limitations in massive transaction records.",
    links: {
      github: "https://github.com/thuanvu301103/Bank-statement-Search-website",
      docker:
        "https://hub.docker.com/repository/docker/thuanvu301103/bank-statement-app",
    },
    icon: <FaDatabase className="text-purple-500" />,
  },
  {
    title: "Smart Farming Portal",
    tagline: "Smart Farming",
    description:
      "An intelligent platform leveraging IoT and machine learning to process large-scale agricultural data for smarter farm management.",
    tech: ["NestJS", "MongoDB", "MLFlow", "IoT"],
    challenge:
      "Breaking through linear query limits to handle massive sensor datasets with speed and scalability.",
    links: {
      github: "https://github.com/thuanvu301103/Smart-Farming-Web-portal",
    },
    icon: <FaLeaf className="text-pink-500" />,
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-zinc-950 overflow-hidden"
    >
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

      <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-6 px-8 md:px-16 pb-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="flex-none w-[300px] md:w-[380px] snap-start h-full"
          >
            <div className="group h-[580px] flex flex-col p-8 rounded-[32px] border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/20 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/5">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="text-2xl text-zinc-400 group-hover:text-emerald-500 transition-colors">
                  {project.icon}
                </div>
                <div className="text-right">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider mt-1">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Body Content - flex-1 */}
              <div className="flex-1 flex flex-col gap-4">
                <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">
                  {project.description}
                </p>

                {/* Challenge Section */}
                <div className="p-4 rounded-2xl bg-white/50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800/50">
                  <p className="text-[10px] text-zinc-400 leading-normal italic">
                    <span className="font-black not-italic text-zinc-900 dark:text-zinc-200 mr-1 uppercase">
                      Challenge:
                    </span>
                    {project.challenge}
                  </p>
                </div>

                {/* Image Section - */}
                {project.image && (
                  <div className="relative h-40 w-full mt-2 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.parentElement!.style.display = "none";
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Footer Area - mt-auto */}
              <div className="mt-auto pt-4">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-700/50 text-[9px] font-bold text-zinc-500 dark:text-zinc-400 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
                  <div className="flex gap-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.links.docker && (
                      <a
                        href={project.links.docker}
                        target="_blank"
                        className="text-zinc-400 hover:text-blue-500 transition-colors"
                      >
                        <FaDocker size={18} />
                      </a>
                    )}
                    {project.links.youtube && (
                      <a
                        href={project.links.youtube}
                        target="_blank"
                        className="text-zinc-400 hover:text-red-500 transition-colors"
                      >
                        <FaYoutube size={18} />
                      </a>
                    )}
                    {project.links.link && (
                      <a
                        href={project.links.link}
                        target="_blank"
                        className="text-zinc-400 hover:text-emerald-500 transition-colors"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                  <span className="text-[10px] font-black text-zinc-300 dark:text-zinc-800">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Archive Link Card */}
        <motion.div className="flex-none w-[200px] snap-start">
          <a
            href="/projects"
            className="h-[580px] flex flex-col items-center justify-center rounded-[32px] border-2 border-dashed border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm">
              <FaArrowRight size={16} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-emerald-500 transition-colors">
              Full Archive
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
