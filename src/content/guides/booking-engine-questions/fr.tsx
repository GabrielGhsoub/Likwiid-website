import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, Ext, H2, H3, Li, P, Summary, Table, Ul } from '../../../components/guides/prose'

const GDPR_ROLES = 'https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/application-gdpr_en'

export default function Guide() {
  return (
    <GuideLayout
      slug="booking-engine-questions"
      lang="fr"
      sources={[
        {
          label: 'Commission européenne : Application of the GDPR, rôles de responsable de traitement et de sous-traitant, en anglais (consulté en octobre 2026)',
          href: GDPR_ROLES,
        },
      ]}
    >
      <Summary>
        <Li>Demandez sur quoi la commission est calculée, pas seulement son taux : la nuitée seule, ou aussi les extras, la TVA, la taxe de séjour et les réservations annulées.</Li>
        <Li>Vérifiez sur quel compte arrive l'argent, quand, et qui gère remboursements et contestations de paiement.</Li>
        <Li>Votre liste de clients reste la vôtre : aucun marketing du prestataire, et un export que vous lancez vous-même.</Li>
        <Li>Lisez les conditions de sortie avant la liste des fonctionnalités : durée, préavis, reconduction tacite, vos données et votre nom de domaine.</Li>
        <Li>La synchronisation par iCal se met à jour à intervalles. C'est utile, mais ce n'est pas instantané.</Li>
      </Summary>

      <P>
        En démonstration, tous les moteurs de réservation font bonne impression. Les vraies différences apparaissent plus
        tard : à la première facture, à la première double réservation ou le jour où vous voulez changer. Voici les questions à poser avant de signer, avec ce qu'une bonne réponse doit contenir, que vous teniez des
        chambres d'hôtes, un gîte ou une école de voile.
      </P>

      <H2>Les frais : combien, et calculés sur quoi</H2>
      <P>
        Une commission faible peut coûter plus cher qu'une commission élevée si elle porte sur une plus grande part de
        chaque réservation. Demandez la grille tarifaire par écrit, puis :
      </P>
      <Ul>
        <Li>S'agit-il d'une commission (un pourcentage), de frais fixes par réservation, ou des deux ?</Li>
        <Li>Porte-t-elle uniquement sur le prix de la chambre ou de l'activité, ou aussi sur le petit-déjeuner, les transferts, le ménage, la TVA et la taxe de séjour que vous collectez pour la commune ?</Li>
        <Li>Est-elle due sur les réservations annulées, ou sur l'acompte que vous conservez après une annulation tardive ?</Li>
        <Li>Y a-t-il des frais de mise en service, un abonnement mensuel, ou une formule qui change de palier quand votre volume augmente ?</Li>
        <Li>Les frais de paiement par carte sont-ils compris, ou facturés à part par le prestataire de paiement ?</Li>
      </Ul>
      <P>
        Un exemple montre pourquoi l'assiette compte. Prenons une réservation de 100 au total : 80 pour l'hébergement, 15
        d'extras et 5 de taxe de séjour. Avec une commission de 10 pour cent, à titre d'illustration :
      </P>
      <Table
        caption="Même taux, assiette différente : coût pour 100 de valeur de réservation (commission de 10 pour cent à titre d'illustration)"
        head={['Commission calculée sur', 'Montant concerné', 'Coût']}
        rows={[
          ["L'hébergement seul", '80', '8'],
          ['Hébergement et extras', '95', '9,5'],
          ['Le tout, taxe de séjour comprise', '100', '10'],
        ]}
      />
      <P>
        La taxe de séjour n'est pas un revenu : vous la collectez puis la reversez. Une commission dessus porte sur de
        l'argent qui n'a jamais été le vôtre. Une bonne réponse ressemble à ceci : <B>« La commission est de tel
        pourcentage, sur l'hébergement seul, jamais sur les taxes, et rien sur les réservations annulées. »</B>
      </P>

      <H2>Les paiements : sur quel compte, et qui détient l'argent</H2>
      <P>
        Certains moteurs de réservation imposent leur solution de paiement ; d'autres vous laissent connecter un compte à
        votre nom. La différence se joue sur trois points.
      </P>
      <Ul>
        <Li><B>La dépendance.</B> Avec la solution du prestataire, vous subissez ses conditions, et partir oblige à tout remettre en place.</Li>
        <Li><B>Qui détient l'argent.</B> Le paiement du client arrive-t-il sur votre compte, ou le prestataire l'encaisse-t-il pour vous le reverser plus tard ? Demandez la fréquence des versements et ce que devient l'argent en attente si le prestataire rencontre un problème.</Li>
        <Li><B>Remboursements et contestations.</B> Qui effectue le remboursement, et depuis quel solde ? Quand un client conteste un paiement auprès de sa banque, qui répond, avec quelles preuves, et qui paie les éventuels frais de litige ?</Li>
      </Ul>
      <P>
        Une bonne réponse : <B>« Les paiements arrivent directement sur votre compte, vous remboursez vous-même, et la fiche
        de réservation avec les conditions acceptées sert de preuve en cas de contestation. »</B>
      </P>

      <H2>Les données des clients : à qui appartiennent-elles ?</H2>
      <P>
        Au sens du RGPD, l'établissement auprès duquel le client réserve décide en général pourquoi et comment ses données
        sont utilisées : il est donc <B>responsable de traitement</B>. Un moteur de réservation qui conserve les réservations
        pour votre compte est un <B>sous-traitant</B> : comme l'explique la{' '}
        <Ext href={GDPR_ROLES}>Commission européenne</Ext>, il traite les données personnelles uniquement pour le compte du
        responsable, dans le cadre d'un contrat et sur ses seules instructions documentées. Elle cite le cas d'un
        sous-traitant devenu lui-même responsable de traitement en utilisant les coordonnées des clients pour son propre
        marketing.
      </P>
      <P>Demandez donc :</P>
      <Ul>
        <Li>Existe-t-il un contrat de sous-traitance des données, et puis-je le lire avant de signer ?</Li>
        <Li>Pouvez-vous écrire à mes clients, leur proposer d'autres hébergements ou utiliser leurs données pour vos propres besoins ?</Li>
      </Ul>
      <P>
        La bonne réponse : un contrat court et lisible, et un non clair à tout marketing auprès de vos clients. Il s'agit
        d'informations générales, pas d'un conseil juridique.
      </P>

      <H2>Synchronisation des calendriers et des canaux</H2>
      <P>
        Si vous vendez aussi sur les grandes plateformes, la synchronisation vous protège des doubles réservations.{' '}
        <B>L'iCal</B> est un flux de calendrier : un côté publie ses dates occupées, l'autre les lit à son propre rythme.
        Les flux peuvent aller dans les deux sens, mais chacun ne transporte que des dates bloquées (ni prix, ni
        coordonnées) et ne se met à jour qu'à la lecture suivante : une réservation faite maintenant ne bloquera la date
        ailleurs qu'après la prochaine mise à jour. <B>Une connexion à un channel manager</B> est un lien
        bidirectionnel conçu pour échanger disponibilités, tarifs et réservations entre systèmes.
      </P>
      <Ul>
        <Li>Quelle méthode utilisez-vous pour chaque plateforme sur laquelle je vends ?</Li>
        <Li>À quelle fréquence les calendriers importés sont-ils mis à jour, et puis-je voir la date de la dernière synchronisation ?</Li>
        <Li>Si une double réservation se produit malgré tout, qui est prévenu et quelle est la marche à suivre ?</Li>
      </Ul>
      <P>Une bonne réponse est honnête sur les délais. Méfiez-vous de qui qualifie un flux iCal de « temps réel ».</P>

      <H2>Partir : contrat, données et nom de domaine</H2>
      <P>La facilité avec laquelle on peut partir en dit long sur l'offre.</P>
      <H3>Le contrat</H3>
      <P>
        Demandez la durée d'engagement, le préavis, s'il y a reconduction tacite, des frais de résiliation, et si les prix
        peuvent évoluer en cours de contrat. Une bonne réponse : engagement mensuel ou annuel, préavis court, pas de frais de
        sortie, et des hausses annoncées à l'avance.
      </P>
      <H3>L'export des données</H3>
      <P>
        Pouvez-vous exporter vous-même vos réservations et votre liste de clients, à tout moment, sans passer par le support ?
        Dans quel format ? Un fichier tableur (CSV) est le minimum utile. Vérifiez que l'export comprend les réservations à
        venir et les acomptes déjà encaissés. Demandez aussi combien de temps vos données sont gardées après votre départ, et
        si elles sont supprimées sur demande : la Commission rappelle que le contrat de sous-traitance doit préciser ce
        qu'il advient des données à la fin du contrat.
      </P>
      <H3>Nom de domaine et site</H3>
      <P>
        La page de réservation est-elle sur votre domaine ou sur une adresse du prestataire ? Qui a enregistré votre
        domaine, et à quel nom ? Si le prestataire a réalisé votre site, le gardez-vous en partant ? Les pages et les liens
        sur votre domaine construisent votre référencement ; sur le domaine d'un autre, ils construisent le sien, et ils
        cassent quand vous partez. Une bonne réponse : le domaine est à votre nom et la page de réservation vit
        sur votre site.
      </P>

      <H2>Ce que voit le client, et qui vous répond</H2>
      <Ul>
        <Li><B>Langues.</B> Chaque étape est-elle dans la langue du client, y compris les conditions et l'e-mail de confirmation ?</Li>
        <Li><B>Mobile.</B> Faites une réservation test sur votre propre téléphone, du début à la fin, avant de signer.</Li>
        <Li><B>Accessibilité.</B> Peut-on réserver au clavier seul et avec un lecteur d'écran ? Demandez s'ils testent selon les règles WCAG.</Li>
        <Li><B>Support.</B> Qui répond : une personne, un robot, un revendeur ? En quelle langue, quels jours, et avec quels délais en haute saison ?</Li>
      </Ul>

      <H2>La liste à emporter</H2>
      <P>Imprimez-la et gardez-la sous les yeux pendant le rendez-vous commercial.</P>
      <Ul>
        <Li>Commission ou frais fixes, et sur quoi : extras, TVA, taxe de séjour, annulations ?</Li>
        <Li>Mise en service, abonnement, frais liés au volume ; frais de carte compris ou non</Li>
        <Li>Mon propre compte de paiement ou celui du prestataire ; délais de versement</Li>
        <Li>Qui gère remboursements et contestations</Li>
        <Li>Contrat de sous-traitance des données ; aucun marketing auprès de mes clients</Li>
        <Li>Export en autonomie, format, et mes données après mon départ</Li>
        <Li>Durée, préavis, reconduction tacite, frais de sortie</Li>
        <Li>Méthode de synchronisation, fréquence, procédure en cas de double réservation</Li>
        <Li>Page de réservation sur mon domaine ; domaine et site à mon nom</Li>
        <Li>Langues, test sur mobile, accessibilité, support</Li>
      </Ul>

      <H2>Les réponses de Likwiid Direct</H2>
      <P>
        Voici nos propres réponses pour <A to="/fr/direct/">Likwiid Direct</A>. Direct ne prend pas de commission. Il s'intègre à votre site actuel, sur votre nom de domaine, ou
        nous construisons le site autour de lui. L'acompte payé par carte arrive sur votre propre compte de paiement, et votre
        liste de clients reste la vôtre. Depuis l'espace propriétaire, vous pouvez rechercher et exporter vos réservations.
        Vous choisissez entre le mode demande, où rien n'est débité et où vous confirmez à la main, et la réservation
        instantanée avec acompte par carte.
      </P>
      <P>
        La synchronisation des calendriers passe par iCal : elle n'est donc pas instantanée, les flux se mettent à jour à
        intervalles et le calendrier indique la dernière synchronisation. Direct n'est pas un channel manager, et c'est un produit
        récent : nos démos publiques mettent en scène des établissements fictifs. Si vous comparez encore la vente
        directe et les commissions des plateformes, notre guide sur{' '}
        <A to="/fr/guides/booking-com-commission-costs/">ce que coûte vraiment la commission des plateformes</A> fait le
        calcul. Et si vous voulez nous poser ces mêmes questions, <A to="/fr/contact/">écrivez-nous</A>.
      </P>
    </GuideLayout>
  )
}
