import type { Project } from "./types";

type AfterlayerCaseStudy = Required<Pick<Project, "summary" | "description" | "sections">>;

export const afterlayerCaseStudyTr: AfterlayerCaseStudy = {
  summary: "Ödeme sonrasında başlayan ürün deneyimini tasarlamak.",
  description: "Parçalı kılavuzları, garanti bilgilerini ve destek yolculuklarını kullanışlı, markalı bir satış sonrası deneyime dönüştüren ürün platformu.",
  sections: [
    {
      eyebrow: "01 — Fırsat",
      title: "Eksik ürün katmanı satıştan sonra başlıyordu.",
      paragraphs: [
        "Müşteri yeni bir ürün satın alır. Kutuda ürünün yanında koruyucu kartonlar, sekiz dilde basılmış küçük bir kitapçık ve nereye gittiği pek belli olmayan bir QR kod bulur. Kitapçık çekmeceye, garanti belgesi bir daha bulunmayacak kadar ‘güvenli’ bir yere kaldırılır.",
        "Müşteri bir şeye ihtiyaç duyana kadar sorun yoktur: ürün nasıl temizlenir, bu parça değiştirilebilir mi, seri numarası nerede, garanti bu durumu kapsıyor mu? O anda marka ilişkisi PDF’ler, eski e-postalar, destek formları ve artık var olmayabilecek ürün sayfaları arasında aramaya dönüşür.",
        "Afterlayer her ürüne kurulum, bakım, onarım, garanti, yedek parça ve dijital ürün pasaportu bilgileri için kalıcı bir dijital adres verir. Markalar için dağınık dokümantasyonu yapılandırılmış, güncellenebilir ve ölçülebilir deneyimlere dönüştürür."
      ],
      quote: "Amaç daha iyi bir PDF okuyucu yapmak değildi. Satış ile ürün ömrünün sonu arasındaki eksik ürün katmanını tasarlamaktı."
    },
    {
      eyebrow: "02 — Rolüm",
      title: "Kurucu, Ürün Tasarımcısı ve Ürün Stratejisti.",
      paragraphs: [
        "Ürün stratejisi ve konumlandırma, pazar ve rakip analizi, bilgi mimarisi, müşteri ve marka akışları, ürün taksonomisi, UX ve etkileşim tasarımı, responsive arayüzler, yapay zekâ destekli içerik akışları, Dijital Ürün Pasaportu, prototipleme, MVP önceliklendirmesi, tasarım sistemi, iş modeli ve pilot yapısı üzerinde bağımsız çalıştım.",
        "Zaman: 2026–devam ediyor. Platform: responsive web uygulaması ve mobil ürün sayfaları. Ana kullanıcılar: ürün markaları ve müşterileri. İlk pazar: Avrupa’daki premium ve tasarım odaklı markalar."
      ],
      list: ["Ürün stratejisi ve konumlandırma", "Bilgi mimarisi ve içerik yapısı", "Müşteri ve marka deneyimi", "Yapay zekâ destekli içerik akışları", "MVP, tasarım sistemi ve pilot yapısı"]
    },
    {
      eyebrow: "03 — Başlangıç noktası",
      title: "Satış, deneyimin sonu değildi.",
      paragraphs: [
        "Satın alma öncesinde neredeyse her etkileşim özenle tasarlanır. Satın alma sonrasında ise bilgi basılı kılavuzlar, PDF’ler, garanti kartları, e-postalar, ambalaj, destek sayfaları, distribütör siteleri ve ayrı onarım portalları üzerinden gelir.",
        "Bilgi vardır ama ürün gibi davranmaz; statik, tekrarlı ve bakımı zordur. Müşteri aradığını bulamaz, destek ekipleri ürünün zaten açıklaması gereken soruları tekrar tekrar yanıtlar, marka satış sonrası görünürlüğünü kaybeder.",
        "Onarım, yedek parça ve mevzuat bilgileri ürün deneyiminden kopuk kalır."
      ],
      quote: "Satın alma sonrası deneyim, satın alma kadar özenle tasarlansaydı nasıl görünürdü?"
    },
    {
      eyebrow: "04 — Problemi yeniden çerçevelemek",
      title: "Görünen sorun kılavuzdu. Asıl sorun parçalanmış ürün bilgisiydi.",
      paragraphs: [
        "İlk fikir basitti: QR kodu tarat ve mobil uyumlu bir kılavuz aç. Fakat kılavuzu dijitalleştirmek, mevcut belge yapısını daha küçük bir ekranda yeniden üretmekten öteye gitmeyecekti.",
        "Kılavuz dokümantasyona, müşteri ise probleme göre hareket eder. Dördüncü bölümü okumak değil; ürünü kurmak, temizlemek, onarmak veya tanımlamak ister.",
        "Afterlayer böylece dijital kılavuz aracından, ürün bilgisini somut yolculuklara çeviren daha geniş bir satış sonrası platforma dönüştü."
      ],
      list: ["Nasıl kurulur?", "Yıkanabilir mi?", "Hangi yedek parça gerekir?", "Garanti kapsamında mı?", "Onarılabilir mi?", "Ömrünün sonunda ne yapılır?"]
    },
    {
      eyebrow: "05 — Ürün modeli",
      title: "Fiziksel ürün, düzenleyici nesneye dönüştü.",
      paragraphs: [
        "Afterlayer her ürün veya SKU için QR kod, NFC, ürün URL’si, satın alma e-postası, müşteri hesabı ya da destek iletişimi üzerinden erişilebilen kalıcı bir dijital kimlik üzerine kuruldu.",
        "Müşteri genel marka sitesine değil, elindeki belirli ürünün deneyimine ulaşır. Kategori, koleksiyon ve model bağlamı zaten bellidir.",
        "Kurulum, bakım, sorun giderme, onarım, garanti, yedek parça, güvenlik, malzeme, üretim yeri ve kullanım sonu tek bir ürün ilişkisinin parçaları olur."
      ],
      list: ["Başlangıç", "Bakım", "Sorun giderme ve onarım", "Garanti ve yedek parça", "Dijital ürün pasaportu", "Kullanım sonu yönlendirmesi"]
    },
    {
      eyebrow: "06 — Hizmet mimarisi",
      title: "Birbirine bağlı iki deneyim tek sistem gibi çalışmalıydı.",
      paragraphs: [
        "Müşteri belirli bir soruya hızlı ve mobil öncelikli yanıt istiyordu. Yeni bir platform öğrenmek, sandalyesini nasıl temizleyeceğini görmeden hesap açmak veya yılda iki kez kullandığı ürün için uygulama indirmek istemiyordu.",
        "Marka ise kılavuzlara, teknik föylere, garanti belgelerine, tablolara ve web sitelerine dağılmış bilgilerden çok sayıda ürün deneyimi oluşturup bunları yönetmeliydi.",
        "Müşteri deneyimi ancak arkasındaki operasyon dikkatle yapılandırılırsa sade kalabilirdi."
      ],
      list: ["Ürün ve SKU oluşturma", "Belge yükleme ve bilgi çıkarma", "İnceleme ve onay", "Çeviri ve yayınlama", "Sürüm yönetimi", "Müşteri talepleri ve analitik"]
    },
    {
      eyebrow: "07 — Müşteri deneyimi",
      title: "Arayüz ihtiyaç anları etrafında düzenlendi.",
      paragraphs: [
        "Satın alma sonrasında kurulum, aylar sonra bakım, yıllar sonra yedek parça veya onarım gerekebilir. Sayfanın ürünün tüm ömrü boyunca faydalı kalması gerekiyordu.",
        "Hiyerarşi belge bölümleri yerine eylemleri öne çıkardı: başlangıç, bakım, onarım, parçalar, garanti, destek ve ürün bilgileri. Bir aydınlatma ürünü, deri çanta ve çocuk arabası farklı içerik ister ama ortak ürün mantığını paylaşabilir."
      ]
    },
    {
      eyebrow: "08 — Bilgi tasarımı",
      title: "Kademeli gösterim yeni bir bilgi duvarını önledi.",
      paragraphs: [
        "Dijital Ürün Pasaportları malzeme, köken, onarılabilirlik ve kullanım sonu hakkında daha çok veri getirir. Her şeyi tek ve çok uzun bir sayfaya yerleştirmek şeffaflık değildir.",
        "Ana sayfa yaygın eylemleri ve acil bilgileri gösterdi; teknik, mevzuata ilişkin ve malzeme detayları gerektiğinde erişilebilir kaldı.",
        "Amaç karmaşıklığı gizlemek değil, kullanıma göre düzenlemekti."
      ]
    },
    {
      eyebrow: "09 — İçerik operasyonu",
      title: "Mevcut dokümantasyon yapılandırılmış ürün içeriğine dönüştü.",
      paragraphs: [
        "Markalar gerekli bilginin çoğuna zaten sahipti; sorun bilginin uzun kılavuzlar, teknik PDF’ler, bakım föyleri, garanti metinleri, spesifikasyonlar, sertifikalar, web içerikleri ve şirket içi tablolara dağılmış olmasıydı.",
        "Her SKU için bunları elle mobil sayfalara çevirmek pahalı bir içerik operasyonu yaratırdı. Marka belgeleri yükleyerek kurulum, bakım, güvenlik, garanti, parça, malzeme, onarım ve ürün kimlikleri için önerilen bloklar elde edebiliyordu.",
        "Sonuç otomatik yayımlanmadı; düzenlenebilir bir taslağa dönüştü."
      ]
    },
    {
      eyebrow: "10 — Yapay zekâ etkileşim modeli",
      title: "Yapay zekâ gösteri değil, içerik operasyon asistanıydı.",
      paragraphs: [
        "Yapay zekâ belge bölümlerini tespit ediyor, ürüne özgü bilgiyi çıkarıyor, kategoriler öneriyor, okunabilirliği artırıyor, eksikleri belirliyor, çeviriye yardım ediyor ve yeniden kullanılabilir bloklar sunuyordu.",
        "İnceleme ve onay markada kaldı. Yanlış bakım talimatı ürüne zarar verebilir; uydurulmuş garanti koşulu hukuki sorun yaratabilir; eksik güvenlik uyarısının sonucu çok daha ciddi olabilir.",
        "Bu nedenle her yapay zekâ çıktısı incelenebilir olmalıydı."
      ],
      list: ["Tespit et ve çıkar", "Yapılandır ve yeniden yaz", "Eksikleri göster", "Çeviriyi destekle", "Her öneriyi kaynağa bağla", "Onayı markada tut"]
    },
    {
      eyebrow: "11 — Güven ve kaynak",
      title: "Çıkarılan her talimatın açık bir kaynağı olmalıydı.",
      paragraphs: [
        "Afterlayer kulağa makul gelen, kaynaksız ürün metni üretmek için tasarlanmadı. Oluşturulan içerik mümkün olduğunda geldiği belgeye ve bölüme bağlı kaldı.",
        "İnceleyenler öneriyi doğrulayabiliyor, güncellemeleri izleyebiliyor, çelişkileri bulabiliyor ve yeni belge sürümlerini yeniden işleyebiliyordu.",
        "Sistem özgün kaynak, yapay zekâ tarafından çıkarılan veya yeniden yazılan içerik, marka düzenlemesi ve yayımlanmış müşteri bilgisini ayırdı. Amaç insan incelemesini kaldırmak değil, ölçeklenebilir kılmaktı."
      ]
    },
    {
      eyebrow: "12 — Marka çalışma alanı",
      title: "Belgeler kaynaktı. Kalıcı nesne ürün kaydıydı.",
      paragraphs: [
        "Ana akış ürün kimliği ve içe aktarmadan belge yükleme, yapılandırma, inceleme, onay, dil ve marka ayarı, önizleme, yayınlama ve izlemeye ilerledi.",
        "Birden fazla belge aynı deneyime katkıda bulunabiliyordu: kılavuz kurulumu, bakım föyü bakımı, garanti belgesi kapsamı, parça kataloğu uyumlu bileşenleri sağlıyordu.",
        "Müşterinin yanıtın hangi şirket içi dosyada olduğunu bilmesi gerekmiyordu."
      ],
      list: ["Ürünü oluştur veya içe aktar", "Kaynak belgeleri yükle", "Bilgiyi yapılandır", "Blokları incele ve onayla", "Önizle ve yayımla", "Kullanımı ve talepleri izle"]
    },
    {
      eyebrow: "13 — İçerik modeli",
      title: "Yeniden kullanılabilir bloklar düzenleme, yayın ve müşteri arayüzünü bağladı.",
      paragraphs: [
        "Sayfalar sabit şablon veya serbest zengin metin yerine talimat, uyarı, bakım, malzeme, garanti, onarım, parça, indirme, iletişim, sertifika ve pasaport alanları gibi yapılandırılmış bloklardan oluştu.",
        "Bu model içeriğin sıralanmasını, bakımını, çevirisini ve kategoriye göre uyarlanmasını kolaylaştırdı. Yapay zekâya tanımlı çıktı biçimi verdi ve yeni yeteneklerin tüm sayfa yeniden tasarlanmadan eklenmesini sağladı."
      ]
    },
    {
      eyebrow: "14 — Dijital Ürün Pasaportu",
      title: "Uyumluluk bilgisinin ayrı bir mezarlığa ihtiyacı yoktu.",
      paragraphs: [
        "Pasaport verisini büyük bir tablo ve ‘Ürün Pasaportu’ düğmesi arkasına koymak kolay ama faydasız olurdu. Gerekli bilgilerin çoğu satış sonrası deneyimi de iyileştirir.",
        "Malzeme bilgisi bakım ve geri dönüşümü; ürün kimliği garanti ve parçaları; onarım bilgisi ürün ömrünü; köken ve kullanım sonu bilgisi şeffaflığı destekler.",
        "Uyumluluk ve fayda aynı şey değildir ama aynı bilgi temelini paylaşabilir. Marka, aynı ürünün farklı sürümlerini taşıyan iki ayrı sistem kurmamalıdır."
      ]
    },
    {
      eyebrow: "15 — Onarım ve garanti",
      title: "Onarım bir yolculuğa dönüştü; garanti arkeoloji gerektirmedi.",
      paragraphs: [
        "‘Onarılabilir’ demek tek başına yeterli değildir. Müşteri sorunu belirlemeli, güvenli adımları görmeli, doğru parçayı veya hizmeti bulmalı ve ürün bağlamını kaybetmeden talep başlatabilmelidir.",
        "Garanti; kapsamı, gereken kanıtları, başvuru yolunu ve sonraki adımları açıklıyordu. Uzun vadeli fırsat fiziksel ürün, satın alma kaydı ve müşteri talebini, ilişkiyi müşteriye yeniden kurdurmadan birbirine bağlamaktı."
      ]
    },
    {
      eyebrow: "16 — Ölçüm",
      title: "Satış sonrası deneyim yalnızca destek maliyeti değil, ürün içgörüsü olabilirdi.",
      paragraphs: [
        "Geleneksel kılavuzlar müşterinin onları açıp açmadığını, hangi bölümün işe yaradığını, nerede zorlandığını veya hangi talimatın destek talebini önleyemediğini göstermez.",
        "Dijital katman sayfa ziyaretlerini, kullanılan içerikleri, bakım ve onarım ilgisini, garanti başlangıçlarını, parça etkileşimlerini, destek eskalasyonunu, dil kullanımını ve tekrar ziyaretleri görünür kıldı.",
        "Amaç her talimatı etkileşim metriğine çevirmek değil; dokümantasyonu, ürünü, ambalajı, desteği, parça planlamasını ve gelecek geliştirmeleri iyileştirmekti."
      ]
    },
    {
      eyebrow: "17 — Marka ifadesi",
      title: "Sistem markayı destekledi, kimliğinin yerine geçmedi.",
      paragraphs: [
        "Müşteri Afterlayer ile değil, ürün markasıyla etkileşiyordu. Fazla standartlaşma premium ürünleri sıradanlaştırır; fazla özelleştirme ise platformu zor yönetilir hâle getirir ve her markada yeni bir navigasyon öğretirdi.",
        "Kontrollü marka sistemi tipografi, renk, logo, görsel, ses tonu ve seçili yerleşimlerin değişmesine izin verirken bilgi hiyerarşisini ve etkileşim kalıplarını tutarlı tuttu."
      ]
    },
    {
      eyebrow: "18 — Yerelleştirme",
      title: "Kopyalayarak değil, yapı gereği çok dilli.",
      paragraphs: [
        "Avrupalı markalar için her dilde ayrı sayfa oluşturmak içeriği çoğaltır ve güncellemeyi zorlaştırırdı.",
        "Blok modeli çevirileri aynı kaynak yapısına bağlı tuttu; değişiklikleri ve eksik çevirileri görünür kıldı, yerel ekiplerin bağımsız sayfalar yönetmeden inceleme yapmasını sağladı.",
        "Yapay zekâ yardımcı olabilirdi ama güvenlik, hukuk ve teknik içerik onay gerektiriyordu."
      ]
    },
    {
      eyebrow: "19 — MVP",
      title: "İlk sürüm tek bir ana döngüyü kanıtlamalıydı.",
      paragraphs: [
        "Uzun vadeli vizyon pasaport, onarım, parça, garanti, destek, analitik ve kişiselleştirilmiş sahiplik deneyimini kapsıyordu. Hepsini bir anda yapmak, henüz kimsenin kullanmadığı çok kapsamlı bir ürün yaratırdı.",
        "MVP, markanın büyük bir yeni içerik operasyonu kurmadan mevcut dokümantasyonu kullanışlı bir satın alma sonrası deneyime dönüştürüp dönüştüremeyeceğini test etti.",
        "Marka deneyimi oluşturup yayımlayabiliyor, müşteri erişip kullanabiliyordu. Gelişmiş yetenekler bu döngü doğrulandıktan sonra gelecekti."
      ],
      list: ["Ürün ve SKU oluşturma", "Belge yükleme ve AI ile bilgi çıkarma", "Yapılandırılmış blok editörü", "Mobil ürün sayfası", "Bakım, garanti ve parça akışları", "Çoklu dil, analitik ve çevrimdışı rehber"]
    },
    {
      eyebrow: "20 — Ürün ilkeleri",
      title: "En güçlü bağlamı fiziksel ürün sağlıyordu.",
      paragraphs: [
        "Müşterinin sahip olduğu üründen başla. Desteğe yönlendirmeden önce yanıt ver ve yönlendirme gerektiğinde ürün bağlamını taşı. Kişiselleştirmeden önce güvenilir bir yapı kur.",
        "Yapay zekâ önerir, marka onaylar. Müşteri dostu içerik resmi dokümantasyona kadar izlenebilir kalır. Deneyim lansman kampanyası için değil, ürünün ömrü için tasarlanır.",
        "Mevzuat bilgisi ayrı bir veritabanı olmak yerine sahiplik deneyimini güçlendirmelidir."
      ],
      list: ["Ürünle başla", "Yönlendirmeden önce yanıtla", "Kişiselleştirmeden önce yapılandır", "AI önerir, marka onaylar", "Kaynağı koru", "Uyumluluğu faydalı kıl"]
    },
    {
      eyebrow: "21 — Dengeler",
      title: "Ürün hızı güvenilirlikle, derinliği dikkatle dengeledi.",
      paragraphs: [
        "Belge işleme başlangıç yükünü azalttı; doğrulama ve eksik bilgi durumları veri kalitesini görünür tuttu. Destekli yayın tam otomasyondan yavaştı ama güvenlik, garanti, bakım ve onarım için doğru tercihti.",
        "Sistem davranış ve hiyerarşiyi standartlaştırırken marka ifadesine kontrollü alan bıraktı. Önce görevle ilgili bilgiyi, sonra kapsamlı pasaport verisini gösterdi.",
        "Hesaplar kayıt ve geçmişi destekleyebilirdi ama talimatlara erişmek için zorunlu tutulmadı."
      ],
      list: ["Kurulum yükü vs veri kalitesi", "Otomasyon vs güvenilirlik", "Standartlaşma vs marka ifadesi", "Kapsamlı veri vs dikkat", "Hesap vs anında erişim"]
    },
    {
      eyebrow: "22 — Sonuç",
      title: "Dijital kılavuzdan test edilebilir satış sonrası sistemine.",
      paragraphs: [
        "Afterlayer ürün bilgisini, müşteri ihtiyacını ve marka operasyonunu bağlayan bir sisteme dönüştü: kalıcı ürün kimliği, mobil öncelikli deneyim, yapılandırılmış içerik, yapay zekâ destekli belge akışı, marka incelemesi, yeniden kullanılabilir yayın blokları, çok dilli mimari ve ölçülebilir etkileşimler.",
        "Proje ürün stratejisini, temel deneyimi ve MVP mimarisini ortaya koydu. Pilot verisi olmadan destek maliyeti, tekrar satın alma veya ürün ömrü konusunda iyileşme iddia etmek doğru olmazdı.",
        "İlk sonuç bir yüzde değil, test edilebilir bir ürün sistemiydi."
      ]
    },
    {
      eyebrow: "23 — Öğrendiklerim",
      title: "Satın alma sonrası, bir bilgi tasarımı problemidir.",
      paragraphs: [
        "Satış sonrası aksaklıklar destek problemi gibi görünür ama çoğu zaman bilgi parçalı, erişilmez veya müşteri ihtiyacı yerine şirket içi belgelere göre düzenlendiği için daha önce başlar.",
        "Yapay zekâ tanımlı bir operasyonel işi olduğunda fayda sağlar. Açık şemalar, kaynak bağlantıları ve inceleme durumları arayüzün akıllı görünmesinden daha önemliydi.",
        "QR kod veya NFC bağlamı koruduğunda değerlidir. Müşteri ana sayfaya değil, elindeki ürün için bir sonraki faydalı eyleme ulaşmalıdır."
      ]
    },
    {
      eyebrow: "24 — Sonraki adımlar",
      title: "Ana döngüyü odaklı ürün pilotlarıyla doğrulamak.",
      paragraphs: [
        "Sonraki aşama markaların mevcut dokümantasyondan yapılandırılmış satış sonrası deneyim yayımlayıp yayımlayamadığını, AI çıktısının ne kadar inceleme istediğini, hangi modüllerin kategoriye göre değerli olduğunu ve hangi ihtiyaçların desteğe ulaşmadan çözüldüğünü test edecek.",
        "Gelecekte sahiplik geçmişi, gelişmiş garanti, onarım sağlayıcısı entegrasyonları, yedek parça ticareti, kişisel rehberlik, genişletilmiş pasaport şemaları, yaşam döngüsü bildirimleri, destek entegrasyonları, sorun tespiti, yeniden satış ve sahiplik devri eklenebilir.",
        "Uzun vadeli amaç QR kod arkasına daha fazla bilgi koymak değil; her ürüne satıştan sonra faydalı bir yaşam ve müşteriye manual_final_v7_updated.pdf dosyasından daha iyi bir adres vermektir."
      ]
    }
  ]
};
