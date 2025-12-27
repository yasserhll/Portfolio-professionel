"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-12 px-4 overflow-hidden">
      {/* Background Gradient Blurs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-[100px] animate-pulse delay-700" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
          >
            Développeur Web Full-Stack
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
            YASSIR <br /> <span className="text-primary italic">HALLAJI</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Expert en création d'applications web interactives et performantes. Je transforme vos idées en solutions
            numériques robustes avec{" "}
            <span className="text-foreground font-semibold italic underline decoration-primary/40">
              React.js, Laravel et Node.js
            </span>
            .
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8 py-7 text-lg group bg-primary hover:bg-primary/90" asChild>
              <a href="#contact">
                Me contacter
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="w-14 h-14 rounded-full border-border/40 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all"
                asChild
              >
                <a href="https://github.com/yasserhll" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-14 h-14 rounded-full border-border/40 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/yassir-hallaji-1954b6327/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-14 h-14 rounded-full border-border/40 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all"
                asChild
              >
                <a href="mailto:hallajiyassir@gmail.com">
                  <Mail className="w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[4/5] max-w-[450px] mx-auto lg:ml-auto order-1 lg:order-2"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/40 to-accent/40 blur-3xl -rotate-6 scale-95" />
          <div className="relative h-full w-full rounded-3xl overflow-hidden border-2 border-border/30 bg-card shadow-2xl">
            <Image
              src="/images/profil.jpeg"
              alt="Yassir Hallaji"
              fill
              className="object-cover transition-transform hover:scale-105 duration-1000"
              priority
            />
          </div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-background/80 backdrop-blur-xl border border-border shadow-2xl z-20"
          >
            <p className="text-xs text-primary uppercase font-black tracking-[0.2em] mb-1">Localisation</p>
            <p className="text-xl font-bold">Maroc</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
