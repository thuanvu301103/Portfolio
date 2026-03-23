"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming Languages",
    items: ["Go", "Python", "TypeScript"],
    color: "text-blue-500",
  },
  {
    category: "Frameworks & ORM",
    items: [
      "GIN",
      "Nest.JS",
      "FastAPI",
      "Django",
      "GORM",
      "TypeORM",
      "SQLAlchemy",
    ],
    color: "text-emerald-500",
  },
  {
    category: "Database & Storage",
    items: ["PostgreSQL", "Redis", "MongoDB", "Clickhouse", "MinIO"],
    color: "text-purple-500",
  },
  {
    category: "DevOps & Infrastructure",
    items: [
      "Docker",
      "GitLab CI/CD",
      "GitHub Actions",
      "OpenTelemetry",
      "GCP",
      "Linux",
    ],
    color: "text-orange-500",
  },
  {
    category: "Testing",
    items: ["Testify", "Pytest", "Jest", "k6"],
    color: "text-rose-500",
  },
  {
    category: "Others",
    items: ["Kafka", "Novu"],
    color: "text-amber-500",
  },
];

export const TechStack = () => {
  return (
    <section className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Title Side */}
        <div className="md:col-span-3 p-8 md:p-16 border-r border-zinc-200 dark:border-zinc-800 flex flex-col justify-between bg-zinc-50/30 dark:bg-zinc-900/10">
          <div>
            <h2 className="text-4xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50">
              CORE <br /> STACK.
            </h2>
            <div className="h-1 w-12 bg-emerald-500 mt-4" />
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mt-8">
            Technical Proficiency <br /> & Tooling
          </p>
        </div>

        {/* Skills Grid Side */}
        <div className="md:col-span-9 p-8 md:p-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3
                  className={`text-xs font-black uppercase tracking-[0.2em] mb-5 flex items-center gap-2 ${skill.color}`}
                >
                  <span className="w-4 h-[1px] bg-current" />
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm font-semibold border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-500 transition-all duration-300 bg-white dark:bg-zinc-900 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
