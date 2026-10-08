import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Hero } from '../components/sections/Hero'
import { FeaturedWork } from '../components/sections/FeaturedWork'
import { WhatWeBuild } from '../components/sections/WhatWeBuild'
import { ProductsStrip } from '../components/sections/ProductsStrip'
import { Founder } from '../components/sections/Founder'
import { ContactBlock } from '../components/sections/ContactBlock'
import { PageTransition } from '../components/layout/PageTransition'

export default function Home() {
  const { t } = useTranslation()
  useEffect(() => { document.title = t('home.documentTitle') }, [t])

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
