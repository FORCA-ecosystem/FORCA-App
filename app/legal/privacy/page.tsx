"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Eye, Database, Lock } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Politique de confidentialité</h1>
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
                <a href="#introduction" className="block text-sm text-blue-600 hover:underline">
                  1. Introduction
                </a>
                <a href="#data-collection" className="block text-sm text-blue-600 hover:underline">
                  2. Collecte de données
                </a>
                <a href="#data-usage" className="block text-sm text-blue-600 hover:underline">
                  3. Utilisation des données
                </a>
                <a href="#data-sharing" className="block text-sm text-blue-600 hover:underline">
                  4. Partage des données
                </a>
                <a href="#data-security" className="block text-sm text-blue-600 hover:underline">
                  5. Sécurité des données
                </a>
                <a href="#user-rights" className="block text-sm text-blue-600 hover:underline">
                  6. Vos droits
                </a>
                <a href="#cookies" className="block text-sm text-blue-600 hover:underline">
                  7. Cookies
                </a>
                <a href="#contact" className="block text-sm text-blue-600 hover:underline">
                  8. Contact
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <Card>
              <CardContent className="p-8 prose max-w-none">
                <section id="introduction" className="mb-8">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold">1. Introduction</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Chez FORCA, nous nous engageons à protéger votre vie privée et vos données personnelles. Cette
                    politique explique comment nous collectons, utilisons et protégeons vos informations.
                  </p>
                </section>

                <section id="data-collection" className="mb-8">
                  <div className="flex items-center mb-4">
                    <Database className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold">2. Collecte de données</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Nous collectons différents types de données pour vous fournir nos services :
                  </p>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Données personnelles :</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Nom, prénom, adresse email</li>
                      <li>Informations de profil professionnel</li>
                      <li>Données de paiement (traitées par nos partenaires sécurisés)</li>
                      <li>Communications et messages sur la plateforme</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Données techniques :</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Adresse IP et données de géolocalisation</li>
                      <li>Informations sur votre navigateur et appareil</li>
                      <li>Données d'utilisation et de navigation</li>
                      <li>Cookies et technologies similaires</li>
                    </ul>
                  </div>
                </section>

                <section id="data-usage" className="mb-8">
                  <div className="flex items-center mb-4">
                    <Eye className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold">3. Utilisation des données</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">Nous utilisons vos données pour :</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
                    <li>Fournir et améliorer nos services</li>
                    <li>Faciliter les transactions entre utilisateurs</li>
                    <li>Personnaliser votre expérience</li>
                    <li>Assurer la sécurité de la plateforme</li>
                    <li>Vous envoyer des communications importantes</li>
                    <li>Respecter nos obligations légales</li>
                  </ul>
                </section>

                <section id="data-sharing" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">4. Partage des données</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations uniquement
                    dans les cas suivants :
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
                    <li>Avec votre consentement explicite</li>
                    <li>Avec nos partenaires de paiement sécurisés</li>
                    <li>Pour respecter nos obligations légales</li>
                    <li>Pour protéger nos droits et ceux de nos utilisateurs</li>
                  </ul>
                </section>

                <section id="data-security" className="mb-8">
                  <div className="flex items-center mb-4">
                    <Lock className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold">5. Sécurité des données</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Nous mettons en place des mesures de sécurité techniques et organisationnelles pour protéger vos
                    données :
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
                    <li>Chiffrement des données sensibles</li>
                    <li>Accès restreint aux données personnelles</li>
                    <li>Surveillance continue de nos systèmes</li>
                    <li>Formation régulière de nos équipes</li>
                  </ul>
                </section>

                <section id="user-rights" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">6. Vos droits</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Conformément au RGPD, vous disposez des droits suivants :
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
                    <li>Droit d'accès à vos données personnelles</li>
                    <li>Droit de rectification des données inexactes</li>
                    <li>Droit à l'effacement de vos données</li>
                    <li>Droit à la portabilité de vos données</li>
                    <li>Droit d'opposition au traitement</li>
                    <li>Droit de limitation du traitement</li>
                  </ul>
                </section>

                <section id="cookies" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Nous utilisons des cookies pour améliorer votre expérience sur notre plateforme. Vous pouvez gérer
                    vos préférences de cookies dans les paramètres de votre navigateur.
                  </p>
                </section>

                <section id="contact" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits,
                    contactez notre délégué à la protection des données : privacy@forca.com
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
