import type { Project } from "./types";

type AfterlayerCaseStudy = Required<Pick<Project, "summary" | "description" | "sections">>;

export const afterlayerCaseStudyIt: AfterlayerCaseStudy = {
  summary: "Progettare l’esperienza di prodotto che inizia dopo il checkout.",
  description: "Una piattaforma che trasforma manuali, informazioni di garanzia e percorsi di assistenza frammentati in un’esperienza post-vendita utile e riconoscibile.",
  sections: [
    {
      eyebrow: "01 — L’opportunità",
      title: "Il livello di prodotto mancante inizia dopo la vendita.",
      paragraphs: [
        "Un cliente acquista un prodotto. Nella scatola trova imballaggi, un libretto in otto lingue e forse un QR code dalla destinazione incerta. Il manuale finisce in un cassetto e la garanzia in un posto così sicuro da non essere più ritrovata.",
        "Tutto funziona finché non serve una risposta: come si pulisce il prodotto, un componente si può sostituire, dove si trova il numero di serie, la garanzia copre il problema? Da quel momento il rapporto con il brand diventa una ricerca tra PDF, vecchie email, form di assistenza e pagine che potrebbero non esistere più.",
        "Afterlayer offre a ogni prodotto una destinazione digitale persistente per configurazione, cura, riparazione, garanzia, ricambi e dati del passaporto digitale. Per i brand, trasforma documentazione dispersa in esperienze strutturate, aggiornabili e misurabili."
      ],
      quote: "L’obiettivo non era creare un lettore PDF migliore, ma progettare il livello mancante tra la vendita e la fine della vita del prodotto."
    },
    {
      eyebrow: "02 — Il mio ruolo",
      title: "Fondatore, Product Designer e Product Strategist.",
      paragraphs: [
        "Ho lavorato in autonomia su strategia e posizionamento, analisi di mercato e competitor, architettura dell’informazione, flussi cliente e brand, tassonomia, UX e interaction design, interfacce responsive, workflow di contenuto assistiti dall’AI, Digital Product Passport, prototipazione, priorità dell’MVP, design system, business model e struttura dei pilot.",
        "Periodo: 2026–in corso. Piattaforma: applicazione web responsive e pagine prodotto mobile. Utenti principali: brand di prodotto e clienti. Mercato iniziale: brand europei premium e design-led."
      ],
      list: ["Strategia e posizionamento", "Architettura dell’informazione", "Esperienza cliente e brand", "Workflow di contenuto assistiti dall’AI", "MVP, design system e pilot"]
    },
    {
      eyebrow: "03 — Il punto di partenza",
      title: "La vendita non era la fine dell’esperienza.",
      paragraphs: [
        "Prima dell’acquisto, quasi ogni interazione è progettata con cura. Dopo, le informazioni arrivano attraverso manuali stampati, PDF, cartoline di garanzia, email, packaging, pagine di supporto, distributori e portali di riparazione separati.",
        "Le informazioni esistono, ma non si comportano come un prodotto: sono statiche, duplicate e difficili da mantenere. I clienti non trovano ciò che serve, l’assistenza risponde alle stesse domande e i brand perdono visibilità dopo la vendita.",
        "Riparazioni, ricambi e requisiti normativi restano separati dall’esperienza del prodotto."
      ],
      quote: "Come sarebbe l’esperienza post-acquisto se fosse progettata con la stessa cura dell’acquisto?"
    },
    {
      eyebrow: "04 — Ridefinire il problema",
      title: "Il problema visibile era il manuale. Quello profondo era la conoscenza frammentata.",
      paragraphs: [
        "Il primo concept era semplice: scansionare un QR code e aprire un manuale ottimizzato per mobile. Ma digitalizzare il manuale avrebbe soltanto riprodotto la struttura del documento su uno schermo più piccolo.",
        "Un manuale è organizzato intorno alla documentazione; un cliente intorno a un problema. Vuole configurare, pulire, riparare o identificare il prodotto, non leggere il capitolo quattro.",
        "Afterlayer è così passato da manuale digitale a piattaforma di aftercare capace di tradurre la conoscenza di prodotto in percorsi concreti."
      ],
      list: ["Come si configura?", "Posso lavarlo?", "Quale ricambio serve?", "È coperto dalla garanzia?", "Si può riparare?", "Cosa succede a fine vita?"]
    },
    {
      eyebrow: "05 — Modello di prodotto",
      title: "Il prodotto fisico è diventato l’oggetto organizzatore.",
      paragraphs: [
        "Afterlayer assegna a ogni prodotto o SKU un’identità digitale persistente, accessibile tramite QR code, NFC, URL, email d’acquisto, account cliente o comunicazione di supporto.",
        "Il cliente non arriva sul sito generico del brand, ma nell’esperienza dell’oggetto che ha già in mano. Categoria, collezione e modello sono già noti.",
        "Configurazione, cura, diagnosi, riparazione, garanzia, ricambi, sicurezza, materiali, origine e fine vita diventano parti dello stesso rapporto con il prodotto."
      ],
      list: ["Primi passi", "Cura e manutenzione", "Diagnosi e riparazione", "Garanzia e ricambi", "Passaporto digitale", "Indicazioni di fine vita"]
    },
    {
      eyebrow: "06 — Architettura del servizio",
      title: "Due esperienze collegate dovevano funzionare come un unico sistema.",
      paragraphs: [
        "Il cliente voleva una risposta rapida e mobile-first, senza imparare una piattaforma, creare un account o scaricare un’app.",
        "Il brand aveva bisogno di creare e mantenere esperienze per molti prodotti, partendo da informazioni sparse tra manuali, schede tecniche, documenti di garanzia, fogli di calcolo e siti.",
        "L’esperienza cliente poteva rimanere semplice solo grazie a un’esperienza operativa ben strutturata."
      ],
      list: ["Creazione di prodotti e SKU", "Upload ed estrazione", "Revisione e approvazione", "Traduzione e pubblicazione", "Gestione versioni", "Richieste e analytics"]
    },
    {
      eyebrow: "07 — Esperienza cliente",
      title: "L’interfaccia era organizzata intorno ai momenti di bisogno.",
      paragraphs: [
        "Subito dopo l’acquisto può servire la configurazione; mesi dopo, la cura; anni dopo, un ricambio o una riparazione. La pagina doveva restare utile per tutta la vita del prodotto.",
        "La gerarchia privilegiava le azioni: primi passi, cura, riparazione, ricambi, garanzia, supporto e informazioni di prodotto. Una lampada, una borsa in pelle e un passeggino richiedono contenuti diversi, ma possono condividere la stessa logica."
      ]
    },
    {
      eyebrow: "08 — Information design",
      title: "La divulgazione progressiva evitava un’altra parete di informazioni.",
      paragraphs: [
        "I Digital Product Passport aggiungono dati su materiali, provenienza, riparabilità e fine vita. Mostrarli tutti in un’unica pagina infinita non equivale a essere trasparenti.",
        "La pagina principale mostrava azioni frequenti e informazioni urgenti; i dettagli tecnici, normativi e materiali restavano disponibili quando necessari.",
        "L’obiettivo non era nascondere la complessità, ma organizzarla intorno all’uso."
      ]
    },
    {
      eyebrow: "09 — Content operations",
      title: "La documentazione esistente diventava contenuto strutturato.",
      paragraphs: [
        "I brand possedevano già molte informazioni, ma sotto forma di lunghi manuali, PDF tecnici, schede di cura, garanzie, specifiche, certificazioni, copy web e fogli interni.",
        "Convertire manualmente tutto per ogni SKU avrebbe creato un’operazione costosa. Caricando i documenti, il brand riceveva blocchi proposti per configurazione, cura, sicurezza, garanzia, parti, materiali, riparazione e identificativi.",
        "Il risultato diventava una bozza modificabile, non una pubblicazione automatica."
      ]
    },
    {
      eyebrow: "10 — Modello d’interazione AI",
      title: "L’AI era un assistente operativo, non uno spettacolo.",
      paragraphs: [
        "L’AI individuava sezioni, estraeva informazioni specifiche, proponeva categorie, migliorava la leggibilità, segnalava mancanze, aiutava la traduzione e suggeriva blocchi riutilizzabili.",
        "Il team del brand conservava revisione e approvazione. Un’istruzione di cura errata può danneggiare il prodotto; una condizione di garanzia inventata crea problemi legali; un’avvertenza mancante può avere conseguenze ancora più serie.",
        "Per questo ogni output doveva restare ispezionabile."
      ],
      list: ["Rilevare ed estrarre", "Strutturare e riscrivere", "Segnalare le lacune", "Supportare la traduzione", "Collegare la proposta alla fonte", "Lasciare l’approvazione al brand"]
    },
    {
      eyebrow: "11 — Fiducia e provenienza",
      title: "Ogni istruzione estratta aveva bisogno di un’origine chiara.",
      paragraphs: [
        "Afterlayer non produceva copy plausibile ma scollegato. Quando possibile, il contenuto generato restava connesso al documento e alla sezione da cui proveniva.",
        "I revisori potevano verificare proposte, tracciare aggiornamenti, individuare conflitti e rielaborare nuove versioni.",
        "Il sistema distingueva materiale originale, contenuto estratto o riscritto dall’AI, modifiche del brand e informazioni pubblicate. L’obiettivo era rendere la revisione gestibile, non eliminarla."
      ]
    },
    {
      eyebrow: "12 — Workspace del brand",
      title: "I documenti erano fonti. La scheda prodotto era l’oggetto persistente.",
      paragraphs: [
        "Il flusso passava da importazione e identità del prodotto a upload, strutturazione, revisione, approvazione, configurazione di lingua e brand, anteprima, pubblicazione e monitoraggio.",
        "Più documenti potevano contribuire alla stessa esperienza: il manuale alla configurazione, la scheda alla cura, la garanzia alla copertura e il catalogo ai ricambi.",
        "Il cliente non doveva sapere in quale file interno si trovasse la risposta."
      ],
      list: ["Creare o importare", "Caricare le fonti", "Strutturare", "Rivedere e approvare", "Pubblicare", "Monitorare utilizzo e richieste"]
    },
    {
      eyebrow: "13 — Modello dei contenuti",
      title: "Blocchi riutilizzabili collegavano editing, pubblicazione e interfaccia.",
      paragraphs: [
        "Le pagine usavano blocchi strutturati per istruzioni, avvertenze, cura, materiali, garanzia, riparazione, ricambi, download, contatti, certificazioni e campi del passaporto.",
        "Il modello facilitava riordino, manutenzione, traduzione e adattamento per categoria. Offriva all’AI un formato definito e permetteva di aggiungere capacità future senza ridisegnare l’intera pagina."
      ]
    },
    {
      eyebrow: "14 — Digital Product Passport",
      title: "La compliance non aveva bisogno di un cimitero separato.",
      paragraphs: [
        "Isolare il passaporto dietro una tabella e un pulsante sarebbe stato facile, ma poco utile. Molti dati richiesti migliorano anche l’aftercare.",
        "I materiali aiutano cura e riciclo; l’identificazione supporta garanzia e ricambi; la riparazione estende la vita; origine e fine vita aumentano la trasparenza.",
        "Compliance e utilità non sono identiche, ma possono condividere la stessa base informativa invece di generare due sistemi quasi duplicati."
      ]
    },
    {
      eyebrow: "15 — Riparazione e garanzia",
      title: "La riparazione diventava un percorso; la garanzia smetteva di richiedere archeologia.",
      paragraphs: [
        "Dire che un prodotto è riparabile non basta. Il cliente deve identificare il problema, capire cosa è sicuro, trovare il componente o servizio corretto e avviare una richiesta senza perdere il contesto del prodotto.",
        "La garanzia spiegava copertura, prove richieste, avvio della richiesta e passaggi successivi. L’opportunità a lungo termine era collegare prodotto fisico, acquisto e richiesta senza costringere il cliente a ricostruire la relazione."
      ]
    },
    {
      eyebrow: "16 — Misurazione",
      title: "L’aftercare poteva diventare insight di prodotto, non solo costo di assistenza.",
      paragraphs: [
        "I manuali tradizionali non dicono se sono stati aperti, quali sezioni hanno aiutato, dove nasce confusione o quali istruzioni non evitano ticket.",
        "Il livello digitale rendeva visibili visite, sezioni usate, interesse per cura e riparazione, richieste di garanzia, ricambi, escalation, lingue e ritorni.",
        "L’obiettivo era migliorare documentazione, design del prodotto, packaging, supporto, pianificazione dei ricambi e sviluppo futuro, non trasformare ogni istruzione in una metrica di engagement."
      ]
    },
    {
      eyebrow: "17 — Espressione del brand",
      title: "Il sistema sosteneva il brand senza sostituirne l’identità.",
      paragraphs: [
        "Il cliente interagiva con il brand del prodotto, non con Afterlayer. Troppa standardizzazione avrebbe reso generici i prodotti premium; troppa personalizzazione avrebbe reso la piattaforma fragile e incoerente.",
        "Un sistema controllato permetteva di configurare tipografia, colori, logo, immagini, tono di voce e alcuni layout, mantenendo stabili gerarchia e pattern d’interazione."
      ]
    },
    {
      eyebrow: "18 — Localizzazione",
      title: "Multilingue per struttura, non per duplicazione.",
      paragraphs: [
        "Per i brand europei, creare una pagina separata per ogni lingua avrebbe duplicato contenuti e complicato gli aggiornamenti.",
        "Il modello a blocchi manteneva le traduzioni collegate alla stessa fonte, segnalava modifiche e traduzioni mancanti e consentiva revisioni locali senza pagine indipendenti.",
        "L’AI poteva aiutare, ma contenuti tecnici, legali e di sicurezza richiedevano approvazione."
      ]
    },
    {
      eyebrow: "19 — MVP",
      title: "La prima release doveva dimostrare un unico ciclo centrale.",
      paragraphs: [
        "La visione includeva passaporti, riparazioni, ricambi, garanzia, supporto, analytics e ownership personalizzata. Costruire tutto subito avrebbe prodotto una piattaforma completa che nessuno aveva ancora usato.",
        "L’MVP doveva verificare se un brand potesse trasformare documentazione esistente in un’esperienza post-acquisto utile senza creare una grande nuova operazione editoriale.",
        "Il brand poteva creare e pubblicare; il cliente accedere e usare. Le funzioni avanzate sarebbero arrivate dopo la validazione di questo ciclo."
      ],
      list: ["Prodotti e SKU", "Upload ed estrazione AI", "Editor a blocchi", "Pagina mobile", "Cura, garanzia e ricambi", "Lingue, analytics e guida offline"]
    },
    {
      eyebrow: "20 — Principi di prodotto",
      title: "Il prodotto fisico offriva il contesto più forte.",
      paragraphs: [
        "Partire dall’oggetto posseduto, rispondere prima di escalare e conservare il contesto quando serve supporto. Costruire una struttura affidabile prima della personalizzazione.",
        "L’AI propone, il brand approva. Il contenuto resta tracciabile alla documentazione ufficiale. L’esperienza è progettata per la vita del prodotto, non per la campagna di lancio.",
        "Le informazioni normative dovrebbero migliorare l’ownership invece di diventare un database isolato."
      ],
      list: ["Partire dal prodotto", "Rispondere prima di escalare", "Strutturare prima di personalizzare", "L’AI propone, il brand approva", "Conservare la fonte", "Rendere utile la compliance"]
    },
    {
      eyebrow: "21 — Trade-off",
      title: "Il prodotto bilanciava velocità e affidabilità, profondità e attenzione.",
      paragraphs: [
        "L’ingestion riduceva lo sforzo iniziale; validazione e stati mancanti mantenevano visibile la qualità. La pubblicazione assistita era più lenta dell’automazione totale, ma adatta a sicurezza, garanzia, cura e riparazione.",
        "Il sistema standardizzava comportamento e gerarchia lasciando spazio all’identità. Mostrava prima il contenuto utile al compito e poi i dati completi.",
        "Gli account potevano supportare registrazione e storico, ma non erano obbligatori per leggere le istruzioni."
      ],
      list: ["Sforzo iniziale vs qualità", "Automazione vs affidabilità", "Standardizzazione vs identità", "Completezza vs attenzione", "Account vs accesso immediato"]
    },
    {
      eyebrow: "22 — Risultato",
      title: "Da manuale digitale a sistema di aftercare verificabile.",
      paragraphs: [
        "Afterlayer è diventato un sistema che collega informazioni di prodotto, esigenze dei clienti e operazioni del brand: identità persistente, esperienza mobile-first, contenuti strutturati, workflow documentale assistito dall’AI, revisione, blocchi riutilizzabili, architettura multilingue e interazioni misurabili.",
        "Il progetto ha definito strategia, esperienza centrale e architettura MVP. Prima dei pilot non sarebbe corretto dichiarare riduzioni dei costi di supporto, aumenti del riacquisto o maggiore durata dei prodotti.",
        "Il risultato immediato non è una percentuale, ma un sistema testabile."
      ]
    },
    {
      eyebrow: "23 — Cosa ho imparato",
      title: "Il post-acquisto è un problema di information design.",
      paragraphs: [
        "Molti fallimenti dell’aftercare sembrano problemi di assistenza, ma iniziano da informazioni frammentate, inaccessibili o organizzate secondo documenti interni anziché bisogni reali.",
        "L’AI crea valore quando ha un compito operativo definito. Schemi chiari, fonti e stati di revisione contavano più di un’interfaccia apparentemente intelligente.",
        "QR e NFC sono utili quando conservano il contesto: il cliente dovrebbe arrivare alla prossima azione utile per quell’oggetto, non alla homepage."
      ]
    },
    {
      eyebrow: "24 — Prossimi passi",
      title: "Validare il ciclo centrale con pilot mirati.",
      paragraphs: [
        "La fase successiva verificherà se i brand riescono a pubblicare aftercare strutturato dalla documentazione esistente, quanta revisione richiede l’estrazione AI, quali moduli servono per categoria e quali esigenze si risolvono prima dell’assistenza.",
        "Le evoluzioni possibili includono storico di proprietà, garanzia avanzata, provider di riparazione, commercio di ricambi, guida personalizzata, passaporti estesi, notifiche lifecycle, integrazioni di supporto, rilevamento problemi, rivendita e trasferimento di proprietà.",
        "L’obiettivo non è mettere più informazioni dietro un QR code, ma dare a ogni prodotto una vita utile dopo la vendita e al cliente un posto migliore di manual_final_v7_updated.pdf."
      ]
    }
  ]
};
