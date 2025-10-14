"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, Lightbulb, Thermometer, Clock, Euro, CheckCircle, ArrowRight, Palette } from "lucide-react"

export default function RenovationSalleDeBain() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Droplets,
      title: "Plomberie & Évacuation",
      description: "Installation complète de la plomberie, évacuations et arrivées d'eau",
      features: ["Canalisations neuves", "Évacuation optimisée", "Robinetterie haut de gamme"],
    },
    {
      icon: Lightbulb,
      title: "Éclairage & Électricité",
      description: "Système électrique aux normes avec éclairage design",
      features: ["Spots LED", "Prises étanches", "Éclairage d'ambiance"],
    },
    {
      icon: Thermometer,
      title: "Chauffage & Ventilation",
      description: "Solutions de chauffage et ventilation pour votre confort",
      features: ["Sèche-serviettes", "VMC performante", "Chauffage au sol"],
    },
    {
      icon: Palette,
      title: "Carrelage & Revêtements",
      description: "Pose de carrelage et revêtements muraux de qualité",
      features: ["Carrelage grand format", "Faïence design", "Étanchéité parfaite"],
    },
  ]

  const projects = [
    {
      title: "Salle de bain moderne",
      description: "Rénovation complète avec douche italienne",
      image: "/modern-bathroom-renovation-with-italian-shower.jpg",
      duration: "2 semaines",
      budget: "8 000 - 12 000€",
    },
    {
      title: "Salle de bain familiale",
      description: "Optimisation d'espace avec baignoire et douche",
      image: "/family-bathroom-with-bathtub-and-shower-renovation.jpg",
      duration: "3 semaines",
      budget: "10 000 - 15 000€",
    },
    {
      title: "Salle d'eau compacte",
      description: "Aménagement intelligent d'un petit espace",
      image: "/compact-bathroom-renovation-small-space-optimizati.jpg",
      duration: "1 semaine",
      budget: "5 000 - 8 000€",
    },
  ]

  const process = [
    { step: 1, title: "Diagnostic", description: "Évaluation de l'existant et de vos besoins" },
    { step: 2, title: "Conception", description: "Plans 3D et choix des matériaux" },
    { step: 3, title: "Démolition", description: "Dépose soignée de l'ancien équipement" },
    { step: 4, title: "Gros œuvre", description: "Plomberie, électricité, étanchéité" },
    { step: 5, title: "Finitions", description: "Carrelage, peinture, pose des équipements" },
    { step: 6, title: "Livraison", description: "Nettoyage et mise en service" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Rénovation Salle de Bain</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Transformez votre <span className="text-blue-300">salle de bain</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 text-pretty">
              De la conception à la réalisation, nous créons la salle de bain de vos rêves
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
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une expertise complète pour tous vos travaux de salle de bain
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Réalisations</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos plus belles rénovations de salles de bain
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center text-sm text-slate-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Euro className="h-4 w-4 mr-1" />
                      {project.budget}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Notre Processus</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">6 étapes pour une rénovation réussie</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-8 h-0.5 bg-blue-200 transform -translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à transformer votre salle de bain ?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé
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
    </div>
  )
}
