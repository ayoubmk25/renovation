"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Calendar } from "lucide-react"
import { useEffect, useRef } from "react"

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.3),rgba(0,0,0,0))]" />
      </div>

      {/* Animated Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-20 right-20 w-4 h-4 bg-cyan-400/40 rotate-45 animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 left-20 w-6 h-6 bg-purple-400/40 rounded-full animate-bounce" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-40 right-40 w-5 h-5 bg-emerald-400/40 rotate-12 animate-bounce" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <main ref={sectionRef} className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="py-16 text-center px-4">
          <Badge variant="outline" className="mb-4 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000">
            À propos de nous
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-200">
            Flash Services 78
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-400">
            Votre partenaire de confiance pour tous vos projets de rénovation
          </p>
        </section>

        {/* Company Story */}
        <section className="py-16 px-4 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-600">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-gray-300 space-y-4">
              <p>Flash Services 78 est spécialisée dans la rénovation tous corps d'état, basée à Boulogne-Billancourt.</p>
              <p>Avec des années d'expérience, nous avons une réputation solide grâce à notre expertise et notre engagement envers la satisfaction client.</p>
              <p>Notre équipe intervient sur tous types de projets, respectant délais et budgets convenus.</p>
            </div>
            <div>
              <img
                src="/renovation-team-working-on-house-project.jpg"
                alt="Équipe Flash Services 78"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000">
            <h2 className="text-3xl font-bold mb-4 text-white">Nos Valeurs</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <CheckCircle className="h-12 w-12 text-cyan-400 mx-auto mb-4" />, title: "Qualité", desc: "Nous utilisons uniquement des matériaux de qualité et appliquons les meilleures techniques." },
              { icon: <Users className="h-12 w-12 text-cyan-400 mx-auto mb-4" />, title: "Proximité", desc: "Une relation de confiance avec nos clients basée sur l'écoute et la transparence." },
              { icon: <Calendar className="h-12 w-12 text-cyan-400 mx-auto mb-4" />, title: "Ponctualité", desc: "Respect des délais convenus et disponibilité pour répondre à vos demandes." },
            ].map((value, i) => (
              <Card
                key={i}
                className="relative bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl hover:shadow-4xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden rounded-3xl animate-on-scroll opacity-0 translate-y-12"
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  {value.icon}
                  <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                  <p className="text-gray-300">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 px-4">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000">
            <h2 className="text-3xl font-bold mb-4 text-white">Nos Certifications</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Des garanties professionnelles pour votre tranquillité d'esprit</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["RGE Qualibat","Assurance Décennale","Qualibat","Artisan"].map((cert,i)=>(
              <Card
                key={i}
                className="relative bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl hover:shadow-4xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden rounded-3xl animate-on-scroll opacity-0 translate-y-12"
                style={{ transitionDelay: `${i*200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white">{cert}</h4>
                  <p className="text-sm text-gray-300">
                    {cert === "RGE Qualibat" ? "Reconnu Garant de l'Environnement" :
                     cert === "Assurance Décennale" ? "Garantie 10 ans" :
                     cert === "Qualibat" ? "Qualification professionnelle" :
                     "Savoir-faire traditionnel"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 text-center animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000">
          <h2 className="text-3xl font-bold mb-4 text-white">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl mb-8 text-white/90">Contactez-nous pour un devis gratuit et personnalisé</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0610171105"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Appelez maintenant
            </a>
            <a
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Demander un devis
            </a>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 8s ease-in-out infinite;
        }
        .shadow-4xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        .backdrop-blur-2xl {
          backdrop-filter: blur(40px);
        }
        .animate-on-scroll {
          transition: all 1s ease-out;
        }
      `}</style>
    </div>
  )
}
