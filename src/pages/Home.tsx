import { Hero } from '../components/sections/Hero'
import { Stats } from '../components/sections/Stats'
import { TrustedBy } from '../components/sections/TrustedBy'
import { ServiceCards } from '../components/sections/ServiceCards'
import { FeaturedWork } from '../components/sections/FeaturedWork'
import { Process } from '../components/sections/Process'
import { CTA } from '../components/sections/CTA'
import { PageTransition } from '../components/layout/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <TrustedBy />
      <ServiceCards />
      <FeaturedWork />
      <Process />
      <CTA />
    </PageTransition>
  )
}
