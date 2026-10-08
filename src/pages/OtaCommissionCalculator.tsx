import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PageTransition } from '../components/layout/PageTransition'
import { Button } from '../components/ui/Button'
import { CurrencyPicker, Figure, NumberField, RangeField } from '../components/tools/CalculatorFields'
import { useCurrentLanguage } from '../i18n/useLocalizedPath'
import { CURRENCY_SYMBOLS, formatAmount, formatPercent, parseNumber, type Currency } from '../utils/calculator'

// OTA commission calculator: what a property pays booking platforms each year, and what
// moving part of those bookings to direct would keep. Every input starts empty and the
// visitor types their own figures; the prerendered page holds no amounts at all.

const FIELDS = ['bookings', 'value', 'share', 'commission', 'visibility', 'processing'] as const
type Field = (typeof FIELDS)[number]
const PERCENT_FIELDS: readonly Field[] = ['share', 'commission', 'visibility', 'processing']
const REQUIRED_FIELDS: readonly Field[] = ['bookings', 'value', 'share', 'commission']
const EMPTY = Object.fromEntries(FIELDS.map((field) => [field, ''])) as Record<Field, string>

// Shares of OTA bookings shown side by side under the slider.
const SHIFT_STEPS = [10, 25, 50] as const
const DEFAULT_SHIFT = 20

const H2 = 'text-3xl md:text-4xl font-bold tracking-tight font-[family-name:var(--font-display)] text-text-primary'

export default function OtaCommissionCalculator() {
  const { t } = useTranslation()
  const lang = useCurrentLanguage()
  const [fields, setFields] = useState(EMPTY)
  const [currency, setCurrency] = useState<Currency>('none')
  const [shift, setShift] = useState(DEFAULT_SHIFT)

  useEffect(() => {
    document.title = t('tools.ota.docTitle')
  }, [t])

  const set = (field: Field) => (value: string) => setFields((prev) => ({ ...prev, [field]: value }))

  const values = Object.fromEntries(FIELDS.map((field) => [field, parseNumber(fields[field])])) as Record<Field, number | null>
  const errors: Partial<Record<Field, string>> = {}
  for (const field of FIELDS) {
    const value = values[field]
    if (value === null) continue
    if (Number.isNaN(value)) errors[field] = t('tools.common.errorNumber')
    else if (PERCENT_FIELDS.includes(field) && value > 100) errors[field] = t('tools.common.errorPercent')
  }
  const ready = Object.keys(errors).length === 0 && REQUIRED_FIELDS.every((field) => values[field] !== null)

  // Revenue that comes in through the platforms, and the total rate they take from it.
  const otaRevenue = ready ? (values.bookings! * values.value! * values.share!) / 100 : 0
  const rate = (values.commission ?? 0) + (values.visibility ?? 0)
  const processing = values.processing ?? 0
  const commissionPaid = (otaRevenue * rate) / 100
  const keptAt = (percent: number) => ((otaRevenue * percent) / 100) * ((rate - processing) / 100)
  const money = (value: number) => formatAmount(value, lang, currency)
  const prefix = CURRENCY_SYMBOLS[currency]

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
              {t('tools.ota.heroTitle')}
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">{t('tools.ota.heroSubtitle')}</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
            {/* Inputs */}
            <form
              aria-labelledby="ota-form-heading"
              onSubmit={(event) => event.preventDefault()}
              className="space-y-6 rounded-xl border border-border bg-bg-secondary p-6 md:p-8"
            >
              <h2 id="ota-form-heading" className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary">
                {t('tools.common.formTitle')}
              </h2>
              <CurrencyPicker value={currency} onChange={setCurrency} />
              <NumberField
                id="ota-bookings"
                label={t('tools.ota.bookingsLabel')}
                hint={t('tools.ota.bookingsHint')}
                value={fields.bookings}
                onChange={set('bookings')}
                error={errors.bookings}
                inputMode="numeric"
              />
              <NumberField
                id="ota-value"
                label={t('tools.ota.valueLabel')}
                hint={t('tools.ota.valueHint')}
                value={fields.value}
                onChange={set('value')}
                error={errors.value}
                prefix={prefix}
              />
              <NumberField
                id="ota-share"
                label={t('tools.ota.shareLabel')}
                hint={t('tools.ota.shareHint')}
                value={fields.share}
                onChange={set('share')}
                error={errors.share}
                suffix="%"
              />
              <NumberField
                id="ota-commission"
                label={t('tools.ota.commissionLabel')}
                hint={t('tools.ota.commissionHint')}
                value={fields.commission}
                onChange={set('commission')}
                error={errors.commission}
                suffix="%"
              />
              <NumberField
                id="ota-visibility"
                label={t('tools.ota.visibilityLabel')}
                hint={t('tools.ota.visibilityHint')}
                value={fields.visibility}
                onChange={set('visibility')}
                error={errors.visibility}
                suffix="%"
                optional
              />
              <NumberField
                id="ota-processing"
                label={t('tools.ota.processingLabel')}
                hint={t('tools.ota.processingHint')}
                value={fields.processing}
                onChange={set('processing')}
                error={errors.processing}
                suffix="%"
                optional
              />
              <RangeField
                id="ota-shift"
                label={t('tools.ota.shiftLabel')}
                valueText={t('tools.common.percent', { value: shift })}
                min={0}
                max={100}
                step={5}
                value={shift}
                onChange={setShift}
              />
            </form>

            {/* Results: announced politely as the visitor types */}
            <section
              aria-labelledby="ota-results-heading"
              className="rounded-xl border border-border bg-bg-secondary p-6 md:p-8 lg:sticky lg:top-24"
            >
              <h2 id="ota-results-heading" className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary">
                {t('tools.common.resultsTitle')}
              </h2>
              <div aria-live="polite" className="mt-6">
                {ready ? (
                  <div className="space-y-6">
                    <Figure
                      label={t('tools.ota.commissionResult')}
                      value={money(commissionPaid)}
                      note={t('tools.ota.commissionNote', { rate: formatPercent(rate, lang), revenue: money(otaRevenue) })}
                    />
                    <Figure
                      emphasis
                      label={t('tools.ota.keepResult', { shift: t('tools.common.percent', { value: shift }) })}
                      value={money(keptAt(shift))}
                      note={
                        processing > 0
                          ? t('tools.ota.keepNoteFees', {
                              saved: money((otaRevenue * shift * rate) / 10000),
                              fees: money((otaRevenue * shift * processing) / 10000),
                            })
                          : t('tools.ota.keepNote')
                      }
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
                  <h3 className="text-sm font-medium uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-mono)]">
                    {t('tools.ota.rangeTitle')}
                  </h3>
                  <dl className="mt-4 grid grid-cols-3 gap-4">
                    {SHIFT_STEPS.map((step) => (
                      <div key={step} className="min-w-0">
                        <dt className="text-xs text-text-tertiary">{t('tools.ota.rangeItem', { shift: t('tools.common.percent', { value: step }) })}</dt>
                        <dd className="mt-1 font-semibold text-text-primary break-words">{money(keptAt(step))}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : null}
              <p className="mt-8 text-xs text-text-tertiary leading-relaxed">{t('tools.common.privacyNote')}</p>
            </section>
          </div>

          {/* How it is calculated */}
          <section aria-labelledby="ota-how-heading" className="mt-20 max-w-3xl">
            <h2 id="ota-how-heading" className={H2}>
              {t('tools.common.howTitle')}
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">{t('tools.ota.howBody1')}</p>
            <p className="mt-4 text-text-secondary leading-relaxed">{t('tools.ota.howBody2')}</p>
            <p className="mt-4 text-text-secondary leading-relaxed">{t('tools.ota.howBody3')}</p>
            <p className="mt-4 text-sm text-text-tertiary leading-relaxed">{t('tools.ota.ratesNote')}</p>
          </section>

          {/* Soft CTA */}
          <section aria-labelledby="ota-cta-heading" className="mt-16 rounded-xl border border-border bg-bg-secondary p-8 md:p-12">
            <h2 id="ota-cta-heading" className={H2}>
              {t('tools.ota.ctaTitle')}
            </h2>
            <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">{t('tools.ota.ctaBody')}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" href="/direct" umamiEvent="tool-cta" umamiData={{ tool: 'ota-commission-calculator', target: 'direct' }}>
                {t('tools.ota.ctaDirect')}
              </Button>
              <Button variant="secondary" size="lg" href="/contact" umamiEvent="cta-start-project" umamiData={{ location: 'ota-calculator' }}>
                {t('tools.common.ctaContact')}
              </Button>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  )
}
