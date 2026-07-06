'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/#menu' },
  { label: 'About', href: '/#about' },
  { label: 'Locations', href: '/#locations' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-espresso">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl font-bold text-cream tracking-wide"
        >
          1776
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-cream/80 transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            className="rounded-full bg-copper px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-copper-light"
          >
            Order Online
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="text-cream md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 md:hidden',
          mobileOpen ? 'max-h-64' : 'max-h-0'
        )}
      >
        <div className="flex flex-col gap-2 border-t border-cream/10 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-2 text-sm text-cream/80 transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-block w-fit rounded-full bg-copper px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-copper-light"
          >
            Order Online
          </Link>
        </div>
      </div>
    </header>
  )
}
