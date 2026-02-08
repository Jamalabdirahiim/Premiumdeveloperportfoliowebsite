import { motion } from "motion/react";
import { Code2, Palette, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Modern Frontend",
    subtitle: "React, TypeScript, Performance",
    description:
      "Building scalable, type-safe applications with React and TypeScript. Optimized for speed and maintainability.",
    gradient: "from-cyan-500 to-violet-600",
  },
  {
    icon: Palette,
    title: "Beautiful UI",
    subtitle: "Tailwind, Design Systems",
    description:
      "Creating cohesive design systems and pixel-perfect interfaces using modern CSS frameworks and best practices.",
    gradient: "from-violet-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Animated Experiences",
    subtitle: "Smooth Motion",
    description:
      "Crafting delightful micro-interactions and animations that enhance user experience without sacrificing performance.",
    gradient: "from-violet-500 to-pink-500",
  },
];

export function Services() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            What I Do
          </h2>
          <p className="text-white/50 text-lg max-w-2xl">
            Specialized services to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card - consistent styling */}
              <div className="relative h-full bg-white/[0.03] rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>

                  {/* Subtitle */}
                  <p className="text-sm text-cyan-400/70 mb-4 font-medium">{service.subtitle}</p>

                  {/* Description */}
                  <p className="text-white/50 leading-relaxed">{service.description}</p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}