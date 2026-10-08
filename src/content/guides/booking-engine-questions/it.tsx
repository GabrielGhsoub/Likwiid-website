import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, Ext, H2, H3, Li, P, Summary, Table, Ul } from '../../../components/guides/prose'

const GDPR_ROLES = 'https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/application-gdpr_en'

export default function Guide() {
  return (
    <GuideLayout
      slug="booking-engine-questions"
      lang="it"
      sources={[
        {
          label: 'Commissione europea: Application of the GDPR, ruoli di titolare e responsabile del trattamento, in inglese (consultato a ottobre 2026)',
          href: GDPR_ROLES,
        },
      ]}
    >
      <Summary>
        <Li>Chiedi su quale importo si calcola la commissione, non solo la percentuale: solo il pernottamento, o anche extra, IVA, imposta di soggiorno e prenotazioni cancellate.</Li>
        <Li>Scopri su quale conto arrivano i soldi, quando li ricevi e chi gestisce rimborsi e chargeback.</Li>
        <Li>L'elenco degli ospiti deve restare tuo: niente marketing da parte del fornitore e un export che puoi fare da solo, quando vuoi.</Li>
        <Li>Leggi le condizioni di uscita prima delle funzionalità: durata, preavviso, rinnovo automatico, i tuoi dati e il tuo dominio.</Li>
        <Li>La sincronizzazione via iCal si aggiorna a intervalli. È utile, ma non è istantanea.</Li>
      </Summary>

      <P>
        Durante la demo, ogni motore di prenotazione sembra perfetto. Le differenze vere emergono dopo: alla prima fattura,
        al primo rimborso, al primo overbooking o il giorno in cui vuoi cambiare. Ecco le domande da fare prima di firmare,
        con quello che dovresti sentirti rispondere, che tu gestisca un B&B, un agriturismo o uscite in barca.
      </P>

      <H2>Costi: quanto paghi e su cosa</H2>
      <P>
        Una commissione bassa può costare più di una alta se si applica a una parte più grande di ogni prenotazione. Fatti
        dare il listino per iscritto e chiedi:
      </P>
      <Ul>
        <Li>C'è una commissione (una percentuale), una tariffa fissa per prenotazione, o entrambe?</Li>
        <Li>Si applica solo al prezzo della camera o dell'attività, o anche a colazione, transfer, pulizie, IVA e all'imposta di soggiorno che riscuoti per conto del Comune?</Li>
        <Li>Si paga sulle prenotazioni poi cancellate, o sulla caparra che trattieni dopo una cancellazione tardiva?</Li>
        <Li>Ci sono costi di attivazione, un canone mensile, o un piano che passa a una fascia più cara quando i volumi crescono?</Li>
        <Li>Le commissioni sui pagamenti con carta sono incluse, o le addebita a parte il fornitore dei pagamenti?</Li>
      </Ul>
      <P>
        Un esempio chiarisce perché la base conta. Prendi una prenotazione da 100 in tutto: 80 di pernottamento, 15 di extra
        e 5 di imposta di soggiorno. Con una commissione indicativa del 10 per cento:
      </P>
      <Table
        caption="Stessa percentuale, base diversa: costo ogni 100 di valore della prenotazione (commissione indicativa del 10 per cento)"
        head={['La commissione si calcola su', 'Importo considerato', 'Costo']}
        rows={[
          ['Solo il pernottamento', '80', '8'],
          ['Pernottamento ed extra', '95', '9,5'],
          ["Tutto, compresa l'imposta di soggiorno", '100', '10'],
        ]}
      />
      <P>
        L'imposta di soggiorno non è un tuo ricavo: la incassi e la versi al Comune. Pagarci sopra una commissione significa
        pagare su soldi che non sono mai stati tuoi. Una buona risposta suona così: <B>"La commissione è questa percentuale,
        solo sul pernottamento, mai sulle imposte, e niente sulle prenotazioni cancellate."</B>
      </P>

      <H2>Pagamenti: su quale conto e chi tiene i soldi</H2>
      <P>
        Alcuni motori di prenotazione impongono il loro sistema di pagamento; altri ti fanno collegare un conto intestato
        a te. La differenza si vede in tre punti.
      </P>
      <Ul>
        <Li><B>Vincolo.</B> Se devi usare il sistema del fornitore, accetti le sue condizioni, e cambiare significa rifare da zero la parte pagamenti.</Li>
        <Li><B>Chi tiene i soldi.</B> Il pagamento dell'ospite arriva sul tuo conto, o lo incassa il fornitore e te lo gira dopo? Chiedi ogni quanto avvengono i versamenti e che fine fanno i soldi in transito se il fornitore ha un problema.</Li>
        <Li><B>Rimborsi e chargeback.</B> Chi effettua il rimborso, e da quale saldo? Quando un ospite contesta un addebito con la sua banca, chi risponde, con quali prove, e chi paga l'eventuale costo della contestazione?</Li>
      </Ul>
      <P>
        Una buona risposta: <B>"I pagamenti arrivano direttamente sul tuo conto, i versamenti seguono i tempi del tuo
        fornitore, i rimborsi li fai tu, e il riepilogo della prenotazione con le condizioni accettate è lì se un ospite
        contesta un addebito."</B>
      </P>

      <H2>Dati degli ospiti: di chi sono?</H2>
      <P>
        Ai sensi del GDPR, chi riceve la prenotazione di solito decide perché e come si usano i dati dell'ospite, ed è quindi
        il <B>titolare del trattamento</B>. Un motore di prenotazione che conserva le prenotazioni per conto tuo è un{' '}
        <B>responsabile del trattamento</B>: come spiega la <Ext href={GDPR_ROLES}>Commissione europea</Ext>, tratta i dati
        personali solo per conto del titolare, in base a un contratto e unicamente su sue istruzioni documentate. La
        Commissione cita anche il caso di un subappaltatore che ha usato i contatti dei clienti per il proprio marketing,
        diventando così anche lui titolare.
      </P>
      <P>Quindi chiedi:</P>
      <Ul>
        <Li>C'è un accordo sul trattamento dei dati, e posso leggerlo prima di firmare?</Li>
        <Li>Potete scrivere ai miei ospiti, proporre loro altre strutture o usare i loro dati per scopi vostri?</Li>
      </Ul>
      <P>
        La risposta giusta è un accordo breve e leggibile e un no netto al marketing verso i tuoi ospiti. Queste sono
        informazioni generali, non una consulenza legale.
      </P>

      <H2>Sincronizzazione di calendari e canali</H2>
      <P>
        Se vendi anche sui grandi portali, è la sincronizzazione a decidere se avrai overbooking. <B>iCal</B> è un feed di calendario: da una parte si pubblicano le date occupate, dall'altra si leggono con i propri
        tempi. Puoi collegare i feed in entrambe le direzioni, ma ognuno trasporta solo date bloccate (niente prezzi, niente
        dati degli ospiti) e si aggiorna solo alla lettura successiva. Una prenotazione fatta adesso può bloccare la data
        altrove solo dopo il prossimo aggiornamento. <B>Un collegamento a un channel manager</B> è invece un canale
        bidirezionale pensato per scambiare disponibilità, tariffe e prenotazioni tra sistemi.
      </P>
      <Ul>
        <Li>Quale metodo usate per ciascun portale su cui vendo?</Li>
        <Li>Ogni quanto si aggiornano i calendari importati, e posso vedere quando è avvenuta l'ultima sincronizzazione?</Li>
        <Li>Se capita comunque un overbooking, chi viene avvisato e qual è la procedura?</Li>
      </Ul>
      <P>Una buona risposta è onesta sui tempi. Diffida di chi definisce "in tempo reale" un feed iCal.</P>

      <H2>Andarsene: contratto, dati e dominio</H2>
      <P>Magari non cambierai mai, ma quanto è facile farlo dice molto dell'accordo.</P>
      <H3>Contratto</H3>
      <P>
        Chiedi la durata, il preavviso, se si rinnova in automatico, se ci sono penali di uscita e se i prezzi possono
        cambiare durante il contratto. Buona risposta: contratto mensile o annuale, preavviso breve, nessuna penale e
        variazioni di prezzo comunicate in anticipo.
      </P>
      <H3>Esportare i dati</H3>
      <P>
        Puoi esportare da solo prenotazioni ed elenco ospiti, quando vuoi, senza aprire un ticket all'assistenza? In che
        formato? Un file da foglio di calcolo (CSV) è il minimo utile. Verifica che l'export includa le prenotazioni future e
        le caparre già incassate. Poi chiedi cosa succede ai tuoi dati quando te ne vai: per quanto vengono conservati e se
        vengono cancellati su richiesta. La Commissione ricorda che il contratto con il responsabile deve indicare cosa
        accade ai dati personali alla fine del rapporto.
      </P>
      <H3>Dominio e sito</H3>
      <P>
        La pagina di prenotazione sta sul tuo dominio o su un indirizzo del fornitore? Chi ha registrato il dominio, e a
        nome di chi? Se il sito te l'ha fatto il fornitore, resta tuo quando te ne vai? Pagine e link sul tuo
        dominio costruiscono la tua visibilità sui motori di ricerca; sul dominio di un altro costruiscono la sua, e si
        interrompono quando cambi. Buona risposta: il dominio è intestato a te e la pagina di prenotazione vive sul tuo sito.
      </P>

      <H2>Cosa vede l'ospite e chi ti risponde</H2>
      <Ul>
        <Li><B>Lingue.</B> Ogni passaggio è nella lingua dell'ospite, comprese le condizioni e l'email di conferma?</Li>
        <Li><B>Smartphone.</B> Fai una prenotazione di prova dal tuo telefono, dall'inizio alla fine, prima di firmare.</Li>
        <Li><B>Accessibilità.</B> Si riesce a prenotare solo con la tastiera e con uno screen reader? Chiedi se fanno test secondo le linee guida WCAG.</Li>
        <Li><B>Assistenza.</B> Chi risponde: una persona, un bot, un rivenditore? In che lingua, in quali giorni e con che tempi in alta stagione?</Li>
      </Ul>

      <H2>La checklist</H2>
      <P>Stampala e portala all'appuntamento con il commerciale.</P>
      <Ul>
        <Li>Commissione o tariffa fissa, e su cosa: extra, IVA, imposta di soggiorno, cancellazioni?</Li>
        <Li>Attivazione, canone, costi legati ai volumi; commissioni sulle carte incluse o no</Li>
        <Li>Il mio conto di pagamento o quello del fornitore; tempi dei versamenti</Li>
        <Li>Chi gestisce rimborsi e chargeback</Li>
        <Li>Accordo sul trattamento dei dati; niente marketing ai miei ospiti</Li>
        <Li>Export in autonomia, formato, e i miei dati quando me ne vado</Li>
        <Li>Durata, preavviso, rinnovo automatico, penali di uscita</Li>
        <Li>Metodo di sincronizzazione, frequenza, procedura in caso di overbooking</Li>
        <Li>Pagina di prenotazione sul mio dominio; dominio e sito intestati a me</Li>
        <Li>Lingue, prova da smartphone, accessibilità, assistenza</Li>
      </Ul>

      <H2>Come risponde Likwiid Direct</H2>
      <P>
        Ecco le nostre risposte per <A to="/it/direct/">Likwiid Direct</A>. Direct non prende commissioni. Si integra nel sito che hai già, sul tuo dominio, oppure costruiamo
        il sito intorno a lui. La caparra pagata con carta arriva sul tuo conto di pagamento e l'elenco degli ospiti resta
        tuo. Dal pannello del proprietario puoi cercare ed esportare le prenotazioni. Scegli tu tra la modalità su richiesta,
        in cui non si addebita nulla e confermi a mano, e la prenotazione immediata con caparra su carta.
      </P>
      <P>
        La sincronizzazione dei calendari usa iCal, quindi non è istantanea: i feed si aggiornano a intervalli e il
        calendario mostra quando è avvenuta l'ultima sincronizzazione. Direct non è un channel manager ed è un prodotto nuovo:
        le demo pubbliche usano strutture inventate. Se stai ancora confrontando la vendita diretta con le
        commissioni dei portali, la nostra guida su{' '}
        <A to="/it/guides/booking-com-commission-costs/">quanto costano davvero le commissioni dei portali</A> fa i conti.
        E se vuoi farci queste stesse domande, <A to="/it/contact/">scrivici</A>.
      </P>
    </GuideLayout>
  )
}
