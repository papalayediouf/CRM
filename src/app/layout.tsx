import type { Metadata } from 'next'
import './globals.css'
import Layout from './components/layout'

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })

export const metadata: Metadata = {
  title: 'CRM',
  description: 'CRM',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body >
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
