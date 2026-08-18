// Anchor class strings mirroring Button variants (see Button.tsx), for external
// links that must navigate in the same tab: Button renders external hrefs with
// target="_blank", so the product demo launchers use plain anchors styled the
// same instead. Keep these in sync with Button's variant and size classes.
const BUTTON_LINK_BASE =
  'inline-flex items-center justify-center gap-2 font-medium rounded-full cursor-pointer no-underline font-[family-name:var(--font-display)]'

export const BUTTON_LINK_PRIMARY_LG = `${BUTTON_LINK_BASE} liquid-ripple bg-accent-gold text-white border border-accent-gold hover:opacity-90 transition-colors duration-200 px-8 py-4 text-lg`

export const BUTTON_LINK_SECONDARY_MD = `${BUTTON_LINK_BASE} border border-border text-text-primary hover:border-border-hover hover:text-accent-gold transition-[border-color,color] duration-200 px-6 py-3 text-base`

export const BUTTON_LINK_HOVER = { scale: 1.02 }
export const BUTTON_LINK_TAP = { scale: 0.98 }
