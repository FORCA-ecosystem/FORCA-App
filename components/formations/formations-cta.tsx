import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

export function FormationsCTA() {
  return (
    <>
      {/* Load More */}
      <div className="text-center mb-12">
        <Button
          variant="outline"
          size="lg"
          className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 bg-transparent"
        >
          Voir plus de formations
          <BookOpen className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
        <CardContent className="p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Vous êtes expert dans votre domaine ?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Partagez vos connaissances et générez des revenus en créant vos propres formations sur FORCA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              >
                Devenir formateur
              </Button>
            </Link>
            <Link href="/missions/public">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                Découvrir les missions
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
