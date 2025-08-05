"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  name: string
  email: string
  profile: "freelance" | "client" | "apprenant" | "admin"
  avatar?: string
  firstName?: string
  lastName?: string
  company?: string
  specialization?: string
  experience?: string
  bio?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string, profile: string) => Promise<boolean>
  logout: () => void
  register: (userData: any) => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté au chargement
    const savedUser = localStorage.getItem("forca_user")
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        localStorage.removeItem("forca_user")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string, profile: string): Promise<boolean> => {
    try {
      // Simulation d'une API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Créer un utilisateur fictif basé sur le profil
      const userData: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: getNameByProfile(profile),
        email,
        profile: profile as any,
        avatar: "/placeholder-user.jpg",
        firstName: getNameByProfile(profile).split(" ")[0],
        lastName: getNameByProfile(profile).split(" ")[1],
      }

      setUser(userData)
      localStorage.setItem("forca_user", JSON.stringify(userData))
      return true
    } catch (error) {
      console.error("Erreur de connexion:", error)
      return false
    }
  }

  const register = async (userData: any): Promise<boolean> => {
    try {
      // Simulation d'une API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: `${userData.firstName} ${userData.lastName}`,
        email: userData.email,
        profile: userData.profile,
        avatar: "/placeholder-user.jpg",
        firstName: userData.firstName,
        lastName: userData.lastName,
        company: userData.company,
        specialization: userData.specialization,
        experience: userData.experience,
        bio: userData.bio,
      }

      setUser(newUser)
      localStorage.setItem("forca_user", JSON.stringify(newUser))
      return true
    } catch (error) {
      console.error("Erreur d'inscription:", error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("forca_user")
  }

  const getNameByProfile = (profile: string) => {
    switch (profile) {
      case "freelance":
        return "Marie Dupont"
      case "client":
        return "Jean Martin"
      case "apprenant":
        return "Sophie Leroy"
      case "admin":
        return "Admin FORCA"
      default:
        return "Utilisateur FORCA"
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
