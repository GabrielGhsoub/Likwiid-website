import type { DirectMarketContent } from '../types'

const fr: DirectMarketContent = {
  market: 'padel-clubs',
  lang: 'fr',
  docTitle: 'Réservation de terrains de padel sans commission | Likwiid',
  description:
    'Réservation des terrains sur le site de votre club : créneaux par terrain, liste d\'attente aux heures pleines, règles de délai et d\'annulation. Sans commission.',
  crumb: 'Clubs de padel',
  eyebrow: 'Likwiid Direct pour les clubs de padel',
  h1: 'La réservation des terrains de padel, sur le site de votre club.',
  intro: [
    'Beaucoup de clubs prennent encore les réservations par WhatsApp et dans un tableur partagé, ou passent par une application tierce qui garde la relation avec le joueur et prélève une part de chaque réservation.',
    'Likwiid Direct installe la réservation des terrains sur le site que vous avez déjà. Le joueur choisit un créneau et un terrain, voit le prix et réserve en quelques gestes. Vous fixez les terrains, les horaires et les règles, et chaque réservation arrive directement chez vous.',
  ],
  demo: 'atelier-likwiid',
  ctaDemo: 'Essayer la démo la plus proche',
  ctaTalk: 'Parlons-en',
  demoNote:
    'Il n\'existe pas encore de démo padel. La plus proche est Atelier Likwiid, un atelier fictif qui réserve des séances par créneau, avec les places restantes et une liste d\'attente. Le paiement est simulé et aucun montant n\'est débité.',
  sections: [
    {
      kind: 'points',
      id: 'today',
      title: 'Ce qui coince aujourd\'hui',
      items: [
        'Des demandes de réservation éparpillées entre WhatsApp, Instagram et le téléphone, traitées entre deux matchs.',
        'Le terrain de 19 h réservé deux fois parce que deux personnes ont modifié le même tableur.',
        'Des annulations de dernière minute aux heures pleines, qui laissent un terrain vide et non payé.',
        'Des applications intermédiaires qui prélèvent une part de chaque réservation et gardent le contact du joueur.',
      ],
    },
    {
      kind: 'steps',
      id: 'flow',
      title: 'Le déroulé d\'une réservation',
      items: [
        { title: 'Choisir le jour et l\'heure', desc: 'Le joueur voit les créneaux libres de la journée. Quand tous les terrains sont pris, le créneau s\'affiche complet.' },
        { title: 'Choisir le terrain', desc: 'Intérieur ou extérieur, court central ou latéral : chaque terrain apparaît à part, avec son propre prix.' },
        { title: 'Ajouter ce qu\'il faut', desc: 'Location de raquette ou un tube de balles, par joueur ou par réservation, ajoutés d\'un clic.' },
        { title: 'Confirmer ou envoyer une demande', desc: 'Un acompte par carte confirme le terrain sur le moment. En mode demande, la réservation attend votre accord.' },
      ],
    },
    {
      kind: 'cards',
      id: 'handles',
      title: 'Ce que Likwiid Direct gère pour un club',
      items: [
        { title: 'Terrains et créneaux', desc: 'Chaque terrain a ses créneaux et son prix. Un créneau ne s\'affiche complet que lorsque tous les terrains sont réservés.' },
        { title: 'Une liste d\'attente aux heures pleines', desc: 'Quand tout est pris, le joueur s\'inscrit sur la liste d\'attente au lieu de vous écrire. Rien n\'est débité, et vous proposez la place depuis votre espace quand elle se libère.' },
        { title: 'Des annulations encadrées', desc: 'Vous fixez le délai de prévenance. Annulé assez tôt, l\'acompte devient un avoir pour une autre réservation ; annulé trop tard, il reste au club.' },
        { title: 'Délais et fermetures', desc: 'Le délai minimum avant une réservation et les dates fermées pour les congés, les travaux ou un week-end de tournoi.' },
        { title: 'Vos conditions, acceptées d\'abord', desc: 'Vos conditions d\'annulation et de paiement figurent à la dernière étape, et personne ne réserve sans cocher qu\'il les a lues.' },
        { title: 'Un espace pour l\'accueil', desc: 'Des réservations à rechercher et exporter, des demandes à accepter ou refuser et un calendrier où vous bloquez des dates en un clic.' },
      ],
    },
    {
      kind: 'proof',
      id: 'proof',
      title: 'Nous avons déjà construit la réservation de padel',
      body: 'Pour un client au Liban, nous avons construit une plateforme de padel complète : les joueurs réservent des terrains, trouvent des matchs à leur niveau et jouent en ligue, et les organisateurs pilotent tout depuis un portail web. Elle est publiée sur l\'App Store et Google Play. Likwiid Direct en est la version légère : la réservation des terrains sur votre propre site, sans application à télécharger.',
      linkLabel: 'Voir l\'étude de cas de réservation de padel',
      to: '/work/padel-booking',
    },
  ],
  faqTitle: 'Les questions des clubs',
  faq: [
    {
      q: 'Les joueurs doivent-ils télécharger une application ou créer un compte ?',
      a: 'Non. Ils réservent sur le site du club, depuis le navigateur de n\'importe quel téléphone, avec seulement leur nom et leurs coordonnées. Aucun compte à créer.',
    },
    {
      q: 'Pouvons-nous garder notre site actuel ?',
      a: 'Oui. Likwiid Direct s\'intègre au site que vous avez déjà avec une balise script et une div, sous WordPress, Wix ou codé à la main. S\'il vous faut aussi un nouveau site, nous le réalisons.',
    },
    {
      q: 'Les joueurs peuvent-ils payer en réservant ?',
      a: 'C\'est vous qui choisissez. Un acompte par carte confirme le terrain au moment de la réservation, ou le mode demande permet au joueur de demander un terrain sans payer pendant que vous confirmez chaque demande. Vous passez de l\'un à l\'autre depuis votre espace propriétaire.',
    },
    {
      q: 'Gère-t-il les ligues et la recherche de partenaires ?',
      a: 'Non. Likwiid Direct sert à réserver des terrains. Les ligues et la recherche de joueurs du même niveau, c\'est ce que nous avons construit dans la plateforme de padel ci-dessus : un projet à part, dont nous parlons volontiers.',
    },
    {
      q: 'Prenez-vous une commission sur les réservations ?',
      a: 'Non. Aucune commission sur aucune réservation. Parlez-nous de votre club et nous vous expliquons ce que demande la mise en place.',
    },
  ],
  closingTitle: 'Racontez-nous comment votre club réserve aujourd\'hui',
  closingBody:
    'Envoyez-nous vos terrains, vos horaires et la façon dont les joueurs réservent aujourd\'hui. Nous répondons sous 24 heures avec la façon dont Likwiid Direct s\'intégrerait, et ce qu\'il ne ferait pas.',
  directCrumb: 'Likwiid Direct',
  backToDirect: 'Tout ce que fait Likwiid Direct',
  breadcrumbLabel: 'Fil d\'Ariane',
}

export default fr
