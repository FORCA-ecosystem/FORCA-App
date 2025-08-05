"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Home,
  Briefcase,
  Users,
  MessageSquare,
  BookOpen,
  Settings,
  Bell,
  Search,
  Menu,
  LogOut,
  User,
  CreditCard,
  HelpCircle,
  BarChart3,
  FileText,
  Calendar,
  Wallet,
  Shield,
  Building,
  GraduationCap,
  Award,
  Target,
  TrendingUp,
  Database,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

// Navigation basée sur le profil utilisateur
const getNavigationByProfile = (userProfile: string) => {
  const baseNavigation = [{ name: "Tableau de bord", href: "/dashboard", icon: Home, module: "dashboard" }]

  switch (userProfile) {
    case "freelance":
      return [
        ...baseNavigation,
        { name: "Mes Missions", href: "/missions", icon: Briefcase, module: "missions" },
        { name: "Mes Services", href: "/services", icon: Target, module: "services" },
        { name: "Messages", href: "/messages", icon: MessageSquare, module: "messages" },
        { name: "Formations", href: "/formations", icon: BookOpen, module: "formations" },
        { name: "Finances", href: "/finances", icon: Wallet, module: "finances" },
        { name: "Statistiques", href: "/analytics", icon: BarChart3, module: "analytics" },
        { name: "Profil", href: "/profile", icon: User, module: "profile" },
      ]
    case "client":
      return [
        ...baseNavigation,
        { name: "Mes Projets", href: "/projects", icon: Briefcase, module: "projects" },
        { name: "Freelances", href: "/freelances", icon: Users, module: "freelances" },
        { name: "Messages", href: "/messages", icon: MessageSquare, module: "messages" },
        { name: "Factures", href: "/invoices", icon: FileText, module: "invoices" },
        { name: "Contrats", href: "/contracts", icon: Shield, module: "contracts" },
        { name: "Rapports", href: "/reports", icon: BarChart3, module: "reports" },
        { name: "Entreprise", href: "/company", icon: Building, module: "company" },
      ]
    case "apprenant":
      return [
        ...baseNavigation,
        { name: "Mes Formations", href: "/formations", icon: BookOpen, module: "formations" },
        { name: "Progression", href: "/progress", icon: TrendingUp, module: "progress" },
        { name: "Certificats", href: "/certificates", icon: Award, module: "certificates" },
        { name: "Messages", href: "/messages", icon: MessageSquare, module: "messages" },
        { name: "Calendrier", href: "/schedule", icon: Calendar, module: "schedule" },
        { name: "Ressources", href: "/resources", icon: Database, module: "resources" },
        { name: "Profil", href: "/profile", icon: User, module: "profile" },
      ]
    case "admin":
      return [
        ...baseNavigation,
        { name: "Utilisateurs", href: "/admin/users", icon: Users, module: "users" },
        { name: "Missions", href: "/admin/missions", icon: Briefcase, module: "missions" },
        { name: "Formations", href: "/admin/formations", icon: GraduationCap, module: "formations" },
        { name: "Finances", href: "/admin/finances", icon: Wallet, module: "finances" },
        { name: "Rapports", href: "/admin/reports", icon: BarChart3, module: "reports" },
        { name: "Modération", href: "/admin/moderation", icon: Shield, module: "moderation" },
        { name: "Système", href: "/admin/system", icon: Settings, module: "system" },
      ]
    default:
      return baseNavigation
  }
}

interface DashboardLayoutProps {
  children: React.ReactNode
  userProfile?: "freelance" | "client" | "apprenant" | "admin"
}

export function DashboardLayout({ children, userProfile = "freelance" }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeModule, setActiveModule] = useState("dashboard")
  const pathname = usePathname()

  const navigation = getNavigationByProfile(userProfile)

  const profileInfo = {
    freelance: { name: "Marie Dupont", role: "Développeuse Full-Stack", company: "Freelance" },
    client: { name: "Jean Martin", role: "Chef de Projet", company: "TechCorp" },
    apprenant: { name: "Sophie Leroy", role: "Étudiante", company: "En formation" },
    admin: { name: "Admin FORCA", role: "Administrateur", company: "FORCA Platform" },
  }

  const currentProfile = profileInfo[userProfile]

  const Sidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={cn("flex flex-col h-full bg-slate-900 text-white", mobile ? "w-full" : "w-64")}>
      {/* Logo ERP Style */}
      <div className="flex items-center space-x-3 p-4 sm:p-6 border-b border-slate-700">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-base sm:text-lg">F</span>
        </div>
        <div>
          <span className="text-lg sm:text-xl font-bold">FORCA</span>
          <div className="text-xs text-slate-400">Dashboard</div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="p-3 sm:p-4 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback className="bg-slate-700 text-xs sm:text-sm">
              {currentProfile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium truncate">{currentProfile.name}</p>
            <p className="text-xs text-slate-400 truncate">{currentProfile.role}</p>
            <p className="text-xs text-slate-500 truncate">{currentProfile.company}</p>
          </div>
        </div>
      </div>

      {/* Navigation Modules */}
      <nav className="flex-1 p-3 sm:p-4 space-y-1">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Modules</div>
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all",
                isActive ? "bg-blue-600 text-white shadow-lg" : "text-slate-300 hover:text-white hover:bg-slate-800",
              )}
              onClick={() => {
                mobile && setSidebarOpen(false)
                setActiveModule(item.module)
              }}
            >
              <item.icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="truncate">{item.name}</span>
              {isActive && <div className="w-2 h-2 bg-white rounded-full ml-auto"></div>}
            </Link>
          )
        })}
      </nav>

      {/* System Info */}
      <div className="p-3 sm:p-4 border-t border-slate-700">
        <div className="text-xs text-slate-400 space-y-1">
          <div className="flex justify-between">
            <span>Version:</span>
            <span>v2.1.0</span>
          </div>
          <div className="flex justify-between">
            <span>Statut:</span>
            <span className="text-green-400">En ligne</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64 bg-slate-900">
          <Sidebar mobile />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Header - ERP Style - Mobile Optimized */}
        <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between sticky top-0 z-40 shadow-sm">
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64 bg-slate-900">
                <Sidebar mobile />
              </SheetContent>
            </Sheet>

            {/* Breadcrumb */}
            <div className="hidden sm:flex items-center space-x-2 text-sm text-slate-600">
              <span>FORCA</span>
              <span>/</span>
              <span className="capitalize">{activeModule}</span>
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center space-x-2 bg-slate-100 rounded-lg px-3 py-2">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Recherche globale..."
                className="bg-transparent border-none outline-none text-sm w-48 lg:w-64"
              />
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative p-2">
              <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center p-0 text-xs bg-red-500">
                3
              </Badge>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full">
                  <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                    <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                    <AvatarFallback className="text-xs sm:text-sm">
                      {currentProfile.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{currentProfile.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{currentProfile.role}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Mon Profil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Facturation</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Paramètres</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Déconnexion</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 bg-slate-50 min-h-[calc(100vh-80px)]">{children}</main>
      </div>
    </div>
  )
}
