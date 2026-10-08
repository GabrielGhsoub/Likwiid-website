import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

export default function Guide() {
  return (
    <GuideLayout slug="direct-booking-deposits" lang="en">
      <Summary>
        <Li>A deposit is the middle ground: enough to make a guest commit, small enough not to scare them off.</Li>
        <Li>Full prepayment suits short lead times and fixed-capacity activities. A card guarantee suits places that rarely see no-shows.</Li>
        <Li>Whatever you choose, write the cancellation terms in plain words and get the guest to accept them before they pay.</Li>
        <Li>Decide your refund rules before the first cancellation, not during it.</Li>
      </Summary>

      <H2>Why direct bookings need a payment rule</H2>
      <P>
        When a guest books through a large platform, the platform decides how money moves: when the card is charged, what
        happens on cancellation, who handles the refund. The moment you take bookings on your own website, those decisions
        become yours. That is the whole point of booking direct, but it also means a booking with no money attached is just a
        promise, and promises are easy to forget.
      </P>
      <P>
        A clear payment rule does two things. It filters out the enquiries that were never serious, and it gives you
        something to fall back on when a guest cancels the night before. There are three common ways to do it.
      </P>

      <H2>Three options: deposit, full prepayment, card guarantee</H2>
      <P>
        <B>A deposit</B> is a share of the total, paid when the guest books. The balance is paid later: on arrival, at
        check-out, or a set number of days before the stay. It is the most common choice for guesthouses, small hotels and
        holiday rentals, because it asks for a real commitment without asking for everything months in advance.
      </P>
      <P>
        <B>Full prepayment</B> means the guest pays the whole amount when booking. It works well for short lead times, for
        activities with a fixed number of places (a class, a boat trip, a court slot), and for non-refundable rates. It is
        simpler to manage, but some guests hesitate to pay a large sum to a place they have never heard of.
      </P>
      <P>
        <B>A card guarantee</B> means the guest leaves card details and nothing is charged unless they cancel late or do not
        show up. It is the most welcoming option for the guest and the weakest protection for you. A hold on a card lapses
        within days, not months, and charging a card later without the guest present needs a payment setup built for it. In
        Europe, card payments generally need strong customer authentication, so a card typed into an email or a form is not
        a guarantee you can rely on.
      </P>

      <Table
        caption="What each option means for you and for the guest"
        head={['', 'Deposit', 'Full prepayment', 'Card guarantee']}
        rows={[
          ['Guest commitment', 'Medium to high', 'High', 'Low'],
          ['Protection against late cancellation', 'Up to the deposit', 'Full, if your terms allow it', 'Only if the later charge succeeds'],
          ['Friction at booking', 'Low', 'Higher', 'Lowest'],
          ['Work for you', 'Collect the balance', 'Handle refunds', 'Chase failed charges'],
        ]}
      />

      <H2>How big should the deposit be?</H2>
      <P>
        There is no universal figure. A useful way to decide is to ask what you lose when a guest cancels late. If a room
        cancelled a week before arrival usually sells again, a small deposit is enough. If a cancelled slot almost never
        refills, the deposit should cover more of it.
      </P>
      <P>
        Think of it per 100 of booking value. With a 30 percent deposit, the guest pays 30 when booking and 70 later. If they
        cancel inside your cancellation window, you keep the 30 under your terms. If they cancel outside it, you refund the
        30 or keep it as a credit for another date, whichever your terms say.
      </P>
      <P>
        Two more things matter as much as the percentage. Make the amount visible before the guest commits, and say exactly
        when and how the balance is due. A deposit that appears as a surprise at the last step loses bookings.
      </P>

      <H2>Writing a cancellation policy guests understand</H2>
      <P>
        A good policy answers three questions in a few lines: until when can the guest cancel for free, what do they lose
        after that, and what happens if they do not show up. Avoid legal language and avoid vague words like "reasonable".
        Here is an example you can adapt:
      </P>
      <Note title="Example wording">
        <p>
          A deposit of 30 percent of the total is due when you book. The balance is paid on arrival. You can cancel free of
          charge up to 14 days before arrival and we refund your deposit in full. If you cancel later, or do not arrive, the
          deposit is kept. We do not charge anything beyond the deposit.
        </p>
      </Note>
      <P>
        Adjust the numbers to your own situation. Then put the policy where the guest sees it at the moment of decision, and
        ask them to tick a box confirming they have read it. That tick is what you point to if a guest later disputes a
        charge with their bank.
      </P>

      <H2>Refunds, credits and changes of date</H2>
      <P>
        Decide your refund rules before the first cancellation, because deciding under pressure leads to inconsistent
        answers. Common choices are a full refund outside the cancellation window, no refund inside it, and a credit for a
        future stay as a goodwill middle ground. Credits keep the money and the guest relationship, but say how long a credit
        is valid for.
      </P>
      <P>
        When you take payments into your own payment account, refunds go back through that same account. Check how your
        provider handles partial refunds and whether its fees on the original payment are returned, so the policy you write
        matches what you can actually do.
      </P>

      <H2>What to tell guests</H2>
      <Ul>
        <Li>The deposit amount and the balance, shown as numbers before payment, not just as a percentage.</Li>
        <Li>When and how the balance is paid: on arrival, by card, by bank transfer.</Li>
        <Li>The cancellation deadline as a concrete rule (14 days before arrival), not a vague promise.</Li>
        <Li>What happens to the deposit on late cancellation or no-show.</Li>
        <Li>Who to contact to change dates, and whether a change counts as a cancellation.</Li>
      </Ul>
      <P>
        Repeat the key points in the confirmation message. Guests rarely reread the booking page, but they do search their
        inbox.
      </P>

      <H2>How this works in Likwiid Direct</H2>
      <P>
        <A to="/direct/">Likwiid Direct</A> takes a percentage deposit by card at the moment the guest books, into your own
        payment account, and shows the deposit and the balance due on arrival before the guest pays. Your cancellation and
        payment terms sit at the last step, and nobody can book without ticking that they have read them. The owner panel
        keeps your reservations, your guests and their credits in one place.
      </P>
      <P>
        If you would rather not take any payment online yet, Direct can also run in request mode: the guest sends a request
        with dates and extras, nothing is charged, and you confirm by hand. Our guide on{' '}
        <A to="/guides/request-vs-instant-booking/">request to book versus instant booking</A> explains when each one fits.
      </P>
    </GuideLayout>
  )
}
