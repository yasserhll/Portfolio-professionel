"use client"

import { motion } from "framer-motion"
import { Building2, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "Cnexia",
    role: "Stagiaire Développeur Back-End",
    period: "6 mois",
    description:
      "Contribution à l'évolution et à la maintenance corrective de la plateforme logicielle principale de l'entreprise, optimisation des performances et développement de nouvelles fonctionnalités back-end.",
    tech: ["Node.js", "Laravel", "MySQL", "MongoDB", "Git"],
  },
  {
    company: "AdSpace",
    role: "Stage Développeur",
    period: "4 mois",
    description:
      "Développement d'un système complet de gestion des emplois du temps et création de plateformes dynamiques utilisant les technologies web modernes.",
    tech: ["React.js", "Redux", "REST API", "MongoDB", "Node.js"],
  },
  {
    company: "OCP Group",
    role: "Stage Développeur Web",
    period: "2 mois",
    description: "Développement d'une application web pour simplifier la gestion de la partie de soutage.",
    tech: ["React.js", "Laravel", "MySQL"],
  },
  {
    company: "Freelance",
    role: "Développeur Web",
    period: "Indépendant",
    description: "Création de sites e-commerce personnalisés et d'interfaces utilisateur fluides pour divers clients.",
    tech: ["React.js", "Express.js", "Laravel", "Postman"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-6xl font-black mb-16 italic uppercase tracking-tighter">
          Parcours <span className="text-primary">Professionnel</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
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
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <span className="hidden md:block text-muted-foreground">•</span>
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
                  <Building2 className="w-4 h-4" />
                  {exp.company}
                </div>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground text-sm font-medium mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Maroc
                </div>
              </div>

              <p className="text-lg text-muted-foreground max-w-4xl mb-6 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
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
