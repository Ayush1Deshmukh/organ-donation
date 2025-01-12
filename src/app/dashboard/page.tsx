import { Camera, Users, Activity } from 'lucide-react'
import Navbar from "@/components/Navbar"
import { Sidebar } from "@/components/sidebar"
import { MetricCard } from "@/components/metric-card"
import { DonationChart } from "@/components/donation-chart"
import { OrganStats } from "@/components/organ-stats"
import { Card, CardContent } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MetricCard
              title="DONORS AVAILABLE"
              value="3,462"
              icon={Camera}
              iconColor="bg-purple-500"
            />
            <MetricCard
              title="VERIFIED DONORS"
              value="2,300"
              icon={Users}
              iconColor="bg-red-500"
            />
            <MetricCard
              title="NUMBER OF PATIENTS"
              value="20,000"
              icon={Activity}
              iconColor="bg-emerald-500"
            />
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Donation Rate</h2>
              <DonationChart />
            </CardContent>
          </Card>
          
          <OrganStats />
        </div>
      </main>
    </div>
  )
}

