import type { DirectMarketContent } from '../types'

const it: DirectMarketContent = {
  market: 'dive-centres',
  lang: 'it',
  docTitle: 'Prenotazioni per diving center senza commissioni | Likwiid',
  description:
    'Prenotazioni di immersioni e corsi sul sito del tuo diving: posti per uscita, corsi su più giorni, noleggio attrezzatura e brevetti raccolti in anticipo.',
  crumb: 'Diving center',
  eyebrow: 'Likwiid Direct per diving center',
  h1: 'Prenotazioni di immersioni e corsi, con le carte in regola prima che parta la barca.',
  intro: [
    'Una prenotazione di immersione non è mai solo una data. Ti servono il brevetto del subacqueo, l\'attrezzatura che vuole noleggiare e a volte un certificato medico, e di solito li raccogli via email, una domanda alla volta, o al banco la mattina dell\'uscita.',
    'Likwiid Direct riceve sul sito del tuo diving le prenotazioni di immersioni, battesimi e corsi. Tiene un numero di posti per uscita e per corso, chiede i documenti che ogni attività richiede e manda ogni prenotazione direttamente a te, senza passare da una piattaforma che trattiene una quota.',
  ],
  demo: 'escuela-likwiid',
  ctaDemo: 'Prova la demo più vicina',
  ctaTalk: 'Parla con noi',
  demoNote:
    'Non esiste ancora una demo per i diving. La più vicina è Escuela Likwiid, una scuola nautica di fantasia, in spagnolo e inglese, con corsi su più giorni, posti per sessione e un passaggio per i documenti. I file restano nel tuo browser e il pagamento è simulato.',
  sections: [
    {
      kind: 'points',
      id: 'today',
      title: 'Dove si inceppano le prenotazioni',
      items: [
        'Un subacqueo prenota un\'immersione più profonda di quanto consenta il suo brevetto, e lo scopri al banco.',
        'Le esigenze di attrezzatura arrivano la mattina dell\'immersione, o non arrivano affatto.',
        'Un corso di tre giorni viene prenotato come un\'immersione singola, e le date si perdono tra i messaggi.',
        'Il vento annulla l\'uscita in barca e ogni subacqueo va rimborsato o spostato a mano.',
        'Le piattaforme di prenotazione trattengono una commissione su ogni immersione e su ogni corso.',
      ],
    },
    {
      kind: 'steps',
      id: 'flow',
      title: 'Come va una prenotazione',
      items: [
        { title: 'Scegliere l\'attività', desc: 'Un\'immersione, un battesimo o un corso, ciascuno con le sue date, i suoi orari e i suoi posti.' },
        { title: 'Scegliere la data', desc: 'Le immersioni mostrano l\'orario di partenza. I corsi mostrano le sessioni, con tutti i giorni del corso inclusi.' },
        { title: 'Aggiungere l\'attrezzatura', desc: 'Attrezzatura completa, muta o torcia, a persona o a prenotazione, così sai cosa preparare.' },
        { title: 'Caricare i documenti', desc: 'Il brevetto o il certificato medico che l\'attività richiede, con l\'indicazione di quanto tempo vengono conservati.' },
        { title: 'Caparra o richiesta', desc: 'Una caparra con carta blocca il posto, oppure la prenotazione resta una richiesta finché non l\'hai controllata e confermata.' },
      ],
    },
    {
      kind: 'cards',
      id: 'handles',
      title: 'Cosa gestisce Likwiid Direct per un diving',
      items: [
        { title: 'Posti per uscita e per corso', desc: 'Ogni uscita in barca e ogni corso ha il suo numero di posti. Il subacqueo vede quanti ne restano e si iscrive alla lista d\'attesa quando è pieno.' },
        { title: 'Corsi su più giorni, prenotati una volta', desc: 'Un corso di tre giorni è un\'unica prenotazione con tutte e tre le date, non tre immersioni prenotate separatamente.' },
        { title: 'Documenti prima dell\'immersione', desc: 'Ogni attività indica i documenti che le servono. Il subacqueo li carica mentre prenota, e tu segni ciascuno come ricevuto o verificato nel pannello.' },
        { title: 'Noleggio attrezzatura come opzione', desc: 'L\'attrezzatura a noleggio entra nella prenotazione con il suo prezzo, a persona o a prenotazione, e conta nel totale e nella caparra.' },
        { title: 'Annullamenti per meteo in credito', desc: 'Annulli un\'uscita dal pannello e i subacquei iscritti ricevono un credito per un\'altra data, invece di rimborsi da inseguire uno per uno.' },
        { title: 'Il punto di ritrovo nella conferma', desc: 'La conferma dice dove trovarsi, con un link alla mappa, e può rimandare a un video di briefing.' },
      ],
    },
    {
      kind: 'panel',
      id: 'limits',
      title: 'Cosa non decide al posto tuo',
      paragraphs: [
        'Likwiid Direct non verifica un brevetto negli archivi di una didattica e non valuta se qualcuno è idoneo all\'immersione. Raccoglie il brevetto e il certificato e te li mette davanti prima del giorno.',
        'Per le immersioni che richiedono più attenzione usa la modalità richiesta: il subacqueo invia la prenotazione con i documenti, tu li controlli e solo allora confermi. La decisione resta a te e ai tuoi istruttori.',
      ],
    },
  ],
  faqTitle: 'Le domande dei diving',
  faq: [
    {
      q: 'Controlla in automatico il livello del brevetto?',
      a: 'No. Chiede il brevetto che serve per ogni attività e te lo mostra insieme alla prenotazione. Decidete tu o i tuoi istruttori, e la modalità richiesta ti permette di confermare solo dopo averlo visto.',
    },
    {
      q: 'Si può prenotare un corso su più giorni?',
      a: 'Sì. Un corso si imposta in sessioni che possono durare più giorni, e ogni sessione è un\'unica prenotazione con tutte le sue date e il suo numero di posti.',
    },
    {
      q: 'Cosa succede quando il meteo annulla un\'uscita?',
      a: 'Annulli l\'uscita dal pannello del proprietario e i subacquei iscritti ricevono un credito da usare in un\'altra data, senza rimborsi da gestire a mano.',
    },
    {
      q: 'Per quanto tempo vengono conservati i documenti?',
      a: 'Lo decidi tu: quanti giorni dopo l\'attività vengono cancellati. Il passaggio di caricamento lo dice al subacqueo prima che invii qualsiasi cosa.',
    },
    {
      q: 'Prendete una commissione sulle prenotazioni?',
      a: 'No. Nessuna commissione su nessuna immersione e su nessun corso. Raccontaci del tuo diving e ti spieghiamo cosa comporta metterlo in funzione.',
    },
  ],
  closingTitle: 'Raccontaci come prenota oggi il tuo diving',
  closingBody:
    'Mandaci le tue uscite, i tuoi corsi e cosa chiedi ai subacquei prima che arrivino. Ti rispondiamo entro 24 ore con come si inserirebbe Likwiid Direct, e con ciò che non farebbe.',
  directCrumb: 'Likwiid Direct',
  backToDirect: 'Tutto ciò che fa Likwiid Direct',
  breadcrumbLabel: 'Percorso di navigazione',
}

export default it
