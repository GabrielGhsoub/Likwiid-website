import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, Ext, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

const RESPOND_URL = 'https://www.airbnb.it/help/article/28'

export default function Guide() {
  return (
    <GuideLayout
      slug="request-vs-instant-booking"
      lang="it"
      sources={[
        {
          label: 'Airbnb, Centro assistenza: Rispondere a una richiesta di prenotazione per il tuo alloggio (consultato a ottobre 2026)',
          href: RESPOND_URL,
        },
      ]}
    >
      <Summary>
        <Li>Con la richiesta di prenotazione vedi ogni prenotazione prima di confermarla. Con la prenotazione immediata si conferma subito.</Li>
        <Li>La prenotazione immediata chiede meno all'ospite. La richiesta chiede di più a te: rispondere in fretta, ogni volta.</Li>
        <Li>Poche camere e accoglienza di persona vanno spesso d'accordo con le richieste. Orari fissi e posti contati, con la prenotazione immediata.</Li>
        <Li>Non devi scegliere una volta per tutte: molti gestori combinano le due cose per date, anticipo o tipo di prenotazione.</Li>
      </Summary>

      <H2>Cosa cambia per l'ospite e per te</H2>
      <P>
        Con la <B>richiesta di prenotazione</B>, l'ospite sceglie date o orario, numero di persone ed extra, poi invia la
        richiesta. Non c'è ancora nulla di confermato. Tu la leggi e accetti, proponi un'altra data o rifiuti. Nel frattempo
        l'ospite aspetta la tua risposta per organizzarsi.
      </P>
      <P>
        Con la <B>prenotazione immediata</B>, l'ospite vede cosa è libero, sceglie e la prenotazione è confermata subito, di
        solito con un pagamento o una caparra nello stesso passaggio. Tu lo scopri dopo. Il tuo lavoro non è più decidere
        prenotazione per prenotazione, ma fissare le regole in anticipo: quali date sono aperte, quanto preavviso ti serve,
        quali condizioni applichi.
      </P>
      <P>
        Nessuna delle due è migliore in assoluto. Spostano lo sforzo in posti diversi: una nel quotidiano, richiesta per
        richiesta; l'altra nel calendario e nelle regole, da fare una volta e fare bene.
      </P>

      <H2>Cosa guadagni e cosa perdi</H2>
      <P>
        Oggi quasi tutti sono abituati a prenotare una camera o una lezione con un paio di tocchi. Un modulo che finisce con
        "ti ricontatteremo" è un passo indietro, e c'è chi continua a cercare altrove mentre aspetta. In cambio, la richiesta
        ti dà un controllo che la prenotazione immediata non ti dà: sai chi arriva prima di impegnarti.
      </P>
      <Table
        caption="Le due modalità a confronto"
        head={['', 'Richiesta di prenotazione', 'Prenotazione immediata']}
        rows={[
          ["Per l'ospite", 'Aspetta la risposta e può continuare a cercare', 'Certezza immediata'],
          ['Controllo su chi prenota', 'Totale: decidi caso per caso', 'Tramite regole fissate prima'],
          ['Calendario', 'Si può controllare a mano prima di confermare', 'Deve essere sempre giusto'],
          ['Il tuo impegno', 'Rispondere in fretta a ogni richiesta', 'Onorare ogni prenotazione che il calendario accetta'],
          ['Quando si paga', 'Dopo la tua conferma', 'Al momento della prenotazione'],
        ]}
      />
      <P>
        Il calendario è il punto che molti gestori sottovalutano. Se la tua struttura è anche sui portali e i calendari sono
        collegati da file che si aggiornano a intervalli, e non in tempo reale, la prenotazione immediata può far finire due
        ospiti sulla stessa notte nella finestra tra un aggiornamento e l'altro. Con le richieste, te ne accorgi prima di
        dire di sì.
      </P>
      <P>
        Conta anche il momento del pagamento. Con la prenotazione immediata l'ospite mette dei soldi quando prenota, e questo
        filtra chi sta solo guardando. Con la richiesta non si paga nulla finché non confermi, quindi ti serve un passo
        successivo chiaro per il pagamento; altrimenti un ospite già accettato può ancora sparire.
      </P>

      <H2>Quando conviene la richiesta di prenotazione</H2>
      <P>
        Pensa a un B&amp;B nelle Langhe con quattro camere, dove è la titolare ad accogliere ogni ospite e può fare il
        check-in solo in certe fasce orarie. Due camere hanno il bagno in comune, la casa non è adatta ai bambini piccoli e
        lei preferisce parlare prima con chi si ferma una settimana o più. Qui la richiesta ha senso: ogni prenotazione è una
        conversazione, e una prenotazione sbagliata costa più di una prenotazione lenta.
      </P>
      <Ul>
        <Li>Poche unità, dove un singolo errore pesa molto.</Li>
        <Li>Arrivi da coordinare: consegna delle chiavi, arrivo in tarda serata, strada di montagna o traghetto.</Li>
        <Li>Gruppi, animali, feste o soggiorni lunghi che conviene valutare prima di accettare.</Li>
        <Li>Un calendario condiviso con altri canali che non riesci ancora a tenere perfettamente allineato.</Li>
        <Li>Proposte su misura: visite private, menù dedicati, pacchetti di più giorni.</Li>
      </Ul>

      <H2>Quando conviene la prenotazione immediata</H2>
      <P>
        Ora pensa a un circolo di padel con quattro campi e turni da un'ora e mezza, o a uno studio di yoga con dodici
        tappetini per lezione. Ogni turno è lo stesso prodotto, i posti sono fissi e nessuno deve essere valutato per giocare
        una partita o seguire una lezione. Far aspettare una risposta a chi vuole un campo alle sette di sera aggiunge solo
        attrito, e il turno può restare vuoto mentre la richiesta giace nel telefono.
      </P>
      <Ul>
        <Li>Prodotti standard: la stessa tipologia di camera, la stessa lezione, la stessa durata.</Li>
        <Li>Un numero di posti fisso che il sistema conta per te.</Li>
        <Li>Poco anticipo: chi prenota per stasera o per domattina.</Li>
        <Li>Un calendario che vive in un posto solo, così ciò che risulta libero è libero davvero.</Li>
        <Li>Condizioni chiare che sei disposto ad applicare senza trattare ogni caso.</Li>
      </Ul>

      <H2>Soluzioni miste</H2>
      <P>Molte attività finiscono a metà strada. Alcune combinazioni frequenti:</P>
      <Ul>
        <Li>
          <B>Immediata per alcune cose, richiesta per altre.</B> Le doppie si prenotano subito, la suite familiare o
          l'intero agriturismo passano da una richiesta. Le lezioni di gruppo sono immediate, quelle private su richiesta.
        </Li>
        <Li>
          <B>Per anticipo o stagione.</B> Le prenotazioni fatte per tempo sono immediate, quelle dell'ultimo minuto passano
          da una richiesta perché devi sapere se ci sarai. Oppure il contrario in alta stagione, quando vuoi riempire ogni
          buco il prima possibile.
        </Li>
        <Li>
          <B>Richiesta con tempi di risposta dichiarati.</B> Tieni le richieste, ma scrivi sulla pagina quando l'ospite
          avrà notizie, per esempio entro poche ore durante il giorno. Una promessa chiara toglie gran parte del fastidio
          dell'attesa.
        </Li>
        <Li>
          <B>Immediata con caparra.</B> Confermi subito, ma incassi con carta una parte del totale perché la prenotazione
          abbia un impegno. La nostra guida su{' '}
          <A to="/it/guides/direct-booking-deposits/">come chiedere una caparra sulle prenotazioni dirette</A> spiega come
          fissare la percentuale e scrivere le condizioni.
        </Li>
        <Li>
          <B>Lista d'attesa quando è pieno.</B> Per lezioni e campi, un turno al completo non deve chiudere il discorso. La
          lista d'attesa raccoglie chi prenderebbe il posto se qualcuno si ritira.
        </Li>
      </Ul>

      <H2>Rispondere alle richieste: velocità e il no gentile</H2>
      <P>
        Se scegli le richieste, la velocità della risposta fa parte di ciò che vendi. Un ospite che riceve risposta entro
        un'ora si sente seguito; uno che non sa nulla fino al giorno dopo potrebbe aver già prenotato altrove. Come termine
        di paragone, uno dei grandi portali di affitti brevi concede agli host{' '}
        <Ext href={RESPOND_URL}>24 ore per accettare o rifiutare una richiesta</Ext>, dopodiché la richiesta scade, a
        ottobre 2026. Sul tuo sito nessuno ti impone scadenze, quindi fissane una tu e scrivila sulla pagina.
      </P>
      <P>
        Rifiutare fa parte del mestiere. Dì di no presto, spiega il motivo in una frase quando puoi e offri un'alternativa
        se ce l'hai: altre date, un'altra camera, una struttura amica nei dintorni. Un no chiaro oggi è più gentile di un
        forse vago domani.
      </P>
      <Note title="Esempio di risposta per rifiutare">
        <p>
          Grazie per la tua richiesta dal 12 al 15 maggio. Purtroppo in quelle date non possiamo ospitare un gruppo di sei
          persone, perché la nostra camera più grande ne accoglie quattro. Abbiamo però due camere libere dal 19 maggio, se
          le tue date sono flessibili. In ogni caso speriamo di accoglierti in un'altra occasione.
        </p>
      </Note>
      <P>
        Tieni pronte alcune risposte di questo tipo da adattare: accettare, proporre un'altra data, rifiutare. Un lavoro di
        dieci minuti diventa di due, e rispondere in fretta diventa realistico anche nelle giornate piene.
      </P>

      <H2>Come funziona in Likwiid Direct</H2>
      <P>
        <A to="/it/direct/">Likwiid Direct</A> offre entrambe le modalità, e passi dall'una all'altra dal pannello del
        proprietario. In modalità richiesta, l'ospite sceglie date, numero di persone ed extra, vede un totale stimato e
        invia la richiesta; non viene prenotato né addebitato nulla finché non confermi, proponi un'altra data o rifiuti dal
        pannello. Con la prenotazione immediata, l'ospite paga con carta una caparra, una percentuale del totale, sul tuo
        conto di pagamento, e prima di pagare vede la caparra e il saldo da versare all'arrivo.
      </P>
      <P>
        Per le attività, ogni turno ha un numero di posti, l'ospite vede quanti ne restano e si apre una lista d'attesa
        quando il turno è pieno. Regole come il soggiorno minimo e il preavviso necessario valgono in entrambe le modalità, e
        le tue condizioni di cancellazione e pagamento compaiono all'ultimo passaggio: nessuno può prenotare o inviare una
        richiesta senza spuntare di averle lette.
      </P>
    </GuideLayout>
  )
}
