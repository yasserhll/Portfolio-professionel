"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react"

export function Contact() {
  const whatsappNumber = "212622401017"
  const phoneNumber = "+212622401017"

  return (
    <section id="contact" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">
              Travaillons <br /> <span className="text-primary">Ensemble</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Que ce soit pour un nouveau projet, une opportunité d'emploi ou simplement pour discuter tech, n'hésitez
              pas à me contacter.
            </p>

            <div className="space-y-6">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase font-bold tracking-widest">Appel Direct</p>
                  <p className="text-lg font-bold">06 22 40 10 17</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-accent/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase font-bold tracking-widest">WhatsApp</p>
                  <p className="text-lg font-bold">Démarrer une discussion</p>
                </div>
              </a>

              <a
                href="mailto:hallajiyassir@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase font-bold tracking-widest">Email</p>
                  <p className="text-lg font-bold">hallajiyassir@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-border/50">
                <div className="p-3 rounded-lg bg-muted text-muted-foreground">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase font-bold tracking-widest">Localisation</p>
                  <p className="text-lg font-bold">Marrakech-Safi, Maroc</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-background border-border/50 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nom Complet</label>
                  <Input placeholder="Votre nom" className="bg-muted/50 border-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="votre@email.com" className="bg-muted/50 border-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Objet</label>
                <Input placeholder="Sujet de votre message" className="bg-muted/50 border-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Comment puis-je vous aider ?"
                  className="min-h-[150px] bg-muted/50 border-none"
                />
              </div>
              <Button size="lg" className="w-full rounded-full">
                Envoyer le Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
