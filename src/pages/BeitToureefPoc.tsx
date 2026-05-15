import { useEffect, useMemo, useState } from 'react'
import { m } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  CalendarDays,
  Check,
  CircleAlert,
  ClipboardList,
  CreditCard,
  Gift,
  MessageCircle,
  PackageCheck,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
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
    current: 'Book Your Stay already sends guests to HotelRunner.',
    opportunity: 'Keep HotelRunner, then add pre-arrival add-ons, guest notes, and arrival confidence pages.',
  },
  {
    area: 'Tours',
    current: 'Out & About tour cards list packages, prices, add-ons, and WhatsApp numbers.',
    opportunity: 'Turn each tour into a structured request with date, guests, transport, language, deposit, and confirmation.',
  },
  {
    area: 'Venues',
    current: 'Sofra w Tannour, Meeting Room, Jnayneh, exhibitions, events, and photoshoots are presented.',
    opportunity: 'Qualify event leads before the first reply: date, guest count, budget, setup, food, and date-hold deposit.',
  },
  {
    area: 'Namlieh',
    current: 'The shop shows local product categories and add-to-cart actions.',
    opportunity: 'Bundle products into preorders, guest arrival baskets, event gifts, and pickup/delivery workflows.',
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

export default function BeitToureefPoc() {
  const [selectedFlow, setSelectedFlow] = useState<FlowKey>('event')
  const [guestCount, setGuestCount] = useState(24)
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([
    'Village breakfast basket',
    'Local producer gift box',
  ])
  const [status, setStatus] = useState<BookingStatus>('awaitingDeposit')
  const [selectedLeadIndex, setSelectedLeadIndex] = useState(0)

  const flow = getSelectedFlow(selectedFlow)
  const selectedLead = adminLeads[selectedLeadIndex] ?? adminLeads[0]

  const addOnTotal = useMemo(
    () => addOns.filter((item) => selectedAddOns.includes(item.name)).reduce((sum, item) => sum + item.price, 0),
    [selectedAddOns],
  )

  const estimatedTotal = flow.basePrice + addOnTotal
  const depositAmount = selectedFlow === 'table' && guestCount < 8 ? 0 : Math.round(estimatedTotal * (selectedFlow === 'event' ? 0.35 : 0.3))
  const readinessScore = Math.min(96, 58 + selectedAddOns.length * 8 + (status === 'confirmed' ? 22 : status === 'depositSubmitted' ? 16 : 6))

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
  }, [])

  const toggleAddOn = (name: string) => {
    setSelectedAddOns((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    )
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
