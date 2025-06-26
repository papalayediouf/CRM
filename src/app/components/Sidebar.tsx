'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiHome, FiUsers  } from 'react-icons/fi'
import { IoIosPersonAdd } from 'react-icons/io'
// import { useState } from 'react'

const menu = [
  { label: 'Dashboard', href: '/dashboard', icon: <FiHome /> },
  { label: 'Clients', href: '/clients', icon: <FiUsers /> },
  { label: 'Ajouter un client', href: '/ajout-client', icon: <IoIosPersonAdd /> },
]
export default function SideBar() {
  const pathname = usePathname()
  return (
    <>
      
      <aside className="hidden md:flex  flex-col bg-[#093545] text-white w-64 h-auto p-5">
        <h2 className="text-2xl font-semibold mb-10">CRM</h2>
        <ul className="space-y-2">
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center space-x-2 text-lg px-3 py-2 rounded hover:bg-[#0b3c4e] transition ${
                  pathname === item.href ? 'bg-[#20DF7F] font-bold' : ''
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#093545] text-white border-t border-gray-700 z-50">
  <div className="flex justify-around items-center py-4">
  {menu.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className={`flex flex-col items-center text-sm ${
        pathname === item.href ? 'text-[#20DF7F]' : 'text-white'
      }`}
    >
      {item.icon}
    </Link>
  ))}

  
</div>


 
</nav>

    </>
  )
}
