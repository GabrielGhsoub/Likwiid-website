import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

export default function Guide() {
  return (
    <GuideLayout
      slug="direct-booking-deposits"
      lang="it"
      sources={[
        {
          label: 'Normattiva: Codice civile, art. 1385, Caparra confirmatoria (consultato a ottobre 2026)',
          href: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1385',
        },
        {
          label: 'Normattiva: Codice civile, art. 1386, Caparra penitenziale (consultato a ottobre 2026)',
          href: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1386',
        },
        {
          label: 'Gazzetta ufficiale UE (eur-lex.europa.eu): Direttiva 2011/83/UE sui diritti dei consumatori, articolo 16 (consultato a ottobre 2026)',
          href: 'https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32011L0083',
        },
        {
          label: 'Gazzetta ufficiale UE (eur-lex.europa.eu): Direttiva (UE) 2015/2366 relativa ai servizi di pagamento, articolo 97 (consultato a ottobre 2026)',
          href: 'https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32015L2366',
        },
      ]}
    >
      <Summary>
        <Li>La caparra è la via di mezzo: impegna l'ospite senza spaventarlo con l'intero importo mesi prima.</Li>
        <Li>Il pagamento anticipato completo va bene per prenotazioni last minute e attività a posti limitati. La garanzia con carta protegge poco.</Li>
        <Li>Per il Codice civile, caparra confirmatoria, caparra penitenziale e acconto non sono la stessa cosa. Scrivi nelle condizioni quale stai chiedendo.</Li>
        <Li>Scrivi la politica di cancellazione in parole semplici e falla accettare all'ospite prima del pagamento.</Li>
        <Li>Decidi le regole sui rimborsi prima della prima cancellazione, non durante.</Li>
      </Summary>

      <H2>Perché una prenotazione diretta ha bisogno di una regola di pagamento</H2>
      <P>
        Su una grande piattaforma è la piattaforma a decidere quando addebitare la carta e cosa succede se l'ospite cancella.
        Sul tuo sito quelle decisioni diventano tue, e una prenotazione senza soldi è solo una promessa.
      </P>
      <P>
        Una regola di pagamento chiara fa due cose: filtra le richieste che non erano mai serie e ti dà una base su cui contare
        quando qualcuno disdice la sera prima. Che tu gestisca un B&B, un agriturismo o una scuola di vela, ci sono tre modi
        comuni per farlo.
      </P>

      <H2>Caparra, pagamento completo o garanzia con carta</H2>
      <P>
        <B>La caparra</B> è una parte del totale versata al momento della prenotazione. Il saldo si paga dopo: all'arrivo, alla
        partenza o un certo numero di giorni prima del soggiorno. È la scelta più diffusa tra B&B, agriturismi e case vacanza,
        perché chiede un impegno vero senza pretendere tutto con mesi di anticipo.
      </P>
      <P>
        <B>Il pagamento completo</B> significa che l'ospite paga tutto quando prenota. Funziona bene per le prenotazioni
        ravvicinate, per le attività a posti limitati (un corso, un'uscita in barca, un campo da padel) e per le tariffe non
        rimborsabili. È più semplice da gestire, ma alcuni ospiti esitano a versare una cifra importante a una struttura che non
        conoscono.
      </P>
      <P>
        <B>La garanzia con carta</B> significa che l'ospite lascia i dati della carta e non viene addebitato nulla, a meno che
        non cancelli tardi o non si presenti. È l'opzione più comoda per l'ospite e quella che ti protegge meno: un blocco sulla
        carta scade nel giro di giorni e, nell'Unione europea, i pagamenti elettronici a distanza richiedono di norma
        l'autenticazione forte del cliente. Un numero di carta mandato per email non è una garanzia su cui contare.
      </P>
      <Table
        caption="Cosa comporta ogni opzione per te e per l'ospite"
        head={['', 'Caparra', 'Pagamento completo', 'Garanzia con carta']}
        rows={[
          ["Impegno dell'ospite", 'Medio o alto', 'Alto', 'Basso'],
          ['Protezione dalle cancellazioni tardive', "Fino all'importo della caparra", 'Totale, se le condizioni lo prevedono', "Solo se l'addebito successivo va a buon fine"],
          ['Attrito al momento della prenotazione', 'Basso', 'Più alto', 'Il più basso'],
          ['Lavoro per te', 'Incassare il saldo', 'Gestire i rimborsi', 'Inseguire gli addebiti non riusciti'],
        ]}
      />

      <H2>Caparra confirmatoria, penitenziale e acconto</H2>
      <P>
        In Italia la parola «caparra» ha un significato preciso nel Codice civile, e ne esistono due tipi.
      </P>
      <P>
        La <B>caparra confirmatoria</B> (art. 1385) è una somma data al momento della conclusione del contratto. Se tutto va
        come previsto, viene imputata alla prestazione dovuta, cioè scalata dal prezzo. Se è inadempiente chi l'ha versata, l'altra
        parte può recedere dal contratto e trattenerla. Se invece è inadempiente chi l'ha ricevuta, l'altra parte può recedere ed
        esigere il doppio.
      </P>
      <P>
        La <B>caparra penitenziale</B> (art. 1386) entra in gioco quando il contratto prevede espressamente un diritto di
        recesso. In quel caso la caparra è solo il prezzo del recesso: chi recede perde la caparra versata, oppure restituisce il
        doppio di quella ricevuta.
      </P>
      <P>
        L'<B>acconto</B>, nel linguaggio comune, è semplicemente un anticipo sul prezzo. Gli artt. 1385 e 1386 parlano di somme
        date «a titolo di caparra»: se nelle tue condizioni scrivi solo «acconto», o non scrivi nulla, diventa più difficile
        sostenere che quella somma funzioni come una caparra. Per una struttura ricettiva il consiglio pratico è chiamare la
        somma per nome e scrivere cosa succede se cancella l'ospite e cosa succede se cancelli tu, ricordando che la regola del
        doppio vale anche nei tuoi confronti.
      </P>
      <Note title="Informazione generale">
        <p>
          Questa è un'informazione generale, non una consulenza legale. Ogni caso ha i suoi dettagli: fai controllare il testo
          delle tue condizioni dal tuo commercialista o dal tuo avvocato.
        </p>
      </Note>

      <H2>Quanto dovrebbe essere la caparra?</H2>
      <P>
        Non esiste una cifra valida per tutti. Un buon modo per decidere è chiederti quanto perdi quando un ospite cancella tardi.
        Se una camera disdetta una settimana prima di solito si rivende, basta una caparra contenuta. Se un posto in
        un'attività non si riempie quasi mai, la caparra dovrebbe coprirne una parte maggiore.
      </P>
      <P>
        Ragiona per ogni 100 di valore della prenotazione. Con una caparra del 30 per cento, l'ospite versa 30 alla prenotazione e
        70 all'arrivo. Se cancella entro il tuo periodo di cancellazione tardiva, trattieni i 30 secondo le tue condizioni. Se
        cancella prima, restituisci i 30 oppure li tieni come credito per un'altra data, come dicono le tue condizioni.
      </P>
      <P>
        Mostra anche l'importo prima che l'ospite si impegni: una caparra che compare a sorpresa all'ultimo passaggio fa perdere
        prenotazioni.
      </P>

      <H2>Come scrivere una politica di cancellazione chiara</H2>
      <P>
        Una buona politica risponde a tre domande in poche righe: fino a quando si può cancellare gratis, cosa si perde dopo e
        cosa succede se l'ospite non si presenta. Evita il linguaggio legale e le parole vaghe come «ragionevole». Ecco un
        esempio da adattare:
      </P>
      <Note title="Esempio di testo">
        <p>
          Al momento della prenotazione è richiesto il versamento, a titolo di caparra, del 30 per cento del totale. Il saldo si paga
          all'arrivo. Puoi cancellare gratuitamente fino a 14 giorni prima dell'arrivo e ti restituiamo l'intera caparra. Se
          cancelli dopo, o non ti presenti, la caparra viene trattenuta. Non addebitiamo nulla oltre la caparra.
        </p>
      </Note>
      <P>
        Adatta i numeri alla tua situazione. Poi metti la politica dove l'ospite la vede nel momento in cui decide e chiedigli di
        spuntare una casella per confermare di averla letta. Quella spunta è ciò che potrai mostrare se in seguito l'ospite
        contesta l'addebito con la sua banca.
      </P>

      <H2>Rimborsi, crediti e cambi di data</H2>
      <P>
        Molti gestori danno per scontato che l'ospite abbia sempre 14 giorni per ripensarci dopo un acquisto online. Per
        l'alloggio a fini non residenziali e per le attività del tempo libero con una data precisa non è così: la direttiva
        europea sui diritti dei consumatori esclude questi contratti dal diritto di recesso. Di regola, a decidere cosa succede è
        la tua politica di cancellazione, ed è un motivo in più per scriverla bene.
      </P>
      <P>
        Decidi le regole prima della prima cancellazione, perché decidere sotto pressione porta a risposte incoerenti. Le scelte
        più comuni sono il rimborso totale fuori dal periodo di cancellazione, nessun rimborso al suo interno e un credito per un
        altro soggiorno come gesto di buona volontà. Il credito conserva l'incasso e il rapporto con l'ospite, ma indica per
        quanto tempo è valido.
      </P>
      <P>
        Se incassi sul tuo conto di pagamento, i rimborsi partono da quello stesso conto. Verifica con il tuo fornitore come
        gestisce i rimborsi parziali e se ti restituisce le commissioni del pagamento originale.
      </P>

      <H2>Cosa dire agli ospiti</H2>
      <Ul>
        <Li>L'importo della caparra e del saldo, in cifre e prima del pagamento, non solo in percentuale.</Li>
        <Li>Quando e come si paga il saldo: all'arrivo, con carta, con bonifico.</Li>
        <Li>La scadenza per cancellare come regola concreta (14 giorni prima dell'arrivo), non come promessa vaga.</Li>
        <Li>Cosa succede alla caparra in caso di cancellazione tardiva o mancata presentazione.</Li>
        <Li>A chi scrivere per cambiare le date e se un cambio vale come cancellazione.</Li>
      </Ul>
      <P>
        Ripeti i punti chiave nel messaggio di conferma. Gli ospiti rileggono raramente la pagina di prenotazione, ma cercano
        nella loro casella email.
      </P>

      <H2>Come funziona con Likwiid Direct</H2>
      <P>
        <A to="/it/direct/">Likwiid Direct</A> incassa una caparra in percentuale con carta al momento della prenotazione
        immediata, direttamente sul tuo conto di pagamento, e mostra all'ospite la caparra e il saldo da pagare all'arrivo prima
        che paghi. Le tue condizioni di cancellazione e di pagamento compaiono all'ultimo passaggio e nessuno può prenotare senza
        spuntare di averle lette. Nel pannello del proprietario trovi prenotazioni, ospiti e i loro crediti.
      </P>
      <P>
        Se per ora non vuoi incassare nulla online, Direct funziona anche in modalità richiesta: l'ospite invia una richiesta con
        date ed extra, non viene addebitato nulla e tu confermi a mano. La nostra guida su{' '}
        <A to="/it/guides/request-vs-instant-booking/">richiesta di prenotazione o prenotazione immediata</A> spiega quando ha
        senso l'una o l'altra.
      </P>
    </GuideLayout>
  )
}
