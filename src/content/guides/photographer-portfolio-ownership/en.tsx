import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

const sources = [
  {
    label: 'Google Search Central: Site moves and migrations (accessed October 2026)',
    href: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes',
  },
  {
    label: 'Google Search Central: Image metadata in Google Images (accessed October 2026)',
    href: 'https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata',
  },
  {
    label: 'IPTC: Photo Metadata User Guide (accessed October 2026)',
    href: 'https://www.iptc.org/std/photometadata/documentation/userguide/',
  },
  {
    label: 'web.dev: Learn Images, responsive images (accessed October 2026)',
    href: 'https://web.dev/learn/images/responsive-images',
  },
]

export default function Guide() {
  return (
    <GuideLayout slug="photographer-portfolio-ownership" lang="en" sources={sources}>
      <Summary>
        <Li>On a subscription platform you own your photos, but you rent almost everything around them: the design, the galleries, the client tools and often the address.</Li>
        <Li>A site delivered as files on your own domain moves with you. The price is that changes and upkeep are your responsibility, or someone you pay.</Li>
        <Li>Register your domain in your own name from day one and keep your URLs stable. That protects your search ranking more than any platform choice.</Li>
        <Li>Compare cost over several years, not per month, and be honest about what a subscription includes.</Li>
      </Summary>

      <H2>What you actually own</H2>
      <P>
        Whichever way you build your portfolio, your photographs stay yours. The copyright belongs to you, and a reputable
        platform only takes the licence it needs to display them. The question is everything else: the layout your clients
        recognise, the gallery structure you spent evenings on, the texts that bring in enquiries, the client selections and
        notes, and the web address people have bookmarked.
      </P>
      <P>
        <B>On a subscription platform</B>, those things live inside the platform's software. You can use them while you
        pay. If you stop paying, or the platform changes its plans, removes a feature or closes, you keep your image files
        and whatever you can export, and you rebuild the rest.
      </P>
      <P>
        <B>With a site delivered as files</B>, the pages, styles, gallery code and texts are handed to you. You put them on
        hosting you choose, under your own domain. If you change hosting, you copy the files across. Nothing stops working
        because a contract ended.
      </P>

      <Table
        caption="What sits where"
        head={['', 'Subscription platform', 'Files on your own domain']}
        rows={[
          ['Photos and copyright', 'Yours', 'Yours'],
          ['Design and gallery code', 'Rented while you pay', 'Yours'],
          ['Hosting', 'Included', 'Your own account, chosen by you'],
          ['Updates and support', 'Included', 'Your job, or paid when needed'],
          ['Leaving', 'Export what the platform allows', 'Copy the files elsewhere'],
        ]}
      />

      <H2>Portability: what moves with you</H2>
      <P>
        Before you commit to any platform, test the exit. Most photographers only discover what cannot be exported on the
        day they want to leave. Ask, or try in a trial account, whether you can get out:
      </P>
      <Ul>
        <Li>Your galleries in their original order, with captions and titles, not just a folder of images.</Li>
        <Li>Client galleries, including the favourites each client picked and the notes they left.</Li>
        <Li>Your page texts, blog posts and their publication dates.</Li>
        <Li>A list of every page address, so you can redirect them later.</Li>
        <Li>Contact form submissions and print orders, if the platform stores them.</Li>
      </Ul>
      <P>
        Client selections deserve special attention. For a wedding photographer, the list of images a couple chose for the
        album is working data, not decoration. If it lives only inside a platform, plan to keep a copy elsewhere.
      </P>

      <H2>Your domain and your URLs</H2>
      <P>
        The single most useful decision is to own your domain from the start, registered in your name, with a registrar
        you can log into yourself. If your portfolio lives on a platform's subdomain, every link a magazine, a venue or a
        happy client ever gave you points to an address you do not control. Move, and those links break.
      </P>
      <P>
        With your own domain, you can change the software behind it without changing the address. What matters then is
        keeping individual page addresses stable. If a gallery URL has to change, set a permanent redirect from the old
        address to the new one. Google's guidance on site moves recommends server-side permanent redirects, keeping them for
        at least a year, and expecting search positions to fluctuate for a while during a move.
      </P>
      <Note title="A simple habit">
        <p>
          Before any redesign or move, export a list of your current page addresses. After the move, open each one and check
          it lands on the right page, not on the home page.
        </p>
      </Note>

      <H2>Cost over several years</H2>
      <P>
        Comparing a monthly fee with a one-time build is misleading, because they buy different things over different
        periods. Lay both out over the number of years you expect to keep the site.
      </P>
      <P>
        <B>A subscription</B> is a recurring fee that adds up every year you stay, and plan prices tend to rise over time.
        In return it includes hosting, security updates, new features and support. For a photographer who is just starting,
        who wants zero technical responsibility, or who changes direction often, that is good value and a perfectly sound
        choice.
      </P>
      <P>
        <B>A one-time build</B> has a larger cost up front, then small running costs: hosting (often free or close to it for
        a site delivered as files) and the yearly domain renewal. Be fair in the comparison: future changes cost something
        too. A new section, a new feature or a redesign means paying a developer or spending your own time. The longer you
        keep the site without big changes, the more a one-time build tends to pay off. Likwiid is preparing a simple cost
        calculator to help with this comparison.
      </P>

      <H2>Proofing, print sales and booking</H2>
      <P>
        These features often decide the choice, so check them in detail whichever route you take:
      </P>
      <Ul>
        <Li><B>Client proofing:</B> private galleries per client, picking favourites, notes on photos, and a limit that matches the number of images in the package.</Li>
        <Li><B>Print sales:</B> who sets the sizes and prices, and whether payments reach your own payment account or pass through someone else first.</Li>
        <Li><B>Booking:</B> whether clients can see availability and send a booking from your own site, without being sent to another address.</Li>
      </Ul>
      <P>
        On a subscription, ask whether these are included in your plan or need a higher tier. On a one-time build, ask
        whether they are part of the delivery or extra work later.
      </P>

      <H2>Image quality, speed and copyright</H2>
      <P>
        A portfolio is judged in the first seconds, often on a phone. Uploading full-resolution exports and letting the
        browser shrink them makes pages slow. A good setup creates several sizes of each photo and lets the browser pick the
        one that fits the screen, in modern formats such as WebP or AVIF, as described in the web.dev course on responsive
        images.
      </P>
      <P>
        Check what happens to your metadata. Copyright notice, creator and credit line are stored inside the image file in
        the IPTC standard, and Google Images can show them next to your photo. The IPTC guidance is that copyright
        information should never be removed from files. Some image pipelines strip all metadata to save bytes, so upload a
        test photo and inspect the resized version that the site actually serves.
      </P>

      <H2>A checklist before you choose</H2>
      <Ul>
        <Li>Is the domain registered in my name, and can I move it without asking anyone?</Li>
        <Li>Can I export galleries, client selections, texts and a list of URLs today?</Li>
        <Li>Over the years I plan to keep this site, what do I pay in total, including likely changes?</Li>
        <Li>Who handles updates and problems, and how fast do I need them handled?</Li>
        <Li>Do proofing, print sales and booking work the way my clients buy?</Li>
        <Li>Are photos served at the right size, in modern formats, with copyright details intact?</Li>
        <Li>Does the site work in the languages my clients speak?</Li>
      </Ul>
      <P>
        If most answers point to convenience and little maintenance, a subscription is a good fit. If they point to control,
        longevity and a stable address, owning the files is worth a serious look.
      </P>

      <H2>Where Likwiid Frame fits</H2>
      <P>
        <A to="/frame/">Likwiid Frame</A> is our portfolio engine for photographers. It is delivered as files you own, on
        your own domain, paid once, with no subscription and no commission. It includes client proofing, a print shop
        connected to your own payment account, booking through an embedded Likwiid Direct calendar, multi-language pages and
        photos served at the right size with copyright details kept. If you want to talk through which route suits your
        work, <A to="/contact/">get in touch</A>.
      </P>
    </GuideLayout>
  )
}
