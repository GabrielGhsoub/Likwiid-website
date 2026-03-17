import { m } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'

const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_VISIBLE = { opacity: 1, y: 0 }
const TITLE_INITIAL = { opacity: 0, y: 30 }
const SUBTITLE_TRANSITION = { duration: 0.5 }
const TITLE_TRANSITION = { duration: 0.6, delay: 0.1 }
const DESCRIPTION_TRANSITION = { duration: 0.5, delay: 0.3 }
const BUTTONS_TRANSITION = { duration: 0.5, delay: 0.5 }

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px]" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px]" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'ripple 8s ease-in-out infinite' }}>
          <div className="w-[800px] h-[500px]" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(34,211,238,0.02) 0%, transparent 50%)' }} />
        </div>
        <div className="absolute top-[20%] right-[15%] w-3 h-3 rounded-full bg-accent-gold/[0.04]" style={{ animation: 'float-bubble 8s ease-in-out infinite' }} />
        <div className="absolute top-[60%] left-[10%] w-2 h-2 rounded-full bg-accent-gold/[0.04]" style={{ animation: 'float-bubble 10s ease-in-out infinite 2s' }} />
        <div className="absolute top-[35%] left-[40%] w-4 h-4 rounded-full bg-accent-gold/[0.04]" style={{ animation: 'float-bubble 12s ease-in-out infinite 4s' }} />
        <div className="absolute bottom-[25%] right-[30%] w-2 h-2 rounded-full bg-accent-gold/[0.04]" style={{ animation: 'float-bubble 7s ease-in-out infinite 1s' }} />
        <div className="absolute top-[75%] right-[60%] w-3 h-3 rounded-full bg-accent-gold/[0.04]" style={{ animation: 'float-bubble 9s ease-in-out infinite 3s' }} />
      </div>

      <div className="relative max-w-[1200px] w-full">
        <m.p
          className="text-accent-gold text-sm font-[family-name:var(--font-mono)] mb-4 tracking-wider uppercase"
          initial={FADE_UP_INITIAL}
          animate={FADE_UP_VISIBLE}
          transition={SUBTITLE_TRANSITION}
        >
          Digital Studio
        </m.p>

        <m.h1
          className="font-[family-name:var(--font-display)] font-bold text-text-primary leading-[1.1]"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          initial={TITLE_INITIAL}
          animate={FADE_UP_VISIBLE}
          transition={TITLE_TRANSITION}
        >
          Software that flows.
        </m.h1>

        <m.p
          className="mt-6 text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed"
          initial={FADE_UP_INITIAL}
          animate={FADE_UP_VISIBLE}
          transition={DESCRIPTION_TRANSITION}
        >
          We design, build, and ship production software that adapts to any challenge. From enterprise platforms to mobile apps,
          cloud infrastructure to AI integration. Based in Beirut, shipping worldwide.
        </m.p>

        <m.div
          className="mt-10 flex flex-wrap gap-4"
          initial={FADE_UP_INITIAL}
          animate={FADE_UP_VISIBLE}
          transition={BUTTONS_TRANSITION}
        >
          <Link to="/work">
            <Button variant="primary" size="lg">
              See our work
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Get in touch
            </Button>
          </Link>
        </m.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce [animation-iteration-count:3]">
        <ArrowDown className="text-text-tertiary" size={24} />
      </div>
    </section>
  )
}
