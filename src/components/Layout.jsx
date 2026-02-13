import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-[100] -translate-x-[200%] rounded-lg bg-white px-4 py-2 text-sm font-medium text-brand-ink shadow-md transition-transform focus:translate-x-0 focus:outline-none focus:ring-2 focus:ring-brand-deep"
      >
        Skip to main content
      </a>
      <Header />
      <main className="flex-1" id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
