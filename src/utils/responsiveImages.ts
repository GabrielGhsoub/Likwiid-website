import { CARD_IMAGES } from '../data/cardImages'

// WebP renditions of the demo preview screenshots. The original JPEGs stay in public/ as the
// <img src> fallback and for anything that links to them directly; cards pick a WebP size
// from srcset instead, so a phone no longer downloads the full 1280px JPEG for a small card.
const DEMO_PREVIEWS: Record<string, { small: string; large: string; largeWidth: number }> = {
  '/direct-demo-preview.jpg': { small: '/direct-demo-preview-640.webp', large: '/direct-demo-preview.webp', largeWidth: 1280 },
  '/direct-demo-atelier-preview.jpg': {
    small: '/direct-demo-atelier-preview-640.webp',
    large: '/direct-demo-atelier-preview.webp',
    largeWidth: 1200,
  },
  '/frame-demo-ana-preview.jpg': { small: '/frame-demo-ana-preview-640.webp', large: '/frame-demo-ana-preview.webp', largeWidth: 1280 },
  '/frame-demo-studio-preview.jpg': {
    small: '/frame-demo-studio-preview-640.webp',
    large: '/frame-demo-studio-preview.webp',
    largeWidth: 1280,
  },
}

// Two-column card grids: half the viewport from md up, full width (minus gutters) below.
export const TWO_COLUMN_SIZES = '(min-width: 1248px) 600px, (min-width: 768px) 50vw, 100vw'

/** srcset for a demo preview, or undefined when the image has no WebP renditions. */
export function demoPreviewSrcSet(src: string): string | undefined {
  const variants = DEMO_PREVIEWS[src]
  if (!variants) return undefined
  return `${variants.small} 640w, ${variants.large} ${variants.largeWidth}w`
}

// Project screenshots shown on cards: phone screens about 120px wide, web screens about 350px.
// scripts/make-card-images.py writes a smaller copy of each; the browser picks it from srcset.
export const PHONE_CARD_SIZES = '120px'
export const WEB_CARD_SIZES = '(min-width: 768px) 350px, 90vw'

/** srcset and sizes for a card screenshot, or nothing when it has no card-sized copy. */
export function cardImageProps(src: string, sizes: string): { srcSet?: string; sizes?: string } {
  const candidates = CARD_IMAGES[src]
  if (!candidates) return {}
  return { srcSet: candidates.map(([url, width]) => `${url} ${width}w`).join(', '), sizes }
}
