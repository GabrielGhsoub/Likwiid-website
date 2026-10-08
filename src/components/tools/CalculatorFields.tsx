import { type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '../../utils/cn'
import { CURRENCIES, type Currency } from '../../utils/calculator'

// Form building blocks shared by the /tools/ calculators. Inputs are text fields with a
// numeric keyboard rather than type="number", so "1 500" or "149,90" type naturally in every
// language (see parseNumber).

const INPUT =
  'w-full min-w-0 bg-transparent py-3 text-text-primary placeholder:text-text-tertiary focus:outline-none'
const FRAME =
  'flex items-center gap-2 rounded-lg border bg-bg-secondary px-4 transition-[border-color,box-shadow] duration-300 focus-within:border-accent-gold focus-within:shadow-[0_0_0_3px_var(--color-accent-gold-dim)]'

interface NumberFieldProps {
  id: string
  label: string
  hint?: string
  value: string
  onChange: (value: string) => void
  /** Shown before the number, such as a currency symbol. */
  prefix?: string
  /** Shown after the number, such as "%". */
  suffix?: string
  error?: string
  optional?: boolean
  inputMode?: 'numeric' | 'decimal'
}

export function NumberField({ id, label, hint, value, onChange, prefix, suffix, error, optional, inputMode = 'decimal' }: NumberFieldProps) {
  const { t } = useTranslation()
  const describedBy = [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean).join(' ') || undefined
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-text-secondary mb-1.5">
        {label}
        {optional ? <span className="text-text-tertiary"> ({t('tools.common.optional')})</span> : null}
      </label>
      <div className={cn(FRAME, error ? 'border-error-base' : 'border-border')}>
        {prefix ? (
          <span aria-hidden="true" className="text-text-tertiary">
            {prefix}
          </span>
        ) : null}
        <input
          id={id}
          name={id}
          type="text"
          inputMode={inputMode}
          autoComplete="off"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={INPUT}
        />
        {suffix ? (
          <span aria-hidden="true" className="shrink-0 text-sm text-text-tertiary font-[family-name:var(--font-mono)]">
            {suffix}
          </span>
        ) : null}
      </div>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-text-tertiary leading-relaxed">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-xs text-error-base">
          {error}
        </p>
      ) : null}
    </div>
  )
}

interface ChoiceGroupProps<T extends string> {
  name: string
  legend: string
  options: readonly { value: T; label: string }[]
  value: T
  onChange: (value: T) => void
}

// A segmented control built on native radio buttons: arrow keys move between options and the
// group reads as one question to screen readers.
export function ChoiceGroup<T extends string>({ name, legend, options, value, onChange }: ChoiceGroupProps<T>) {
  return (
    <fieldset>
      <legend className="block text-sm text-text-secondary mb-1.5">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={cn(
              'inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 text-sm transition-colors has-[:focus-visible]:shadow-[0_0_0_3px_var(--color-accent-gold-dim)]',
              option.value === value
                ? 'border-accent-gold bg-accent-gold-dim text-text-primary'
                : 'border-border text-text-secondary hover:border-border-hover hover:text-text-primary',
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={option.value === value}
              onChange={() => onChange(option.value)}
              className="sr-only"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export function CurrencyPicker({ value, onChange }: { value: Currency; onChange: (value: Currency) => void }) {
  const { t } = useTranslation()
  const labels: Record<Currency, string> = {
    none: t('tools.common.currencyNone'),
    EUR: t('tools.common.currencyEur'),
    GBP: t('tools.common.currencyGbp'),
    USD: t('tools.common.currencyUsd'),
  }
  return (
    <ChoiceGroup
      name="currency"
      legend={t('tools.common.currencyLegend')}
      options={CURRENCIES.map((currency) => ({ value: currency, label: labels[currency] }))}
      value={value}
      onChange={onChange}
    />
  )
}

interface RangeFieldProps {
  id: string
  label: string
  /** The current value as shown next to the label and read out by screen readers. */
  valueText: string
  min: number
  max: number
  step: number
  value: number
  onChange: (value: number) => void
}

export function RangeField({ id, label, valueText, min, max, step, value, onChange }: RangeFieldProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm text-text-secondary">
          {label}
        </label>
        <span aria-hidden="true" className="text-sm font-medium text-text-primary font-[family-name:var(--font-mono)]">
          {valueText}
        </span>
      </div>
      <input
        id={id}
        name={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={valueText}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-3 h-11 w-full cursor-pointer accent-[var(--color-accent-gold)]"
      />
    </div>
  )
}

// A labelled figure in the results panel.
export function Figure({ label, value, note, emphasis }: { label: string; value: string; note?: ReactNode; emphasis?: boolean }) {
  return (
    <div>
      <p className="text-sm text-text-secondary">{label}</p>
      <p
        className={cn(
          'mt-1 font-bold tracking-tight font-[family-name:var(--font-display)] break-words',
          emphasis ? 'text-3xl md:text-4xl text-accent-gold' : 'text-2xl text-text-primary',
        )}
      >
        {value}
      </p>
      {note ? <p className="mt-1.5 text-sm text-text-tertiary leading-relaxed">{note}</p> : null}
    </div>
  )
}
