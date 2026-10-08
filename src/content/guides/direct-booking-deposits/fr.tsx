import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

export default function Guide() {
  return (
    <GuideLayout
      slug="direct-booking-deposits"
      lang="fr"
      sources={[
        {
          label: 'DGCCRF (economie.gouv.fr) : fiche pratique « Acompte, arrhes, avoir » (consultée en octobre 2026)',
          href: 'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/acompte-arrhes-avoir',
        },
        {
          label: 'Journal officiel de l\'UE (eur-lex.europa.eu) : directive 2011/83/UE relative aux droits des consommateurs, article 16 (consultée en octobre 2026)',
          href: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32011L0083',
        },
        {
          label: 'Journal officiel de l\'UE (eur-lex.europa.eu) : directive (UE) 2015/2366 concernant les services de paiement, article 97 (consultée en octobre 2026)',
          href: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32015L2366',
        },
      ]}
    >
      <Summary>
        <Li>Un versement à la réservation est le juste milieu : assez pour engager le client, pas assez pour le faire fuir.</Li>
        <Li>Le paiement intégral convient aux réservations de dernière minute et aux activités à places limitées. La garantie par carte protège peu.</Li>
        <Li>En France, arrhes et acompte n'ont pas les mêmes effets, et une somme versée d'avance sans précision est considérée comme des arrhes. Écrivez le bon mot.</Li>
        <Li>Rédigez vos conditions d'annulation simplement et faites-les accepter avant le paiement.</Li>
        <Li>Fixez vos règles de remboursement avant la première annulation, pas pendant.</Li>
      </Summary>

      <H2>Pourquoi une réservation directe a besoin d'une règle de paiement</H2>
      <P>
        Sur une grande plateforme, c'est la plateforme qui décide quand la carte est débitée et ce qui se passe en cas
        d'annulation. Sur votre propre site, ces décisions vous reviennent, et une réservation sans argent versé n'est qu'une
        promesse.
      </P>
      <P>
        Une règle de paiement claire écarte les demandes peu sérieuses et vous donne un appui quand un client annule la veille.
        Pour des chambres d'hôtes, un gîte ou un club de plongée, il existe trois façons courantes de faire.
      </P>

      <H2>Acompte, paiement intégral ou garantie par carte</H2>
      <P>
        <B>Le versement partiel</B>, qu'on appelle couramment acompte, est une part du total payée à la réservation. Le solde
        est réglé plus tard : à l'arrivée, au départ ou un certain nombre de jours avant le séjour. C'est le choix le plus
        répandu dans les chambres d'hôtes, les gîtes et les petits hôtels, parce qu'il demande un vrai engagement sans exiger la
        totalité des mois à l'avance.
      </P>
      <P>
        <B>Le paiement intégral</B> signifie que le client règle tout en réservant. Il convient aux réservations proches de la
        date, aux activités à places limitées (un cours, une sortie en bateau, un terrain de padel) et aux tarifs non
        remboursables. C'est plus simple à gérer, mais certains clients hésitent à verser une grosse somme à un hébergement qu'ils
        ne connaissent pas.
      </P>
      <P>
        <B>La garantie par carte</B> signifie que le client laisse ses coordonnées bancaires et que rien n'est débité, sauf
        annulation tardive ou non-présentation. C'est l'option la plus confortable pour le client et la moins protectrice pour
        vous : une empreinte bancaire expire en quelques jours, et dans l'Union européenne les paiements électroniques à
        distance exigent en principe une authentification forte du client. Un numéro de carte envoyé par email n'est donc pas
        une garantie fiable.
      </P>
      <Table
        caption="Ce que chaque option implique pour vous et pour le client"
        head={['', 'Versement partiel', 'Paiement intégral', 'Garantie par carte']}
        rows={[
          ['Engagement du client', 'Moyen à élevé', 'Élevé', 'Faible'],
          ['Protection contre les annulations tardives', 'À hauteur du versement', 'Totale, si vos conditions le prévoient', 'Seulement si le débit ultérieur passe'],
          ['Frein à la réservation', 'Faible', 'Plus élevé', 'Le plus faible'],
          ['Travail pour vous', 'Encaisser le solde', 'Gérer les remboursements', 'Relancer les débits refusés'],
        ]}
      />

      <H2>Arrhes ou acompte : la différence compte</H2>
      <P>
        Dans la conversation, on dit volontiers « acompte » pour toute somme versée à l'avance. Le droit de la consommation, lui,
        distingue deux notions, et la DGCCRF le rappelle dans sa fiche pratique.
      </P>
      <P>
        <B>L'acompte</B> est un premier versement à valoir sur le prix, qui engage fermement les deux parties. Le client n'a pas
        de faculté de dédit et peut être condamné à des dommages et intérêts s'il se rétracte. Le professionnel ne peut pas non
        plus revenir sur son engagement, même en remboursant l'acompte.
      </P>
      <P>
        <B>Les arrhes</B> permettent de se désister. Sauf disposition contraire du contrat, le client qui annule perd les arrhes,
        mais il ne peut pas être contraint d'exécuter le contrat. Si c'est le professionnel qui n'exécute pas la prestation, il
        peut être condamné à rembourser le double des arrhes versées.
      </P>
      <P>
        Point clé : à défaut de précision, les sommes versées d'avance sont des arrhes (la DGCCRF renvoie aux articles L214-1 à
        L214-4 du Code de la consommation). Choisissez donc le mot qui correspond à ce que vous voulez, écrivez-le dans vos
        conditions, et précisez ce qui se passe si le client annule comme si c'est vous qui annulez.
      </P>
      <Note title="Information générale">
        <p>
          Ceci est une information générale, pas un conseil juridique. Chaque situation a ses particularités : faites relire vos
          conditions par votre expert-comptable ou votre avocat.
        </p>
      </Note>

      <H2>Quel montant demander ?</H2>
      <P>
        Il n'y a pas de chiffre universel : demandez-vous ce que vous perdez quand un client annule tard. Si une chambre annulée une semaine avant se reloue en général, un petit versement suffit. Si une place dans
        une activité ne se remplit presque jamais, le versement doit en couvrir une plus grande part.
      </P>
      <P>
        Raisonnez pour 100 de montant de réservation. Avec un versement de 30 %, le client paie 30 à la réservation et 70 à
        l'arrivée. S'il annule pendant votre période d'annulation tardive, vous gardez les 30 selon vos conditions. S'il annule
        avant, vous remboursez les 30 ou vous les gardez sous forme d'avoir pour une autre date, selon ce que prévoient vos
        conditions.
      </P>
      <P>
        Affichez aussi le montant avant que le client s'engage : un versement qui apparaît par surprise à la dernière étape fait
        perdre des réservations.
      </P>

      <H2>Rédiger des conditions d'annulation compréhensibles</H2>
      <P>
        De bonnes conditions répondent à trois questions en quelques lignes : jusqu'à quand le client peut annuler sans frais, ce
        qu'il perd ensuite, et ce qui se passe s'il ne vient pas. Évitez le jargon juridique et les mots flous comme
        « raisonnable ». Voici un exemple à adapter, qui retient ici le régime des arrhes :
      </P>
      <Note title="Exemple de rédaction">
        <p>
          À la réservation, vous versez 30 % du montant total à titre d'arrhes. Le solde est réglé à l'arrivée. Vous pouvez
          annuler sans frais jusqu'à 14 jours avant votre arrivée : nous vous remboursons alors les arrhes en totalité. En cas
          d'annulation plus tardive ou de non-présentation, les arrhes restent acquises. Nous ne facturons rien au-delà des
          arrhes.
        </p>
      </Note>
      <P>
        Adaptez les chiffres, placez ces conditions là où le client les voit au moment de décider, et demandez-lui de cocher une
        case confirmant qu'il les a lues. C'est cette case que vous pourrez montrer s'il conteste plus tard le paiement auprès de
        sa banque.
      </P>

      <H2>Remboursements, avoirs et changements de dates</H2>
      <P>
        Beaucoup d'hébergeurs pensent que le client dispose toujours de 14 jours pour se rétracter après un achat en ligne. Pour
        l'hébergement autre qu'à des fins résidentielles et les activités de loisirs prévues à une date précise, ce n'est pas le
        cas : la directive européenne relative aux droits des consommateurs exclut ces contrats du droit de rétractation. En
        règle générale, ce sont donc vos conditions d'annulation qui s'appliquent, raison de plus pour bien les écrire.
      </P>
      <P>
        Fixez vos règles avant la première annulation. Les choix courants : remboursement intégral hors délai, aucun remboursement dans le délai, et un avoir pour un autre séjour comme
        geste commercial. L'avoir conserve la somme et la relation avec le client, mais indiquez sa durée de validité.
      </P>
      <P>
        Si vous encaissez sur votre propre compte de paiement, les remboursements en partent aussi. Vérifiez auprès de votre
        prestataire comment se font les remboursements partiels et si ses frais vous sont rendus.
      </P>

      <H2>Ce qu'il faut dire aux clients</H2>
      <Ul>
        <Li>Le montant versé et le solde, en chiffres et avant le paiement, pas seulement en pourcentage.</Li>
        <Li>Le mot exact, arrhes ou acompte, et ce qu'il implique en cas d'annulation.</Li>
        <Li>Quand et comment le solde est réglé : à l'arrivée, par carte, par virement.</Li>
        <Li>La date limite d'annulation sous forme de règle concrète (14 jours avant l'arrivée), pas de promesse vague.</Li>
        <Li>Qui contacter pour changer de dates, et si un changement compte comme une annulation.</Li>
      </Ul>
      <P>
        Reprenez l'essentiel dans le message de confirmation. Les clients relisent rarement la page de réservation, mais ils
        fouillent leur boîte mail.
      </P>

      <H2>Comment Likwiid Direct s'en occupe</H2>
      <P>
        <A to="/fr/direct/">Likwiid Direct</A> encaisse par carte un acompte en pourcentage du total au moment de la réservation
        instantanée, directement sur votre propre compte de paiement, et montre au client ce qu'il verse et le solde dû à
        l'arrivée avant qu'il paie. Vos conditions d'annulation et de paiement s'affichent à la dernière étape, et personne ne
        peut réserver sans cocher qu'il les a lues : c'est là que vous écrivez s'il s'agit d'arrhes ou d'un acompte. Votre espace
        propriétaire regroupe les réservations, les clients et leurs avoirs.
      </P>
      <P>
        Si vous ne voulez pas encore encaisser en ligne, Direct fonctionne aussi en mode demande : le client envoie une demande
        avec ses dates et ses options, rien n'est débité et vous confirmez vous-même. Notre guide{' '}
        <A to="/fr/guides/request-vs-instant-booking/">demande de réservation ou réservation instantanée</A> explique quand
        choisir l'un ou l'autre.
      </P>
    </GuideLayout>
  )
}
