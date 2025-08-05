"use client"

import React from "react"
import { useState, useCallback, useEffect } from "react"
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
import {
  Home,
  Briefcase,
  Users,
  MessageSquare,
  BookOpen,
  Settings,
  Bell,
  User,
  LogOut,
  Plus,
  MoreHorizontal,
  Minimize2,
  X,
  Terminal,
  Activity,
  Code,
  Layers,
  GitBranch,
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
} from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

interface Panel {
  id: string
  title: string
  icon: React.ElementType
  content: React.ReactNode
  width: number
  minWidth: number
  maxWidth: number
  isCollapsed: boolean
  isVisible: boolean
}

interface VerticalLayoutProps {
  children: React.ReactNode
  userProfile?: "freelance" | "client" | "formateur" | "admin"
}

export function VerticalLayout({ children, userProfile = "freelance" }: VerticalLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [panels, setPanels] = useState<Panel[]>([
    {
      id: "explorer",
      title: "Explorateur",
      icon: Layers,
      content: <ExplorerPanel userProfile={userProfile} />,
      width: 280,
      minWidth: 200,
      maxWidth: 400,
      isCollapsed: false,
      isVisible: true,
    },
    {
      id: "main",
      title: "Principal",
      icon: Code,
      content: children,
      width: 800,
      minWidth: 400,
      maxWidth: 1200,
      isCollapsed: false,
      isVisible: true,
    },
    {
      id: "sidebar",
      title: "Propriétés",
      icon: Settings,
      content: <PropertiesPanel />,
      width: 300,
      minWidth: 250,
      maxWidth: 500,
      isCollapsed: false,
      isVisible: true,
    },
    {
      id: "terminal",
      title: "Terminal",
      icon: Terminal,
      content: <TerminalPanel />,
      width: 400,
      minWidth: 300,
      maxWidth: 600,
      isCollapsed: true,
      isVisible: false,
    },
  ])

  const [isResizing, setIsResizing] = useState(false)
  const [resizingPanel, setResizingPanel] = useState<string | null>(null)

  // Load user profile from localStorage on mount
  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile")
    if (savedProfile && savedProfile !== userProfile) {
      // Update panels based on saved profile
      setPanels((prev) =>
        prev.map((panel) =>
          panel.id === "explorer" ? { ...panel, content: <ExplorerPanel userProfile={savedProfile as any} /> } : panel,
        ),
      )
    }
  }, [userProfile])

  const handleMouseDown = useCallback((panelId: string) => {
    setIsResizing(true)
    setResizingPanel(panelId)
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isResizing || !resizingPanel) return

      setPanels((prev) =>
        prev.map((panel) => {
          if (panel.id === resizingPanel) {
            const newWidth = Math.max(panel.minWidth, Math.min(panel.maxWidth, e.clientX - panel.width / 2))
            return { ...panel, width: newWidth }
          }
          return panel
        }),
      )
    },
    [isResizing, resizingPanel],
  )

  const handleMouseUp = useCallback(() => {
    setIsResizing(false)
    setResizingPanel(null)
  }, [])

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }
    }
  }, [isResizing, handleMouseMove, handleMouseUp])

  const togglePanel = (panelId: string) => {
    setPanels((prev) =>
      prev.map((panel) =>
        panel.id === panelId ? { ...panel, isCollapsed: !panel.isCollapsed, isVisible: true } : panel,
      ),
    )
  }

  const closePanel = (panelId: string) => {
    setPanels((prev) => prev.map((panel) => (panel.id === panelId ? { ...panel, isVisible: false } : panel)))
  }

  const visiblePanels = panels.filter((panel) => panel.isVisible)

  return (
    <div className="h-screen bg-slate-900 text-white flex flex-col overflow-hidden">
      {/* Top Bar */}
      <div className="h-12 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-4 flex-shrink-0">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">F</span>
            </div>
            <span className="text-sm font-semibold">FORCA</span>
          </Link>
          <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
            v2.1.0
          </Badge>
          <div className="text-xs text-slate-400">|</div>
          <div className="text-xs text-slate-400">
            {userProfile === "freelance" && "Freelance Dashboard"}
            {userProfile === "client" && "Client Portal"}
            {userProfile === "formateur" && "Trainer Studio"}
            {userProfile === "admin" && "Admin Console"}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="h-8 text-slate-300 hover:text-white">
            <GitBranch className="h-4 w-4 mr-1" />
            <span className="text-xs">main</span>
          </Button>
          <Button variant="ghost" size="sm" className="h-8 text-slate-300 hover:text-white">
            <Activity className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 text-slate-300 hover:text-white relative">
            <Bell className="h-4 w-4" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </Button>
          <UserMenu userProfile={userProfile} />
        </div>
      </div>

      {/* Tab Bar */}
      <div className="h-10 bg-slate-800 border-b border-slate-700 flex items-center px-2 flex-shrink-0">
        <div className="flex items-center space-x-1">
          {visiblePanels.map((panel) => (
            <div
              key={panel.id}
              className={cn(
                "flex items-center space-x-2 px-3 py-1.5 text-xs rounded-t border-b-2 cursor-pointer",
                panel.id === "main"
                  ? "bg-slate-700 border-blue-500 text-white"
                  : "bg-slate-800 border-transparent text-slate-400 hover:text-white hover:bg-slate-700",
              )}
              onClick={() => togglePanel(panel.id)}
            >
              <panel.icon className="h-3 w-3" />
              <span>{panel.title}</span>
              {panel.id !== "main" && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 hover:bg-slate-600"
                  onClick={(e) => {
                    e.stopPropagation()
                    closePanel(panel.id)
                  }}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>
          ))}
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-slate-400 hover:text-white">
            <Plus className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-slate-400 hover:text-white">
            <MoreHorizontal className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {visiblePanels.map((panel, index) => (
          <React.Fragment key={panel.id}>
            <div
              className={cn(
                "flex flex-col bg-slate-900 border-r border-slate-700 overflow-hidden",
                panel.isCollapsed ? "w-12" : "",
              )}
              style={{
                width: panel.isCollapsed ? "48px" : `${panel.width}px`,
                minWidth: panel.isCollapsed ? "48px" : `${panel.minWidth}px`,
                maxWidth: panel.isCollapsed ? "48px" : `${panel.maxWidth}px`,
              }}
            >
              {/* Panel Header */}
              <div className="h-8 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-2 flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <panel.icon className="h-4 w-4 text-slate-400" />
                  {!panel.isCollapsed && <span className="text-xs font-medium text-slate-300">{panel.title}</span>}
                </div>
                {!panel.isCollapsed && (
                  <div className="flex items-center space-x-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-5 w-5 p-0 text-slate-400 hover:text-white"
                      onClick={() => togglePanel(panel.id)}
                    >
                      <Minimize2 className="h-3 w-3" />
                    </Button>
                    {panel.id !== "main" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-5 w-5 p-0 text-slate-400 hover:text-white"
                        onClick={() => closePanel(panel.id)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                )}
              </div>

              {/* Panel Content */}
              <div className="flex-1 overflow-auto">
                {panel.isCollapsed ? (
                  <div className="p-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full h-8 p-0 text-slate-400 hover:text-white"
                      onClick={() => togglePanel(panel.id)}
                    >
                      <panel.icon className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  panel.content
                )}
              </div>
            </div>

            {/* Resizer */}
            {index < visiblePanels.length - 1 && !panel.isCollapsed && (
              <div
                className="w-1 bg-slate-700 hover:bg-slate-600 cursor-col-resize flex-shrink-0"
                onMouseDown={() => handleMouseDown(panel.id)}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-slate-800 border-t border-slate-700 flex items-center justify-between px-4 text-xs text-slate-400 flex-shrink-0">
        <div className="flex items-center space-x-4">
          <span>FORCA Platform</span>
          <span>•</span>
          <span>Connecté</span>
          <span>•</span>
          <span>3 notifications</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>UTF-8</span>
          <span>•</span>
          <span>FR</span>
          <span>•</span>
          <span>v2.1.0</span>
        </div>
      </div>
    </div>
  )
}

// Explorer Panel Component
function ExplorerPanel({ userProfile }: { userProfile: string }) {
  const navigation = {
    freelance: [
      { name: "Tableau de bord", href: "/dashboard", icon: Home },
      { name: "Mes Missions", href: "/missions", icon: Briefcase },
      { name: "Mes Services", href: "/services", icon: Target },
      { name: "Messages", href: "/messages", icon: MessageSquare },
      { name: "Formations", href: "/formations", icon: BookOpen },
      { name: "Finances", href: "/finances", icon: Wallet },
      { name: "Profil", href: "/profile", icon: User },
    ],
    client: [
      { name: "Tableau de bord", href: "/dashboard", icon: Home },
      { name: "Mes Projets", href: "/projects", icon: Briefcase },
      { name: "Freelances", href: "/freelances", icon: Users },
      { name: "Messages", href: "/messages", icon: MessageSquare },
      { name: "Factures", href: "/invoices", icon: FileText },
      { name: "Contrats", href: "/contracts", icon: Shield },
      { name: "Entreprise", href: "/company", icon: Building },
    ],
    formateur: [
      { name: "Tableau de bord", href: "/dashboard", icon: Home },
      { name: "Mes Cours", href: "/formations", icon: BookOpen },
      { name: "Étudiants", href: "/students", icon: Users },
      { name: "Messages", href: "/messages", icon: MessageSquare },
      { name: "Revenus", href: "/earnings", icon: TrendingUp },
      { name: "Certifications", href: "/certifications", icon: Award },
      { name: "Calendrier", href: "/schedule", icon: Calendar },
    ],
    admin: [
      { name: "Tableau de bord", href: "/dashboard", icon: Home },
      { name: "Utilisateurs", href: "/admin/users", icon: Users },
      { name: "Missions", href: "/admin/missions", icon: Briefcase },
      { name: "Formations", href: "/admin/formations", icon: GraduationCap },
      { name: "Finances", href: "/admin/finances", icon: Wallet },
      { name: "Rapports", href: "/admin/reports", icon: BarChart3 },
      { name: "Système", href: "/admin/system", icon: Settings },
    ],
  }

  const currentNav = navigation[userProfile as keyof typeof navigation] || navigation.freelance
  const pathname = usePathname()
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
  }

  return (
    <div className="p-3 space-y-2">
      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Navigation</div>
      {currentNav.map((item) => {
        const isActive = pathname === item.href
        return (
          <button
            key={item.name}
            onClick={() => handleNavigation(item.href)}
            className={cn(
              "w-full flex items-center space-x-2 px-2 py-1.5 text-sm rounded hover:bg-slate-800 transition-colors text-left",
              isActive ? "bg-slate-700 text-white" : "text-slate-300 hover:text-white",
            )}
          >
            <item.icon className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">{item.name}</span>
          </button>
        )
      })}

      <div className="pt-4 mt-4 border-t border-slate-700">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Raccourcis</div>
        <div className="space-y-1">
          <button
            onClick={() => router.push("/missions/create")}
            className="w-full flex items-center space-x-2 px-2 py-1 text-xs text-slate-400 hover:text-slate-300 cursor-pointer text-left"
          >
            <Plus className="h-3 w-3" />
            <span>Nouvelle mission</span>
          </button>
          <button
            onClick={() => router.push("/services/create")}
            className="w-full flex items-center space-x-2 px-2 py-1 text-xs text-slate-400 hover:text-slate-300 cursor-pointer text-left"
          >
            <Target className="h-3 w-3" />
            <span>Nouveau service</span>
          </button>
          <button
            onClick={() => router.push("/formations/create")}
            className="w-full flex items-center space-x-2 px-2 py-1 text-xs text-slate-400 hover:text-slate-300 cursor-pointer text-left"
          >
            <BookOpen className="h-3 w-3" />
            <span>Nouvelle formation</span>
          </button>
        </div>
      </div>
    </div>
  )
}

// Properties Panel Component
function PropertiesPanel() {
  const pathname = usePathname()

  return (
    <div className="p-3 space-y-4">
      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Propriétés</div>

      <div className="space-y-3">
        <div>
          <label className="text-xs text-slate-400 block mb-1">Page actuelle</label>
          <div className="text-sm text-slate-200">{pathname}</div>
        </div>

        <div>
          <label className="text-xs text-slate-400 block mb-1">Statut</label>
          <div className="text-sm text-slate-200">Actif</div>
        </div>

        <div>
          <label className="text-xs text-slate-400 block mb-1">Dernière modification</label>
          <div className="text-sm text-slate-200">Il y a 2 heures</div>
        </div>

        <div>
          <label className="text-xs text-slate-400 block mb-1">Créé par</label>
          <div className="text-sm text-slate-200">Marie Dupont</div>
        </div>

        <div>
          <label className="text-xs text-slate-400 block mb-1">Tags</label>
          <div className="flex flex-wrap gap-1">
            <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
              React
            </Badge>
            <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
              Node.js
            </Badge>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-700">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Actions rapides</div>
        <div className="space-y-2">
          <Button variant="outline" size="sm" className="w-full text-xs border-slate-600 text-slate-300 bg-transparent">
            Dupliquer
          </Button>
          <Button variant="outline" size="sm" className="w-full text-xs border-slate-600 text-slate-300 bg-transparent">
            Archiver
          </Button>
          <Button variant="outline" size="sm" className="w-full text-xs border-slate-600 text-slate-300 bg-transparent">
            Exporter
          </Button>
        </div>
      </div>
    </div>
  )
}

// Terminal Panel Component
function TerminalPanel() {
  return (
    <div className="p-3 font-mono text-sm">
      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Console</div>
      <div className="bg-slate-950 rounded p-3 space-y-1">
        <div className="text-green-400">$ forca --version</div>
        <div className="text-slate-300">FORCA Platform v2.1.0</div>
        <div className="text-green-400">$ forca status</div>
        <div className="text-slate-300">✓ Système opérationnel</div>
        <div className="text-slate-300">✓ Base de données connectée</div>
        <div className="text-slate-300">✓ 3 services actifs</div>
        <div className="text-green-400">$ _</div>
      </div>
    </div>
  )
}

// User Menu Component
function UserMenu({ userProfile }: { userProfile: string }) {
  const router = useRouter()

  const profileInfo = {
    freelance: { name: "Marie Dupont", role: "Développeuse Full-Stack" },
    client: { name: "Jean Martin", role: "Chef de Projet" },
    formateur: { name: "Pierre Dubois", role: "Formateur Expert" },
    admin: { name: "Admin FORCA", role: "Administrateur" },
  }

  const currentProfile = profileInfo[userProfile as keyof typeof profileInfo]

  const handleLogout = () => {
    localStorage.removeItem("userProfile")
    router.push("/")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" alt="@user" />
            <AvatarFallback className="bg-slate-700 text-slate-200">
              {currentProfile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-slate-800 border-slate-700" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none text-slate-200">{currentProfile.name}</p>
            <p className="text-xs leading-none text-slate-400">{currentProfile.role}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-slate-700" />
        <DropdownMenuItem
          className="text-slate-200 hover:bg-slate-700 cursor-pointer"
          onClick={() => router.push("/profile")}
        >
          <User className="mr-2 h-4 w-4" />
          <span>Mon Profil</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-slate-200 hover:bg-slate-700 cursor-pointer"
          onClick={() => router.push("/finances")}
        >
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Facturation</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-slate-200 hover:bg-slate-700 cursor-pointer"
          onClick={() => router.push("/settings")}
        >
          <Settings className="mr-2 h-4 w-4" />
          <span>Paramètres</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-slate-200 hover:bg-slate-700 cursor-pointer"
          onClick={() => router.push("/help")}
        >
          <HelpCircle className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-slate-700" />
        <DropdownMenuItem className="text-slate-200 hover:bg-slate-700 cursor-pointer" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Déconnexion</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
