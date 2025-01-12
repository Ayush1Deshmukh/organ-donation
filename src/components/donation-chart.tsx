'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', donors: 200 },
  { name: 'Feb', donors: 300 },
  { name: 'Mar', donors: 200 },
  { name: 'Apr', donors: 400 },
  { name: 'May', donors: 300 },
  { name: 'Jun', donors: 450 },
  { name: 'Jul', donors: 350 },
  { name: 'Aug', donors: 400 },
  { name: 'Sep', donors: 250 },
  { name: 'Oct', donors: 500 },
  { name: 'Nov', donors: 450 },
  { name: 'Dec', donors: 550 },
]

export function DonationChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="donors" 
            stroke="#4F46E5" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

