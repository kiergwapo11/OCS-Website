import { Link } from 'react-router-dom'

const ROLES = [
  { title: 'Executive & admin support', desc: 'Calendar, email, travel, and day-to-day operations so leaders can focus on strategy.' },
  { title: 'Client & project coordination', desc: 'Scheduling, follow-ups, and project tracking so nothing falls through the cracks.' },
  { title: 'Marketing & content', desc: 'Social media, content drafts, and campaign support aligned with your brand.' },
  { title: 'Data & operations', desc: 'Data entry, reporting, and process support to keep your systems running smoothly.' },
]

export default function Services() {
  return (
    <div className="relative z-10">
      <section className="bg-brand-cream/40 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-display text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl">Services & VA roles</h1>
          <p className="mt-5 text-lg text-brand-ink/85">
            We match you with VAs who have the skills and capacity you need — from admin to marketing to operations.
          </p>
        </div>
      </section>

      <section className="border-t border-brand-ink/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="section-heading text-center">What our VAs can do</h2>
          <p className="section-sub mx-auto text-center">Flexible support tailored to your workflow and goals.</p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {ROLES.map((role, i) => (
              <div key={i} className="rounded-2xl border border-brand-ink/10 bg-brand-cream/40 p-6">
                <h3 className="font-display text-xl font-semibold text-brand-ink">{role.title}</h3>
                <p className="mt-2 text-brand-ink/80">{role.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/contact" className="btn-primary">Discuss your needs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
