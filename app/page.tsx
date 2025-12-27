import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Github, Linkedin } from "lucide-react"

export default function PortfolioPage() {
  return (
    <main className="relative bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-6 backdrop-blur-xl bg-background/70 border-b border-border/10">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter">
            YASSIR<span className="text-primary italic">.H</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">
              Expertise
            </a>
            <a href="#experience" className="hover:text-primary transition-colors">
              Parcours
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projets
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/212622401017"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all"
            >
              WhatsApp
            </a>
            <a href="https://github.com/yasserhll" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer border border-primary/20">
                <Github className="w-5 h-5" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/yassir-hallaji-1954b6327/" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer border border-primary/20">
                <Linkedin className="w-5 h-5" />
              </div>
            </a>
          </div>
        </nav>
      </header>

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />

      <footer className="py-16 px-4 border-t border-border/10 text-center">
        <div className="container mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground mb-8">
            © {new Date().getFullYear()} YASSIR HALLAJI — TOUS DROITS RÉSERVÉS
          </p>
          <div className="flex justify-center flex-wrap gap-8 md:gap-16">
            <a
              href="https://github.com/yasserhll"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors mb-2">
                GitHub
              </span>
              <span className="text-sm font-bold">@yasserhll</span>
            </a>
            <a href="tel:+212622401017" className="group flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors mb-2">
                Appel
              </span>
              <span className="text-sm font-bold">06 22 40 10 17</span>
            </a>
            <a href="https://wa.me/212622401017" className="group flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors mb-2">
                WhatsApp
              </span>
              <span className="text-sm font-bold">Message direct</span>
            </a>
            <a href="mailto:hallajiyassir@gmail.com" className="group flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors mb-2">
                Email
              </span>
              <span className="text-sm font-bold">hallajiyassir@gmail.com</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
