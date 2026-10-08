import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

const sources = [
  {
    label: 'Booking.com for Partners : Comprendre votre commission (consulté en octobre 2026)',
    href: 'https://partner.booking.com/fr/aide/commission-factures-et-taxes/factures/comprendre-votre-commission',
  },
  {
    label: 'Booking.com for Partners : Joining Payments by Booking.com, en anglais (consulté en octobre 2026)',
    href: 'https://partner.booking.com/en-gb/help/payments-payouts-invoices/payments-bookingcom/joining-payments-bookingcom',
  },
  {
    label: 'Booking.com for Partners : Understanding the Preferred Partner Programme, en anglais (consulté en octobre 2026)',
    href: 'https://partner.booking.com/en-gb/help/performance/tools-programmes/understanding-preferred-partner-programme',
  },
  {
    label: 'Booking.com for Partners : Understanding the Genius marketing programme, en anglais (consulté en octobre 2026)',
    href: 'https://partner.booking.com/en-gb/help/performance/tools-programmes/understanding-genius-marketing-programme',
  },
  {
    label: 'Booking.com Developers : Get property commission, commission contractuelle et Visibility Booster (consulté en octobre 2026)',
    href: 'https://developers.booking.com/connectivity/docs/b_xml-getcommissionoverride',
  },
  {
    label: "Commission européenne : La Commission désigne Booking comme contrôleur d'accès, IP/24/2561, 13 mai 2024",
    href: 'https://ec.europa.eu/commission/presscorner/detail/fr/ip_24_2561',
  },
  {
    label: 'Commission européenne, DMA : Booking must comply with all relevant obligations under the DMA, 14 novembre 2024',
    href: 'https://digital-markets-act.ec.europa.eu/booking-must-comply-all-relevant-obligations-under-digital-markets-act-2024-11-14_en',
  },
  {
    label: 'Commission européenne, DMA : fiche sur la liberté tarifaire des hébergeurs présents sur Booking.com, 28 septembre 2026',
    href: 'https://digital-markets-act.ec.europa.eu/factsheet-how-dma-ensures-businesses-using-bookingcom-are-free-set-their-prices-and-bookingcom-2026-09-28_en',
  },
  {
    label: 'impots.gouv.fr : Prestations entre assujettis, modifié le 14 février 2025 (consulté en octobre 2026)',
    href: 'https://www.impots.gouv.fr/professionnel/prestations-entre-assujettis',
  },
  {
    label: "L'Europe est à vous (Union européenne) : TVA transfrontalière, achat de services dans un autre pays de l'UE (consulté en octobre 2026)",
    href: 'https://europa.eu/youreurope/business/finance-and-tax/vat/cross-border-vat/index_fr.htm',
  },
  {
    label: "GLEIF : fiche de l'entité Booking.com B.V., Amsterdam, Pays-Bas (consulté en octobre 2026)",
    href: 'https://search.gleif.org/#/record/7245009ZP4X4SZC79G88',
  },
]

export default function Guide() {
  return (
    <GuideLayout slug="booking-com-commission-costs" lang="fr" sources={sources}>
      <Summary>
        <Li>La commission Booking.com est un pourcentage fixé dans votre contrat. Il varie selon le pays, le type d'hébergement et l'accord signé : le seul chiffre fiable est celui de votre extranet.</Li>
        <Li>Elle porte sur le total payé par le client, frais de ménage compris et, dans la plupart des pays, TVA comprise. La taxe de séjour n'est pas concernée.</Li>
        <Li>Partenaire Préféré et Accélérateur de visibilité ajoutent de la commission. Genius n'en ajoute pas, mais c'est vous qui financez la remise.</Li>
        <Li>En France, la TVA sur une prestation achetée à un prestataire d'un autre pays de l'UE est en principe due par le client, par autoliquidation.</Li>
        <Li>Depuis 2024, les règles européennes vous laissent proposer un meilleur prix sur votre propre site.</Li>
      </Summary>

      <H2>Ce qu'est la commission, et ce qu'elle rémunère</H2>
      <P>
        Booking.com ne facture pas la mise en ligne de votre annonce. Il prélève un pourcentage de chaque réservation qu'il
        vous apporte. Selon ses pages d'aide aux partenaires, le pourcentage exact dépend de votre pays, du type
        d'établissement et de l'accord signé à l'inscription. Vous le trouvez dans cet accord et dans l'extranet, onglet
        Finances, dans le relevé des réservations.
      </P>
      <P>
        Il n'existe pas de taux officiel unique : les exemples de ce guide utilisent donc 15 pour cent, simplement comme
        chiffre rond. Remplacez-le par le vôtre. Le reste reflète les pages de Booking.com et les sources européennes et
        françaises en octobre 2026 ; les conditions évoluent, vérifiez toujours dans votre extranet.
      </P>
      <P>
        Il est juste de dire ce que la commission achète. Booking.com indique promouvoir les établissements sur les moteurs
        de recherche en 45 langues et via plus de 17 500 sites affiliés, en plus de sa propre clientèle. Pour une chambre
        d'hôtes ou un gîte sans budget marketing, cette visibilité est réelle, surtout auprès des voyageurs étrangers. Et
        vous ne payez que lorsqu'une réservation a lieu.
      </P>

      <H2>Sur quoi porte la commission</H2>
      <P>
        La commission s'applique au montant total de la réservation : le tarif plus les frais supplémentaires que vous
        facturez, comme le ménage ou le service, une fois le départ du client effectué. Booking.com ne prend pas de
        commission sur les taxes locales comme la taxe de séjour, mais dans la plupart des pays, il en prend sur la TVA. Vos
        Conditions Générales de Prestation précisent ce qui s'applique à votre cas.
      </P>
      <Ul>
        <Li><B>Vous payez une commission</B> sur les séjours effectués, les réservations non remboursables ou partiellement remboursables (même si le client ne vient pas), les frais d'annulation ou de non-présentation que vous facturez, et les surréservations.</Li>
        <Li><B>Vous n'en payez pas</B> si vous renoncez aux frais d'annulation ou de non-présentation, ou si vous signalez la carte du client comme invalide.</Li>
        <Li><B>Attention au délai :</B> annulations et non-présentations doivent être signalées dans l'extranet dans les 48 heures suivant le départ. Sinon, la commission complète est facturée.</Li>
        <Li><B>Le taux est figé</B> au moment de la réservation : si votre commission change, les réservations déjà faites gardent l'ancien taux.</Li>
      </Ul>

      <H2>Quand payer : facture mensuelle ou prélèvement sur les versements</H2>
      <P>
        Si vous encaissez vous-même vos clients, Booking.com vous envoie une facture par mois, pour toutes les réservations
        dont le départ a eu lieu le mois précédent. Elle se règle sous 14 jours, et une facture impayée peut entraîner la
        fermeture temporaire de l'établissement sur la plateforme.
      </P>
      <P>
        Avec <B>Payments by Booking.com</B>, la plateforme encaisse le client puis vous reverse les fonds. Quand elle gère
        tous vos encaissements, elle déduit commission et frais de chaque versement. L'adhésion est sans frais
        d'activation, mais si vous êtes payé par virement, des frais de service de paiement s'appliquent, en pourcentage de
        chaque réservation effectuée, selon la localisation de l'établissement. En échange, Booking.com gère les
        rétrofacturations et les remboursements. Vérifiez le taux exact dans l'aide financière de votre extranet.
      </P>

      <H2>Ce qui fait monter le coût réel</H2>
      <Ul>
        <Li><B>Partenaire Préféré :</B> plus de visibilité dans les résultats et un badge, en échange de ce que Booking.com appelle une légère hausse de commission. Aucun chiffre unique n'est publié, et il faut notamment une note des commentaires d'au moins 7 sur 10.</Li>
        <Li><B>Accélérateur de visibilité (Visibility Booster) :</B> une commission plus élevée que vous choisissez pour des dates précises, afin de mieux ressortir ces nuits-là. La documentation technique de Booking.com le décrit comme un remplacement de la commission, date par date.</Li>
        <Li><B>Genius :</B> pas de commission en plus, mais une remise de 10 pour cent sur votre type de chambre le moins cher et le plus réservé. Booking.com confirme que la remise Genius standard est financée par l'établissement.</Li>
      </Ul>
      <P>
        Tous sont facultatifs et vous pouvez en sortir. Si votre relevé affiche un taux supérieur à celui du contrat,
        vérifiez si l'un d'eux est activé.
      </P>

      <H2>Exemples pour 100 de valeur de réservation</H2>
      <P>
        Nous prenons 15 pour cent de commission de base et, pour les programmes, 3 points de plus. Ce sont des
        illustrations, pas des chiffres de Booking.com. Les 10 pour cent de Genius sont le niveau standard du programme.
      </P>
      <Table
        caption="Ce qui vous reste sur une réservation affichée à 100 (taux d'exemple)"
        head={['Situation', 'Le client paie', 'Commission', 'Il vous reste']}
        rows={[
          ['Commission de base de 15 pour cent', '100', '15', '85'],
          ['Un programme ajoute 3 points (18 pour cent)', '100', '18', '82'],
          ['Client Genius, remise de 10 pour cent', '90', '13,5', '76,5'],
          ['Client Genius avec un programme actif', '90', '16,2', '73,8'],
        ]}
      />
      <P>
        Regardez la troisième ligne : remise et commission s'additionnent. Le client Genius paie 90, la commission porte sur
        ces 90 et il vous reste 76,5. Par rapport à votre prix affiché, le canal vous coûte 23,5, pas 15. Les frais de
        paiement éventuels s'ajoutent.
      </P>
      <Note title="L'effet d'un mélange de canaux">
        <p>
          Si 70 de chaque 100 de votre chiffre d'affaires annuel viennent de Booking.com à 15 pour cent et 30 de
          réservations directes, la commission moyenne sur l'ensemble est de 10,5 pour 100. À parts égales, elle tombe à
          7,5. Les réservations directes ont aussi un coût (le site, l'encaissement par carte), mais il est en général plus
          faible et vous le maîtrisez.
        </p>
      </Note>

      <H2>La TVA sur la commission en France</H2>
      <P>
        Les factures de commission sont émises par Booking.com B.V., une société immatriculée à Amsterdam. Selon
        impots.gouv.fr, l'achat d'une prestation auprès d'un assujetti établi dans un autre pays de l'UE par un assujetti
        établi en France est imposable à la TVA française, et c'est le client qui en est redevable. Sur la déclaration
        CA3, elle se déclare ligne A3 (achats de prestations de services auprès d'un assujetti non établi en France,
        article 283-2 du CGI), ou ligne AC sur la CA12 du régime simplifié, et la taxe est ensuite déductible.
      </P>
      <P>
        La même page rappelle qu'un micro-entrepreneur en franchise en base est assujetti à la TVA sans en être redevable.
        Si c'est votre cas pour votre gîte ou vos chambres d'hôtes, ou si vous louez en meublé de tourisme, demandez à votre
        expert-comptable comment traiter ces factures avant votre prochaine déclaration.
      </P>

      <H2>Votre liberté tarifaire en Europe</H2>
      <P>
        Le 13 mai 2024, la Commission européenne a désigné Booking comme contrôleur d'accès au titre du règlement sur les
        marchés numériques, et depuis le 14 novembre 2024 Booking.com doit en respecter les obligations. L'une d'elles,
        l'article 5, paragraphe 3, impose de laisser les hébergeurs proposer des prix, des disponibilités ou des conditions
        différents sur d'autres canaux, y compris leur propre site.
      </P>
      <P>
        Dans une fiche du 28 septembre 2026, la Commission indique que Booking.com a retiré les clauses de parité de ses
        conditions dans l'Espace économique européen et n'utilise pas les prix extérieurs pour son classement par défaut ni
        pour l'accès à Genius ou à Partenaire Préféré. Concrètement, vous pouvez récompenser ceux qui réservent en direct
        par un meilleur prix ou une petite attention.
      </P>

      <H2>Équilibrer vos canaux</H2>
      <P>
        Quitter Booking.com est rarement la bonne décision pour un petit hébergement : il vous amène des clients que vous
        n'atteindriez pas seul. L'objectif utile est de ne plus payer de commission sur ceux qui vous connaissent déjà : les
        habitués, ceux qui viennent par le bouche-à-oreille, ceux qui vous trouvent sur une carte puis cherchent votre site.
      </P>
      <Ul>
        <Li>Gardez Booking.com pour être découvert, surtout hors saison.</Li>
        <Li>Rendez votre site réservable, pour que ceux qui tapent votre nom réservent chez vous.</Li>
        <Li>Dites à vos clients qu'ils peuvent réserver en direct la prochaine fois, et donnez-leur une raison de le faire.</Li>
      </Ul>
      <P>
        <A to="/fr/direct/">Likwiid Direct</A> est un moteur de réservation sans commission qui ajoute un calendrier de
        réservation au site que vous avez déjà, avec les paiements versés sur votre propre compte. Il importe les dates
        occupées de toute plateforme qui exporte un calendrier iCal, il fonctionne donc à côté de votre annonce Booking.com ;
        ces synchronisations sont périodiques, pas instantanées. Avant de choisir un moteur de réservation, quel qu'il soit,
        lisez notre guide sur{' '}
        <A to="/fr/guides/booking-engine-questions/">les questions à poser à un moteur de réservation</A>.
      </P>
    </GuideLayout>
  )
}
