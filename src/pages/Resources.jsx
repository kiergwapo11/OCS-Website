import { Link } from 'react-router-dom'

const RESOURCES = [
  { title: 'What to expect when hiring a VA', desc: 'A short guide to scoping, onboarding, and working with a virtual assistant.', cta: 'Read guide' },
  { title: 'VA readiness checklist', desc: 'For candidates: skills and setup that help you succeed from day one.', cta: 'Download PDF' },
  { title: 'Intro to OCS', desc: 'Watch how we match clients and VAs and support both sides.', cta: 'Watch video' },
]

export default function Resources() {
  return (
    <div className="relative z-10">
      <section className="bg-brand-cream/40 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-display text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl">Resources</h1>
          <p className="mt-5 text-lg text-brand-ink/85">
            Guides and tools for clients and VA candidates to get the most out of working with us.
          </p>
        </div>
      </section>

      <section className="border-t border-brand-ink/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((item, i) => (
              <div key={i} className="rounded-2xl border border-brand-ink/10 bg-brand-cream/40 p-6 flex flex-col">
                <h2 className="font-display text-xl font-semibold text-brand-ink">{item.title}</h2>
                <p className="mt-2 flex-1 text-brand-ink/80">{item.desc}</p>
                <button type="button" className="mt-4 text-brand-deep font-semibold hover:underline focus:underline focus:outline-none">
                  {item.cta} →
                </button>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-brand-ink/70">
            More resources coming soon. <Link to="/contact" className="text-brand-deep hover:underline">Get in touch</Link> if you’d like something specific.
          </p>
        </div>
      </section>
    </div>
  )
}
