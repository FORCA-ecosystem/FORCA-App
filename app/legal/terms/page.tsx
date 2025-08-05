"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Shield, Users, CreditCard } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Conditions d'utilisation</h1>
          <p className="text-gray-600">Dernière mise à jour : 15 janvier 2024</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Sommaire</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="#acceptance" className="block text-sm text-blue-600 hover:underline">
                  1. Acceptation des conditions
                </a>
                <a href="#services" className="block text-sm text-blue-600 hover:underline">
                  2. Description des services
                </a>
                <a href="#accounts" className="block text-sm text-blue-600 hover:underline">
                  3. Comptes utilisateurs
                </a>
                <a href="#payments" className="block text-sm text-blue-600 hover:underline">
                  4. Paiements et facturation
                </a>
                <a href="#content" className="block text-sm text-blue-600 hover:underline">
                  5. Contenu utilisateur
                </a>
                <a href="#prohibited" className="block text-sm text-blue-600 hover:underline">
                  6. Utilisations interdites
                </a>
                <a href="#termination" className="block text-sm text-blue-600 hover:underline">
                  7. Résiliation
                </a>
                <a href="#liability" className="block text-sm text-blue-600 hover:underline">
                  8. Limitation de responsabilité
                </a>
                <a href="#changes" className="block text-sm text-blue-600 hover:underline">
                  9. Modifications
                </a>
                <a href="#contact" className="block text-sm text-blue-600 hover:underline">
                  10. Contact
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <Card>
              <CardContent className="p-8 prose max-w-none">
                <section id="acceptance" className="mb-8">
                  <div className="flex items-center mb-4">
                    <FileText className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold">1. Acceptation des conditions</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    En accédant et en utilisant la plateforme FORCA, vous acceptez d'être lié par ces conditions
                    d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Ces conditions s'appliquent à tous les utilisateurs de la plateforme, y compris les freelances, les
                    clients, les formateurs et les visiteurs.
                  </p>
                </section>

                <section id="services" className="mb-8">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold">2. Description des services</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    FORCA est une plateforme qui met en relation des freelances avec des clients pour la réalisation de
                    projets. Nous proposons également des formations professionnelles et des outils de gestion.
                  </p>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Nos services incluent :</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Mise en relation entre freelances et clients</li>
                      <li>Système de paiement sécurisé</li>
                      <li>Outils de gestion de projets</li>
                      <li>Plateforme de formations en ligne</li>
                      <li>Support client et résolution de litiges</li>
                    </ul>
                  </div>
                </section>

                <section id="accounts" className="mb-8">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold">3. Comptes utilisateurs</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Pour utiliser certaines fonctionnalités de FORCA, vous devez créer un compte. Vous êtes responsable
                    de maintenir la confidentialité de vos informations de connexion.
                  </p>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Responsabilités de l'utilisateur :</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Fournir des informations exactes et à jour</li>
                      <li>Maintenir la sécurité de votre mot de passe</li>
                      <li>Notifier immédiatement tout usage non autorisé</li>
                      <li>Respecter les droits des autres utilisateurs</li>
                    </ul>
                  </div>
                </section>

                <section id="payments" className="mb-8">
                  <div className="flex items-center mb-4">
                    <CreditCard className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold">4. Paiements et facturation</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    FORCA facilite les paiements entre clients et freelances. Nous prélevons une commission sur chaque
                    transaction.
                  </p>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Conditions de paiement :</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Commission de 10% sur les transactions freelances</li>
                      <li>Commission de 5% sur les ventes de formations</li>
                      <li>Paiements traités sous 2-5 jours ouvrés</li>
                      <li>Remboursements selon notre politique de remboursement</li>
                    </ul>
                  </div>
                </section>

                <section id="content" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">5. Contenu utilisateur</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Vous conservez la propriété de votre contenu, mais accordez à FORCA une licence pour l'utiliser dans
                    le cadre de nos services.
                  </p>
                </section>

                <section id="prohibited" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">6. Utilisations interdites</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Il est interdit d'utiliser FORCA pour des activités illégales, frauduleuses ou qui portent atteinte
                    aux droits d'autrui.
                  </p>
                </section>

                <section id="termination" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">7. Résiliation</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Nous nous réservons le droit de suspendre ou résilier votre compte en cas de violation de ces
                    conditions.
                  </p>
                </section>

                <section id="liability" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">8. Limitation de responsabilité</h2>
                  <p className="text-gray-700 leading-relaxed">
                    FORCA ne peut être tenu responsable des dommages indirects résultant de l'utilisation de nos
                    services.
                  </p>
                </section>

                <section id="changes" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">9. Modifications</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications seront
                    notifiées aux utilisateurs.
                  </p>
                </section>

                <section id="contact" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Pour toute question concernant ces conditions, contactez-nous à : legal@forca.com
                  </p>
                </section>
              </CardContent>
            </Card>

            <div className="text-center">
              <Link href="/">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
