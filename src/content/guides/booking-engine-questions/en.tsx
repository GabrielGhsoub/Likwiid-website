import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, Ext, H2, H3, Li, P, Summary, Table, Ul } from '../../../components/guides/prose'

const GDPR_ROLES = 'https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/application-gdpr_en'

export default function Guide() {
  return (
    <GuideLayout
      slug="booking-engine-questions"
      lang="en"
      sources={[{ label: 'European Commission: Application of the GDPR, roles of controller and processor (accessed October 2026)', href: GDPR_ROLES }]}
    >
      <Summary>
        <Li>Ask what the fee is charged on, not only the rate: room only, or also extras, taxes, tourist tax and cancelled bookings.</Li>
        <Li>Find out whose payment account the money lands in, when it reaches you and who deals with refunds and chargebacks.</Li>
        <Li>The guest list should be yours: no marketing by the vendor, and an export you can run yourself at any time.</Li>
        <Li>Read the exit terms before the feature list: contract length, notice, auto-renewal, your data and your domain.</Li>
        <Li>Calendar sync by iCal refreshes on a schedule. It is useful, but it is not instant.</Li>
      </Summary>

      <P>
        Booking engine demos all look good. The differences that matter show up later: on the first invoice, the first
        refund, the first double booking, or the day you want to leave. These are the questions to ask before you sign,
        with what a good answer sounds like.
      </P>

      <H2>Fees: what you pay, and what it is charged on</H2>
      <P>
        A low rate can cost more than a higher one if it is charged on more of each booking. Get the fee schedule in
        writing and ask:
      </P>
      <Ul>
        <Li>Is there a commission (a percentage), a fixed fee per booking, or both?</Li>
        <Li>What is it charged on: the room or activity price only, or also extras such as breakfast and transfers, cleaning fees, VAT and the tourist tax you collect for the town?</Li>
        <Li>Is it charged on bookings that are later cancelled, or on a deposit you keep after a late cancellation?</Li>
        <Li>Is there a setup fee, a monthly fee, or a plan that moves you to a higher price tier as your volume grows?</Li>
        <Li>Are card processing fees included, or charged separately by the payment provider?</Li>
      </Ul>
      <P>
        Here is why the base matters. Take a booking worth 100 in total: 80 for the room, 15 for extras and 5 of tourist
        tax. With an illustrative commission of 10 percent:
      </P>
      <Table
        caption="Same rate, different base: fee per 100 of booking value (illustrative 10 percent commission)"
        head={['Commission charged on', 'Amount it applies to', 'Fee']}
        rows={[
          ['Room only', '80', '8'],
          ['Room and extras', '95', '9.5'],
          ['Everything, including tourist tax', '100', '10'],
        ]}
      />
      <P>
        The tourist tax is not your income. You collect it and pass it on, so a fee on it is a fee on money that was never
        yours. A good answer sounds like: <B>"The fee is this percentage of the room price only, never on taxes, and
        nothing on cancelled bookings."</B>
      </P>

      <H2>Payments: whose account, and who holds the money</H2>
      <P>
        Some booking engines require their own payment processor; others let you connect an account in your name. It
        matters in three places.
      </P>
      <Ul>
        <Li><B>Lock-in.</B> With the vendor's processor you take their rates, and leaving means setting up payments again.</Li>
        <Li><B>Who holds the money.</B> Does the guest's payment land in your account, or does the vendor collect it and pay you out later? Ask when payouts happen and what happens to money in transit if the vendor has a problem.</Li>
        <Li><B>Refunds and chargebacks.</B> Who issues a refund, from whose balance? When a guest disputes a charge with their bank, who answers, with what evidence, and who pays any dispute fee?</Li>
      </Ul>
      <P>
        A good answer: <B>"Payments go straight into your own account, payouts follow your provider's schedule, you refund
        from your own dashboard, and the booking record and accepted terms are there if a guest disputes a charge."</B>
      </P>

      <H2>Guest data: whose guests are they?</H2>
      <P>
        In EU data protection terms, the business the guest books with usually decides why and how their data is used,
        which makes it the <B>controller</B>. A booking engine that stores reservations on your behalf is a{' '}
        <B>processor</B>: according to the{' '}
        <Ext href={GDPR_ROLES}>European Commission</Ext>, it processes personal data only on behalf of the controller,
        under a contract, and only on the controller's documented instructions. The Commission also gives an example of a
        subcontractor that used client details for its own marketing and so became a controller itself.
      </P>
      <P>So ask:</P>
      <Ul>
        <Li>Is there a data processing agreement, and can I read it before signing?</Li>
        <Li>Can you email my guests, show them other properties or use their details for your own purposes?</Li>
      </Ul>
      <P>
        A good answer is a short, readable agreement and a plain no to marketing to your guests. This is general
        information, not legal advice.
      </P>

      <H2>Calendar and channel sync</H2>
      <P>
        If you also sell on large platforms, sync decides whether you get double bookings. <B>iCal</B> is a calendar
        feed: one side publishes its busy dates, the other reads them on its own schedule. Feeds can run both ways, but
        each carries only blocked dates (no prices, no guest details) and updates only when it is next read, so a booking
        made now may block the date elsewhere only after the next refresh. <B>A channel manager connection</B> is a two-way link designed to exchange availability, rates and
        reservations between systems.
      </P>
      <Ul>
        <Li>Which method does it use for each platform you sell on?</Li>
        <Li>How often are imported calendars refreshed, and can I see when the last sync happened?</Li>
        <Li>If a double booking happens anyway, who is alerted, and what is the procedure?</Li>
      </Ul>
      <P>
        A good answer is honest about timing. Be wary of anyone who calls an iCal feed "real time".
      </P>

      <H2>Leaving: contract, data and domain</H2>
      <P>You may never leave, but how easy it is to leave tells you a lot about the deal.</P>
      <H3>Contract</H3>
      <P>
        Ask about the contract length, notice period, automatic renewal, exit fees, and whether prices can change during
        the term. A good answer: monthly or yearly terms, short notice, no exit fee, and
        price changes announced in advance.
      </P>
      <H3>Data export</H3>
      <P>
        Can you export reservations and guests yourself, at any time, without a support ticket? In what format? A
        spreadsheet file (CSV) is the useful minimum. Check that the export includes future bookings and
        deposits already paid. Then ask what happens to your data after you leave: how long it is kept, and whether it is
        deleted on request. The Commission notes that a processor contract must say what happens to the personal data once
        the contract ends.
      </P>
      <H3>Domain and website</H3>
      <P>
        Does the booking page live on your own domain or on the vendor's? Who registered your domain, and in whose name?
        If the vendor built your site, do you keep it when you go? Pages and links on your domain build your search
        presence; on someone else's they build theirs, and break when you leave. A good answer: the domain is in your
        name and the booking page sits on your site.
      </P>

      <H2>What guests see, and who answers you</H2>
      <Ul>
        <Li><B>Languages.</B> Is every step in the guest's language, including the terms and the confirmation email?</Li>
        <Li><B>Mobile.</B> Make a test booking on your own phone, start to finish, before you sign.</Li>
        <Li><B>Accessibility.</B> Can the booking be completed with a keyboard alone and with a screen reader? Ask whether they test against the WCAG guidelines.</Li>
        <Li><B>Support.</B> Who answers: a person, a bot, a reseller? In which language, on which days, and how fast in high season?</Li>
      </Ul>

      <H2>The checklist</H2>
      <P>Print this and take it to the sales call.</P>
      <Ul>
        <Li>Commission or fixed fee, and on what: extras, taxes, tourist tax, cancellations?</Li>
        <Li>Setup, monthly and volume-based fees; card fees included or not</Li>
        <Li>My own payment account or the vendor's; payout timing</Li>
        <Li>Who handles refunds and chargebacks</Li>
        <Li>Data processing agreement; no marketing to my guests</Li>
        <Li>Self-service export, its format, and my data after I leave</Li>
        <Li>Contract length, notice, auto-renewal, exit costs</Li>
        <Li>Sync method, refresh interval, double-booking procedure</Li>
        <Li>Booking page on my domain; domain and site in my name</Li>
        <Li>Languages, mobile test, accessibility, support</Li>
      </Ul>

      <H2>How Likwiid Direct answers these</H2>
      <P>
        Here are our own answers for <A to="/direct/">Likwiid Direct</A>. It is commission-free. It embeds in your
        existing website, on your own domain, or we build the site around it. Card deposits go into your own payment account, and your guest list stays yours. You can search and export your
        reservations from the owner panel. You choose request mode, where nothing is charged and you confirm by hand, or
        instant booking with a card deposit.
      </P>
      <P>
        Calendar sync uses iCal, so it is not instant: feeds refresh on a schedule and the calendar shows when it last
        synced. Direct is not a channel manager, and it is new: our public demos use fictional places. If you are still
        weighing direct bookings against platform fees, our guide on{' '}
        <A to="/guides/booking-com-commission-costs/">what platform commission really costs</A> runs the numbers. And if
        you want to put these questions to us, <A to="/contact/">get in touch</A>.
      </P>
    </GuideLayout>
  )
}
