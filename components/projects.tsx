"use client"

import { motion } from "framer-motion"
import { Building2, Layers } from "lucide-react"

const projects = [
  {
    title: "Système de gestion de soutage",
    company: "OCP Group",
    category: "Full-Stack Application",
    tech: ["React.js", "Laravel", "MySQL"],
  },
  {
    title: "Application de gestion des emplois du temps",
    company: "AdSpace",
    category: "Internal Tool",
    tech: ["React.js", "Express.js", "Node.js", "MongoDB"],
  },
  {
    title: "Optimisation et maintenance de la plateforme principale",
    company: "Cnexia",
    category: "Web Evolution",
    tech: ["Node.js", "Laravel", "MySQL", "REST API"],
  },
  {
    title: "Système d'organisation footballistique",
    company: "Freelance / Personal Project",
    category: "Web App",
    tech: ["React.js", "Express.js", "MongoDB"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-6xl font-black mb-16 italic uppercase tracking-tighter">
          Projets <span className="text-primary">Majeurs</span>
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 border-l-2 border-primary/20 hover:border-primary transition-colors pb-8 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/10" />

              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <span className="hidden md:block text-muted-foreground">•</span>
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
                  <Building2 className="w-4 h-4" />
                  {project.company}
                </div>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground text-sm font-medium mb-6">
                <div className="flex items-center gap-1">
                  <Layers className="w-4 h-4" />
                  {project.category}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-muted text-xs font-mono border border-border/50 uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
