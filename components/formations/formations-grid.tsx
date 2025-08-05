import { FormationCard } from "./formation-card"
import { FormationsPagination } from "./formations-pagination"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Formation {
  id: number
  title: string
  description: string
  instructor: string
  instructorAvatar: string
  instructorRating: number
  instructorBio: string
  category: string
  level: string
  duration: string
  totalHours: string
  lessons: number
  students: number
  rating: number
  reviews: Array<{
    student: string
    rating: number
    comment: string
    date: string
  }>
  price: string
  originalPrice?: string
  isFree: boolean
  isPopular: boolean
  thumbnail: string
  skills: string[]
  certificate: boolean
  language: string
  lastUpdated: string
  completionRate: number
  requirements: string[]
  whatYouLearn: string[]
  curriculum: Array<{
    title: string
    lessons: number
    duration: string
  }>
}

interface Props {
  page: number
  search: string
  category: string
  level: string
  price: string
  sort: string
}

// Simuler une base de données de formations
const allFormations: Formation[] = [
  {
    id: 1,
    title: "Maîtriser React et Next.js - De débutant à expert",
    description:
      "Formation complète pour apprendre React et Next.js avec des projets pratiques et des cas d'usage réels. Vous apprendrez à créer des applications web modernes, performantes et scalables.",
    instructor: "Marie Dupont",
    instructorAvatar: "/placeholder-user.jpg",
    instructorRating: 4.9,
    instructorBio:
      "Développeuse Full-Stack avec 8 ans d'expérience, spécialisée en React et Node.js. Formatrice certifiée avec plus de 5000 étudiants formés.",
    category: "Développement",
    level: "Intermédiaire",
    duration: "12 semaines",
    totalHours: "45h",
    lessons: 45,
    students: 1247,
    rating: 4.8,
    reviews: [
      {
        student: "Ahmed K.",
        rating: 5,
        comment: "Excellente formation ! Très bien structurée et les projets pratiques sont parfaits.",
        date: "Il y a 2 jours",
      },
      {
        student: "Sophie M.",
        rating: 5,
        comment: "Marie explique très bien, j'ai enfin compris React. Je recommande vivement !",
        date: "Il y a 1 semaine",
      },
    ],
    price: "149€",
    originalPrice: "199€",
    isFree: false,
    isPopular: true,
    thumbnail: "/placeholder.svg?height=200&width=300&text=React+Course",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "API Integration", "Deployment"],
    certificate: true,
    language: "Français",
    lastUpdated: "Décembre 2024",
    completionRate: 89,
    requirements: ["Connaissances de base en HTML/CSS", "Notions de JavaScript", "Motivation à apprendre"],
    whatYouLearn: [
      "Maîtriser React et ses concepts avancés",
      "Créer des applications avec Next.js",
      "Gérer l'état avec Redux et Context API",
      "Intégrer des APIs REST et GraphQL",
      "Déployer sur Vercel et Netlify",
    ],
    curriculum: [
      { title: "Introduction à React", lessons: 8, duration: "3h" },
      { title: "Composants et Props", lessons: 6, duration: "2.5h" },
      { title: "State et Hooks", lessons: 10, duration: "4h" },
      { title: "Next.js Fundamentals", lessons: 8, duration: "3.5h" },
      { title: "Routing et Navigation", lessons: 6, duration: "2h" },
      { title: "API et Data Fetching", lessons: 7, duration: "3h" },
    ],
  },
  {
    id: 2,
    title: "Design System et UI/UX avec Figma",
    description:
      "Apprenez à créer des design systems cohérents et des interfaces utilisateur modernes avec Figma. Formation pratique avec de vrais projets.",
    instructor: "Ahmed Ben Ali",
    instructorAvatar: "/placeholder-user.jpg",
    instructorRating: 4.8,
    instructorBio:
      "Designer UI/UX senior avec 6 ans d'expérience. Expert Figma et créateur de design systems pour des startups et grandes entreprises.",
    category: "Design",
    level: "Débutant",
    duration: "8 semaines",
    totalHours: "32h",
    lessons: 32,
    students: 892,
    rating: 4.7,
    reviews: [
      {
        student: "Fatou D.",
        rating: 5,
        comment: "Formation très complète, j'ai appris énormément sur les design systems.",
        date: "Il y a 3 jours",
      },
      {
        student: "Jean P.",
        rating: 4,
        comment: "Bon contenu mais j'aurais aimé plus d'exercices pratiques.",
        date: "Il y a 5 jours",
      },
    ],
    price: "99€",
    originalPrice: "129€",
    isFree: false,
    isPopular: false,
    thumbnail: "/placeholder.svg?height=200&width=300&text=Figma+Design",
    skills: ["Figma", "UI/UX", "Design System", "Prototyping", "User Research", "Wireframing"],
    certificate: true,
    language: "Français",
    lastUpdated: "Novembre 2024",
    completionRate: 92,
    requirements: ["Aucune expérience requise", "Ordinateur avec Figma installé", "Créativité et motivation"],
    whatYouLearn: [
      "Maîtriser Figma de A à Z",
      "Créer des design systems scalables",
      "Concevoir des interfaces modernes",
      "Prototyper des interactions",
      "Conduire des tests utilisateurs",
    ],
    curriculum: [
      { title: "Bases de Figma", lessons: 6, duration: "2h" },
      { title: "Design System Theory", lessons: 4, duration: "1.5h" },
      { title: "Création de composants", lessons: 8, duration: "3h" },
      { title: "Prototypage avancé", lessons: 6, duration: "2.5h" },
      { title: "Collaboration et handoff", lessons: 4, duration: "1.5h" },
      { title: "Projet final", lessons: 4, duration: "2h" },
    ],
  },
  {
    id: 3,
    title: "Marketing Digital pour Entrepreneurs",
    description:
      "Stratégies complètes de marketing digital : SEO, réseaux sociaux, publicité payante et analytics. Formation gratuite pour démocratiser le marketing digital.",
    instructor: "Fatou Diallo",
    instructorAvatar: "/placeholder-user.jpg",
    instructorRating: 4.9,
    instructorBio:
      "Consultante en marketing digital avec 7 ans d'expérience. Spécialisée en growth hacking et acquisition client pour startups africaines.",
    category: "Marketing",
    level: "Débutant",
    duration: "10 semaines",
    totalHours: "38h",
    lessons: 38,
    students: 1456,
    rating: 4.9,
    reviews: [
      {
        student: "Mamadou S.",
        rating: 5,
        comment: "Formation exceptionnelle et gratuite ! J'ai doublé mon CA grâce aux techniques apprises.",
        date: "Il y a 1 jour",
      },
      {
        student: "Aisha T.",
        rating: 5,
        comment: "Fatou explique très clairement, même pour les débutants. Merci pour cette formation gratuite !",
        date: "Il y a 4 jours",
      },
    ],
    price: "Gratuit",
    originalPrice: undefined,
    isFree: true,
    isPopular: true,
    thumbnail: "/placeholder.svg?height=200&width=300&text=Digital+Marketing",
    skills: ["SEO", "Google Ads", "Facebook Ads", "Analytics", "Content Marketing", "Email Marketing"],
    certificate: true,
    language: "Français",
    lastUpdated: "Janvier 2025",
    completionRate: 85,
    requirements: ["Aucune expérience requise", "Accès internet", "Motivation entrepreneuriale"],
    whatYouLearn: [
      "Créer une stratégie marketing complète",
      "Maîtriser le SEO et le référencement",
      "Lancer des campagnes publicitaires rentables",
      "Analyser et optimiser les performances",
      "Automatiser le marketing avec des outils",
    ],
    curriculum: [
      { title: "Fondamentaux du marketing digital", lessons: 6, duration: "2.5h" },
      { title: "SEO et référencement naturel", lessons: 8, duration: "3.5h" },
      { title: "Publicité payante (Google/Facebook)", lessons: 10, duration: "4h" },
      { title: "Content marketing et réseaux sociaux", lessons: 8, duration: "3h" },
      { title: "Email marketing et automation", lessons: 6, duration: "2.5h" },
    ],
  },
  // Ajouter plus de formations pour la pagination...
  ...Array.from({ length: 50 }, (_, i) => ({
    id: i + 4,
    title: `Formation ${i + 4} - Titre exemple`,
    description: `Description de la formation ${i + 4} avec du contenu détaillé et informatif.`,
    instructor: `Formateur ${i + 4}`,
    instructorAvatar: "/placeholder-user.jpg",
    instructorRating: 4.5 + Math.random() * 0.4,
    instructorBio: `Bio du formateur ${i + 4} avec son expérience et ses qualifications.`,
    category: ["Développement", "Design", "Marketing", "Rédaction", "Technologie"][i % 5],
    level: ["Débutant", "Intermédiaire", "Avancé"][i % 3],
    duration: `${4 + (i % 8)} semaines`,
    totalHours: `${20 + (i % 30)}h`,
    lessons: 20 + (i % 30),
    students: 100 + i * 50,
    rating: 4.0 + Math.random() * 1.0,
    reviews: [
      {
        student: `Étudiant ${i}`,
        rating: 5,
        comment: `Excellente formation ${i + 4} !`,
        date: "Il y a quelques jours",
      },
    ],
    price: i % 3 === 0 ? "Gratuit" : `${50 + i * 10}€`,
    originalPrice: i % 3 === 0 ? undefined : `${70 + i * 10}€`,
    isFree: i % 3 === 0,
    isPopular: i % 5 === 0,
    thumbnail: `/placeholder.svg?height=200&width=300&text=Formation+${i + 4}`,
    skills: [`Skill ${i}A`, `Skill ${i}B`, `Skill ${i}C`],
    certificate: true,
    language: "Français",
    lastUpdated: "Récemment",
    completionRate: 70 + (i % 30),
    requirements: [`Prérequis ${i}A`, `Prérequis ${i}B`],
    whatYouLearn: [`Objectif ${i}A`, `Objectif ${i}B`, `Objectif ${i}C`],
    curriculum: [
      { title: `Module ${i}A`, lessons: 5, duration: "2h" },
      { title: `Module ${i}B`, lessons: 7, duration: "3h" },
    ],
  })),
]

async function getFormations(filters: Props) {
  // Simuler un délai réseau
  await new Promise((resolve) => setTimeout(resolve, 200))

  let filtered = allFormations

  // Filtrer par recherche
  if (filters.search) {
    const searchLower = filters.search.toLowerCase()
    filtered = filtered.filter(
      (formation) =>
        formation.title.toLowerCase().includes(searchLower) ||
        formation.description.toLowerCase().includes(searchLower) ||
        formation.skills.some((skill) => skill.toLowerCase().includes(searchLower)),
    )
  }

  // Filtrer par catégorie
  if (filters.category !== "all") {
    filtered = filtered.filter((formation) => formation.category === filters.category)
  }

  // Filtrer par niveau
  if (filters.level !== "all") {
    filtered = filtered.filter((formation) => formation.level === filters.level)
  }

  // Filtrer par prix
  if (filters.price !== "all") {
    if (filters.price === "free") {
      filtered = filtered.filter((formation) => formation.isFree)
    } else if (filters.price === "paid") {
      filtered = filtered.filter((formation) => !formation.isFree)
    }
  }

  // Trier
  switch (filters.sort) {
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating)
      break
    case "recent":
      filtered.sort((a, b) => b.id - a.id)
      break
    case "students":
      filtered.sort((a, b) => b.students - a.students)
      break
    default: // popular
      filtered.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0))
  }

  // Pagination
  const itemsPerPage = 9
  const totalItems = filtered.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (filters.page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedFormations = filtered.slice(startIndex, endIndex)

  return {
    formations: paginatedFormations,
    totalItems,
    totalPages,
    currentPage: filters.page,
    itemsPerPage,
  }
}

export async function FormationsGrid(props: Props) {
  const { formations, totalItems, totalPages, currentPage } = await getFormations(props)

  return (
    <div className="space-y-6">
      {/* Results header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">
          {totalItems} formation{totalItems > 1 ? "s" : ""}
        </h2>
        <SortSelect currentSort={props.sort} />
      </div>

      {/* Formations grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {formations.map((formation) => (
          <FormationCard key={formation.id} formation={formation} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <FormationsPagination currentPage={currentPage} totalPages={totalPages} totalItems={totalItems} />
      )}
    </div>
  )
}

function SortSelect({ currentSort }: { currentSort: string }) {
  return (
    <Select defaultValue={currentSort}>
      <SelectTrigger className="w-48 border-gray-300">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="popular">Plus populaires</SelectItem>
        <SelectItem value="rating">Mieux notées</SelectItem>
        <SelectItem value="recent">Plus récentes</SelectItem>
        <SelectItem value="students">Plus d'étudiants</SelectItem>
      </SelectContent>
    </Select>
  )
}
