"use client"

import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    title: "Diplôme en Développement Digital",
    institution: "OFPPT, Maroc",
    period: "2022 – 2025",
  },
  {
    title: "Baccalauréat",
    institution: "Lycée Chahid Saleh Serghini, Maroc",
    period: "2022",
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-6xl font-black mb-16 italic uppercase tracking-tighter text-right">
          Formation <span className="text-primary">& Diplômes</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{edu.title}</h3>
              <p className="text-primary font-medium mb-4">{edu.institution}</p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
                <Calendar className="w-4 h-4" />
                {edu.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
