import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/apply', label: 'Apply' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-brand-ink/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="OCS Home">
          <img
            src={`${import.meta.env.BASE_URL}logo-workroom.jpg`}
            alt=""
            className="h-10 w-10 rounded-lg object-cover sm:h-12 sm:w-12"
            width="48"
            height="48"
          />
          <span className="font-display text-xl font-bold text-brand-ink sm:text-2xl">OCS</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                location.pathname === to
                  ? 'bg-brand-cream text-brand-deep'
                  : 'text-brand-ink/80 hover:bg-brand-cream hover:text-brand-deep'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex md:items-center md:gap-3">
          <Link to="/apply" className="btn-primary text-sm">
            Apply as VA
          </Link>
          <Link to="/contact" className="btn-secondary text-sm">
            Book a call
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-brand-ink/10 bg-white md:hidden ${open ? 'block' : 'hidden'}`}
        role="region"
        aria-label="Mobile menu"
      >
        <div className="flex flex-col gap-1 px-4 py-3">
          {NAV.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                location.pathname === to ? 'bg-brand-cream text-brand-deep' : 'text-brand-ink'
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-brand-ink/10 pt-3">
            <Link to="/apply" className="btn-primary text-center text-sm" onClick={() => setOpen(false)}>
              Apply as VA
            </Link>
            <Link to="/contact" className="btn-secondary text-center text-sm" onClick={() => setOpen(false)}>
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
