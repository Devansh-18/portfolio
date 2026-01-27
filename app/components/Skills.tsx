"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js", "React", "Node.js", "Express", "C++", "TypeScript",
  "WebRTC", "Socket.io", "MongoDB", "PostgreSQL", "Docker",
  "Prisma", "Tailwind", "JWT", "AI / ML"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-black/40">
      <h2 className="text-4xl font-bold text-center text-purple-300 mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((s, i) => (
          <motion.div
            key={s}
            className="glass px-6 py-3 rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            {s}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
