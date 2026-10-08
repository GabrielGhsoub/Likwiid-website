import type { DirectMarketContent } from '../types'

const it: DirectMarketContent = {
  market: 'padel-clubs',
  lang: 'it',
  docTitle: 'Prenotazione campi da padel senza commissioni | Likwiid',
  description:
    'Prenotazioni dei campi sul sito del tuo circolo: orari per campo, lista d\'attesa per le ore di punta, regole di preavviso e di cancellazione. Senza commissioni.',
  crumb: 'Circoli di padel',
  eyebrow: 'Likwiid Direct per circoli di padel',
  h1: 'Prenotazione dei campi da padel sul sito del tuo circolo.',
  intro: [
    'Molti circoli raccolgono ancora le prenotazioni su WhatsApp e su un foglio condiviso, oppure tramite un\'app di terzi che si tiene il rapporto con il giocatore e trattiene una quota su ogni prenotazione.',
    'Likwiid Direct porta la prenotazione dei campi sul sito che hai già. Il giocatore sceglie orario e campo, vede quanto costa e prenota in pochi tocchi. Tu decidi campi, orari e regole, e ogni prenotazione arriva direttamente a te.',
  ],
  demo: 'atelier-likwiid',
  ctaDemo: 'Prova la demo più vicina',
  ctaTalk: 'Parla con noi',
  demoNote:
    'Non esiste ancora una demo per il padel. La più vicina è Atelier Likwiid, uno studio di fantasia che prenota sessioni a orario, con i posti rimasti e la lista d\'attesa. Il pagamento è simulato e non viene addebitato nulla.',
  sections: [
    {
      kind: 'points',
      id: 'today',
      title: 'Cosa complica le cose oggi',
      items: [
        'Richieste di prenotazione sparse tra WhatsApp, Instagram e telefonate, a cui si risponde tra una partita e l\'altra.',
        'Il campo delle 19:00 prenotato due volte perché due persone hanno modificato lo stesso foglio.',
        'Disdette all\'ultimo minuto nelle ore di punta, che lasciano un campo vuoto e non pagato.',
        'App intermediarie che trattengono una parte di ogni prenotazione e si tengono il contatto del giocatore.',
      ],
    },
    {
      kind: 'steps',
      id: 'flow',
      title: 'Come va una prenotazione',
      items: [
        { title: 'Scegliere giorno e orario', desc: 'Il giocatore vede gli orari liberi della giornata. Quando tutti i campi sono occupati, l\'orario risulta pieno.' },
        { title: 'Scegliere il campo', desc: 'Coperto o scoperto, centrale o laterale: ogni campo compare da solo, con il suo prezzo.' },
        { title: 'Aggiungere ciò che serve', desc: 'Noleggio racchetta o un tubo di palline, a persona o a prenotazione, aggiunti con un clic.' },
        { title: 'Confermare o inviare una richiesta', desc: 'Una caparra con carta conferma subito il campo. In modalità richiesta, la prenotazione aspetta la tua approvazione.' },
      ],
    },
    {
      kind: 'cards',
      id: 'handles',
      title: 'Cosa gestisce Likwiid Direct per un circolo',
      items: [
        { title: 'Campi e orari', desc: 'Ogni campo ha i suoi orari e il suo prezzo per turno. Un orario risulta pieno solo quando tutti i campi sono prenotati.' },
        { title: 'Lista d\'attesa per le ore di punta', desc: 'Con tutti i campi occupati, il giocatore si iscrive alla lista d\'attesa invece di scriverti. Non si addebita nulla, e offri il posto dal pannello quando se ne libera uno.' },
        { title: 'Disdette con regole', desc: 'Decidi tu il preavviso minimo per disdire. Con preavviso sufficiente la caparra diventa credito per un\'altra prenotazione; all\'ultimo minuto resta al circolo.' },
        { title: 'Preavviso e periodi di chiusura', desc: 'Il preavviso minimo per prenotare e le date chiuse per ferie, lavori o un fine settimana di torneo.' },
        { title: 'Le tue condizioni, accettate prima', desc: 'Le condizioni di cancellazione e di pagamento compaiono nell\'ultimo passaggio, e nessuno prenota senza spuntare di averle lette.' },
        { title: 'Un pannello per la reception', desc: 'Prenotazioni da cercare ed esportare, richieste da approvare o rifiutare e un calendario in cui blocchi le date con un clic.' },
      ],
    },
    {
      kind: 'proof',
      id: 'proof',
      title: 'Abbiamo già costruito prenotazioni per il padel',
      body: 'Per un cliente in Libano abbiamo costruito una piattaforma completa per il padel: i giocatori prenotano i campi, trovano partite al loro livello e giocano campionati, e gli organizzatori gestiscono tutto da un portale web. È pubblicata su App Store e Google Play. Likwiid Direct è la versione leggera di quell\'idea: la prenotazione dei campi sul tuo sito, senza app da scaricare.',
      linkLabel: 'Guarda il caso studio della piattaforma di prenotazione padel',
      to: '/work/padel-booking',
    },
  ],
  faqTitle: 'Le domande dei circoli',
  faq: [
    {
      q: 'I giocatori devono scaricare un\'app o creare un account?',
      a: 'No. Prenotano sul sito del circolo, dal browser di qualsiasi telefono, solo con nome e contatti. Non c\'è nessun account da creare.',
    },
    {
      q: 'Possiamo tenere il nostro sito attuale?',
      a: 'Sì. Likwiid Direct si inserisce nel sito che hai già con un tag script e un div, su WordPress, Wix o un sito su misura. Se ti serve anche un sito nuovo, lo realizziamo noi.',
    },
    {
      q: 'I giocatori possono pagare al momento della prenotazione?',
      a: 'Decidi tu. Una caparra con carta conferma il campo al momento della prenotazione, oppure la modalità richiesta lascia che il giocatore chieda un campo senza pagare mentre tu confermi ogni richiesta. Passi dall\'una all\'altra dal pannello del proprietario.',
    },
    {
      q: 'Gestisce campionati e ricerca dei compagni di gioco?',
      a: 'No. Likwiid Direct serve a prenotare i campi. I campionati e la ricerca di giocatori dello stesso livello sono ciò che abbiamo costruito nella piattaforma per il padel qui sopra, ed è un progetto a parte di cui parliamo volentieri.',
    },
    {
      q: 'Prendete una commissione sulle prenotazioni?',
      a: 'No. Non c\'è nessuna commissione su nessuna prenotazione. Raccontaci del tuo circolo e ti spieghiamo cosa comporta metterlo in funzione.',
    },
  ],
  closingTitle: 'Raccontaci come prenota oggi il tuo circolo',
  closingBody:
    'Mandaci i tuoi campi, gli orari di apertura e come prenotano ora i giocatori. Ti rispondiamo entro 24 ore con come si inserirebbe Likwiid Direct, e con ciò che non farebbe.',
  directCrumb: 'Likwiid Direct',
  backToDirect: 'Tutto ciò che fa Likwiid Direct',
  breadcrumbLabel: 'Percorso di navigazione',
}

export default it
