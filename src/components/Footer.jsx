import { Link } from 'react-router-dom'

const COMPANY_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]
const JOIN_LINKS = [
  { to: '/apply', label: 'Apply as VA' },
  { to: '/resources', label: 'Resources' },
]

export default function Footer() {
  return (
    <footer className="border-t border-brand-ink/10 bg-brand-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo-workroom.jpg"
                alt=""
                className="h-10 w-10 rounded-lg object-cover"
                width="40"
                height="40"
              />
              <span className="font-display text-xl font-bold">OCS</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-white/80">
              Connecting skilled virtual assistants with businesses that need them. Scale or start your VA journey with us.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white">Company</h3>
            <ul className="mt-3 space-y-2">
              {COMPANY_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-white/80 hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white">Join</h3>
            <ul className="mt-3 space-y-2">
              {JOIN_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-white/80 hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/20 pt-10 sm:flex-row sm:justify-between">
          <p className="text-sm text-white/70">© {new Date().getFullYear()} OCS. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-sm text-white/80 hover:text-white transition">Contact</Link>
            <Link to="/apply" className="text-sm text-white/80 hover:text-white transition">Apply</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
