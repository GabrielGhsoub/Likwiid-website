import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const OUTPUT_FILE = process.argv[2]
const LOCALES_DIR = resolve(process.cwd(), 'src/locales')
const LANGS = ['en', 'fr', 'es', 'pt']

const raw = JSON.parse(readFileSync(OUTPUT_FILE, 'utf8'))
const namespaces = raw.result

// Load existing locale files (preserve chrome keys: nav/theme/language/footer)
const locales = {}
for (const lang of LANGS) {
  locales[lang] = JSON.parse(readFileSync(resolve(LOCALES_DIR, `${lang}.json`), 'utf8'))
}

let nsCount = 0
let keyCount = 0
for (const { ns, entries } of namespaces) {
  if (!ns || !Array.isArray(entries)) continue
  nsCount++
  for (const lang of LANGS) {
    if (!locales[lang][ns]) locales[lang][ns] = {}
  }
  for (const e of entries) {
    keyCount++
    for (const lang of LANGS) {
      locales[lang][ns][e.key] = e[lang]
    }
  }
}

for (const lang of LANGS) {
  writeFileSync(resolve(LOCALES_DIR, `${lang}.json`), JSON.stringify(locales[lang], null, 2) + '\n')
}

console.log(`Merged ${nsCount} namespaces, ${keyCount} keys into ${LANGS.length} locale files.`)
