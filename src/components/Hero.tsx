import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Clean dark background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block mb-8 px-4 py-2 rounded-full glass border border-cyan-500/30"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent text-sm tracking-wide">
              Available for Freelance
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 leading-[1.1]">
            <span className="block text-white">Frontend Engineer — </span>
            <span className="block mt-3 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              I build high-performance, interactive React products
            </span>
            <span className="block text-white/90">
              that feel fast, polished, and intuitive.
            </span>
          </h1>

          <p className="text-lg text-white/60 mb-12 max-w-xl leading-relaxed">
            Crafting pixel-perfect interfaces with React, TypeScript, and smooth motion — 
            built for real users and real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-2xl text-white font-medium inline-flex items-center gap-2 justify-center transition-all hover:shadow-[0_0_40px_rgba(0,240,255,0.3)]"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-2xl text-white font-medium inline-flex items-center gap-2 justify-center border-2 border-white/20 hover:border-cyan-400/50 transition-all"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Floating Gradient Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative hidden lg:flex items-center justify-center h-[600px]"
        >
          {/* Main glowing orb - animation ready */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[400px] h-[400px]"
          >
            {/* Core gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-violet-500/30 to-violet-600/20 rounded-full blur-[80px]" />
            
            {/* Secondary glow layer */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-8 bg-gradient-to-tr from-violet-400/40 to-cyan-400/40 rounded-full blur-[60px]"
            />
          </motion.div>

          {/* Floating accent elements - animation ready */}
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-20 w-32 h-32 bg-cyan-400/10 rounded-full blur-[40px]"
          />
          
          <motion.div
            animate={{
              y: [0, -25, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-24 left-16 w-40 h-40 bg-violet-500/10 rounded-full blur-[50px]"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-gradient-to-b from-cyan-400 to-violet-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}