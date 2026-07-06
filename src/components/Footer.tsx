import Link from 'next/link'
import { Camera, MessageCircle, AtSign } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-deep border-t border-surface">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Column 1 — Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-xl font-bold text-blue"
            >
              1776
            </Link>
            <p className="mt-2 text-sm text-white/50">
              Crafted with purpose since 2024
            </p>
          </div>

          {/* Column 2 — Hours */}
          <div>
            <h3 className="font-serif text-white/90">Hours</h3>
            <div className="mt-2 space-y-1 text-sm text-white/60">
              <p>Mon–Fri &middot; 6AM–8PM</p>
              <p>Sat–Sun &middot; 7AM–9PM</p>
            </div>
          </div>

          {/* Column 3 — Connect */}
          <div>
            <h3 className="font-serif text-white/90">Connect</h3>
            <div className="mt-2 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-muted transition-colors hover:text-blue"
              >
                <Camera size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-muted transition-colors hover:text-blue"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-muted transition-colors hover:text-blue"
              >
                <AtSign size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-surface pt-6">
          <p className="text-sm text-white/40">
            &copy; 2025 1776 Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
