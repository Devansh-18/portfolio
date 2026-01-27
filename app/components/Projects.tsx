"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Attendance App",
    desc: "GPS-based attendance with Face Recognition, Azure backend, role-based access & analytics dashboard.",
    tech: "React, Redux, Node.js, Azure, MongoDB",
  },
  {
    title: "Video Chat Application",
    desc: "Real-time WebRTC video chat with messaging, low latency, peer-to-peer signaling.",
    tech: "React, WebRTC, Socket.io, Node.js",
  },
  {
    title: "AI-Powered Quiz App",
    desc: "Next.js quiz generator using Google Gemini API with analytics & instant scoring.",
    tech: "Next.js, Prisma, PostgreSQL, Gemini API",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center text-purple-300 mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="glass p-6 rounded-2xl hover:shadow-neon transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <h3 className="text-xl font-semibold text-purple-300">{p.title}</h3>
            <p className="text-gray-300 mt-3">{p.desc}</p>
            <p className="text-sm mt-3 text-purple-400">{p.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
