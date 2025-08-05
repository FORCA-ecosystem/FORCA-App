"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Briefcase, Users, BookOpen, Package, Menu, X, LogIn, UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

/**
 * Top-level public layout used by all public pages (missions, freelances, etc.).
 * – Responsive header with mobile sheet navigation
 * – Auth buttons (placeholder; replace with real auth logic as needed)
 * – Footer with extra “À propos” and “Support” links
 */

interface PublicLayoutProps {
  children: React.ReactNode
}

export function PublicLayout({ children }: PublicLayoutProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* ----- Navigation items ----- */
  const nav = [
    { label: "Accueil", href: "/", icon: Home },
    { label: "Missions", href: "/missions/public", icon: Briefcase },
    { label: "Freelances", href: "/freelances/public", icon: Users },
    { label: "Formations", href: "/formations/public", icon: BookOpen },
    { label: "Services", href: "/services/public", icon: Package },
  ] as const

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* ---------- HEADER ---------- */}
      <header
        className={`sticky top-0 z-50 w-full transition-colors ${
          scrolled ? "bg-white shadow-sm" : "bg-white/80 backdrop-blur"
        }`}
      >
        <div className="mx-auto flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-bold text-white sm:h-10 sm:w-10">
              F
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-lg font-bold text-transparent sm:text-2xl">
              FORCA
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden gap-1 md:flex">
            {nav.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === href ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Auth buttons – replace with real auth once available */}
          <div className="hidden items-center gap-2 md:flex">
            <Link href="/auth">
              <Button variant="ghost" size="sm">
                <LogIn className="mr-2 h-4 w-4" />
                Connexion
              </Button>
            </Link>
            <Link href="/auth">
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <UserPlus className="mr-2 h-4 w-4" />
                Inscription
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Ouvrir le menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="flex w-[85%] max-w-xs flex-col p-0 sm:w-80">
              {/* Sheet header */}
              <div className="flex items-center justify-between border-b px-4 py-4">
                <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-bold text-white">
                    F
                  </div>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-lg font-bold text-transparent">
                    FORCA
                  </span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Fermer le menu">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Sheet navigation */}
              <nav className="flex flex-col gap-1 px-4 py-6">
                {nav.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-3 rounded-md px-3 py-3 text-base font-medium transition-colors ${
                      pathname === href
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </Link>
                ))}
              </nav>

              {/* Auth buttons mobile */}
              <div className="mt-auto flex flex-col gap-3 border-t px-4 py-6">
                <Link href="/auth" onClick={() => setOpen(false)}>
                  <Button variant="outline" className="w-full bg-transparent">
                    Connexion
                  </Button>
                </Link>
                <Link href="/auth" onClick={() => setOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    Inscription
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* ---------- MAIN ---------- */}
      <main className="flex-1">{children}</main>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t bg-gray-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Col 1 – Logo & tagline */}
            <div className="sm:col-span-2">
              <Link href="/" className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-bold text-white">
                  F
                </div>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-lg font-bold text-transparent">
                  FORCA
                </span>
              </Link>
              <p className="max-w-sm text-sm text-gray-600">
                La plateforme qui connecte les talents africains aux opportunités mondiales.
              </p>
            </div>

            {/* Col 2 – Plateforme */}
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-900">Plateforme</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-blue-600">
                    À&nbsp;propos
                  </Link>
                </li>
                <li>
                  <Link href="/missions/public" className="text-gray-600 hover:text-blue-600">
                    Missions
                  </Link>
                </li>
                <li>
                  <Link href="/freelances/public" className="text-gray-600 hover:text-blue-600">
                    Freelances
                  </Link>
                </li>
                <li>
                  <Link href="/formations/public" className="text-gray-600 hover:text-blue-600">
                    Formations
                  </Link>
                </li>
                <li>
                  <Link href="/services/public" className="text-gray-600 hover:text-blue-600">
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3 – Support */}
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-900">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/support" className="text-gray-600 hover:text-blue-600">
                    Centre d&apos;aide
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/legal/terms" className="text-gray-600 hover:text-blue-600">
                    CGU
                  </Link>
                </li>
                <li>
                  <Link href="/legal/privacy" className="text-gray-600 hover:text-blue-600">
                    Confidentialité
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} FORCA. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}
