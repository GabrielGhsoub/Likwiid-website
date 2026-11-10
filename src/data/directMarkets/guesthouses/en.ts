import type { DirectMarketContent } from '../types'

const en: DirectMarketContent = {
  market: 'guesthouses',
  lang: 'en',
  docTitle: 'Direct Bookings for Guesthouses and B&Bs | Likwiid',
  description:
    'A booking page on your guesthouse website: card deposit or request, extras, minimum stay and dates that stay in step with the booking platforms. No commission.',
  crumb: 'Guesthouses and B&Bs',
  eyebrow: 'Likwiid Direct for guesthouses and B&Bs',
  h1: 'Direct bookings on your guesthouse website, with no commission.',
  intro: [
    'If you run a guesthouse, you know how it goes. A guest finds you on a booking platform, the commission comes out of your margin, and next year the same guest books through the same platform again. Your own website, if you have one, stops at a contact form and a phone number.',
    'Likwiid Direct turns that website into a place where guests can book. The guest picks the dates, the room or the whole house and any extras, then pays a deposit or sends you a request. It carries your name, the money goes to your own payment account, and there is no commission.',
  ],
  demo: 'quinta-likwiid',
  ctaDemo: 'See a live example',
  ctaTalk: 'Ask a question',
  demoNote:
    'Quinta Likwiid is a fictional guesthouse. It is there so you can walk through the booking page we would set up for you. The payment is simulated and nothing is charged.',
  sections: [
    {
      kind: 'points',
      id: 'today',
      title: 'What weighs on a small guesthouse',
      items: [
        'The platform commission on every stay, even when the guest already knew your house.',
        'Guests who come back every year and still book through a platform.',
        'Requests by email and WhatsApp that take three or four messages to learn the dates, the number of people and the extras.',
        'The worry of a double booking when the house is listed in several places at once.',
      ],
    },
    {
      kind: 'steps',
      id: 'flow',
      title: 'How a direct booking goes',
      items: [
        { title: 'Dates and room', desc: 'The guest picks the dates and the room, the studio or the whole house, and sees only what is free and follows your rules.' },
        { title: 'Extras', desc: 'Breakfast, an airport transfer or a tasting, priced per person, per night or per stay, with the total always in view.' },
        { title: 'Details and terms', desc: 'Name and contact details, with no account to create, and your cancellation terms accepted before the guest goes on.' },
        { title: 'Deposit or request', desc: 'A card deposit confirms the stay and the rest is paid on arrival. In request mode, nothing is booked until you confirm.' },
      ],
    },
    {
      kind: 'cards',
      id: 'handles',
      title: 'What Likwiid Direct handles for you',
      items: [
        { title: 'Dates in step with the platforms', desc: 'It reads the busy dates from the platforms you list on and sends them yours. The update is not instant, and the calendar shows when it last happened.' },
        { title: 'Minimum stay and prices by season', desc: 'A minimum number of nights per house or per room, one price for August and another for November, free days between stays and closed periods.' },
        { title: 'Card deposit, the rest on arrival', desc: 'The same deposit you ask for by bank transfer today, taken at the moment the guest decides.' },
        { title: 'Request mode', desc: 'For owners who prefer to confirm every booking themselves: the request arrives with dates, people and extras, and you confirm, offer another date or decline.' },
        { title: 'In the guest\'s language', desc: 'Every step, every label and every price in the language the guest picks.' },
        { title: 'A panel with your name on it', desc: 'Requests to approve, bookings to search and export, and a calendar you can block with one click.' },
      ],
    },
    {
      kind: 'proof',
      id: 'proof',
      title: 'A booking page that is already taking real bookings',
      body: 'Our first live booking page is the one we built for Escuela Náutica de Valencia, a sailing school. Students book and pay on the school\'s own website. Likwiid Direct is the same idea packaged for stays, and it has no paying property yet.',
      linkLabel: 'Read how the school\'s booking page works',
      to: '/work/escuela-nautica-valencia',
    },
  ],
  faqTitle: 'Questions guesthouse owners ask',
  faq: [
    {
      q: 'Do I have to leave the platforms I list on?',
      a: 'No. Likwiid Direct works beside them. It reads their busy dates and sends them yours, so a direct booking closes the date in the other places. The update is not instant, so you can leave free days between stays as a margin.',
    },
    {
      q: 'How do I receive the deposit?',
      a: 'In your own payment account, by card, at the moment of booking. The rest is paid on arrival, as today. If you prefer to charge nothing online, use request mode.',
    },
    {
      q: 'Can I keep the website I have?',
      a: 'Yes. The booking page goes on the website you already have, and we install it for you. If the website needs to be rebuilt, we do that too.',
    },
    {
      q: 'What does it cost, and do you take a commission?',
      a: 'There is no commission on any booking and no monthly fee to Likwiid. A booking page on the website you already have costs EUR 300 to 600, once. A complete new website with booking costs EUR 900 to 1,700, once.',
    },
  ],
  closingTitle: 'Tell us about your guesthouse',
  closingBody:
    'How many rooms or houses you have, where you list today and how you take deposits. We answer within 24 hours with how Likwiid Direct would fit, and what it would not do.',
  directCrumb: 'Likwiid Direct',
  backToDirect: 'Everything Likwiid Direct does',
  breadcrumbLabel: 'Breadcrumb',
}

export default en
