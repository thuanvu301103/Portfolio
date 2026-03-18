"use client";

import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-200 dark:border-zinc-800">
      {/* Education & Info Side */}
      <div className="md:col-span-5 p-8 md:p-16 bg-zinc-50/50 dark:bg-zinc-900/20 border-r border-zinc-200 dark:border-zinc-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-500 mb-6">
            Education
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                B.S. Computer Science
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                Ho Chi Minh City University of Technology (HCMUT)
              </p>
              <p className="text-sm mt-1 text-emerald-600 dark:text-emerald-400 font-bold">
                GPA: 3.7 / 4.0
              </p>
            </div>
          </div>

          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-500 mt-12 mb-6">
            Core Expertise
          </h3>
          <ul className="space-y-3">
            {[
              "Microservices Architecture",
              "Event-Driven Systems",
              "High-Concurrency",
              "System Optimization",
            ].map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 font-semibold"
              >
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Professional Summary Side */}
      <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 text-zinc-950 dark:text-zinc-50">
            ENGINEERING <br />
            WITH <span className="text-emerald-500">PURPOSE.</span>
          </h2>
          <div className="space-y-6 text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
            <p>
              I am a backend engineer dedicated to building resilient,
              high-throughput systems that solve complex architectural
              challenges. My journey is defined by a passion for technical
              excellence and a commitment to scalable design.
            </p>
            <p>
              My philosophy centers on clean code and deep-level optimization. I
              believe that true performance isn't just about speed, but about
              the reliability and maintainability of distributed systems under
              extreme load.
            </p>
            <p>
              Whether it’s architecting event-driven pipelines or fine-tuning
              database latency, I thrive on transforming intricate requirements
              into elegant, efficient backend reality.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
