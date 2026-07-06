import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '1776 Coffee | Dark & Bold',
  description:
    'Modern craft coffee house with a moody, refined aesthetic. Handcrafted drinks, fresh pastries, and a space built for ritual — visit 1776 Coffee in Cookeville, TN.',
  openGraph: {
    title: '1776 Coffee | Dark & Bold',
    description:
      'Modern craft coffee with a moody aesthetic. Handcrafted drinks and fresh pastries in Cookeville, TN.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
