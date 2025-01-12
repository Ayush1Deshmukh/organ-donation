import Link from "next/link"
import { Users, UserPlus, ClipboardList, Clock, UserX, FileText, Repeat2 } from 'lucide-react'

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r p-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl text-blue-600">WeCare</h1>
      </div>
      
      <nav className="space-y-2">
        <Link 
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <Users className="h-5 w-5" />
          Hospital Dashboard
        </Link>
        
        <Link 
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <UserPlus className="h-5 w-5" />
          Register Donor
        </Link>
        
        <Link 
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <UserPlus className="h-5 w-5" />
          Register Patient
        </Link>
        
        <Link 
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <ClipboardList className="h-5 w-5" />
          Donor List
        </Link>
        
        <Link 
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <Clock className="h-5 w-5" />
          Waiting List
        </Link>
        
        <Link 
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <UserX className="h-5 w-5" />
          Non-verified Donors
        </Link>
        
        <Link 
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <FileText className="h-5 w-5" />
          View Pledges
        </Link>
        
        <Link 
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <Repeat2 className="h-5 w-5" />
          Transplant Match
        </Link>
      </nav>
    </div>
  )
}

