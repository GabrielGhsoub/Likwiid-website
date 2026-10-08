import type { DirectMarketContent } from '../types'

const en: DirectMarketContent = {
  market: 'padel-clubs',
  lang: 'en',
  docTitle: 'Padel Court Booking for Clubs, No Commission | Likwiid',
  description:
    'Court booking on your own club website: courts and start times, a waitlist for prime time, notice and cancellation rules. No commission per booking.',
  crumb: 'Padel clubs',
  eyebrow: 'Likwiid Direct for padel clubs',
  h1: 'Court booking for padel clubs, on your own website.',
  intro: [
    'Plenty of clubs still take bookings through WhatsApp messages and a shared spreadsheet, or through a marketplace app that keeps the player relationship and charges for every booking.',
    'Likwiid Direct puts court booking on the website you already have. Players pick a time and a court, see what it costs and book in a few taps. You set the courts, the times and the rules, and every booking comes straight to you.',
  ],
  demo: 'atelier-likwiid',
  ctaDemo: 'Try the closest demo',
  ctaTalk: 'Talk to us',
  demoNote:
    'There is no padel demo yet. The closest one is Atelier Likwiid, a fictional studio that books sessions by time slot, with places left and a waitlist. The checkout is simulated and no payment is taken.',
  sections: [
    {
      kind: 'points',
      id: 'today',
      title: 'What gets in the way today',
      items: [
        'Booking requests spread across WhatsApp, Instagram and phone calls, answered between matches.',
        'The 19:00 slot booked twice because two people updated the same sheet.',
        'Late cancellations on prime time that leave a court empty and unpaid.',
        'Marketplace apps that take a cut of each booking and keep the player contact for themselves.',
      ],
    },
    {
      kind: 'steps',
      id: 'flow',
      title: 'How a court booking goes',
      items: [
        { title: 'Pick a day and a time', desc: 'Players see the free start times for the day. Times where every court is taken show as full.' },
        { title: 'Choose a court', desc: 'Indoor or outdoor, centre court or side court: each court is listed on its own with its own price.' },
        { title: 'Add what they need', desc: 'Racket hire or a tube of balls, priced per player or per booking, added with one tick.' },
        { title: 'Confirm or send a request', desc: 'A card deposit confirms the court on the spot. In request mode the booking waits for you to approve it.' },
      ],
    },
    {
      kind: 'cards',
      id: 'handles',
      title: 'What Likwiid Direct handles for a club',
      items: [
        { title: 'Courts and start times', desc: 'Each court has its own start times and price per slot. A time only shows as full when every court is booked.' },
        { title: 'A waitlist for prime time', desc: 'When every court is taken, players join the waitlist instead of messaging you. Nothing is charged, and you offer the place from your panel when one opens.' },
        { title: 'Cancellations with rules', desc: 'You set the notice a player must give. Cancel early and the deposit becomes credit for another booking; cancel late and you keep it.' },
        { title: 'Notice and closed periods', desc: 'The minimum notice before a booking, plus closed dates for holidays, works or a tournament weekend.' },
        { title: 'Your terms, ticked first', desc: 'Your cancellation and payment terms sit at the last step, and nobody books without ticking that they read them.' },
        { title: 'A panel for the front desk', desc: 'Bookings to search and export, requests to approve or decline, and a calendar where you block dates with one click.' },
      ],
    },
    {
      kind: 'proof',
      id: 'proof',
      title: 'We have built padel booking before',
      body: 'For a client in Lebanon we built a full padel platform: players book courts, find matches at their level and play in leagues, and organisers run it all from a web portal. It is live on the App Store and Google Play. Likwiid Direct is the lighter version of that idea: court booking on your own website, with no app to download.',
      linkLabel: 'See the padel booking case study',
      to: '/work/padel-booking',
    },
  ],
  faqTitle: 'Questions clubs ask',
  faq: [
    {
      q: 'Do players need to download an app or create an account?',
      a: 'No. Players book on your website, in the browser of any phone, with just a name and contact details. There is no account to create.',
    },
    {
      q: 'Can we keep our current website?',
      a: 'Yes. Likwiid Direct goes into the site you already have with one script tag and one div, on WordPress, Wix or a hand-built site. If you need a new website as well, we can build that too.',
    },
    {
      q: 'Can players pay when they book?',
      a: 'You choose. A card deposit confirms the court at the moment of booking, or request mode lets players ask for a court without paying while you confirm each one yourself. You switch between the two from your owner panel.',
    },
    {
      q: 'Does it run leagues and matchmaking?',
      a: 'No. Likwiid Direct is for booking courts. Leagues and finding players at the same level are what we built in the custom padel platform above, and that is a separate project we are happy to talk about.',
    },
    {
      q: 'Do you take a commission on bookings?',
      a: 'No. There is no commission on any booking. Tell us about your club and we will explain what setting it up involves.',
    },
  ],
  closingTitle: 'Tell us how your club books today',
  closingBody:
    'Send us your courts, your opening hours and how players book now. We reply within 24 hours with how Likwiid Direct would fit, and what it would not do.',
  directCrumb: 'Likwiid Direct',
  backToDirect: 'Everything Likwiid Direct does',
  breadcrumbLabel: 'Breadcrumb',
}

export default en
