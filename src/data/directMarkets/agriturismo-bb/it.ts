import type { DirectMarketContent } from '../types'

const it: DirectMarketContent = {
  market: 'agriturismo-bb',
  lang: 'it',
  docTitle: 'Prenotazioni dirette per agriturismi e B&B | Likwiid',
  description:
    'Prenotazioni senza commissioni sul sito del tuo agriturismo o B&B: camere, degustazioni e cene come extra, caparra o richiesta, calendario sincronizzato.',
  crumb: 'Agriturismi e B&B',
  eyebrow: 'Likwiid Direct per agriturismi e B&B',
  h1: 'Prenotazioni dirette per agriturismi e B&B, con quello che offre l\'azienda.',
  intro: [
    'Un agriturismo non vende solo notti. Vende la cena con i prodotti dell\'azienda, la degustazione in cantina, la visita all\'uliveto. Un B&B vende la colazione fatta in casa e qualcuno che ti accoglie. Sui grandi portali tutto questo diventa una riga in fondo all\'annuncio, e su ogni notte si paga una commissione.',
    'Likwiid Direct mette la prenotazione sul sito che hai già. L\'ospite sceglie le date e la camera, aggiunge la cena o la degustazione e vede il totale aggiornarsi, poi versa una caparra con carta o ti invia una richiesta. Le prenotazioni arrivano a te, senza commissione.',
  ],
  demo: 'quinta-likwiid',
  ctaDemo: 'Prova la demo dal vivo',
  ctaTalk: 'Parla con noi',
  demoNote:
    'Quinta Likwiid è una guesthouse di fantasia nella valle del Douro, con camere, degustazione di vini e cesto per la colazione come extra. La demo è in portoghese, inglese e spagnolo, il pagamento è simulato e non viene addebitato nulla.',
  sections: [
    {
      kind: 'cards',
      id: 'handles',
      title: 'Cosa gestisce Likwiid Direct per un agriturismo o un B&B',
      items: [
        { title: 'Le esperienze dell\'azienda come extra', desc: 'Cena, degustazione, corso di cucina o cesto di prodotti, a persona, a notte o a soggiorno. L\'ospite li spunta e vede subito totale e caparra.' },
        { title: 'Camere e appartamenti', desc: 'Ogni camera o appartamento ha il suo calendario, il suo prezzo e il suo numero di posti, con prezzi stagionali per vendemmia, agosto o i ponti.' },
        { title: 'Le tue regole prima della prenotazione', desc: 'Soggiorno minimo per camera, il preavviso che ti serve, giorni liberi tra un soggiorno e l\'altro e i periodi di chiusura.' },
        { title: 'Caparra con carta, saldo all\'arrivo', desc: 'La stessa caparra che oggi chiedi con bonifico, incassata nel momento in cui l\'ospite decide.' },
        { title: 'Calendario sincronizzato', desc: 'Importa le date occupate da qualsiasi portale che esporti un feed iCal ed esporta le tue. Non è istantaneo, e il calendario mostra l\'ultima sincronizzazione.' },
        { title: 'Modalità richiesta', desc: 'Per chi preferisce sentire prima ogni ospite: la richiesta arriva con date, persone ed extra, e tu confermi, proponi un\'altra data o rifiuti.' },
      ],
    },
    {
      kind: 'steps',
      id: 'flow',
      title: 'Come va una prenotazione diretta',
      items: [
        { title: 'Date e camera', desc: 'L\'ospite vede solo le camere libere che rispettano le tue regole.' },
        { title: 'Extra', desc: 'Cena in agriturismo, degustazione o transfer, con il totale sempre in vista.' },
        { title: 'Dati e condizioni', desc: 'Nome e contatti, senza creare un account, e le tue condizioni di cancellazione accettate prima di proseguire.' },
        { title: 'Caparra o richiesta', desc: 'Una caparra con carta conferma il soggiorno. In modalità richiesta, nulla è prenotato finché non confermi tu.' },
      ],
    },
    {
      kind: 'panel',
      id: 'local',
      title: 'Cosa chiede la normativa, e dove aiuta il sito',
      paragraphs: [
        'Le strutture ricettive, compresi B&B e agriturismi con alloggio, devono avere il CIN, il Codice Identificativo Nazionale, ed esporlo in ogni annuncio, ovunque sia pubblicato: anche sul sito della struttura. Quando installiamo il motore, controlliamo che il CIN si veda nelle pagine dove si prenota.',
        'I dati degli ospiti vanno comunicati alla Questura tramite il portale Alloggiati Web, entro 24 ore dall\'arrivo. Likwiid Direct conserva il nome e il contatto di ogni prenotazione, ma non fa questa comunicazione al posto tuo.',
        'L\'imposta di soggiorno, dove c\'è, la decide il comune, che ne fissa importi ed esenzioni; la struttura la riscuote e la versa. Puoi spiegarla nelle condizioni che l\'ospite accetta prima di prenotare.',
      ],
      note: 'È una sintesi, non una consulenza legale. Le regole cambiano e variano da regione a regione e da comune a comune: verifica con il tuo comune e con la tua regione.',
    },
  ],
  faqTitle: 'Le domande di agriturismi e B&B',
  faq: [
    {
      q: 'Il percorso di prenotazione è in italiano?',
      a: 'Non ancora. Oggi gli ospiti prenotano in inglese, francese, spagnolo, portoghese o polacco. Se ti serve in italiano, diccelo nel primo messaggio e ne parliamo.',
    },
    {
      q: 'Posso vendere la cena o la degustazione insieme al soggiorno?',
      a: 'Sì. Ogni esperienza è un extra con il suo prezzo, a persona, a notte o a soggiorno, e compare nel totale e nella caparra.',
    },
    {
      q: 'Posso restare sui portali dove sono presente?',
      a: 'Sì. Likwiid Direct importa via iCal le date occupate sui portali ed esporta le sue, così una prenotazione diretta chiude la data altrove. La sincronizzazione non è istantanea, quindi puoi lasciare giorni liberi di margine.',
    },
    {
      q: 'Prendete una commissione sulle prenotazioni?',
      a: 'No. Nessuna commissione su nessuna prenotazione. Raccontaci della tua struttura e ti spieghiamo cosa comporta metterla in funzione.',
    },
  ],
  closingTitle: 'Raccontaci della tua struttura',
  closingBody:
    'Quante camere hai, cosa offre l\'azienda oltre al soggiorno e dove sei presente oggi. Ti rispondiamo entro 24 ore con come si inserirebbe Likwiid Direct, e con ciò che non farebbe.',
  directCrumb: 'Likwiid Direct',
  backToDirect: 'Tutto ciò che fa Likwiid Direct',
  breadcrumbLabel: 'Percorso di navigazione',
}

export default it
