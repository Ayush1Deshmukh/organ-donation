import { Card, CardContent } from "@/components/ui/card"
import { Heart, Scale, Droplets } from 'lucide-react'

export function OrganStats() {
  return (
    <div className="bg-[#f8d7d0] rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Organs that can be donated after death</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-red-500" />
              <div>
                <p className="text-sm text-muted-foreground">Heart</p>
                <p className="font-medium">Size of fist</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Scale className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Weight</p>
                <p className="font-medium">225-350 gm</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Droplets className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Blood Flow</p>
                <p className="font-medium">2000 gallons/day</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

