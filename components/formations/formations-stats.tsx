import { BookOpen, Users, Clock, Award } from "lucide-react"

// Simuler une fonction async pour récupérer les stats
async function getFormationsStats() {
  // Simuler un délai réseau
  await new Promise((resolve) => setTimeout(resolve, 100))

  return [
    { label: "Formations disponibles", value: "450+", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Étudiants actifs", value: "25,000+", icon: Users, color: "text-green-600", bg: "bg-green-100" },
    { label: "Heures de contenu", value: "1,200+", icon: Clock, color: "text-purple-600", bg: "bg-purple-100" },
    { label: "Certificats délivrés", value: "18,500+", icon: Award, color: "text-yellow-600", bg: "bg-yellow-100" },
  ]
}

export async function FormationsStats() {
  const stats = await getFormationsStats()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.bg} rounded-lg mb-2`}>
            <stat.icon className={`h-6 w-6 ${stat.color}`} />
          </div>
          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
