import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Analytics Dashboard",
    category: "SAAS PLATFORM",
    description: "Real-time analytics dashboard with interactive charts and data visualization.",
    image: "https://images.unsplash.com/photo-1610913721979-b20ede600e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3MDU0MzMyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "TypeScript", "Recharts"],
    gradient: "from-cyan-500 to-violet-600",
  },
  {
    title: "E-Commerce Store",
    category: "PRODUCT PLATFORM",
    description: "Modern e-commerce platform with seamless checkout and product browsing.",
    image: "https://images.unsplash.com/photo-1760226642567-a5315592c810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjBwcm9kdWN0fGVufDF8fHx8MTc3MDU0MzMyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Next.js", "Tailwind", "Stripe"],
    gradient: "from-violet-500 to-pink-600",
  },
  {
    title: "Animated Landing",
    category: "MARKETING SITE",
    description: "High-conversion landing page with smooth animations and micro-interactions.",
    image: "https://images.unsplash.com/photo-1679934370702-fea767143fb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRlZCUyMGxhbmRpbmclMjBwYWdlfGVufDF8fHx8MTc3MDU0MzMyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Motion", "GSAP"],
    gradient: "from-violet-500 to-pink-500",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-40 px-6 overflow-hidden">
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
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-4">
            Selected Work
          </h2>
          <p className="text-white/50 text-lg max-w-2xl">
            Recent projects showcasing design and development expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative h-full bg-white/[0.03] rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 shadow-lg hover:shadow-2xl">
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#12121a]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/90 via-[#0a0a0f]/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] text-cyan-400/80 font-medium uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs rounded-full bg-white/[0.05] border border-white/10 text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}