"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, Home, Wrench, Zap, Info, Phone, Building } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    {
      name: "Nos réalisations",
      icon: Home,
      href: "/realisations",
      children: [
        { name: "Tous nos projets", href: "/realisations" },
        { name: "Appartements", href: "/realisations/appartements" },
        { name: "Maisons", href: "/realisations/maisons" },
        { name: "Salles de bain", href: "/realisations/salles-de-bain" },
        { name: "Cuisines", href: "/realisations/cuisines" },
      ]
    },
    {
      name: "Nos expertises",
      icon: Wrench,
      href: "/expertises",
      children: [
        { name: "Toutes nos expertises", href: "/expertises" },
        { name: "Rénovation Appartement", href: "/renovation-appartement" },
        { name: "Rénovation Maison", href: "/renovation-maison" },
        { name: "Rénovation Salle de bain", href: "/renovation-salle-de-bain" },
        { name: "Rénovation Cuisine", href: "/renovation-cuisine" },
      ]
    },
    {
      name: "Rénovation énergétique",
      icon: Zap,
      href: "/renovation-energetique",
      children: [
        { name: "Rénovation énergétique", href: "/renovation-energetique" },
        { name: "Guide isolation", href: "/guide-isolation" },
        { name: "Guide chauffage", href: "/guide-chauffage" },
        { name: "Devis travaux", href: "/devis-travaux" },
      ]
    },
    {
      name: "En savoir plus",
      icon: Info,
      href: "/a-propos",
      children: [
        { name: "À propos", href: "/a-propos" },
        { name: "Nos avis", href: "/nos-avis" },
        { name: "Manifesto", href: "/manifesto" },
        { name: "Blog de la Squad", href: "/blog" },
        { name: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
      ]
    },
  ]

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-slate-700/50 backdrop-blur-xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 shadow-2xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative h-24 w-48 flex items-center  ">
                <img
                  src="/images/flash-services-logo.png"
                  alt="Flash Services 78"
                  className="h-full w-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300 w-50 h-70  "
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-white hover:text-cyan-300 hover:bg-slate-800/50 rounded-xl transition-all duration-200 group cursor-pointer">
                    <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span>{item.name}</span>
                    <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-200" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mt-2 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl rounded-xl">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} className="rounded-lg hover:bg-slate-800 focus:bg-slate-800">
                        <Link
                          href={child.href}
                          className="w-full text-sm font-medium text-gray-200 hover:text-cyan-300 transition-colors"
                        >
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            className="hidden lg:flex items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                <Phone className="h-4 w-4" />
                <span>Estimation gratuite</span>
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <motion.button
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
                  whileTap={{ scale: 0.95 }}
                >
                  <Menu className="h-6 w-6 text-white" />
                </motion.button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 backdrop-blur-2xl border-l border-slate-700/50">
                <SheetHeader className="pb-6">
                  <SheetTitle className="flex items-center space-x-2">
                    <div className="relative h-8 w-32 flex items-center">
                      <img
                        src="/images/flash-services-logo.png"
                        alt="Flash Services 78"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className="space-y-4">
                  {/* Mobile Navigation Items */}
                  <nav className="space-y-2">
                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <details className="group">
                          <summary className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800/50 cursor-pointer transition-colors">
                            <div className="flex items-center space-x-3">
                              <item.icon className="h-5 w-5 text-cyan-400" />
                              <span className="font-medium text-white">{item.name}</span>
                            </div>
                            <ChevronDown className="h-4 w-4 text-gray-400 group-open:rotate-180 transition-transform" />
                          </summary>
                          <div className="mt-2 ml-8 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-300 hover:bg-slate-800/50 rounded-lg transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </details>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <motion.div
                    className="pt-4 border-t border-gray-200/50"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/30 flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold">
                        <Phone className="h-4 w-4" />
                        <span>Estimation gratuite</span>
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
