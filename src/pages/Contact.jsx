import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'hire',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="relative z-10 py-20">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <h1 className="font-display text-3xl font-bold text-brand-ink">Message sent</h1>
          <p className="mt-4 text-brand-ink/85">
            We’ll be in touch soon to schedule your discovery call or answer your questions.
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
          <h1 className="font-display text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl">Contact us</h1>
          <p className="mt-5 text-lg text-brand-ink/85">
            Book a discovery call or send a message. We’re here to help you hire a VA or join our team.
          </p>
        </div>
      </section>

      <section className="border-t border-brand-ink/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-ink">Name *</label>
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
              <label htmlFor="company" className="block text-sm font-medium text-brand-ink">Company (optional)</label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-brand-ink/20 bg-white px-4 py-3 text-brand-ink focus:border-brand-deep focus:ring-2 focus:ring-brand-deep/20"
              />
            </div>
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-brand-ink">I’m interested in</label>
              <select
                id="interest"
                name="interest"
                value={form.interest}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-brand-ink/20 bg-white px-4 py-3 text-brand-ink focus:border-brand-deep focus:ring-2 focus:ring-brand-deep/20"
              >
                <option value="hire">Hiring a VA</option>
                <option value="apply">Applying as a VA</option>
                <option value="partner">Partnership / other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-ink">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-brand-ink/20 bg-white px-4 py-3 text-brand-ink focus:border-brand-deep focus:ring-2 focus:ring-brand-deep/20"
                placeholder="Tell us a bit about your needs or questions."
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">Send message / Book a call</button>
          </form>
        </div>
      </section>
    </div>
  )
}
