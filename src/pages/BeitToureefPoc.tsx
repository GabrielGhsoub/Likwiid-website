import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { m } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarDays,
  Check,
  CircleAlert,
  ClipboardList,
  CreditCard,
  Database,
  Gift,
  ListChecks,
  Lock,
  MessageCircle,
  PackageCheck,
  Plug,
  Smartphone,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  WandSparkles,
} from 'lucide-react'
import { PageTransition } from '../components/layout/PageTransition'
import { Button } from '../components/ui/Button'

type FlowKey = 'event' | 'tour' | 'table' | 'products'
type BookingStatus = 'new' | 'awaitingDeposit' | 'depositSubmitted' | 'confirmed'
type LeadStatus = 'Awaiting deposit' | 'Confirmed' | 'New request' | 'Quote sent' | 'Overdue'

interface FlowOption {
  id: FlowKey
  label: string
  title: string
  guest: string
  date: string
  description: string
  icon: typeof CalendarDays
  deposit: string
  basePrice: number
  insight: string
  fields: string[]
}

interface AddOn {
  name: string
  price: number
  note: string
}

interface AdminLead {
  name: string
  type: string
  date: string
  value: string
  status: LeadStatus
  action: string
}

interface TimelineItem {
  room: string
  guest: string
  source: string
  range: string
  status: LeadStatus
  note: string
}

interface CapabilityDemo {
  title: string
  icon: typeof Smartphone
  detail: string
  proofLabel: string
  proofTitle: string
  proofBody: string
  sampleItems: string[]
  operatorView: string[]
  outcome: string
}

const flowOptions: FlowOption[] = [
  {
    id: 'event',
    label: 'Private Event',
    title: 'Jnayneh private gathering',
    guest: 'Karim Haddad',
    date: 'Friday, June 26',
    description: 'Qualify event type, guest count, food needs, setup notes, budget range, and date-hold deposit.',
    icon: Users,
    deposit: '$250 date hold',
    basePrice: 1250,
    insight: 'Turns a loose event message into a qualified lead Dana can price and confirm.',
    fields: ['Event type', 'Guest count', 'Preferred space', 'Food needs', 'Budget range', 'Date flexibility'],
  },
  {
    id: 'tour',
    label: 'Rural Tour',
    title: 'Aartez cultural walk',
    guest: 'Maya Khoury',
    date: 'Saturday, June 13',
    description: 'Collect group size, transport, language, food notes, and add-ons before the team replies.',
    icon: CalendarDays,
    deposit: '30% deposit',
    basePrice: 210,
    insight: 'Makes tour interest bookable while keeping WhatsApp as the warm follow-up channel.',
    fields: ['Tour', 'Date', 'Guests', 'Language', 'Transport', 'Dietary notes'],
  },
  {
    id: 'table',
    label: 'Dinner Table',
    title: 'Sofra w Tannour dinner',
    guest: 'Nour Saliba',
    date: 'Wednesday, May 28',
    description: 'Reserve dinner with party size, occasion, seating preference, menu notes, and confirmation.',
    icon: ClipboardList,
    deposit: 'Deposit for 8+ guests',
    basePrice: 180,
    insight: 'Captures dinner details without forcing staff to ask the same questions every time.',
    fields: ['Date', 'Time', 'Party size', 'Occasion', 'Indoor/outdoor', 'Menu notes'],
  },
  {
    id: 'products',
    label: 'Namlieh Preorder',
    title: 'Village pantry bundle',
    guest: 'Rana Saad',
    date: 'Sunday, June 14',
    description: 'Bundle rural products for pickup, delivery, guest arrivals, and corporate gifting.',
    icon: Gift,
    deposit: 'Pay on pickup or link',
    basePrice: 85,
    insight: 'Gives rural products a clearer preorder path and connects them to stays/events.',
    fields: ['Products', 'Quantities', 'Pickup/delivery', 'Date', 'Gift note', 'Payment preference'],
  },
]

const addOns: AddOn[] = [
  { name: 'Village breakfast basket', price: 28, note: 'Good for guest arrivals' },
  { name: 'Local producer gift box', price: 42, note: 'Corporate or event gifting' },
  { name: 'Private guide upgrade', price: 65, note: 'Higher-value tour add-on' },
  { name: 'Transport coordination', price: 35, note: 'Removes back-and-forth' },
]

const adminLeads: AdminLead[] = [
  {
    name: 'Karim Haddad',
    type: 'Corporate gathering',
    date: 'Jun 26',
    value: '$1,250',
    status: 'Awaiting deposit',
    action: 'Send date-hold link',
  },
  {
    name: 'Maya Khoury',
    type: 'Aartez tour',
    date: 'Jun 13',
    value: '$210',
    status: 'Confirmed',
    action: 'Send arrival details',
  },
  {
    name: 'Nour Saliba',
    type: 'Rooftop dinner',
    date: 'May 28',
    value: '$620',
    status: 'New request',
    action: 'Confirm menu needs',
  },
  {
    name: 'Cedars Studio',
    type: 'Photoshoot',
    date: 'Jun 02',
    value: '$450',
    status: 'Quote sent',
    action: 'Follow up tomorrow',
  },
  {
    name: 'Lea Mansour',
    type: 'Mouneh workshop',
    date: 'Jun 20',
    value: '$112',
    status: 'Overdue',
    action: 'Send gentle reminder',
  },
]

const timelineItems: TimelineItem[] = [
  {
    room: 'Beit Toureef Home',
    guest: 'Thomas Keller',
    source: 'HotelRunner',
    range: 'May 24-27',
    status: 'Confirmed',
    note: 'Balance at arrival',
  },
  {
    room: 'Jnayneh Rooftop',
    guest: 'Nour Saliba',
    source: 'Website',
    range: 'May 28',
    status: 'New request',
    note: 'Needs menu choice',
  },
  {
    room: 'Meeting Room',
    guest: 'Karim Haddad',
    source: 'WhatsApp',
    range: 'Jun 26',
    status: 'Awaiting deposit',
    note: 'Hold until Friday',
  },
  {
    room: 'Out & About',
    guest: 'Maya Khoury',
    source: 'Website',
    range: 'Jun 13',
    status: 'Confirmed',
    note: 'Vegetarian notes saved',
  },
]

const currentSiteFindings = [
  {
    area: 'Rooms',
    current: 'Book Your Stay already sends guests to HotelRunner, and the stay page lists 3 houses, 20 rooms, meals, taxi, airport shuttle, tours, and local SIM help.',
    opportunity: 'Keep HotelRunner, then add a pre-arrival page for add-ons, guest notes, arrival instructions, transfers, tours, and concierge requests.',
  },
  {
    area: 'Tours',
    current: 'Out & About already shows tour packages, group-tier prices, per-person add-ons, custom tours, and WhatsApp CTAs.',
    opportunity: 'Turn each tour into a quote builder with group size, transport, add-ons, language, dietary notes, deposit, and a ready-to-send itinerary.',
  },
  {
    area: 'Venues',
    current: 'Sofra w Tannour, Meeting Room, Jnayneh, exhibitions, birthdays, corporate gatherings, weddings, and photoshoots are already presented.',
    opportunity: 'Qualify event leads before the first reply: date, guest count, occasion, preferred space, setup, food/drinks, budget, and date-hold deposit.',
  },
  {
    area: 'Namlieh',
    current: 'The shop shows local product categories and add-to-cart actions.',
    opportunity: 'Bundle products into preorders, guest arrival baskets, event gifts, and pickup/delivery workflows.',
  },
]

const improvementRoadmap = [
  {
    phase: 'Quick win',
    title: 'Structured WhatsApp buttons',
    detail: 'Replace generic messages with prefilled booking, tour, event, and preorder summaries.',
  },
  {
    phase: 'Quick win',
    title: 'Ask Before Booking intake',
    detail: 'Turn the contact-page intent into a guided form that routes questions by stay, event, tour, restaurant, or shop.',
  },
  {
    phase: 'First build',
    title: 'Event and tour deposit flow',
    detail: 'Generate quote, date hold, deposit link, confirmation, and follow-up reminders from one dashboard.',
  },
  {
    phase: 'First build',
    title: 'Guest arrival page',
    detail: 'Give confirmed guests one mobile page with map, check-in, breakfast hours, transfer, local tips, and official WhatsApp.',
  },
  {
    phase: 'Expand',
    title: 'AI-assisted operations inbox',
    detail: 'Classify inquiries, spot missing details, draft replies, and flag overdue deposits for staff review.',
  },
  {
    phase: 'Expand',
    title: 'Namlieh preorder bundles',
    detail: 'Connect the shop to stays, events, and corporate gifting through seasonal bundles and pickup windows.',
  },
]

const prepChecklist = [
  { task: 'Confirm final guest count', owner: 'Dana', status: 'Done' },
  { task: 'Send deposit reminder', owner: 'Front desk', status: 'Due today' },
  { task: 'Kitchen: vegetarian portions', owner: 'Sofra', status: 'Saved' },
  { task: 'Pack Namlieh gift boxes', owner: 'Shop', status: 'Tomorrow' },
  { task: 'Share map pin and arrival notes', owner: 'Front desk', status: 'Ready' },
]

const staffToday = [
  { time: '10:00', title: 'Thomas Keller checkout', note: 'Balance settled, taxi requested' },
  { time: '12:30', title: 'Namlieh pickup', note: 'Rana Saad, 2 fig jam, 1 makdous' },
  { time: '16:00', title: 'Jnayneh setup', note: '18 guests, rooftop dinner, menu pending' },
]

const analyticsCards = [
  { label: 'Deposit risk', value: '$1.1k', detail: 'Value waiting on payment links' },
  { label: 'Top add-on', value: 'Transport', detail: 'Requested on 42% of tours' },
  { label: 'Best channel', value: 'Website', detail: 'Highest confirmed-request rate' },
]

const nextCapabilities: CapabilityDemo[] = [
  {
    title: 'Mobile staff app',
    icon: Smartphone,
    detail: 'A simple phone view for arrivals, prep lists, guest notes, WhatsApp actions, and payment status while the team is away from the desk.',
    proofLabel: 'Phone preview',
    proofTitle: 'Today’s arrivals and tasks',
    proofBody: 'A lightweight staff screen for the front desk, kitchen, guide, and shop. It shows only what each person needs today.',
    sampleItems: ['16:00 Jnayneh setup: 18 guests', 'Kitchen note: 4 vegetarian portions', 'Payment: $250 date-hold received'],
    operatorView: ['Tap to call or WhatsApp the guest', 'Mark prep tasks done from the phone', 'See balance and notes before arrival'],
    outcome: 'Less running back to the desk, fewer missed details during busy service.',
  },
  {
    title: 'AI + RAG knowledge assistant',
    icon: Database,
    detail: 'Answers and drafts replies from Beit Toureef-specific knowledge: rooms, tour packages, policies, menus, pickup rules, and FAQs.',
    proofLabel: 'AI draft',
    proofTitle: 'Answer from saved Beit Toureef knowledge',
    proofBody: 'The assistant searches the approved knowledge base, drafts a reply, and cites what it used before Dana sends it.',
    sampleItems: ['Guest asks: Can 14 people do a custom tour with lunch?', 'Retrieved: tour add-ons, group pricing, lunch options', 'Draft: quote, deposit note, and two available time windows'],
    operatorView: ['Edit tone before sending', 'See missing details the guest should confirm', 'Update FAQs when policies change'],
    outcome: 'Faster replies without inventing answers or losing the Beit Toureef voice.',
  },
  {
    title: 'Automated follow-up engine',
    icon: WandSparkles,
    detail: 'Schedules deposit nudges, day-before confirmations, arrival instructions, product pickup reminders, and post-visit follow-ups.',
    proofLabel: 'Automation queue',
    proofTitle: 'The right message at the right moment',
    proofBody: 'Each booking gets timed reminders based on status, date, and payment. Staff can approve sensitive messages.',
    sampleItems: ['T-48h: confirm guest count and dietary notes', 'T-24h: send map pin and arrival instructions', 'T+1d: thank-you note and product reorder link'],
    operatorView: ['Pause reminders for VIP guests', 'Review overdue deposits every morning', 'Reuse message templates by flow'],
    outcome: 'Deposits and confirmations happen earlier, with less manual chasing.',
  },
  {
    title: 'Payment reconciliation',
    icon: CreditCard,
    detail: 'Matches deposit links, OMT/bank references, cash notes, balance due, receipts, and booking status in one operations view.',
    proofLabel: 'Payment desk',
    proofTitle: 'Match money to the right request',
    proofBody: 'A clean payment view shows what was requested, what arrived, what is still due, and which booking should update.',
    sampleItems: ['Karim Haddad: $250 deposit matched', 'Nour Saliba: $120 balance due at arrival', 'Cedars Studio: bank reference needs review'],
    operatorView: ['Flag unclear transfers', 'Generate receipt notes', 'Move booking to confirmed after match'],
    outcome: 'Fewer payment questions and clearer date-hold decisions.',
  },
  {
    title: 'Integration layer',
    icon: Plug,
    detail: 'Connects existing tools instead of replacing them: HotelRunner stays, website forms, WhatsApp templates, shop preorders, and analytics.',
    proofLabel: 'Connected tools',
    proofTitle: 'One operations layer over existing systems',
    proofBody: 'The POC can grow around Beit Toureef’s current tools instead of forcing a new all-in-one platform.',
    sampleItems: ['HotelRunner stay imports arrival dates', 'Website forms create structured requests', 'Shop preorders attach to stays and events'],
    operatorView: ['Keep current booking links', 'Route each inquiry to the right owner', 'Track source and conversion by channel'],
    outcome: 'Better operations without asking the team to abandon tools that already work.',
  },
  {
    title: 'Guest memory',
    icon: Users,
    detail: 'Remembers returning guests, dietary notes, preferred language, favorite add-ons, past visits, and product preferences.',
    proofLabel: 'Guest profile',
    proofTitle: 'Remember the small hospitality details',
    proofBody: 'Returning guests can be recognized with context: what they booked, what they liked, and what the team should prepare.',
    sampleItems: ['Maya Khoury: Arabic preferred, vegetarian lunch', 'Last visit: Aartez cultural walk, transport added', 'Suggested: Namlieh breakfast basket for next stay'],
    operatorView: ['Confirm preferences before arrival', 'Suggest relevant add-ons', 'Avoid asking repeat guests the same questions'],
    outcome: 'More personal service and better repeat-guest revenue.',
  },
]

const statusClasses: Record<LeadStatus, string> = {
  'Awaiting deposit': 'border-[#B7791F]/35 bg-[#B7791F]/12 text-[#FFD166]',
  Confirmed: 'border-[#2F855A]/35 bg-[#2F855A]/12 text-[#8BE3AD]',
  'New request': 'border-[#5D7D45]/35 bg-[#5D7D45]/12 text-[#BBD7A1]',
  'Quote sent': 'border-[#89623E]/35 bg-[#89623E]/12 text-[#E8C89A]',
  Overdue: 'border-[#B85C45]/35 bg-[#B85C45]/12 text-[#F6A38C]',
}

const bookingStatuses: BookingStatus[] = ['new', 'awaitingDeposit', 'depositSubmitted', 'confirmed']
const ACCESS_SESSION_KEY = 'beit-toureef-poc-access'
const USERNAME_HASH = '1499b57617911e2f32d6c7eac6a5e76fe272bb43c4405ab9a7cdea160012c836'
const PASSWORD_HASH = '9716e4ef85ee2fb9c9605a299c81c83fde128836be550173ff1b2334eb2c2b2f'

async function sha256Hex(value: string) {
  const encoded = new TextEncoder().encode(value)
  const digest = await crypto.subtle.digest('SHA-256', encoded)
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

function getStatusCopy(status: BookingStatus) {
  if (status === 'confirmed') return 'Confirmed'
  if (status === 'depositSubmitted') return 'Deposit submitted'
  if (status === 'awaitingDeposit') return 'Awaiting deposit'
  return 'New inquiry'
}

function getSelectedFlow(selectedFlow: FlowKey) {
  return flowOptions.find((item) => item.id === selectedFlow) ?? flowOptions[0]
}

function AccessGate({ onUnlock }: { onUnlock: () => void }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isChecking, setIsChecking] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsChecking(true)
    setError('')

    try {
      const [usernameHash, passwordHash] = await Promise.all([
        sha256Hex(username.trim().toLowerCase()),
        sha256Hex(password),
      ])

      if (usernameHash === USERNAME_HASH && passwordHash === PASSWORD_HASH) {
        sessionStorage.setItem(ACCESS_SESSION_KEY, '1')
        onUnlock()
        return
      }

      setError('Invalid demo credentials.')
    } catch {
      setError('Could not verify access in this browser.')
    } finally {
      setIsChecking(false)
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#11130F] px-4 pt-24 text-[#F7F1E8] sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-[520px] items-center">
          <m.div
            className="w-full rounded-lg border border-[#EEE1C6]/12 bg-[#1A1D17] p-5 shadow-2xl shadow-black/30 md:p-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-[#D7B56D] text-[#1E1A12]">
              <Lock size={22} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#E9C56F]">Private POC preview</p>
            <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-[#FFF8EA]">
              Beit Toureef demo access
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-[#CFC5B8]">
              This concept page is shared by Likwiid as a private demo. Enter the demo credentials to view the
              booking, deposit, WhatsApp, AI, and operations workflow.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <label className="block">
                <span className="text-sm font-medium text-[#F0E4D2]">Username</span>
                <input
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  autoComplete="username"
                  className="mt-2 h-12 w-full rounded-md border border-[#EEE1C6]/16 bg-[#10120F] px-3 text-base text-[#FFF8EA] outline-none transition focus:border-[#D7B56D]"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-[#F0E4D2]">Password</span>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  autoComplete="current-password"
                  className="mt-2 h-12 w-full rounded-md border border-[#EEE1C6]/16 bg-[#10120F] px-3 text-base text-[#FFF8EA] outline-none transition focus:border-[#D7B56D]"
                />
              </label>

              {error && (
                <div className="rounded-md border border-[#B85C45]/30 bg-[#B85C45]/10 px-3 py-2 text-sm text-[#F6A38C]">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isChecking}
                className="flex h-12 w-full items-center justify-center rounded-md bg-[#D7B56D] px-4 text-sm font-semibold text-[#1E1A12] transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isChecking ? 'Checking access...' : 'View private demo'}
              </button>
            </form>

            <p className="mt-4 text-xs leading-relaxed text-[#AFA698]">
              This preview is private and only available through the shared demo credentials.
            </p>
          </m.div>
        </div>
      </div>
    </PageTransition>
  )
}

export default function BeitToureefPoc() {
  const [hasAccess, setHasAccess] = useState(() => sessionStorage.getItem(ACCESS_SESSION_KEY) === '1')
  const [selectedFlow, setSelectedFlow] = useState<FlowKey>('event')
  const [guestCount, setGuestCount] = useState(24)
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([
    'Village breakfast basket',
    'Local producer gift box',
  ])
  const [status, setStatus] = useState<BookingStatus>('awaitingDeposit')
  const [selectedLeadIndex, setSelectedLeadIndex] = useState(0)
  const [selectedCapabilityIndex, setSelectedCapabilityIndex] = useState(0)

  const flow = getSelectedFlow(selectedFlow)
  const selectedLead = adminLeads[selectedLeadIndex] ?? adminLeads[0]
  const selectedCapability = nextCapabilities[selectedCapabilityIndex] ?? nextCapabilities[0]

  const addOnTotal = useMemo(
    () => addOns.filter((item) => selectedAddOns.includes(item.name)).reduce((sum, item) => sum + item.price, 0),
    [selectedAddOns],
  )

  const estimatedTotal = flow.basePrice + addOnTotal
  const depositAmount = selectedFlow === 'table' && guestCount < 8 ? 0 : Math.round(estimatedTotal * (selectedFlow === 'event' ? 0.35 : 0.3))
  const readinessScore = Math.min(96, 58 + selectedAddOns.length * 8 + (status === 'confirmed' ? 22 : status === 'depositSubmitted' ? 16 : 6))
  const quoteItems = [
    { label: flow.title, value: flow.basePrice },
    ...addOns.filter((item) => selectedAddOns.includes(item.name)).map((item) => ({ label: item.name, value: item.price })),
  ]

  const whatsappMessage = [
    'Hello Beit Toureef, I would like to confirm this request.',
    '',
    `Guest: ${flow.guest}`,
    `Request: ${flow.label}`,
    `Package: ${flow.title}`,
    `Preferred date: ${flow.date}`,
    `Guest count: ${guestCount}`,
    `Add-ons: ${selectedAddOns.length ? selectedAddOns.join(', ') : 'None'}`,
    `Estimated total: ${formatCurrency(estimatedTotal)}`,
    `Deposit: ${depositAmount > 0 ? formatCurrency(depositAmount) : 'Not required'}`,
    `Status: ${getStatusCopy(status)}`,
  ].join('\n')

  const aiReply = [
    `Hi ${selectedLead.name.split(' ')[0]}, thank you for reaching out to Beit Toureef.`,
    '',
    `We can help with the ${selectedLead.type.toLowerCase()} request on ${selectedLead.date}.`,
    `To secure the date, we can send a deposit link and then confirm the details by WhatsApp.`,
    '',
    'Could you please confirm the final guest count and any food preferences?',
  ].join('\n')

  useEffect(() => {
    document.title = 'Beit Toureef POC | Likwiid'

    const existingMeta = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
    const meta = existingMeta ?? document.createElement('meta')
    const previousContent = existingMeta?.content

    if (!existingMeta) {
      meta.name = 'robots'
      document.head.appendChild(meta)
    }

    meta.content = 'noindex,nofollow,noarchive'

    return () => {
      if (existingMeta && previousContent !== undefined) {
        existingMeta.content = previousContent
      } else if (!existingMeta) {
        meta.remove()
      }
    }
  }, [])

  const toggleAddOn = (name: string) => {
    setSelectedAddOns((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    )
  }

  if (!hasAccess) {
    return <AccessGate onUnlock={() => setHasAccess(true)} />
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#11130F] pt-20 text-[#F7F1E8]">
        <section className="border-b border-[#EEE1C6]/10 px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <m.p
                className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#D7B56D]/30 bg-[#D7B56D]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#E9C56F]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Sparkles size={14} />
                Prepared for Beit Toureef operations
              </m.p>
              <m.h1
                className="max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[#FFF8EA] md:text-6xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
              >
                Fewer loose messages. More confirmed experiences.
              </m.h1>
              <m.p
                className="mt-5 max-w-2xl text-base leading-relaxed text-[#CFC5B8] md:text-lg"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
              >
                A practical guest-to-admin layer for Beit Toureef: structured inquiries, deposit links,
                WhatsApp-ready confirmations, product preorders, and a calm dashboard for the requests Dana’s team
                handles every day.
              </m.p>
              <m.div
                className="mt-7 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
              >
                <Button href="#demo" size="md" className="rounded-lg bg-[#D7B56D] text-[#1E1A12] hover:opacity-100">
                  Walk through the demo <ArrowRight size={18} />
                </Button>
                <Button
                  href="https://wa.me/96181398752"
                  variant="secondary"
                  size="md"
                  className="rounded-lg border-[#EEE1C6]/20 text-[#FFF8EA] hover:border-[#D7B56D]"
                >
                  Discuss with Gabriel
                </Button>
              </m.div>
            </div>

            <m.div
              className="rounded-lg border border-[#EEE1C6]/12 bg-[#1A1D17] p-4 shadow-2xl shadow-black/30"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.18 }}
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#E9C56F]">Today’s control room</p>
                  <p className="text-sm text-[#B8AFA2]">What needs action before guests arrive.</p>
                </div>
                <ShieldCheck className="text-[#8BE3AD]" size={24} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ['Needs attention', '5'],
                  ['Deposits pending', '$1.1k'],
                  ['Arrival notes ready', '9/12'],
                  ['Preorders due', '3'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-md border border-[#EEE1C6]/10 bg-[#10120F] p-4">
                    <div className="text-2xl font-semibold text-[#FFF8EA]">{value}</div>
                    <div className="mt-1 text-xs text-[#AFA698]">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-md border border-[#B85C45]/25 bg-[#B85C45]/10 p-3 text-sm text-[#F0C0B5]">
                <span className="font-semibold">Priority:</span> Lea’s workshop deposit is overdue. Send a gentle
                reminder or release the date hold.
              </div>
            </m.div>
          </div>
        </section>

        <section className="border-b border-[#EEE1C6]/10 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1240px]">
            <div className="mb-5 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#E9C56F]">Grounded in their current website</p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-[#FFF8EA]">
                This does not replace what Beit Toureef already has. It connects it.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#CFC5B8]">
                Their public site already presents rooms, venues, tours, restaurant reservations, and Namlieh products.
                The opportunity is making those paths easier for guests to complete and easier for Dana’s team to track.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {currentSiteFindings.map((item) => (
                <div key={item.area} className="rounded-lg border border-[#EEE1C6]/12 bg-[#1A1D17] p-4">
                  <div className="text-sm font-semibold text-[#FFF8EA]">{item.area}</div>
                  <div className="mt-3 rounded-md border border-[#EEE1C6]/10 bg-[#10120F] p-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#B8AFA2]">Already there</div>
                    <p className="mt-1 text-sm leading-relaxed text-[#D9D0C4]">{item.current}</p>
                  </div>
                  <div className="mt-2 rounded-md border border-[#D7B56D]/20 bg-[#D7B56D]/10 p-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#E9C56F]">Improve next</div>
                    <p className="mt-1 text-sm leading-relaxed text-[#F0E4D2]">{item.opportunity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#EEE1C6]/10 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1240px]">
            <div className="mb-5 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#E9C56F]">Specific improvement plan</p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-[#FFF8EA]">
                  Practical upgrades, ordered by business value.
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-[#CFC5B8]">
                The POC is intentionally not a full rebuild. The first version should improve the existing website’s
                highest-friction paths, then expand only once the team sees fewer missed details and more confirmed bookings.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {improvementRoadmap.map((item) => (
                <div key={item.title} className="rounded-lg border border-[#EEE1C6]/12 bg-[#1A1D17] p-4">
                  <span className="inline-flex rounded-full border border-[#D7B56D]/20 bg-[#D7B56D]/10 px-2.5 py-1 text-xs font-semibold text-[#E9C56F]">
                    {item.phase}
                  </span>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold text-[#FFF8EA]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#CFC5B8]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1240px] gap-6 xl:grid-cols-[340px_1fr_360px]">
            <aside className="space-y-3">
              <div className="mb-4">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#FFF8EA]">
                  Guest intent
                </h2>
                <p className="mt-1 text-sm text-[#B8AFA2]">Every offer gets the right fields, deposit rule, and follow-up.</p>
              </div>
              {flowOptions.map((item) => {
                const ItemIcon = item.icon
                const isActive = item.id === selectedFlow
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedFlow(item.id)}
                    className={`w-full rounded-lg border p-4 text-left transition ${
                      isActive
                        ? 'border-[#D7B56D] bg-[#D7B56D]/12 shadow-lg shadow-black/20'
                        : 'border-[#EEE1C6]/10 bg-[#1A1D17] hover:border-[#EEE1C6]/25'
                    }`}
                  >
                    <span className="flex items-start gap-3">
                      <span className={`rounded-md p-2 ${isActive ? 'bg-[#D7B56D] text-[#1E1A12]' : 'bg-[#2A2F25] text-[#E9C56F]'}`}>
                        <ItemIcon size={18} />
                      </span>
                      <span>
                        <span className="block font-medium text-[#FFF8EA]">{item.label}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-[#B8AFA2]">{item.description}</span>
                        <span className="mt-3 inline-block rounded-full border border-[#EEE1C6]/10 px-2.5 py-1 text-xs text-[#E9C56F]">
                          {item.deposit}
                        </span>
                      </span>
                    </span>
                  </button>
                )
              })}

              <div className="rounded-lg border border-[#EEE1C6]/10 bg-[#1A1D17] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#FFF8EA]">
                  <Bot size={17} className="text-[#E9C56F]" />
                  AI-assisted triage
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#B8AFA2]">
                  The assistant does not replace hospitality. It drafts replies, spots missing details, and keeps staff
                  from typing the same questions repeatedly.
                </p>
              </div>
            </aside>

            <main className="space-y-5">
              <section className="rounded-lg border border-[#EEE1C6]/12 bg-[#F8F3EA] p-4 text-[#252017] md:p-5">
                <div className="rounded-md border border-[#DFD2BB] bg-white p-4 md:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#7A5B22]">Guest-facing flow</p>
                      <h2 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold">{flow.title}</h2>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6B6258]">{flow.insight}</p>
                    </div>
                    <div className="rounded-md border border-[#DFD2BB] bg-[#FAF7F1] px-3 py-2 text-sm font-medium">
                      {getStatusCopy(status)}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium text-[#4D4438]">Preferred date</span>
                      <div className="mt-2 flex items-center gap-2 rounded-md border border-[#D8CAB5] bg-[#FAF7F1] px-3 py-3 text-sm">
                        <CalendarDays size={18} className="text-[#7A5B22]" />
                        {flow.date}
                      </div>
                    </label>
                    <label className="block">
                      <span className="text-sm font-medium text-[#4D4438]">Guests</span>
                      <div className="mt-2 flex items-center gap-3 rounded-md border border-[#D8CAB5] bg-[#FAF7F1] px-3 py-2">
                        <Users size={18} className="text-[#7A5B22]" />
                        <input
                          aria-label="Guest count"
                          type="range"
                          min="2"
                          max="60"
                          value={guestCount}
                          onChange={(event) => setGuestCount(Number(event.target.value))}
                          className="min-w-0 flex-1 accent-[#7A5B22]"
                        />
                        <span className="w-8 text-right text-sm font-semibold">{guestCount}</span>
                      </div>
                    </label>
                  </div>

                  <div className="mt-5">
                    <p className="text-sm font-medium text-[#4D4438]">Captured before staff replies</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {flow.fields.map((field) => (
                        <span key={field} className="rounded-full border border-[#D8CAB5] bg-[#FAF7F1] px-3 py-1 text-xs text-[#5A5044]">
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-sm font-medium text-[#4D4438]">Revenue add-ons surfaced naturally</p>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      {addOns.map((item) => {
                        const checked = selectedAddOns.includes(item.name)
                        return (
                          <button
                            key={item.name}
                            type="button"
                            onClick={() => toggleAddOn(item.name)}
                            className={`flex min-h-[72px] items-center justify-between gap-3 rounded-md border px-3 py-2 text-left text-sm transition ${
                              checked
                                ? 'border-[#7A5B22] bg-[#F3E7D0]'
                                : 'border-[#D8CAB5] bg-[#FAF7F1] hover:border-[#AA8A4A]'
                            }`}
                          >
                            <span className="flex items-start gap-2">
                              <span className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-sm border ${checked ? 'border-[#7A5B22] bg-[#7A5B22] text-white' : 'border-[#BCAA91]'}`}>
                                {checked && <Check size={14} />}
                              </span>
                              <span>
                                <span className="block font-medium">{item.name}</span>
                                <span className="mt-1 block text-xs text-[#6B6258]">{item.note}</span>
                              </span>
                            </span>
                            <span className="font-semibold">{formatCurrency(item.price)}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-[1fr_230px]">
                    <div className="rounded-md border border-[#D8CAB5] bg-[#FAF7F1] p-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#4D4438]">
                        <MessageCircle size={18} className="text-[#228B66]" />
                        WhatsApp-ready confirmation
                      </div>
                      <pre className="mt-3 max-h-[240px] overflow-auto whitespace-pre-wrap rounded-md bg-[#262117] p-3 text-xs leading-relaxed text-[#FFF8EA]">
                        {whatsappMessage}
                      </pre>
                    </div>

                    <div className="rounded-md border border-[#D8CAB5] bg-[#252017] p-4 text-[#FFF8EA]">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <CreditCard size={18} className="text-[#E9C56F]" />
                        Deposit
                      </div>
                      <div className="mt-4 text-3xl font-semibold">{depositAmount > 0 ? formatCurrency(depositAmount) : '$0'}</div>
                      <div className="mt-1 text-sm text-[#CFC5B8]">Estimated total: {formatCurrency(estimatedTotal)}</div>
                      <div className="mt-4 flex flex-col gap-2">
                        {bookingStatuses.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setStatus(item)}
                            className={`rounded-md border px-3 py-2 text-sm transition ${
                              status === item
                                ? 'border-[#D7B56D] bg-[#D7B56D] text-[#1E1A12]'
                                : 'border-[#EEE1C6]/15 hover:border-[#D7B56D]'
                            }`}
                          >
                            {getStatusCopy(item)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="grid gap-5 lg:grid-cols-[1fr_0.95fr]">
                <div className="rounded-lg border border-[#EEE1C6]/12 bg-[#1A1D17] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#E9C56F]">Booking timeline</p>
                      <h2 className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold text-[#FFF8EA]">
                        Stays, tours, events, and preorders in one view
                      </h2>
                    </div>
                    <CalendarDays className="text-[#BBD7A1]" size={22} />
                  </div>
                  <div className="mt-4 space-y-2">
                    {timelineItems.map((item) => (
                      <div key={`${item.room}-${item.guest}`} className="rounded-md border border-[#EEE1C6]/10 bg-[#10120F] p-3">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <div className="text-sm font-semibold text-[#FFF8EA]">{item.room}</div>
                            <div className="text-xs text-[#AFA698]">{item.guest} · {item.range} · {item.source}</div>
                          </div>
                          <span className={`rounded-full border px-2 py-1 text-xs ${statusClasses[item.status]}`}>
                            {item.status}
                          </span>
                        </div>
                        <div className="mt-2 text-xs text-[#CFC5B8]">{item.note}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-[#EEE1C6]/12 bg-[#F8F3EA] p-4 text-[#252017]">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#4D4438]">
                    <ShieldCheck size={18} className="text-[#5D7D45]" />
                    Guest confirmation page
                  </div>
                  <div className="mt-4 rounded-md border border-[#D8CAB5] bg-white p-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#7A5B22]">Beit Toureef request</div>
                    <div className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold">{flow.title}</div>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                      <div className="rounded-md bg-[#FAF7F1] p-3">
                        <div className="text-xs text-[#6B6258]">Guest</div>
                        <div className="font-medium">{flow.guest}</div>
                      </div>
                      <div className="rounded-md bg-[#FAF7F1] p-3">
                        <div className="text-xs text-[#6B6258]">Date</div>
                        <div className="font-medium">{flow.date}</div>
                      </div>
                      <div className="rounded-md bg-[#FAF7F1] p-3">
                        <div className="text-xs text-[#6B6258]">Deposit due</div>
                        <div className="font-medium">{depositAmount > 0 ? formatCurrency(depositAmount) : 'Not required'}</div>
                      </div>
                      <div className="rounded-md bg-[#FAF7F1] p-3">
                        <div className="text-xs text-[#6B6258]">Readiness</div>
                        <div className="font-medium">{readinessScore}%</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#5D7D45] px-4 py-3 text-sm font-semibold text-white"
                    >
                      <CreditCard size={17} />
                      Send secure deposit link
                    </button>
                    <p className="mt-3 text-xs leading-relaxed text-[#6B6258]">
                      This avoids card details over chat and gives the guest one clean place to review the request,
                      balance, cancellation note, and official WhatsApp number.
                    </p>
                  </div>
                </div>
              </section>

              <section className="grid gap-5 lg:grid-cols-[0.95fr_1fr]">
                <div className="rounded-lg border border-[#EEE1C6]/12 bg-[#F8F3EA] p-4 text-[#252017]">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#7A5B22]">Smart quote builder</p>
                      <h2 className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold">
                        Quote, deposit, and validity window
                      </h2>
                    </div>
                    <CreditCard className="text-[#5D7D45]" size={22} />
                  </div>
                  <div className="mt-4 space-y-2">
                    {quoteItems.map((item) => (
                      <div key={item.label} className="flex items-center justify-between rounded-md border border-[#D8CAB5] bg-white px-3 py-2 text-sm">
                        <span>{item.label}</span>
                        <span className="font-semibold">{formatCurrency(item.value)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 rounded-md bg-[#252017] p-3 text-[#FFF8EA]">
                    <div className="flex items-center justify-between text-sm">
                      <span>Total quote</span>
                      <span className="font-semibold">{formatCurrency(estimatedTotal)}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span>Deposit to secure date</span>
                      <span className="font-semibold text-[#E9C56F]">{depositAmount > 0 ? formatCurrency(depositAmount) : 'Not required'}</span>
                    </div>
                    <div className="mt-2 text-xs text-[#CFC5B8]">Valid until Friday at 6:00 PM.</div>
                  </div>
                </div>

                <div className="rounded-lg border border-[#EEE1C6]/12 bg-[#1A1D17] p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#FFF8EA]">
                    <ListChecks size={18} className="text-[#E9C56F]" />
                    Operational prep checklist
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#B8AFA2]">
                    Once a request is confirmed, it becomes a simple work plan across front desk, kitchen, shop, and setup.
                  </p>
                  <div className="mt-4 space-y-2">
                    {prepChecklist.map((item) => (
                      <div key={item.task} className="flex items-start justify-between gap-3 rounded-md border border-[#EEE1C6]/10 bg-[#10120F] p-3">
                        <div>
                          <div className="text-sm font-medium text-[#FFF8EA]">{item.task}</div>
                          <div className="text-xs text-[#AFA698]">{item.owner}</div>
                        </div>
                        <span className="shrink-0 rounded-full border border-[#D7B56D]/20 bg-[#D7B56D]/10 px-2 py-1 text-xs text-[#E9C56F]">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="rounded-[28px] border border-[#EEE1C6]/12 bg-[#10120F] p-3 shadow-2xl shadow-black/30">
                  <div className="rounded-[22px] border border-[#EEE1C6]/10 bg-[#1A1D17] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#E9C56F]">Mobile staff view</p>
                        <h2 className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold text-[#FFF8EA]">
                          Today at a glance
                        </h2>
                      </div>
                      <Smartphone className="text-[#BBD7A1]" size={22} />
                    </div>
                    <div className="mt-4 space-y-2">
                      {staffToday.map((item) => (
                        <div key={`${item.time}-${item.title}`} className="rounded-md border border-[#EEE1C6]/10 bg-[#10120F] p-3">
                          <div className="flex items-start gap-3">
                            <span className="rounded-md bg-[#D7B56D] px-2 py-1 text-xs font-semibold text-[#1E1A12]">
                              {item.time}
                            </span>
                            <div>
                              <div className="text-sm font-semibold text-[#FFF8EA]">{item.title}</div>
                              <div className="mt-1 text-xs text-[#B8AFA2]">{item.note}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#228B66] px-3 py-2 text-sm font-semibold text-white"
                    >
                      <MessageCircle size={16} />
                      Open guest WhatsApp
                    </button>
                  </div>
                </div>

                <div className="rounded-lg border border-[#EEE1C6]/12 bg-[#1A1D17] p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#FFF8EA]">
                    <BarChart3 size={18} className="text-[#E9C56F]" />
                    Lightweight decision analytics
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#B8AFA2]">
                    No vanity charts. Just the few signals that help Dana decide what to follow up, sell, or prepare.
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                    {analyticsCards.map((item) => (
                      <div key={item.label} className="rounded-md border border-[#EEE1C6]/10 bg-[#10120F] p-3">
                        <div className="text-xs uppercase tracking-wider text-[#AFA698]">{item.label}</div>
                        <div className="mt-1 text-2xl font-semibold text-[#FFF8EA]">{item.value}</div>
                        <div className="mt-1 text-xs leading-relaxed text-[#CFC5B8]">{item.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </main>

            <aside className="space-y-5">
              <section className="rounded-lg border border-[#EEE1C6]/12 bg-[#1A1D17] p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#E9C56F]">Operations view</p>
                    <h2 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold text-[#FFF8EA]">
                      Dana’s action queue
                    </h2>
                  </div>
                  <PackageCheck className="text-[#8BE3AD]" size={26} />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-md border border-[#EEE1C6]/10 bg-[#10120F] p-3">
                    <div className="text-xl font-semibold text-[#FFF8EA]">12</div>
                    <div className="text-xs text-[#AFA698]">Open requests</div>
                  </div>
                  <div className="rounded-md border border-[#EEE1C6]/10 bg-[#10120F] p-3">
                    <div className="text-xl font-semibold text-[#FFF8EA]">$4.8k</div>
                    <div className="text-xs text-[#AFA698]">Potential value</div>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {adminLeads.map((lead, index) => (
                    <button
                      key={`${lead.name}-${lead.date}`}
                      type="button"
                      onClick={() => setSelectedLeadIndex(index)}
                      className={`w-full rounded-md border p-3 text-left transition ${
                        selectedLeadIndex === index
                          ? 'border-[#D7B56D] bg-[#D7B56D]/10'
                          : 'border-[#EEE1C6]/10 bg-[#10120F] hover:border-[#EEE1C6]/25'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold text-[#FFF8EA]">{lead.name}</div>
                          <div className="text-xs text-[#AFA698]">{lead.type} · {lead.date}</div>
                        </div>
                        <div className="text-sm font-semibold text-[#E9C56F]">{lead.value}</div>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <span className={`inline-flex rounded-full border px-2 py-1 text-xs ${statusClasses[lead.status]}`}>
                          {lead.status}
                        </span>
                        <span className="text-xs text-[#CFC5B8]">{lead.action}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </section>

              <section className="rounded-lg border border-[#EEE1C6]/12 bg-[#1A1D17] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#FFF8EA]">
                  <Bot size={18} className="text-[#E9C56F]" />
                  Staff reply draft
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#B8AFA2]">
                  AI can draft a careful answer from saved packages, policies, and availability. The team still reviews
                  before sending.
                </p>
                <pre className="mt-3 whitespace-pre-wrap rounded-md border border-[#EEE1C6]/10 bg-[#10120F] p-3 text-xs leading-relaxed text-[#EADDCB]">
                  {aiReply}
                </pre>
                <button
                  type="button"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-[#D7B56D]/30 bg-[#D7B56D]/10 px-3 py-2 text-sm font-semibold text-[#F2D891]"
                >
                  <Send size={16} />
                  Copy WhatsApp reply
                </button>
              </section>

              <section className="rounded-lg border border-[#EEE1C6]/12 bg-[#1A1D17] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#FFF8EA]">
                  <CircleAlert size={18} className="text-[#F6A38C]" />
                  Why this matters
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#CFC5B8]">
                  <li className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-[#8BE3AD]" /> Fewer repeated questions on WhatsApp.</li>
                  <li className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-[#8BE3AD]" /> Deposits secure high-value dates earlier.</li>
                  <li className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-[#8BE3AD]" /> Add-ons make tours, stays, and products work together.</li>
                  <li className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-[#8BE3AD]" /> Dana sees what needs attention before it becomes a problem.</li>
                </ul>
              </section>
            </aside>
          </div>
        </section>

        <section className="border-t border-[#EEE1C6]/10 px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1240px]">
            <div className="mb-5 grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#E9C56F]">What can come next</p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-[#FFF8EA]">
                  Add capability only where it removes work.
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-[#CFC5B8]">
                These are not all first-phase features. They show the path from a booking/deposit POC into a practical
                operating system with mobile workflows, AI support, and integrations around the tools Beit Toureef already uses.
              </p>
            </div>

            <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
              <div className="grid gap-3 md:grid-cols-2">
                {nextCapabilities.map((item, index) => {
                  const Icon = item.icon
                  const isActive = selectedCapabilityIndex === index
                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setSelectedCapabilityIndex(index)}
                      className={`rounded-lg border p-4 text-left transition ${
                        isActive
                          ? 'border-[#D7B56D] bg-[#D7B56D]/12 shadow-xl shadow-black/20'
                          : 'border-[#EEE1C6]/12 bg-[#1A1D17] hover:border-[#EEE1C6]/25'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${
                            isActive ? 'bg-[#D7B56D] text-[#1E1A12]' : 'bg-[#D7B56D]/12 text-[#E9C56F]'
                          }`}
                        >
                          <Icon size={19} />
                        </span>
                        <div>
                          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[#FFF8EA]">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#CFC5B8]">{item.detail}</p>
                          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#EEE1C6]/10 px-2.5 py-1 text-xs font-medium text-[#E9C56F]">
                            View mini demo <ArrowRight size={13} />
                          </span>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="rounded-lg border border-[#EEE1C6]/12 bg-[#F8F3EA] p-4 text-[#252017] md:p-5">
                <div className="rounded-md border border-[#DFD2BB] bg-white p-4 md:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#7A5B22]">
                        {selectedCapability.proofLabel}
                      </p>
                      <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold">
                        {selectedCapability.proofTitle}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6B6258]">
                        {selectedCapability.proofBody}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-md bg-[#252017] px-3 py-2 text-sm font-semibold text-[#FFF8EA]">
                      {(() => {
                        const Icon = selectedCapability.icon
                        return <Icon size={17} className="text-[#E9C56F]" />
                      })()}
                      Live concept
                    </span>
                  </div>

                  <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.85fr]">
                    <div className="rounded-md border border-[#D8CAB5] bg-[#FAF7F1] p-3">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <div className="text-sm font-semibold text-[#4D4438]">Sample workflow</div>
                        <span className="rounded-full bg-[#E8DDC9] px-2 py-1 text-xs text-[#6B6258]">
                          Dummy data
                        </span>
                      </div>
                      <div className="space-y-2">
                        {selectedCapability.sampleItems.map((item, index) => (
                          <div key={item} className="flex gap-3 rounded-md border border-[#D8CAB5] bg-white p-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7A5B22] text-xs font-semibold text-white">
                              {index + 1}
                            </span>
                            <span className="text-sm leading-relaxed text-[#4D4438]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-md border border-[#252017]/10 bg-[#252017] p-3 text-[#FFF8EA]">
                      <div className="text-sm font-semibold">Dana’s team can</div>
                      <div className="mt-3 space-y-2">
                        {selectedCapability.operatorView.map((item) => (
                          <div key={item} className="flex gap-2 rounded-md border border-[#EEE1C6]/10 bg-[#10120F] p-3">
                            <Check size={16} className="mt-0.5 shrink-0 text-[#8BE3AD]" />
                            <span className="text-sm leading-relaxed text-[#EADDCB]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-md border border-[#5D7D45]/25 bg-[#EEF5E8] p-4">
                    <div className="flex items-start gap-3">
                      <Sparkles size={18} className="mt-0.5 shrink-0 text-[#5D7D45]" />
                      <div>
                        <div className="text-sm font-semibold text-[#3D562F]">Business outcome</div>
                        <p className="mt-1 text-sm leading-relaxed text-[#4D4438]">{selectedCapability.outcome}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    {['Request captured', 'Staff reviewed', 'Guest confirmed'].map((step) => (
                      <div key={step} className="rounded-md border border-[#D8CAB5] bg-[#FAF7F1] px-3 py-2 text-sm">
                        <div className="font-semibold text-[#4D4438]">{step}</div>
                        <div className="mt-1 h-1.5 rounded-full bg-[#E8DDC9]">
                          <div className="h-full rounded-full bg-[#7A5B22]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#EEE1C6]/10 px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1240px] rounded-lg border border-[#EEE1C6]/12 bg-[#1A1D17] p-5 md:p-6">
            <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#E9C56F]">Suggested next step</p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-[#FFF8EA]">
                  Start with one flow, prove value, then expand.
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#CFC5B8]">
                  The best first implementation would be private events or rural tours: structured form, deposit link,
                  WhatsApp confirmation, and a small dashboard. Once that works, the same system can support restaurant
                  reservations, Namlieh preorders, AI-assisted replies, and a mobile staff view.
                </p>
              </div>
              <Button
                href="https://wa.me/96181398752"
                size="md"
                className="rounded-lg bg-[#D7B56D] text-[#1E1A12] hover:opacity-100"
              >
                Schedule a walkthrough <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
