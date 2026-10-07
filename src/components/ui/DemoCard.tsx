import { Play } from 'lucide-react'
import { umamiAttrs } from '../../utils/analytics'

interface DemoCardProps {
  href: string
  image: string
  imageWidth: number
  imageHeight: number
  alt: string
  name: string
  description: string
  launchLabel: string
  umamiEvent?: string
  umamiData?: Record<string, string>
}

// Live-demo card: screenshot on top with a centred launch button, caption below the image.
export function DemoCard({ href, image, imageWidth, imageHeight, alt, name, description, launchLabel, umamiEvent, umamiData }: DemoCardProps) {
  return (
    <a
      href={href}
      {...(umamiEvent ? umamiAttrs(umamiEvent, umamiData) : undefined)}
      className="group flex w-full flex-col overflow-hidden rounded-xl border border-border bg-bg-secondary text-left no-underline transition-colors hover:border-border-hover focus-visible:outline-2 focus-visible:outline-accent-gold"
    >
      <span className="relative block aspect-[16/10] bg-bg-tertiary">
        <img
          src={image}
          alt={alt}
          width={imageWidth}
          height={imageHeight}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#15181E] shadow-md ring-1 ring-black/10">
            <Play size={16} aria-hidden="true" />
            {launchLabel}
          </span>
        </span>
      </span>
      <span className="block border-t border-border px-5 py-4">
        <span className="block font-medium text-text-primary">{name}</span>
        <span className="mt-1 block text-sm text-text-secondary">{description}</span>
      </span>
    </a>
  )
}
