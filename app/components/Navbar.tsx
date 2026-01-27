"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3 shadow-neon" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide text-purple-300">
          Devansh
        </h1>

        <div className="hidden md:flex gap-8 text-sm">
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#achievements">Achievements</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
