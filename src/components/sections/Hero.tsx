import { useRef, useEffect, useState } from 'react'
import { m } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/Button'

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_VISIBLE = { opacity: 1, y: 0 }
const TITLE_INITIAL = { opacity: 0, y: 30 }
const SUBTITLE_TRANSITION = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
const TITLE_TRANSITION = { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }
const DESCRIPTION_TRANSITION = { duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }
const BUTTONS_TRANSITION = { duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] as const }

export function Hero() {
  const { t } = useTranslation()
  const bgRef = useRef<HTMLDivElement>(null)
  const [bgVisible, setBgVisible] = useState(true)

  useEffect(() => {
    const el = bgRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setBgVisible(entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-6 pb-20">
      <div ref={bgRef} className={`absolute inset-0 overflow-hidden${bgVisible ? '' : ' liquid-paused'}`}>
        {/* Morphing blob backgrounds */}
        <div
          className="absolute top-[15%] -left-[10%] w-[500px] h-[500px] opacity-[0.07] blur-[40px] md:blur-[80px] liquid-blob-slow"
          style={{ background: 'var(--color-accent-gold)' }}
        />
        <div
          className="absolute bottom-[10%] -right-[5%] w-[400px] h-[400px] opacity-[0.05] blur-[30px] md:blur-[60px] liquid-blob liquid-delay-300"
          style={{ background: 'var(--color-accent-blue)' }}
        />
        <div
          className="absolute top-[50%] left-[30%] w-[350px] h-[350px] opacity-[0.04] blur-[35px] md:blur-[70px] liquid-blob-slow liquid-delay-700"
          style={{ background: 'var(--color-accent-gold)' }}
        />

        {/* Central ripple pulse */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'ripple 8s ease-in-out infinite' }}>
          <div className="w-[800px] h-[500px]" style={{ background: 'radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--color-accent-gold) 3%, transparent) 0%, transparent 50%)' }} />
        </div>

        {/* Floating bubbles */}
        <div className="absolute top-[15%] right-[12%] w-6 h-6 rounded-full bg-accent-gold/[0.15] blur-[1px]" style={{ animation: 'float-bubble 9s ease-in-out infinite' }} />
        <div className="absolute top-[55%] left-[8%] w-4 h-4 rounded-full bg-accent-blue/[0.18]" style={{ animation: 'float-bubble 11s ease-in-out infinite 2s' }} />
        <div className="absolute top-[30%] left-[35%] w-8 h-8 rounded-full bg-accent-gold/[0.10] blur-[2px]" style={{ animation: 'float-bubble 14s ease-in-out infinite 4s' }} />
        <div className="absolute bottom-[20%] right-[25%] w-3 h-3 rounded-full bg-accent-gold/[0.22]" style={{ animation: 'float-bubble 8s ease-in-out infinite 1s' }} />
        <div className="absolute top-[70%] right-[55%] w-5 h-5 rounded-full bg-accent-blue/[0.14] blur-[1px]" style={{ animation: 'float-bubble 10s ease-in-out infinite 3s' }} />
        <div className="absolute top-[45%] right-[8%] w-3 h-3 rounded-full bg-accent-gold/[0.25]" style={{ animation: 'float-bubble 7s ease-in-out infinite 0.5s' }} />
        <div className="absolute top-[80%] left-[25%] w-4 h-4 rounded-full bg-accent-blue/[0.16]" style={{ animation: 'float-bubble 12s ease-in-out infinite 6s' }} />
        <div className="absolute top-[10%] left-[55%] w-3 h-3 rounded-full bg-accent-gold/[0.20]" style={{ animation: 'float-bubble 9s ease-in-out infinite 2.5s' }} />
      </div>

      <div className="relative max-w-[1200px] w-full">
        <m.p
          className="text-sm font-medium text-accent-gold uppercase tracking-wider font-[family-name:var(--font-mono)] mb-4"
          initial={FADE_UP_INITIAL}
          animate={FADE_UP_VISIBLE}
          transition={SUBTITLE_TRANSITION}
        >
          {t('hero.eyebrow')}
        </m.p>

        <m.h1
          className="font-[family-name:var(--font-display)] font-bold text-text-primary leading-[1.1]"
          style={{ fontSize: 'var(--font-size-hero)' }}
          initial={TITLE_INITIAL}
          animate={FADE_UP_VISIBLE}
          transition={TITLE_TRANSITION}
        >
          {t('hero.title')}
        </m.h1>

        <m.p
          className="mt-6 text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed"
          initial={FADE_UP_INITIAL}
          animate={FADE_UP_VISIBLE}
          transition={DESCRIPTION_TRANSITION}
        >
          {t('hero.description')}
        </m.p>

        <m.div
          className="mt-8 flex flex-wrap gap-4"
          initial={FADE_UP_INITIAL}
          animate={FADE_UP_VISIBLE}
          transition={BUTTONS_TRANSITION}
        >
          <Button variant="primary" size="lg" href="/contact">
            {t('hero.ctaPrimary')}
          </Button>
          <Button variant="secondary" size="lg" href="/work">
            {t('hero.ctaSecondary')}
          </Button>
        </m.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce [animation-iteration-count:3]" aria-hidden="true">
        <ArrowDown className="text-text-tertiary" size={24} />
      </div>
    </section>
  )
}
