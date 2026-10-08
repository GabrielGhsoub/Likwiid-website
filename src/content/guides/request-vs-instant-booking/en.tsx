import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, Ext, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

const RESPOND_URL = 'https://www.airbnb.com/help/article/28'

export default function Guide() {
  return (
    <GuideLayout
      slug="request-vs-instant-booking"
      lang="en"
      sources={[
        {
          label: 'Airbnb Help Centre: Respond to a request to book your home (accessed October 2026)',
          href: RESPOND_URL,
        },
      ]}
    >
      <Summary>
        <Li>Request to book lets you check every booking before it is confirmed. Instant booking confirms on the spot.</Li>
        <Li>Instant booking asks less of the guest. Request to book asks more of you: you have to answer quickly, every time.</Li>
        <Li>A few rooms and a personal welcome often suit requests. Fixed slots with a set capacity usually suit instant booking.</Li>
        <Li>You do not have to choose once and for all: many owners mix the two by date, lead time or type of booking.</Li>
      </Summary>

      <H2>What each mode means, for the guest and for you</H2>
      <P>
        With <B>request to book</B>, the guest chooses dates or a time, the number of people and any extras, then sends a
        request. Nothing is confirmed yet. You read it, then accept, suggest another time or decline. The guest waits for
        your answer before making other plans.
      </P>
      <P>
        With <B>instant booking</B>, the guest sees what is free, picks it and the booking is confirmed straight away,
        usually with a payment or a deposit at the same moment. You find out after the fact. Your job moves from deciding
        each booking to setting the rules in advance: which dates are open, how much notice you need, what the terms are.
      </P>
      <P>
        Neither is better in general. They place the effort in different places. Request to book puts the work on you,
        booking by booking. Instant booking puts it into your calendar and your rules, once.
      </P>

      <H2>The trade-offs</H2>
      <P>
        Most guests today are used to booking a hotel room or a class in a few taps. A form that ends with "we will get
        back to you" is a step back from that, and some guests will keep looking elsewhere while they wait. On the other
        hand, a request gives you control that instant booking cannot: you see who is coming before you commit.
      </P>
      <Table
        caption="How the two modes compare"
        head={['', 'Request to book', 'Instant booking']}
        rows={[
          ['For the guest', 'Waits for an answer; can still shop around', 'Certainty at once'],
          ['Control over who books', 'Full: you decide each one', 'Through rules set in advance'],
          ['Calendar accuracy', 'Can be checked by hand before confirming', 'Must be right at all times'],
          ['Your obligation', 'Answer every request quickly', 'Honour every booking the calendar allows'],
          ['Payment timing', 'After you confirm', 'At the moment of booking'],
        ]}
      />
      <P>
        Calendar accuracy is the point owners most often underestimate. If you also sell on other platforms and your
        calendars are linked by feeds that refresh every so often rather than instantly, instant booking can let two
        guests take the same night in the gap between refreshes. With requests, you catch that before saying yes.
      </P>
      <P>
        Payment timing matters too. With instant booking the guest commits money when they book, which filters out casual
        enquiries. With requests, nothing is paid until you confirm, so you need a clear next step for payment, or a
        confirmed guest can still drift away.
      </P>

      <H2>When request to book fits</H2>
      <P>
        Picture a guesthouse with four rooms, where the owner greets every guest personally and can only do check-in
        between certain hours. Some rooms share a bathroom, children under a certain age are not suited to the house, and
        the owner prefers to talk to anyone booking a week or more. Requests make sense here: each booking is a real
        conversation, and a wrong booking costs more than a slower one.
      </P>
      <Ul>
        <Li>Few units, so a single mistaken booking has a large effect.</Li>
        <Li>Arrival needs coordinating: key handover, late arrival, ferry or mountain road.</Li>
        <Li>Group sizes, pets, events or long stays that need a look before you agree.</Li>
        <Li>A calendar shared with other channels that you cannot yet keep perfectly in step.</Li>
        <Li>Custom offers: private tours, tailored menus, multi-day packages.</Li>
      </Ul>

      <H2>When instant booking fits</H2>
      <P>
        Now picture a padel club with four courts and one-hour slots, or a yoga studio with twelve mats per class. Each
        slot is the same product, the capacity is fixed, and nobody needs to be vetted to play a match or join a class.
        Asking players to wait for a reply to book a court at 7 in the evening only adds friction, and the slot may go
        unsold while the request sits in an inbox.
      </P>
      <Ul>
        <Li>Standard products: the same room type, the same class, the same slot length.</Li>
        <Li>A fixed capacity that the system can count for you.</Li>
        <Li>Short lead times: guests booking for tonight or tomorrow morning.</Li>
        <Li>A calendar that lives in one place, so availability shown is availability real.</Li>
        <Li>Clear terms that you are happy to apply without discussing each case.</Li>
      </Ul>

      <H2>Hybrid approaches</H2>
      <P>
        Many businesses end up somewhere in between. A few common patterns:
      </P>
      <Ul>
        <Li>
          <B>Instant for some, request for others.</B> Standard rooms book instantly, the family suite or the whole house
          goes through a request. Weekday classes are instant, private sessions are on request.
        </Li>
        <Li>
          <B>By lead time or season.</B> Bookings far enough ahead are instant, last-minute ones go through a request
          because you need to know you can be there. Or the reverse in high season, when you want every gap filled fast.
        </Li>
        <Li>
          <B>Request with a response promise.</B> Keep requests, but tell the guest on the page when they will hear back,
          for example within a few hours during the day. A clear promise takes most of the sting out of waiting.
        </Li>
        <Li>
          <B>Instant with a deposit.</B> Confirm at once, but take a share of the total by card so the booking carries a
          commitment. Our guide on <A to="/guides/direct-booking-deposits/">taking a deposit on direct bookings</A> covers
          how to size it and word the terms.
        </Li>
        <Li>
          <B>Waitlist when full.</B> For classes and courts, a full slot does not have to end the conversation. A waitlist
          collects people who would take a place if someone drops out.
        </Li>
      </Ul>

      <H2>Answering requests: speed and the polite no</H2>
      <P>
        If you choose requests, the speed of your answer is part of what you sell. A guest who hears back within the hour
        usually feels looked after; one who hears back the next day may already have booked elsewhere. As a reference
        point, one of the large holiday-rental platforms gives hosts{' '}
        <Ext href={RESPOND_URL}>24 hours to accept or decline a request</Ext>, after which it expires, as of October 2026.
        On your own website nobody enforces a deadline, so set one for yourself and say it on the page.
      </P>
      <P>
        Declining is part of the job. Say no quickly, say why in one line when you can, and offer an alternative if you
        have one: other dates, another room, a sister business nearby. A clear no today is kinder than a vague maybe
        tomorrow.
      </P>
      <Note title="Example wording for a decline">
        <p>
          Thank you for your request for 12 to 15 May. Unfortunately we cannot host a group of six on those dates, as our
          largest room sleeps four. We do have two rooms free from 19 May if your dates are flexible. Either way, we hope to
          welcome you another time.
        </p>
      </Note>
      <P>
        Keep a few replies like this ready to adapt: accepting, suggesting another time, declining. It turns a ten-minute
        task into a two-minute one, which makes a fast answer realistic on a busy day.
      </P>

      <H2>How this works in Likwiid Direct</H2>
      <P>
        <A to="/direct/">Likwiid Direct</A> supports both modes, and you switch between them from the owner panel. In
        request mode, the guest picks dates, party size and extras, sees an estimated total and sends a request; nothing is
        booked and no payment is taken until you confirm, suggest another time or decline from the panel. In instant
        booking, the guest pays a card deposit, a percentage of the total, into your own payment account, and sees the
        deposit and the balance due on arrival before paying.
      </P>
      <P>
        For activities, time slots have a capacity, guests see how many places are left, and a waitlist opens when a slot
        is full. Rules such as minimum stay and the notice you need apply in either mode, and your cancellation and payment
        terms sit at the last step: nobody can book or send a request without ticking that they have read them.
      </P>
    </GuideLayout>
  )
}
