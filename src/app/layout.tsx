import './globals.css'
import { Inter } from 'next/font/google'

import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web3 Organ Donation Platform',
  description: 'Empowering Lives Through Blockchain Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <main>{children}</main>
        
      </body>
    </html>
  )
}

