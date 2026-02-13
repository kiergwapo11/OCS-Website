import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Apply() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    skills: '',
    availability: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production: POST to your backend or form service
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="relative z-10 py-20">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <h1 className="font-display text-3xl font-bold text-brand-ink">Application received</h1>
          <p className="mt-4 text-brand-ink/85">
            Thanks for applying. We’ll review your details and get back to you shortly.
          </p>
          <Link to="/" className="btn-primary mt-8">Back to home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative z-10">
      <section className="bg-brand-cream/40 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-display text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl">Apply as a VA</h1>
          <p className="mt-5 text-lg text-brand-ink/85">
            Join our network of virtual assistants. Tell us about your experience and availability.
          </p>
        </div>
      </section>

      <section className="border-t border-brand-ink/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-ink">Full name *</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-brand-ink/20 bg-white px-4 py-3 text-brand-ink focus:border-brand-deep focus:ring-2 focus:ring-brand-deep/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-ink">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-brand-ink/20 bg-white px-4 py-3 text-brand-ink focus:border-brand-deep focus:ring-2 focus:ring-brand-deep/20"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brand-ink">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-brand-ink/20 bg-white px-4 py-3 text-brand-ink focus:border-brand-deep focus:ring-2 focus:ring-brand-deep/20"
              />
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-brand-ink">VA / admin experience *</label>
              <textarea
                id="experience"
                name="experience"
                rows={3}
                required
                value={form.experience}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-brand-ink/20 bg-white px-4 py-3 text-brand-ink focus:border-brand-deep focus:ring-2 focus:ring-brand-deep/20"
                placeholder="e.g. 2 years executive assistant, calendar and email management"
              />
            </div>
            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-brand-ink">Key skills & tools</label>
              <input
                id="skills"
                name="skills"
                type="text"
                value={form.skills}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-brand-ink/20 bg-white px-4 py-3 text-brand-ink focus:border-brand-deep focus:ring-2 focus:ring-brand-deep/20"
                placeholder="e.g. Google Workspace, Asana, Canva"
              />
            </div>
            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-brand-ink">Availability *</label>
              <select
                id="availability"
                name="availability"
                required
                value={form.availability}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-brand-ink/20 bg-white px-4 py-3 text-brand-ink focus:border-brand-deep focus:ring-2 focus:ring-brand-deep/20"
              >
                <option value="">Select</option>
                <option value="part-time">Part-time (under 20 hrs/week)</option>
                <option value="full-time">Full-time (20+ hrs/week)</option>
                <option value="project">Project-based</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-ink">Anything else we should know?</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-brand-ink/20 bg-white px-4 py-3 text-brand-ink focus:border-brand-deep focus:ring-2 focus:ring-brand-deep/20"
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">Submit application</button>
          </form>
        </div>
      </section>
    </div>
  )
}
