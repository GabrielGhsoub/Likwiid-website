// Build-time feature flags. Flip and redeploy to enable.

// Shows the hospitality case-study card on /work. Keep OFF until the client has
// approved being named. Fill in the i18n keys under `hospitality.cs*` (all locales)
// and the image/link fields below before flipping.
export const SHOW_HOSPITALITY_CASE_STUDY = false

// Content slots for the case-study card. Intentionally empty in the repo: no client
// name, screenshots, or URL ships until the flag above is flipped.
export const HOSPITALITY_CASE_STUDY = {
  beforeImage: '',
  afterImage: '',
  liveUrl: '',
} as const
