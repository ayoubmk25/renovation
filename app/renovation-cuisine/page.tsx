"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, Lightbulb, Droplets, Wrench, CheckCircle, ArrowRight } from "lucide-react"

export default function RenovationCuisine() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: ChefHat,
      title: "Conception Sur Mesure",
      description: "Design personnalisé selon vos besoins et votre espace",
      features: ["Plans 3D", "Ergonomie optimisée", "Style personnalisé", "Conseils déco"],
    },
    {
      icon: Wrench,
      title: "Installation Complète",
      description: "Pose de tous les éléments par nos artisans experts",
      features: ["Meubles de cuisine", "Électroménager", "Plan de travail", "Crédence"],
    },
    {
      icon: Droplets,
      title: "Plomberie & Évacuation",
      description: "Installation des arrivées d'eau et évacuations",
      features: ["Évier et robinetterie", "Lave-vaisselle", "Évacuations", "Raccordements"],
    },
    {
      icon: Lightbulb,
      title: "Éclairage Design",
      description: "Solutions d'éclairage fonctionnel et décoratif",
      features: ["Spots LED", "Éclairage plan travail", "Ambiance", "Variateurs"],
    },
  ]

  const styles = [
    {
      title: "Cuisine Moderne",
      description: "Lignes épurées et matériaux contemporains",
      image: "/modern-kitchen-renovation-sleek-design-contemporar.jpg",
      features: ["Laque brillante", "Îlot central", "Électroménager intégré"],
    },
    {
      title: "Cuisine Classique",
      description: "Élégance intemporelle et matériaux nobles",
      image: "/classic-kitchen-renovation-traditional-elegant-des.jpg",
      features: ["Bois massif", "Moulures", "Poignées classiques"],
    },
    {
      title: "Cuisine Industrielle",
      description: "Style loft avec matériaux bruts",
      image: "/industrial-kitchen-renovation-loft-style-metal-woo.jpg",
      features: ["Métal et bois", "Briques apparentes", "Suspensions design"],
    },
  ]

  const process = [
    { step: 1, title: "Visite & Mesures", description: "Prise de mesures précises et analyse de l'existant" },
    { step: 2, title: "Conception 3D", description: "Plans détaillés et visualisation 3D de votre future cuisine" },
    { step: 3, title: "Choix Matériaux", description: "Sélection des matériaux, couleurs et équipements" },
    { step: 4, title: "Démontage", description: "Dépose soignée de l'ancienne cuisine" },
    { step: 5, title: "Installation", description: "Pose des meubles, électroménager et finitions" },
    { step: 6, title: "Finitions", description: "Réglages, nettoyage et mise en service" },
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
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Rénovation Cuisine</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Créez la <span className="text-blue-300">cuisine</span> de vos rêves
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 text-pretty">
              Conception, installation et finitions pour une cuisine sur mesure
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
              De la conception à l'installation, nous nous occupons de tout
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

      {/* Styles Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Styles de Cuisine</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Trouvez le style qui vous correspond</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {styles.map((style, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={style.image || "/placeholder.svg"}
                    alt={style.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{style.title}</h3>
                  <p className="text-slate-600 mb-4">{style.description}</p>
                  <ul className="space-y-2">
                    {style.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
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

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Notre Processus</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">6 étapes pour votre cuisine parfaite</p>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à rénover votre cuisine ?</h2>
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
