import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

const sources = [
  {
    label: 'Booking.com for Partners: Understanding your commission (accessed October 2026)',
    href: 'https://partner.booking.com/en-gb/help/payments-payouts-invoices/invoices/understanding-your-commission',
  },
  {
    label: 'Booking.com for Partners: Joining Payments by Booking.com (accessed October 2026)',
    href: 'https://partner.booking.com/en-gb/help/payments-payouts-invoices/payments-bookingcom/joining-payments-bookingcom',
  },
  {
    label: 'Booking.com for Partners: Understanding the Preferred Partner Programme (accessed October 2026)',
    href: 'https://partner.booking.com/en-gb/help/performance/tools-programmes/understanding-preferred-partner-programme',
  },
  {
    label: 'Booking.com for Partners: Understanding the Genius marketing programme (accessed October 2026)',
    href: 'https://partner.booking.com/en-gb/help/performance/tools-programmes/understanding-genius-marketing-programme',
  },
  {
    label: 'Booking.com Developers: Get property commission, contracted commission and Visibility Booster override (accessed October 2026)',
    href: 'https://developers.booking.com/connectivity/docs/b_xml-getcommissionoverride',
  },
  {
    label: 'Booking.com for Partners: How parity works (accessed October 2026)',
    href: 'https://partner.booking.com/en-gb/legal/how-parity-works',
  },
  {
    label: 'European Commission: Commission designates Booking as a gatekeeper, IP/24/2561, 13 May 2024',
    href: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_24_2561',
  },
  {
    label: 'European Commission, DMA: Booking must comply with all relevant obligations under the Digital Markets Act, 14 November 2024',
    href: 'https://digital-markets-act.ec.europa.eu/booking-must-comply-all-relevant-obligations-under-digital-markets-act-2024-11-14_en',
  },
  {
    label: 'European Commission, DMA: Factsheet on how the DMA ensures businesses using Booking.com are free to set their prices, 28 September 2026',
    href: 'https://digital-markets-act.ec.europa.eu/factsheet-how-dma-ensures-businesses-using-bookingcom-are-free-set-their-prices-and-bookingcom-2026-09-28_en',
  },
  {
    label: 'Your Europe (European Union): Cross-border VAT, buying services from another EU country (accessed October 2026)',
    href: 'https://europa.eu/youreurope/business/finance-and-tax/vat/cross-border-vat/index_en.htm',
  },
  {
    label: 'GLEIF: legal entity record of Booking.com B.V., Amsterdam, Netherlands (accessed October 2026)',
    href: 'https://search.gleif.org/#/record/7245009ZP4X4SZC79G88',
  },
  {
    label: 'European Commission, Taxation and Customs Union: DAC7 (accessed October 2026)',
    href: 'https://taxation-customs.ec.europa.eu/taxation/tax-transparency-cooperation/administrative-co-operation-and-mutual-assistance/dac7_en',
  },
]

export default function Guide() {
  return (
    <GuideLayout slug="booking-com-commission-costs" lang="en" sources={sources}>
      <Summary>
        <Li>Booking.com charges a commission percentage set in your contract. It depends on your country, property type and agreement, so the only reliable figure is the one in your own extranet.</Li>
        <Li>It applies to the total the guest pays, including cleaning and service fees and, in most countries, VAT, but not local taxes such as city tax.</Li>
        <Li>Preferred Partner and Visibility Booster add commission on top. Genius adds no commission, but you fund the discount.</Li>
        <Li>In the EU, Booking.com may no longer stop you from offering better prices on your own website.</Li>
        <Li>The healthiest setup for most small stays is a mix: Booking.com for reach, direct bookings for repeat guests.</Li>
      </Summary>

      <H2>What the commission is, and what it pays for</H2>
      <P>
        Booking.com does not charge a listing fee. Instead it takes a set percentage of each reservation it brings you. Its
        partner help pages say the exact percentage depends on your country, your property type and the accommodation
        agreement you signed when you joined. You can find yours in that agreement, or in the Finance tab of the extranet under
        reservation statements.
      </P>
      <P>
        There is no official headline rate, so the examples below use 15 percent purely as a round number. Replace it with
        your own. Everything else here reflects Booking.com's partner pages and EU sources as of October 2026; terms change,
        so check your extranet.
      </P>
      <P>
        It is fair to say what the commission buys. Booking.com says it markets properties on search engines in 45 languages
        and through more than 17,500 affiliate partners, on top of its own large base of travellers. For a small guesthouse
        with no marketing budget, that reach is real, and you only pay it on bookings that actually happen.
      </P>

      <H2>What the percentage is charged on</H2>
      <P>
        According to Booking.com, commission is calculated on the total booking amount: the room rate plus any additional fees
        you charge, such as cleaning or service fees. It is applied once the guest checks out. Local taxes such as city tax
        are not commissionable, but in most countries commission is charged on VAT, depending on local tax law. Your General
        Delivery Terms say which applies to you.
      </P>
      <Ul>
        <Li><B>You pay commission on</B> completed stays, non-refundable and partially refundable bookings (even if the guest did not come), cancellation and no-show fees you charge, and overbookings.</Li>
        <Li><B>You do not pay commission</B> when you waive a cancellation or no-show fee, or when you mark a guest's card as invalid because you could not charge it.</Li>
        <Li><B>Timing matters.</B> Changes such as no-shows and cancellations must be marked in the extranet within 48 hours of check-out. Otherwise full commission is charged on the original booking.</Li>
        <Li><B>The rate is locked</B> at the moment the guest books, so older bookings keep the rate that applied when they were made.</Li>
      </Ul>

      <H2>When you pay: invoices or deductions</H2>
      <P>
        If you collect payment from guests yourself, Booking.com sends one invoice a month covering every reservation where
        the guest checked out the previous month. Invoices are due within 14 days, and unpaid invoices can lead to your
        property being temporarily closed on the platform.
      </P>
      <P>
        If you use <B>Payments by Booking.com</B>, the platform collects from guests and pays you out. When it handles all
        your guest payments, commission and payment fees are deducted from each payout. Joining has no setup fee, but if
        you are paid by bank transfer a payment service fee applies, as a percentage of each completed reservation that
        depends on your property's location. If you are paid by virtual credit card, your own bank or payment provider
        charges its transaction fee instead. In exchange, Booking.com handles chargebacks and refunds. Check the exact fee
        on your Finance help page in the extranet.
      </P>

      <H2>What raises the effective cost</H2>
      <P>
        Three optional programmes change what you really pay. None of them is compulsory, and you can leave each one.
      </P>
      <Ul>
        <Li><B>Preferred Partner Programme:</B> more exposure in search results and a badge, in exchange for what Booking.com calls a small increase in commission. Booking.com does not publish a single figure for that increase, and eligibility needs a review score of at least 7 out of 10, among other criteria.</Li>
        <Li><B>Visibility Booster:</B> a higher commission that you choose for specific dates, to rank better on those nights. Booking.com's developer documentation describes it as a commission override set per date.</Li>
        <Li><B>Genius:</B> no extra commission, but a discount that you fund. Joining means offering at least 10 percent off your least expensive and most popular room type, and Booking.com confirms the standard Genius discount is funded by the property.</Li>
      </Ul>
      <P>
        If your reservation statement shows a higher percentage than your contract, check whether one of these is switched on.
      </P>

      <H2>Worked examples, per 100 of booking value</H2>
      <P>
        These examples use 15 percent as the base rate and, for the programmes, an extra 3 points. Both numbers are
        illustrations, not Booking.com figures. The 10 percent Genius discount is the programme's standard level.
      </P>
      <Table
        caption="What you keep from a booking listed at 100 (example rates)"
        head={['Situation', 'Guest pays', 'Commission', 'You keep']}
        rows={[
          ['Base commission of 15 percent', '100', '15', '85'],
          ['Programme adds 3 points (18 percent)', '100', '18', '82'],
          ['Genius guest, 10 percent off, base rate', '90', '13.5', '76.5'],
          ['Genius guest plus programme', '90', '16.2', '73.8'],
        ]}
      />
      <P>
        Read the third row carefully. The discount and the commission stack: on a booking listed at 100, a Genius guest pays
        90, commission is charged on those 90, and you keep 76.5. Measured against your listed price, the channel costs you
        23.5, not 15. Payment fees, if you use them, come on top.
      </P>
      <Note title="How a channel mix changes the average">
        <p>
          Suppose 70 of every 100 of your yearly booking value comes through Booking.com at 15 percent, and 30 comes direct.
          Your commission across all bookings averages 10.5 per 100. Move the split to 50 and 50 and it averages 7.5 per 100.
          Direct bookings are not free, since you pay for your website and card processing, but those costs are usually
          smaller and you control them.
        </p>
      </Note>

      <H2>Your freedom on price in Europe</H2>
      <P>
        On 13 May 2024 the European Commission designated Booking as a gatekeeper under the Digital Markets Act, and since 14
        November 2024 Booking.com must comply with its obligations. One of them, Article 5(3), means Booking.com must allow
        accommodation providers to offer different prices, availability or conditions on other channels, including their own
        website.
      </P>
      <P>
        In a factsheet dated 28 September 2026, the Commission says Booking.com has removed parity clauses from its terms in
        the European Economic Area and no longer uses prices outside the platform for its default ranking or for eligibility
        to Genius and Preferred. Outside the EEA, Booking.com applies narrow, wide or no parity depending on the country, so
        check your own General Delivery Terms.
      </P>
      <P>
        In practice, if your property is in the EU, you can reward guests who book direct with a better rate or a small
        extra.
      </P>

      <H2>A note on tax, for your accountant</H2>
      <P>
        Commission invoices come from Booking.com B.V., a company registered in Amsterdam. Under EU VAT rules, a business
        buying services from a supplier in another EU country generally accounts for the VAT itself through the reverse
        charge. How that works for you depends on your country and VAT status, including if you are VAT exempt as a small
        business, so ask your accountant before your next return.
      </P>
      <P>
        Separately, under the EU's DAC7 rules, digital platforms that facilitate the rental of property report information
        about their sellers to tax authorities. Keep your own records consistent with what the platform shows.
      </P>

      <H2>Balancing your channels</H2>
      <P>
        Leaving Booking.com is rarely the right move for a small stay. It finds guests you could never reach alone. A more
        useful goal is to stop paying commission on guests who already know you: returning guests, word-of-mouth referrals,
        people who find you on a map and then look for your website.
      </P>
      <Ul>
        <Li>Keep Booking.com for discovery, especially in the months you struggle to fill.</Li>
        <Li>Make your own website bookable, so guests who search for your name can book there.</Li>
        <Li>Tell past guests they can book direct next time, and give them a reason to.</Li>
      </Ul>
      <P>
        <A to="/direct/">Likwiid Direct</A> is a commission-free booking engine that adds a booking calendar to the website you
        already have, with payments going into your own account. It can import busy dates from any platform that exports an
        iCal feed, so it runs alongside your Booking.com listing. Those syncs refresh on a schedule rather than instantly.
        Before choosing any booking engine, our guide to{' '}
        <A to="/guides/booking-engine-questions/">the questions to ask a booking engine</A> is a good place to start.
      </P>
    </GuideLayout>
  )
}
