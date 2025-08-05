"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, Send, X, Sparkles, Briefcase, GraduationCap, Users } from "lucide-react"

interface ForcaAIChatProps {
  isOpen: boolean
  onClose: () => void
}

export function ForcaAIChat({ isOpen, onClose }: ForcaAIChatProps) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "FORCA IA",
      content: "Bonjour ! Je suis FORCA IA, votre assistant personnel. Comment puis-je vous aider aujourd'hui ?",
      timestamp: "Maintenant",
      isBot: true,
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const quickActions = [
    {
      icon: Briefcase,
      title: "Trouver une mission",
      description: "Je cherche des opportunités",
      action: "mission",
    },
    {
      icon: Users,
      title: "Recruter un freelance",
      description: "J'ai besoin d'aide pour mon projet",
      action: "recruit",
    },
    {
      icon: GraduationCap,
      title: "Me former",
      description: "Je veux développer mes compétences",
      action: "learn",
    },
    {
      icon: Sparkles,
      title: "Vendre mes services",
      description: "Je veux proposer mes compétences",
      action: "sell",
    },
  ]

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        sender: "Vous",
        content: newMessage,
        timestamp: "Maintenant",
        isBot: false,
      }

      setMessages([...messages, userMessage])
      setNewMessage("")

      // Simulation de réponse IA
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          sender: "FORCA IA",
          content: "Je comprends votre demande. Laissez-moi vous aider à trouver la meilleure solution...",
          timestamp: "Maintenant",
          isBot: true,
        }
        setMessages((prev) => [...prev, botResponse])
      }, 1000)
    }
  }

  const handleQuickAction = (action: string) => {
    let response = ""
    switch (action) {
      case "mission":
        response =
          "Parfait ! Pour vous aider à trouver la mission idéale, pouvez-vous me dire dans quel domaine vous travaillez ?"
        break
      case "recruit":
        response = "Excellent ! Décrivez-moi votre projet et je vous aiderai à trouver le freelance parfait."
        break
      case "learn":
        response =
          "Super ! Quelles compétences souhaitez-vous développer ? Je peux vous recommander les meilleures formations."
        break
      case "sell":
        response = "Génial ! Quels services proposez-vous ? Je vais vous guider pour créer une offre attractive."
        break
    }

    const botMessage = {
      id: messages.length + 1,
      sender: "FORCA IA",
      content: response,
      timestamp: "Maintenant",
      isBot: true,
    }
    setMessages([...messages, botMessage])
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-96 h-[500px] shadow-2xl border-0 flex flex-col">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-lg">FORCA IA</CardTitle>
                <p className="text-sm opacity-90">Assistant intelligent</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white hover:bg-opacity-20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.isBot
                    ? "bg-gray-100 text-gray-900"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className={`text-xs mt-1 ${message.isBot ? "text-gray-500" : "text-blue-100"}`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}

          {messages.length === 1 && (
            <div className="space-y-3">
              <p className="text-sm text-gray-600 text-center">Que souhaitez-vous faire ?</p>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto p-3 flex flex-col items-center text-center bg-transparent"
                    onClick={() => handleQuickAction(action.action)}
                  >
                    <action.icon className="h-6 w-6 mb-2 text-blue-600" />
                    <span className="text-xs font-medium">{action.title}</span>
                    <span className="text-xs text-gray-500">{action.description}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>

        <div className="border-t p-4">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <Input
              placeholder="Tapez votre message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1"
            />
            <Button
              type="submit"
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              disabled={!newMessage.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-2 text-center">
            FORCA IA peut faire des erreurs. Vérifiez les informations importantes.
          </p>
        </div>
      </Card>
    </div>
  )
}
