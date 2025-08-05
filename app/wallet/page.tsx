"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  Smartphone,
  Download,
  Upload,
  Plus,
  History,
  DollarSign,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  RefreshCw,
  Send,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function WalletPage() {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR")
  const [transferAmount, setTransferAmount] = useState("")
  const [selectedMethod, setSelectedMethod] = useState("")

  const walletBalances = [
    { currency: "EUR", balance: 3247.5, symbol: "€", change: +12.5, flag: "🇪🇺" },
    { currency: "XAF", balance: 2130000, symbol: "FCFA", change: +8.2, flag: "🇨🇲" },
    { currency: "XOF", balance: 1890000, symbol: "FCFA", change: +5.1, flag: "🇸🇳" },
    { currency: "USD", balance: 456.78, symbol: "$", change: -2.3, flag: "🇺🇸" },
  ]

  const transactions = [
    {
      id: "TXN001",
      type: "income",
      description: "Paiement mission - Logo design",
      client: "TechCorp",
      amount: 450,
      currency: "EUR",
      status: "completed",
      date: "2024-01-15",
      method: "Carte bancaire",
      reference: "REF-450-2024",
    },
    {
      id: "TXN002",
      type: "withdrawal",
      description: "Retrait vers MTN Money",
      client: "MTN Cameroun",
      amount: -280000,
      currency: "XAF",
      status: "pending",
      date: "2024-01-14",
      method: "Mobile Money",
      reference: "MTN-280K-2024",
    },
    {
      id: "TXN003",
      type: "income",
      description: "Formation React - Paiement étudiant",
      client: "Formation FORCA",
      amount: 89,
      currency: "EUR",
      status: "completed",
      date: "2024-01-13",
      method: "PayPal",
      reference: "PP-89-2024",
    },
    {
      id: "TXN004",
      type: "transfer",
      description: "Conversion EUR vers XAF",
      client: "FORCA Exchange",
      amount: -200,
      currency: "EUR",
      status: "completed",
      date: "2024-01-12",
      method: "Conversion",
      reference: "CONV-200-2024",
      convertedAmount: 131200,
      convertedCurrency: "XAF",
    },
    {
      id: "TXN005",
      type: "expense",
      description: "Commission FORCA",
      client: "FORCA Platform",
      amount: -45,
      currency: "EUR",
      status: "completed",
      date: "2024-01-10",
      method: "Prélèvement",
      reference: "COM-45-2024",
    },
  ]

  const paymentMethods = [
    {
      id: "card",
      name: "Carte bancaire",
      description: "Visa/Mastercard",
      icon: CreditCard,
      available: true,
      fees: "2.9% + 0.30€",
    },
    {
      id: "mtn",
      name: "MTN Money",
      description: "Mobile Money Cameroun",
      icon: Smartphone,
      available: true,
      fees: "1.5%",
    },
    {
      id: "om",
      name: "Orange Money",
      description: "Mobile Money multi-pays",
      icon: Smartphone,
      available: true,
      fees: "1.8%",
    },
    {
      id: "paypal",
      name: "PayPal",
      description: "Paiement international",
      icon: CreditCard,
      available: true,
      fees: "3.4% + 0.35€",
    },
    {
      id: "bank",
      name: "Virement bancaire",
      description: "SEPA/Swift",
      icon: Upload,
      available: true,
      fees: "0.5% (min 2€)",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Terminé
          </Badge>
        )
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Clock className="h-3 w-3 mr-1" />
            En attente
          </Badge>
        )
      case "failed":
        return (
          <Badge className="bg-red-100 text-red-800">
            <AlertCircle className="h-3 w-3 mr-1" />
            Échoué
          </Badge>
        )
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
      case "transfer":
        return <RefreshCw className="h-4 w-4 text-blue-600" />
      default:
        return <DollarSign className="h-4 w-4 text-slate-600" />
    }
  }

  const formatAmount = (amount: number, currency: string) => {
    const currencyData = walletBalances.find((w) => w.currency === currency)
    if (!currencyData) return `${amount}`

    if (currency === "XAF" || currency === "XOF") {
      return `${amount.toLocaleString()} ${currencyData.symbol}`
    }
    return `${amount.toLocaleString()} ${currencyData.symbol}`
  }

  return (
    <DashboardLayout userProfile="freelance">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">FORCA Wallet</h1>
            <p className="text-slate-600">Gérez vos paiements et transferts multi-devises</p>
          </div>
          <div className="flex space-x-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Retirer
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Retirer des fonds</DialogTitle>
                </DialogHeader>
                <WithdrawForm methods={paymentMethods} />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  <Upload className="h-4 w-4 mr-2" />
                  Recharger
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Recharger le wallet</DialogTitle>
                </DialogHeader>
                <RechargeForm methods={paymentMethods} />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Balances multi-devises */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {walletBalances.map((wallet) => (
            <Card key={wallet.currency} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl">{wallet.flag}</span>
                      <p className="text-sm font-medium text-slate-600">{wallet.currency}</p>
                    </div>
                    <p className="text-2xl font-bold">{formatAmount(wallet.balance, wallet.currency)}</p>
                    <p
                      className={`text-xs mt-1 flex items-center ${
                        wallet.change > 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {wallet.change > 0 ? "+" : ""}
                      {wallet.change}% ce mois
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-50">
                    <Wallet className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="transactions" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="transfer">Conversion</TabsTrigger>
            <TabsTrigger value="methods">Moyens de paiement</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          <TabsContent value="transactions" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center">
                  <History className="h-5 w-5 mr-2" />
                  Historique des transactions
                </CardTitle>
                <div className="flex space-x-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes les devises</SelectItem>
                      <SelectItem value="EUR">EUR seulement</SelectItem>
                      <SelectItem value="XAF">XAF seulement</SelectItem>
                      <SelectItem value="XOF">XOF seulement</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Exporter
                  </Button>
                </div>
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
                              <p className="text-sm text-slate-500">Réf: {transaction.reference}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{transaction.client}</TableCell>
                        <TableCell className="text-sm text-slate-600">{transaction.method}</TableCell>
                        <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                        <TableCell className="text-sm text-slate-600">{transaction.date}</TableCell>
                        <TableCell className="text-right">
                          <div>
                            <span
                              className={`font-medium ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}
                            >
                              {transaction.amount > 0 ? "+" : ""}
                              {formatAmount(transaction.amount, transaction.currency)}
                            </span>
                            {transaction.convertedAmount && (
                              <p className="text-xs text-slate-500">
                                ≈ {formatAmount(transaction.convertedAmount, transaction.convertedCurrency!)}
                              </p>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transfer" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <RefreshCw className="h-5 w-5 mr-2" />
                  Conversion de devises
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CurrencyConverter walletBalances={walletBalances} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="methods" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Moyens de paiement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {paymentMethods.map((method) => (
                    <Card key={method.id} className="border-2 hover:border-blue-300 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-blue-50">
                            <method.icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{method.name}</h4>
                            <p className="text-sm text-slate-600">{method.description}</p>
                            <p className="text-xs text-slate-500">Frais: {method.fees}</p>
                          </div>
                          <Badge variant={method.available ? "default" : "secondary"}>
                            {method.available ? "Disponible" : "Bientôt"}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Paramètres du wallet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Devise principale</h3>
                  <Select defaultValue="EUR">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="EUR">🇪🇺 Euro (EUR)</SelectItem>
                      <SelectItem value="XAF">🇨🇲 Franc CFA Central (XAF)</SelectItem>
                      <SelectItem value="XOF">🇸🇳 Franc CFA Ouest (XOF)</SelectItem>
                      <SelectItem value="USD">🇺🇸 Dollar US (USD)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Paiements reçus</p>
                        <p className="text-sm text-slate-600">Notification lors de la réception d'un paiement</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Retraits traités</p>
                        <p className="text-sm text-slate-600">Notification quand un retrait est effectué</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Taux de change</p>
                        <p className="text-sm text-slate-600">Alertes sur les fluctuations importantes</p>
                      </div>
                      <input type="checkbox" className="rounded" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Seuils automatiques</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="autoWithdraw">Retrait automatique à partir de:</Label>
                      <div className="flex space-x-2 mt-1">
                        <Input id="autoWithdraw" placeholder="1000" className="w-32" />
                        <Select defaultValue="EUR">
                          <SelectTrigger className="w-24">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="EUR">EUR</SelectItem>
                            <SelectItem value="XAF">XAF</SelectItem>
                            <SelectItem value="XOF">XOF</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
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

// Composant pour le formulaire de retrait
function WithdrawForm({ methods }: { methods: any[] }) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="withdrawAmount">Montant à retirer</Label>
        <Input id="withdrawAmount" type="number" placeholder="100" />
      </div>

      <div className="space-y-2">
        <Label>Devise</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionner une devise" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="EUR">🇪🇺 Euro (EUR)</SelectItem>
            <SelectItem value="XAF">🇨🇲 Franc CFA (XAF)</SelectItem>
            <SelectItem value="XOF">🇸🇳 Franc CFA (XOF)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Méthode de retrait</Label>
        <div className="space-y-2">
          {methods
            .filter((m) => m.available)
            .map((method) => (
              <div key={method.id} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-slate-50">
                <input type="radio" name="withdrawMethod" value={method.id} />
                <method.icon className="h-5 w-5 text-slate-600" />
                <div className="flex-1">
                  <p className="font-medium">{method.name}</p>
                  <p className="text-sm text-slate-500">Frais: {method.fees}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
        <Send className="h-4 w-4 mr-2" />
        Confirmer le retrait
      </Button>
    </div>
  )
}

// Composant pour le formulaire de rechargement
function RechargeForm({ methods }: { methods: any[] }) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="rechargeAmount">Montant à ajouter</Label>
        <Input id="rechargeAmount" type="number" placeholder="50" />
      </div>

      <div className="space-y-2">
        <Label>Devise</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionner une devise" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="EUR">🇪🇺 Euro (EUR)</SelectItem>
            <SelectItem value="XAF">🇨🇲 Franc CFA (XAF)</SelectItem>
            <SelectItem value="XOF">🇸🇳 Franc CFA (XOF)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Méthode de paiement</Label>
        <div className="space-y-2">
          {methods
            .filter((m) => m.available)
            .map((method) => (
              <div key={method.id} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-slate-50">
                <input type="radio" name="rechargeMethod" value={method.id} />
                <method.icon className="h-5 w-5 text-slate-600" />
                <div className="flex-1">
                  <p className="font-medium">{method.name}</p>
                  <p className="text-sm text-slate-500">Frais: {method.fees}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600">
        <Plus className="h-4 w-4 mr-2" />
        Recharger le wallet
      </Button>
    </div>
  )
}

// Composant pour la conversion de devises
function CurrencyConverter({ walletBalances }: { walletBalances: any[] }) {
  const [fromCurrency, setFromCurrency] = useState("EUR")
  const [toCurrency, setToCurrency] = useState("XAF")
  const [amount, setAmount] = useState("")

  const exchangeRates: Record<string, Record<string, number>> = {
    EUR: { XAF: 656, XOF: 656, USD: 1.08 },
    XAF: { EUR: 0.00152, XOF: 1, USD: 0.00164 },
    XOF: { EUR: 0.00152, XAF: 1, USD: 0.00164 },
    USD: { EUR: 0.926, XAF: 610, XOF: 610 },
  }

  const convertedAmount = amount
    ? (Number.parseFloat(amount) * (exchangeRates[fromCurrency]?.[toCurrency] || 1)).toFixed(2)
    : ""

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>De</Label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {walletBalances.map((wallet) => (
                  <SelectItem key={wallet.currency} value={wallet.currency}>
                    {wallet.flag} {wallet.currency} - {wallet.balance.toLocaleString()} {wallet.symbol}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Montant</Label>
            <Input
              id="amount"
              type="number"
              placeholder="100"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Vers</Label>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {walletBalances.map((wallet) => (
                  <SelectItem key={wallet.currency} value={wallet.currency}>
                    {wallet.flag} {wallet.currency}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Vous recevrez</Label>
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-lg font-semibold text-green-800">
                {convertedAmount} {walletBalances.find((w) => w.currency === toCurrency)?.symbol}
              </p>
              <p className="text-sm text-green-600">
                Taux: 1 {fromCurrency} = {exchangeRates[fromCurrency]?.[toCurrency]} {toCurrency}
              </p>
            </div>
          </div>
        </div>
      </div>

      {amount && (
        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium mb-2">Résumé de la conversion</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Montant à convertir:</span>
              <span>
                {amount} {fromCurrency}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Frais de conversion (0.5%):</span>
              <span>
                {(Number.parseFloat(amount) * 0.005).toFixed(2)} {fromCurrency}
              </span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Vous recevrez:</span>
              <span>
                {convertedAmount} {toCurrency}
              </span>
            </div>
          </div>
          <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600">
            <RefreshCw className="h-4 w-4 mr-2" />
            Convertir maintenant
          </Button>
        </div>
      )}
    </div>
  )
}
