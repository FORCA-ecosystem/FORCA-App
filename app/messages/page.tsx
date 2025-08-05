"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Send, Paperclip, MoreVertical, Phone, Video, Info } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(1)
  const [newMessage, setNewMessage] = useState("")

  const conversations = [
    {
      id: 1,
      name: "TechCorp",
      avatar: "/placeholder-user.jpg",
      lastMessage: "Pouvez-vous envoyer la dernière version ?",
      timestamp: "Il y a 2h",
      unread: 2,
      online: true,
      project: "Application mobile",
    },
    {
      id: 2,
      name: "StartupXYZ",
      avatar: "/placeholder-user.jpg",
      lastMessage: "Excellent travail sur le design !",
      timestamp: "Il y a 4h",
      unread: 0,
      online: false,
      project: "Design UI/UX",
    },
    {
      id: 3,
      name: "AgenceWeb",
      avatar: "/placeholder-user.jpg",
      lastMessage: "Mission validée, merci !",
      timestamp: "Hier",
      unread: 0,
      online: true,
      project: "Rédaction web",
    },
    {
      id: 4,
      name: "Marie Dupont",
      avatar: "/placeholder-user.jpg",
      lastMessage: "Je peux commencer dès lundi",
      timestamp: "Il y a 2 jours",
      unread: 1,
      online: false,
      project: "Consultation SEO",
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "TechCorp",
      content:
        "Bonjour Marie, j'espère que vous allez bien. Nous avons reçu la première version de l'application et nous sommes très satisfaits du travail accompli.",
      timestamp: "10:30",
      isMe: false,
    },
    {
      id: 2,
      sender: "Moi",
      content:
        "Merci beaucoup ! Je suis ravie que cela vous plaise. J'ai apporté quelques améliorations supplémentaires basées sur vos retours précédents.",
      timestamp: "10:35",
      isMe: true,
    },
    {
      id: 3,
      sender: "TechCorp",
      content: "Parfait ! Nous aimerions voir ces améliorations. Pouvez-vous nous envoyer la dernière version ?",
      timestamp: "14:20",
      isMe: false,
    },
    {
      id: 4,
      sender: "Moi",
      content:
        "Bien sûr, je vous envoie le lien de téléchargement dans quelques minutes. J'ai également préparé un document avec les changements apportés.",
      timestamp: "14:25",
      isMe: true,
    },
  ]

  const currentConversation = conversations.find((c) => c.id === selectedConversation)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      // Logique d'envoi de message
      setNewMessage("")
    }
  }

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-8rem)] flex gap-6">
        {/* Conversations List */}
        <Card className="w-80 border-0 shadow-md flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between">
              Messages
              <Badge variant="secondary">{conversations.filter((c) => c.unread > 0).length}</Badge>
            </CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Rechercher une conversation..." className="pl-10" />
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-0">
            <div className="space-y-1">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedConversation === conversation.id ? "bg-blue-50 border-r-2 border-blue-600" : ""
                  }`}
                  onClick={() => setSelectedConversation(conversation.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm truncate">{conversation.name}</p>
                        <div className="flex items-center space-x-1">
                          <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                          {conversation.unread > 0 && (
                            <Badge className="h-5 w-5 flex items-center justify-center p-0 text-xs bg-blue-600">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">{conversation.project}</p>
                      <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="flex-1 border-0 shadow-md flex flex-col">
          {currentConversation ? (
            <>
              {/* Chat Header */}
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={currentConversation.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{currentConversation.name[0]}</AvatarFallback>
                      </Avatar>
                      {currentConversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{currentConversation.name}</p>
                      <p className="text-sm text-gray-600">{currentConversation.project}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Info className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isMe
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.isMe ? "text-blue-100" : "text-gray-500"}`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>

              {/* Message Input */}
              <div className="border-t p-4">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                  <Button type="button" variant="ghost" size="sm">
                    <Paperclip className="h-4 w-4" />
                  </Button>
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
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-600">Sélectionnez une conversation pour commencer</p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </DashboardLayout>
  )
}
