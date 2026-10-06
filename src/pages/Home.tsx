import { useEffect } from 'react'
import { Hero } from '../components/sections/Hero'
import { FeaturedWork } from '../components/sections/FeaturedWork'
import { WhatWeBuild } from '../components/sections/WhatWeBuild'
import { ProductsStrip } from '../components/sections/ProductsStrip'
import { Founder } from '../components/sections/Founder'
import { ContactBlock } from '../components/sections/ContactBlock'
import { PageTransition } from '../components/layout/PageTransition'
import { SITE } from '../utils/constants'

export default function Home() {
  useEffect(() => { document.title = SITE.title }, [])

  return (
    <PageTransition>
      <Hero />
      <FeaturedWork />
      <WhatWeBuild />
      <ProductsStrip />
      <Founder />
      <ContactBlock />
    </PageTransition>
  )
}
