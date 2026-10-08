import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

const sources = [
  {
    label: 'Booking.com for Partners: Come funziona la commissione (consultato a ottobre 2026)',
    href: 'https://partner.booking.com/it/aiuto/commissioni-fatture-e-tasse/fatture/come-funziona-la-commissione',
  },
  {
    label: 'Booking.com for Partners: Joining Payments by Booking.com, in inglese (consultato a ottobre 2026)',
    href: 'https://partner.booking.com/en-gb/help/payments-payouts-invoices/payments-bookingcom/joining-payments-bookingcom',
  },
  {
    label: 'Booking.com for Partners: Understanding the Preferred Partner Programme, in inglese (consultato a ottobre 2026)',
    href: 'https://partner.booking.com/en-gb/help/performance/tools-programmes/understanding-preferred-partner-programme',
  },
  {
    label: 'Booking.com for Partners: Understanding the Genius marketing programme, in inglese (consultato a ottobre 2026)',
    href: 'https://partner.booking.com/en-gb/help/performance/tools-programmes/understanding-genius-marketing-programme',
  },
  {
    label: 'Booking.com Developers: Get property commission, commissione contrattuale e Visibility Booster (consultato a ottobre 2026)',
    href: 'https://developers.booking.com/connectivity/docs/b_xml-getcommissionoverride',
  },
  {
    label: 'Commissione europea: La Commissione designa Booking come gatekeeper, IP/24/2561, 13 maggio 2024',
    href: 'https://ec.europa.eu/commission/presscorner/detail/it/ip_24_2561',
  },
  {
    label: 'Commissione europea, DMA: Booking must comply with all relevant obligations under the DMA, 14 novembre 2024',
    href: 'https://digital-markets-act.ec.europa.eu/booking-must-comply-all-relevant-obligations-under-digital-markets-act-2024-11-14_en',
  },
  {
    label: 'Commissione europea, DMA: scheda sulla libertà di prezzo di chi usa Booking.com, 28 settembre 2026',
    href: 'https://digital-markets-act.ec.europa.eu/factsheet-how-dma-ensures-businesses-using-bookingcom-are-free-set-their-prices-and-bookingcom-2026-09-28_en',
  },
  {
    label: 'Agenzia delle Entrate: Locazioni brevi, la disciplina fiscale e le regole per gli intermediari, aprile 2026',
    href: 'https://www.agenziaentrate.gov.it/portale/documents/d/guest/locazioni_brevi_disciplina_fiscale_e_regole_per_intermediari_aprile-2026',
  },
  {
    label: "Agenzia delle Entrate: Guida alla compilazione delle fatture elettroniche e dell'esterometro, versione 1.10, aprile 2025",
    href: 'https://www.agenziaentrate.gov.it/portale/documents/d/guest/guida_compilazione-fe-esterometro-v1-10_aprile_2025',
  },
  {
    label: 'GLEIF: scheda del soggetto Booking.com B.V., Amsterdam, Paesi Bassi (consultato a ottobre 2026)',
    href: 'https://search.gleif.org/#/record/7245009ZP4X4SZC79G88',
  },
]

export default function Guide() {
  return (
    <GuideLayout slug="booking-com-commission-costs" lang="it" sources={sources}>
      <Summary>
        <Li>La commissione di Booking.com è una percentuale fissata nel tuo contratto. Cambia con il Paese, il tipo di struttura e l'accordo firmato: il dato che conta è quello nella tua extranet.</Li>
        <Li>Si calcola sul totale pagato dall'ospite, pulizie e altri costi compresi e, nella maggior parte dei Paesi, IVA compresa. La tassa di soggiorno resta fuori.</Li>
        <Li>Partner Preferiti e Visibility Booster aggiungono commissione. Genius no, ma lo sconto lo paghi tu.</Li>
        <Li>Per le locazioni brevi tra privati, l'Agenzia delle Entrate prevede una ritenuta del 21 per cento quando l'intermediario incassa il pagamento.</Li>
        <Li>Dal 2024 le regole europee ti lasciano offrire un prezzo migliore sul tuo sito.</Li>
      </Summary>

      <H2>Che cos'è la commissione e cosa paga</H2>
      <P>
        Booking.com non chiede un canone per pubblicare l'annuncio. Trattiene una percentuale di ogni prenotazione che ti
        porta. Secondo le sue pagine di assistenza per i partner, la percentuale esatta dipende dal Paese, dal tipo di
        struttura e dal contratto firmato all'iscrizione. La trovi nel contratto e nell'extranet, nella sezione Finanze, nel
        resoconto prenotazioni.
      </P>
      <P>
        Non esiste una tariffa ufficiale unica, quindi gli esempi di questa guida usano il 15 per cento solo come numero
        tondo. Sostituiscilo con il tuo. Il resto riflette le pagine di Booking.com e le fonti europee e italiane a ottobre
        2026; le condizioni cambiano, quindi verifica sempre nell'extranet.
      </P>
      <P>
        È giusto dire cosa compra la commissione. Booking.com dichiara di promuovere le strutture sui motori di ricerca in 45
        lingue e tramite oltre 17.500 partner affiliati, oltre alla propria clientela. Per un B&B o un agriturismo senza
        budget di marketing quella visibilità è concreta, soprattutto verso gli ospiti stranieri. E paghi solo quando arriva
        una prenotazione.
      </P>

      <H2>Su cosa si calcola</H2>
      <P>
        La commissione si applica all'importo totale della prenotazione: la tariffa più i costi extra che addebiti, come
        pulizia o servizio, e scatta al check-out. Booking.com non applica commissioni sulle tasse locali, come la tassa di
        soggiorno, ma nella maggior parte dei Paesi le applica sull'IVA. Le tue Clausole Generali indicano cosa vale per te.
      </P>
      <Ul>
        <Li><B>Paghi la commissione</B> su soggiorni completati, prenotazioni non rimborsabili o parzialmente rimborsabili (anche se l'ospite non arriva), penali di cancellazione o di mancata presentazione che addebiti, e overbooking.</Li>
        <Li><B>Non la paghi</B> se rinunci alla penale di cancellazione o di mancata presentazione, o se segnali la carta dell'ospite come non valida.</Li>
        <Li><B>Attenzione ai tempi:</B> cancellazioni e mancate presentazioni vanno segnalate nell'extranet entro 48 ore dal check-out. Altrimenti paghi la commissione piena.</Li>
        <Li><B>La percentuale si blocca</B> al momento della prenotazione: se la tua commissione cambia, le prenotazioni già fatte mantengono quella precedente.</Li>
      </Ul>

      <H2>Quando si paga: fattura mensile o trattenuta</H2>
      <P>
        Se incassi tu dagli ospiti, Booking.com invia una fattura al mese con tutte le prenotazioni il cui check-out è
        avvenuto nel mese precedente. Va pagata entro 14 giorni, e le fatture non pagate possono portare alla chiusura
        temporanea della struttura sulla piattaforma.
      </P>
      <P>
        Con <B>Payments by Booking.com</B> è la piattaforma a incassare dall'ospite e a pagarti. Quando gestisce tutti gli
        incassi, trattiene commissione e costi da ogni pagamento. L'adesione non ha costi di attivazione, ma se ricevi i
        pagamenti con bonifico si applica una commissione per il servizio di pagamento, in percentuale su ogni prenotazione
        completata, che dipende da dove si trova la struttura. In cambio Booking.com gestisce riaccrediti e rimborsi.
        Controlla la percentuale esatta nella pagina di assistenza finanziaria dell'extranet.
      </P>

      <H2>Cosa fa salire il costo reale</H2>
      <Ul>
        <Li><B>Programma Partner Preferiti:</B> più visibilità nei risultati e un badge, in cambio di quello che Booking.com chiama un piccolo aumento della commissione. Non pubblica una cifra unica, e richiede tra l'altro un punteggio delle recensioni di almeno 7 su 10.</Li>
        <Li><B>Visibility Booster:</B> una commissione più alta che scegli per date precise, per salire nel ranking in quelle notti. La documentazione tecnica di Booking.com lo descrive come una modifica della commissione data per data.</Li>
        <Li><B>Genius:</B> nessuna commissione in più, ma uno sconto del 10 per cento sulla tipologia di camera più economica e più prenotata. Booking.com conferma che lo sconto Genius standard è finanziato dalla struttura.</Li>
      </Ul>
      <P>
        Sono tutti facoltativi e puoi uscirne. Se il resoconto prenotazioni mostra una percentuale più alta di quella del
        contratto, controlla se uno di questi è attivo.
      </P>

      <H2>Esempi ogni 100 di valore della prenotazione</H2>
      <P>
        Usiamo il 15 per cento come commissione base e, per i programmi, 3 punti in più. Sono esempi, non cifre di
        Booking.com. Il 10 per cento di Genius è il livello standard del programma.
      </P>
      <Table
        caption="Quanto ti resta di una prenotazione a listino 100 (tariffe di esempio)"
        head={['Situazione', "Paga l'ospite", 'Commissione', 'Ti resta']}
        rows={[
          ['Commissione base del 15 per cento', '100', '15', '85'],
          ['Un programma aggiunge 3 punti (18 per cento)', '100', '18', '82'],
          ['Ospite Genius, sconto del 10 per cento', '90', '13,5', '76,5'],
          ['Ospite Genius con programma attivo', '90', '16,2', '73,8'],
        ]}
      />
      <P>
        Guarda la terza riga: sconto e commissione si sommano. L'ospite Genius paga 90, la commissione si calcola su quei 90
        e a te restano 76,5. Rispetto al prezzo di listino il canale ti costa 23,5, non 15. Eventuali costi di pagamento
        sono a parte.
      </P>
      <Note title="Cosa cambia con un mix di canali">
        <p>
          Se 70 di ogni 100 del tuo fatturato annuo arrivano da Booking.com al 15 per cento e 30 da prenotazioni dirette, la
          commissione media su tutto è 10,5 ogni 100. Con metà e metà scende a 7,5. Anche le prenotazioni dirette hanno un
          costo (il sito, i pagamenti con carta), ma di solito è più basso e lo controlli tu.
        </p>
      </Note>

      <H2>Fisco italiano: due punti da verificare con il commercialista</H2>
      <P>
        <B>Se hai partita IVA</B> (B&B in forma d'impresa, agriturismo, piccolo hotel), le fatture di commissione arrivano da
        Booking.com B.V., società registrata ad Amsterdam. Per i servizi ricevuti da un fornitore di un altro Paese UE, la
        guida dell'Agenzia delle Entrate ricorda che il committente, in base all'articolo 17, secondo comma, del d.P.R.
        633/1972, deve integrare il documento ricevuto con l'imposta dovuta, che confluisce nella sua liquidazione IVA. È
        l'inversione contabile; la stessa guida spiega come comunicarla con il tipo documento TD17.
      </P>
      <P>
        <B>Se affitti come privato</B> con le locazioni brevi (fino a 30 giorni, fuori da un'attività d'impresa), la guida
        dell'Agenzia di aprile 2026 prevede che gli intermediari, anche i portali online, residenti o no, quando incassano
        il pagamento operino una ritenuta del 21 per cento a titolo d'acconto sull'importo lordo, e comunichino i dati del
        contratto, compreso il CIN. Dal 2026, inoltre, il regime delle locazioni brevi vale per non più di due appartamenti:
        oltre, l'attività si presume svolta in forma d'impresa.
      </P>
      <P>
        Come queste regole si applicano ai tuoi pagamenti dipende dalla tua situazione. Prima della prossima dichiarazione,
        verificalo con il tuo commercialista.
      </P>

      <H2>La libertà di prezzo in Europa</H2>
      <P>
        Il 13 maggio 2024 la Commissione europea ha designato Booking come gatekeeper ai sensi del regolamento sui mercati
        digitali, e dal 14 novembre 2024 Booking.com deve rispettarne gli obblighi. Uno di questi, l'articolo 5, paragrafo
        3, impone di lasciare alle strutture la libertà di offrire prezzi, disponibilità o condizioni diverse su altri
        canali, compreso il proprio sito.
      </P>
      <P>
        In una scheda del 28 settembre 2026 la Commissione indica che Booking.com ha eliminato le clausole di parità dalle
        sue condizioni nello Spazio economico europeo e non usa i prezzi esterni per il ranking predefinito né per
        l'accesso a Genius o Partner Preferiti. In pratica puoi premiare chi prenota direttamente con un prezzo migliore o
        un piccolo extra.
      </P>

      <H2>Bilanciare i canali</H2>
      <P>
        Lasciare Booking.com raramente conviene a una piccola struttura: ti porta ospiti che da solo non raggiungeresti.
        L'obiettivo utile è smettere di pagare commissione su chi ti conosce già: chi torna, chi arriva con un passaparola,
        chi ti trova sulla mappa e cerca il tuo sito.
      </P>
      <Ul>
        <Li>Tieni Booking.com per farti scoprire, soprattutto in bassa stagione.</Li>
        <Li>Rendi prenotabile il tuo sito, così chi cerca il nome della struttura prenota lì.</Li>
        <Li>Di' agli ospiti che la prossima volta possono prenotare direttamente, e dai loro un motivo per farlo.</Li>
      </Ul>
      <P>
        <A to="/it/direct/">Likwiid Direct</A> è un motore di prenotazione senza commissioni che aggiunge un calendario di
        prenotazione al sito che hai già, con gli incassi sul tuo conto. Importa le date occupate da qualsiasi piattaforma
        che esporti un calendario iCal, quindi lavora accanto al tuo annuncio su Booking.com; le sincronizzazioni sono
        periodiche, non istantanee. Prima di scegliere qualsiasi motore di prenotazione, leggi la nostra guida con{' '}
        <A to="/it/guides/booking-engine-questions/">le domande da fare a un motore di prenotazione</A>.
      </P>
    </GuideLayout>
  )
}
