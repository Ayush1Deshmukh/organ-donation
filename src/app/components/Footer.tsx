import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm text-gray-300">
              We're revolutionizing organ donation through blockchain technology, making the process more transparent, secure, and efficient.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-indigo-400">Home</Link></li>
              <li><Link href="#" className="hover:text-indigo-400">About Us</Link></li>
              <li><Link href="#" className="hover:text-indigo-400">How It Works</Link></li>
              <li><Link href="#" className="hover:text-indigo-400">FAQs</Link></li>
              <li><Link href="#" className="hover:text-indigo-400">Contact Us</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-indigo-400">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-indigo-400">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-indigo-400">Cookie Policy</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
            <form className="mt-4">
              <label htmlFor="email-input" className="sr-only">Email address</label>
              <div className="flex items-center">
                <input
                  id="email-input"
                  type="email"
                  required
                  className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="ml-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2023 Web3 Organ Donation Platform. All rights reserved.</p>
          <p className="text-sm text-gray-400">Powered by Blockchain Technology</p>
        </div>
      </div>
    </footer>
  )
}

