import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">Y</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
              YourName
            </span>
          </motion.a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-white/90 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-white/70 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              Work
            </a>
            <a
              href="#skills"
              className="text-white/70 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-white/70 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}