import type { DirectMarketContent } from '../types'

const en: DirectMarketContent = {
  market: 'dive-centres',
  lang: 'en',
  docTitle: 'Dive Centre Booking System, No Commission | Likwiid',
  description:
    'Dive and course bookings on your own website: places per trip, courses over several days, equipment hire and certification cards collected before the dive.',
  crumb: 'Dive centres',
  eyebrow: 'Likwiid Direct for dive centres',
  h1: 'Dive and course bookings, with the paperwork in before the boat leaves.',
  intro: [
    'A dive booking is never just a date. You need the diver\'s certification, what equipment they need and sometimes a medical statement, and you usually collect it by email, one question at a time, or at the counter on the morning of the dive.',
    'Likwiid Direct takes bookings for dives, try dives and courses on your own website. It keeps a number of places per trip and per course, asks for the documents each activity needs, and sends every booking straight to you instead of through a platform that takes a cut.',
  ],
  demo: 'escuela-likwiid',
  ctaDemo: 'Try the closest demo',
  ctaTalk: 'Talk to us',
  demoNote:
    'There is no dive demo yet. The closest one is Escuela Likwiid, a fictional sailing school in Spanish and English with courses over several days, places per session and a documents step. Uploads stay in your browser and the checkout is simulated.',
  sections: [
    {
      kind: 'points',
      id: 'today',
      title: 'Where dive bookings go wrong',
      items: [
        'A diver books a deeper dive than their certification allows, and you find out at the counter.',
        'Equipment needs arrive on the morning of the dive, or not at all.',
        'A course over three days is booked like a single dive, and the dates drift apart in the messages.',
        'Wind cancels the boat and every diver has to be refunded or moved by hand.',
        'Booking platforms take a commission on every dive and every course.',
      ],
    },
    {
      kind: 'steps',
      id: 'flow',
      title: 'How a dive booking goes',
      items: [
        { title: 'Choose the activity', desc: 'A fun dive, a try dive or a course, each with its own dates, times and number of places.' },
        { title: 'Pick a date', desc: 'Dives show their departure times. Courses show their sessions, with every day of the course included.' },
        { title: 'Add equipment', desc: 'A full set, a wetsuit or a torch, priced per diver or per booking, so you know what to prepare.' },
        { title: 'Upload the documents', desc: 'The certification card or medical statement the activity asks for, with a note on how long it is kept.' },
        { title: 'Deposit or request', desc: 'A card deposit holds the place, or the booking waits as a request until you have checked it and confirmed.' },
      ],
    },
    {
      kind: 'cards',
      id: 'handles',
      title: 'What Likwiid Direct handles for a dive centre',
      items: [
        { title: 'Places per trip and per course', desc: 'Each boat trip and each course has its own number of places. Divers see how many are left and join a waitlist when it is full.' },
        { title: 'Courses over several days, booked once', desc: 'A course that runs over three days is one booking that holds all three dates, not three dives booked separately.' },
        { title: 'Documents before the dive', desc: 'Each activity lists the documents it needs. Divers upload them while booking, and you mark each one received or reviewed in your panel.' },
        { title: 'Equipment hire as options', desc: 'Rental items are added in the booking with their price, per diver or per booking, and show up in the total and the deposit.' },
        { title: 'Weather cancellations into credit', desc: 'Cancel a trip from your panel and the divers on it get credit for another date, instead of refunds you chase one by one.' },
        { title: 'Where to meet, in the confirmation', desc: 'The confirmation tells divers where to meet, with a map link, and can link a briefing video.' },
      ],
    },
    {
      kind: 'panel',
      id: 'limits',
      title: 'What it does not decide for you',
      paragraphs: [
        'Likwiid Direct does not check a certification against a training agency\'s records, and it does not judge whether someone is fit to dive. It collects the card and the statement and puts them in front of you before the day.',
        'For dives that need a closer look, use request mode: the diver sends the booking with their documents, you check them, and only then do you confirm. The decision stays with you and your instructors.',
      ],
    },
  ],
  faqTitle: 'Questions dive centres ask',
  faq: [
    {
      q: 'Does it check certification levels automatically?',
      a: 'No. It asks for the certification card each activity needs and shows it to you with the booking. You or your instructors decide, and request mode lets you confirm only after you have looked.',
    },
    {
      q: 'Can divers book a course that runs over several days?',
      a: 'Yes. A course is set up as sessions that can span several days, and each session is one booking with every date in it and its own number of places.',
    },
    {
      q: 'What happens when the weather cancels a trip?',
      a: 'You cancel the trip from your owner panel and the divers booked on it receive credit they can use on another date, so there is nobody to refund by hand.',
    },
    {
      q: 'How long are uploaded documents kept?',
      a: 'You set how many days after the activity they are deleted, and the upload step tells divers so before they send anything.',
    },
    {
      q: 'Do you take a commission on bookings?',
      a: 'No. There is no commission on any dive or course. Tell us about your centre and we will explain what setting it up involves.',
    },
  ],
  closingTitle: 'Tell us how your centre books today',
  closingBody:
    'Send us your trips, your courses and what you ask divers before they come. We reply within 24 hours with how Likwiid Direct would fit, and what it would not do.',
  directCrumb: 'Likwiid Direct',
  backToDirect: 'Everything Likwiid Direct does',
  breadcrumbLabel: 'Breadcrumb',
}

export default en
