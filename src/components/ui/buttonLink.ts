// Anchor class strings mirroring Button variants (see Button.tsx), for external
// links that must navigate in the same tab: Button renders external hrefs with
// target="_blank", so the product demo launchers use plain anchors styled the
// same instead. Keep these in sync with Button's variant and size classes.
const BUTTON_LINK_BASE =
  'inline-flex items-center justify-center gap-2 min-h-11 font-medium rounded-full cursor-pointer no-underline font-[family-name:var(--font-display)]'

export const BUTTON_LINK_PRIMARY_LG = `${BUTTON_LINK_BASE} bg-accent-gold text-text-inverse border border-accent-gold hover:bg-accent-gold-hover hover:border-accent-gold-hover transition-colors duration-200 px-6 py-3 text-base`

export const BUTTON_LINK_SECONDARY_MD = `${BUTTON_LINK_BASE} border border-border text-text-primary hover:border-border-hover transition-colors duration-200 px-5 py-2.5 text-base`
