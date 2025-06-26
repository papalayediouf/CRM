'use client'

import { usePathname } from 'next/navigation'
import Sidebar from './Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const masquerSidebar = pathname === '/' || pathname === '/connexion'
  return (
    <div className="flex min-h-screen ">
      {!masquerSidebar && <Sidebar />}
      <main className="">{children}</main>
    </div>
  )
}
