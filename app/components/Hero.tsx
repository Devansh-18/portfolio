"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/profile.png"
          alt="Devansh"
          width={160}
          height={160}
          className="rounded-full shadow-neon mx-auto"
        />

        <h1 className="text-5xl font-bold mt-6">
          Hi, I'm <span className="text-purple-400">Devansh Dubey</span>
        </h1>

        <motion.p
          className="text-gray-300 text-lg max-w-2xl mx-auto mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Full-Stack Developer specializing in Next.js, AI-driven applications,
          WebRTC, scalable backend systems & modern UI engineering.
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block mt-8 px-10 py-3 glass rounded-xl shadow-neon text-purple-300 hover:text-white transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
}
