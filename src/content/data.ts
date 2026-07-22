import type { Article, Locale, Project } from "./types";
import { localizedCaseStudies, localizedLudwig, localizedProjectMeta } from "./case-study-translations";
import { afterlayerCaseStudy } from "./afterlayer-case-study";
import { afterlayerCaseStudyIt } from "./afterlayer-case-study-it";
import { afterlayerCaseStudyTr } from "./afterlayer-case-study-tr";

type SiteCopy = {
  languageName: string;
  nav: { thinking: string; work: string; services: string; conversation: string; menu: string; close: string };
  hero: { eyebrow: string; before: string; emphasis: string; after: string; primary: string; secondary: string; support: string };
  thinking: { title: string; intro: string; description: string; all: string; indexTitle: string; indexIntro: string; related: string; back: string };
  process: { title: string; description: string };
  work: { title: string; intro: string; caseStudy: string; caseStudyLabel: string; indexTitle: string; indexIntro: string; role: string; services: string; status: string; next: string; back: string };
  footer: { title: string; copy: string; email: string; linkedin: string; note: string };
};

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    languageName: "English",
    nav: { thinking: "Thinking", work: "Work", services: "Services", conversation: "Start a conversation", menu: "Menu", close: "Close" },
    hero: { eyebrow: "Product strategy, brand and experience. Currently CMO at Keplera.", before: "Complex products need", emphasis: "clearer", after: "experiences.", primary: "See selected work", secondary: "Read my thinking", support: "I help product teams clarify what they are building, how it should work and why people should trust it." },
    thinking: { title: "Selected Thinking", intro: "Most products don’t need to look smarter.\nThey need to feel less confusing.", description: "I write about product clarity, AI, trust, aftercare and the unnecessary complexity companies build around otherwise simple things.", all: "View all writing", indexTitle: "Thinking", indexIntro: "Notes on product clarity, trust, AI and the systems around the things people use.", related: "Related writing", back: "Back to Thinking" },
    process: { title: "How I Work", description: "The work moves from uncertainty to a clear point of view, then into a system teams can build, launch and improve." },
    work: { title: "Selected Work", intro: "Ideas matter when they change what gets built.", caseStudy: "View case study", caseStudyLabel: "Case study", indexTitle: "Work", indexIntro: "Selected product, positioning and experience work for complex products and ambitious teams.", role: "Role", services: "Services", status: "Status", next: "Next project", back: "Back to Work" },
    footer: { title: "Work with me", copy: "I work with teams that need clearer product direction, stronger positioning and a digital experience people can understand and trust.", email: "Email", linkedin: "LinkedIn", note: "Designed by Bora Sıpal. Built with Codex." },
  },
  it: {
    languageName: "Italiano",
    nav: { thinking: "Pensieri", work: "Lavori", services: "Servizi", conversation: "Iniziamo una conversazione", menu: "Menu", close: "Chiudi" },
    hero: { eyebrow: "Strategia di prodotto, brand ed esperienza. Attualmente CMO di Keplera.", before: "I prodotti complessi hanno bisogno di", emphasis: "esperienze", after: "più chiare.", primary: "Guarda i lavori", secondary: "Leggi i miei pensieri", support: "Aiuto i team di prodotto a chiarire cosa stanno costruendo, come dovrebbe funzionare e perché le persone dovrebbero fidarsi." },
    thinking: { title: "Pensieri selezionati", intro: "La maggior parte dei prodotti non deve sembrare più intelligente.\nDeve risultare meno confusa.", description: "Scrivo di chiarezza del prodotto, AI, fiducia, assistenza e della complessità inutile costruita intorno a cose altrimenti semplici.", all: "Vedi tutti gli articoli", indexTitle: "Pensieri", indexIntro: "Note su chiarezza del prodotto, fiducia, AI e i sistemi intorno alle cose che usiamo.", related: "Articoli correlati", back: "Torna ai Pensieri" },
    process: { title: "Come lavoro", description: "Il lavoro parte dall’incertezza, arriva a un punto di vista chiaro e diventa un sistema che i team possono costruire, lanciare e migliorare." },
    work: { title: "Lavori selezionati", intro: "Le idee contano quando cambiano ciò che viene costruito.", caseStudy: "Vedi il caso studio", caseStudyLabel: "Caso studio", indexTitle: "Lavori", indexIntro: "Una selezione di lavori su prodotto, posizionamento ed esperienza per prodotti complessi e team ambiziosi.", role: "Ruolo", services: "Servizi", status: "Stato", next: "Prossimo progetto", back: "Torna ai Lavori" },
    footer: { title: "Lavoriamo insieme", copy: "Lavoro con team che hanno bisogno di una direzione di prodotto più chiara, un posizionamento più forte e un’esperienza digitale comprensibile e affidabile.", email: "Email", linkedin: "LinkedIn", note: "Progettato da Bora Sıpal. Costruito con Codex." },
  },
  tr: {
    languageName: "Türkçe",
    nav: { thinking: "Düşünceler", work: "İşler", services: "Hizmetler", conversation: "Konuşmaya başlayalım", menu: "Menü", close: "Kapat" },
    hero: { eyebrow: "Ürün stratejisi, marka ve deneyim. Şu anda Keplera’da CMO.", before: "Karmaşık ürünlerin ihtiyacı", emphasis: "daha anlaşılır", after: "deneyimlerdir.", primary: "Seçili işleri gör", secondary: "Yazılarımı oku", support: "Ürün ekiplerinin ne inşa ettiklerini, nasıl çalışması gerektiğini ve insanların neden güvenmesi gerektiğini netleştirmelerine yardımcı oluyorum." },
    thinking: { title: "Seçili Düşünceler", intro: "Çoğu ürünün daha akıllı görünmesi gerekmez.\nDaha az kafa karıştırıcı hissettirmesi gerekir.", description: "Ürün netliği, yapay zekâ, güven, satış sonrası deneyim ve şirketlerin basit şeylerin etrafında kurduğu gereksiz karmaşıklık hakkında yazıyorum.", all: "Tüm yazıları gör", indexTitle: "Düşünceler", indexIntro: "Ürün netliği, güven, yapay zekâ ve kullandığımız şeylerin çevresindeki sistemler üzerine notlar.", related: "İlgili yazılar", back: "Düşüncelere dön" },
    process: { title: "Nasıl Çalışırım", description: "Çalışma belirsizlikten net bir bakış açısına, ardından ekiplerin inşa edip yayımlayabileceği ve geliştirebileceği bir sisteme ilerler." },
    work: { title: "Seçili İşler", intro: "Fikirler, inşa edileni değiştirdiğinde önem kazanır.", caseStudy: "Vaka çalışmasını gör", caseStudyLabel: "Vaka çalışması", indexTitle: "İşler", indexIntro: "Karmaşık ürünler ve iddialı ekipler için seçilmiş ürün, konumlandırma ve deneyim çalışmaları.", role: "Rol", services: "Hizmetler", status: "Durum", next: "Sonraki proje", back: "İşlere dön" },
    footer: { title: "Birlikte çalışalım", copy: "Daha net ürün yönüne, daha güçlü konumlandırmaya ve insanların anlayıp güvenebileceği bir dijital deneyime ihtiyaç duyan ekiplerle çalışıyorum.", email: "E-posta", linkedin: "LinkedIn", note: "Bora Sıpal tarafından tasarlandı. Codex ile geliştirildi." },
  },
};

const articleBase = [
  { slug: "premium-product-aftercare", publishedAt: "2026-07-16", featured: true, tags: ["aftercare", "trust"] },
  { slug: "cac-is-not-decided-at-purchase", publishedAt: "2026-07-16", featured: false, tags: ["growth", "aftercare", "economics"] },
  { slug: "repeat-purchase-not-email-marketing", publishedAt: "2026-07-16", featured: false, tags: ["retention", "aftercare", "growth"] },
] as const;

const articleTranslations: Record<Locale, Array<{ title: string; description: string; intro: string; body: Article["body"] }>> = {
  en: [
    {
      title: "The strange place brands stop caring",
      description: "Why premium brands invest heavily in the buying experience, then leave ownership to PDFs, forms and fragmented support.",
      intro: "Most premium brands are very good before the sale.",
      body: [
        { type: "paragraph", text: "They know how to make the product look desirable. The website is polished. The photos are careful. The packaging feels considered. The checkout has probably been tested, redesigned, simplified, optimized, and then discussed in a few meetings that could have been emails." },
        { type: "paragraph", text: "Then the product arrives." },
        { type: "paragraph", text: "For a few minutes, everything still feels premium. The box opens nicely. The material feels good. The customer has that small “yes, I made the right choice” moment." },
        { type: "paragraph", text: "Then, quite often, the experience gets weirdly average." },
        { type: "paragraph", text: "The customer needs to set the product up, so they look for instructions. Maybe there is a folded paper manual in the box. Maybe there is a QR code. Maybe the QR code opens a PDF that was clearly designed for printing, not for a phone. Maybe the manual is hidden somewhere on a support page with a file name like manual_final_v7_EN.pdf." },
        { type: "paragraph", text: "Then comes warranty registration. That usually feels like admin work, because brands treat it like admin work." },
        { type: "paragraph", text: "Then care instructions. Repair information. Spare parts. Support. Returns. Product data. Sustainability claims. All these things exist somewhere, but usually not in one clean place. They are scattered across PDFs, forms, help centers, email threads and internal systems." },
        { type: "paragraph", text: "This is strange." },
        { type: "paragraph", text: "Brands spend so much time designing the buying experience, then leave the ownership experience to whatever was easiest to upload." },
        { type: "paragraph", text: "For cheap products, maybe that is fine. Nobody expects poetry from a 12 euro kitchen tool." },
        { type: "paragraph", text: "But for premium physical products, the gap is obvious. The product feels expensive. The after sales layer often does not." },
        { type: "paragraph", text: "And this is not only a customer experience problem." },
        { type: "paragraph", text: "It is a growth problem." },
        { type: "paragraph", text: "Harvard Business Review has a line that gets quoted a lot for a reason: depending on the study and the industry, acquiring a new customer can cost 5 to 25 times more than retaining an existing one." },
        { type: "paragraph", text: "There is also the old Bain & Company retention argument: even a 5% increase in customer retention can increase profits by 25% to 95%." },
        { type: "paragraph", text: "You can argue about the exact number. Different industries behave differently. A luxury furniture brand, an outdoor gear company and a subscription software business will not have the same economics." },
        { type: "paragraph", text: "But the direction is hard to argue with." },
        { type: "paragraph", text: "Keeping the right customer is usually much cheaper than finding a new one." },
        { type: "paragraph", text: "Which makes the post-purchase experience a very strange place to be lazy." },
        { type: "paragraph", text: "A brand pays to attract the customer." },
        { type: "paragraph", text: "It pays to convert the customer." },
        { type: "paragraph", text: "It ships the product." },
        { type: "paragraph", text: "Then the customer scans a QR code and gets a PDF." },
        { type: "paragraph", text: "That is a very odd place to stop caring." },
        { type: "paragraph", text: "After sales is still treated as support. A department. A cost. A place where tickets go when something breaks." },
        { type: "paragraph", text: "I think that view is too narrow now." },
        { type: "paragraph", text: "For physical product brands, after sales is becoming one of the most useful parts of the customer relationship." },
        { type: "paragraph", text: "It is where the brand can reconnect with customers who bought through retailers, distributors or marketplaces." },
        { type: "paragraph", text: "It is where warranty registration can turn into first-party product data." },
        { type: "paragraph", text: "It is where care and maintenance can extend product life." },
        { type: "paragraph", text: "It is where repair and spare parts can become part of the brand experience instead of a frustrating side quest." },
        { type: "paragraph", text: "It is also where regulation is starting to show up in practical ways." },
        { type: "paragraph", text: "Right to Repair is not just a policy conversation if you sell physical products. At some point it turns into basic questions." },
        { type: "paragraph", text: "Can the customer understand how to maintain the product?" },
        { type: "paragraph", text: "Can they find repair information?" },
        { type: "paragraph", text: "Can they request parts?" },
        { type: "paragraph", text: "Can the brand manage repair flows without chaos?" },
        { type: "paragraph", text: "Digital Product Passports point in the same direction. Product data cannot stay buried inside internal systems forever. More of it will need to become structured, accessible and useful across the product lifecycle." },
        { type: "paragraph", text: "That sounds boring when you say it like that." },
        { type: "paragraph", text: "And yes, “product lifecycle data” is not exactly a phrase that gets people excited over coffee." },
        { type: "paragraph", text: "But the boring part is where the business value is." },
        { type: "paragraph", text: "A customer scans a code on a product. What happens next?" },
        { type: "paragraph", text: "Today, too often, the answer is simple: a PDF opens." },
        { type: "paragraph", text: "That is a waste." },
        { type: "paragraph", text: "That scan could open a setup guide that actually works on mobile." },
        { type: "paragraph", text: "It could help the customer register the product in 20 seconds." },
        { type: "paragraph", text: "It could show care instructions based on the exact model." },
        { type: "paragraph", text: "It could collect the serial number." },
        { type: "paragraph", text: "It could route a support request with product context already attached." },
        { type: "paragraph", text: "It could explain repair options." },
        { type: "paragraph", text: "It could help the customer request a spare part without sending three emails and a photo of the wrong component." },
        { type: "paragraph", text: "It could give the brand a direct connection to a customer it would otherwise never know." },
        { type: "paragraph", text: "The QR code is not the interesting part." },
        { type: "paragraph", text: "The interesting part is what sits behind it." },
        { type: "paragraph", text: "For a long time, after sales was treated like the basement of the brand experience. Useful, necessary, not very glamorous." },
        { type: "paragraph", text: "But that is starting to change." },
        { type: "paragraph", text: "The next customer relationship may not start with another ad." },
        { type: "paragraph", text: "It may start inside the product box." },
        { type: "paragraph", text: "That is the space I am exploring with Afterlayer: how premium physical product brands can turn after sales into a better ownership experience, a cleaner service layer and a more useful product lifecycle channel." },
        { type: "paragraph", text: "Not by adding more noise." },
        { type: "paragraph", text: "Just by making the part after the purchase feel as considered as the part before it." },
        { type: "source", label: "Source", title: "The Value of Keeping the Right Customers", byline: "Amy Gallo · Harvard Business Review · 2014", href: "https://hbr.org/2014/10/the-value-of-keeping-the-right-customers" },
      ],
    },
    {
      title: "Il riacquisto non è un problema di email marketing",
      description: "Perché il riacquisto dipende più dal prodotto, dal servizio e dall’esperienza d’uso che da un’altra campagna di retention.",
      intro: "Un cliente acquista qualcosa dal tuo brand.",
      body: [
        { type: "paragraph", text: "Qualche giorno dopo, iniziano le email. “Come ti trovi con il tuo acquisto?” “Completa il look.” “Gli altri clienti hanno apprezzato anche...” “Ecco il 10% di sconto sul prossimo ordine.”" },
        { type: "paragraph", text: "Il prodotto potrebbe essere ancora chiuso nell’ingresso, ma il sistema di retention ha già deciso che la relazione sta andando meravigliosamente." },
        { type: "paragraph", text: "È così che spesso viene gestito il riacquisto. La prima vendita appartiene all’acquisizione. Poi subentra l’email marketing." },
        { type: "paragraph", text: "Quando i clienti non tornano, i brand rispondono inviando di più: più campagne, automazioni, sconti e oggetti allegri che fingono che martedì sia un evento." },
        { type: "paragraph", text: "L’email conta. Le si sta semplicemente chiedendo di risolvere il problema sbagliato." },
        { type: "paragraph", text: "Il riacquisto dipende solitamente meno da ciò che accade nella casella di posta che da ciò che accade quando arriva il prodotto." },
        { type: "heading", text: "Il secondo acquisto comincia con il primo prodotto" },
        { type: "paragraph", text: "I clienti raramente tornano perché un flusso automatico ha ricordato loro che il brand esiste. Tornano perché il primo prodotto ha funzionato." },
        { type: "paragraph", text: "È arrivato quando promesso. Hanno capito come usarlo. Ha fatto ciò per cui lo avevano acquistato. Quando qualcosa è andato storto, ricevere aiuto non è stato doloroso." },
        { type: "paragraph", text: "Quando servivano istruzioni per la cura, un ricambio o una riparazione, non hanno dovuto iniziare una piccola carriera amministrativa per trovarli. È qui che comincia il riacquisto." },
        { type: "paragraph", text: "Un tipico flusso email presuppone qualcosa del genere:" },
        { type: "quote", text: "Acquisto > Attesa di 14 giorni > Invio del coupon" },
        { type: "paragraph", text: "Il cliente vive qualcosa di più simile a questo:" },
        { type: "quote", text: "Acquisto > Utilizzo > Comprensione > Fiducia > Nuovo bisogno > Ritorno" },
        { type: "paragraph", text: "L’email può aiutare lungo il percorso. Non può fabbricare la fiducia che prodotto e servizio non hanno saputo creare." },
        { type: "paragraph", text: "Una buona campagna di retention non può salvare una configurazione confusa, un ricambio mancante o un’assistenza terribile. Può però ricordare al cliente che tutto questo è successo." },
        { type: "heading", text: "I brand ottimizzano la parte che riescono a vedere" },
        { type: "paragraph", text: "Prima della vendita, i brand possono tracciare quasi tutto: quale annuncio è stato cliccato, quali pagine sono state visitate, per quanto tempo, cosa è stato aggiunto al carrello e dove il cliente ha rinunciato." },
        { type: "paragraph", text: "Possono perfino sapere che il cliente è tornato da un annuncio Instagram dopo aver ignorato un’email inviata giovedì alle 10:07." },
        { type: "paragraph", text: "Poi il cliente acquista. Da quel momento, la visibilità crolla." },
        { type: "paragraph", text: "Ha aperto la scatola? Ha configurato bene il prodotto? Ha capito come prendersene cura? Si è rotto un componente? Si è frustrato e ha smesso di usarlo?" },
        { type: "paragraph", text: "Forse ha risolto il problema su YouTube, trovato la risposta su Reddit o letto la spiegazione di un certo Marco in un forum del 2017. Di solito il brand non lo sa." },
        { type: "paragraph", text: "Ha una mappa dettagliata del percorso verso il checkout e uno spazio vuoto dove comincia l’utilizzo. Continua quindi a lavorare sulla parte che può raggiungere: la casella di posta." },
        { type: "paragraph", text: "È comprensibile. Ma la casella di posta è soltanto una piccola parte della relazione." },
        { type: "heading", text: "Uno sconto può creare una vendita senza creare fedeltà" },
        { type: "paragraph", text: "Gli sconti funzionano, a volte molto bene. Possono riportare qualcuno a un’altra transazione. Ma non significa che il cliente sia diventato fedele; a volte ha semplicemente imparato la routine." },
        { type: "paragraph", text: "Compra una volta a prezzo pieno. Ricevi tre email. Ignora le prime due. Usa il codice del 15% nella terza. Congratulazioni: brand e cliente hanno creato un piccolo rituale di negoziazione." },
        { type: "paragraph", text: "Non c’è nulla di sbagliato nelle promozioni quando i conti funzionano. L’errore è considerare un secondo ordine scontato come prova di fedeltà." },
        { type: "paragraph", text: "Un cliente fedele torna perché la prima esperienza ha reso più sicuro l’acquisto successivo. Sa quale qualità aspettarsi, come si comporta il prodotto e che la consegna avverrà." },
        { type: "paragraph", text: "Se qualcosa si rompe, crede che il brand lo aiuterà invece di abbandonarlo con un PDF, un chatbot e un ticket segnato come “risolto” mentre il problema resta notevolmente irrisolto." },
        { type: "paragraph", text: "Un coupon abbassa il prezzo. Una buona esperienza d’uso abbassa il rischio. Non sono la stessa cosa." },
        { type: "heading", text: "Il brand dimostra il proprio valore dopo la vendita" },
        { type: "paragraph", text: "Prima della vendita, le promesse costano poco. Qualità premium. Design attento. Fatto per durare. Fatto per la vita. Il cliente scopre dopo cosa significano davvero." },
        { type: "paragraph", text: "Riesce a trovare le istruzioni senza cercare in cinque pagine di assistenza? A registrare la garanzia senza digitare quattro volte lo stesso numero di serie? A pulire il materiale senza rovinarlo?" },
        { type: "paragraph", text: "Può ordinare il componente di plastica da due euro che decide se un prodotto molto più costoso resta utilizzabile? Può ripararlo? Se contatta l’assistenza, chi risponde sa già quale prodotto e versione possiede?" },
        { type: "paragraph", text: "Questi momenti vengono trattati come dettagli operativi, tra logistica, supporto e servizio clienti, lontano dal marketing. Ma influenzano l’opinione del cliente più di qualsiasi altra campagna." },
        { type: "paragraph", text: "Una pubblicità dice che al brand importa. Una riparazione rivela se è vero." },
        { type: "heading", text: "I prodotti fisici diventano anonimi troppo in fretta" },
        { type: "paragraph", text: "La maggior parte dei prodotti perde la propria identità poco dopo la vendita. Il brand sa che 4.000 unità sono uscite dal magazzino, ma potrebbe non sapere quale cliente possiede quale versione, quali istruzioni siano corrette, quale ricambio sia compatibile o quale problema emerga dopo sei mesi." },
        { type: "paragraph", text: "Il cliente ha il prodotto. Il brand ha l’ordine. Il collegamento tra i due è debole o assente." },
        { type: "paragraph", text: "Questo diventa un problema quando il brand prova a vendere altro. Chi possiede una specifica macchina da caffè non ha bisogno di una newsletter generica sul caffè; potrebbe aver bisogno di un promemoria sulla pulizia, di un filtro, di un accessorio compatibile o di una riparazione." },
        { type: "paragraph", text: "Più avanti potrebbe essere pronto per un altro prodotto, ma la raccomandazione dovrebbe partire da ciò che possiede già." },
        { type: "paragraph", text: "È commercio, ma il contesto utile viene dalla relazione con il prodotto, non da altre campagne. Senza quel contesto, la personalizzazione è spesso soltanto un nome sopra un’offerta generica. “Ciao Sarah” non è una strategia." },
        { type: "heading", text: "Gran parte del lavoro di retention è noioso" },
        { type: "paragraph", text: "La retention viene spesso descritta con parole importanti: community, ecosistemi di loyalty, personalizzazione AI, connessione emotiva. Alcune cose sono utili. Molte producono slide migliori delle esperienze dei clienti." },
        { type: "paragraph", text: "Il riacquisto nasce spesso da cose ordinarie: istruzioni chiare, ricambi davvero disponibili, promemoria utili, garanzia semplice, assistenza che risponde, informazioni corrette e una riparazione che non sembri una punizione." },
        { type: "paragraph", text: "Nulla di tutto questo sembra rivoluzionario. Rende l’utilizzo più semplice, che di solito vale di più." },
        { type: "paragraph", text: "Il cliente continua a valutare il brand molto dopo il checkout. Ogni componente mancante, istruzione confusa e richiesta senza risposta cambia la probabilità di un altro acquisto." },
        { type: "paragraph", text: "La maggior parte di questi momenti non appare mai nella dashboard email. Ma influenza comunque il risultato." },
        { type: "heading", text: "L’email dovrebbe rispondere all’utilizzo" },
        { type: "paragraph", text: "La risposta non è smettere di inviare email. È fare in modo che l’email segua ciò che accade con il prodotto." },
        { type: "paragraph", text: "Un messaggio utile può confermare che la garanzia è attiva, collegare alle istruzioni del modello esatto, ricordare di pulire un componente o comunicare che il ricambio corretto è disponibile." },
        { type: "paragraph", text: "Dopo due anni, può consigliare qualcosa di compatibile con il prodotto già presente in casa. È più utile che inviare a tutti la stessa email “Ci manchi” dopo 45 giorni." },
        { type: "paragraph", text: "A volte al cliente non manca il brand. A volte ha comprato una sedia. Ci è ancora seduto sopra." },
        { type: "heading", text: "Chiedi cosa è successo dopo il primo acquisto" },
        { type: "paragraph", text: "Quando un brand chiede come aumentare il riacquisto, spesso guarda prima alle email del ciclo di vita. Può migliorare i numeri, ma non dovrebbe essere il punto di partenza." },
        { type: "paragraph", text: "Parti da ciò che è successo dopo la consegna. Dove si è confuso il cliente? Di cosa aveva bisogno senza riuscire a trovarlo? Cosa si è rotto? Quali domande continuavano ad arrivare all’assistenza? Cosa ha reso l’utilizzo più semplice?" },
        { type: "paragraph", text: "Sei mesi dopo, il cliente si fida del brand più o meno rispetto al giorno dell’acquisto?" },
        { type: "paragraph", text: "Il riacquisto non è principalmente un risultato della comunicazione. È ciò che resta dopo che prodotto, servizio ed esperienza d’uso hanno fatto il loro lavoro." },
        { type: "paragraph", text: "L’email può ricordare ai clienti che esisti." },
        { type: "quote", text: "Non può dare loro una ragione per tornare se la prima esperienza ha già dato loro una ragione per non farlo." },
      ],
    },
    {
      title: "CAC is not decided when the customer buys",
      description: "Why acquisition economics are only understood after returns, support, retention and lifecycle value become visible.",
      intro: "Most growth teams talk about CAC as if it becomes final at checkout.",
      body: [
        { type: "paragraph", text: "A customer clicks an ad, lands on the site, buys the product, and the dashboard assigns a number. €40. €80. €150. Sometimes more." },
        { type: "paragraph", text: "Then everyone starts arguing about the same things." },
        { type: "paragraph", text: "Is CAC too high? Is the channel still working? Should we cut spend? Should we test different audiences?" },
        { type: "paragraph", text: "Fair questions. But they are incomplete." },
        { type: "paragraph", text: "The better question is: what happens after the customer buys?" },
        { type: "paragraph", text: "Because CAC is not really decided at the moment of purchase. It is priced there. Whether it was good or bad spend only becomes clear later." },
        { type: "heading", text: "A cheap customer can still be expensive" },
        { type: "paragraph", text: "A low CAC looks good in a dashboard. It is also easy to misread." },
        { type: "paragraph", text: "If that customer never buys again, returns the product, opens three support tickets, leaves annoyed, or disappears after the first order, the acquisition was not cheap. It only looked cheap because the company measured the cost before it measured the value." },
        { type: "paragraph", text: "This is one of the more annoying blind spots in growth strategy." },
        { type: "paragraph", text: "Most teams know exactly what they paid to acquire a customer. Far fewer know how much gross margin they kept after returns, refunds, support costs, warranty claims, repairs, repeat purchases, spare parts, accessories, and referrals." },
        { type: "paragraph", text: "That difference matters." },
        { type: "paragraph", text: "A customer acquired for €30 who produces €25 in retained gross margin is not a good customer." },
        { type: "paragraph", text: "A customer acquired for €120 who produces €600 in retained gross margin over time may be a very good one." },
        { type: "paragraph", text: "The cost alone tells you almost nothing." },
        { type: "heading", text: "CAC is not the problem. CAC without retained value is the problem" },
        { type: "paragraph", text: "It is easy to say “CAC is rising” and treat that as the diagnosis." },
        { type: "paragraph", text: "It is not." },
        { type: "paragraph", text: "Rising CAC is not automatically bad. A company can afford higher acquisition costs if the customers it brings in stay longer, buy again, require less support, refer other people, and generate more value over time." },
        { type: "paragraph", text: "The problem is expensive acquisition followed by weak retention." },
        { type: "paragraph", text: "That is where growth starts to break." },
        { type: "paragraph", text: "A brand pays to acquire the customer, then fails to help them set up the product. Or fails to answer a basic care question. Or makes warranty registration painful. Or gives them no easy way to repair the product or find the right spare part. The customer relationship gets weaker right after the company paid to create it." },
        { type: "paragraph", text: "That lost value shows up in different places." },
        { type: "paragraph", text: "Returns. Support costs. Negative reviews. Churn. Lower repeat purchase. More pressure to keep buying fresh demand from paid channels." },
        { type: "paragraph", text: "This is why post-purchase experience is not just a customer service topic. It sits inside the acquisition model." },
        { type: "heading", text: "The media invoice stays the same" },
        { type: "paragraph", text: "A better post-purchase system does not make Meta, Google, influencers, marketplaces, or retail distribution cheaper." },
        { type: "paragraph", text: "The invoice still arrives." },
        { type: "paragraph", text: "The acquisition cost is still paid." },
        { type: "paragraph", text: "But the value created after that payment can change a lot." },
        { type: "paragraph", text: "If the customer reaches product value faster, early frustration drops. If support is easier, trust has a better chance of surviving the first problem. If warranty registration is simple, the brand learns who owns the product. If repair and spare parts are easy to access, the product stays in use longer. If lifecycle engagement is based on real ownership behavior, repeat purchase becomes less random." },
        { type: "paragraph", text: "The company does not reduce CAC directly." },
        { type: "paragraph", text: "It improves CAC productivity." },
        { type: "paragraph", text: "That is the useful distinction." },
        { type: "paragraph", text: "CAC productivity asks: how much retained value did we generate from each acquired customer?" },
        { type: "paragraph", text: "That is a better question than only asking how much the customer cost." },
        { type: "heading", text: "Purchase is only the first proof point" },
        { type: "paragraph", text: "Many companies treat purchase as the final conversion." },
        { type: "paragraph", text: "It is not." },
        { type: "paragraph", text: "Purchase proves that someone was willing to buy. It does not prove that they got value from the product. It does not prove that they understood it, kept it, trusted the brand afterward, or will ever buy anything else." },
        { type: "paragraph", text: "The first transaction starts the economics. It does not finish them." },
        { type: "paragraph", text: "This is especially important for physical product brands." },
        { type: "paragraph", text: "A customer might buy a premium tent, a modular lamp, a baby stroller, a leather bag, or a technical backpack. But the business value of that customer depends on what happens during ownership." },
        { type: "paragraph", text: "Can they set it up? Can they use it without feeling lost? Can they maintain it? Can they get help when something goes wrong? Can they find the right spare part? Can they repair it instead of abandoning it? Can the brand stay present after the sale?" },
        { type: "paragraph", text: "If the answer is no, CAC becomes harder to justify." },
        { type: "heading", text: "The post-purchase phase is where CAC becomes visible" },
        { type: "paragraph", text: "CAC is measured early, but understood late." },
        { type: "paragraph", text: "At the moment of acquisition, the company knows the cost. It does not yet know the quality of the customer." },
        { type: "paragraph", text: "That quality shows up later." },
        { type: "paragraph", text: "Did they complete setup? Did they scan the guide? Did they register the warranty? Did they contact support? Was the issue solved? Did they return the product? Did they buy again? Did they request a repair? Did they buy spare parts? Did they leave a review? Did they refer someone?" },
        { type: "paragraph", text: "These are not soft customer experience signals. They are economic signals." },
        { type: "paragraph", text: "They show whether acquisition created a durable relationship or just a one-time transaction." },
        { type: "paragraph", text: "So the post-purchase phase is not separate from growth. It is where the economics of growth become visible." },
        { type: "heading", text: "Retention makes acquisition more forgiving" },
        { type: "paragraph", text: "When retention is strong, acquisition becomes more forgiving." },
        { type: "paragraph", text: "A company can tolerate higher CAC if customers stay longer and produce more value over time." },
        { type: "paragraph", text: "Subscription businesses already know this. Physical product brands often act as if the logic does not apply to them because the repeat cycle is slower." },
        { type: "paragraph", text: "That is too narrow." },
        { type: "paragraph", text: "Retention does not always mean someone buys the same product again next month." },
        { type: "paragraph", text: "It can mean they buy accessories. It can mean they buy care products. It can mean they request spare parts. It can mean they repair instead of replace. It can mean they buy another product in the same category. It can mean they leave a review, refer a friend, or stay connected until the next real purchase moment." },
        { type: "paragraph", text: "Physical products do not behave like SaaS." },
        { type: "paragraph", text: "But every acquired customer still has a future value curve." },
        { type: "paragraph", text: "Most brands just stop managing that curve after the first sale." },
        { type: "heading", text: "A better metric: retained gross margin per acquired customer" },
        { type: "paragraph", text: "CAC alone is too thin." },
        { type: "paragraph", text: "A better metric is retained gross margin per acquired customer." },
        { type: "paragraph", text: "The question becomes simple:" },
        { type: "quote", text: "After we paid to acquire this customer, how much gross margin did we actually keep after returns, refunds, support costs, warranty issues, service costs, and lifecycle revenue?" },
        { type: "paragraph", text: "This metric forces marketing, ecommerce, support, product, operations, and finance to look at the same reality." },
        { type: "paragraph", text: "Marketing cannot celebrate cheap acquisition if those customers return the product. Support cannot celebrate fewer tickets if customers leave angry. Ecommerce cannot celebrate conversion if the product creates confusion after delivery. Product cannot ignore documentation if poor setup causes returns. Finance cannot evaluate CAC properly without understanding what happens after purchase." },
        { type: "paragraph", text: "Retained gross margin per acquired customer connects the system." },
        { type: "paragraph", text: "It shows whether the company is turning acquisition spend into durable customer value." },
        { type: "heading", text: "Why this matters now" },
        { type: "paragraph", text: "For years, many brands grew by getting better at acquisition." },
        { type: "paragraph", text: "More ads. Better targeting. Sharper landing pages. More retargeting. More marketplace presence. More conversion work." },
        { type: "paragraph", text: "That playbook still matters. It is just not enough anymore." },
        { type: "paragraph", text: "Acquisition has become more expensive and less predictable in many categories. Privacy changes, platform competition, marketplace dependency, higher ad costs, and weaker attribution have made growth harder to manage." },
        { type: "paragraph", text: "The default response is to look for cheaper channels." },
        { type: "paragraph", text: "That makes sense, but it is not always the best answer." },
        { type: "paragraph", text: "Sometimes the better answer is to get more value from the customers already acquired." },
        { type: "paragraph", text: "That is the post-purchase opportunity." },
        { type: "paragraph", text: "Not “better customer experience” as a vague slogan." },
        { type: "paragraph", text: "Better customer economics." },
        { type: "heading", text: "Where Afterlayer fits" },
        { type: "paragraph", text: "This is where a post-purchase layer like Afterlayer becomes interesting." },
        { type: "paragraph", text: "The value is not just a nicer support page or a better digital manual. That helps, but it is too small as the main business case." },
        { type: "paragraph", text: "The stronger case is that Afterlayer connects ownership behavior to growth economics." },
        { type: "paragraph", text: "It helps a physical product brand understand what happens after the sale." },
        { type: "paragraph", text: "Who scanned the product? Who completed setup? Who needed care instructions? Who registered the warranty? Who started troubleshooting? Who requested repair? Who looked for spare parts? Who may be ready for accessories? Who may be at risk of disappearing?" },
        { type: "paragraph", text: "That turns post-purchase behavior into a measurable layer." },
        { type: "paragraph", text: "Once the behavior is measurable, the brand can connect it to retention, support cost, return rate, repeat purchase, spare-parts revenue, repair revenue, referrals, and CLV." },
        { type: "paragraph", text: "That is the actual business case." },
        { type: "paragraph", text: "Afterlayer should not be judged only by whether it makes the post-purchase experience smoother." },
        { type: "paragraph", text: "It should be judged by whether it increases retained gross margin per acquired customer." },
        { type: "heading", text: "The real question for growth teams" },
        { type: "paragraph", text: "Most companies already know how much they spend to acquire customers." },
        { type: "paragraph", text: "The harder question is whether those customers become economically productive after the sale." },
        { type: "paragraph", text: "That is where many growth systems are still weak." },
        { type: "paragraph", text: "They have acquisition dashboards, but not ownership dashboards." },
        { type: "paragraph", text: "They know conversion rates, but not setup completion." },
        { type: "paragraph", text: "They know CAC, but not post-support retention." },
        { type: "paragraph", text: "They know email clicks, but not repair intent." },
        { type: "paragraph", text: "They know order volume, but not retained gross margin per acquired customer." },
        { type: "paragraph", text: "That is the next layer of growth work." },
        { type: "paragraph", text: "Not just acquiring more customers." },
        { type: "paragraph", text: "Keeping more value from the customers already acquired." },
        { type: "quote", text: "Take the customers acquired last month. How many are becoming more valuable after purchase? And how many are quietly leaking value from the business?" },
      ],
    },
    {
      title: "Repeat purchase is not an email marketing problem",
      description: "Why repeat purchase depends more on the product, service and ownership experience than on another retention campaign.",
      intro: "A customer buys something from your brand.",
      body: [
        { type: "paragraph", text: "A few days later, the emails begin." },
        { type: "paragraph", text: "“How are you enjoying your purchase?”" },
        { type: "paragraph", text: "“Complete the look.”" },
        { type: "paragraph", text: "“Customers also loved...”" },
        { type: "paragraph", text: "“Here’s 10% off your next order.”" },
        { type: "paragraph", text: "The product may still be sitting unopened in the hallway, but the retention system has already decided the relationship is going beautifully." },
        { type: "paragraph", text: "This is how repeat purchase is often handled." },
        { type: "paragraph", text: "The first sale belongs to acquisition. After that, email marketing takes over." },
        { type: "paragraph", text: "And when customers do not return, brands usually respond by sending more. More campaigns, more automation, more discounts and more cheerful subject lines pretending Tuesday is an event." },
        { type: "paragraph", text: "Email matters." },
        { type: "paragraph", text: "It is just being asked to solve the wrong problem." },
        { type: "paragraph", text: "Repeat purchase usually depends less on what happens in the inbox than on what happens once the product arrives." },
        { type: "heading", text: "The second purchase starts with the first product" },
        { type: "paragraph", text: "Customers rarely return because an automated workflow reminded them that the brand exists." },
        { type: "paragraph", text: "They return because the first product worked out." },
        { type: "paragraph", text: "It arrived when promised. They understood how to use it. It did what they bought it to do." },
        { type: "paragraph", text: "When something went wrong, getting help was not painful." },
        { type: "paragraph", text: "When they needed care instructions, a replacement part or a repair, they did not have to begin a small administrative career to find it." },
        { type: "paragraph", text: "That is where repeat purchase starts." },
        { type: "paragraph", text: "A typical email flow assumes something like this:" },
        { type: "quote", text: "Purchase > Wait 14 days > Send coupon" },
        { type: "paragraph", text: "The customer experiences something closer to this:" },
        { type: "quote", text: "Purchase > Use > Understand > Trust > Need again > Return" },
        { type: "paragraph", text: "Email can help along the way. It cannot manufacture the trust that the product and service failed to create." },
        { type: "paragraph", text: "A good retention campaign cannot rescue a confusing setup, a missing spare part or a miserable support experience." },
        { type: "paragraph", text: "It can, however, remind the customer that all of those things happened." },
        { type: "heading", text: "Brands optimise the part they can see" },
        { type: "paragraph", text: "Before the sale, brands can track almost everything." },
        { type: "paragraph", text: "They know which ad someone clicked, which pages they visited, how long they stayed, what they added to the cart and where they gave up." },
        { type: "paragraph", text: "They may even know that the customer came back through an Instagram ad after ignoring an email sent at 10:07 on Thursday morning." },
        { type: "paragraph", text: "Then the customer buys." },
        { type: "paragraph", text: "After that, visibility drops sharply." },
        { type: "paragraph", text: "Did they open the box? Did they set the product up correctly? Did they understand how to care for it? Did a part break? Did they get frustrated and stop using it?" },
        { type: "paragraph", text: "Perhaps they solved the problem on YouTube. Perhaps they found the answer on Reddit. Perhaps a man called Marco explained it in a forum post from 2017." },
        { type: "paragraph", text: "The brand usually does not know." },
        { type: "paragraph", text: "It has a detailed map of the journey to checkout and a blank space where ownership begins." },
        { type: "paragraph", text: "So it keeps working on the part it can reach: the inbox." },
        { type: "paragraph", text: "That is understandable. But the inbox is only one small part of the relationship." },
        { type: "heading", text: "A discount can create a sale without creating loyalty" },
        { type: "paragraph", text: "Discounts work. Sometimes very well." },
        { type: "paragraph", text: "They can bring someone back for another transaction." },
        { type: "paragraph", text: "But that does not mean the customer became loyal. In some cases, the customer simply learned the routine." },
        { type: "paragraph", text: "Buy once at full price." },
        { type: "paragraph", text: "Receive three emails." },
        { type: "paragraph", text: "Ignore the first two." },
        { type: "paragraph", text: "Use the 15% code in the third." },
        { type: "paragraph", text: "Congratulations. The brand and the customer have created a small negotiation ritual." },
        { type: "paragraph", text: "There is nothing wrong with promotions when the economics work. The mistake is treating a discounted second order as proof of loyalty." },
        { type: "paragraph", text: "A loyal customer returns because the first experience made the next purchase feel safer." },
        { type: "paragraph", text: "They know what quality to expect. They understand how the product behaves. They trust that delivery will happen. And if something breaks, they believe the brand will help rather than abandon them with a PDF, a chatbot and a support ticket marked “resolved” while the problem remains impressively unresolved." },
        { type: "paragraph", text: "A coupon lowers the price." },
        { type: "paragraph", text: "A good ownership experience lowers the risk." },
        { type: "paragraph", text: "Those are not the same thing." },
        { type: "heading", text: "The brand proves itself after the sale" },
        { type: "paragraph", text: "Before the sale, promises are cheap." },
        { type: "paragraph", text: "Premium quality. Thoughtful design. Built to last. Made for life." },
        { type: "paragraph", text: "The customer discovers what those phrases mean afterwards." },
        { type: "paragraph", text: "Can they find the setup instructions without searching through five support pages?" },
        { type: "paragraph", text: "Can they register the warranty without typing the same serial number four times?" },
        { type: "paragraph", text: "Can they learn how to clean the material without damaging it?" },
        { type: "paragraph", text: "Can they order the two-euro plastic component that determines whether a much more expensive product remains usable?" },
        { type: "paragraph", text: "Can they repair it?" },
        { type: "paragraph", text: "If they contact support, does the person answering already know which product and version they own?" },
        { type: "paragraph", text: "These moments are usually treated as operational details. They sit somewhere between logistics, support and customer service, far away from the marketing team." },
        { type: "paragraph", text: "But they shape the customer’s opinion of the brand more than another campaign ever will." },
        { type: "paragraph", text: "An advertisement says the brand cares." },
        { type: "paragraph", text: "A repair experience reveals whether it does." },
        { type: "heading", text: "Physical products become anonymous too quickly" },
        { type: "paragraph", text: "Most products lose their identity soon after they are sold." },
        { type: "paragraph", text: "The brand knows that 4,000 units left the warehouse. It may not know which customer owns which version, which instructions apply, which spare part fits or which issue tends to appear after six months." },
        { type: "paragraph", text: "The customer has the product." },
        { type: "paragraph", text: "The brand has the order." },
        { type: "paragraph", text: "The connection between them is weak or missing." },
        { type: "paragraph", text: "That becomes a problem when the brand tries to sell something else." },
        { type: "paragraph", text: "Someone who owns a specific coffee machine does not need a generic newsletter about coffee. They may need a reminder about the correct cleaning cycle. They may need a replacement filter, a compatible accessory or a repair option." },
        { type: "paragraph", text: "Later, they may be ready for another product. But that recommendation should begin with what they already own." },
        { type: "paragraph", text: "This is commerce, but the useful context comes from the product relationship, not from sending more campaigns." },
        { type: "paragraph", text: "Without that context, personalisation is often just a first name above a generic offer." },
        { type: "paragraph", text: "“Hi Sarah” is not a strategy." },
        { type: "heading", text: "Most retention work is boring" },
        { type: "paragraph", text: "Retention is often described using impressive language." },
        { type: "paragraph", text: "Community. Loyalty ecosystems. AI personalisation. Emotional connection." },
        { type: "paragraph", text: "Some of it is useful. Much of it makes for better conference slides than customer experiences." },
        { type: "paragraph", text: "Repeat purchase is often built through ordinary things:" },
        { type: "paragraph", text: "Clear instructions. Spare parts that are actually available. Useful reminders. Simple warranty registration. Support that answers the question. Accurate product information. A repair route that does not feel like punishment." },
        { type: "paragraph", text: "None of this sounds revolutionary." },
        { type: "paragraph", text: "It makes ownership easier, which is usually more valuable." },
        { type: "paragraph", text: "The customer continues evaluating the brand long after checkout. Every missing part, confusing instruction and unanswered request changes the likelihood of another purchase." },
        { type: "paragraph", text: "Most of those moments never appear in the email dashboard." },
        { type: "paragraph", text: "They still affect the result." },
        { type: "heading", text: "Email should respond to ownership" },
        { type: "paragraph", text: "The answer is not to stop sending email." },
        { type: "paragraph", text: "The answer is to make email follow what is happening with the product." },
        { type: "paragraph", text: "A useful message might confirm that the warranty is active. It might link to instructions for the exact model the customer owns. It might remind them that a component needs cleaning or tell them that the correct replacement part is available." },
        { type: "paragraph", text: "After two years, it might recommend something compatible based on the product already in the customer’s home." },
        { type: "paragraph", text: "That is more useful than sending everyone the same “We miss you” email after 45 days." },
        { type: "paragraph", text: "Sometimes the customer does not miss the brand." },
        { type: "paragraph", text: "Sometimes they bought a chair." },
        { type: "paragraph", text: "They are still sitting on it." },
        { type: "heading", text: "Ask what happened after the first purchase" },
        { type: "paragraph", text: "When a brand asks how to increase repeat purchase, lifecycle email is often the first place it looks." },
        { type: "paragraph", text: "That may improve the numbers. But it should not be the starting point." },
        { type: "paragraph", text: "Start with what happened after delivery." },
        { type: "paragraph", text: "Where did the customer get confused?" },
        { type: "paragraph", text: "What did they need that they could not find?" },
        { type: "paragraph", text: "What broke?" },
        { type: "paragraph", text: "Which questions kept reaching support?" },
        { type: "paragraph", text: "What made ownership easier?" },
        { type: "paragraph", text: "Six months later, does the customer trust the brand more than they did on the day they bought, or less?" },
        { type: "paragraph", text: "Repeat purchase is not mainly a communication outcome." },
        { type: "paragraph", text: "It is what remains after the product, the service and the ownership experience have done their work." },
        { type: "paragraph", text: "Email can remind customers that you exist." },
        { type: "quote", text: "It cannot give them a reason to come back if the first experience already gave them a reason not to." },
      ],
    },
  ],
  it: [
    {
      title: "Lo strano momento in cui i brand smettono di interessarsi",
      description: "Perché i brand premium investono molto nell’esperienza d’acquisto, per poi lasciare la fase di utilizzo a PDF, moduli e assistenza frammentata.",
      intro: "La maggior parte dei brand premium è molto brava prima della vendita.",
      body: [
        { type: "paragraph", text: "Sanno come rendere desiderabile un prodotto. Il sito è curato. Le fotografie sono studiate. Il packaging sembra ben pensato. Il checkout è stato probabilmente testato, riprogettato, semplificato, ottimizzato e poi discusso in qualche riunione che poteva essere un’email." },
        { type: "paragraph", text: "Poi il prodotto arriva." },
        { type: "paragraph", text: "Per qualche minuto, tutto continua a sembrare premium. La scatola si apre bene. Il materiale è piacevole al tatto. Il cliente vive quel piccolo momento da “sì, ho fatto la scelta giusta”." },
        { type: "paragraph", text: "Poi, molto spesso, l’esperienza diventa stranamente mediocre." },
        { type: "paragraph", text: "Il cliente deve configurare il prodotto e cerca le istruzioni. Forse nella scatola c’è un manuale piegato. Forse c’è un codice QR. Forse il QR apre un PDF chiaramente progettato per la stampa, non per uno smartphone. Forse il manuale è nascosto in una pagina di assistenza con un nome come manual_final_v7_IT.pdf." },
        { type: "paragraph", text: "Poi arriva la registrazione della garanzia. Di solito sembra una pratica amministrativa, perché i brand la trattano come una pratica amministrativa." },
        { type: "paragraph", text: "Poi le istruzioni per la cura. Le informazioni sulla riparazione. I ricambi. L’assistenza. I resi. I dati del prodotto. Le dichiarazioni di sostenibilità. Tutto esiste da qualche parte, ma quasi mai in un unico posto chiaro. È disperso tra PDF, moduli, centri assistenza, conversazioni via email e sistemi interni." },
        { type: "paragraph", text: "È strano." },
        { type: "paragraph", text: "I brand dedicano tantissimo tempo a progettare l’esperienza d’acquisto, poi affidano l’esperienza d’uso a ciò che era più facile caricare online." },
        { type: "paragraph", text: "Per i prodotti economici, forse può andare bene. Nessuno si aspetta poesia da un utensile da cucina da 12 euro." },
        { type: "paragraph", text: "Ma per i prodotti fisici premium, la distanza è evidente. Il prodotto sembra costoso. Il livello post-vendita spesso no." },
        { type: "paragraph", text: "E non è soltanto un problema di esperienza del cliente." },
        { type: "paragraph", text: "È un problema di crescita." },
        { type: "paragraph", text: "Harvard Business Review ha una frase molto citata, e per una buona ragione: a seconda dello studio e del settore, acquisire un nuovo cliente può costare da 5 a 25 volte più che mantenerne uno esistente." },
        { type: "paragraph", text: "C’è anche la nota tesi di Bain & Company sulla retention: persino un aumento del 5% nella fidelizzazione dei clienti può far crescere i profitti dal 25% al 95%." },
        { type: "paragraph", text: "Si può discutere sul numero esatto. Settori diversi funzionano in modo diverso. Un brand di arredamento di lusso, un’azienda di attrezzatura outdoor e un software in abbonamento non avranno la stessa economia." },
        { type: "paragraph", text: "Ma è difficile contestare la direzione." },
        { type: "paragraph", text: "Mantenere il cliente giusto è solitamente molto meno costoso che trovarne uno nuovo." },
        { type: "paragraph", text: "Il che rende il post-acquisto un momento davvero strano in cui essere negligenti." },
        { type: "paragraph", text: "Un brand paga per attirare il cliente." },
        { type: "paragraph", text: "Paga per convertirlo." },
        { type: "paragraph", text: "Spedisce il prodotto." },
        { type: "paragraph", text: "Poi il cliente scansiona un codice QR e riceve un PDF." },
        { type: "paragraph", text: "È un momento molto strano in cui smettere di interessarsi." },
        { type: "paragraph", text: "Il post-vendita è ancora considerato assistenza. Un reparto. Un costo. Il posto in cui finiscono i ticket quando qualcosa si rompe." },
        { type: "paragraph", text: "Credo che oggi questa visione sia troppo limitata." },
        { type: "paragraph", text: "Per i brand di prodotti fisici, il post-vendita sta diventando una delle parti più utili della relazione con il cliente." },
        { type: "paragraph", text: "È il luogo in cui il brand può ristabilire un contatto con chi ha acquistato tramite rivenditori, distributori o marketplace." },
        { type: "paragraph", text: "È il luogo in cui la registrazione della garanzia può trasformarsi in dati proprietari sul prodotto." },
        { type: "paragraph", text: "È il luogo in cui cura e manutenzione possono prolungare la vita del prodotto." },
        { type: "paragraph", text: "È il luogo in cui riparazioni e ricambi possono diventare parte dell’esperienza del brand invece di una frustrante missione secondaria." },
        { type: "paragraph", text: "Ed è anche il luogo in cui la regolamentazione comincia a manifestarsi in modo concreto." },
        { type: "paragraph", text: "Il diritto alla riparazione non è soltanto una discussione politica se si vendono prodotti fisici. A un certo punto si traduce in domande molto semplici." },
        { type: "paragraph", text: "Il cliente riesce a capire come mantenere il prodotto?" },
        { type: "paragraph", text: "Riesce a trovare informazioni sulla riparazione?" },
        { type: "paragraph", text: "Può richiedere dei ricambi?" },
        { type: "paragraph", text: "Il brand può gestire i flussi di riparazione senza caos?" },
        { type: "paragraph", text: "I passaporti digitali di prodotto indicano la stessa direzione. I dati di prodotto non possono restare per sempre sepolti nei sistemi interni. Una parte crescente dovrà diventare strutturata, accessibile e utile lungo tutto il ciclo di vita del prodotto." },
        { type: "paragraph", text: "Detto così sembra noioso." },
        { type: "paragraph", text: "E sì, “dati sul ciclo di vita del prodotto” non è esattamente una frase che entusiasma le persone davanti a un caffè." },
        { type: "paragraph", text: "Ma è proprio nella parte noiosa che si trova il valore per il business." },
        { type: "paragraph", text: "Un cliente scansiona un codice su un prodotto. Cosa succede dopo?" },
        { type: "paragraph", text: "Oggi, troppo spesso, la risposta è semplice: si apre un PDF." },
        { type: "paragraph", text: "È un’occasione sprecata." },
        { type: "paragraph", text: "Quella scansione potrebbe aprire una guida alla configurazione che funziona davvero su mobile." },
        { type: "paragraph", text: "Potrebbe aiutare il cliente a registrare il prodotto in 20 secondi." },
        { type: "paragraph", text: "Potrebbe mostrare istruzioni di cura relative al modello esatto." },
        { type: "paragraph", text: "Potrebbe raccogliere il numero di serie." },
        { type: "paragraph", text: "Potrebbe indirizzare una richiesta di assistenza con il contesto del prodotto già allegato." },
        { type: "paragraph", text: "Potrebbe spiegare le opzioni di riparazione." },
        { type: "paragraph", text: "Potrebbe aiutare il cliente a richiedere un ricambio senza inviare tre email e la foto del componente sbagliato." },
        { type: "paragraph", text: "Potrebbe dare al brand un contatto diretto con un cliente che altrimenti non conoscerebbe mai." },
        { type: "paragraph", text: "Il codice QR non è la parte interessante." },
        { type: "paragraph", text: "La parte interessante è ciò che c’è dietro." },
        { type: "paragraph", text: "Per molto tempo, il post-vendita è stato trattato come lo scantinato dell’esperienza del brand. Utile, necessario, poco affascinante." },
        { type: "paragraph", text: "Ma le cose stanno iniziando a cambiare." },
        { type: "paragraph", text: "La prossima relazione con un cliente potrebbe non cominciare con un’altra pubblicità." },
        { type: "paragraph", text: "Potrebbe cominciare dentro la scatola del prodotto." },
        { type: "paragraph", text: "È lo spazio che sto esplorando con Afterlayer: come i brand premium di prodotti fisici possano trasformare il post-vendita in una migliore esperienza d’uso, in un livello di servizio più ordinato e in un canale più utile lungo il ciclo di vita del prodotto." },
        { type: "paragraph", text: "Non aggiungendo altro rumore." },
        { type: "paragraph", text: "Semplicemente rendendo ciò che accade dopo l’acquisto tanto curato quanto ciò che accade prima." },
        { type: "source", label: "Fonte", title: "The Value of Keeping the Right Customers", byline: "Amy Gallo · Harvard Business Review · 2014", href: "https://hbr.org/2014/10/the-value-of-keeping-the-right-customers" },
      ],
    },
    {
      title: "Il CAC non si decide quando il cliente acquista",
      description: "Perché l’economia dell’acquisizione diventa chiara solo dopo resi, assistenza, retention e valore lungo il ciclo di vita.",
      intro: "La maggior parte dei team growth parla del CAC come se diventasse definitivo al checkout.",
      body: [
        { type: "paragraph", text: "Un cliente clicca su un annuncio, arriva sul sito, acquista il prodotto e la dashboard assegna un numero. 40 euro. 80 euro. 150 euro. A volte di più." },
        { type: "paragraph", text: "Poi tutti iniziano a discutere delle stesse cose." },
        { type: "paragraph", text: "Il CAC è troppo alto? Il canale funziona ancora? Dovremmo ridurre la spesa? Provare pubblici diversi?" },
        { type: "paragraph", text: "Domande legittime. Ma incomplete." },
        { type: "paragraph", text: "La domanda migliore è: cosa succede dopo che il cliente ha acquistato?" },
        { type: "paragraph", text: "Perché il CAC non si decide davvero al momento dell’acquisto. È lì che viene quantificato. Se sia stata una spesa buona o cattiva diventa chiaro soltanto dopo." },
        { type: "heading", text: "Anche un cliente economico può essere costoso" },
        { type: "paragraph", text: "Un CAC basso fa una bella figura in una dashboard. Ma è anche facile da interpretare male." },
        { type: "paragraph", text: "Se quel cliente non acquista più, restituisce il prodotto, apre tre ticket di assistenza, se ne va infastidito o sparisce dopo il primo ordine, l’acquisizione non era economica. Lo sembrava soltanto perché l’azienda ha misurato il costo prima di misurare il valore." },
        { type: "paragraph", text: "È uno dei punti ciechi più irritanti della strategia di crescita." },
        { type: "paragraph", text: "La maggior parte dei team sa esattamente quanto ha pagato per acquisire un cliente. Molti meno sanno quanto margine lordo hanno conservato dopo resi, rimborsi, costi di assistenza, richieste in garanzia, riparazioni, acquisti ripetuti, ricambi, accessori e referral." },
        { type: "paragraph", text: "Questa differenza conta." },
        { type: "paragraph", text: "Un cliente acquisito per 30 euro che produce 25 euro di margine lordo trattenuto non è un buon cliente." },
        { type: "paragraph", text: "Un cliente acquisito per 120 euro che produce 600 euro di margine lordo trattenuto nel tempo può essere un ottimo cliente." },
        { type: "paragraph", text: "Il costo, da solo, non dice quasi nulla." },
        { type: "heading", text: "Il problema non è il CAC. È il CAC senza valore trattenuto" },
        { type: "paragraph", text: "È facile dire “il CAC sta aumentando” e considerarlo una diagnosi." },
        { type: "paragraph", text: "Non lo è." },
        { type: "paragraph", text: "Un CAC in aumento non è automaticamente negativo. Un’azienda può permettersi costi di acquisizione più alti se i clienti che porta restano più a lungo, acquistano di nuovo, richiedono meno assistenza, consigliano il brand ad altre persone e generano più valore nel tempo." },
        { type: "paragraph", text: "Il problema è un’acquisizione costosa seguita da una retention debole." },
        { type: "paragraph", text: "È lì che la crescita comincia a rompersi." },
        { type: "paragraph", text: "Un brand paga per acquisire il cliente, poi non riesce ad aiutarlo a configurare il prodotto. Oppure non risponde a una domanda di base sulla cura. Rende complicata la registrazione della garanzia. Non offre un modo semplice per riparare il prodotto o trovare il ricambio giusto. La relazione con il cliente si indebolisce subito dopo che l’azienda ha pagato per crearla." },
        { type: "paragraph", text: "Quel valore perso emerge in luoghi diversi." },
        { type: "paragraph", text: "Resi. Costi di assistenza. Recensioni negative. Abbandono. Meno acquisti ripetuti. Più pressione a comprare continuamente nuova domanda attraverso i canali a pagamento." },
        { type: "paragraph", text: "Ecco perché il post-acquisto non è soltanto un tema di servizio clienti. È dentro il modello di acquisizione." },
        { type: "heading", text: "La fattura dei media resta la stessa" },
        { type: "paragraph", text: "Un sistema post-acquisto migliore non rende più economici Meta, Google, influencer, marketplace o distribuzione retail." },
        { type: "paragraph", text: "La fattura arriva comunque." },
        { type: "paragraph", text: "Il costo di acquisizione viene comunque pagato." },
        { type: "paragraph", text: "Ma il valore creato dopo quel pagamento può cambiare molto." },
        { type: "paragraph", text: "Se il cliente raggiunge più velocemente il valore del prodotto, la frustrazione iniziale diminuisce. Se l’assistenza è più semplice, la fiducia ha più possibilità di sopravvivere al primo problema. Se registrare la garanzia è facile, il brand scopre chi possiede il prodotto. Se riparazioni e ricambi sono accessibili, il prodotto resta in uso più a lungo. Se il coinvolgimento lungo il ciclo di vita si basa sul reale comportamento d’uso, il riacquisto diventa meno casuale." },
        { type: "paragraph", text: "L’azienda non riduce direttamente il CAC." },
        { type: "paragraph", text: "Migliora la produttività del CAC." },
        { type: "paragraph", text: "Questa è la distinzione utile." },
        { type: "paragraph", text: "La produttività del CAC chiede: quanto valore trattenuto abbiamo generato da ogni cliente acquisito?" },
        { type: "paragraph", text: "È una domanda migliore rispetto a chiedersi soltanto quanto è costato il cliente." },
        { type: "heading", text: "L’acquisto è soltanto la prima prova" },
        { type: "paragraph", text: "Molte aziende trattano l’acquisto come la conversione finale." },
        { type: "paragraph", text: "Non lo è." },
        { type: "paragraph", text: "L’acquisto dimostra che qualcuno era disposto a comprare. Non dimostra che abbia ottenuto valore dal prodotto, che lo abbia capito e tenuto, che si sia fidato del brand anche dopo o che acquisterà mai qualcos’altro." },
        { type: "paragraph", text: "La prima transazione avvia l’economia della relazione. Non la conclude." },
        { type: "paragraph", text: "Questo è particolarmente importante per i brand di prodotti fisici." },
        { type: "paragraph", text: "Un cliente può acquistare una tenda premium, una lampada modulare, un passeggino, una borsa in pelle o uno zaino tecnico. Ma il suo valore per il business dipende da ciò che accade durante l’utilizzo." },
        { type: "paragraph", text: "Riesce a configurarlo? A usarlo senza sentirsi perso? A mantenerlo? A ricevere aiuto quando qualcosa non funziona? A trovare il ricambio giusto? A ripararlo invece di abbandonarlo? Il brand riesce a restare presente dopo la vendita?" },
        { type: "paragraph", text: "Se la risposta è no, il CAC diventa più difficile da giustificare." },
        { type: "heading", text: "Il post-acquisto è il momento in cui il CAC diventa visibile" },
        { type: "paragraph", text: "Il CAC viene misurato presto, ma compreso tardi." },
        { type: "paragraph", text: "Al momento dell’acquisizione, l’azienda conosce il costo. Non conosce ancora la qualità del cliente." },
        { type: "paragraph", text: "Quella qualità emerge più avanti." },
        { type: "paragraph", text: "Ha completato la configurazione? Ha scansionato la guida? Ha registrato la garanzia? Ha contattato l’assistenza? Il problema è stato risolto? Ha restituito il prodotto? Ha acquistato di nuovo? Ha richiesto una riparazione? Ha comprato ricambi? Ha lasciato una recensione? Ha consigliato il brand a qualcuno?" },
        { type: "paragraph", text: "Non sono segnali vaghi di customer experience. Sono segnali economici." },
        { type: "paragraph", text: "Mostrano se l’acquisizione ha creato una relazione duratura oppure una singola transazione." },
        { type: "paragraph", text: "La fase post-acquisto non è quindi separata dalla crescita. È il luogo in cui l’economia della crescita diventa visibile." },
        { type: "heading", text: "La retention rende l’acquisizione più tollerante" },
        { type: "paragraph", text: "Quando la retention è forte, l’acquisizione diventa più tollerante." },
        { type: "paragraph", text: "Un’azienda può sostenere un CAC più alto se i clienti restano più a lungo e producono più valore nel tempo." },
        { type: "paragraph", text: "Le aziende in abbonamento lo sanno già. I brand di prodotti fisici spesso si comportano come se questa logica non li riguardasse, perché il ciclo di riacquisto è più lento." },
        { type: "paragraph", text: "È una visione troppo limitata." },
        { type: "paragraph", text: "Retention non significa sempre che qualcuno ricompri lo stesso prodotto il mese successivo." },
        { type: "paragraph", text: "Può significare che acquista accessori o prodotti per la cura, richiede ricambi, ripara invece di sostituire, compra un altro prodotto della stessa categoria, lascia una recensione, consiglia il brand a un amico o resta in contatto fino al prossimo vero momento d’acquisto." },
        { type: "paragraph", text: "I prodotti fisici non funzionano come il SaaS." },
        { type: "paragraph", text: "Ma ogni cliente acquisito ha comunque una curva di valore futura." },
        { type: "paragraph", text: "La maggior parte dei brand smette semplicemente di gestirla dopo la prima vendita." },
        { type: "heading", text: "Una metrica migliore: margine lordo trattenuto per cliente acquisito" },
        { type: "paragraph", text: "Il CAC da solo è troppo povero." },
        { type: "paragraph", text: "Una metrica migliore è il margine lordo trattenuto per cliente acquisito." },
        { type: "paragraph", text: "La domanda diventa semplice:" },
        { type: "quote", text: "Dopo aver pagato per acquisire questo cliente, quanto margine lordo abbiamo effettivamente conservato al netto di resi, rimborsi, assistenza, problemi di garanzia, costi di servizio e ricavi lungo il ciclo di vita?" },
        { type: "paragraph", text: "Questa metrica obbliga marketing, ecommerce, assistenza, prodotto, operations e finanza a osservare la stessa realtà." },
        { type: "paragraph", text: "Il marketing non può celebrare un’acquisizione economica se quei clienti restituiscono il prodotto. L’assistenza non può celebrare meno ticket se i clienti se ne vanno arrabbiati. L’ecommerce non può celebrare la conversione se il prodotto crea confusione dopo la consegna. Il prodotto non può ignorare la documentazione se una configurazione debole causa resi. La finanza non può valutare correttamente il CAC senza capire cosa accade dopo l’acquisto." },
        { type: "paragraph", text: "Il margine lordo trattenuto per cliente acquisito collega il sistema." },
        { type: "paragraph", text: "Mostra se l’azienda sta trasformando la spesa di acquisizione in valore duraturo per il cliente." },
        { type: "heading", text: "Perché è importante adesso" },
        { type: "paragraph", text: "Per anni, molti brand sono cresciuti diventando più bravi nell’acquisizione." },
        { type: "paragraph", text: "Più annunci. Targeting migliore. Landing page più efficaci. Più retargeting. Più presenza nei marketplace. Più lavoro sulla conversione." },
        { type: "paragraph", text: "Quel modello conta ancora. Semplicemente, non basta più." },
        { type: "paragraph", text: "In molte categorie l’acquisizione è diventata più costosa e meno prevedibile. Cambiamenti nella privacy, concorrenza tra piattaforme, dipendenza dai marketplace, aumento dei costi pubblicitari e attribuzione più debole hanno reso la crescita più difficile da gestire." },
        { type: "paragraph", text: "La risposta predefinita è cercare canali più economici." },
        { type: "paragraph", text: "Ha senso, ma non è sempre la risposta migliore." },
        { type: "paragraph", text: "A volte la risposta migliore è ottenere più valore dai clienti già acquisiti." },
        { type: "paragraph", text: "Questa è l’opportunità del post-acquisto." },
        { type: "paragraph", text: "Non “una migliore customer experience” come slogan vago." },
        { type: "paragraph", text: "Una migliore economia del cliente." },
        { type: "heading", text: "Il ruolo di Afterlayer" },
        { type: "paragraph", text: "È qui che un livello post-acquisto come Afterlayer diventa interessante." },
        { type: "paragraph", text: "Il valore non è soltanto una pagina di assistenza più bella o un manuale digitale migliore. Aiuta, ma come business case principale è troppo poco." },
        { type: "paragraph", text: "Il caso più forte è che Afterlayer collega il comportamento d’uso all’economia della crescita." },
        { type: "paragraph", text: "Aiuta un brand di prodotti fisici a capire cosa succede dopo la vendita." },
        { type: "paragraph", text: "Chi ha scansionato il prodotto? Chi ha completato la configurazione? Chi cercava istruzioni per la cura? Chi ha registrato la garanzia? Chi ha iniziato una procedura di risoluzione dei problemi? Chi ha richiesto una riparazione? Chi cercava ricambi? Chi potrebbe essere pronto per gli accessori? Chi rischia di sparire?" },
        { type: "paragraph", text: "Questo trasforma il comportamento post-acquisto in un livello misurabile." },
        { type: "paragraph", text: "Quando il comportamento è misurabile, il brand può collegarlo a retention, costi di assistenza, tasso di reso, riacquisto, ricavi da ricambi e riparazioni, referral e CLV." },
        { type: "paragraph", text: "Questo è il vero business case." },
        { type: "paragraph", text: "Afterlayer non dovrebbe essere valutato soltanto per quanto rende più fluida l’esperienza post-acquisto." },
        { type: "paragraph", text: "Dovrebbe essere valutato per quanto aumenta il margine lordo trattenuto per cliente acquisito." },
        { type: "heading", text: "La vera domanda per i team growth" },
        { type: "paragraph", text: "La maggior parte delle aziende sa già quanto spende per acquisire clienti." },
        { type: "paragraph", text: "La domanda più difficile è se quei clienti diventino economicamente produttivi dopo la vendita." },
        { type: "paragraph", text: "È qui che molti sistemi di crescita sono ancora deboli." },
        { type: "paragraph", text: "Hanno dashboard di acquisizione, ma non dashboard sull’utilizzo. Conoscono i tassi di conversione, ma non il completamento della configurazione. Conoscono il CAC, ma non la retention dopo l’assistenza. Conoscono i clic sulle email, ma non l’intenzione di riparare. Conoscono il volume degli ordini, ma non il margine lordo trattenuto per cliente acquisito." },
        { type: "paragraph", text: "Questo è il livello successivo del lavoro sulla crescita." },
        { type: "paragraph", text: "Non soltanto acquisire più clienti." },
        { type: "paragraph", text: "Trattenere più valore dai clienti già acquisiti." },
        { type: "quote", text: "Prendiamo i clienti acquisiti il mese scorso. Quanti stanno diventando più preziosi dopo l’acquisto? E quanti stanno silenziosamente facendo perdere valore all’azienda?" },
      ],
    },
  ],
  tr: [
    {
      title: "Markaların önemsemeyi bıraktığı garip yer",
      description: "Premium markaların satın alma deneyimine büyük yatırım yapıp sahiplik deneyimini PDF’lere, formlara ve parçalı desteğe bırakması üzerine.",
      intro: "Çoğu premium marka satıştan önce çok iyidir.",
      body: [
        { type: "paragraph", text: "Ürünü nasıl çekici göstereceklerini bilirler. Web sitesi özenlidir. Fotoğraflar dikkatle hazırlanmıştır. Ambalaj düşünülmüş hissettirir. Ödeme akışı muhtemelen test edilmiş, yeniden tasarlanmış, sadeleştirilmiş, optimize edilmiş ve ardından e-posta olabilecek birkaç toplantıda tartışılmıştır." },
        { type: "paragraph", text: "Sonra ürün gelir." },
        { type: "paragraph", text: "Birkaç dakika boyunca her şey hâlâ premium hissettirir. Kutu güzel açılır. Malzeme iyi hissettirir. Müşteri o küçük “evet, doğru seçimi yaptım” anını yaşar." },
        { type: "paragraph", text: "Sonra deneyim, oldukça sık biçimde, garip bir şekilde ortalama hâle gelir." },
        { type: "paragraph", text: "Müşterinin ürünü kurması gerekir ve talimatları arar. Belki kutuda katlanmış bir kâğıt kullanım kılavuzu vardır. Belki bir QR kod vardır. Belki QR kod, telefon için değil baskı için tasarlandığı açıkça belli olan bir PDF açar. Belki kılavuz, destek sayfasının bir yerinde manual_final_v7_TR.pdf gibi bir dosya adıyla gizlenmiştir." },
        { type: "paragraph", text: "Ardından garanti kaydı gelir. Bu genellikle idari bir iş gibi hissettirir, çünkü markalar da onu idari bir iş gibi ele alır." },
        { type: "paragraph", text: "Sonra bakım talimatları. Onarım bilgileri. Yedek parçalar. Destek. İadeler. Ürün verileri. Sürdürülebilirlik iddiaları. Bunların hepsi bir yerlerde vardır ama genellikle tek ve düzenli bir yerde değildir. PDF’lere, formlara, yardım merkezlerine, e-posta yazışmalarına ve şirket içi sistemlere dağılmıştır." },
        { type: "paragraph", text: "Bu garip." },
        { type: "paragraph", text: "Markalar satın alma deneyimini tasarlamak için bu kadar zaman harcar, ardından sahiplik deneyimini yüklemesi en kolay olan şeye bırakır." },
        { type: "paragraph", text: "Ucuz ürünler için belki bu sorun değildir. Kimse 12 euroluk bir mutfak aletinden şiir beklemez." },
        { type: "paragraph", text: "Ancak premium fiziksel ürünlerde aradaki fark belirgindir. Ürün pahalı hissettirir. Satış sonrası katman çoğu zaman hissettirmez." },
        { type: "paragraph", text: "Üstelik bu yalnızca bir müşteri deneyimi sorunu değildir." },
        { type: "paragraph", text: "Bu bir büyüme sorunudur." },
        { type: "paragraph", text: "Harvard Business Review’da sıkça alıntılanan bir ifade var ve bunun iyi bir nedeni var: araştırmaya ve sektöre bağlı olarak yeni bir müşteri edinmek, mevcut bir müşteriyi elde tutmaktan 5 ila 25 kat daha pahalı olabilir." },
        { type: "paragraph", text: "Bir de Bain & Company’nin eski ama bilinen elde tutma argümanı var: müşteri elde tutma oranındaki %5’lik bir artış bile kârı %25 ila %95 artırabilir." },
        { type: "paragraph", text: "Kesin sayı tartışılabilir. Farklı sektörler farklı davranır. Lüks bir mobilya markası, outdoor ekipmanı şirketi ve abonelik tabanlı bir yazılım işletmesi aynı ekonomiye sahip olmayacaktır." },
        { type: "paragraph", text: "Ama yönü tartışmak zordur." },
        { type: "paragraph", text: "Doğru müşteriyi elde tutmak genellikle yenisini bulmaktan çok daha ucuzdur." },
        { type: "paragraph", text: "Bu da satın alma sonrası deneyimi tembellik etmek için son derece garip bir yer hâline getirir." },
        { type: "paragraph", text: "Bir marka müşteriyi çekmek için para öder." },
        { type: "paragraph", text: "Müşteriyi dönüştürmek için para öder." },
        { type: "paragraph", text: "Ürünü gönderir." },
        { type: "paragraph", text: "Sonra müşteri bir QR kod tarar ve karşısına bir PDF çıkar." },
        { type: "paragraph", text: "Önemsemeyi bırakmak için gerçekten çok garip bir yer." },
        { type: "paragraph", text: "Satış sonrası hâlâ destek olarak görülüyor. Bir departman. Bir maliyet. Bir şey bozulduğunda taleplerin gittiği yer." },
        { type: "paragraph", text: "Bence artık bu bakış açısı fazla dar." },
        { type: "paragraph", text: "Fiziksel ürün markaları için satış sonrası, müşteri ilişkisinin en faydalı parçalarından biri hâline geliyor." },
        { type: "paragraph", text: "Markanın perakendeci, distribütör veya pazaryeri üzerinden satın alan müşterilerle yeniden bağ kurabileceği yer burasıdır." },
        { type: "paragraph", text: "Garanti kaydının birinci taraf ürün verisine dönüşebileceği yer burasıdır." },
        { type: "paragraph", text: "Bakım ve korumanın ürün ömrünü uzatabileceği yer burasıdır." },
        { type: "paragraph", text: "Onarım ve yedek parçaların sinir bozucu bir yan görev olmak yerine marka deneyiminin parçasına dönüşebileceği yer burasıdır." },
        { type: "paragraph", text: "Aynı zamanda düzenlemelerin pratik biçimde görünmeye başladığı yer de burasıdır." },
        { type: "paragraph", text: "Fiziksel ürün satıyorsanız Onarım Hakkı yalnızca politik bir tartışma değildir. Bir noktada temel sorulara dönüşür." },
        { type: "paragraph", text: "Müşteri ürünün bakımını nasıl yapacağını anlayabiliyor mu?" },
        { type: "paragraph", text: "Onarım bilgilerine ulaşabiliyor mu?" },
        { type: "paragraph", text: "Parça talep edebiliyor mu?" },
        { type: "paragraph", text: "Marka onarım süreçlerini kaos yaşamadan yönetebiliyor mu?" },
        { type: "paragraph", text: "Dijital Ürün Pasaportları da aynı yönü gösteriyor. Ürün verileri sonsuza kadar şirket içi sistemlere gömülü kalamaz. Daha fazlasının ürün yaşam döngüsü boyunca yapılandırılmış, erişilebilir ve faydalı hâle gelmesi gerekecek." },
        { type: "paragraph", text: "Böyle söyleyince kulağa sıkıcı geliyor." },
        { type: "paragraph", text: "Ve evet, “ürün yaşam döngüsü verisi” insanların kahve içerken heyecanlandığı bir ifade sayılmaz." },
        { type: "paragraph", text: "Ama iş değerinin bulunduğu yer tam da bu sıkıcı kısımdır." },
        { type: "paragraph", text: "Bir müşteri ürünün üzerindeki kodu tarar. Sonra ne olur?" },
        { type: "paragraph", text: "Bugün cevap çoğu zaman basit: bir PDF açılır." },
        { type: "paragraph", text: "Bu bir israftır." },
        { type: "paragraph", text: "O tarama, mobilde gerçekten çalışan bir kurulum rehberi açabilir." },
        { type: "paragraph", text: "Müşterinin ürünü 20 saniyede kaydetmesine yardımcı olabilir." },
        { type: "paragraph", text: "Tam olarak o modele uygun bakım talimatlarını gösterebilir." },
        { type: "paragraph", text: "Seri numarasını toplayabilir." },
        { type: "paragraph", text: "Ürün bağlamı önceden eklenmiş bir destek talebi oluşturabilir." },
        { type: "paragraph", text: "Onarım seçeneklerini açıklayabilir." },
        { type: "paragraph", text: "Müşterinin üç e-posta ve yanlış parçanın fotoğrafını göndermeden yedek parça istemesine yardımcı olabilir." },
        { type: "paragraph", text: "Markaya, aksi hâlde hiç tanımayacağı bir müşteriyle doğrudan bağlantı sağlayabilir." },
        { type: "paragraph", text: "İlginç olan QR kod değil." },
        { type: "paragraph", text: "İlginç olan onun arkasında ne olduğudur." },
        { type: "paragraph", text: "Satış sonrası uzun süre marka deneyiminin bodrum katı gibi görüldü. Faydalı, gerekli, pek de göz alıcı değil." },
        { type: "paragraph", text: "Ama bu değişmeye başlıyor." },
        { type: "paragraph", text: "Bir sonraki müşteri ilişkisi başka bir reklamla başlamayabilir." },
        { type: "paragraph", text: "Ürün kutusunun içinde başlayabilir." },
        { type: "paragraph", text: "Afterlayer ile araştırdığım alan tam olarak bu: premium fiziksel ürün markalarının satış sonrasını daha iyi bir sahiplik deneyimine, daha düzenli bir hizmet katmanına ve daha faydalı bir ürün yaşam döngüsü kanalına nasıl dönüştürebileceği." },
        { type: "paragraph", text: "Daha fazla gürültü ekleyerek değil." },
        { type: "paragraph", text: "Sadece satın alma sonrasını, satın alma öncesi kadar özenli hissettirerek." },
        { type: "source", label: "Kaynak", title: "The Value of Keeping the Right Customers", byline: "Amy Gallo · Harvard Business Review · 2014", href: "https://hbr.org/2014/10/the-value-of-keeping-the-right-customers" },
      ],
    },
    {
      title: "CAC, müşteri satın aldığında kesinleşmez",
      description: "Müşteri edinme ekonomisinin iade, destek, elde tutma ve yaşam döngüsü değeri görünür olduğunda anlaşılması üzerine.",
      intro: "Çoğu büyüme ekibi CAC’i ödeme anında kesinleşen bir sayı gibi ele alır.",
      body: [
        { type: "paragraph", text: "Bir müşteri reklama tıklar, siteye gelir, ürünü satın alır ve gösterge paneli bir sayı atar. 40 euro. 80 euro. 150 euro. Bazen daha fazla." },
        { type: "paragraph", text: "Sonra herkes aynı şeyleri tartışmaya başlar." },
        { type: "paragraph", text: "CAC çok mu yüksek? Kanal hâlâ çalışıyor mu? Harcamayı kısmalı mıyız? Farklı kitleleri denemeli miyiz?" },
        { type: "paragraph", text: "Bunlar makul sorular. Ama eksikler." },
        { type: "paragraph", text: "Daha iyi soru şu: müşteri satın aldıktan sonra ne oluyor?" },
        { type: "paragraph", text: "Çünkü CAC aslında satın alma anında kesinleşmez. O anda fiyatlandırılır. Harcamanın iyi mi kötü mü olduğu ancak daha sonra netleşir." },
        { type: "heading", text: "Ucuz bir müşteri yine de pahalı olabilir" },
        { type: "paragraph", text: "Düşük CAC gösterge panelinde iyi görünür. Ama yanlış okumak da kolaydır." },
        { type: "paragraph", text: "Müşteri bir daha hiç satın almazsa, ürünü iade ederse, üç destek talebi açarsa, sinirlenip giderse veya ilk siparişten sonra kaybolursa edinme ucuz değildir. Şirket değeri ölçmeden önce maliyeti ölçtüğü için yalnızca ucuz görünmüştür." },
        { type: "paragraph", text: "Bu, büyüme stratejisindeki en can sıkıcı kör noktalardan biridir." },
        { type: "paragraph", text: "Çoğu ekip bir müşteriyi edinmek için tam olarak ne ödediğini bilir. İadeler, geri ödemeler, destek maliyetleri, garanti talepleri, onarımlar, tekrar satın almalar, yedek parçalar, aksesuarlar ve tavsiyeler sonrasında ne kadar brüt kâr marjı elde tuttuğunu bilen çok daha az ekip vardır." },
        { type: "paragraph", text: "Bu fark önemlidir." },
        { type: "paragraph", text: "30 euroya edinilip 25 euro elde tutulan brüt kâr marjı üreten bir müşteri iyi bir müşteri değildir." },
        { type: "paragraph", text: "120 euroya edinilip zaman içinde 600 euro elde tutulan brüt kâr marjı üreten bir müşteri ise çok iyi olabilir." },
        { type: "paragraph", text: "Maliyet tek başına neredeyse hiçbir şey söylemez." },
        { type: "heading", text: "Sorun CAC değil. Sorun, elde tutulan değer olmadan CAC" },
        { type: "paragraph", text: "“CAC yükseliyor” deyip bunu teşhis olarak görmek kolaydır." },
        { type: "paragraph", text: "Ama değildir." },
        { type: "paragraph", text: "Yükselen CAC otomatik olarak kötü değildir. Şirket, getirdiği müşteriler daha uzun süre kalıyor, yeniden satın alıyor, daha az desteğe ihtiyaç duyuyor, başkalarına tavsiye ediyor ve zaman içinde daha fazla değer üretiyorsa daha yüksek edinme maliyetlerini karşılayabilir." },
        { type: "paragraph", text: "Sorun, pahalı edinmenin ardından zayıf elde tutmanın gelmesidir." },
        { type: "paragraph", text: "Büyüme tam burada bozulmaya başlar." },
        { type: "paragraph", text: "Marka müşteriyi edinmek için para öder, sonra ürünü kurmasına yardımcı olamaz. Basit bir bakım sorusunu yanıtlayamaz. Garanti kaydını zorlaştırır. Ürünü onarmanın veya doğru yedek parçayı bulmanın kolay bir yolunu sunmaz. Müşteri ilişkisi, şirket onu kurmak için para ödedikten hemen sonra zayıflar." },
        { type: "paragraph", text: "Kaybedilen değer farklı yerlerde görünür." },
        { type: "paragraph", text: "İadeler. Destek maliyetleri. Olumsuz yorumlar. Müşteri kaybı. Daha düşük tekrar satın alma. Ücretli kanallardan sürekli yeni talep satın alma baskısı." },
        { type: "paragraph", text: "Bu nedenle satın alma sonrası deneyim yalnızca bir müşteri hizmetleri konusu değildir. Edinme modelinin içindedir." },
        { type: "heading", text: "Medya faturası aynı kalır" },
        { type: "paragraph", text: "Daha iyi bir satın alma sonrası sistem Meta’yı, Google’ı, influencer’ları, pazaryerlerini veya perakende dağıtımı daha ucuz hâle getirmez." },
        { type: "paragraph", text: "Fatura yine gelir." },
        { type: "paragraph", text: "Edinme maliyeti yine ödenir." },
        { type: "paragraph", text: "Ancak bu ödemeden sonra yaratılan değer büyük ölçüde değişebilir." },
        { type: "paragraph", text: "Müşteri ürünün değerine daha hızlı ulaşırsa ilk hayal kırıklığı azalır. Destek daha kolaysa güvenin ilk sorundan sağ çıkma şansı artar. Garanti kaydı basitse marka ürüne kimin sahip olduğunu öğrenir. Onarım ve yedek parçalara kolay erişiliyorsa ürün daha uzun süre kullanımda kalır. Yaşam döngüsü etkileşimi gerçek sahiplik davranışına dayanıyorsa tekrar satın alma daha az rastlantısal hâle gelir." },
        { type: "paragraph", text: "Şirket CAC’i doğrudan düşürmez." },
        { type: "paragraph", text: "CAC verimliliğini artırır." },
        { type: "paragraph", text: "Faydalı ayrım budur." },
        { type: "paragraph", text: "CAC verimliliği şu soruyu sorar: edindiğimiz her müşteriden ne kadar elde tutulan değer ürettik?" },
        { type: "paragraph", text: "Bu, yalnızca müşterinin ne kadara mal olduğunu sormaktan daha iyi bir sorudur." },
        { type: "heading", text: "Satın alma yalnızca ilk kanıttır" },
        { type: "paragraph", text: "Birçok şirket satın almayı nihai dönüşüm olarak görür." },
        { type: "paragraph", text: "Değildir." },
        { type: "paragraph", text: "Satın alma, birinin ürünü almaya istekli olduğunu kanıtlar. Üründen değer elde ettiğini, ürünü anladığını ve elinde tuttuğunu, sonrasında markaya güvendiğini veya bir daha herhangi bir şey satın alacağını kanıtlamaz." },
        { type: "paragraph", text: "İlk işlem ekonomiyi başlatır. Bitirmez." },
        { type: "paragraph", text: "Bu durum özellikle fiziksel ürün markaları için önemlidir." },
        { type: "paragraph", text: "Müşteri premium bir çadır, modüler bir lamba, bebek arabası, deri çanta veya teknik sırt çantası satın alabilir. Ancak o müşterinin iş değeri, sahiplik süresince yaşananlara bağlıdır." },
        { type: "paragraph", text: "Ürünü kurabiliyor mu? Kaybolmuş hissetmeden kullanabiliyor mu? Bakımını yapabiliyor mu? Bir şey ters gittiğinde yardım alabiliyor mu? Doğru yedek parçayı bulabiliyor mu? Ürünü terk etmek yerine onarabiliyor mu? Marka satıştan sonra varlığını sürdürebiliyor mu?" },
        { type: "paragraph", text: "Cevap hayırsa CAC’i gerekçelendirmek zorlaşır." },
        { type: "heading", text: "CAC’in görünür olduğu yer satın alma sonrası aşamadır" },
        { type: "paragraph", text: "CAC erken ölçülür ama geç anlaşılır." },
        { type: "paragraph", text: "Şirket edinme anında maliyeti bilir. Müşterinin kalitesini henüz bilmez." },
        { type: "paragraph", text: "Bu kalite daha sonra ortaya çıkar." },
        { type: "paragraph", text: "Kurulumu tamamladı mı? Rehberi taradı mı? Garantiyi kaydetti mi? Destekle iletişime geçti mi? Sorun çözüldü mü? Ürünü iade etti mi? Tekrar satın aldı mı? Onarım talep etti mi? Yedek parça aldı mı? Yorum bıraktı mı? Birine tavsiye etti mi?" },
        { type: "paragraph", text: "Bunlar yumuşak müşteri deneyimi sinyalleri değildir. Ekonomik sinyallerdir." },
        { type: "paragraph", text: "Edinmenin kalıcı bir ilişki mi yoksa tek seferlik bir işlem mi yarattığını gösterirler." },
        { type: "paragraph", text: "Bu yüzden satın alma sonrası aşama büyümeden ayrı değildir. Büyüme ekonomisinin görünür olduğu yerdir." },
        { type: "heading", text: "Elde tutma, edinmeyi daha toleranslı kılar" },
        { type: "paragraph", text: "Elde tutma güçlü olduğunda edinme daha toleranslı hâle gelir." },
        { type: "paragraph", text: "Müşteriler daha uzun süre kalıp zaman içinde daha fazla değer üretiyorsa şirket daha yüksek CAC’i karşılayabilir." },
        { type: "paragraph", text: "Abonelik şirketleri bunu zaten biliyor. Fiziksel ürün markaları ise tekrar satın alma döngüsü daha yavaş olduğu için bu mantığın kendileri için geçerli değilmiş gibi davranıyor." },
        { type: "paragraph", text: "Bu fazla dar bir bakış açısıdır." },
        { type: "paragraph", text: "Elde tutma her zaman birinin gelecek ay aynı ürünü yeniden alması demek değildir." },
        { type: "paragraph", text: "Aksesuar veya bakım ürünü satın alması, yedek parça istemesi, değiştirmek yerine onarması, aynı kategoriden başka bir ürün alması, yorum bırakması, arkadaşına tavsiye etmesi veya bir sonraki gerçek satın alma anına kadar bağlantıda kalması anlamına gelebilir." },
        { type: "paragraph", text: "Fiziksel ürünler SaaS gibi davranmaz." },
        { type: "paragraph", text: "Ama edinilen her müşterinin yine de geleceğe uzanan bir değer eğrisi vardır." },
        { type: "paragraph", text: "Çoğu marka ilk satıştan sonra bu eğriyi yönetmeyi bırakır." },
        { type: "heading", text: "Daha iyi bir metrik: edinilen müşteri başına elde tutulan brüt kâr marjı" },
        { type: "paragraph", text: "CAC tek başına çok yetersizdir." },
        { type: "paragraph", text: "Daha iyi bir metrik, edinilen müşteri başına elde tutulan brüt kâr marjıdır." },
        { type: "paragraph", text: "Soru basitleşir:" },
        { type: "quote", text: "Bu müşteriyi edinmek için ödeme yaptıktan sonra iadeler, geri ödemeler, destek maliyetleri, garanti sorunları, hizmet maliyetleri ve yaşam döngüsü gelirleri hesaba katıldığında gerçekte ne kadar brüt kâr marjı elde tuttuk?" },
        { type: "paragraph", text: "Bu metrik pazarlama, e-ticaret, destek, ürün, operasyon ve finans ekiplerini aynı gerçeğe bakmaya zorlar." },
        { type: "paragraph", text: "Müşteriler ürünü iade ediyorsa pazarlama ucuz edinmeyi kutlayamaz. Müşteriler öfkeli ayrılıyorsa destek ekibi azalan talep sayısını kutlayamaz. Ürün teslimattan sonra kafa karışıklığı yaratıyorsa e-ticaret dönüşümü kutlayamaz. Kötü kurulum iadeye yol açıyorsa ürün ekibi dokümantasyonu görmezden gelemez. Finans, satın alma sonrasında ne olduğunu anlamadan CAC’i doğru değerlendiremez." },
        { type: "paragraph", text: "Edinilen müşteri başına elde tutulan brüt kâr marjı sistemi birbirine bağlar." },
        { type: "paragraph", text: "Şirketin edinme harcamasını kalıcı müşteri değerine dönüştürüp dönüştürmediğini gösterir." },
        { type: "heading", text: "Bu neden şimdi önemli" },
        { type: "paragraph", text: "Birçok marka yıllarca müşteri edinme konusunda daha iyi hâle gelerek büyüdü." },
        { type: "paragraph", text: "Daha fazla reklam. Daha iyi hedefleme. Daha keskin açılış sayfaları. Daha fazla yeniden hedefleme. Pazaryerlerinde daha fazla görünürlük. Daha fazla dönüşüm çalışması." },
        { type: "paragraph", text: "Bu yöntem hâlâ önemli. Artık tek başına yeterli değil." },
        { type: "paragraph", text: "Birçok kategoride edinme daha pahalı ve daha öngörülemez hâle geldi. Gizlilik değişiklikleri, platform rekabeti, pazaryeri bağımlılığı, yükselen reklam maliyetleri ve zayıflayan ilişkilendirme büyümeyi yönetmeyi zorlaştırdı." },
        { type: "paragraph", text: "Varsayılan yanıt daha ucuz kanallar aramaktır." },
        { type: "paragraph", text: "Bu mantıklıdır ama her zaman en iyi cevap değildir." },
        { type: "paragraph", text: "Bazen daha iyi cevap, zaten edinilmiş müşterilerden daha fazla değer elde etmektir." },
        { type: "paragraph", text: "Satın alma sonrası fırsat budur." },
        { type: "paragraph", text: "Belirsiz bir slogan olarak “daha iyi müşteri deneyimi” değil." },
        { type: "paragraph", text: "Daha iyi müşteri ekonomisi." },
        { type: "heading", text: "Afterlayer bu resmin neresinde" },
        { type: "paragraph", text: "Afterlayer gibi bir satın alma sonrası katman tam burada ilginç hâle gelir." },
        { type: "paragraph", text: "Değer yalnızca daha iyi görünen bir destek sayfası veya daha iyi bir dijital kılavuz değildir. Bunlar yardımcı olur ama ana iş gerekçesi olarak fazla küçüktür." },
        { type: "paragraph", text: "Daha güçlü gerekçe, Afterlayer’ın sahiplik davranışını büyüme ekonomisine bağlamasıdır." },
        { type: "paragraph", text: "Fiziksel ürün markasının satıştan sonra ne olduğunu anlamasına yardımcı olur." },
        { type: "paragraph", text: "Ürünü kim taradı? Kurulumu kim tamamladı? Kim bakım talimatına ihtiyaç duydu? Garantiyi kim kaydetti? Kim sorun gidermeye başladı? Kim onarım talep etti? Kim yedek parça aradı? Kim aksesuar almaya hazır olabilir? Kim kaybolma riski taşıyor?" },
        { type: "paragraph", text: "Bu, satın alma sonrası davranışı ölçülebilir bir katmana dönüştürür." },
        { type: "paragraph", text: "Davranış ölçülebildiğinde marka bunu elde tutma, destek maliyeti, iade oranı, tekrar satın alma, yedek parça ve onarım geliri, tavsiyeler ve CLV ile ilişkilendirebilir." },
        { type: "paragraph", text: "Asıl iş gerekçesi budur." },
        { type: "paragraph", text: "Afterlayer yalnızca satın alma sonrası deneyimi daha akıcı hâle getirip getirmediğine göre değerlendirilmemelidir." },
        { type: "paragraph", text: "Edinilen müşteri başına elde tutulan brüt kâr marjını artırıp artırmadığına göre değerlendirilmelidir." },
        { type: "heading", text: "Büyüme ekipleri için gerçek soru" },
        { type: "paragraph", text: "Çoğu şirket müşteri edinmek için ne kadar harcadığını zaten bilir." },
        { type: "paragraph", text: "Daha zor soru, bu müşterilerin satıştan sonra ekonomik olarak verimli hâle gelip gelmediğidir." },
        { type: "paragraph", text: "Birçok büyüme sistemi hâlâ burada zayıftır." },
        { type: "paragraph", text: "Edinme panoları vardır ama sahiplik panoları yoktur. Dönüşüm oranlarını bilirler ama kurulum tamamlamayı bilmezler. CAC’i bilirler ama destek sonrası elde tutmayı bilmezler. E-posta tıklamalarını bilirler ama onarım niyetini bilmezler. Sipariş hacmini bilirler ama edinilen müşteri başına elde tutulan brüt kâr marjını bilmezler." },
        { type: "paragraph", text: "Bu, büyüme çalışmasının bir sonraki katmanıdır." },
        { type: "paragraph", text: "Yalnızca daha fazla müşteri edinmek değil." },
        { type: "paragraph", text: "Zaten edinilmiş müşterilerden daha fazla değer elde tutmak." },
        { type: "quote", text: "Geçen ay edinilen müşterileri ele alın. Kaçı satın alma sonrasında daha değerli hâle geliyor? Kaçı işletmeden sessizce değer sızdırıyor?" },
      ],
    },
    {
      title: "Tekrar satın alma bir e-posta pazarlaması sorunu değildir",
      description: "Tekrar satın almanın neden başka bir elde tutma kampanyasından çok ürün, hizmet ve sahiplik deneyimine bağlı olduğu üzerine.",
      intro: "Bir müşteri markanızdan bir şey satın alır.",
      body: [
        { type: "paragraph", text: "Birkaç gün sonra e-postalar başlar. “Satın aldığınız üründen memnun musunuz?” “Görünümü tamamlayın.” “Müşteriler bunları da sevdi...” “Sonraki siparişinizde %10 indirim.”" },
        { type: "paragraph", text: "Ürün hâlâ koridorda açılmadan duruyor olabilir ama elde tutma sistemi ilişkinin harika gittiğine çoktan karar vermiştir." },
        { type: "paragraph", text: "Tekrar satın alma genellikle böyle yönetilir. İlk satış edinmeye aittir; sonrasında e-posta pazarlaması devralır. Müşteriler dönmediğinde markalar daha fazla kampanya, otomasyon, indirim ve salı gününü bir etkinlikmiş gibi gösteren neşeli konu satırları gönderir." },
        { type: "paragraph", text: "E-posta önemlidir. Sadece yanlış sorunu çözmesi beklenmektedir. Tekrar satın alma, gelen kutusunda olanlardan çok ürün geldikten sonra olanlara bağlıdır." },
        { type: "heading", text: "İkinci satın alma ilk ürünle başlar" },
        { type: "paragraph", text: "Müşteriler bir otomasyon markanın varlığını hatırlattığı için nadiren geri döner. İlk ürün iyi sonuç verdiği için dönerler. Zamanında gelir, kullanımını anlarlar ve satın alma amacını yerine getirir." },
        { type: "paragraph", text: "Bir sorun olduğunda yardım almak acı vermez. Bakım talimatı, yedek parça veya onarım gerektiğinde bunları bulmak için küçük bir idari kariyere başlamak zorunda kalmazlar. Tekrar satın alma burada başlar." },
        { type: "paragraph", text: "Tipik bir e-posta akışı şöyle düşünür:" },
        { type: "quote", text: "Satın alma > 14 gün bekleme > Kupon gönderme" },
        { type: "paragraph", text: "Müşterinin yaşadığı ise buna daha yakındır:" },
        { type: "quote", text: "Satın alma > Kullanma > Anlama > Güvenme > Yeniden ihtiyaç duyma > Geri dönme" },
        { type: "paragraph", text: "E-posta yol boyunca yardımcı olabilir. Ürün ve hizmetin yaratamadığı güveni üretemez. İyi bir kampanya kafa karıştırıcı kurulumu, eksik yedek parçayı veya berbat desteği kurtaramaz; ancak müşteriye hepsini hatırlatabilir." },
        { type: "heading", text: "Markalar görebildikleri kısmı optimize eder" },
        { type: "paragraph", text: "Satıştan önce markalar neredeyse her şeyi izler: tıklanan reklamı, ziyaret edilen sayfaları, geçirilen süreyi, sepete eklenenleri ve vazgeçilen noktayı. Müşterinin perşembe 10.07’de gönderilen e-postayı görmezden gelip Instagram reklamıyla döndüğünü bile bilebilirler." },
        { type: "paragraph", text: "Sonra müşteri satın alır ve görünürlük hızla düşer. Kutuyu açtı mı? Ürünü doğru kurdu mu? Bakımını anladı mı? Bir parça kırıldı mı? Sinirlenip kullanmayı bıraktı mı?" },
        { type: "paragraph", text: "Belki sorunu YouTube’da çözdü, cevabı Reddit’te buldu veya Marco adlı biri 2017 tarihli forum mesajında anlattı. Marka genellikle bilmez. Ödeme yolculuğunun ayrıntılı haritasına, sahipliğin başladığı yerde ise boşluğa sahiptir." },
        { type: "paragraph", text: "Bu yüzden ulaşabildiği yerde, gelen kutusunda çalışmaya devam eder. Anlaşılırdır ama gelen kutusu ilişkinin yalnızca küçük bir parçasıdır." },
        { type: "heading", text: "İndirim sadakat yaratmadan satış yaratabilir" },
        { type: "paragraph", text: "İndirimler işe yarar, bazen çok iyi. Birini başka bir işlem için geri getirebilir ama bu sadık olduğu anlamına gelmez. Bazen müşteri yalnızca rutini öğrenmiştir: tam fiyatla al, üç e-posta al, ilk ikisini görmezden gel, üçüncüdeki %15 kodunu kullan." },
        { type: "paragraph", text: "Ekonomi çalışıyorsa promosyonlarda sorun yoktur. Hata, indirimli ikinci siparişi sadakat kanıtı saymaktır." },
        { type: "paragraph", text: "Sadık müşteri, ilk deneyim sonraki satın almayı daha güvenli hissettirdiği için döner. Bekleyeceği kaliteyi, ürünün davranışını ve teslimatın gerçekleşeceğini bilir. Bir şey kırılırsa markanın onu PDF, chatbot ve sorun hâlâ çözülmemişken “çözüldü” yazan destek talebiyle bırakmayacağına inanır." },
        { type: "paragraph", text: "Kupon fiyatı düşürür. İyi sahiplik deneyimi riski düşürür. Aynı şey değildir." },
        { type: "heading", text: "Marka kendini satıştan sonra kanıtlar" },
        { type: "paragraph", text: "Satıştan önce vaatler ucuzdur: premium kalite, özenli tasarım, uzun ömür, ömür boyu kullanım. Müşteri bunların anlamını sonrasında keşfeder." },
        { type: "paragraph", text: "Beş destek sayfasında aramadan kurulum talimatını bulabiliyor mu? Aynı seri numarasını dört kez yazmadan garantiyi kaydedebiliyor mu? Malzemeyi bozmadan temizlemeyi öğrenebiliyor mu? Çok daha pahalı ürünü kullanılabilir tutan iki euroluk plastik parçayı sipariş edebiliyor mu? Ürünü onarabiliyor mu? Destek görevlisi hangi ürün ve sürüme sahip olduğunu biliyor mu?" },
        { type: "paragraph", text: "Bu anlar lojistik, destek ve müşteri hizmetleri arasında kalan operasyonel ayrıntılar sayılır. Oysa müşterinin marka görüşünü başka bir kampanyadan daha fazla şekillendirir. Reklam markanın önemsediğini söyler; onarım deneyimi gerçekten önemseyip önemsemediğini gösterir." },
        { type: "heading", text: "Fiziksel ürünler çok hızlı anonimleşir" },
        { type: "paragraph", text: "Çoğu ürün satıldıktan kısa süre sonra kimliğini kaybeder. Marka depodan 4.000 ürün çıktığını bilir ama hangi müşterinin hangi sürüme sahip olduğunu, hangi talimatın geçerli olduğunu, hangi parçanın uyduğunu veya altı ay sonra hangi sorunun çıktığını bilmeyebilir." },
        { type: "paragraph", text: "Müşteride ürün, markada sipariş vardır. Aralarındaki bağlantı zayıf veya yoktur. Marka başka bir şey satmaya çalıştığında bu sorun olur." },
        { type: "paragraph", text: "Belirli bir kahve makinesine sahip kişinin kahve hakkında genel bültene değil; doğru temizlik döngüsü hatırlatmasına, filtreye, uyumlu aksesuara veya onarım seçeneğine ihtiyacı olabilir. Sonraki öneri, zaten sahip olduğu şeyden başlamalıdır." },
        { type: "paragraph", text: "Bu ticarettir ama faydalı bağlam daha fazla kampanyadan değil ürün ilişkisinden gelir. Bağlam olmadan kişiselleştirme çoğu zaman genel teklifin üzerindeki isimdir. “Merhaba Sarah” bir strateji değildir." },
        { type: "heading", text: "Elde tutma çalışmalarının çoğu sıkıcıdır" },
        { type: "paragraph", text: "Elde tutma; topluluk, sadakat ekosistemi, yapay zekâ kişiselleştirmesi ve duygusal bağ gibi etkileyici sözlerle anlatılır. Bazıları faydalıdır; çoğu müşteri deneyiminden çok konferans slaytlarını iyileştirir." },
        { type: "paragraph", text: "Tekrar satın alma genellikle sıradan şeylerle kurulur: açık talimatlar, gerçekten mevcut yedek parçalar, faydalı hatırlatmalar, basit garanti kaydı, soruyu yanıtlayan destek, doğru ürün bilgisi ve ceza gibi hissettirmeyen onarım yolu." },
        { type: "paragraph", text: "Devrimci görünmezler. Sahipliği kolaylaştırırlar ve bu genellikle daha değerlidir. Müşteri ödeme sonrasında da markayı değerlendirmeyi sürdürür; her eksik parça, kafa karıştırıcı talimat ve yanıtsız talep yeniden satın alma ihtimalini değiştirir." },
        { type: "paragraph", text: "Bu anların çoğu e-posta panelinde görünmez. Sonucu yine de etkiler." },
        { type: "heading", text: "E-posta sahipliğe yanıt vermeli" },
        { type: "paragraph", text: "Çözüm e-posta göndermeyi bırakmak değil, e-postanın ürünle olanları takip etmesini sağlamaktır." },
        { type: "paragraph", text: "Faydalı mesaj garantinin aktif olduğunu doğrulayabilir, tam modele ait talimatlara bağlanabilir, bir parçanın temizlenmesi gerektiğini hatırlatabilir veya doğru yedek parçanın mevcut olduğunu söyleyebilir. İki yıl sonra evdeki ürünle uyumlu bir şey önerebilir." },
        { type: "paragraph", text: "Bu, 45 gün sonra herkese aynı “Seni özledik” mesajını göndermekten daha faydalıdır. Bazen müşteri markayı özlememiştir. Bazen bir sandalye almıştır ve hâlâ üzerinde oturuyordur." },
        { type: "heading", text: "İlk satın almadan sonra ne olduğunu sorun" },
        { type: "paragraph", text: "Bir marka tekrar satın almayı nasıl artıracağını sorduğunda önce yaşam döngüsü e-postasına bakar. Bu sayıları iyileştirebilir ama başlangıç noktası olmamalıdır." },
        { type: "paragraph", text: "Teslimattan sonra olanlarla başlayın. Müşteri nerede karıştı? Bulamadığı neye ihtiyaç duydu? Ne kırıldı? Hangi sorular desteğe gelmeye devam etti? Sahipliği ne kolaylaştırdı? Altı ay sonra markaya satın aldığı günden daha mı çok, daha mı az güveniyor?" },
        { type: "paragraph", text: "Tekrar satın alma esas olarak bir iletişim sonucu değildir. Ürün, hizmet ve sahiplik deneyimi işini yaptıktan sonra geriye kalandır." },
        { type: "paragraph", text: "E-posta müşterilere var olduğunuzu hatırlatabilir." },
        { type: "quote", text: "İlk deneyim onlara dönmemek için bir neden verdiyse, geri dönmeleri için bir neden veremez." },
      ],
    },
  ],
};

function makeArticles(locale: Locale): Article[] {
  const translations = locale === "en"
    ? articleTranslations.en.filter((article) => article.title !== "Il riacquisto non è un problema di email marketing")
    : locale === "it"
      ? [articleTranslations.it[0], articleTranslations.it[1], articleTranslations.en.find((article) => article.title === "Il riacquisto non è un problema di email marketing")!, ...articleTranslations.it.slice(2)]
      : articleTranslations.tr;
  return articleBase.map((base, index) => {
    const translation = translations[index];
    if (!translation) throw new Error(`Missing ${locale} translation for article: ${base.slug}`);
    return { ...base, tags: [...base.tags], ...translation, seoTitle: translation.title, seoDescription: translation.description };
  });
}

export const articles: Record<Locale, Article[]> = { en: makeArticles("en"), it: makeArticles("it"), tr: makeArticles("tr") };

const projectBase = [
  { slug: "lexhero", name: "LexHero", year: 2026, featured: true, role: "Product direction, experience design and communication", services: ["Product strategy", "Experience design", "Positioning"], status: "In development" },
  { slug: "afterlayer", name: "Afterlayer", year: 2026, featured: false, role: "Founder, Product Designer and Product Strategist", services: ["Product strategy", "Experience design", "AI-assisted content workflows", "MVP definition"], status: "2026–ongoing" },
  { slug: "concoro", name: "Concoro", year: 2026, featured: false, role: "Founder, Product Designer and Product Strategist", services: ["Product strategy", "Information architecture", "AI systems"], status: "Ongoing" },
  { slug: "ludwig-guru", name: "Ludwig.guru", year: 2024, featured: false, role: "Lead UX/UI Designer", services: ["Product and UX strategy", "Cross-platform experience", "Design system"], status: "Ongoing" },
] as const;

const projectTranslations: Record<Locale, Array<{ summary: string; description: string; sections: Project["sections"] }>> = {
  en: [
    {
      summary: "Turning a fragmented legal platform into an AI-native workspace.",
      description: "I helped turn LexHero from a collection of legal tools into a coherent workspace where lawyers can create, analyse, verify, personalise and manage documents with AI.",
      sections: [
        {
          eyebrow: "01 — The starting point",
          title: "The product had grown. The structure had not.",
          paragraphs: [
            "A lawyer starts drafting a contract in one platform. Then comes the familiar tour: the document is downloaded, opened in Word, sent by email, checked against another file, copied into a legal research tool and eventually uploaded somewhere else for signature.",
            "LexHero already offered useful tools for this work. Users could analyse a document, generate content or search for information. What they often could not understand was where to begin, which tool to use or how one part of the product related to another.",
            "The problem was not a lack of features. It was orientation. The interface had become a map of the company’s feature history rather than a reflection of the customer’s work."
          ],
          quote: "The opportunity was not to add another stop. It was to reduce the number of stops."
        },
        {
          eyebrow: "02 — Product insight",
          title: "Legal work is not a row of separate tools.",
          paragraphs: [
            "I used user interviews, sales calls, product demonstrations and support requests to understand how independent lawyers, law-firm employees and in-house legal teams actually worked.",
            "A legal professional reads a document, notices a problem, checks a source, rewrites a clause, compares two versions, adds client information and reviews the result. A new finding may change an earlier paragraph. Editing and analysis continuously affect one another.",
            "The workflow is a document that gradually becomes more complete. The product architecture needed to reflect that."
          ]
        },
        {
          eyebrow: "03 — Strategic choice",
          title: "The tempting answer was also the wrong one.",
          paragraphs: [
            "One possible strategy was to separate LexHero’s AI capabilities into standalone products: a document analyser, a research assistant, a contract generator and other specialised tools. Each would have a clear name and a tidy landing page.",
            "But the user would still be left assembling the workflow—moving information between environments, repeatedly explaining the same context and deciding which tool to open next. The product would look more organised while the work remained fragmented.",
            "Adding AI this way would not solve the problem. It would automate the fragmentation. Instead, we organised the product around the object legal professionals were already working on: the document."
          ]
        },
        {
          eyebrow: "04 — Product model",
          title: "The document became the centre of the product.",
          paragraphs: [
            "The redesigned experience was built around two connected elements. Total Chat offered one conversational interface for questions, analysis, legal research, generation and changes to the active document. Canvas provided a persistent place to preview, edit, structure and personalise the result.",
            "Chat provided speed. Canvas provided control. Together, they let users move from an initial request to a usable legal document without switching between standalone AI tools.",
            "A user could upload a contract, identify a risky clause, inspect the relevant source, request an alternative and edit the final wording directly. The context stayed in place. The user stayed in place too."
          ]
        },
        {
          eyebrow: "05 — Interaction design",
          title: "Chat did not replace the editor. It became a way of operating it.",
          paragraphs: [
            "Chat is effective for direct questions and initial drafts. It is much less effective when the result is forty paragraphs long, contains several sections and needs repeated revision.",
            "Legal documents need a full structural view. Users must be able to edit one clause without regenerating everything, personalise parties and obligations, compare new content with original material and understand what changed.",
            "Canvas removed the gap between generation and evaluation. AI could propose a change through Total Chat while the user inspected and edited the document directly. The result was immediately visible, structured and usable."
          ]
        },
        {
          eyebrow: "06 — Workspace architecture",
          title: "Context, action and result stayed visible together.",
          paragraphs: [
            "The workspace was organised into three areas: document navigation for uploaded files and supporting material; Canvas for the active document and direct editing; and Total Chat for analysis, questions, generation and modifications.",
            "This relationship meant the interface no longer asked users to understand LexHero’s internal organisation. It followed the structure of their work."
          ],
          list: ["Document navigation", "Canvas", "Total Chat"]
        },
        {
          eyebrow: "07 — Responsible AI",
          title: "AI could propose, but it could not decide silently.",
          paragraphs: [
            "Trust is not an optional layer in legal technology. An AI response can sound polished and precise while still being incomplete or wrong. Fluency is useful. It is not evidence.",
            "Legal professionals need to understand where information came from, what the system changed and which parts still require their judgement. AI-assisted changes therefore needed to remain inspectable and reversible."
          ],
          list: ["Source references", "Verification cards", "Document comparison", "Clear content ownership", "Change history"]
        },
        {
          eyebrow: "08 — Design system",
          title: "Building a system rather than another set of screens.",
          paragraphs: [
            "The existing Figma files had no shared component system. Similar elements used different layouts, behaviours and visual treatments depending on where they appeared.",
            "I created a common foundation for typography, colour, navigation, forms, document states, chat components, verification elements, cards, panels, feedback, loading states and reusable layouts.",
            "The design system established shared rules for how LexHero behaved. Future capabilities could enter through existing patterns instead of becoming entirely new sections with their own interaction language."
          ],
          quote: "Products rarely become complicated through one dramatic mistake. They become complicated one reasonable feature request at a time."
        },
        {
          eyebrow: "09 — Outcome",
          title: "From feature collection to product system.",
          paragraphs: [
            "The most important result was not a new visual style. It was a new product model: analysis, research, writing, editing and verification became connected parts of the same document workflow.",
            "There were no reliable baseline analytics that would support a precise productivity claim. The impact was evaluated through observable product changes: reduced architectural fragmentation, a clearer primary workflow, a consistent interaction system and a stronger foundation for AI-assisted legal work."
          ],
          list: [
            "One primary workspace replaced disconnected entry points",
            "AI capabilities shared the same document context",
            "Generation and manual editing worked without export",
            "Trust and verification became part of the interaction model",
            "The system created a scalable foundation for future development",
            "Sales and product teams gained one coherent product story"
          ]
        },
        {
          eyebrow: "10 — Reflection",
          title: "The harder question was where AI should disappear into the workflow.",
          paragraphs: [
            "Adding AI does not automatically make a product simpler. It can easily create more tools, buttons, entry points and decisions for people who already have enough decisions to make.",
            "For LexHero, the strongest solution was not a catalogue of specialised AI products. It was a shared workspace where different capabilities could operate on the same document, preserve context and remain under the user’s control.",
            "The product became less about demonstrating what the technology could do and more about supporting how legal professionals actually work."
          ],
          quote: "That distinction usually separates a useful AI product from a very impressive demo."
        }
      ]
    },
    afterlayerCaseStudy,
    {
      summary: "Designing the information layer for public-sector careers.",
      description: "I designed and built an information system that turns fragmented Italian public-sector notices into structured, relevant and explainable opportunities.",
      sections: [
        {
          eyebrow: "01 — The starting point",
          title: "The information was available. The understanding was not.",
          paragraphs: [
            "A candidate finds a public-sector job announcement that looks promising. The title is vague, the requirements begin on page twelve and the deadline sits between a legal reference and an administrative approval.",
            "Public-sector opportunities in Italy are technically public. But they are scattered across institutional portals, described with inconsistent terminology and frequently published inside long administrative documents.",
            "Most existing services behaved like databases. They offered lists, categories and filters, but left candidates to translate their education and experience into the language used by public institutions."
          ],
          quote: "The real question was not how to improve search. It was how to help candidates understand relevance, eligibility and what to do next."
        },
        {
          eyebrow: "02 — Product strategy",
          title: "A cleaner job board would not solve an upstream information problem.",
          paragraphs: [
            "The first concept collected active competitions and presented them through a cleaner search interface. It was useful, but it treated each announcement as a page to display rather than a document that first needed to be understood.",
            "Traditional job boards assume a clear title, location, employer and list of requirements. Public notices rarely arrive that politely.",
            "Concoro therefore evolved into a decision-support product built around three stages: structure the opportunity, connect it to the candidate and explain the relevance. Search, onboarding, matching and alerts all needed the same shared understanding of both sides."
          ],
          list: ["Structure the opportunity", "Connect it to the candidate", "Explain the relevance"]
        },
        {
          eyebrow: "03 — Information architecture",
          title: "The taxonomy was one of the most important UX decisions.",
          paragraphs: [
            "The same profession could be described differently by two institutions. Similar qualifications appeared under different headings, while a job title might describe a contractual classification rather than the work itself.",
            "I developed a normalised model covering professional sector, job family, employment type, location, deadlines, eligibility, qualifications, technical knowledge, capabilities, examination programme, legal references and status.",
            "This shared schema allowed Concoro to present opportunities consistently even when the original notices were inconsistent. Without it, better filters would have produced a more polished version of the same confusion."
          ]
        },
        {
          eyebrow: "04 — Ingestion architecture",
          title: "The experience begins before a result reaches the screen.",
          paragraphs: [
            "The ingestion system collects each source notice, extracts its text and metadata, identifies its structure, classifies and normalises the relevant information, stores the record and prepares semantic sections for search and matching.",
            "n8n coordinates the workflows while Supabase acts as the operational database. Records are published only when they meet the required conditions.",
            "The system does not attach a generic summary to a PDF. A pleasant summary can still omit the one sentence that decides whether someone can apply. Instead, information is organised around candidate decisions: role, location, qualification, examination and deadline."
          ],
          visual: "ingestion"
        },
        {
          eyebrow: "05 — Search experience",
          title: "Reveal complexity when it becomes useful.",
          paragraphs: [
            "Many public portals reproduce the organisation of the institution publishing the information. Concoro was designed around the person trying to use it.",
            "Opportunity cards surface what a candidate needs for an initial decision. Administrative and legal detail remains available on the full page through progressive disclosure.",
            "The goal was not to pretend public competitions were simple. A candidate browsing twenty opportunities does not need every legal reference in each card. A candidate preparing an application does."
          ],
          list: ["What is the role?", "Where is it located?", "When is the deadline?", "Which qualifications are required?", "Does it fit my background?", "What happens next?"]
        },
        {
          eyebrow: "06 — Candidate context",
          title: "Onboarding created a reusable product layer, not a gate.",
          paragraphs: [
            "Filtering still required users to understand how their background mapped to official public-sector terminology. Someone may know they studied economics and prefer administrative work without knowing the relevant professional family or contractual category.",
            "I designed a five-step onboarding flow covering education, professional background, preferred sectors, geography, eligibility conditions and areas of strength.",
            "The interface asked candidates questions they could reasonably answer about themselves. Behind it, their answers became structured and semantic data for recommendations, prioritised search, alerts, eligibility guidance and future application support."
          ],
          list: ["Education and qualifications", "Professional background", "Sectors and job families", "Geographic preferences", "Eligibility and skills"]
        },
        {
          eyebrow: "07 — AI matching",
          title: "A whole-document similarity score was technically valid and product-wise noisy.",
          paragraphs: [
            "The first matching approach compared one embedding for the candidate with another for the complete notice. Long notices mix legal references, procedures, responsibilities, qualifications and examination details; treating them as equally meaningful made the results hard to control.",
            "I divided every opportunity into three semantic dimensions: role core, requirements and domain context. Each was embedded separately and stored in Pinecone.",
            "Recommendations combined these semantic results with structured constraints, excluded expired opportunities, grouped results by competition and returned a limited prioritised set. The model became more controllable because the product gave it a narrower, better-structured job."
          ]
        },
        {
          eyebrow: "08 — Responsible recommendations",
          title: "Relevance and eligibility are not the same thing.",
          paragraphs: [
            "A candidate may be interested in a role without being eligible for it. Showing a promising opportunity and revealing the disqualifying requirement only after a long read is not engagement. It is wasted attention.",
            "Deadlines, qualifications, mandatory conditions and employment categories therefore act as product constraints rather than passive text on a detail page.",
            "Recommendations also explain why they appear—professional background, education, geography, skills or domain preference—instead of presenting an opaque percentage as authority."
          ],
          quote: "The purpose was not to convince the user that the algorithm was right. It was to give them enough context to decide whether the result was useful."
        },
        {
          eyebrow: "09 — Invisible intelligence",
          title: "AI sat beneath familiar actions instead of becoming another destination.",
          paragraphs: [
            "Candidates were already trying to understand a complicated employment process. They did not also need to learn how to interview a chatbot correctly.",
            "AI worked mostly behind the visible experience: interpreting documents, extracting information, classifying roles, normalising terminology, preparing semantic representations, retrieving opportunities and supporting explanations.",
            "The interface remained built around familiar actions—browse, filter, save, compare and receive alerts. The intelligence reduced translation work without demanding attention for itself."
          ],
          list: ["Interpret", "Extract", "Classify", "Normalise", "Retrieve", "Explain"]
        },
        {
          eyebrow: "10 — Trust and freshness",
          title: "A beautiful expired opportunity is still expired.",
          paragraphs: [
            "The structured record made each notice easier to understand, but the official source remained authoritative. Candidates could see where information came from and return to the original document when preparing an application.",
            "Status and deadlines were treated as system-level constraints. Expired competitions closed automatically and disappeared from active discovery, semantic retrieval, recommendations and alerts.",
            "Freshness was not a label added after retrieval. In this context, current data, visible sources and explicit uncertainty were part of the user experience."
          ]
        },
        {
          eyebrow: "11 — Product trade-offs",
          title: "More automation was useful only when the information remained trustworthy.",
          paragraphs: [
            "Coverage increased the platform’s usefulness but also introduced inconsistent documents, unusual classifications and incomplete records. The architecture needed validation states, reprocessing and ways to identify records requiring attention.",
            "More complex personalisation could improve relevance while making recommendations harder to understand. I favoured a modular matching structure over a single opaque score.",
            "Readable summaries had to coexist with legal completeness, while large-scale automation had to preserve human control. The interface simplified navigation, not the underlying legal reality."
          ],
          list: ["Coverage vs data quality", "Personalisation vs transparency", "Simplicity vs legal completeness", "Automation vs control"]
        },
        {
          eyebrow: "12 — Outcome",
          title: "From search engine to information system.",
          paragraphs: [
            "Concoro evolved into an end-to-end information product capable of processing notices, converting them into a shared schema, maintaining current states, supporting structured and semantic search, building candidate profiles and producing explainable recommendations.",
            "The most important result was the common information architecture connecting source documents, structured opportunities, candidate profiles and recommendations. That layer allowed the product to move beyond displaying information and begin helping candidates make decisions.",
            "There were no mature behavioural analytics or long-term outcome data at this stage. The next phase needs to test whether the system improves discovery, eligibility understanding and application decisions—not simply whether it produces sophisticated recommendations."
          ]
        },
        {
          eyebrow: "13 — Reflection",
          title: "Search problems often begin upstream.",
          paragraphs: [
            "A search interface cannot compensate for inconsistent, incomplete or poorly classified information. Much of Concoro’s experience was determined before a result appeared on screen.",
            "The largest AI improvements came from clearer schemas, meaningful document sections and deterministic constraints—not a newer model or a longer prompt.",
            "Designing an intelligent product means designing the system that produces the experience, not only the interface through which people access it."
          ],
          quote: "Making information public is not the same as making it usable."
        }
      ]
    },
    {
      summary: "Turning a language search engine into a coherent writing platform.",
      description: "I created a unified product system across web, desktop and mobile for the ways people search, compare, translate, rewrite and improve their English—without losing the evidence that made Ludwig distinctive.",
      sections: [
        {
          eyebrow: "01 — Product point of view",
          title: "The most important feature was not a feature.",
          paragraphs: [
            "Most writing tools try to answer a binary question: is this sentence correct? Ludwig helps users ask more useful questions: does it sound natural, how do credible writers express the same idea and which alternative fits this context better?",
            "A sentence can be grammatically valid and still sound unnatural. Two phrases may mean almost the same thing while carrying different levels of formality, confidence or emotional weight.",
            "Ludwig connected suggestions to real examples and visible sources. Any redesign needed to protect that behaviour. Simplifying the experience could not mean removing the evidence that made it useful."
          ],
          quote: "People did not only want correction. They wanted evidence."
        },
        {
          eyebrow: "02 — The problem",
          title: "The product had grown around the search box.",
          paragraphs: [
            "Ludwig began with one distinctive interaction: enter an expression, search for it and inspect how similar language appears in credible sources. As it expanded, search, comparison, translation, correction and rewriting were added around that behaviour.",
            "Each capability was useful by itself. Together they made users translate a broad intention—‘I want to write this better’—into Ludwig’s internal divisions. The interface treated actions as destinations. Users experienced them as consecutive moments in one flow.",
            "Results also had depth without a clear hierarchy, platform patterns had diverged and every new feature risked introducing another local design solution."
          ],
          list: ["Feature-led navigation", "Competing result blocks", "Diverging platform patterns", "A design foundation that was hard to scale"]
        },
        {
          eyebrow: "03 — Strategic reframing",
          title: "This was a product architecture problem, not a visual refresh.",
          paragraphs: [
            "Cleaner layouts, new typography and updated controls were necessary, but they did not answer the central question: how could Ludwig grow into a broader writing platform without losing its contextual search experience?",
            "The redesign needed to preserve the familiar search behaviour while creating clearer relationships between the growing capabilities.",
            "The aim was not to replace the existing mental model overnight. It was to give the product enough structure to evolve without becoming a menu of loosely connected writing tools."
          ]
        },
        {
          eyebrow: "04 — Experience mapping",
          title: "Users searched, checked, compared and rewrote—sometimes within the same minute.",
          paragraphs: [
            "Before redesigning screens, I mapped how people entered the product, submitted a query, interpreted results, explored alternatives, continued working, encountered limits and moved between anonymous, free and paid states.",
            "The map covered search and input states, result flows, alternative writing actions, account states, product boundaries, empty, loading and error states, responsive behaviour and desktop and mobile interactions.",
            "Many interface problems were symptoms of one structural issue: the experience had been designed around individual capabilities rather than a continuous writing journey."
          ]
        },
        {
          eyebrow: "05 — Writing intent",
          title: "Different forms of help began to feel like one system.",
          paragraphs: [
            "I reorganised the experience around what users were trying to achieve rather than the technical divisions of the product.",
            "The actions remained distinct because search, correction, comparison, translation and longer-form writing do not produce identical results. But they began to share input patterns, navigation, terminology and controls.",
            "This created continuity without pretending every writing problem was the same. A new capability no longer needed users to understand another miniature product."
          ]
        },
        {
          eyebrow: "06 — Result architecture",
          title: "Search results became a decision interface.",
          paragraphs: [
            "Ludwig already provided examples, alternatives and contextual evidence. The design challenge was to show what that information meant for the user’s own sentence.",
            "I introduced five levels: the primary response, suggested improvements, real-world examples, sources and supporting information, and possible next actions.",
            "A user looking for a quick answer could understand the main result immediately. A researcher, translator or professional could inspect examples and sources in depth. Information remained available, but no longer competed at the same visual level."
          ]
        },
        {
          eyebrow: "07 — Evidence and trust",
          title: "Fast answers without fake certainty.",
          paragraphs: [
            "Language does not always have one best answer. A phrase may be common in academic writing and awkward in conversation. Two alternatives can both work while expressing different intentions.",
            "The redesign preserved the visible relationship between suggestions, usage examples, context and sources instead of asking users to trust a mysterious correction.",
            "The product’s job was not always to say ‘use this sentence.’ Sometimes the more useful response was to present the strongest options and the evidence needed to choose between them."
          ],
          quote: "Confidence came from evidence the user could inspect, not from hiding uncertainty."
        },
        {
          eyebrow: "08 — Continuity",
          title: "The query remained the anchor.",
          paragraphs: [
            "Different writing tools could easily have introduced separate entry points, forms and rules. I designed the input as a shared starting point across the experience.",
            "Users could begin with the language already in front of them, then compare it, translate it or improve it without copying the sentence into separate tools.",
            "Results, alternatives and related actions became connected parts of the same process. Users could explore different versions of an idea without losing the sentence that started the task."
          ]
        },
        {
          eyebrow: "09 — Cross-platform design",
          title: "The layouts changed. The product logic did not.",
          paragraphs: [
            "The redesign covered web, desktop and mobile. The objective was behavioural continuity rather than visual duplication.",
            "On larger screens, the interface supported denser information and side-by-side comparison. On mobile, the main answer appeared first while evidence and secondary actions were revealed progressively.",
            "The same concepts—query entry, result priority, alternatives, source access and continuation—remained recognisable across devices, so users did not need to reconstruct their understanding each time."
          ]
        },
        {
          eyebrow: "10 — Mobile context",
          title: "Mobile was a context, not a smaller screen.",
          paragraphs: [
            "Mobile users may check a sentence inside an email, review a translation during a conversation or make a quick decision between other tasks.",
            "The experience prioritised immediate interpretation, clear alternatives, progressive evidence, reduced visual competition and predictable continuation actions.",
            "The redesign did not remove the depth of Ludwig’s results. It changed when that depth appeared."
          ]
        },
        {
          eyebrow: "11 — Design system",
          title: "A product system has to survive content that does not behave nicely.",
          paragraphs: [
            "I built reusable foundations and components for typography, spacing, colour, inputs, navigation, controls, result cards, system states, responsive behaviour and page layouts.",
            "The system was designed around behaviour rather than finished screens. Components needed to handle different result types, variable content length, partial information, multiple interaction states and future writing capabilities.",
            "A language product may show one short sentence or several long examples. A source title may fit one line or read like an academic committee was paid by the word. A design that only works with ideal placeholder text is not a product system. It is a screenshot."
          ]
        },
        {
          eyebrow: "12 — Product trade-offs",
          title: "Familiarity was an asset, not an obstacle.",
          paragraphs: [
            "Ludwig had an established user base. A complete reinvention might have produced a more dramatic before-and-after image, but it would also have increased product risk.",
            "The redesign retained the central role of search, the evidence-based result model, real examples and the connection between suggestions and sources. It changed the hierarchy, predictability, relationships between tools and continuity across devices.",
            "Speed had to coexist with depth, consistency with platform context, familiarity with change and feature visibility with interface simplicity."
          ],
          list: ["Speed vs depth", "Consistency vs platform context", "Familiarity vs reinvention", "Feature visibility vs interface simplicity"]
        },
        {
          eyebrow: "13 — Outcome",
          title: "From language search engine to coherent writing platform.",
          paragraphs: [
            "The redesign created a unified foundation across web, desktop and mobile: a clearer relationship between writing tools, a more understandable path from query to decision, a stronger hierarchy for complex results and a scalable component system.",
            "There were no reliable baseline measurements for precise claims about faster completion or improved writing outcomes. The impact was visible in the product structure: disconnected writing actions moved into a shared model and the platforms began to behave as parts of the same system.",
            "The hardest work was not drawing screens. It was deciding what should remain familiar, what needed to change and which patterns could support a product that was still evolving."
          ],
          quote: "A coherent product is one in which users understand how the pieces help them complete the same job."
        }
      ]
    },
  ],
  it: [],
  tr: [],
};
projectTranslations.it = projectTranslations.en.map((project, index) => {
  if (index === 0) return localizedCaseStudies.it.lexhero;
  if (index === 1) return afterlayerCaseStudyIt;
  if (index === 2) return localizedCaseStudies.it.concoro;
  if (index === 3) return localizedLudwig.it;
  return project;
});
projectTranslations.tr = projectTranslations.en.map((project, index) => {
  if (index === 0) return localizedCaseStudies.tr.lexhero;
  if (index === 1) return afterlayerCaseStudyTr;
  if (index === 2) return localizedCaseStudies.tr.concoro;
  if (index === 3) return localizedLudwig.tr;
  return project;
});

function makeProjects(locale: Locale): Project[] {
  return projectBase.map((base, index) => {
    const hasLocalizedMeta = base.slug === "lexhero" || base.slug === "afterlayer" || base.slug === "concoro" || base.slug === "ludwig-guru";
    const meta = locale === "en" || !hasLocalizedMeta ? null : localizedProjectMeta[locale][base.slug];
    return { ...base, services: [...base.services], caseStudyAvailable: true, ...projectTranslations[locale][index], ...meta };
  });
}

export const projects: Record<Locale, Project[]> = { en: makeProjects("en"), it: makeProjects("it"), tr: makeProjects("tr") };
