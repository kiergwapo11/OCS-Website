import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="relative z-10">
      <section className="bg-brand-cream/40 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-display text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl">Our story</h1>
          <p className="mt-5 text-lg text-brand-ink/85">
            We built OCS to connect businesses with skilled virtual assistants — and to give VAs a clear path to grow. Our system is designed for trust, clarity, and results.
          </p>
        </div>
      </section>

      <section className="border-t border-brand-ink/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="section-heading">Mission & values</h2>
          <p className="section-sub">
            We believe that the right VA can transform how you work. Our mission is to make that match simple, transparent, and outcome-focused.
          </p>
          <ul className="mt-10 space-y-4 text-brand-ink/85">
            <li className="flex gap-3"><span className="text-brand-deep font-semibold">Quality first</span> — Every VA is vetted and supported so clients get consistent, professional work.</li>
            <li className="flex gap-3"><span className="text-brand-deep font-semibold">Clear processes</span> — From onboarding to ongoing tasks, we keep communication and expectations clear.</li>
            <li className="flex gap-3"><span className="text-brand-deep font-semibold">Partnership</span> — We succeed when our clients and VAs succeed; we’re invested in both sides.</li>
          </ul>
          <div className="mt-12">
            <Link to="/contact" className="btn-primary">Book a discovery call</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
