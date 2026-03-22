import { useState, type FormEvent } from 'react'
import { m } from 'framer-motion'
import { Mail, Github, Linkedin, Check, AlertCircle } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { useFormSubmit } from '../hooks/useFormSubmit'
import { SOCIAL } from '../utils/constants'
import type { ContactFormData } from '../types'

const PROJECT_TYPES = ['Web App', 'Mobile App', 'Cloud/DevOps', 'AI Integration', 'VR Development', 'Code Audit', 'Other']
const BUDGETS = ['< $5k', '$5k - $15k', '$15k - $50k', '$50k+', "Let's discuss"]

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }
const SCALE_INITIAL = { scale: 0 }
const SCALE_ANIMATE = { scale: 1 }
const TRANSITION_DELAY_01 = { duration: 0.5, delay: 0.1 }
const TRANSITION_DELAY_02 = { duration: 0.5, delay: 0.2 }
const TRANSITION_SPRING = { type: 'spring' as const, stiffness: 200, damping: 15 }

export default function Contact() {
  const { status, submit, reset } = useFormSubmit()
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})

  const validate = (data: ContactFormData): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {}
    if (!data.name.trim()) newErrors.name = 'Name is required'
    if (!data.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = 'Invalid email address'
    if (!data.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      projectType: formData.get('projectType') as string,
      budget: formData.get('budget') as string,
      message: formData.get('message') as string,
    }
    if (validate(data)) {
      submit(data)
    }
  }

  return (
    <PageTransition>
      <main className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading title="Contact" />

          <div className="grid lg:grid-cols-2 gap-16">
            <m.div
              initial={FADE_UP_INITIAL}
              animate={FADE_UP_ANIMATE}
              transition={TRANSITION_DELAY_01}
            >
              <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-text-primary">
                Let&apos;s build something together.
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Have a project in mind? Need technical guidance? We&apos;re always open to discussing new ideas and
                opportunities. Reach out and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href={`mailto:${SOCIAL.email}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
                >
                  <Mail size={20} className="text-accent-gold" />
                  {SOCIAL.email}
                </a>
                <a
                  href={`mailto:${SOCIAL.personalEmail}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
                >
                  <Mail size={20} className="text-accent-gold" />
                  {SOCIAL.personalEmail}
                </a>
                <a
                  href={SOCIAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
                >
                  <Github size={20} className="text-accent-gold" />
                  GitHub
                </a>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
                >
                  <Linkedin size={20} className="text-accent-gold" />
                  LinkedIn
                </a>
              </div>
            </m.div>

            <m.div
              initial={FADE_UP_INITIAL}
              animate={FADE_UP_ANIMATE}
              transition={TRANSITION_DELAY_02}
            >
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <m.div
                    initial={SCALE_INITIAL}
                    animate={SCALE_ANIMATE}
                    transition={TRANSITION_SPRING}
                  >
                    <div className="w-16 h-16 rounded-full bg-accent-gold/20 flex items-center justify-center mb-6">
                      <Check size={32} className="text-accent-gold" />
                    </div>
                  </m.div>
                  <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary">
                    Thanks!
                  </h3>
                  <p className="mt-2 text-text-secondary">We&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={reset}
                    className="mt-6 text-accent-gold text-sm hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm text-text-secondary mb-1.5">
                      Name <span className="text-accent-gold">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={`w-full px-4 py-3 rounded-lg bg-bg-secondary border ${errors.name ? 'border-red-500' : 'border-border'} text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold transition-colors`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-red-400 text-xs">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-text-secondary mb-1.5">
                      Email <span className="text-accent-gold">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={`w-full px-4 py-3 rounded-lg bg-bg-secondary border ${errors.email ? 'border-red-500' : 'border-border'} text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold transition-colors`}
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="mt-1 text-red-400 text-xs">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm text-text-secondary mb-1.5">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold transition-colors"
                      placeholder="Your company (optional)"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="projectType" className="block text-sm text-text-secondary mb-1.5">
                        Project type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text-primary focus:outline-none focus:border-accent-gold transition-colors appearance-none"
                      >
                        <option value="">Select...</option>
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm text-text-secondary mb-1.5">
                        Budget range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text-primary focus:outline-none focus:border-accent-gold transition-colors appearance-none"
                      >
                        <option value="">Select...</option>
                        {BUDGETS.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-text-secondary mb-1.5">
                      Message <span className="text-accent-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg bg-bg-secondary border ${errors.message ? 'border-red-500' : 'border-border'} text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold transition-colors resize-none`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && <p className="mt-1 text-red-400 text-xs">{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle size={16} />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <Button type="submit" variant="primary" size="lg" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Send message'}
                  </Button>
                </form>
              )}
            </m.div>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
