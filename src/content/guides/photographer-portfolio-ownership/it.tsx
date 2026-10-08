import { GuideLayout } from '../../../components/guides/GuideLayout'
import { A, B, H2, Li, Note, P, Summary, Table, Ul } from '../../../components/guides/prose'

const sources = [
  {
    label: 'Google Search Central: Spostamenti e migrazioni di siti (consultato a ottobre 2026)',
    href: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes',
  },
  {
    label: 'Google Search Central: Metadati delle immagini in Google Immagini (consultato a ottobre 2026)',
    href: 'https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata',
  },
  {
    label: 'IPTC: Photo Metadata User Guide (consultato a ottobre 2026)',
    href: 'https://www.iptc.org/std/photometadata/documentation/userguide/',
  },
  {
    label: 'web.dev: Learn Images, immagini responsive (consultato a ottobre 2026)',
    href: 'https://web.dev/learn/images/responsive-images',
  },
]

export default function Guide() {
  return (
    <GuideLayout slug="photographer-portfolio-ownership" lang="it" sources={sources}>
      <Summary>
        <Li>Con una piattaforma in abbonamento le foto restano tue, ma quasi tutto quello che le circonda è in affitto: il design, le gallerie, gli strumenti per i clienti e spesso anche l'indirizzo.</Li>
        <Li>Un sito consegnato come file sul tuo dominio ti segue ovunque. In cambio, modifiche e manutenzione sono a carico tuo o di chi incarichi.</Li>
        <Li>Registra il dominio a tuo nome fin dal primo giorno e tieni stabili gli URL. Protegge il tuo posizionamento più di qualsiasi scelta di piattaforma.</Li>
        <Li>Confronta il costo su più anni, non al mese, e riconosci onestamente cosa include un abbonamento.</Li>
      </Summary>

      <H2>Cosa possiedi davvero</H2>
      <P>
        In qualunque modo costruisci il portfolio, il diritto d'autore sulle tue fotografie resta tuo. Una piattaforma seria
        si prende solo la licenza che le serve per mostrarle. Il punto è tutto il resto: l'aspetto che i clienti riconoscono,
        l'organizzazione delle gallerie su cui hai passato le serate, i testi che portano richieste di preventivo, le scelte e
        le note dei clienti, e l'indirizzo che le persone hanno salvato.
      </P>
      <P>
        <B>Con una piattaforma in abbonamento</B>, tutto questo vive dentro il suo software. Lo usi finché paghi. Se smetti
        di pagare, o se la piattaforma cambia i piani, toglie una funzione o chiude, ti restano i file delle immagini e quello
        che riesci a esportare. Il resto va ricostruito.
      </P>
      <P>
        <B>Con un sito consegnato come file</B>, pagine, stili, codice delle gallerie e testi passano a te. Li metti su un
        hosting che scegli tu, sotto il tuo dominio. Se cambi hosting, copi i file. Niente smette di funzionare perché è
        scaduto un contratto.
      </P>

      <Table
        caption="Dove sta ogni cosa"
        head={['', 'Piattaforma in abbonamento', 'File sul tuo dominio']}
        rows={[
          ["Foto e diritto d'autore", 'Tuoi', 'Tuoi'],
          ['Design e codice delle gallerie', 'In affitto finché paghi', 'Tuoi'],
          ['Hosting', 'Incluso', 'Un tuo account, scelto da te'],
          ['Aggiornamenti e assistenza', 'Inclusi', 'A carico tuo, o pagati quando servono'],
          ['Andarsene', 'Esporti ciò che la piattaforma consente', 'Copi i file altrove'],
        ]}
      />

      <H2>Portabilità: cosa porti con te</H2>
      <P>
        Prima di legarti a una piattaforma, prova l'uscita. Molti fotografi scoprono cosa non si può esportare solo il giorno
        in cui vogliono cambiare. Chiedi, o verifica con un account di prova, se puoi portare via:
      </P>
      <Ul>
        <Li>Le gallerie nell'ordine originale, con titoli e didascalie, non soltanto una cartella di immagini sparse.</Li>
        <Li>Le gallerie dei clienti, con le foto preferite scelte da ciascuno e le note che hanno lasciato.</Li>
        <Li>I testi delle pagine, gli articoli del blog e le loro date di pubblicazione.</Li>
        <Li>L'elenco di tutti gli indirizzi delle pagine, per poterli reindirizzare in futuro.</Li>
        <Li>I messaggi del modulo di contatto e gli ordini di stampe, se la piattaforma li conserva.</Li>
      </Ul>
      <P>
        Le scelte dei clienti meritano un'attenzione particolare. Per un fotografo di matrimoni, l'elenco delle foto che gli
        sposi hanno scelto per l'album è materiale di lavoro. Se esiste solo dentro una piattaforma, tienine una copia altrove.
      </P>

      <H2>Il tuo dominio e i tuoi URL</H2>
      <P>
        La decisione più utile è avere il dominio fin dall'inizio, registrato a tuo nome, presso un registrar a cui accedi tu.
        Se il portfolio sta su un sottodominio della piattaforma, ogni link che ti hanno dato una rivista, una location per
        matrimoni o un cliente soddisfatto punta a un indirizzo che non controlli. Se ti sposti, quei link si rompono.
      </P>
      <P>
        Con un dominio tuo puoi cambiare il software dietro senza cambiare l'indirizzo. A quel punto conta tenere stabile
        l'URL di ogni pagina. Se quello di una galleria deve cambiare, imposta un reindirizzamento permanente dal vecchio al
        nuovo. Le indicazioni di Google sugli spostamenti di siti consigliano reindirizzamenti permanenti lato server, di
        mantenerli per almeno un anno e di aspettarsi oscillazioni temporanee del posizionamento durante il trasloco.
      </P>
      <Note title="Un'abitudine semplice">
        <p>
          Prima di un restyling o di un trasloco, esporta l'elenco degli indirizzi attuali. Dopo, aprili uno per uno e
          controlla che portino alla pagina giusta e non alla home.
        </p>
      </Note>

      <H2>Il costo su più anni</H2>
      <P>
        Mettere a confronto un canone mensile e un pagamento una tantum è fuorviante, perché comprano cose diverse in tempi
        diversi. Fai i conti di entrambe le soluzioni sul numero di anni in cui pensi di tenere il sito.
      </P>
      <P>
        <B>Un abbonamento</B> è una spesa ricorrente che si somma ogni anno in cui resti e che tende a salire nel tempo. In
        cambio include hosting, aggiornamenti di sicurezza, nuove funzioni e assistenza. Se stai iniziando, se non vuoi alcuna
        responsabilità tecnica o se cambi spesso direzione, è una scelta sensata che ha un valore reale.
      </P>
      <P>
        <B>Un sito pagato una tantum</B> ha un costo iniziale più alto e poi spese contenute: l'hosting (spesso gratuito o
        quasi, per un sito consegnato come file) e il rinnovo annuale del dominio. Sii onesto nel confronto: anche le modifiche
        future costano. Una nuova sezione, una funzione o un restyling vogliono dire pagare uno sviluppatore o metterci il tuo
        tempo. Più a lungo tieni il sito senza grandi cambiamenti, più il pagamento una tantum tende a ripagarsi. Likwiid sta
        preparando un semplice calcolatore dei costi per aiutarti in questo confronto.
      </P>

      <H2>Selezione delle foto, vendita di stampe e prenotazioni</H2>
      <P>
        Sono spesso queste funzioni a decidere, quindi controllale nel dettaglio qualunque strada tu prenda:
      </P>
      <Ul>
        <Li><B>Selezione da parte del cliente:</B> galleria privata per ogni cliente, scelta delle preferite, note sulle foto e un limite che rispetti il numero di scatti inclusi nel pacchetto.</Li>
        <Li><B>Vendita di stampe:</B> chi decide formati e prezzi, e se i pagamenti arrivano direttamente sul tuo conto di pagamento o passano prima da terzi.</Li>
        <Li><B>Prenotazioni:</B> se il cliente può vedere la tua disponibilità e prenotare dal tuo sito, senza essere mandato su un altro indirizzo.</Li>
      </Ul>
      <P>
        Con un abbonamento, chiedi se sono comprese nel tuo piano o solo in uno superiore. Con un sito una tantum, chiedi se
        fanno parte della consegna o sono lavoro extra più avanti.
      </P>

      <H2>Qualità delle immagini, velocità e diritto d'autore</H2>
      <P>
        Un portfolio si giudica nei primi secondi, spesso dallo smartphone. Caricare esportazioni a piena risoluzione e
        lasciare che il browser le rimpicciolisca rende le pagine lente. Una buona soluzione genera più dimensioni di ogni foto
        e lascia al browser la scelta di quella adatta allo schermo, in formati moderni come WebP o AVIF, come spiega il corso
        di web.dev sulle immagini responsive.
      </P>
      <P>
        Guarda anche cosa succede ai metadati. Avviso di copyright, autore e riga di credito sono salvati dentro il file
        secondo lo standard IPTC, e Google Immagini può mostrarli accanto alla foto. L'IPTC indica che le informazioni sul
        diritto d'autore non vanno mai rimosse dai file. Alcuni sistemi cancellano tutti i metadati per alleggerire le
        immagini, quindi carica una foto di prova e controlla la versione ridimensionata che il sito serve davvero.
      </P>

      <H2>Una checklist prima di scegliere</H2>
      <Ul>
        <Li>Il dominio è registrato a mio nome e posso trasferirlo senza chiedere il permesso a nessuno?</Li>
        <Li>Posso esportare oggi stesso gallerie, scelte dei clienti, testi ed elenco degli URL?</Li>
        <Li>Negli anni in cui conto di tenere il sito, quanto spendo in totale, comprese le modifiche probabili?</Li>
        <Li>Chi si occupa di aggiornamenti e problemi, e quanto in fretta mi serve una soluzione?</Li>
        <Li>Selezione delle foto, vendita di stampe e prenotazioni funzionano come comprano i miei clienti?</Li>
        <Li>Le foto sono servite alla dimensione giusta, in formati moderni e con i dati di copyright intatti?</Li>
        <Li>Il sito parla le lingue dei miei clienti?</Li>
      </Ul>
      <P>
        Se la maggior parte delle risposte punta su comodità e poca manutenzione, un abbonamento fa al caso tuo. Se punta su
        controllo, durata e un indirizzo stabile, vale la pena considerare seriamente di avere i file.
      </P>

      <H2>Dove si inserisce Likwiid Frame</H2>
      <P>
        <A to="/it/frame/">Likwiid Frame</A> è il nostro motore per portfolio fotografici. Viene consegnato come file che
        restano tuoi, sul tuo dominio, con un unico pagamento, senza abbonamento e senza commissioni. Include la selezione
        delle foto da parte del cliente, un negozio di stampe collegato al tuo conto di pagamento, prenotazioni tramite un
        calendario Likwiid Direct integrato, pagine in più lingue e foto servite alla dimensione giusta mantenendo i dati di
        copyright. Se vuoi ragionare insieme su quale strada si adatta al tuo lavoro, <A to="/it/contact/">scrivici</A>.
      </P>
    </GuideLayout>
  )
}
