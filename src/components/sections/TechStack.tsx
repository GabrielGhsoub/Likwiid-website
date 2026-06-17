import { m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { skills, skillCategories } from '../../data/skills'
import { SectionHeading } from '../ui/SectionHeading'

const CATEGORY_CONTAINER = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

const CATEGORY_ITEM = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const BADGE_CONTAINER = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

const BADGE_ITEM = {
  hidden: {
    opacity: 0,
    y: -12,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      damping: 14,
      stiffness: 120,
    },
  },
}

const BADGE_HOVER = {
  y: -2,
  scale: 1.05,
  transition: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20,
  },
}

export function TechStack() {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-16 px-6 bg-bg-secondary/30">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title={t('techStack.title')} subtitle={t('techStack.subtitle')} />

        <m.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={CATEGORY_CONTAINER}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category)
            return (
              <m.div
                key={category}
                variants={CATEGORY_ITEM}
              >
                <h3 className="text-sm font-medium text-accent-gold font-[family-name:var(--font-mono)] mb-3 uppercase tracking-wider">
                  {category}
                </h3>
                <m.div
                  className="flex flex-wrap gap-2"
                  variants={BADGE_CONTAINER}
                >
                  {categorySkills.map((skill) => (
                    <m.span
                      key={skill.name}
                      className="px-3 py-1.5 text-sm border border-border rounded bg-bg-tertiary/50 text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors"
                      variants={BADGE_ITEM}
                      whileHover={BADGE_HOVER}
                    >
                      {skill.name}
                    </m.span>
                  ))}
                </m.div>
              </m.div>
            )
          })}
        </m.div>
      </div>
    </section>
  )
}
