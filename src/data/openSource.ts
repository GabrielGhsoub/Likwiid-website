// Apps Likwiid publishes as free and open source software, shown on /open-source/. Names,
// repository URLs and licences are the same in every language, so they live here; the copy
// (pitch, body, features, alt text) lives under openSource.<key> in the locale files.
//
// screenshots: phone screenshots under public/images/open-source/<key>/, in display order.
// Leave the list empty and the page shows a framed placeholder with the app name instead.
// caseStudy: slug of the /work/ case study about the app, when there is one.

export interface OpenSourceApp {
  key: 'basemile' | 'plateclimb'
  name: string
  repoUrl: string
  // SPDX identifier of the licence, and the short label shown on the badge.
  license: 'GPL-3.0-or-later'
  licenseLabel: string
  // Short framework names for the badges; no versions.
  stack: string[]
  screenshots: string[]
  caseStudy?: string
}

export const OPEN_SOURCE_LICENSE_URL = 'https://www.gnu.org/licenses/gpl-3.0.html'

export const OPEN_SOURCE_APPS: OpenSourceApp[] = [
  {
    key: 'basemile',
    name: 'BaseMile',
    repoUrl: 'https://github.com/likwiid/basemile',
    license: 'GPL-3.0-or-later',
    licenseLabel: 'GPL-3.0',
    stack: ['React Native', 'Expo', 'SQLite', 'Bluetooth LE'],
    screenshots: [
      '/images/open-source/basemile/live-run.webp',
      '/images/open-source/basemile/voice-mode.webp',
      '/images/open-source/basemile/trends.webp',
    ],
    caseStudy: 'basemile',
  },
  {
    key: 'plateclimb',
    name: 'PlateClimb',
    repoUrl: 'https://github.com/likwiid/plateclimb',
    license: 'GPL-3.0-or-later',
    licenseLabel: 'GPL-3.0',
    stack: ['React Native', 'Expo', 'SQLite', 'TypeScript'],
    screenshots: [
      '/images/open-source/plateclimb/program.webp',
      '/images/open-source/plateclimb/day.webp',
      '/images/open-source/plateclimb/workout.webp',
    ],
    caseStudy: 'plateclimb',
  },
]

// The number of feature lines per app in the locale files (openSource.<key>.feature1..N).
export const OPEN_SOURCE_FEATURE_COUNT = 4
