import { Link } from 'react-router-dom'
import Hero3D from '../components/Hero3D'

const BENEFITS = [
  {
    title: 'Vetted talent',
    description: 'Every VA is screened and trained so you get reliable, professional support from day one.',
    icon: '✓',
  },
  {
    title: 'Flexible engagement',
    description: 'Scale up or down with part-time, full-time, or project-based arrangements that fit your workflow.',
    icon: '↔',
  },
  {
    title: 'Clear ROI',
    description: 'Track time, tasks, and outcomes so you see the impact of your VA investment.',
    icon: '▣',
  },
]

const HOW_IT_WORKS = [
  { step: 1, title: 'Tell us your needs', text: 'Share your goals, tasks, and preferred working style in a short discovery call.' },
  { step: 2, title: 'Get matched', text: 'We match you with VAs whose skills and availability align with your requirements.' },
  { step: 3, title: 'Start working', text: 'Onboard quickly with clear processes and ongoing support from our team.' },
]

const TESTIMONIALS = [
  { quote: 'Our VA from OCS took over scheduling and admin so we could focus on client work. Game-changer.', author: 'Sarah M.', role: 'Agency owner' },
  { quote: 'I joined as a VA and the training and structure gave me the confidence to deliver at a high level.', author: 'James T.', role: 'Virtual Assistant' },
]

const METRICS = [
  { value: '98%', label: 'Client satisfaction' },
  { value: '24h', label: 'Typical match time' },
  { value: '500+', label: 'Tasks completed monthly' },
]

const CORE_VALUES = [
  { name: 'Trust', short: 'Vetted talent and honest communication in every placement.' },
  { name: 'Partnership', short: 'We grow when our clients and VAs succeed together.' },
  { name: 'Clarity', short: 'Clear roles, expectations, and outcomes for everyone.' },
]

export default function Home() {
  return (
    <>
      {/* Hero with 3D background */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 pt-8 pb-20 sm:px-6">
        <Hero3D />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl md:text-6xl animate-fade-in">
            Virtual assistants who{' '}
            <span className="text-brand-deep">deliver</span>
          </h1>
          <p className="mt-5 text-lg text-brand-ink/85 sm:text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Whether you need to hire a VA or want to become one — we connect the right people with the right work, so everyone grows.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Link to="/contact" className="btn-primary text-base">
              Book a discovery call
            </Link>
            <Link to="/apply" className="btn-secondary text-base">
              Apply as a VA
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative z-10 border-t border-brand-ink/10 bg-white py-20 sm:py-24" id="benefits" aria-labelledby="benefits-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="benefits-heading" className="section-heading text-center">Why work with our VA team</h2>
          <p className="section-sub mx-auto text-center">We’re built for clarity, quality, and results — for clients and VAs alike.</p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((item, i) => (
              <div key={i} className="rounded-2xl border border-brand-ink/10 bg-brand-cream/50 p-6 transition hover:border-brand-rose/40 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-deep text-lg font-bold text-white">{item.icon}</div>
                <h3 className="mt-4 font-display text-xl font-semibold text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-brand-ink/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative z-10 border-t border-brand-ink/10 bg-brand-cream/30 py-20 sm:py-24" id="how-it-works" aria-labelledby="how-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="how-heading" className="section-heading text-center">How it works</h2>
          <p className="section-sub mx-auto text-center">From first conversation to ongoing collaboration in three clear steps.</p>
          <div className="mt-14 flex flex-col gap-10 md:flex-row md:justify-between md:gap-6">
            {HOW_IT_WORKS.map(({ step, title, text }) => (
              <div key={step} className="flex flex-1 flex-col items-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-deep font-display text-2xl font-bold text-white">{step}</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-brand-ink">{title}</h3>
                <p className="mt-2 max-w-xs text-brand-ink/80">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof & KPIs */}
      <section className="relative z-10 border-t border-brand-ink/10 bg-white py-20 sm:py-24" id="proof" aria-labelledby="proof-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="proof-heading" className="section-heading text-center">What people say</h2>
          <p className="section-sub mx-auto text-center">Clients and VAs share their experience working with OCS.</p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <blockquote key={i} className="rounded-2xl border border-brand-ink/10 bg-brand-cream/40 p-6">
                <p className="text-brand-ink/90">"{t.quote}"</p>
                <footer className="mt-4 font-semibold text-brand-deep">{t.author}</footer>
                <p className="text-sm text-brand-ink/70">{t.role}</p>
              </blockquote>
            ))}
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-12 border-t border-brand-ink/10 pt-16">
            {METRICS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-display text-4xl font-bold text-brand-deep">{value}</p>
                <p className="mt-1 text-sm text-brand-ink/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="relative z-10 border-t border-brand-ink/10 bg-brand-cream/30 py-20 sm:py-24" id="values" aria-labelledby="values-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="values-heading" className="section-heading text-center">What matters to us</h2>
          <p className="section-sub mx-auto text-center">Our values guide how we work with clients and VAs every day.</p>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {CORE_VALUES.map((v) => (
              <div key={v.name} className="rounded-2xl border border-brand-ink/10 bg-white p-6 text-center shadow-sm">
                <h3 className="font-display text-xl font-semibold text-brand-deep">{v.name}</h3>
                <p className="mt-2 text-sm text-brand-ink/80">{v.short}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative z-10 border-t border-brand-ink/10 bg-brand-deep py-16 sm:py-20" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="cta-heading" className="font-display text-3xl font-bold text-white sm:text-4xl">
            Ready to scale or start your VA journey?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Book a discovery call or apply to join our VA network. We’re here to help.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white px-6 py-3 font-display font-semibold text-brand-deep transition hover:bg-brand-cream hover:border-brand-cream">
              Book a discovery call
            </Link>
            <Link to="/apply" className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-6 py-3 font-display font-semibold text-white transition hover:bg-white/10">
              Apply as a VA
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
