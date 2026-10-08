import type { DirectMarketContent } from '../types'

const fr: DirectMarketContent = {
  market: 'chambres-d-hotes',
  lang: 'fr',
  docTitle: 'Réservation directe pour chambres d\'hôtes et gîtes | Likwiid',
  description:
    'Réservation sans commission sur le site de vos chambres d\'hôtes ou de votre gîte : acompte ou demande, table d\'hôtes en option, calendrier synchronisé.',
  crumb: 'Chambres d\'hôtes et gîtes',
  eyebrow: 'Likwiid Direct pour chambres d\'hôtes et gîtes',
  h1: 'La réservation directe pour vos chambres d\'hôtes et votre gîte, sans commission.',
  intro: [
    'Beaucoup de chambres d\'hôtes ont un site soigné, des photos de la maison et du jardin, et au bout du parcours un simple formulaire de contact. Le client qui voulait réserver tout de suite repart sur une plateforme, et c\'est elle qui prélève sa commission sur la nuit.',
    'Likwiid Direct ajoute la réservation au site que vous avez déjà. Le client choisit ses dates et sa chambre, ajoute la table d\'hôtes ou un panier pique-nique, voit le total, puis verse un acompte par carte ou vous envoie une demande. La réservation arrive chez vous, sans commission.',
  ],
  demo: 'quinta-likwiid',
  ctaDemo: 'Essayer la démo en ligne',
  ctaTalk: 'Parlons-en',
  demoNote:
    'Quinta Likwiid est une maison d\'hôtes fictive dans la vallée du Douro. Elle existe pour que vous puissiez parcourir le moteur exact que nous construirions pour vous. La démo est en portugais, anglais et espagnol, le paiement est simulé et aucun montant n\'est débité.',
  sections: [
    {
      kind: 'points',
      id: 'today',
      title: 'Ce qui vous fait perdre des réservations',
      items: [
        'Un formulaire de contact là où le client voulait un bouton « Réserver ».',
        'Des échanges de mails pour savoir si la chambre bleue est libre le week-end de l\'Ascension.',
        'Un acompte par chèque ou par virement à attendre, puis à rapprocher du bon client.',
        'Une commission prélevée sur chaque nuit, même pour les clients qui reviennent chaque année.',
      ],
    },
    {
      kind: 'cards',
      id: 'handles',
      title: 'Ce que Likwiid Direct gère pour vous',
      items: [
        { title: 'Chambres et gîte dans un même calendrier', desc: 'Chaque chambre et le gîte ont leur prix, leur capacité et leurs propres règles, comme un minimum de nuits plus long pour le gîte que pour les chambres.' },
        { title: 'La table d\'hôtes en option', desc: 'Le dîner, le panier pique-nique ou un transfert depuis la gare, par personne, par nuit ou par séjour, avec le total qui se met à jour.' },
        { title: 'L\'acompte par carte', desc: 'Le même acompte que vous demandez aujourd\'hui par chèque ou virement, encaissé au moment où le client se décide. Le solde reste payable sur place.' },
        { title: 'Le mode demande', desc: 'Si vous préférez échanger avec chaque client avant d\'accepter : la demande arrive avec les dates, le nombre de personnes et les options, et vous acceptez, proposez une autre date ou refusez.' },
        { title: 'Un calendrier synchronisé', desc: 'Il importe les dates occupées de toute plateforme qui exporte un flux iCal et exporte les siennes. Ce n\'est pas instantané, et le calendrier affiche sa dernière synchronisation.' },
        { title: 'Vos conditions, acceptées d\'abord', desc: 'Conditions d\'annulation, heure d\'arrivée, animaux : tout figure à la dernière étape, et personne ne réserve sans cocher qu\'il les a lues.' },
      ],
    },
    {
      kind: 'steps',
      id: 'flow',
      title: 'Le déroulé d\'une réservation directe',
      items: [
        { title: 'Dates et chambre', desc: 'Le client ne voit que les chambres libres qui respectent vos règles.' },
        { title: 'Options', desc: 'Table d\'hôtes, panier ou transfert, avec le total toujours sous les yeux.' },
        { title: 'Coordonnées et conditions', desc: 'Nom et coordonnées, sans compte à créer, et vos conditions acceptées avant de continuer.' },
        { title: 'Acompte ou demande', desc: 'Un acompte par carte confirme le séjour. En mode demande, rien n\'est réservé tant que vous n\'avez pas confirmé.' },
      ],
    },
    {
      kind: 'panel',
      id: 'local',
      title: 'Ce que la réglementation demande, et où le site aide',
      paragraphs: [
        'Au sens du Code du tourisme, les chambres d\'hôtes, c\'est au plus cinq chambres et quinze personnes, chez l\'habitant, nuitée et petit-déjeuner compris, et l\'activité se déclare en mairie. Un gîte loué à part relève en général des meublés de tourisme, avec ses propres démarches auprès de la commune. S\'il a un numéro d\'enregistrement, ce numéro doit figurer dans vos annonces, votre site compris, et nous vérifions qu\'il est visible lorsque nous installons le moteur.',
        'La taxe de séjour est décidée par la commune ou l\'intercommunalité. C\'est vous qui la collectez auprès des clients et la reversez, et vous pouvez l\'expliquer dans les conditions que le client accepte avant de réserver.',
        'Un client étranger remplit et signe à son arrivée une fiche individuelle de police, que vous conservez. Likwiid Direct garde le nom et les coordonnées de chaque réservation, mais ne remplace pas cette fiche.',
      ],
      note: 'Ceci est un résumé, pas un conseil juridique. Les règles changent et varient d\'une commune à l\'autre : vérifiez auprès de votre mairie.',
    },
  ],
  faqTitle: 'Les questions des propriétaires',
  faq: [
    {
      q: 'Puis-je garder mes annonces sur les plateformes ?',
      a: 'Oui. Likwiid Direct importe en iCal les dates occupées sur les plateformes et exporte les siennes, pour qu\'une réservation directe ferme la date ailleurs. La synchronisation n\'est pas instantanée, vous pouvez donc laisser des jours libres de marge.',
    },
    {
      q: 'Le gîte et les chambres peuvent-ils avoir des règles différentes ?',
      a: 'Oui. Chaque logement a ses propres règles, qui priment sur celles de la maison : un minimum de nuits pour le gîte, un autre pour les chambres, et des prix par saison pour chacun.',
    },
    {
      q: 'Le parcours de réservation est-il en français ?',
      a: 'Oui. Chaque étape, chaque libellé et chaque prix s\'affichent en français, et le client peut aussi réserver en anglais, en espagnol ou en portugais.',
    },
    {
      q: 'Prenez-vous une commission sur les réservations ?',
      a: 'Non. Aucune commission sur aucune réservation. Parlez-nous de votre maison et nous vous expliquons ce que demande la mise en place.',
    },
  ],
  closingTitle: 'Parlez-nous de votre maison',
  closingBody:
    'Combien de chambres, un gîte ou non, où vous êtes présent aujourd\'hui et comment vous encaissez l\'acompte. Nous répondons sous 24 heures avec la façon dont Likwiid Direct s\'intégrerait, et ce qu\'il ne ferait pas.',
  directCrumb: 'Likwiid Direct',
  backToDirect: 'Tout ce que fait Likwiid Direct',
  breadcrumbLabel: 'Fil d\'Ariane',
}

export default fr
