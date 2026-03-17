import { Hero } from '../components/sections/Hero'
import { Stats } from '../components/sections/Stats'
import { ServiceCards } from '../components/sections/ServiceCards'
import { FeaturedWork } from '../components/sections/FeaturedWork'
import { TechStack } from '../components/sections/TechStack'
import { CTA } from '../components/sections/CTA'
import { PageTransition } from '../components/layout/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <ServiceCards />
      <FeaturedWork />
      <TechStack />
      <CTA />
    </PageTransition>
  )
}
