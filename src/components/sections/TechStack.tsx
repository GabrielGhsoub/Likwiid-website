import { m } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { skills, skillCategories } from '../../data/skills'
import { SectionHeading } from '../ui/SectionHeading'

const HIDDEN = {}
const FADE_UP_INITIAL = { opacity: 0, y: 20 }
const FADE_UP_VISIBLE = { opacity: 1, y: 0 }
const CATEGORY_TRANSITIONS = skillCategories.map((_, i) => ({
  duration: 0.5,
  delay: i * 0.1,
}))

export function TechStack() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 px-6 bg-bg-secondary/30">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title="Tech stack" subtitle="Tools and technologies we work with daily." />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const categorySkills = skills.filter((s) => s.category === category)
            return (
              <m.div
                key={category}
                initial={FADE_UP_INITIAL}
                animate={isVisible ? FADE_UP_VISIBLE : HIDDEN}
                transition={CATEGORY_TRANSITIONS[catIndex]}
              >
                <h3 className="text-sm font-medium text-accent-gold font-[family-name:var(--font-mono)] mb-3 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 text-sm border border-border rounded bg-bg-tertiary/50 text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </m.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
