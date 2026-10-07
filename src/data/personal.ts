// Founder facts shown on the home page Founder block and the Contact page.
// Translatable copy (role, bio) lives in the locale files under `founder`.
export const founder = {
  name: 'Gabriel Ghoussoub',
  location: 'Beirut, Lebanon',
  photo: '/gabriel.webp',
  photoWidth: 1230,
  photoHeight: 1308,
} as const

// Cofounder placeholder until his photo, title and bio arrive; the monogram
// stands in for the photo.
export const cofounder = {
  name: 'Emile',
  monogram: 'E',
} as const
