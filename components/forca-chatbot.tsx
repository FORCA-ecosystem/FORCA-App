"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Send, X, Minimize2, Bot, User, Paperclip, Smile, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export function ForcaChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Bonjour ! Je suis l'assistant virtuel de FORCA. Comment puis-je vous aider aujourd'hui ?",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, isMinimized])

  const handleSend = () => {
    if (!input.trim()) return

    // Ajouter le message de l'utilisateur
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simuler une réponse du chatbot après un délai
    setTimeout(
      () => {
        const botResponses = [
          "Je peux vous aider à trouver des missions adaptées à votre profil.",
          "FORCA propose des formations pour améliorer vos compétences professionnelles.",
          "Vous pouvez créer un portfolio pour mettre en valeur vos réalisations.",
          "Notre système de paiement sécurisé garantit des transactions fiables.",
          "N'hésitez pas à consulter notre FAQ pour plus d'informations.",
          "Je vous recommande de compléter votre profil pour augmenter vos chances d'être sélectionné.",
          "Vous pouvez filtrer les missions par catégorie, budget et localisation.",
          "FORCA vérifie l'identité de tous les freelances et clients pour assurer la sécurité.",
        ]

        // Réponses contextuelles basées sur l'entrée de l'utilisateur
        let botResponse = ""
        const userInput = input.toLowerCase()

        if (userInput.includes("bonjour") || userInput.includes("salut") || userInput.includes("hello")) {
          botResponse = "Bonjour ! Comment puis-je vous aider aujourd'hui ?"
        } else if (userInput.includes("mission") || userInput.includes("projet") || userInput.includes("travail")) {
          botResponse =
            "Vous cherchez une mission ? Vous pouvez consulter notre page de missions où vous trouverez des opportunités filtrées selon vos compétences et préférences."
        } else if (
          userInput.includes("paiement") ||
          userInput.includes("argent") ||
          userInput.includes("rémunération")
        ) {
          botResponse =
            "FORCA utilise un système de paiement sécurisé. Les fonds sont bloqués en garantie jusqu'à la validation du travail, puis libérés sur votre compte FORCA."
        } else if (userInput.includes("profil") || userInput.includes("compte") || userInput.includes("inscription")) {
          botResponse =
            "Pour créer ou améliorer votre profil, rendez-vous dans la section 'Profil'. Un profil complet avec portfolio augmente vos chances d'être sélectionné pour des missions."
        } else if (userInput.includes("formation") || userInput.includes("apprendre") || userInput.includes("cours")) {
          botResponse =
            "FORCA propose des formations dans divers domaines. Consultez notre catalogue de formations pour développer vos compétences et augmenter votre valeur sur le marché."
        } else if (userInput.includes("problème") || userInput.includes("aide") || userInput.includes("support")) {
          botResponse =
            "Je suis désolé d'apprendre que vous rencontrez des difficultés. Vous pouvez contacter notre équipe de support via la page Support ou par email à support@forca.africa."
        } else {
          // Réponse générique aléatoire
          botResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
        }

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: botResponse,
          role: "assistant",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, assistantMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    ) // Délai aléatoire entre 1 et 2 secondes
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false)
    } else {
      setIsOpen(!isOpen)
    }
  }

  const minimizeChat = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMinimized(true)
  }

  const closeChat = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen(false)
    setIsMinimized(false)
  }

  const suggestedQuestions = [
    "Comment trouver des missions ?",
    "Comment fonctionne le paiement ?",
    "Comment améliorer mon profil ?",
    "Quelles formations sont disponibles ?",
  ]

  return (
    <>
      {/* Bouton flottant du chatbot */}
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 p-0 flex items-center justify-center"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}

      {/* Fenêtre du chatbot */}
      {isOpen && (
        <div
          className={cn(
            "fixed z-50 bottom-6 right-6 w-full sm:w-[380px] transition-all duration-300 ease-in-out",
            isMinimized ? "h-16" : "h-[600px] max-h-[80vh]",
          )}
        >
          <Card className="h-full flex flex-col shadow-xl border-gray-200">
            {/* Header */}
            <CardHeader
              className={cn(
                "flex flex-row items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg cursor-pointer",
                isMinimized ? "rounded-lg" : "",
              )}
              onClick={() => isMinimized && setIsMinimized(false)}
            >
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8 border-2 border-white">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback className="bg-blue-100 text-blue-600">AI</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base font-medium">Assistant FORCA</CardTitle>
                  {!isMinimized && (
                    <div className="flex items-center mt-1">
                      <Badge variant="outline" className="text-xs bg-green-500 border-0 text-white">
                        En ligne
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {!isMinimized ? (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-white hover:bg-blue-700 rounded-full"
                      onClick={minimizeChat}
                    >
                      <Minimize2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-white hover:bg-blue-700 rounded-full"
                      onClick={closeChat}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-blue-700 rounded-full"
                    onClick={closeChat}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardHeader>

            {/* Corps du chat */}
            {!isMinimized && (
              <>
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={cn(
                          "flex items-start space-x-2 max-w-[85%]",
                          message.role === "user" ? "ml-auto flex-row-reverse space-x-reverse" : "",
                        )}
                      >
                        <Avatar className="h-8 w-8 mt-1">
                          {message.role === "assistant" ? (
                            <>
                              <AvatarImage src="/placeholder.svg?height=32&width=32" />
                              <AvatarFallback className="bg-blue-100 text-blue-600">
                                <Bot className="h-4 w-4" />
                              </AvatarFallback>
                            </>
                          ) : (
                            <>
                              <AvatarImage src="/placeholder.svg?height=32&width=32" />
                              <AvatarFallback className="bg-gray-100 text-gray-600">
                                <User className="h-4 w-4" />
                              </AvatarFallback>
                            </>
                          )}
                        </Avatar>
                        <div
                          className={cn(
                            "rounded-lg p-3",
                            message.role === "assistant" ? "bg-gray-100 text-gray-800" : "bg-blue-600 text-white",
                          )}
                        >
                          <p className="text-sm">{message.content}</p>
                          <div
                            className={cn(
                              "text-xs mt-1",
                              message.role === "assistant" ? "text-gray-500" : "text-blue-100",
                            )}
                          >
                            {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </div>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex items-start space-x-2 max-w-[85%]">
                        <Avatar className="h-8 w-8 mt-1">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="rounded-lg p-3 bg-gray-100 text-gray-800">
                          <div className="flex space-x-1">
                            <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"></div>
                            <div
                              className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                            <div
                              className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                              style={{ animationDelay: "0.4s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Questions suggérées */}
                  {messages.length <= 2 && (
                    <div className="mt-6">
                      <p className="text-xs text-gray-500 mb-2">Questions fréquentes :</p>
                      <div className="flex flex-wrap gap-2">
                        {suggestedQuestions.map((question, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="text-xs border-gray-300 text-gray-700 hover:bg-gray-50 bg-white"
                            onClick={() => {
                              setInput(question)
                              inputRef.current?.focus()
                            }}
                          >
                            {question}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </ScrollArea>

                {/* Pied de page avec input */}
                <CardFooter className="p-4 pt-2 border-t">
                  <div className="flex items-end w-full space-x-2">
                    <div className="relative flex-1">
                      <Input
                        ref={inputRef}
                        placeholder="Écrivez votre message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="pr-10 py-6 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                      />
                      <div className="absolute right-2 bottom-2 flex space-x-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full"
                        >
                          <Paperclip className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full"
                        >
                          <Smile className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      onClick={handleSend}
                      disabled={!input.trim() || isTyping}
                      className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 p-0"
                    >
                      {isTyping ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                    </Button>
                  </div>
                </CardFooter>
              </>
            )}
          </Card>
        </div>
      )}
    </>
  )
}
