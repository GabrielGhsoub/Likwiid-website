import { useState, useEffect, useRef, type FormEvent } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import { Mail, Github, Linkedin, Check, AlertCircle, ChevronDown } from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon'
import { useFormSubmit } from '../hooks/useFormSubmit'
import { SOCIAL } from '../utils/constants'
import type { ContactFormData } from '../types'

const PROJECT_TYPES = [
  { value: 'Web App', labelKey: 'contact.projectTypeWebApp' },
  { value: 'Mobile App', labelKey: 'contact.projectTypeMobileApp' },
  { value: 'Cloud/DevOps', labelKey: 'contact.projectTypeCloudDevOps' },
  { value: 'AI Integration', labelKey: 'contact.projectTypeAiIntegration' },
  { value: 'VR Development', labelKey: 'contact.projectTypeVrDevelopment' },
  { value: 'Code Audit', labelKey: 'contact.projectTypeCodeAudit' },
  { value: 'Other', labelKey: 'contact.projectTypeOther' },
]
// Deliberately floored at the studio's real minimum: an under-floor option anchors
// low and invites projects we cannot take on.
const BUDGETS = [
  { value: '$5k - $15k', labelKey: 'contact.budget5to15k' },
  { value: '$15k - $50k', labelKey: 'contact.budget15to50k' },
  { value: '$50k+', labelKey: 'contact.budget50kPlus' },
  { value: 'Not sure yet', labelKey: 'contact.budgetNotSure' },
]

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_ANIMATE = { opacity: 1, y: 0 }
const SCALE_INITIAL = { scale: 0 }
const SCALE_ANIMATE = { scale: 1 }
const TRANSITION_DELAY_01 = { duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }
const TRANSITION_DELAY_02 = { duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }
const TRANSITION_SPRING = { type: 'spring' as const, stiffness: 200, damping: 14 }

export default function Contact() {
  const { t } = useTranslation()
  const { status, submit, reset } = useFormSubmit()
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})
  // Timestamp of when the form became available, used for the anti-spam timing heuristic.
  // Set in an effect (not during render) to keep the render pure.
  const mountedAtRef = useRef(0)
  useEffect(() => { mountedAtRef.current = Date.now() }, [])

  useEffect(() => { document.title = t('contact.documentTitle') }, [t])

  const validate = (data: ContactFormData): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {}
    if (!data.name.trim()) newErrors.name = t('contact.errorNameRequired')
    if (!data.email.trim()) newErrors.email = t('contact.errorEmailRequired')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = t('contact.errorEmailInvalid')
    if (!data.message.trim()) newErrors.message = t('contact.errorMessageRequired')
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data: ContactFormData = {
      name: ((formData.get('name') as string) ?? '').trim().slice(0, 200),
      email: ((formData.get('email') as string) ?? '').trim().slice(0, 200),
      company: ((formData.get('company') as string) ?? '').trim().slice(0, 200),
      projectType: (formData.get('projectType') as string) ?? '',
      budget: (formData.get('budget') as string) ?? '',
      message: ((formData.get('message') as string) ?? '').trim().slice(0, 5000),
    }
    if (!validate(data)) {
      // Move focus to the first field with an error so keyboard/screen-reader users hear it.
      const emailValid = data.email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
      const firstInvalid = !data.name.trim() ? 'name' : !emailValid ? 'email' : 'message'
      document.getElementById(firstInvalid)?.focus()
      return
    }
    submit({
      ...data,
      website: (formData.get('website') as string) ?? '',
      elapsedMs: Date.now() - mountedAtRef.current,
    })
  }

  return (
    <PageTransition>
      <div className="pt-20 pb-16 px-6">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading as="h1" title={t('contact.heading')} subtitle={t('contact.subheading')} />

          <div className="grid md:grid-cols-2 gap-16">
            <m.div
              initial={FADE_UP_INITIAL}
              animate={FADE_UP_ANIMATE}
              transition={TRANSITION_DELAY_01}
            >
              <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-text-primary">
                {t('contact.introTitle')}
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                {t('contact.introBody')}
              </p>
              <p className="mt-3 text-text-tertiary text-sm">
                {t('contact.locationNote')}
              </p>

              <div className="mt-8 flex items-center gap-4 rounded-lg border border-border bg-bg-secondary/50 p-4">
                <img
                  src="/gabriel.webp"
                  alt={t('contact.founderPhotoAlt')}
                  width={56}
                  height={56}
                  loading="lazy"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <p className="text-text-secondary text-sm leading-relaxed">
                  {t('contact.founderNote')}
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-medium text-text-primary uppercase tracking-wider font-[family-name:var(--font-mono)]">
                  {t('contact.stepsTitle')}
                </h3>
                <ol className="mt-3 space-y-2.5">
                  {(['step1', 'step2', 'step3'] as const).map((step, i) => (
                    <li key={step} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                      <span className="text-accent-gold font-[family-name:var(--font-mono)] shrink-0">{i + 1}.</span>
                      {t(`contact.${step}`)}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-8 space-y-1">
                <a
                  href={SOCIAL.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-2 text-text-secondary hover:text-text-primary transition-colors"
                >
                  <WhatsAppIcon size={20} className="text-accent-gold" />
                  <span>
                    WhatsApp: {SOCIAL.phone}{' '}
                    <span className="text-text-tertiary text-sm">({t('contact.fastestReply')})</span>
                  </span>
                </a>
                <a
                  href={`mailto:${SOCIAL.email}`}
                  className="flex items-center gap-3 py-2 text-text-secondary hover:text-text-primary transition-colors"
                >
                  <Mail size={20} className="text-accent-gold" />
                  {SOCIAL.email}
                </a>
              </div>

              <div className="mt-6 flex items-center gap-5">
                <a
                  href={SOCIAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 -m-2 text-text-tertiary hover:text-text-primary transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 -m-2 text-text-tertiary hover:text-text-primary transition-colors"
                >
                  <Linkedin size={18} />
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
                    <div className="w-16 h-16 rounded-full bg-accent-gold-dim flex items-center justify-center mb-6">
                      <Check size={32} className="text-accent-gold" />
                    </div>
                  </m.div>
                  <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary">
                    {t('contact.successTitle')}
                  </h3>
                  <p className="mt-2 text-text-secondary max-w-md">{t('contact.successBody')}</p>
                  <p className="mt-3 text-text-secondary text-sm max-w-md">
                    <Trans
                      i18nKey="contact.successHurry"
                      components={{
                        whatsapp: (
                          <a
                            href={SOCIAL.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent-gold hover:underline"
                          />
                        ),
                      }}
                    />
                  </p>
                  <Link to="/work" className="mt-5 text-accent-gold text-sm hover:underline">
                    {t('contact.successBrowseWork')}
                  </Link>
                  <button
                    onClick={reset}
                    className="mt-3 py-2 px-4 text-text-tertiary text-sm hover:text-text-primary hover:underline cursor-pointer"
                  >
                    {t('contact.sendAnother')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Honeypot: hidden from humans, tempting to bots. Real users leave it empty. */}
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
                    <label htmlFor="website">Website (leave this blank)</label>
                    <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm text-text-secondary mb-1.5">
                      {t('contact.labelName')} <span className="text-accent-gold" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      onChange={() => errors.name && setErrors(prev => { const next = { ...prev }; delete next.name; return next })}
                      className={`w-full px-4 py-3 rounded-lg bg-bg-secondary border ${errors.name ? 'border-error-base' : 'border-border'} text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold focus:shadow-[0_0_0_3px_var(--color-accent-gold-dim)] transition-[border-color,box-shadow] duration-300`}
                      placeholder={t('contact.placeholderName')}
                    />
                    {errors.name && <p id="name-error" className="mt-1 text-error-base text-xs">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-text-secondary mb-1.5">
                      {t('contact.labelEmail')} <span className="text-accent-gold" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      onChange={() => errors.email && setErrors(prev => { const next = { ...prev }; delete next.email; return next })}
                      className={`w-full px-4 py-3 rounded-lg bg-bg-secondary border ${errors.email ? 'border-error-base' : 'border-border'} text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold focus:shadow-[0_0_0_3px_var(--color-accent-gold-dim)] transition-[border-color,box-shadow] duration-300`}
                      placeholder={t('contact.placeholderEmail')}
                    />
                    {errors.email && <p id="email-error" className="mt-1 text-error-base text-xs">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm text-text-secondary mb-1.5">
                      {t('contact.labelCompany')}
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold focus:shadow-[0_0_0_3px_var(--color-accent-gold-dim)] transition-[border-color,box-shadow] duration-300"
                      placeholder={t('contact.placeholderCompany')}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="projectType" className="block text-sm text-text-secondary mb-1.5">
                        {t('contact.labelProjectType')}
                      </label>
                      <div className="relative">
                        <select
                          id="projectType"
                          name="projectType"
                          className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text-primary focus:outline-none focus:border-accent-gold focus:shadow-[0_0_0_3px_var(--color-accent-gold-dim)] transition-[border-color,box-shadow] duration-300 appearance-none"
                        >
                          <option value="">{t('contact.selectPlaceholder')}</option>
                          {PROJECT_TYPES.map((pt) => (
                            <option key={pt.value} value={pt.value}>
                              {t(pt.labelKey)}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm text-text-secondary mb-1.5">
                        {t('contact.labelBudget')}
                        <span className="block text-xs text-text-tertiary font-normal mt-0.5">{t('contact.budgetHint')}</span>
                      </label>
                      <div className="relative">
                        <select
                          id="budget"
                          name="budget"
                          className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text-primary focus:outline-none focus:border-accent-gold focus:shadow-[0_0_0_3px_var(--color-accent-gold-dim)] transition-[border-color,box-shadow] duration-300 appearance-none"
                        >
                          <option value="">{t('contact.selectPlaceholder')}</option>
                          {BUDGETS.map((b) => (
                            <option key={b.value} value={b.value}>
                              {t(b.labelKey)}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-text-secondary mb-1.5">
                      {t('contact.labelMessage')} <span className="text-accent-gold" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      onChange={() => errors.message && setErrors(prev => { const next = { ...prev }; delete next.message; return next })}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg bg-bg-secondary border ${errors.message ? 'border-error-base' : 'border-border'} text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold focus:shadow-[0_0_0_3px_var(--color-accent-gold-dim)] transition-[border-color,box-shadow] duration-300 resize-none`}
                      placeholder={t('contact.placeholderMessage')}
                    />
                    {errors.message && <p id="message-error" className="mt-1 text-error-base text-xs">{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <div role="alert" className="flex items-start gap-2 text-error-base text-sm">
                      <AlertCircle size={16} className="mt-0.5 shrink-0" />
                      <span>
                        {t('contact.errorSubmit')}{' '}
                        <a href={`mailto:${SOCIAL.email}`} className="underline hover:no-underline">
                          {t('contact.errorFallback')}
                        </a>
                      </span>
                    </div>
                  )}

                  <Button type="submit" variant="primary" size="lg" disabled={status === 'submitting'} aria-busy={status === 'submitting'}>
                    {status === 'submitting' ? t('contact.submitSending') : t('contact.submitSend')}
                  </Button>
                  <p className="text-text-tertiary text-xs">{t('contact.privacyNote')}</p>
                </form>
              )}
            </m.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
