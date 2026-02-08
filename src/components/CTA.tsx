import { motion } from "motion/react";
import { Mail, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative py-40 px-6 overflow-hidden">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-violet-600/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 leading-tight">
              <span className="block text-white">Let's build something</span>
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                exceptional.
              </span>
            </h2>

            <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Let's discuss how we can work together to bring
              your vision to life with cutting-edge technology and beautiful design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:hello@example.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-2xl text-white font-medium inline-flex items-center gap-3 justify-center transition-all hover:shadow-[0_0_60px_rgba(0,240,255,0.4)]"
              >
                <Mail className="w-5 h-5" />
                <span>Email Me</span>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group px-10 py-5 rounded-2xl text-white font-medium inline-flex items-center gap-3 justify-center border-2 border-white/20 hover:border-violet-400/50 transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Call</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 pt-12 border-t border-white/10"
          >
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-2">
                  24h
                </div>
                <div className="text-sm text-white/40">Response Time</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-sm text-white/40">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-2">
                  5+
                </div>
                <div className="text-sm text-white/40">Years Exp</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}