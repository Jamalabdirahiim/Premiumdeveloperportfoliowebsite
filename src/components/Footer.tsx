import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Let's connect
            </h3>
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
              Want to build something exceptional? Let's talk.
            </p>

            {/* Email Button */}
            <motion.a
              href="mailto:hello@example.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-2xl text-white font-medium transition-all hover:shadow-[0_0_40px_rgba(0,240,255,0.3)]"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center gap-6 mb-16"
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">Y</span>
              </div>
              <span className="text-white/70 font-medium">YourName</span>
            </div>

            {/* Copyright */}
            <p className="text-white/40 text-sm">
              © 2026 YourName. All rights reserved.
            </p>

            {/* Navigation Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/40 hover:text-cyan-400 transition-colors">
                Home
              </a>
              <a href="#projects" className="text-white/40 hover:text-cyan-400 transition-colors">
                Work
              </a>
              <a href="#contact" className="text-white/40 hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}