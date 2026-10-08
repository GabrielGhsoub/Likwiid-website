// Post-build guard: inspects dist/ and src/locales and fails when a change breaks
// something the cold-email pipeline or the brand depends on (landing pages linked
// from outreach, email signature assets, copy style, hidden client names, prices,
// retired fonts, the contact form endpoint).
//
// Usage: npm run build && npm run check:dist
// Set DIST_DIR to inspect another build output (handy for testing the checks).
//
// Extend the lists below; each check reads from them.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, resolve, extname } from 'node:path'

const ROOT = resolve(import.meta.dirname, '..')
const DIST = process.env.DIST_DIR ? resolve(process.env.DIST_DIR) : join(ROOT, 'dist')
const SRC = join(ROOT, 'src')
const LOCALES = join(SRC, 'locales')

// 1. Pages linked from outreach and the brand, with the <html lang> they must carry.
//    Paths are relative to dist/; '' is the home page.
const REQUIRED_PAGES = {
  '': 'en',
  contact: 'en',
  direct: 'en',
  'pt/direct': 'pt',
  'es/direct': 'es',
  'it/direct': 'it',
  'fr/direct': 'fr',
  work: 'en',
  'pt/work': 'pt',
  'es/work': 'es',
  'it/work': 'it',
  'fr/work': 'fr',
}

// 2. Files the email signature loads from the live site. Must exist and be non-empty.
const REQUIRED_EMAIL_ASSETS = [
  'assets/email/wave-l.png',
  'assets/email/wave-l@2x.png',
  'assets/email/wave-l.svg',
  'email/signature.html',
]

// 3. Characters banned from copy (house style uses colons, commas or plain hyphens).
const BANNED_DASHES = [
  { char: '\u2014', name: 'em dash' },
  { char: '\u2013', name: 'en dash' },
]

// 4. Client names that must not ship until their feature flag is on.
const HIDDEN_CLIENT_NAMES = [{ text: 'Diving Monastir', flag: 'SHOW_HOSPITALITY_CASE_STUDY' }]

// 5. Price patterns banned from copy. EUR amounts are intentional and allowed.
const PRICE_PATTERNS = [
  { regex: /\$\s?\d/, name: '"$" followed by digits' },
  { regex: /\bUSD\b/, name: '"USD"' },
]

// 6. Retired font references (licence issue). Checked in dist/ and the root index.html.
const BANNED_FONT_REFS = [/satoshi/i, /fontshare/i]

// 7. Strings the source must still contain for the contact form to reach its handler.
const REQUIRED_SOURCE_STRINGS = ['https://api.likwiid.com/submit']

// Files in dist/ read as text for the string checks (images and fonts are skipped).
const TEXT_EXTENSIONS = new Set(['.html', '.js', '.mjs', '.css', '.txt', '.xml', '.json', '.svg', '.webmanifest'])
const SOURCE_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs'])

const violations = []
const fail = (check, message) => violations.push(`[${check}] ${message}`)

function walk(dir) {
  if (!existsSync(dir)) return []
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name)
    return entry.isDirectory() ? walk(full) : [full]
  })
}

// Repo-relative path for messages; absolute when the file lives outside the repo.
const rel = (file) => {
  const path = relative(ROOT, file)
  return !path || path.startsWith('..') ? file : path
}
const lineOf = (text, index) => text.slice(0, index).split('\n').length

// Text a reader sees: drop scripts, styles and comments, keep <title>, alt, title,
// aria-label and meta content (link previews show those), strip tags, decode entities.
function visibleText(html) {
  const withoutCode = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
  const attributes = [...withoutCode.matchAll(/\s(?:alt|title|aria-label|content)="([^"]*)"/gi)].map((m) => m[1])
  const text = withoutCode.replace(/<[^>]+>/g, ' ')
  return decodeEntities([text, ...attributes].join('\n'))
}

function decodeEntities(text) {
  const named = { mdash: '\u2014', ndash: '\u2013', amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', dollar: '$' }
  return text
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&([a-z]+);/gi, (match, name) => named[name.toLowerCase()] ?? match)
}

// Every string value in a locale file, with its dotted key path.
function localeStrings(value, path = []) {
  if (typeof value === 'string') return [{ key: path.join('.'), value }]
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([k, v]) => localeStrings(v, [...path, k]))
  }
  return []
}

// A snippet around a match so the failure message points at the offending copy.
function snippet(text, index, length = 1) {
  const start = Math.max(0, index - 30)
  const end = Math.min(text.length, index + length + 30)
  return JSON.stringify(text.slice(start, end).replace(/\s+/g, ' ').trim())
}

function readFlag(name) {
  const pattern = new RegExp(`\\b${name}\\s*(?::[^=]+)?=\\s*(true|false)\\b`)
  for (const file of walk(SRC).filter((f) => SOURCE_EXTENSIONS.has(extname(f)))) {
    const match = readFileSync(file, 'utf8').match(pattern)
    if (match) return match[1] === 'true'
  }
  return false
}

// Shared copy checks for dist page text and locale values (3 and 5).
function checkCopy(text, where) {
  for (const { char, name } of BANNED_DASHES) {
    const index = text.indexOf(char)
    if (index !== -1) fail('3 dashes', `${name} in ${where}: ${snippet(text, index)}`)
  }
  for (const { regex, name } of PRICE_PATTERNS) {
    const match = regex.exec(text)
    if (match) fail('5 prices', `${name} in ${where}: ${snippet(text, match.index, match[0].length)}`)
  }
}

if (!existsSync(join(DIST, 'index.html'))) {
  console.error(`check-dist: no build found at ${DIST}. Run "npm run build" first.`)
  process.exit(1)
}

const distFiles = walk(DIST)
const distText = distFiles
  .filter((file) => TEXT_EXTENSIONS.has(extname(file)))
  .map((file) => ({ file, text: readFileSync(file, 'utf8') }))
const distHtml = distText.filter(({ file }) => extname(file) === '.html')

// 1. Required pages and their language.
for (const [path, lang] of Object.entries(REQUIRED_PAGES)) {
  const file = join(DIST, path, 'index.html')
  if (!existsSync(file)) {
    fail('1 pages', `missing ${rel(file)}`)
    continue
  }
  const actual = readFileSync(file, 'utf8').match(/<html\b[^>]*\blang="([^"]*)"/i)?.[1]
  if (actual !== lang) fail('1 pages', `${rel(file)} has lang="${actual ?? ''}", expected "${lang}"`)
}

// 2. Email assets.
for (const asset of REQUIRED_EMAIL_ASSETS) {
  const file = join(DIST, asset)
  if (!existsSync(file)) fail('2 email assets', `missing ${rel(file)}`)
  else if (statSync(file).size === 0) fail('2 email assets', `empty file ${rel(file)}`)
}

// 3 and 5. Copy checks on locale values and on the visible text of every built page.
const localeFiles = walk(LOCALES).filter((file) => extname(file) === '.json')
if (localeFiles.length === 0) fail('3 dashes', `no locale files found in ${rel(LOCALES)}`)
for (const file of localeFiles) {
  for (const { key, value } of localeStrings(JSON.parse(readFileSync(file, 'utf8')))) {
    checkCopy(value, `${rel(file)} key "${key}"`)
  }
}
for (const { file, text } of distHtml) checkCopy(visibleText(text), rel(file))

// 4. Hidden client names, anywhere in dist (pages and bundles).
for (const { text: name, flag } of HIDDEN_CLIENT_NAMES) {
  if (readFlag(flag)) continue
  const needle = name.toLowerCase()
  for (const { file, text } of distText) {
    const index = text.toLowerCase().indexOf(needle)
    if (index !== -1) fail('4 hidden client', `"${name}" in ${rel(file)} line ${lineOf(text, index)} while ${flag} is off`)
  }
}

// 6. Retired fonts, in dist and the source index.html.
const rootIndex = join(ROOT, 'index.html')
const fontTargets = existsSync(rootIndex) ? [...distText, { file: rootIndex, text: readFileSync(rootIndex, 'utf8') }] : distText
for (const { file, text } of fontTargets) {
  for (const regex of BANNED_FONT_REFS) {
    const match = regex.exec(text)
    if (match) fail('6 fonts', `"${match[0]}" in ${rel(file)} line ${lineOf(text, match.index)}`)
  }
}

// 7. Contact form endpoint still present in source.
const sourceText = walk(SRC)
  .filter((file) => SOURCE_EXTENSIONS.has(extname(file)))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n')
for (const required of REQUIRED_SOURCE_STRINGS) {
  if (!sourceText.includes(required)) fail('7 contact form', `"${required}" not found anywhere in ${rel(SRC)}`)
}

if (violations.length > 0) {
  console.error(`check-dist: ${violations.length} violation(s) in ${rel(DIST)}\n`)
  for (const line of violations) console.error(`  ${line}`)
  console.error('\nFix the source (or update the lists at the top of scripts/check-dist.mjs if a rule changed).')
  process.exit(1)
}

console.log(
  `check-dist: OK (${Object.keys(REQUIRED_PAGES).length} pages, ${distHtml.length} HTML files, ${distText.length} text files, ${localeFiles.length} locales)`,
)
