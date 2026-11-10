import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Hero } from '../components/sections/Hero'
import { EscuelaProof } from '../components/sections/EscuelaProof'
import { WhatChanges } from '../components/sections/WhatChanges'
import { PriceBlock } from '../components/sections/PriceBlock'
import { HowItWorks } from '../components/sections/HowItWorks'
import { Founder } from '../components/sections/Founder'
import { FaqList, type FaqKey } from '../components/sections/FaqList'
import { AppsSection } from '../components/sections/AppsSection'
import { ContactBlock } from '../components/sections/ContactBlock'
import { PageTransition } from '../components/layout/PageTransition'

const HOME_FAQ: readonly FaqKey[] = ['cost', 'site', 'after', 'pay', 'platform']

export default function Home() {
  const { t } = useTranslation()
  useEffect(() => { document.title = t('home.documentTitle') }, [t])

  return (
    <PageTransition>
      <Hero />
      <EscuelaProof />
      <WhatChanges />
      <PriceBlock />
      <HowItWorks />
      <Founder />
      <FaqList title={t('home.faqTitle')} items={HOME_FAQ} />
      <AppsSection />
      <ContactBlock />
    </PageTransition>
  )
}
