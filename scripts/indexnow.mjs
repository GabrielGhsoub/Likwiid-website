// Pings IndexNow (Bing, Yandex, Seznam, Naver) with every URL in the sitemap.
// Runs after each deploy; the key file in public/ proves ownership of the host.
import { readFileSync } from 'node:fs'

const HOST = 'likwiid.com'
const KEY = '80071f088769e7886d9ca3b8dbbbacc6'

const sitemap = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8')
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
})

console.log(`IndexNow: ${res.status} for ${urlList.length} URLs`)
if (!res.ok) {
  console.log(await res.text())
  process.exit(1)
}
