import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

const sources = [
  {
    label: 'Google Search Central : Déplacements et migrations de sites (consulté en octobre 2026)',
    href: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes',
  },
  {
    label: 'Google Search Central : Métadonnées des images dans Google Images (consulté en octobre 2026)',
    href: 'https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata',
  },
  {
    label: 'IPTC : Photo Metadata User Guide (consulté en octobre 2026)',
    href: 'https://www.iptc.org/std/photometadata/documentation/userguide/',
  },
  {
    label: 'web.dev : Learn Images, images responsives (consulté en octobre 2026)',
    href: 'https://web.dev/learn/images/responsive-images',
  },
]

export default function Guide() {
  return (
    <GuideLayout slug="photographer-portfolio-ownership" lang="fr" sources={sources}>
      <Summary>
        <Li>Sur une plateforme par abonnement, vos photos restent à vous, mais presque tout ce qui les entoure est loué : le design, les galeries, les outils clients et souvent l'adresse elle-même.</Li>
        <Li>Un site livré sous forme de fichiers, sur votre propre nom de domaine, vous suit partout. En contrepartie, les modifications et l'entretien sont à votre charge, ou à celle d'un prestataire.</Li>
        <Li>Déposez votre nom de domaine à votre nom dès le premier jour et gardez des adresses stables. Cela protège votre référencement plus que n'importe quel choix de plateforme.</Li>
        <Li>Comparez le coût sur plusieurs années, pas au mois, en reconnaissant ce qu'un abonnement inclut vraiment.</Li>
      </Summary>

      <H2>Ce qui vous appartient vraiment</H2>
      <P>
        Quelle que soit la solution, vos droits d'auteur sur vos photographies restent les vôtres. Une plateforme sérieuse ne
        prend que la licence nécessaire pour les afficher. La vraie question porte sur tout le reste : la mise en page que vos
        clients reconnaissent, l'organisation des galeries qui vous a pris des soirées, les textes qui vous amènent des
        demandes de devis, les sélections et commentaires de vos clients, et l'adresse que les gens ont mise en favori.
      </P>
      <P>
        <B>Sur une plateforme par abonnement</B>, tout cela vit dans le logiciel de la plateforme. Vous en profitez tant que
        vous payez. Si vous arrêtez, ou si la plateforme change ses formules, retire une fonction ou ferme, il vous reste vos
        fichiers images et ce que vous aurez pu exporter. Le reste est à refaire.
      </P>
      <P>
        <B>Avec un site livré sous forme de fichiers</B>, les pages, les styles, le code des galeries et les textes vous sont
        remis. Vous les placez chez l'hébergeur de votre choix, sous votre nom de domaine. Si vous changez d'hébergeur, vous
        copiez les fichiers. Rien ne cesse de fonctionner parce qu'un contrat a pris fin.
      </P>

      <Table
        caption="Qui détient quoi"
        head={['', 'Plateforme par abonnement', 'Fichiers sur votre domaine']}
        rows={[
          ["Photos et droits d'auteur", 'À vous', 'À vous'],
          ['Design et code des galeries', 'Loués tant que vous payez', 'À vous'],
          ['Hébergement web', 'Inclus', 'Votre propre compte, choisi par vous'],
          ['Mises à jour et assistance', 'Incluses', 'À votre charge, ou payées au besoin'],
          ['Partir', 'Vous exportez ce que la plateforme permet', 'Vous copiez les fichiers ailleurs'],
        ]}
      />

      <H2>Portabilité : ce que vous emportez</H2>
      <P>
        Avant de vous engager, testez la sortie. Beaucoup de photographes découvrent ce qui ne s'exporte pas le jour où ils
        veulent partir. Demandez, ou vérifiez avec un compte d'essai, si vous pouvez récupérer :
      </P>
      <Ul>
        <Li>Vos galeries dans leur ordre d'origine, avec titres et légendes, et pas seulement un dossier d'images en vrac.</Li>
        <Li>Les galeries clients, avec les photos choisies par chaque client et les notes qu'il a laissées.</Li>
        <Li>Les textes de vos pages, vos articles de blog et leurs dates de publication.</Li>
        <Li>La liste de toutes les adresses de pages, pour pouvoir les rediriger plus tard.</Li>
        <Li>Les messages du formulaire de contact et les commandes de tirages, si la plateforme les conserve.</Li>
      </Ul>
      <P>
        Les sélections clients méritent une attention particulière. Pour un photographe de mariage, la liste des images que
        les mariés ont retenues pour l'album est une donnée de travail. Si elle n'existe que dans une plateforme, gardez-en une
        copie ailleurs.
      </P>

      <H2>Votre nom de domaine et vos adresses</H2>
      <P>
        La décision la plus utile est de posséder votre nom de domaine dès le départ, déposé à votre nom, chez un registraire
        auquel vous vous connectez vous-même. Si votre portfolio vit sur un sous-domaine de la plateforme, chaque lien que vous
        ont donné un magazine, un lieu de réception ou un client ravi pointe vers une adresse que vous ne maîtrisez pas. Si
        vous déménagez, ces liens cassent.
      </P>
      <P>
        Avec votre propre domaine, vous pouvez changer le logiciel derrière sans changer l'adresse. Il reste alors à garder
        stable l'adresse de chaque page. Si celle d'une galerie doit changer, mettez en place une redirection permanente de
        l'ancienne vers la nouvelle. Les recommandations de Google sur les déplacements de site conseillent des redirections
        permanentes côté serveur, de les conserver au moins un an et de s'attendre à des fluctuations temporaires du
        classement pendant la migration.
      </P>
      <Note title="Un réflexe simple">
        <p>
          Avant toute refonte ou tout déménagement, exportez la liste de vos adresses actuelles. Ensuite, ouvrez-les une par
          une et vérifiez qu'elles mènent à la bonne page, et non à l'accueil.
        </p>
      </Note>

      <H2>Le coût sur plusieurs années</H2>
      <P>
        Comparer une mensualité et un paiement unique est trompeur : les deux n'achètent pas la même chose, ni sur la même
        durée. Faites le calcul pour les deux options sur le nombre d'années pendant lesquelles vous comptez garder le site.
      </P>
      <P>
        <B>Un abonnement</B> est une dépense récurrente qui s'additionne chaque année et qui a tendance à augmenter avec le
        temps. En échange, il comprend l'hébergement, les mises à jour de sécurité, les nouvelles fonctions et l'assistance.
        Si vous débutez, si vous ne voulez aucune responsabilité technique ou si votre activité évolue souvent, c'est un choix
        raisonnable qui a une vraie valeur.
      </P>
      <P>
        <B>Un site payé une fois</B> demande un investissement de départ plus important, puis des frais modestes :
        l'hébergement (souvent gratuit ou presque pour un site livré sous forme de fichiers) et le renouvellement annuel du nom
        de domaine. Soyez juste dans la comparaison : les évolutions futures ont aussi un coût. Une nouvelle rubrique, une
        fonction ou une refonte, c'est un développeur à payer ou du temps à y consacrer. Plus vous gardez le site longtemps
        sans gros changements, plus le paiement unique tend à être rentable. Likwiid prépare un simulateur de coûts simple pour
        vous aider à faire cette comparaison.
      </P>

      <H2>Épreuvage client, vente de tirages et réservations</H2>
      <P>
        Ce sont souvent ces fonctions qui font pencher la balance. Vérifiez-les en détail, quelle que soit la voie choisie :
      </P>
      <Ul>
        <Li><B>Épreuvage :</B> une galerie privée par client, le choix des favorites, des notes sur les photos et une limite qui respecte le nombre d'images prévues dans la formule.</Li>
        <Li><B>Vente de tirages :</B> qui fixe les formats et les prix, et si les paiements arrivent directement sur votre propre compte de paiement ou transitent d'abord par un tiers.</Li>
        <Li><B>Réservations :</B> si le client peut voir vos disponibilités et réserver depuis votre site, sans être renvoyé vers une autre adresse.</Li>
      </Ul>
      <P>
        Avec un abonnement, demandez si elles sont comprises dans votre formule ou réservées à une formule supérieure. Avec un
        site payé une fois, demandez si elles font partie de la livraison ou d'un travail supplémentaire plus tard.
      </P>

      <H2>Qualité d'image, rapidité et droits d'auteur</H2>
      <P>
        Un portfolio se juge en quelques secondes, souvent sur smartphone. Mettre en ligne des exports en pleine résolution et
        laisser le navigateur les réduire ralentit les pages. Une bonne solution génère plusieurs tailles de chaque photo et
        laisse le navigateur choisir celle qui convient à l'écran, dans des formats modernes comme WebP ou AVIF, comme
        l'explique le cours de web.dev sur les images responsives.
      </P>
      <P>
        Regardez aussi ce que deviennent vos métadonnées. La mention de copyright, l'auteur et la ligne de crédit sont stockés
        dans le fichier selon la norme IPTC, et Google Images peut les afficher à côté de la photo. L'IPTC indique que les
        informations de droits ne devraient jamais être retirées des fichiers. Certains systèmes suppriment toutes les
        métadonnées pour alléger les images : envoyez une photo test et inspectez la version redimensionnée que le site sert
        réellement.
      </P>

      <H2>La liste de contrôle avant de choisir</H2>
      <Ul>
        <Li>Le nom de domaine est-il à mon nom, et puis-je le transférer sans demander l'accord de personne ?</Li>
        <Li>Puis-je exporter dès aujourd'hui mes galeries, les sélections clients, mes textes et la liste des adresses ?</Li>
        <Li>Sur les années où je compte garder ce site, combien vais-je payer au total, évolutions probables comprises ?</Li>
        <Li>Qui s'occupe des mises à jour et des pannes, et en combien de temps ai-je besoin d'une réponse ?</Li>
        <Li>L'épreuvage, la vente de tirages et la réservation correspondent-ils à la façon dont mes clients achètent ?</Li>
        <Li>Les photos sont-elles servies à la bonne taille, dans des formats modernes, avec les mentions de copyright intactes ?</Li>
        <Li>Le site est-il disponible dans les langues de mes clients ?</Li>
      </Ul>
      <P>
        Si la plupart des réponses penchent vers le confort et peu d'entretien, un abonnement vous conviendra. Si elles
        penchent vers la maîtrise, la durée et une adresse stable, posséder vos fichiers mérite d'être sérieusement envisagé.
      </P>

      <H2>La place de Likwiid Frame</H2>
      <P>
        <A to="/fr/frame/">Likwiid Frame</A> est notre moteur de portfolio pour photographes. Il est livré sous forme de
        fichiers qui vous appartiennent, sur votre propre nom de domaine, payé une fois, sans abonnement ni commission. Il
        comprend l'épreuvage client, une boutique de tirages reliée à votre propre compte de paiement, la réservation via un
        calendrier Likwiid Direct intégré, des pages en plusieurs langues et des photos servies à la bonne taille avec les
        informations de copyright conservées. Pour réfléchir ensemble à la voie qui convient à votre activité,{' '}
        <A to="/fr/contact/">contactez-nous</A>.
      </P>
    </GuideLayout>
  )
}
