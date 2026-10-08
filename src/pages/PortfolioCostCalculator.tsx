import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PageTransition } from '../components/layout/PageTransition'
import { Button } from '../components/ui/Button'
import { ChoiceGroup, CurrencyPicker, Figure, NumberField, RangeField } from '../components/tools/CalculatorFields'
import { useCurrentLanguage } from '../i18n/useLocalizedPath'
import { cn } from '../utils/cn'
import { CURRENCY_SYMBOLS, formatAmount, parseNumber, type Currency } from '../utils/calculator'

// Portfolio cost calculator: a website builder subscription against a one-time build plus
// yearly hosting, over the years the visitor picks. The visitor types every figure, including
// the build quote, so the page never states a price of its own.

const FIELDS = ['fee', 'build', 'hosting'] as const
type Field = (typeof FIELDS)[number]
const REQUIRED_FIELDS: readonly Field[] = ['fee', 'build']
const EMPTY = Object.fromEntries(FIELDS.map((field) => [field, ''])) as Record<Field, string>
type Period = 'month' | 'year'

const MAX_YEARS = 10
const DEFAULT_YEARS = 5

const H2 = 'text-3xl md:text-4xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary'
const GROUP_HEADING = 'text-sm font-medium uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]'

// First month in which the subscription total passes the one-time total, or null when it
// never does (the yearly running cost of the build is as high as the subscription or higher).
function breakEvenMonth(yearlyFee: number, build: number, hosting: number): number | null {
  const yearlyGap = yearlyFee - hosting
  if (build === 0) return yearlyGap >= 0 ? 0 : null
  if (yearlyGap <= 0) return null
  return Math.ceil((build * 12) / yearlyGap - 1e-9)
}

export default function PortfolioCostCalculator() {
  const { t } = useTranslation()
  const lang = useCurrentLanguage()
  const [fields, setFields] = useState(EMPTY)
  const [period, setPeriod] = useState<Period>('month')
  const [currency, setCurrency] = useState<Currency>('none')
  const [years, setYears] = useState(DEFAULT_YEARS)

  useEffect(() => {
    document.title = t('tools.portfolio.docTitle')
  }, [t])

  const set = (field: Field) => (value: string) => setFields((prev) => ({ ...prev, [field]: value }))

  const values = Object.fromEntries(FIELDS.map((field) => [field, parseNumber(fields[field])])) as Record<Field, number | null>
  const errors: Partial<Record<Field, string>> = {}
  for (const field of FIELDS) {
    if (Number.isNaN(values[field])) errors[field] = t('tools.common.errorNumber')
  }
  const ready = Object.keys(errors).length === 0 && REQUIRED_FIELDS.every((field) => values[field] !== null)

  const yearlyFee = (values.fee ?? 0) * (period === 'month' ? 12 : 1)
  const build = values.build ?? 0
  const hosting = values.hosting ?? 0
  const rows = Array.from({ length: years }, (_, index) => {
    const year = index + 1
    return { year, subscription: yearlyFee * year, owned: build + hosting * year }
  })
  const last = rows[rows.length - 1]
  const maxTotal = Math.max(last.subscription, last.owned, 1)
  const month = ready ? breakEvenMonth(yearlyFee, build, hosting) : null
  const breakEvenYear = month === null ? null : Math.max(1, Math.ceil(month / 12))
  const yearsText = t('tools.portfolio.yearsValue', { count: years })
  const money = (value: number) => formatAmount(value, lang, currency)
  const prefix = CURRENCY_SYMBOLS[currency]

  let breakEvenNote: string
  if (month === null) breakEvenNote = t('tools.portfolio.noBreakEvenNote')
  else if (month === 0) breakEvenNote = t('tools.portfolio.breakEvenNow')
  else if (breakEvenYear! > years) breakEvenNote = `${t('tools.portfolio.breakEvenNote', { count: month })} ${t('tools.portfolio.breakEvenLater', { years: yearsText })}`
  else breakEvenNote = t('tools.portfolio.breakEvenNote', { count: month })

  return (
    <PageTransition>
      <div className="px-6 pt-28 pb-16">
        <div className="mx-auto max-w-[1200px]">
          {/* Hero */}
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]">
              {t('tools.common.eyebrow')}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary leading-tight">
              {t('tools.portfolio.heroTitle')}
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">{t('tools.portfolio.heroSubtitle')}</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
            {/* Inputs */}
            <form
              aria-labelledby="portfolio-form-heading"
              onSubmit={(event) => event.preventDefault()}
              className="space-y-6 rounded-xl border border-border bg-bg-secondary p-6 md:p-8"
            >
              <h2 id="portfolio-form-heading" className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary">
                {t('tools.common.formTitle')}
              </h2>
              <CurrencyPicker value={currency} onChange={setCurrency} />

              <div className="space-y-4 border-t border-border pt-6">
                <h3 className={GROUP_HEADING}>{t('tools.portfolio.builderTitle')}</h3>
                <NumberField
                  id="portfolio-fee"
                  label={t('tools.portfolio.feeLabel')}
                  hint={t('tools.portfolio.feeHint')}
                  value={fields.fee}
                  onChange={set('fee')}
                  error={errors.fee}
                  prefix={prefix}
                />
                <ChoiceGroup
                  name="portfolio-period"
                  legend={t('tools.portfolio.periodLegend')}
                  options={[
                    { value: 'month', label: t('tools.portfolio.periodMonth') },
                    { value: 'year', label: t('tools.portfolio.periodYear') },
                  ]}
                  value={period}
                  onChange={setPeriod}
                />
              </div>

              <div className="space-y-4 border-t border-border pt-6">
                <h3 className={GROUP_HEADING}>{t('tools.portfolio.buildTitle')}</h3>
                <NumberField
                  id="portfolio-build"
                  label={t('tools.portfolio.buildLabel')}
                  hint={t('tools.portfolio.buildHint')}
                  value={fields.build}
                  onChange={set('build')}
                  error={errors.build}
                  prefix={prefix}
                />
                <NumberField
                  id="portfolio-hosting"
                  label={t('tools.portfolio.hostingLabel')}
                  hint={t('tools.portfolio.hostingHint')}
                  value={fields.hosting}
                  onChange={set('hosting')}
                  error={errors.hosting}
                  prefix={prefix}
                  optional
                />
              </div>

              <div className="border-t border-border pt-6">
                <RangeField
                  id="portfolio-years"
                  label={t('tools.portfolio.yearsLabel')}
                  valueText={yearsText}
                  min={1}
                  max={MAX_YEARS}
                  step={1}
                  value={years}
                  onChange={setYears}
                />
              </div>
            </form>

            {/* Results: announced politely as the visitor types */}
            <section
              aria-labelledby="portfolio-results-heading"
              className="rounded-xl border border-border bg-bg-secondary p-6 md:p-8 lg:sticky lg:top-24"
            >
              <h2 id="portfolio-results-heading" className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary">
                {t('tools.common.resultsTitle')}
              </h2>
              <div aria-live="polite" className="mt-6">
                {ready ? (
                  <div className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Figure label={t('tools.portfolio.subscriptionTotal', { years: yearsText })} value={money(last.subscription)} />
                      <Figure label={t('tools.portfolio.buildTotal', { years: yearsText })} value={money(last.owned)} />
                    </div>
                    <Figure
                      emphasis
                      label={t('tools.portfolio.breakEvenLabel')}
                      value={breakEvenYear === null ? t('tools.portfolio.noBreakEven') : t('tools.portfolio.breakEvenYear', { year: breakEvenYear })}
                      note={breakEvenNote}
                    />
                  </div>
                ) : (
                  <p className="text-text-secondary leading-relaxed">
                    {t(Object.keys(errors).length ? 'tools.common.fixErrors' : 'tools.common.emptyResult')}
                  </p>
                )}
              </div>
              {ready ? (
                <div className="mt-8 border-t border-border pt-6">
                  <table className="w-full table-fixed text-sm">
                    <caption className={cn(GROUP_HEADING, 'mb-4 text-left')}>{t('tools.portfolio.tableCaption')}</caption>
                    <thead>
                      <tr className="text-left text-xs text-text-tertiary">
                        <th scope="col" className="w-14 pb-2 font-normal">{t('tools.portfolio.colYear')}</th>
                        <th scope="col" className="pb-2 pr-3 font-normal">{t('tools.portfolio.colSubscription')}</th>
                        <th scope="col" className="pb-2 font-normal">{t('tools.portfolio.colBuild')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row) => (
                        <tr key={row.year} className="border-t border-border align-top">
                          <th scope="row" className="py-2.5 text-left font-normal text-text-tertiary font-[family-name:var(--font-mono)]">
                            {row.year}
                          </th>
                          {[row.subscription, row.owned].map((total, index) => (
                            <td key={index} className={cn('py-2.5', index === 0 && 'pr-3')}>
                              <span className={cn('block break-words', total <= Math.min(row.subscription, row.owned) ? 'font-semibold text-text-primary' : 'text-text-secondary')}>
                                {money(total)}
                              </span>
                              <span aria-hidden="true" className="mt-1.5 block h-1.5 rounded-full bg-bg-tertiary">
                                <span
                                  className={cn('block h-full rounded-full', index === 0 ? 'bg-text-tertiary' : 'bg-accent-gold')}
                                  style={{ width: `${Math.min(100, (total / maxTotal) * 100)}%` }}
                                />
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
              <p className="mt-8 text-xs text-text-tertiary leading-relaxed">{t('tools.common.privacyNote')}</p>
            </section>
          </div>

          {/* How it is calculated */}
          <section aria-labelledby="portfolio-how-heading" className="mt-20 max-w-3xl">
            <h2 id="portfolio-how-heading" className={H2}>
              {t('tools.common.howTitle')}
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">{t('tools.portfolio.howBody1')}</p>
            <p className="mt-4 text-text-secondary leading-relaxed">{t('tools.portfolio.howBody2')}</p>
            <p className="mt-4 text-text-secondary leading-relaxed">{t('tools.portfolio.howBody3')}</p>
          </section>

          {/* Soft CTA */}
          <section aria-labelledby="portfolio-cta-heading" className="mt-16 rounded-xl border border-border bg-bg-secondary p-8 md:p-12">
            <h2 id="portfolio-cta-heading" className={H2}>
              {t('tools.portfolio.ctaTitle')}
            </h2>
            <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">{t('tools.portfolio.ctaBody')}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" href="/frame" umamiEvent="tool-cta" umamiData={{ tool: 'portfolio-cost-calculator', target: 'frame' }}>
                {t('tools.portfolio.ctaFrame')}
              </Button>
              <Button variant="secondary" size="lg" href="/contact" umamiEvent="cta-start-project" umamiData={{ location: 'portfolio-calculator' }}>
                {t('tools.common.ctaContact')}
              </Button>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  )
}
