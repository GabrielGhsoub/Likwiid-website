import { useEffect } from 'react'
import { Hero } from '../components/sections/Hero'
import { Stats } from '../components/sections/Stats'
import { ServiceCards } from '../components/sections/ServiceCards'
import { FeaturedWork } from '../components/sections/FeaturedWork'
import { CTA } from '../components/sections/CTA'
import { PageTransition } from '../components/layout/PageTransition'

export default function Home() {
  useEffect(() => { document.title = 'Likwiid | Software Studio' }, [])

  return (
    <PageTransition>
      <Hero />
      <Stats />
      <ServiceCards />
      <FeaturedWork />
      <CTA />
    </PageTransition>
  )
}
