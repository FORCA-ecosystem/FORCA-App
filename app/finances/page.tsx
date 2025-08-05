"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DollarSign,
  TrendingUp,
  Download,
  CreditCard,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Filter,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function FinancesPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")

  const transactions = [
    {
      id: 1,
      type: "income",
      description: "Paiement - Développement app mobile",
      client: "TechCorp",
      amount: 1500,
      status: "completed",
      date: "2024-01-10",
      method: "Virement bancaire",
    },
    {
      id: 2,
      type: "income",
      description: "Paiement - Design UI/UX",
      client: "StartupXYZ",
      amount: 800,
      status: "pending",
      date: "2024-01-08",
      method: "PayPal",
    },
    {
      id: 3,
      type: "expense",
      description: "Commission FORCA",
      client: "FORCA",
      amount: -150,
      status: "completed",
      date: "2024-01-10",
      method: "Prélèvement automatique",
    },
    {
      id: 4,
      type: "withdrawal",
      description: "Retrait vers compte bancaire",
      client: "Banque",
      amount: -1200,
      status: "completed",
      date: "2024-01-05",
      method: "Virement bancaire",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Terminé</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">En attente</Badge>
      case "failed":
        return <Badge className="bg-red-100 text-red-800">Échoué</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "income":
        return <ArrowUpRight className="h-4 w-4 text-green-600" />
      case "expense":
      case "withdrawal":
        return <ArrowDownRight className="h-4 w-4 text-red-600" />
      default:
        return <DollarSign className="h-4 w-4 text-slate-600" />
    }
  }

  return (
    <DashboardLayout userProfile="freelance">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Finances</h1>
            <p className="text-slate-600">Gérez vos revenus, dépenses et paiements</p>
          </div>
          <div className="flex space-x-3">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Cette semaine</SelectItem>
                <SelectItem value="month">Ce mois</SelectItem>
                <SelectItem value="quarter">Ce trimestre</SelectItem>
                <SelectItem value="year">Cette année</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exporter
            </Button>
          </div>
        </div>

        {/* Financial Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Solde disponible</p>
                  <p className="text-2xl font-bold">3,247€</p>
                  <p className="text-xs text-green-600 mt-1">+12% ce mois</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-50">
                  <Wallet className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Revenus ce mois</p>
                  <p className="text-2xl font-bold">2,450€</p>
                  <p className="text-xs text-green-600 mt-1">+15% vs dernier mois</p>
                </div>
                <div className="p-3 rounded-lg bg-green-50">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">En attente</p>
                  <p className="text-2xl font-bold">800€</p>
                  <p className="text-xs text-yellow-600 mt-1">2 paiements</p>
                </div>
                <div className="p-3 rounded-lg bg-yellow-50">
                  <Calendar className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Commissions</p>
                  <p className="text-2xl font-bold">245€</p>
                  <p className="text-xs text-slate-500 mt-1">10% des revenus</p>
                </div>
                <div className="p-3 rounded-lg bg-purple-50">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="transactions" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="invoices">Factures</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          <TabsContent value="transactions" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Historique des transactions</CardTitle>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrer
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-50">
                      <TableHead>Transaction</TableHead>
                      <TableHead>Client/Service</TableHead>
                      <TableHead>Méthode</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Montant</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id} className="hover:bg-slate-50">
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            {getTransactionIcon(transaction.type)}
                            <div>
                              <p className="font-medium">{transaction.description}</p>
                              <p className="text-sm text-slate-500">
                                ID: #{transaction.id.toString().padStart(6, "0")}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{transaction.client}</TableCell>
                        <TableCell className="text-sm text-slate-600">{transaction.method}</TableCell>
                        <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                        <TableCell className="text-sm text-slate-600">{transaction.date}</TableCell>
                        <TableCell className="text-right">
                          <span className={`font-medium ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                            {transaction.amount > 0 ? "+" : ""}
                            {transaction.amount}€
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="invoices" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Gestion des factures</h3>
                <p className="text-slate-600 mb-4">Créez et gérez vos factures automatiquement</p>
                <Button className="bg-blue-600 hover:bg-blue-700">Créer une facture</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Paramètres de paiement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Méthodes de paiement</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-8 w-8 text-blue-600" />
                        <div>
                          <p className="font-medium">Compte bancaire</p>
                          <p className="text-sm text-slate-600">**** **** **** 1234</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Principal</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Wallet className="h-8 w-8 text-purple-600" />
                        <div>
                          <p className="font-medium">PayPal</p>
                          <p className="text-sm text-slate-600">marie.dupont@example.com</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Configurer
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Préférences de retrait</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Retrait automatique</p>
                        <p className="text-sm text-slate-600">Retirer automatiquement les fonds chaque semaine</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Activer
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Seuil minimum</p>
                        <p className="text-sm text-slate-600">Montant minimum pour déclencher un retrait</p>
                      </div>
                      <span className="font-medium">100€</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
