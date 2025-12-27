"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code2, Database, Layout, Server, Languages } from "lucide-react"

const skills = [
  {
    title: "Front-end",
    icon: <Layout className="w-6 h-6 text-primary" />,
    items: ["React.js", "Redux", "Next.js", "Tailwind CSS", "JavaScript ES6"],
  },
  {
    title: "Back-end",
    icon: <Server className="w-6 h-6 text-accent" />,
    items: ["Laravel", "Node.js", "Express.js", "PHP", "Python"],
  },
  {
    title: "Bases de données",
    icon: <Database className="w-6 h-6 text-primary" />,
    items: ["MongoDB", "MySQL", "PostgreSQL", "REST API"],
  },
  {
    title: "Outils & Méthodes",
    icon: <Code2 className="w-6 h-6 text-accent" />,
    items: ["Git / GitHub", "UML", "Agile", "Microservices"],
  },
]

const languageSkills = [
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Avancé" },
  { name: "Arabe", level: "Maternel" },
]

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter">
            Expertise & <span className="text-primary">Profil</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
            Développeur web passionné spécialisé dans la création d'applications interactives. Maîtrisant les
            technologies modernes comme{" "}
            <span className="text-foreground border-b-2 border-primary/30">JavaScript, React.js, Laravel et C</span>, je
            conçois des interfaces intuitives et performantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-background border-border/50 hover:border-primary/50 transition-colors group">
                <div className="mb-4 p-3 rounded-lg bg-muted inline-block group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Languages className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold italic uppercase tracking-tight">Langues</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {languageSkills.map((lang) => (
              <div
                key={lang.name}
                className="px-6 py-4 rounded-2xl bg-background border border-border/50 flex flex-col items-center min-w-[140px] hover:border-primary/40 transition-colors"
              >
                <span className="text-lg font-bold">{lang.name}</span>
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
