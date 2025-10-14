"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Zap, Thermometer, Shield, CheckCircle, ArrowRight, Star, TreePine, Palette } from "lucide-react"

export default function RenovationMaison() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Home,
      title: "Rénovation Complète",
      description: "Transformation totale de votre maison",
      features: ["Gros œuvre", "Second œuvre", "Aménagement", "Finitions"],
    },
    {
      icon: Thermometer,
      title: "Isolation & Chauffage",
      description: "Amélioration de la performance énergétique",
      features: ["Isolation thermique", "Chauffage moderne", "Ventilation", "Économies d'énergie"],
    },
    {
      icon: TreePine,
      title: "Extension & Agrandissement",
      description: "Augmentation de la surface habitable",
      features: ["Extension latérale", "Surélévation", "Véranda", "Aménagement combles"],
    },
    {
      icon: Palette,
      title: "Rénovation Façade",
      description: "Embellissement et protection extérieure",
      features: ["Ravalement", "Isolation extérieure", "Peinture", "Bardage"],
    },
  ]

  const projects = [
    {
      title: "Maison Familiale",
      description: "Rénovation complète 150m² avec extension",
      image: "/family-house-renovation-complete-modern-extension.jpg",
      surface: "150m²",
      duration: "4 mois",
      budget: "120 000 - 180 000€",
      rating: 5,
    },
    {
      title: "Maison de Ville",
      description: "Rénovation énergétique et modernisation",
      image: "/townhouse-renovation-energy-efficiency-modern-inte.jpg",
      surface: "120m²",
      duration: "3 mois",
      budget: "80 000 - 120 000€",
      rating: 5,
    },
    {
      title: "Maison Ancienne",
      description: "Restauration avec respect du patrimoine",
      image: "/old-house-renovation-heritage-restoration-traditio.jpg",
      surface: "200m²",
      duration: "6 mois",
      budget: "150 000 - 250 000€",
      rating: 5,
    },
  ]

  const specialties = [
    {
      icon: Shield,
      title: "Maisons Anciennes",
      description: "Expertise dans la rénovation du patrimoine ancien avec respect des techniques traditionnelles",
    },
    {
      icon: Zap,
      title: "Maisons Modernes",
      description: "Rénovation contemporaine avec intégration de technologies modernes et domotique",
    },
    {
      icon: TreePine,
      title: "Maisons Écologiques",
      description: "Solutions durables et écologiques pour une maison respectueuse de l'environnement",
    },
    {
      icon: Home,
      title: "Maisons Passives",
      description: "Transformation vers une maison à très basse consommation énergétique",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Rénovation Maison</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Transformez votre <span className="text-blue-300">maison</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 text-pretty">
              Rénovation complète, extension, amélioration énergétique
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
              Une expertise complète pour tous vos projets de rénovation de maison
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
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Découvrez nos plus belles rénovations de maisons</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
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

      {/* Specialties Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Spécialités</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Expertise adaptée à chaque type de maison</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <specialty.icon className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{specialty.title}</h3>
                <p className="text-slate-600">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Réalisez le projet de vos rêves</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet de rénovation de maison
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
