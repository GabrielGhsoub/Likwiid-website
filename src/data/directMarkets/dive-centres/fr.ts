import type { DirectMarketContent } from '../types'

const fr: DirectMarketContent = {
  market: 'dive-centres',
  lang: 'fr',
  docTitle: 'Réservation pour centres de plongée sans commission | Likwiid',
  description:
    'Plongées et formations réservées sur votre site : places par sortie, formations sur plusieurs jours, location de matériel et cartes de niveau demandées.',
  crumb: 'Centres de plongée',
  eyebrow: 'Likwiid Direct pour les centres de plongée',
  h1: 'Plongées et formations réservées, avec les papiers en ordre avant le départ du bateau.',
  intro: [
    'Une réservation de plongée, ce n\'est jamais seulement une date. Il vous faut le niveau du plongeur, le matériel qu\'il veut louer et parfois un certificat médical, et vous les récupérez souvent par email, une question après l\'autre, ou au comptoir le matin de la sortie.',
    'Likwiid Direct prend les réservations de plongées, de baptêmes et de formations sur le site de votre centre. Il tient un nombre de places par sortie et par formation, demande les documents qu\'exige chaque activité et vous envoie chaque réservation directement, sans passer par une plateforme qui prélève sa part.',
  ],
  demo: 'escuela-likwiid',
  ctaDemo: 'Essayer la démo la plus proche',
  ctaTalk: 'Parlons-en',
  demoNote:
    'Il n\'existe pas encore de démo plongée. La plus proche est Escuela Likwiid, une école nautique fictive, en espagnol et en anglais, avec des formations sur plusieurs jours, des places par session et une étape de documents. Les fichiers restent dans votre navigateur et le paiement est simulé.',
  sections: [
    {
      kind: 'points',
      id: 'today',
      title: 'Là où les réservations de plongée déraillent',
      items: [
        'Un plongeur réserve une plongée plus profonde que ne le permet son niveau, et vous le découvrez au comptoir.',
        'Les besoins en matériel arrivent le matin de la plongée, ou pas du tout.',
        'Une formation sur trois jours est réservée comme une plongée isolée, et les dates se perdent dans les messages.',
        'Le vent annule la sortie bateau et il faut rembourser ou décaler chaque plongeur à la main.',
        'Les plateformes de réservation prélèvent une commission sur chaque plongée et chaque formation.',
      ],
    },
    {
      kind: 'steps',
      id: 'flow',
      title: 'Le déroulé d\'une réservation',
      items: [
        { title: 'Choisir l\'activité', desc: 'Une plongée, un baptême ou une formation, chacun avec ses dates, ses horaires et ses places.' },
        { title: 'Choisir la date', desc: 'Les plongées affichent leur heure de départ. Les formations affichent leurs sessions, avec tous les jours inclus.' },
        { title: 'Ajouter le matériel', desc: 'Équipement complet, combinaison ou lampe, par plongeur ou par réservation, pour savoir quoi préparer.' },
        { title: 'Déposer les documents', desc: 'La carte de niveau ou le certificat médical que demande l\'activité, avec la durée pendant laquelle ils sont conservés.' },
        { title: 'Acompte ou demande', desc: 'Un acompte par carte bloque la place, ou la réservation reste une demande jusqu\'à ce que vous l\'ayez vérifiée et confirmée.' },
      ],
    },
    {
      kind: 'cards',
      id: 'handles',
      title: 'Ce que Likwiid Direct gère pour un centre de plongée',
      items: [
        { title: 'Des places par sortie et par formation', desc: 'Chaque sortie bateau et chaque formation a son nombre de places. Le plongeur voit combien il en reste et s\'inscrit sur liste d\'attente quand c\'est complet.' },
        { title: 'Une formation sur plusieurs jours, réservée une fois', desc: 'Une formation sur trois jours est une seule réservation qui porte les trois dates, pas trois plongées réservées séparément.' },
        { title: 'Les documents avant la plongée', desc: 'Chaque activité indique les documents dont elle a besoin. Le plongeur les dépose en réservant, et vous marquez chacun comme reçu ou vérifié dans votre espace.' },
        { title: 'La location de matériel en option', desc: 'Le matériel loué entre dans la réservation avec son prix, par plongeur ou par réservation, et compte dans le total et l\'acompte.' },
        { title: 'Les annulations météo en avoirs', desc: 'Vous annulez une sortie depuis votre espace et les plongeurs inscrits reçoivent un avoir pour une autre date, au lieu de remboursements à courir un par un.' },
        { title: 'Le point de rendez-vous dans la confirmation', desc: 'La confirmation indique où se retrouver, avec un lien vers la carte, et peut renvoyer vers une vidéo de briefing.' },
      ],
    },
    {
      kind: 'panel',
      id: 'limits',
      title: 'Ce qu\'il ne décide pas à votre place',
      paragraphs: [
        'Likwiid Direct ne vérifie pas un niveau dans les registres d\'un organisme de formation et ne juge pas si quelqu\'un est apte à plonger. Il recueille la carte de niveau et le certificat et vous les met sous les yeux avant le jour J.',
        'Pour les plongées qui demandent plus d\'attention, passez en mode demande : le plongeur envoie sa réservation avec ses documents, vous les vérifiez, et vous confirmez seulement ensuite. La décision reste la vôtre et celle de vos moniteurs.',
      ],
    },
  ],
  faqTitle: 'Les questions des centres de plongée',
  faq: [
    {
      q: 'Vérifie-t-il automatiquement le niveau du plongeur ?',
      a: 'Non. Il demande la carte de niveau que requiert chaque activité et vous la montre avec la réservation. C\'est vous ou vos moniteurs qui décidez, et le mode demande vous permet de ne confirmer qu\'après l\'avoir vue.',
    },
    {
      q: 'Peut-on réserver une formation sur plusieurs jours ?',
      a: 'Oui. Une formation se configure en sessions qui peuvent s\'étaler sur plusieurs jours, et chaque session est une seule réservation avec toutes ses dates et son propre nombre de places.',
    },
    {
      q: 'Que se passe-t-il quand la météo annule une sortie ?',
      a: 'Vous annulez la sortie depuis votre espace propriétaire et les plongeurs inscrits reçoivent un avoir à utiliser à une autre date, sans remboursements à gérer à la main.',
    },
    {
      q: 'Combien de temps les documents sont-ils conservés ?',
      a: 'C\'est vous qui fixez combien de jours après l\'activité ils sont supprimés, et l\'étape de dépôt l\'indique au plongeur avant qu\'il n\'envoie quoi que ce soit.',
    },
    {
      q: 'Prenez-vous une commission sur les réservations ?',
      a: 'Non. Aucune commission sur aucune plongée ni aucune formation. Parlez-nous de votre centre et nous vous expliquons ce que demande la mise en place.',
    },
  ],
  closingTitle: 'Racontez-nous comment votre centre réserve aujourd\'hui',
  closingBody:
    'Envoyez-nous vos sorties, vos formations et ce que vous demandez aux plongeurs avant leur venue. Nous répondons sous 24 heures avec la façon dont Likwiid Direct s\'intégrerait, et ce qu\'il ne ferait pas.',
  directCrumb: 'Likwiid Direct',
  backToDirect: 'Tout ce que fait Likwiid Direct',
  breadcrumbLabel: 'Fil d\'Ariane',
}

export default fr
