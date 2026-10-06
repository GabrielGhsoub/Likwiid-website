import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import type { TFunction } from 'i18next'
import { services as baseServices } from '../data/services'
import { projects as baseProjects } from '../data/projects'
import type { Service, Project } from '../types'

// Localization overlay: translatable content lives in the fr/es/pt/it locale files under
// the `servicesData` and `projectsData` namespaces, keyed by service id / project slug.
// English has NO data keys, so t() falls back to the original (English) source value via
// `defaultValue`. This keeps en.json lean and English rendering byte-identical to source.

type AnyT = TFunction

function txString(t: AnyT, key: string, fallback: string): string {
  return t(key, { defaultValue: fallback }) as string
}

function txArray<T>(t: AnyT, key: string, fallback: T): T {
  return t(key, { defaultValue: fallback, returnObjects: true }) as T
}

function localizeService(t: AnyT, s: Service): Service {
  const ns = `servicesData.${s.id}`
  return {
    ...s,
    title: txString(t, `${ns}.title`, s.title),
    shortDescription: txString(t, `${ns}.shortDescription`, s.shortDescription),
    longDescription: txString(t, `${ns}.longDescription`, s.longDescription),
    deliverables: txArray(t, `${ns}.deliverables`, s.deliverables),
  }
}

function localizeProject(t: AnyT, p: Project): Project {
  const ns = `projectsData.${p.slug}`
  const out: Project = {
    ...p,
    title: txString(t, `${ns}.title`, p.title),
    subtitle: txString(t, `${ns}.subtitle`, p.subtitle),
    description: txString(t, `${ns}.description`, p.description),
    challenge: txString(t, `${ns}.challenge`, p.challenge),
    approach: txString(t, `${ns}.approach`, p.approach),
    results: txString(t, `${ns}.results`, p.results),
  }
  if (p.oneLiner !== undefined) out.oneLiner = txString(t, `${ns}.oneLiner`, p.oneLiner)
  if (p.businessResult !== undefined) out.businessResult = txString(t, `${ns}.businessResult`, p.businessResult)
  if (p.role !== undefined) out.role = txString(t, `${ns}.role`, p.role)
  if (p.metrics !== undefined) out.metrics = txArray(t, `${ns}.metrics`, p.metrics)
  if (p.keyFeatures !== undefined) out.keyFeatures = txArray(t, `${ns}.keyFeatures`, p.keyFeatures)
  if (p.architecture !== undefined) out.architecture = txArray(t, `${ns}.architecture`, p.architecture)
  if (p.highlights !== undefined) out.highlights = txArray(t, `${ns}.highlights`, p.highlights)
  return out
}

export function useLocalizedServices(): Service[] {
  const { t, i18n } = useTranslation()
  // i18n.language forces recompute on a live language switch (t can be referentially stable)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => baseServices.map((s) => localizeService(t, s)), [t, i18n.language])
}

export function useLocalizedProjects(): Project[] {
  const { t, i18n } = useTranslation()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => baseProjects.map((p) => localizeProject(t, p)), [t, i18n.language])
}

export function useLocalizedFeaturedProjects(): Project[] {
  return useLocalizedProjects().filter((p) => p.featured)
}
