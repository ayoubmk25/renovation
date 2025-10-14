"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Palette, Zap, Droplets, Shield, CheckCircle, ArrowRight, Clock, Euro, Users, Star } from "lucide-react"

export default function RenovationAppartement() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Home,
      title: "Rénovation Complète",
      description: "Transformation totale de votre appartement",
      features: ["Démolition", "Gros œuvre", "Second œuvre", "Finitions"],
    },
    {
      icon: Palette,
      title: "Aménagement Intérieur",
      description: "Optimisation et décoration de vos espaces",
      features: ["Plans 3D", "Choix matériaux", "Mobilier sur mesure", "Décoration"],
    },
    {
      icon: Zap,
      title: "Électricité & Domotique",
      description: "Installation électrique moderne et connectée",
      features: ["Mise aux normes", "Domotique", "Éclairage LED", "Prises USB"],
    },
    {
      icon: Droplets,
      title: "Plomberie & Chauffage",
      description: "Systèmes de plomberie et chauffage performants",
      features: ["Canalisations", "Chauffage central", "Eau chaude", "VMC"],
    },
  ]

  const projects = [
    {
      title: "Appartement Haussmannien",
      description: "Rénovation complète 120m² - Paris 16ème",
      image: "/haussmann-apartment-renovation-paris-luxury-interi.jpg",
      surface: "120m²",
      duration: "3 mois",
      budget: "80 000 - 120 000€",
      rating: 5,
    },
    {
      title: "Studio Moderne",
      description: "Optimisation d'espace 35m² - Boulogne",
      image: "/modern-studio-apartment-renovation-small-space-opt.jpg",
      surface: "35m²",
      duration: "1 mois",
      budget: "25 000 - 35 000€",
      rating: 5,
    },
    {
      title: "Appartement Familial",
      description: "Réaménagement 90m² - Neuilly",
      image: "/family-apartment-renovation-modern-interior-design.jpg",
      surface: "90m²",
      duration: "2 mois",
      budget: "60 000 - 90 000€",
      rating: 5,
    },
  ]

  const advantages = [
    {
      icon: Shield,
      title: "Garantie Décennale",
      description: "Tous nos travaux sont couverts par une garantie décennale",
    },
    {
      icon: Users,
      title: "Équipe Experte",
      description: "Artisans qualifiés et expérimentés dans la rénovation d'appartements",
    },
    {
      icon: Clock,
      title: "Respect des Délais",
      description: "Planning précis et respect des échéances convenues",
    },
    {
      icon: Euro,
      title: "Devis Transparent",
      description: "Prix fixe sans surprise, devis détaillé et transparent",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
      </div>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <main className="relative z-10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Rénovation Appartement</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Rénovez votre <span className="text-blue-300">appartement</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 text-pretty">
              Transformation complète ou partielle, nous donnons vie à vos projets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Voir nos réalisations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-950 via-blue-950 to-purple-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Nos Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une expertise complète pour tous vos projets de rénovation d'appartement
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-gradient-to-br from-indigo-950 via-blue-950 to-purple-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Nos Réalisations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez nos plus belles rénovations d'appartements
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{project.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="grid grid-cols-3 gap-4 text-sm text-slate-500">
                    <div className="text-center">
                      <div className="font-medium text-slate-900">{project.surface}</div>
                      <div>Surface</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-slate-900">{project.duration}</div>
                      <div>Durée</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-slate-900">{project.budget}</div>
                      <div>Budget</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Pourquoi Nous Choisir ?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Les avantages de faire appel à Flash Services 78</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <advantage.icon className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{advantage.title}</h3>
                <p className="text-slate-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Transformons votre appartement ensemble</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/contact" className="flex items-center">
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              06.10.17.11.05
            </Button>
          </div>
        </div>
        </section>
      </main>
    </div>
  )
}
