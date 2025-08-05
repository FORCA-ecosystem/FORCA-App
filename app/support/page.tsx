"use client"

import type React from "react"

import { useState } from "react"
import { PublicLayout } from "@/components/public-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle,
  Clock,
  AlertCircle,
  Search,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [category, setCategory] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulation d'envoi
    alert("Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.")
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
    setCategory("")
  }

  const faqs = [
    {
      question: "Comment créer un compte sur FORCA ?",
      answer:
        "Pour créer un compte sur FORCA, cliquez sur le bouton 'Inscription' en haut à droite de la page d'accueil. Vous pourrez ensuite choisir entre un compte freelance ou client, et suivre les étapes d'inscription en fournissant les informations demandées.",
      category: "Inscription",
    },
    {
      question: "Comment postuler à une mission ?",
      answer:
        "Pour postuler à une mission, vous devez d'abord être connecté à votre compte freelance. Naviguez ensuite vers la page des missions, trouvez celle qui vous intéresse et cliquez sur 'Postuler'. Vous pourrez alors soumettre votre proposition, incluant votre tarif, délai et approche.",
      category: "Missions",
    },
    {
      question: "Comment sont gérés les paiements sur FORCA ?",
      answer:
        "FORCA utilise un système de paiement sécurisé avec dépôt de garantie. Lorsqu'un client vous engage, le montant est bloqué sur la plateforme. Une fois le travail livré et approuvé, le paiement est libéré sur votre compte FORCA. Vous pouvez ensuite le retirer via les méthodes disponibles dans votre pays.",
      category: "Paiements",
    },
    {
      question: "Comment publier une mission en tant que client ?",
      answer:
        "Pour publier une mission, connectez-vous à votre compte client, accédez à votre tableau de bord et cliquez sur 'Créer une mission'. Remplissez le formulaire détaillé en précisant vos besoins, budget, délais et compétences requises, puis soumettez-la pour publication.",
      category: "Missions",
    },
    {
      question: "Comment fonctionne le système de notation ?",
      answer:
        "Après chaque projet, clients et freelances peuvent s'évaluer mutuellement sur une échelle de 1 à 5 étoiles et laisser un commentaire. Ces évaluations sont publiques et contribuent à votre réputation sur la plateforme. Une moyenne de vos notes est affichée sur votre profil.",
      category: "Général",
    },
    {
      question: "Comment contacter un freelance avant de l'engager ?",
      answer:
        "Vous pouvez contacter un freelance via la messagerie intégrée de FORCA avant de l'engager. Trouvez son profil, cliquez sur 'Contacter' et posez-lui vos questions. Cette étape est recommandée pour clarifier les détails du projet et vérifier la compatibilité.",
      category: "Communication",
    },
    {
      question: "Quels sont les frais prélevés par FORCA ?",
      answer:
        "FORCA prélève une commission de 10% sur les transactions des freelances et 5% sur celles des clients. Ces frais couvrent la sécurisation des paiements, le support client, et le développement de la plateforme. Des frais supplémentaires peuvent s'appliquer pour certains services premium.",
      category: "Paiements",
    },
    {
      question: "Comment résoudre un litige avec un client ou un freelance ?",
      answer:
        "En cas de litige, essayez d'abord de résoudre le problème directement via la messagerie. Si cela échoue, vous pouvez ouvrir un ticket de médiation dans votre tableau de bord. Notre équipe examinera la situation, les communications et les livrables pour proposer une résolution équitable.",
      category: "Support",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "support@forca.africa",
      action: "Envoyer un email",
      link: "mailto:support@forca.africa",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+221 78 123 4567",
      action: "Appeler",
      link: "tel:+221781234567",
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "123 Innovation Hub, Dakar, Sénégal",
      action: "Voir sur la carte",
      link: "https://maps.google.com",
    },
    {
      icon: MessageSquare,
      title: "Chat",
      value: "Disponible 7j/7, 9h-18h",
      action: "Démarrer un chat",
      link: "#chat",
    },
  ]

  return (
    <PublicLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Comment pouvons-nous{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              vous aider ?
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Notre équipe de support est là pour vous accompagner à chaque étape de votre parcours sur FORCA.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Rechercher dans notre base de connaissances..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="faq" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="faq" className="text-base py-3">
              <HelpCircle className="h-5 w-5 mr-2" />
              FAQ
            </TabsTrigger>
            <TabsTrigger value="contact" className="text-base py-3">
              <Mail className="h-5 w-5 mr-2" />
              Nous contacter
            </TabsTrigger>
            <TabsTrigger value="status" className="text-base py-3">
              <Clock className="h-5 w-5 mr-2" />
              Statut du service
            </TabsTrigger>
          </TabsList>

          {/* FAQ Tab */}
          <TabsContent value="faq">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <Card className="sticky top-8">
                  <CardHeader>
                    <CardTitle>Catégories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {["Tous", "Inscription", "Missions", "Paiements", "Communication", "Général", "Support"].map(
                        (cat) => (
                          <Button
                            key={cat}
                            variant={cat === "Tous" ? "default" : "ghost"}
                            className="w-full justify-start"
                            onClick={() => setCategory(cat === "Tous" ? "" : cat)}
                          >
                            {cat}
                          </Button>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Questions fréquentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {searchTerm && (
                      <div className="mb-6">
                        <p className="text-sm text-gray-500">
                          {filteredFaqs.length} résultat(s) pour "{searchTerm}"
                        </p>
                      </div>
                    )}

                    <Accordion type="single" collapsible className="w-full">
                      {(searchTerm || category
                        ? filteredFaqs.filter((faq) => !category || faq.category === category)
                        : faqs
                      ).map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div className="flex items-start">
                              <span className="text-base sm:text-lg font-medium">{faq.question}</span>
                              <Badge className="ml-3 bg-blue-100 text-blue-800 hidden sm:inline-flex">
                                {faq.category}
                              </Badge>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-gray-600 pt-2">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>

                    {filteredFaqs.length === 0 && (
                      <div className="text-center py-8">
                        <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun résultat trouvé</h3>
                        <p className="text-gray-600 mb-6">
                          Nous n'avons pas trouvé de réponse correspondant à votre recherche.
                        </p>
                        <Button onClick={() => setSearchTerm("")}>Réinitialiser la recherche</Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">Vous n'avez pas trouvé ce que vous cherchiez ?</p>
                  <Button
                    onClick={() => document.querySelector('[data-value="contact"]')?.dispatchEvent(new Event("click"))}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    Contacter le support
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Informations de contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {contactInfo.map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                              <item.icon className="h-5 w-5 text-blue-600" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">{item.title}</h3>
                            <p className="text-gray-600 mb-2">{item.value}</p>
                            <Link href={item.link} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                              {item.action} →
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h3 className="font-medium text-gray-900 mb-4">Heures de support</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Lundi - Vendredi:</span>
                          <span className="font-medium">9:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Samedi:</span>
                          <span className="font-medium">10:00 - 15:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Dimanche:</span>
                          <span className="font-medium">Fermé</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Envoyez-nous un message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Nom complet
                          </label>
                          <Input
                            id="name"
                            placeholder="Votre nom"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="votre@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="category" className="text-sm font-medium text-gray-700">
                          Catégorie
                        </label>
                        <Select value={category} onValueChange={setCategory}>
                          <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                            <SelectValue placeholder="Sélectionnez une catégorie" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="account">Compte</SelectItem>
                            <SelectItem value="billing">Facturation</SelectItem>
                            <SelectItem value="technical">Support technique</SelectItem>
                            <SelectItem value="feedback">Commentaires</SelectItem>
                            <SelectItem value="other">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                          Sujet
                        </label>
                        <Input
                          id="subject"
                          placeholder="Sujet de votre message"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          required
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Comment pouvons-nous vous aider ?"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          className="min-h-[150px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Envoyer le message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Status Tab */}
          <TabsContent value="status">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Statut des services FORCA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-8">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500"></div>
                  <span className="text-lg font-medium">Tous les systèmes sont opérationnels</span>
                </div>

                <div className="space-y-6">
                  {[
                    { name: "Site Web", status: "operational", icon: CheckCircle, color: "text-green-500" },
                    { name: "Système de paiement", status: "operational", icon: CheckCircle, color: "text-green-500" },
                    { name: "Messagerie", status: "operational", icon: CheckCircle, color: "text-green-500" },
                    {
                      name: "Notifications",
                      status: "degraded",
                      icon: Clock,
                      color: "text-yellow-500",
                      message: "Performance dégradée - Nous travaillons à résoudre le problème",
                    },
                    { name: "API", status: "operational", icon: CheckCircle, color: "text-green-500" },
                    { name: "Base de données", status: "operational", icon: CheckCircle, color: "text-green-500" },
                    { name: "Stockage de fichiers", status: "operational", icon: CheckCircle, color: "text-green-500" },
                    {
                      name: "Système d'authentification",
                      status: "incident",
                      icon: AlertCircle,
                      color: "text-red-500",
                      message:
                        "Incident en cours - Certains utilisateurs peuvent rencontrer des difficultés de connexion",
                    },
                  ].map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <service.icon className={`h-5 w-5 ${service.color}`} />
                        <span className="font-medium">{service.name}</span>
                      </div>
                      <div>
                        {service.status === "operational" ? (
                          <Badge className="bg-green-100 text-green-800">Opérationnel</Badge>
                        ) : service.status === "degraded" ? (
                          <Badge className="bg-yellow-100 text-yellow-800">Performance dégradée</Badge>
                        ) : (
                          <Badge className="bg-red-100 text-red-800">Incident</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Incidents récents</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Maintenance planifiée</h4>
                        <Badge className="bg-blue-100 text-blue-800">Résolu</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Maintenance planifiée pour améliorer les performances du système de messagerie.
                      </p>
                      <div className="text-xs text-gray-500">22 juillet 2025, 02:00 - 04:00 UTC</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Problème de paiement</h4>
                        <Badge className="bg-blue-100 text-blue-800">Résolu</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Certains utilisateurs ont rencontré des difficultés lors du traitement des paiements.
                      </p>
                      <div className="text-xs text-gray-500">18 juillet 2025, 14:30 - 16:45 UTC</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">Vous rencontrez un problème non répertorié ?</p>
                  <Button
                    onClick={() => document.querySelector('[data-value="contact"]')?.dispatchEvent(new Event("click"))}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    Signaler un problème
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Support Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre équipe de support</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des experts dédiés à votre réussite sur la plateforme FORCA
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Aminata Diop",
                role: "Support Freelances",
                avatar: "/placeholder.svg?height=80&width=80",
                languages: ["Français", "Wolof", "Anglais"],
              },
              {
                name: "Mohamed Touré",
                role: "Support Clients",
                avatar: "/placeholder.svg?height=80&width=80",
                languages: ["Français", "Arabe", "Anglais"],
              },
              {
                name: "Kofi Mensah",
                role: "Support Technique",
                avatar: "/placeholder.svg?height=80&width=80",
                languages: ["Anglais", "Twi", "Français"],
              },
              {
                name: "Nadia Kamara",
                role: "Support Paiements",
                avatar: "/placeholder.svg?height=80&width=80",
                languages: ["Français", "Anglais", "Portugais"],
              },
            ].map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Avatar className="h-20 w-20 mx-auto mb-6">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback className="bg-blue-100 text-blue-600 text-lg">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <Badge className="bg-blue-100 text-blue-800 mb-4">{member.role}</Badge>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.languages.map((lang, i) => (
                      <Badge key={i} variant="outline" className="border-gray-300 text-gray-700">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent w-full"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contacter
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Besoin d'une assistance personnalisée ?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Notre équipe est disponible pour vous accompagner dans votre parcours sur FORCA, que vous soyez freelance
              ou client.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                onClick={() => document.querySelector('[data-value="contact"]')?.dispatchEvent(new Event("click"))}
              >
                Contacter le support
              </Button>
              <Link href="/auth">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Créer un compte
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </PublicLayout>
  )
}
