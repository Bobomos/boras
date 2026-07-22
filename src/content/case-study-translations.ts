import type { Project } from "./types";

type LocalizedCaseStudy = { summary: string; description: string; sections: Project["sections"] };

export const localizedCaseStudies: Record<"it" | "tr", { lexhero: LocalizedCaseStudy; concoro: LocalizedCaseStudy }> = {
  it: {
    lexhero: {
      summary: "Trasformare una piattaforma legale frammentata in uno spazio di lavoro AI-native.",
      description: "Ho contribuito a trasformare LexHero da una raccolta di strumenti legali in uno spazio coerente dove gli avvocati possono creare, analizzare, verificare, personalizzare e gestire documenti con l’AI.",
      sections: [
        {
          eyebrow: "01 — Il punto di partenza",
          title: "Il prodotto era cresciuto. La struttura no.",
          paragraphs: [
            "Un avvocato inizia a redigere un contratto su una piattaforma. Poi comincia il solito giro: il documento viene scaricato, aperto in Word, inviato via email, confrontato con un altro file, copiato in uno strumento di ricerca legale e infine caricato altrove per la firma.",
            "LexHero offriva già strumenti utili per questo lavoro. Gli utenti potevano analizzare un documento, generare contenuti o cercare informazioni. Spesso, però, non capivano da dove iniziare, quale strumento usare o come le diverse parti del prodotto fossero collegate.",
            "Il problema non era la mancanza di funzionalità. Era l’orientamento. L’interfaccia era diventata la mappa della storia delle feature aziendali, non il riflesso del lavoro del cliente."
          ],
          quote: "L’opportunità non era aggiungere un’altra tappa. Era ridurre il numero di tappe."
        },
        {
          eyebrow: "02 — Insight di prodotto",
          title: "Il lavoro legale non è una fila di strumenti separati.",
          paragraphs: [
            "Ho usato interviste, call commerciali, demo di prodotto e richieste di assistenza per capire come lavoravano davvero avvocati indipendenti, studi legali e team legali interni.",
            "Un professionista legge un documento, nota un problema, controlla una fonte, riscrive una clausola, confronta due versioni, aggiunge dati del cliente e rivede il risultato. Una nuova informazione può modificare un paragrafo precedente: analisi e scrittura si influenzano continuamente.",
            "Il flusso di lavoro è un documento che diventa progressivamente più completo. L’architettura del prodotto doveva rifletterlo."
          ]
        },
        {
          eyebrow: "03 — Scelta strategica",
          title: "La risposta più invitante era anche quella sbagliata.",
          paragraphs: [
            "Una possibile strategia era separare le capacità AI di LexHero in prodotti autonomi: analisi documentale, ricerca legale, generazione di contratti e altri strumenti specializzati. Ognuno avrebbe avuto un nome chiaro e una landing page ordinata.",
            "Ma l’utente avrebbe continuato a ricomporre il flusso da solo, spostando informazioni tra ambienti diversi, ripetendo lo stesso contesto e decidendo ogni volta quale strumento aprire.",
            "Aggiungere l’AI in questo modo non avrebbe risolto il problema. Avrebbe automatizzato la frammentazione. Per questo abbiamo organizzato il prodotto attorno all’oggetto su cui i professionisti stavano già lavorando: il documento."
          ]
        },
        {
          eyebrow: "04 — Modello di prodotto",
          title: "Il documento è diventato il centro del prodotto.",
          paragraphs: [
            "La nuova esperienza si basa su due elementi collegati. Total Chat offre un’unica interfaccia conversazionale per domande, analisi, ricerca legale, generazione e modifiche al documento attivo. Canvas offre uno spazio persistente per visualizzare, modificare, strutturare e personalizzare il risultato.",
            "La chat offre velocità. Canvas offre controllo. Insieme permettono di passare da una richiesta iniziale a un documento legale utilizzabile senza saltare tra strumenti AI separati.",
            "Un utente può caricare un contratto, individuare una clausola rischiosa, consultare la fonte, chiedere un’alternativa e modificare direttamente la formulazione finale. Il contesto resta al suo posto. Anche l’utente."
          ]
        },
        {
          eyebrow: "05 — Interaction design",
          title: "La chat non ha sostituito l’editor. È diventata un modo per controllarlo.",
          paragraphs: [
            "La chat funziona bene per domande dirette e prime bozze. Funziona molto meno quando il risultato contiene quaranta paragrafi, diverse sezioni e richiede revisioni ripetute.",
            "I documenti legali richiedono una visione completa della struttura. Gli utenti devono modificare una clausola senza rigenerare tutto, personalizzare parti e obblighi, confrontare il nuovo testo con l’originale e capire cosa è cambiato.",
            "Canvas ha eliminato la distanza tra generazione e valutazione. L’AI propone una modifica in Total Chat mentre l’utente controlla e modifica direttamente il documento. Il risultato è subito visibile, strutturato e utilizzabile."
          ]
        },
        {
          eyebrow: "06 — Architettura dello spazio di lavoro",
          title: "Contesto, azione e risultato restavano visibili insieme.",
          paragraphs: [
            "Lo spazio di lavoro è organizzato in tre aree: navigazione tra documenti caricati e materiali di supporto; Canvas per il documento attivo e la modifica diretta; Total Chat per analisi, domande, generazione e revisioni.",
            "Questa relazione evita di chiedere agli utenti di capire l’organizzazione interna di LexHero. L’interfaccia segue la struttura del loro lavoro."
          ],
          list: ["Navigazione dei documenti", "Canvas", "Total Chat"]
        },
        {
          eyebrow: "07 — AI responsabile",
          title: "L’AI poteva proporre, ma non decidere in silenzio.",
          paragraphs: [
            "La fiducia non è un livello opzionale nella tecnologia legale. Una risposta AI può sembrare precisa e professionale pur essendo incompleta o sbagliata. La fluidità è utile. Non è una prova.",
            "I professionisti devono capire da dove provengono le informazioni, cosa ha cambiato il sistema e quali parti richiedono ancora il loro giudizio. Le modifiche assistite dall’AI dovevano quindi restare verificabili e reversibili."
          ],
          list: ["Riferimenti alle fonti", "Schede di verifica", "Confronto tra documenti", "Proprietà chiara dei contenuti", "Cronologia delle modifiche"]
        },
        {
          eyebrow: "08 — Design system",
          title: "Costruire un sistema, non un’altra serie di schermate.",
          paragraphs: [
            "I file Figma esistenti non avevano un sistema di componenti condiviso. Elementi simili usavano layout, comportamenti e trattamenti visivi diversi a seconda della schermata.",
            "Ho creato una base comune per tipografia, colore, navigazione, form, stati del documento, componenti chat, elementi di verifica, card, pannelli, feedback, caricamento e layout riutilizzabili.",
            "Il design system ha definito regole condivise sul comportamento di LexHero. Le nuove capacità possono entrare attraverso pattern esistenti invece di diventare nuove sezioni con un linguaggio di interazione separato."
          ],
          quote: "I prodotti raramente diventano complessi per un unico errore drammatico. Diventano complessi una richiesta ragionevole alla volta."
        },
        {
          eyebrow: "09 — Risultato",
          title: "Da raccolta di feature a sistema di prodotto.",
          paragraphs: [
            "Il risultato più importante non è stato un nuovo stile visivo, ma un nuovo modello di prodotto: analisi, ricerca, scrittura, modifica e verifica sono diventate parti collegate dello stesso flusso documentale.",
            "Non esistevano analytics di base affidabili per sostenere una precisa promessa di produttività. L’impatto è stato quindi valutato attraverso cambiamenti osservabili: meno frammentazione architetturale, un flusso principale più chiaro, un sistema di interazione coerente e una base più solida per il lavoro legale assistito dall’AI."
          ],
          list: ["Uno spazio principale al posto di punti di ingresso scollegati", "Capacità AI nello stesso contesto documentale", "Generazione e modifica manuale senza esportazione", "Fiducia e verifica dentro il modello di interazione", "Una base scalabile per lo sviluppo futuro", "Un’unica storia di prodotto per team commerciali e di prodotto"]
        },
        {
          eyebrow: "10 — Riflessione",
          title: "La domanda più difficile era dove l’AI dovesse scomparire nel flusso di lavoro.",
          paragraphs: [
            "Aggiungere l’AI non rende automaticamente un prodotto più semplice. Può creare più strumenti, pulsanti, punti di ingresso e decisioni per persone che hanno già abbastanza decisioni da prendere.",
            "Per LexHero, la soluzione più forte non era un catalogo di prodotti AI specializzati, ma uno spazio condiviso in cui diverse capacità operano sullo stesso documento, mantengono il contesto e restano sotto il controllo dell’utente.",
            "Il prodotto è diventato meno interessato a dimostrare cosa potesse fare la tecnologia e più concentrato sul modo in cui lavorano davvero i professionisti legali."
          ],
          quote: "È questa differenza che di solito separa un prodotto AI utile da una demo molto impressionante."
        }
      ]
    },
    concoro: {
      summary: "Progettare il livello informativo per le carriere nel settore pubblico.",
      description: "Ho progettato e sviluppato un sistema informativo che trasforma i bandi pubblici italiani, frammentati e incoerenti, in opportunità strutturate, pertinenti e spiegabili.",
      sections: [
        {
          eyebrow: "01 — Il punto di partenza",
          title: "Le informazioni erano disponibili. La comprensione no.",
          paragraphs: [
            "Un candidato trova un concorso pubblico promettente. Il titolo è vago, i requisiti iniziano a pagina dodici e la scadenza si trova tra un riferimento normativo e un’approvazione amministrativa.",
            "In Italia le opportunità del settore pubblico sono tecnicamente pubbliche, ma sono sparse tra portali istituzionali, descritte con terminologie incoerenti e spesso pubblicate dentro lunghi documenti amministrativi.",
            "La maggior parte dei servizi esistenti si comportava come un database: elenchi, categorie e filtri, lasciando ai candidati il compito di tradurre studi ed esperienza nel linguaggio delle istituzioni."
          ],
          quote: "La vera domanda non era come migliorare la ricerca, ma come aiutare i candidati a capire pertinenza, idoneità e prossimo passo."
        },
        {
          eyebrow: "02 — Strategia di prodotto",
          title: "Una job board più pulita non avrebbe risolto un problema informativo a monte.",
          paragraphs: [
            "Il primo concept raccoglieva i concorsi attivi e li presentava in un’interfaccia di ricerca più chiara. Era utile, ma trattava ogni bando come una pagina da mostrare, non come un documento da comprendere prima.",
            "Le job board tradizionali presuppongono titolo, luogo, datore di lavoro e requisiti chiari. I bandi pubblici raramente arrivano in modo così ordinato.",
            "Concoro è quindi diventato un prodotto di supporto alle decisioni in tre fasi: strutturare l’opportunità, collegarla al candidato e spiegarne la pertinenza."
          ],
          list: ["Strutturare l’opportunità", "Collegarla al candidato", "Spiegare la pertinenza"]
        },
        {
          eyebrow: "03 — Architettura dell’informazione",
          title: "La tassonomia è stata una delle decisioni UX più importanti.",
          paragraphs: [
            "La stessa professione poteva essere descritta in modo diverso da due enti. Titoli simili apparivano sotto intestazioni diverse, mentre il nome del ruolo poteva indicare una classificazione contrattuale anziché il lavoro reale.",
            "Ho sviluppato un modello normalizzato per settore, famiglia professionale, tipo di impiego, luogo, scadenze, idoneità, titoli, conoscenze tecniche, capacità, programma d’esame, riferimenti normativi e stato.",
            "Questo schema condiviso permette a Concoro di presentare opportunità coerenti anche quando i bandi originali non lo sono. Senza, filtri migliori avrebbero solo reso più elegante la stessa confusione."
          ]
        },
        {
          eyebrow: "04 — Architettura di ingestion",
          title: "L’esperienza inizia prima che un risultato arrivi sullo schermo.",
          paragraphs: [
            "Il sistema raccoglie ogni bando, ne estrae testo e metadati, identifica la struttura, classifica e normalizza le informazioni, salva il record e prepara sezioni semantiche per ricerca e matching.",
            "n8n coordina i flussi mentre Supabase funziona da database operativo. I record vengono pubblicati solo quando rispettano le condizioni richieste.",
            "Il sistema non aggiunge un riassunto generico a un PDF. Un buon riassunto può omettere proprio la frase che determina l’idoneità. Le informazioni sono invece organizzate attorno alle decisioni del candidato: ruolo, sede, titolo, prova e scadenza."
          ],
          visual: "ingestion"
        },
        {
          eyebrow: "05 — Esperienza di ricerca",
          title: "Mostrare la complessità quando diventa utile.",
          paragraphs: [
            "Molti portali pubblici riproducono l’organizzazione dell’ente che pubblica le informazioni. Concoro è stato progettato attorno alla persona che prova a usarle.",
            "Le card mostrano ciò che serve per una prima decisione. I dettagli amministrativi e legali restano disponibili nella pagina completa attraverso una progressive disclosure.",
            "L’obiettivo non era fingere che i concorsi fossero semplici. Chi scorre venti opportunità non ha bisogno di ogni riferimento normativo nella card. Chi prepara una candidatura sì."
          ],
          list: ["Qual è il ruolo?", "Dove si trova?", "Quando scade?", "Quali titoli sono richiesti?", "È adatto al mio profilo?", "Cosa succede dopo?"]
        },
        {
          eyebrow: "06 — Contesto del candidato",
          title: "L’onboarding ha creato un livello di prodotto riutilizzabile, non un ostacolo.",
          paragraphs: [
            "I filtri richiedevano ancora di sapere come tradurre il proprio percorso nella terminologia ufficiale. Una persona può sapere di aver studiato economia e preferire ruoli amministrativi senza conoscere la famiglia professionale o la categoria contrattuale corretta.",
            "Ho progettato un onboarding in cinque passaggi su formazione, esperienza, settori preferiti, geografia, condizioni di idoneità e punti di forza.",
            "L’interfaccia pone domande a cui i candidati possono rispondere. Dietro, le risposte diventano dati strutturati e semantici per raccomandazioni, ricerca prioritizzata, alert e supporto futuro alla candidatura."
          ],
          list: ["Formazione e titoli", "Esperienza professionale", "Settori e famiglie professionali", "Preferenze geografiche", "Idoneità e competenze"]
        },
        {
          eyebrow: "07 — Matching AI",
          title: "La similarità dell’intero documento era tecnicamente valida e rumorosa come prodotto.",
          paragraphs: [
            "Il primo approccio confrontava un embedding del candidato con uno dell’intero bando. Ma un bando lungo mescola norme, procedure, responsabilità, qualifiche ed esami: considerarli tutti ugualmente importanti rendeva i risultati difficili da controllare.",
            "Ho diviso ogni opportunità in tre dimensioni semantiche: nucleo del ruolo, requisiti e contesto professionale. Ognuna viene incorporata separatamente e salvata in Pinecone.",
            "Le raccomandazioni combinano risultati semantici e vincoli strutturati, escludono opportunità scadute, raggruppano per concorso e restituiscono una selezione prioritizzata."
          ]
        },
        {
          eyebrow: "08 — Raccomandazioni responsabili",
          title: "Pertinenza e idoneità non sono la stessa cosa.",
          paragraphs: [
            "Un candidato può essere interessato a un ruolo senza poter partecipare. Mostrare un’opportunità promettente e rivelare il requisito escludente solo dopo una lunga lettura non è engagement. È attenzione sprecata.",
            "Scadenze, titoli, condizioni obbligatorie e categorie di impiego agiscono quindi come vincoli di prodotto, non come testo passivo nella pagina di dettaglio.",
            "Le raccomandazioni spiegano anche perché appaiono—esperienza, formazione, geografia, competenze o dominio—senza trasformare una percentuale opaca in un’autorità."
          ],
          quote: "L’obiettivo non era convincere l’utente che l’algoritmo avesse ragione, ma dargli abbastanza contesto per decidere se il risultato fosse utile."
        },
        {
          eyebrow: "09 — Intelligenza invisibile",
          title: "L’AI viveva sotto azioni familiari invece di diventare un’altra destinazione.",
          paragraphs: [
            "I candidati stavano già cercando di capire un processo occupazionale complesso. Non avevano bisogno di imparare anche come interrogare correttamente un chatbot.",
            "L’AI lavora soprattutto dietro l’esperienza: interpreta documenti, estrae informazioni, classifica ruoli, normalizza termini, prepara rappresentazioni semantiche, recupera opportunità e supporta le spiegazioni.",
            "L’interfaccia resta costruita attorno ad azioni familiari: esplorare, filtrare, salvare, confrontare e ricevere alert."
          ],
          list: ["Interpretare", "Estrarre", "Classificare", "Normalizzare", "Recuperare", "Spiegare"]
        },
        {
          eyebrow: "10 — Fiducia e aggiornamento",
          title: "Un’opportunità scaduta e ben progettata resta scaduta.",
          paragraphs: [
            "Il record strutturato rende il bando più comprensibile, ma la fonte ufficiale resta autorevole. I candidati possono vedere la provenienza dei dati e tornare al documento originale quando preparano la domanda.",
            "Stato e scadenze sono vincoli di sistema. I concorsi scaduti si chiudono automaticamente e scompaiono da ricerca attiva, retrieval semantico, raccomandazioni e alert.",
            "L’aggiornamento non è un’etichetta aggiunta dopo. Dati correnti, fonti visibili e incertezza esplicita fanno parte dell’esperienza."
          ]
        },
        {
          eyebrow: "11 — Trade-off di prodotto",
          title: "Più automazione era utile solo se le informazioni restavano affidabili.",
          paragraphs: [
            "Una copertura maggiore rendeva la piattaforma più utile, ma introduceva documenti incoerenti, classificazioni insolite e record incompleti. Servivano stati di validazione, reprocessing e modi per individuare i casi da controllare.",
            "Una personalizzazione più complessa poteva migliorare la pertinenza rendendo però le raccomandazioni meno comprensibili. Ho preferito un matching modulare a un unico punteggio opaco.",
            "Riassunti leggibili dovevano convivere con la completezza legale, mentre l’automazione su larga scala doveva preservare il controllo umano."
          ],
          list: ["Copertura vs qualità dei dati", "Personalizzazione vs trasparenza", "Semplicità vs completezza legale", "Automazione vs controllo"]
        },
        {
          eyebrow: "12 — Risultato",
          title: "Da motore di ricerca a sistema informativo.",
          paragraphs: [
            "Concoro è diventato un prodotto informativo end-to-end capace di elaborare bandi, convertirli in uno schema condiviso, mantenere stati aggiornati, supportare ricerca strutturata e semantica, costruire profili e produrre raccomandazioni spiegabili.",
            "Il risultato principale è l’architettura comune che collega fonti, opportunità strutturate, profili e raccomandazioni. Questo livello permette al prodotto di andare oltre la visualizzazione e aiutare le persone a prendere decisioni.",
            "In questa fase non esistevano analytics comportamentali maturi o dati di lungo periodo. La fase successiva deve verificare se il sistema migliora scoperta, comprensione dell’idoneità e decisioni di candidatura."
          ]
        },
        {
          eyebrow: "13 — Riflessione",
          title: "I problemi di ricerca spesso iniziano a monte.",
          paragraphs: [
            "Un’interfaccia di ricerca non può compensare informazioni incoerenti, incomplete o mal classificate. Gran parte dell’esperienza di Concoro viene determinata prima che il risultato appaia sullo schermo.",
            "I miglioramenti AI più importanti sono arrivati da schemi più chiari, sezioni documentali significative e vincoli deterministici, non da un modello più nuovo o da un prompt più lungo.",
            "Progettare un prodotto intelligente significa progettare il sistema che produce l’esperienza, non soltanto l’interfaccia attraverso cui viene usata."
          ],
          quote: "Rendere pubbliche le informazioni non significa renderle utilizzabili."
        }
      ]
    }
  },
  tr: {
    lexhero: {
      summary: "Parçalı bir hukuk platformunu yapay zekâ odaklı bir çalışma alanına dönüştürmek.",
      description: "LexHero’nun hukuk araçları koleksiyonundan, avukatların yapay zekâyla belge oluşturabildiği, analiz edebildiği, doğrulayabildiği, kişiselleştirebildiği ve yönetebildiği bütünlüklü bir çalışma alanına dönüşmesine yardımcı oldum.",
      sections: [
        { eyebrow: "01 — Başlangıç noktası", title: "Ürün büyümüştü. Yapı büyümemişti.", paragraphs: ["Bir avukat bir platformda sözleşme hazırlamaya başlar. Ardından tanıdık tur gelir: belge indirilir, Word’de açılır, e-postayla gönderilir, başka bir dosyayla karşılaştırılır, hukuk araştırma aracına kopyalanır ve sonunda imza için başka bir yere yüklenir.", "LexHero bu iş için zaten faydalı araçlar sunuyordu. Kullanıcılar belge analiz edebiliyor, içerik üretebiliyor veya bilgi arayabiliyordu. Ancak çoğu zaman nereden başlayacaklarını, hangi aracı kullanacaklarını ya da ürünün bölümlerinin birbiriyle nasıl ilişkili olduğunu anlayamıyorlardı.", "Sorun özellik eksikliği değildi. Sorun yön bulmaktı. Arayüz, müşterinin işini değil şirketin özellik geçmişini gösteren bir haritaya dönüşmüştü."], quote: "Fırsat yeni bir durak eklemek değil, durak sayısını azaltmaktı." },
        { eyebrow: "02 — Ürün içgörüsü", title: "Hukuk işi, birbirinden ayrı araçlardan oluşan bir sıra değildir.", paragraphs: ["Bağımsız avukatların, hukuk bürosu çalışanlarının ve şirket içi hukuk ekiplerinin gerçekte nasıl çalıştığını anlamak için kullanıcı görüşmelerinden, satış görüşmelerinden, ürün demolarından ve destek taleplerinden yararlandım.", "Bir hukukçu belgeyi okur, sorun fark eder, kaynağı kontrol eder, maddeyi yeniden yazar, iki sürümü karşılaştırır, müvekkil bilgilerini ekler ve sonucu gözden geçirir. Yeni bir bulgu önceki paragrafı değiştirebilir; analiz ve düzenleme sürekli birbirini etkiler.", "İş akışı, giderek tamamlanan bir belgedir. Ürün mimarisinin bunu yansıtması gerekiyordu."] },
        { eyebrow: "03 — Stratejik seçim", title: "En cazip cevap aynı zamanda yanlış cevaptı.", paragraphs: ["Bir seçenek LexHero’nun yapay zekâ yeteneklerini belge analiz aracı, hukuk araştırma asistanı, sözleşme üreticisi ve diğer uzman ürünlere ayırmaktı. Her birinin net bir adı ve düzenli bir landing page’i olabilirdi.", "Ancak kullanıcı yine iş akışını kendisi birleştirecek, bilgiyi farklı ortamlar arasında taşıyacak, aynı bağlamı tekrar tekrar anlatacak ve sıradaki araca karar verecekti.", "Yapay zekâyı bu şekilde eklemek sorunu çözmeyecek, parçalanmayı otomatikleştirecekti. Bu yüzden ürünü hukukçuların zaten üzerinde çalıştığı nesnenin, yani belgenin, etrafında düzenledik."] },
        { eyebrow: "04 — Ürün modeli", title: "Belge, ürünün merkezine yerleşti.", paragraphs: ["Yeni deneyim iki bağlantılı öğe üzerine kuruldu. Total Chat; soru, analiz, hukuk araştırması, üretim ve aktif belge değişiklikleri için tek bir konuşma arayüzü sağladı. Canvas ise sonucu görüntülemek, düzenlemek, yapılandırmak ve kişiselleştirmek için kalıcı bir alan sundu.", "Chat hız sağladı. Canvas kontrol sağladı. Birlikte, kullanıcıların ayrı yapay zekâ araçları arasında geçiş yapmadan ilk talepten kullanılabilir hukuk belgesine ilerlemesini mümkün kıldı.", "Kullanıcı sözleşme yükleyebilir, riskli maddeyi bulabilir, ilgili kaynağı inceleyebilir, alternatif isteyebilir ve son metni doğrudan düzenleyebilir. Bağlam da kullanıcı da yerinde kalır."] },
        { eyebrow: "05 — Etkileşim tasarımı", title: "Chat editörün yerini almadı. Editörü kullanmanın bir yolu oldu.", paragraphs: ["Chat, doğrudan sorular ve ilk taslaklar için etkilidir. Sonuç kırk paragraf, birden fazla bölüm ve tekrarlanan revizyon içerdiğinde ise çok daha az etkilidir.", "Hukuk belgeleri yapının tamamını görmeyi gerektirir. Kullanıcılar her şeyi yeniden üretmeden tek bir maddeyi düzenleyebilmeli, tarafları ve yükümlülükleri kişiselleştirebilmeli, yeni içeriği kaynakla karşılaştırabilmeli ve neyin değiştiğini anlayabilmelidir.", "Canvas, üretim ile değerlendirme arasındaki boşluğu kaldırdı. Yapay zekâ Total Chat üzerinden değişiklik önerirken kullanıcı belgeyi doğrudan inceler ve düzenler. Sonuç anında görünür, yapılandırılmış ve kullanılabilir olur."] },
        { eyebrow: "06 — Çalışma alanı mimarisi", title: "Bağlam, eylem ve sonuç birlikte görünür kaldı.", paragraphs: ["Çalışma alanı üç bölüme ayrıldı: yüklenen dosyalar ve destek materyalleri için belge navigasyonu; aktif belge ve doğrudan düzenleme için Canvas; analiz, soru, üretim ve değişiklikler için Total Chat.", "Bu ilişki, kullanıcının LexHero’nun iç organizasyonunu anlamasını gerektirmedi. Arayüz onların çalışma yapısını izledi."], list: ["Belge navigasyonu", "Canvas", "Total Chat"] },
        { eyebrow: "07 — Sorumlu yapay zekâ", title: "Yapay zekâ önerebilir, ancak sessizce karar veremezdi.", paragraphs: ["Hukuk teknolojisinde güven isteğe bağlı bir katman değildir. Yapay zekâ yanıtı eksik veya yanlış olsa bile akıcı ve kesin görünebilir. Akıcılık faydalıdır; kanıt değildir.", "Hukukçular bilginin nereden geldiğini, sistemin neyi değiştirdiğini ve hangi noktaların hâlâ kendi yargılarını gerektirdiğini anlamalıdır. Bu nedenle yapay zekâ destekli değişiklikler incelenebilir ve geri alınabilir kalmalıydı."], list: ["Kaynak referansları", "Doğrulama kartları", "Belge karşılaştırma", "Açık içerik sahipliği", "Değişiklik geçmişi"] },
        { eyebrow: "08 — Tasarım sistemi", title: "Yeni ekranlar değil, bir sistem inşa etmek.", paragraphs: ["Mevcut Figma dosyalarında ortak bir bileşen sistemi yoktu. Benzer öğeler ekrana göre farklı yerleşim, davranış ve görsel uygulama kullanıyordu.", "Tipografi, renk, navigasyon, formlar, belge durumları, chat bileşenleri, doğrulama öğeleri, kartlar, paneller, geri bildirim, yükleme durumları ve yeniden kullanılabilir düzenler için ortak bir temel oluşturdum.", "Tasarım sistemi LexHero’nun nasıl davranacağına dair ortak kurallar getirdi. Yeni yetenekler, ayrı bir etkileşim diliyle yeni bölümlere dönüşmek yerine mevcut pattern’ler üzerinden eklenebilir hale geldi."], quote: "Ürünler nadiren tek bir büyük hatayla karmaşıklaşır. Her seferinde makul görünen bir özellik talebiyle karmaşıklaşırlar." },
        { eyebrow: "09 — Sonuç", title: "Özellik koleksiyonundan ürün sistemine.", paragraphs: ["En önemli sonuç yeni bir görsel stil değil, yeni bir ürün modeliydi: analiz, araştırma, yazma, düzenleme ve doğrulama aynı belge akışının bağlantılı parçalarına dönüştü.", "Kesin bir verimlilik iddiasını destekleyecek güvenilir başlangıç analitiği yoktu. Bu nedenle etki; azalan mimari parçalanma, daha net ana akış, tutarlı etkileşim sistemi ve yapay zekâ destekli hukuk işi için daha güçlü bir temel üzerinden değerlendirildi."], list: ["Kopuk giriş noktaları yerine tek çalışma alanı", "Aynı belge bağlamını paylaşan yapay zekâ yetenekleri", "Dışa aktarmadan üretim ve manuel düzenleme", "Etkileşim modelinin parçası olan güven ve doğrulama", "Gelecek geliştirmeler için ölçeklenebilir temel", "Satış ve ürün ekipleri için tek ürün hikâyesi"] },
        { eyebrow: "10 — Değerlendirme", title: "Daha zor soru, yapay zekânın iş akışında nerede görünmez olması gerektiğiydi.", paragraphs: ["Yapay zekâ eklemek ürünü otomatik olarak sadeleştirmez. Zaten yeterince karar veren insanlar için daha fazla araç, buton, giriş noktası ve karar yaratabilir.", "LexHero için en güçlü çözüm uzman yapay zekâ ürünleri kataloğu değil; farklı yeteneklerin aynı belge üzerinde çalıştığı, bağlamı koruduğu ve kullanıcı kontrolünde kaldığı ortak bir çalışma alanıydı.", "Ürün, teknolojinin neler yapabildiğini göstermekten çok hukukçuların gerçekte nasıl çalıştığını desteklemeye odaklandı."], quote: "Bu ayrım, kullanışlı bir yapay zekâ ürünüyle çok etkileyici bir demo arasındaki farkı çoğu zaman belirler." }
      ]
    },
    concoro: {
      summary: "Kamu kariyerleri için bilgi katmanını tasarlamak.",
      description: "İtalya’daki dağınık kamu ilanlarını yapılandırılmış, ilgili ve açıklanabilir fırsatlara dönüştüren bir bilgi sistemi tasarladım ve geliştirdim.",
      sections: [
        { eyebrow: "01 — Başlangıç noktası", title: "Bilgi vardı. Anlayış yoktu.", paragraphs: ["Bir aday umut verici görünen bir kamu ilanı bulur. Başlık belirsizdir, şartlar on ikinci sayfada başlar, son başvuru tarihi ise yasal referans ile idari onay arasına saklanmıştır.", "İtalya’daki kamu fırsatları teknik olarak açıktır. Ancak kurumsal portallara dağılmış, tutarsız terimlerle anlatılmış ve çoğu zaman uzun idari belgelerin içine gömülmüştür.", "Mevcut hizmetlerin çoğu birer veri tabanı gibi çalışıyordu. Liste, kategori ve filtre sunuyor; adayın eğitimini ve deneyimini kamu kurumlarının diline çevirmesini bekliyordu."], quote: "Asıl soru aramayı nasıl geliştireceğimiz değil; adayların ilgiyi, uygunluğu ve sonraki adımı nasıl anlayacağıydı." },
        { eyebrow: "02 — Ürün stratejisi", title: "Daha temiz bir iş ilanı sitesi, yukarı akıştaki bilgi sorununu çözmezdi.", paragraphs: ["İlk konsept aktif ilanları topluyor ve daha temiz bir arama arayüzünde sunuyordu. Faydalıydı, fakat her ilanı önce anlaşılması gereken bir belge yerine görüntülenecek bir sayfa olarak ele alıyordu.", "Geleneksel iş siteleri net unvan, konum, işveren ve şartlar varsayar. Kamu ilanları nadiren bu kadar düzenli gelir.", "Concoro bu nedenle üç aşamalı bir karar destek ürününe dönüştü: fırsatı yapılandır, adayla ilişkilendir ve neden ilgili olduğunu açıkla."], list: ["Fırsatı yapılandır", "Adayla ilişkilendir", "İlgiyi açıkla"] },
        { eyebrow: "03 — Bilgi mimarisi", title: "Taksonomi, en önemli UX kararlarından biriydi.", paragraphs: ["Aynı meslek iki kurum tarafından farklı tanımlanabiliyordu. Benzer nitelikler farklı başlıklar altında yer alırken rol adı gerçek işi değil sözleşme sınıfını anlatabiliyordu.", "Profesyonel alan, iş ailesi, çalışma türü, konum, tarihler, uygunluk, eğitim, teknik bilgi, yetkinlik, sınav programı, yasal referans ve durum alanlarını kapsayan normalize bir model geliştirdim.", "Bu ortak şema, kaynak ilanlar tutarsız olsa bile Concoro’nun fırsatları tutarlı sunmasını sağladı. Bu katman olmadan daha iyi filtreler yalnızca aynı karmaşanın daha şık bir sürümünü üretirdi."] },
        { eyebrow: "04 — Veri alma mimarisi", title: "Deneyim, sonuç ekrana gelmeden önce başlar.", paragraphs: ["Sistem her kaynak ilanı toplar, metin ve metadatasını çıkarır, yapısını belirler, ilgili bilgileri sınıflandırıp normalize eder, kaydı saklar ve arama ile eşleştirme için semantik bölümler hazırlar.", "n8n akışları koordine ederken Supabase operasyonel veri tabanı olarak çalışır. Kayıtlar yalnızca gerekli koşulları sağladığında yayımlanır.", "Sistem PDF’in yanına genel bir özet eklemez. İyi görünen bir özet, adayın başvurup başvuramayacağını belirleyen tek cümleyi atlayabilir. Bilgi; rol, konum, nitelik, sınav ve son tarih kararlarına göre düzenlenir."], visual: "ingestion" },
        { eyebrow: "05 — Arama deneyimi", title: "Karmaşıklığı işe yaradığı anda göster.", paragraphs: ["Birçok kamu portalı bilgiyi yayımlayan kurumun organizasyonunu yansıtır. Concoro ise bilgiyi kullanmaya çalışan kişi etrafında tasarlandı.", "Fırsat kartları ilk karar için gereken bilgiyi öne çıkarır. İdari ve yasal ayrıntılar, detay sayfasında kademeli gösterimle erişilebilir kalır.", "Amaç kamu sınavlarının basit olduğunu göstermek değildi. Yirmi fırsata bakan adayın her kartta bütün yasal referanslara ihtiyacı yoktur; başvuru hazırlayan adayın vardır."], list: ["Rol nedir?", "Nerede?", "Son tarih ne zaman?", "Hangi nitelikler gerekiyor?", "Geçmişime uyuyor mu?", "Sonra ne olacak?"] },
        { eyebrow: "06 — Aday bağlamı", title: "Onboarding bir kapı değil, yeniden kullanılabilir ürün katmanı oluşturdu.", paragraphs: ["Filtreleme hâlâ adayın geçmişini resmi kamu terminolojisine çevirebilmesini gerektiriyordu. Kişi ekonomi okuduğunu ve idari rolleri tercih ettiğini bilebilir, fakat doğru iş ailesini veya sözleşme kategorisini bilmeyebilir.", "Eğitim, profesyonel geçmiş, tercih edilen alanlar, coğrafya, uygunluk koşulları ve güçlü yönleri kapsayan beş adımlı onboarding tasarladım.", "Arayüz adayların kendileri hakkında yanıtlayabileceği sorular sordu. Yanıtlar öneriler, öncelikli arama, bildirimler, uygunluk yönlendirmesi ve gelecekteki başvuru desteği için yapılandırılmış ve semantik veriye dönüştü."], list: ["Eğitim ve nitelikler", "Profesyonel geçmiş", "Alanlar ve iş aileleri", "Coğrafi tercihler", "Uygunluk ve beceriler"] },
        { eyebrow: "07 — Yapay zekâ eşleştirmesi", title: "Tüm belgeyi karşılaştırmak teknik olarak geçerli, ürün açısından gürültülüydü.", paragraphs: ["İlk yaklaşım aday embedding’i ile tüm ilanın embedding’ini karşılaştırıyordu. Uzun ilanlar yasal referansları, prosedürleri, sorumlulukları, nitelikleri ve sınav ayrıntılarını karıştırır; hepsini eşit önemli saymak sonuçları kontrol etmeyi zorlaştırdı.", "Her fırsatı üç semantik boyuta ayırdım: rol çekirdeği, gereksinimler ve alan bağlamı. Her biri ayrı embedding’e dönüştürülerek Pinecone’da saklandı.", "Öneriler semantik sonuçları yapılandırılmış kısıtlarla birleştirdi, süresi geçmiş fırsatları çıkardı, sonuçları ilana göre grupladı ve sınırlı, önceliklendirilmiş bir set sundu."] },
        { eyebrow: "08 — Sorumlu öneriler", title: "İlgi ve uygunluk aynı şey değildir.", paragraphs: ["Bir aday rolle ilgilenebilir ama başvuruya uygun olmayabilir. Umut verici bir fırsat gösterip eleme nedenini uzun bir okumadan sonra açıklamak etkileşim değil, boşa harcanan dikkattir.", "Tarihler, nitelikler, zorunlu koşullar ve çalışma kategorileri bu nedenle detay sayfasındaki pasif metinler değil, ürün kısıtları olarak çalışır.", "Öneriler ayrıca opak bir yüzdeyi otorite gibi sunmak yerine; deneyim, eğitim, coğrafya, beceri veya alan tercihi nedeniyle neden göründüklerini açıklar."], quote: "Amaç kullanıcıyı algoritmanın doğru olduğuna ikna etmek değil, sonucun işe yarayıp yaramadığına karar verecek bağlamı sağlamaktı." },
        { eyebrow: "09 — Görünmez zekâ", title: "Yapay zekâ yeni bir hedef olmak yerine tanıdık eylemlerin altında çalıştı.", paragraphs: ["Adaylar zaten karmaşık bir işe alım sürecini anlamaya çalışıyordu. Ayrıca bir chatbot’la nasıl doğru konuşacaklarını öğrenmeleri gerekmiyordu.", "Yapay zekâ çoğunlukla görünür deneyimin arkasında çalıştı: belgeleri yorumladı, bilgi çıkardı, rolleri sınıflandırdı, terminolojiyi normalize etti, semantik temsiller hazırladı, fırsatları getirdi ve açıklamaları destekledi.", "Arayüz tanıdık eylemler üzerine kurulu kaldı: göz at, filtrele, kaydet, karşılaştır ve bildirim al."], list: ["Yorumla", "Çıkar", "Sınıflandır", "Normalize et", "Getir", "Açıkla"] },
        { eyebrow: "10 — Güven ve güncellik", title: "Güzel tasarlanmış süresi geçmiş bir fırsat hâlâ süresi geçmiştir.", paragraphs: ["Yapılandırılmış kayıt ilanı anlaşılır kıldı, ancak resmi kaynak otorite olarak kaldı. Adaylar bilginin nereden geldiğini görebilir ve başvuru hazırlarken özgün belgeye dönebilir.", "Durum ve tarihler sistem düzeyinde kısıtlar olarak ele alındı. Süresi geçen ilanlar otomatik kapatıldı; aktif keşif, semantik retrieval, öneriler ve bildirimlerden çıkarıldı.", "Güncellik sonradan eklenen bir etiket değildi. Güncel veri, görünür kaynak ve açık belirsizlik deneyimin parçasıydı."] },
        { eyebrow: "11 — Ürün dengeleri", title: "Daha fazla otomasyon ancak bilgi güvenilir kaldığında faydalıydı.", paragraphs: ["Daha geniş kapsam platformu faydalı kılarken tutarsız belgeler, olağandışı sınıflandırmalar ve eksik kayıtlar getirdi. Mimari; doğrulama durumlarına, yeniden işlemeye ve dikkat gerektiren kayıtları belirlemeye ihtiyaç duydu.", "Daha karmaşık kişiselleştirme ilgiyi artırabilirken önerileri anlamayı zorlaştırabilirdi. Tek opak skor yerine modüler eşleştirmeyi tercih ettim.", "Okunabilir özetler yasal eksiksizlikle, büyük ölçekli otomasyon ise insan kontrolüyle birlikte var olmalıydı. Arayüz temel hukuki gerçeği değil, navigasyonu sadeleştirdi."], list: ["Kapsam vs veri kalitesi", "Kişiselleştirme vs şeffaflık", "Sadelik vs hukuki eksiksizlik", "Otomasyon vs kontrol"] },
        { eyebrow: "12 — Sonuç", title: "Arama motorundan bilgi sistemine.", paragraphs: ["Concoro; ilanları işleyebilen, ortak şemaya dönüştürebilen, güncel durumları koruyabilen, yapılandırılmış ve semantik aramayı destekleyen, aday profilleri oluşturan ve açıklanabilir öneriler üreten uçtan uca bir bilgi ürününe dönüştü.", "En önemli sonuç; kaynak belgeleri, yapılandırılmış fırsatları, aday profillerini ve önerileri bağlayan ortak bilgi mimarisiydi. Bu katman ürünün bilgiyi göstermekten öteye geçip aday kararlarını desteklemesini sağladı.", "Bu aşamada olgun davranış analitiği veya uzun vadeli sonuç verisi yoktu. Sonraki aşama sistemin keşfi, uygunluk anlayışını ve başvuru kararlarını gerçekten geliştirip geliştirmediğini test etmeli."] },
        { eyebrow: "13 — Değerlendirme", title: "Arama sorunları çoğu zaman yukarı akışta başlar.", paragraphs: ["Bir arama arayüzü tutarsız, eksik veya kötü sınıflandırılmış bilgiyi telafi edemez. Concoro deneyiminin büyük bölümü sonuç ekrana gelmeden önce belirleniyordu.", "En büyük yapay zekâ iyileştirmeleri daha yeni bir modelden veya daha uzun prompt’tan değil; daha net şemalardan, anlamlı belge bölümlerinden ve deterministik kısıtlardan geldi.", "Akıllı ürün tasarlamak, yalnızca insanların kullandığı arayüzü değil, deneyimi üreten sistemi de tasarlamaktır."], quote: "Bilgiyi kamuya açmak, onu kullanılabilir hale getirmekle aynı şey değildir." }
      ]
    }
  }
};

export const localizedLudwig: Record<"it" | "tr", LocalizedCaseStudy> = {
  it: {
    summary: "Trasformare un motore di ricerca linguistico in una piattaforma di scrittura coerente.",
    description: "Ho creato un sistema di prodotto unificato su web, desktop e mobile per cercare, confrontare, tradurre, riscrivere e migliorare l’inglese senza perdere le prove che rendevano Ludwig distintivo.",
    sections: [
      { eyebrow: "01 — Punto di vista sul prodotto", title: "La feature più importante non era una feature.", paragraphs: ["La maggior parte degli strumenti di scrittura risponde a una domanda binaria: questa frase è corretta? Ludwig aiuta a chiedere se suona naturale, come esprimono la stessa idea autori affidabili e quale alternativa funziona meglio nel contesto.", "Una frase può essere grammaticalmente valida e sembrare comunque innaturale. Due espressioni quasi identiche possono comunicare livelli diversi di formalità, sicurezza o intensità emotiva.", "Ludwig collegava i suggerimenti a esempi reali e fonti visibili. Il redesign doveva proteggere questo comportamento: semplificare non poteva significare eliminare le prove che rendevano utile il prodotto."], quote: "Le persone non cercavano solo una correzione. Cercavano prove." },
      { eyebrow: "02 — Il problema", title: "Il prodotto era cresciuto attorno alla barra di ricerca.", paragraphs: ["Ludwig era nato da un’interazione distintiva: inserire un’espressione, cercarla e osservare come veniva usata in fonti affidabili. Con la crescita, ricerca, confronto, traduzione, correzione e riscrittura si erano aggiunti attorno a quel comportamento.", "Ogni capacità era utile da sola. Insieme costringevano l’utente a tradurre l’intenzione ‘voglio scriverlo meglio’ nelle divisioni interne di Ludwig. L’interfaccia trattava le azioni come destinazioni; l’utente le viveva come momenti consecutivi dello stesso flusso.", "Anche i risultati erano profondi ma senza una gerarchia chiara, i pattern divergevano tra piattaforme e ogni nuova funzione rischiava di introdurre un’altra soluzione locale."], list: ["Navigazione basata sulle feature", "Blocchi di risultato in competizione", "Pattern diversi tra piattaforme", "Una base di design difficile da scalare"] },
      { eyebrow: "03 — Reframing strategico", title: "Era un problema di architettura di prodotto, non un refresh visivo.", paragraphs: ["Layout più puliti, nuova tipografia e controlli aggiornati erano necessari, ma non rispondevano alla domanda centrale: come poteva Ludwig diventare una piattaforma di scrittura più ampia senza perdere la ricerca contestuale?", "Il redesign doveva preservare il comportamento familiare della ricerca creando relazioni più chiare tra le capacità in crescita.", "L’obiettivo non era sostituire il modello mentale esistente, ma dare al prodotto una struttura capace di evolvere senza diventare un menu di strumenti scollegati."] },
      { eyebrow: "04 — Mappatura dell’esperienza", title: "Gli utenti cercavano, verificavano, confrontavano e riscrivevano, a volte nello stesso minuto.", paragraphs: ["Prima delle schermate ho mappato come le persone entravano nel prodotto, inviavano una query, interpretavano il risultato, esploravano alternative, continuavano a lavorare e incontravano limiti o stati diversi dell’account.", "La mappa includeva input, risultati, azioni alternative, utenti anonimi e autenticati, confini free e paid, stati vuoti, loading ed errore, responsive, desktop e mobile.", "Molti problemi di interfaccia erano sintomi di un problema strutturale: l’esperienza era organizzata per capacità individuali anziché per un percorso di scrittura continuo."] },
      { eyebrow: "05 — Intento di scrittura", title: "Forme diverse di aiuto hanno iniziato a sembrare un unico sistema.", paragraphs: ["Ho riorganizzato l’esperienza attorno ai risultati che gli utenti cercavano, non alle divisioni tecniche del prodotto.", "Ricerca, correzione, confronto, traduzione e scrittura estesa restavano azioni diverse, ma condividevano input, navigazione, terminologia e controlli.", "Questo creava continuità senza fingere che ogni problema fosse identico. Una nuova capacità non richiedeva più di capire un altro piccolo prodotto."] },
      { eyebrow: "06 — Architettura dei risultati", title: "I risultati di ricerca sono diventati un’interfaccia decisionale.", paragraphs: ["Ludwig offriva già esempi, alternative e prove contestuali. La sfida era mostrare cosa significassero per la frase dell’utente.", "Ho introdotto cinque livelli: risposta principale, miglioramenti suggeriti, esempi reali, fonti e informazioni di supporto, possibili azioni successive.", "Chi cercava una risposta rapida capiva subito il risultato. Ricercatori, traduttori e professionisti potevano approfondire esempi e fonti. Le informazioni restavano disponibili senza competere tutte sullo stesso piano."] },
      { eyebrow: "07 — Prove e fiducia", title: "Risposte rapide senza falsa certezza.", paragraphs: ["La lingua non ha sempre una sola risposta migliore. Un’espressione può essere comune in ambito accademico e strana in una conversazione. Due alternative possono funzionare entrambe con intenzioni diverse.", "Il redesign ha mantenuto visibile la relazione tra suggerimenti, esempi d’uso, contesto e fonti invece di chiedere fiducia in una correzione misteriosa.", "Il compito del prodotto non era sempre dire ‘usa questa frase’, ma presentare le opzioni migliori e le prove necessarie per scegliere."], quote: "La sicurezza nasceva da prove verificabili, non dal nascondere l’incertezza." },
      { eyebrow: "08 — Continuità", title: "La query restava l’ancora.", paragraphs: ["Strumenti diversi avrebbero potuto creare punti di ingresso, form e regole separate. Ho progettato l’input come punto di partenza condiviso.", "Gli utenti potevano iniziare dalla lingua su cui stavano già lavorando e poi confrontarla, tradurla o migliorarla senza copiarla in strumenti diversi.", "Risultati, alternative e azioni collegate sono diventati parti dello stesso processo. Era possibile esplorare diverse versioni di un’idea senza perdere la frase iniziale."] },
      { eyebrow: "09 — Design cross-platform", title: "I layout cambiavano. La logica del prodotto no.", paragraphs: ["Il redesign copriva web, desktop e mobile. L’obiettivo era continuità comportamentale, non duplicazione visiva.", "Sugli schermi grandi l’interfaccia supportava più densità e confronti affiancati. Su mobile la risposta principale appariva prima, mentre prove e azioni secondarie venivano rivelate progressivamente.", "Input, priorità dei risultati, alternative, fonti e continuazione restavano riconoscibili su ogni dispositivo."] },
      { eyebrow: "10 — Contesto mobile", title: "Il mobile era un contesto, non uno schermo più piccolo.", paragraphs: ["Su mobile le persone controllano una frase in un’email, rivedono una traduzione durante una conversazione o prendono una decisione rapida tra altre attività.", "L’esperienza privilegiava interpretazione immediata, alternative chiare, prove progressive, minore competizione visiva e azioni successive prevedibili.", "Il redesign non eliminava la profondità dei risultati. Cambiava il momento in cui appariva."] },
      { eyebrow: "11 — Design system", title: "Un sistema di prodotto deve sopravvivere a contenuti poco collaborativi.", paragraphs: ["Ho costruito fondazioni e componenti riutilizzabili per tipografia, spacing, colore, input, navigazione, controlli, card dei risultati, stati di sistema, responsive e layout.", "Il sistema era progettato attorno ai comportamenti, non alle schermate finite. Doveva gestire risultati diversi, lunghezze variabili, informazioni parziali, stati multipli e future capacità di scrittura.", "Un prodotto linguistico può mostrare una frase breve o molti esempi lunghi. Un design che funziona solo con placeholder perfetti non è un sistema di prodotto. È uno screenshot."] },
      { eyebrow: "12 — Trade-off di prodotto", title: "La familiarità era un vantaggio, non un ostacolo.", paragraphs: ["Ludwig aveva già una base di utenti. Una reinvenzione totale avrebbe prodotto un prima e dopo più spettacolare, ma anche più rischio.", "Il redesign ha conservato il ruolo centrale della ricerca, il modello basato sulle prove, gli esempi reali e il legame tra suggerimenti e fonti. Ha cambiato gerarchia, prevedibilità, relazioni tra strumenti e continuità tra dispositivi.", "Velocità doveva convivere con profondità, coerenza con contesto di piattaforma, familiarità con cambiamento e visibilità delle feature con semplicità."], list: ["Velocità vs profondità", "Coerenza vs contesto di piattaforma", "Familiarità vs reinvenzione", "Visibilità delle feature vs semplicità"] },
      { eyebrow: "13 — Risultato", title: "Da motore di ricerca linguistico a piattaforma di scrittura coerente.", paragraphs: ["Il redesign ha creato una base unificata su web, desktop e mobile: relazioni più chiare tra strumenti, un percorso più comprensibile dalla query alla decisione, una gerarchia più forte e un sistema di componenti scalabile.", "Non esistevano misurazioni di base affidabili per dichiarare tempi più rapidi o risultati di scrittura migliori. L’impatto era visibile nella struttura: azioni prima scollegate condividevano un modello e le piattaforme iniziavano a comportarsi come parti dello stesso sistema.", "Il lavoro più difficile non era disegnare schermate, ma decidere cosa mantenere familiare, cosa cambiare e quali pattern potessero sostenere un prodotto ancora in evoluzione."], quote: "Un prodotto coerente è quello in cui gli utenti capiscono come le parti li aiutano a completare lo stesso lavoro." }
    ]
  },
  tr: {
    summary: "Bir dil arama motorunu bütünlüklü bir yazma platformuna dönüştürmek.",
    description: "Ludwig’i farklılaştıran kanıt temelli deneyimi kaybetmeden; arama, karşılaştırma, çeviri, yeniden yazma ve İngilizceyi geliştirme eylemleri için web, masaüstü ve mobilde birleşik bir ürün sistemi oluşturdum.",
    sections: [
      { eyebrow: "01 — Ürün bakış açısı", title: "En önemli özellik, bir özellik değildi.", paragraphs: ["Çoğu yazma aracı ikili bir soruya yanıt verir: bu cümle doğru mu? Ludwig ise cümlenin doğal duyulup duyulmadığını, güvenilir yazarların aynı fikri nasıl ifade ettiğini ve hangi alternatifin bağlama daha iyi uyduğunu anlamaya yardım eder.", "Bir cümle dil bilgisi açısından doğru olup yine de doğal duyulmayabilir. Benzer iki ifade farklı resmiyet, güven veya duygusal ağırlık taşıyabilir.", "Ludwig önerileri gerçek örneklere ve görünür kaynaklara bağlıyordu. Yeniden tasarım bu davranışı korumalıydı; sadeleştirmek, ürünü faydalı kılan kanıtı kaldırmak anlamına gelemezdi."], quote: "İnsanlar yalnızca düzeltme istemiyordu. Kanıt istiyordu." },
      { eyebrow: "02 — Sorun", title: "Ürün arama kutusunun etrafında büyümüştü.", paragraphs: ["Ludwig ayırt edici bir etkileşimle başladı: bir ifade yaz, ara ve benzer dilin güvenilir kaynaklarda nasıl kullanıldığını incele. Ürün büyüdükçe arama, karşılaştırma, çeviri, düzeltme ve yeniden yazma bu davranışın çevresine eklendi.", "Her yetenek tek başına faydalıydı. Birlikte, kullanıcının ‘bunu daha iyi yazmak istiyorum’ niyetini Ludwig’in iç bölümlerine çevirmesini gerektiriyordu. Arayüz eylemleri hedefler olarak, kullanıcı ise aynı akışın ardışık anları olarak deneyimliyordu.", "Sonuçlar derindi fakat hiyerarşi zayıftı, platform pattern’leri ayrışmıştı ve her yeni özellik başka bir yerel çözüm riski taşıyordu."], list: ["Özellik odaklı navigasyon", "Birbiriyle yarışan sonuç blokları", "Platformlar arasında ayrışan pattern’ler", "Ölçeklenmesi zor tasarım temeli"] },
      { eyebrow: "03 — Stratejik çerçeve", title: "Bu görsel yenileme değil, ürün mimarisi sorunuydu.", paragraphs: ["Daha temiz yerleşimler, yeni tipografi ve güncel kontroller gerekliydi; ancak temel soruyu yanıtlamıyordu: Ludwig bağlamsal arama deneyimini kaybetmeden nasıl daha geniş bir yazma platformuna dönüşebilirdi?", "Yeniden tasarım, tanıdık arama davranışını korurken büyüyen yetenekler arasında daha net ilişkiler kurmalıydı.", "Amaç mevcut zihinsel modeli bir gecede değiştirmek değil, ürünün kopuk araçlar menüsüne dönüşmeden gelişebileceği bir yapı sağlamaktı."] },
      { eyebrow: "04 — Deneyim haritalama", title: "Kullanıcılar bazen aynı dakika içinde arıyor, kontrol ediyor, karşılaştırıyor ve yeniden yazıyordu.", paragraphs: ["Ekranları tasarlamadan önce insanların ürüne girişini, sorgu göndermesini, sonucu yorumlamasını, alternatifleri keşfetmesini, çalışmaya devam etmesini ve ürün sınırlarıyla karşılaşmasını haritaladım.", "Harita; input ve sonuç akışlarını, alternatif yazma eylemlerini, anonim ve giriş yapmış deneyimleri, ücretsiz ve ücretli sınırları, boş, yükleme ve hata durumlarını, responsive davranışı ve masaüstü-mobil etkileşimlerini kapsadı.", "Birçok arayüz sorunu daha derin bir yapının belirtisiydi: deneyim kesintisiz yazma yolculuğu yerine tekil yetenekler etrafında tasarlanmıştı."] },
      { eyebrow: "05 — Yazma niyeti", title: "Farklı yardım biçimleri tek bir sistem gibi hissettirmeye başladı.", paragraphs: ["Deneyimi ürünün teknik bölümleri yerine kullanıcıların ulaşmak istediği sonuçlar etrafında yeniden düzenledim.", "Arama, düzeltme, karşılaştırma, çeviri ve uzun metin üzerinde çalışma farklı kaldı; ancak ortak input, navigasyon, terminoloji ve kontrolleri paylaşmaya başladı.", "Bu, her yazma sorununu aynıymış gibi göstermeden devamlılık yarattı. Yeni bir yetenek artık başka bir küçük ürünü öğrenmeyi gerektirmiyordu."] },
      { eyebrow: "06 — Sonuç mimarisi", title: "Arama sonuçları bir karar arayüzüne dönüştü.", paragraphs: ["Ludwig zaten örnekler, alternatifler ve bağlamsal kanıt sunuyordu. Tasarım sorunu bu bilgilerin kullanıcının cümlesi için ne anlama geldiğini göstermekti.", "Beş katmanlı hiyerarşi oluşturdum: ana yanıt, önerilen geliştirmeler, gerçek kullanım örnekleri, kaynak ve destekleyici bilgi, sonraki eylemler.", "Hızlı yanıt arayan kullanıcı ana sonucu hemen anlayabilirken araştırmacı, çevirmen veya profesyonel örnek ve kaynakları ayrıntılı inceleyebiliyordu. Bilgi kaybolmadı, aynı görsel düzlemde yarışmayı bıraktı."] },
      { eyebrow: "07 — Kanıt ve güven", title: "Sahte kesinlik olmadan hızlı yanıtlar.", paragraphs: ["Dilde her zaman tek bir en iyi yanıt yoktur. Bir ifade akademik yazıda yaygın, konuşmada tuhaf olabilir. İki alternatif farklı niyetlerle aynı anda doğru olabilir.", "Yeniden tasarım; kullanıcıdan gizemli bir düzeltmeye güvenmesini istemek yerine öneriler, kullanım örnekleri, bağlam ve kaynaklar arasındaki ilişkiyi görünür tuttu.", "Ürünün görevi her zaman ‘bu cümleyi kullan’ demek değildi. Bazen en güçlü seçenekleri ve aralarında karar vermek için gereken kanıtı göstermek daha faydalıydı."], quote: "Güven, belirsizliği gizlemekten değil, kullanıcının inceleyebildiği kanıttan geldi." },
      { eyebrow: "08 — Devamlılık", title: "Sorgu, deneyimin çapası olarak kaldı.", paragraphs: ["Farklı araçlar kolayca ayrı giriş noktaları, formlar ve kurallar yaratabilirdi. Input’u deneyimin ortak başlangıç noktası olarak tasarladım.", "Kullanıcılar üzerinde çalıştıkları dille başlayıp cümleyi farklı araçlara kopyalamadan karşılaştırabiliyor, çevirebiliyor veya geliştirebiliyordu.", "Sonuçlar, alternatifler ve ilgili eylemler aynı sürecin parçaları oldu. Kullanıcılar ilk cümleyi kaybetmeden fikrin farklı sürümleri arasında gezinebildi."] },
      { eyebrow: "09 — Platformlar arası tasarım", title: "Yerleşimler değişti. Ürün mantığı değişmedi.", paragraphs: ["Yeniden tasarım web, masaüstü ve mobili kapsadı. Amaç görsel kopyalama değil, davranışsal devamlılıktı.", "Büyük ekranlarda daha yoğun bilgi ve yan yana karşılaştırma vardı. Mobilde ana yanıt önce geliyor, kanıt ve ikincil eylemler kademeli açılıyordu.", "Sorgu girişi, sonuç önceliği, alternatifler, kaynaklara erişim ve sonraki eylemler bütün cihazlarda tanınır kaldı."] },
      { eyebrow: "10 — Mobil bağlam", title: "Mobil, daha küçük bir ekran değil ayrı bir bağlamdı.", paragraphs: ["Mobil kullanıcı e-posta içindeki cümleyi kontrol edebilir, konuşma sırasında çeviri inceleyebilir veya diğer işler arasında hızlı karar verebilir.", "Deneyim; sonucu hemen anlamayı, alternatiflere net erişimi, kanıtın kademeli gösterimini, daha az görsel rekabeti ve öngörülebilir sonraki eylemleri önceliklendirdi.", "Yeniden tasarım Ludwig sonuçlarının derinliğini kaldırmadı. Bu derinliğin ne zaman göründüğünü değiştirdi."] },
      { eyebrow: "11 — Tasarım sistemi", title: "Ürün sistemi uslu durmayan içeriğe dayanmalıdır.", paragraphs: ["Tipografi, boşluk, renk, input, navigasyon, kontroller, sonuç kartları, sistem durumları, responsive davranış ve sayfa düzenleri için yeniden kullanılabilir temeller ve bileşenler oluşturdum.", "Sistem bitmiş ekranlar değil davranışlar etrafında tasarlandı. Farklı sonuç tiplerini, değişken uzunlukları, eksik bilgiyi, çoklu etkileşim durumlarını ve gelecekteki yazma yeteneklerini yönetmeliydi.", "Dil ürünü tek kısa cümle veya uzun örnekler gösterebilir. Yalnızca kusursuz placeholder metinle çalışan tasarım ürün sistemi değil, ekran görüntüsüdür."] },
      { eyebrow: "12 — Ürün dengeleri", title: "Tanıdıklık engel değil, avantajdı.", paragraphs: ["Ludwig’in yerleşik kullanıcı kitlesi vardı. Tam bir yeniden icat daha dramatik önce-sonra görüntüsü üretir, fakat ürün riskini de artırırdı.", "Yeniden tasarım aramanın merkezî rolünü, kanıt temelli sonuç modelini, gerçek örnekleri ve öneri-kaynak bağlantısını korudu. Hiyerarşiyi, eylemlerin öngörülebilirliğini, araç ilişkilerini ve cihazlar arası devamlılığı değiştirdi.", "Hız derinlikle, tutarlılık platform bağlamıyla, tanıdıklık değişimle ve özellik görünürlüğü arayüz sadeliğiyle dengelenmeliydi."], list: ["Hız vs derinlik", "Tutarlılık vs platform bağlamı", "Tanıdıklık vs yeniden icat", "Özellik görünürlüğü vs arayüz sadeliği"] },
      { eyebrow: "13 — Sonuç", title: "Dil arama motorundan bütünlüklü yazma platformuna.", paragraphs: ["Yeniden tasarım web, masaüstü ve mobilde birleşik bir temel oluşturdu: yazma araçları arasında daha net ilişki, sorgudan karara daha anlaşılır yol, karmaşık sonuçlar için güçlü hiyerarşi ve ölçeklenebilir bileşen sistemi.", "Daha hızlı tamamlama veya daha iyi yazma sonucuna dair kesin iddiaları destekleyen güvenilir başlangıç ölçümleri yoktu. Etki ürün yapısında görünüyordu: kopuk eylemler ortak modele taşındı ve platformlar aynı sistemin parçaları gibi davranmaya başladı.", "En zor iş ekranları çizmek değil; neyin tanıdık kalacağına, neyin değişeceğine ve gelişmeye devam eden ürünü hangi pattern’lerin taşıyacağına karar vermekti."], quote: "Bütünlüklü ürün, kullanıcıların parçaların aynı işi tamamlamalarına nasıl yardım ettiğini anladığı üründür." }
    ]
  }
};

export const localizedProjectMeta: Record<"it" | "tr", Record<"lexhero" | "afterlayer" | "concoro" | "ludwig-guru", Pick<Project, "role" | "services" | "status">>> = {
  it: {
    lexhero: { role: "Direzione di prodotto, experience design e comunicazione", services: ["Strategia di prodotto", "Experience design", "Posizionamento"], status: "In sviluppo" },
    afterlayer: { role: "Fondatore, Product Designer e Product Strategist", services: ["Strategia di prodotto", "Experience design", "Workflow di contenuto assistiti dall’AI", "Definizione dell’MVP"], status: "2026–in corso" },
    concoro: { role: "Fondatore, Product Designer e Product Strategist", services: ["Strategia di prodotto", "Architettura dell’informazione", "Sistemi AI"], status: "In corso" },
    "ludwig-guru": { role: "Lead UX/UI Designer", services: ["Strategia di prodotto e UX", "Esperienza cross-platform", "Design system"], status: "In corso" }
  },
  tr: {
    lexhero: { role: "Ürün yönü, deneyim tasarımı ve iletişim", services: ["Ürün stratejisi", "Deneyim tasarımı", "Konumlandırma"], status: "Geliştirme aşamasında" },
    afterlayer: { role: "Kurucu, Ürün Tasarımcısı ve Ürün Stratejisti", services: ["Ürün stratejisi", "Deneyim tasarımı", "Yapay zekâ destekli içerik akışları", "MVP tanımı"], status: "2026–devam ediyor" },
    concoro: { role: "Kurucu, Ürün Tasarımcısı ve Ürün Stratejisti", services: ["Ürün stratejisi", "Bilgi mimarisi", "Yapay zekâ sistemleri"], status: "Devam ediyor" },
    "ludwig-guru": { role: "Baş UX/UI Tasarımcısı", services: ["Ürün ve UX stratejisi", "Platformlar arası deneyim", "Tasarım sistemi"], status: "Devam ediyor" }
  }
};
