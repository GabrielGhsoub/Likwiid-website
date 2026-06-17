import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const OUTPUT_FILE = process.argv[2]
const LOCALES_DIR = resolve(process.cwd(), 'src/locales')
const LANGS = ['fr', 'es', 'pt'] // English uses source data via defaultValue; no keys needed

const raw = JSON.parse(readFileSync(OUTPUT_FILE, 'utf8'))
const data = raw.result

const locales = {}
for (const lang of LANGS) {
  locales[lang] = JSON.parse(readFileSync(resolve(LOCALES_DIR, `${lang}.json`), 'utf8'))
}

// --- projectsData ---
let projCount = 0
for (const p of data.projects ?? []) {
  if (!p?.slug) continue
  projCount++
  for (const lang of LANGS) {
    if (!locales[lang].projectsData) locales[lang].projectsData = {}
    locales[lang].projectsData[p.slug] = p[lang]
  }
}

// --- servicesData ---
let svcCount = 0
for (const s of data.services?.services ?? []) {
  if (!s?.id) continue
  svcCount++
  for (const lang of LANGS) {
    if (!locales[lang].servicesData) locales[lang].servicesData = {}
    locales[lang].servicesData[s.id] = s[lang]
  }
}

// --- aboutData ---
const about = data.about ?? {}
for (const lang of LANGS) {
  if (about[lang]) {
    const a = about[lang]
    locales[lang].aboutData = {
      personalBio: a.personalBio,
      personalTitle: a.personalTitle,
      founderRole: a.founderRole,
      founderBio: a.founderBio,
      philosophy: a.philosophy,
      interests: a.interests,
      journey: a.journey, // array of { role, description }; resolved via aboutData.journey.<i>.<field>
    }
  }
}

for (const lang of LANGS) {
  writeFileSync(resolve(LOCALES_DIR, `${lang}.json`), JSON.stringify(locales[lang], null, 2) + '\n')
}

console.log(`Merged ${projCount} projects, ${svcCount} services, about(${Object.keys(about).length} langs) into ${LANGS.join('/')}.`)
