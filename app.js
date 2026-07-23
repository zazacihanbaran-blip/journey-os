const seed = {
  mode: "derinlesme",
  activeJourney: "ai-ekonomi",
  saved: ["nvda-darbogaz", "emrah-video", "sebekeler"],
  libraryFilter: "tumu",
  activeTicker: "NVDA",
  portfolioRange: "1A",
  portfolioPanel: "overview",
  portfolioPoint: 11,
  portfolioNotes: {
    NVDA: { thesis: "AI altyapı liderliği", note: "Enerji erişimi ve teslimat takvimini yakından izle.", risk: "Talep ile teslimat takvimi arasındaki fark" },
    MU: { thesis: "HBM talep döngüsü", note: "HBM talebi ile klasik bellek döngüsünü ayrı değerlendir.", risk: "Klasik bellek fiyatlama riski" },
    MP: { thesis: "Stratejik tedarik zinciri", note: "Stratejik değerin kalıcı marja dönüşmesini izle.", risk: "Marj doğrulaması" }
  },
  videoNotes: [],
  academicTopic: "AI ekonomisi",
  academicSort: "relevance",
  demoEmptyLibrary: false,
  videoJob: { status: "idle", url: "", title: "", error: "", question: "", answer: "" },
  exploreOptions: { context: true, primary: false, counter: true },
  recommendationSettings: { timeBudget: "20", depth: "Dengeli", novelty: 65, counter: 25, sourceStrictness: "Seçili kaynaklar önce", formats: ["Makale", "Video", "Rapor"], sources: ["reuters", "ft", "nature", "nber", "iea", "youtube-experts"] },
  recommendationIndex: 0,
  researchSchedules: [],
  researchReports: [],
  topicPreferences: {
    portfolio: { label: "Portföy", intensity: 5, mode: "Kritik değişim", active: true },
    video: { label: "Video", intensity: 3, mode: "Derinleşme", active: true },
    academic: { label: "Akademik", intensity: 5, mode: "Birincil kaynak", active: true },
    history: { label: "Tarih & Güç", intensity: 3, mode: "Keşif", active: true },
    cinema: { label: "Sinema", intensity: 2, mode: "Hafif", active: true }
  },
  profile: {
    interests: ["AI × ekonomi", "bilim", "teknoloji", "tarih", "sosyoloji", "güç", "mitoloji"],
    grammar: ["sohbet", "kişilik", "mizah", "derinlik", "disiplinler arası bağ"],
    negatives: ["clickbait", "yüzeysel AI", "ruhsuz ders anlatımı", "tekrar"],
    communication: { tone: "Açık ve doğal", detail: "Önce kısa özet", address: "Cihan diye hitap et" }
  },
  notifications: { daily: true, critical: true, weekend: true, dailyTime: "08:30", quiet: true },
  personalFeed: {
    page: 0,
    engines: { news: true, finance: true, academic: true, youtube: true, rss: true, hackernews: true, social: false },
    interests: [
      { id: "interest-ai", label: "yapay zekâ ekonomisi", keywords: ["AI", "veri merkezi", "enerji"], intensity: 5, active: true },
      { id: "interest-power", label: "tarih ve güç", keywords: ["kurumlar", "siyaset", "tarih"], intensity: 3, active: true },
      { id: "interest-cinema", label: "sinema", keywords: ["film", "yönetmen"], intensity: 2, active: true }
    ],
    symbols: ["NVDA", "MSFT", "MP"],
    sources: [],
    appearance: { paper: "ivory", font: "editorial", density: "balanced", columns: 3, motion: true }
  },
  memories: [
    { id: "m1", type: "Kalıcı tercih", text: "Clickbait ve yüzeysel içerikten hoşlanmıyor", status: "approved" },
    { id: "m2", type: "Aktif merak", text: "AI ekonomisi ve enerji altyapısı", status: "approved" },
    { id: "m3", type: "Sistem çıkarımı", text: "Uzun videolarda bölüm özetini tercih ediyor olabilir", status: "pending" }
  ],
  feedback: [],
  journeys: [
    {
      id: "ai-ekonomi", title: "AI × Ekonomi", status: "Aktif araştırma", progress: 74,
      started: "12 Mayıs 2026", importance: "Yüksek",
      hypothesis: "AI ekonomisinin yeni darboğazı çipten çok elektrik, şebeke ve veri merkezi izinleri olabilir.",
      questions: ["Şebeke bağlantı süreleri yatırım takvimini ne kadar geciktiriyor?", "Verimlilik kazanımları toplam enerji talebini dengeleyebilir mi?"],
      events: [
        { date: "22 Temmuz · Bugün", title: "Enerji altyapısı tezin merkezine taşındı", text: "IEA veri merkezi talep görünümü ve üç şebeke bağlantı raporu hipotezi güçlendirdi.", kind: "Kanıt" },
        { date: "18 Temmuz", title: "Çip arzı tek açıklama olmaktan çıktı", text: "NVDA ve TSMC kapasite notları, darboğazın katmanlı olduğunu gösterdi.", kind: "Fikir değişikliği" },
        { date: "02 Temmuz", title: "Journey başladı", text: "AI yatırımlarının üretkenlik ve altyapı etkisini birlikte izleme kararı alındı.", kind: "Başlangıç" }
      ]
    },
    {
      id: "portfoy", title: "Portföy Tezleri", status: "4 aktif tez", progress: 58,
      started: "28 Nisan 2026", importance: "Yüksek",
      hypothesis: "MP Materials'ın stratejik değeri, uzun vadede fiyatlama gücüne dönüşebilir.",
      questions: ["Stratejik destek ne zaman kalıcı marja dönüşür?"],
      events: [
        { date: "22 Temmuz · Bugün", title: "MP tezi için yeni risk eklendi", text: "Tedarik zinciri avantajı sürüyor; uzun vadeli marj potansiyeli belirsiz.", kind: "Karşı kanıt" },
        { date: "11 Temmuz", title: "MU döngü notu güncellendi", text: "HBM talebi güçlenirken klasik bellek döngüsü riski ayrı izlenmeye başladı.", kind: "Not" }
      ]
    },
    {
      id: "tarih-guc", title: "Tarih & Güç", status: "Açık sorular", progress: 41,
      started: "03 Haziran 2026", importance: "Orta",
      hypothesis: "Kurumların dayanıklılığını liderlerden çok teşvik sistemleri açıklıyor.",
      questions: ["Kriz anlarında liderlik kurumların önüne geçebilir mi?"],
      events: [
        { date: "20 Temmuz", title: "Karşı tez eklendi", text: "Kriz anlarında bireysel liderliğin kurumsal kısıtları aşabildiğine dair örnekler ayrıldı.", kind: "Karşı tez" },
        { date: "09 Temmuz", title: "Roma ve modern devletler arasında bağ", text: "Vergi kapasitesi ile meşruiyet arasındaki ilişki için yeni okuma zinciri oluştu.", kind: "Bağlantı" }
      ]
    },
    {
      id: "sinema", title: "Sinema", status: "Keşif modu", progress: 32,
      started: "16 Haziran 2026", importance: "Düşük",
      hypothesis: "Akıcı tempo ve zihinsel oyun, türden daha güçlü bir seçim sinyali.",
      questions: ["Tempo tercihi ruh hâline göre nasıl değişiyor?"],
      events: [{ date: "19 Temmuz", title: "The Game kaydedildi", text: "Prestige benzeri yapı, yüksek tempo ve karakter merkezli gerilim sinyalleri nedeniyle.", kind: "Seçim" }]
    }
  ],
  items: [
    {
      id: "nvda-darbogaz", type: "Makale", journeyId: "ai-ekonomi", journey: "AI × Ekonomi",
      title: "AI ekonomisinin yeni darboğazı: elektrik, çiplerden daha kritik hâle geliyor",
      summary: "Veri merkezlerinin artan enerji talebi, AI büyümesinin sınırını yalnızca işlemcilerin değil enerji altyapısının da belirleyeceğini gösteriyor.",
      deepSummary: "Yeni veri merkezi projelerinde işlemci tedariki kadar enerji anlaşması, şebeke bağlantı kuyruğu ve yerel izin süreleri de kritik yol üzerinde. Makale, darboğazın tek bir bileşenden değil birbirine bağlı altyapı katmanlarından oluştuğunu savunuyor.",
      source: "MIT Technology Review", time: "7 dk", state: "saved", confidence: "Yüksek",
      claims: ["Elektrik talebi 2030'a kadar veri merkezi büyümesini sınırlayabilir.", "Şebeke bağlantı kuyruğu bazı bölgelerde çip tesliminden daha uzun."],
      chapters: ["00:00 · 30 saniyelik özet", "02:10 · Enerji talebi", "05:40 · Karşı tez"],
      score: { relevance: 96, novelty: 84, impact: 92, trust: 88, mode: 91 }
    },
    {
      id: "mp-tezi", type: "Piyasa notu", journeyId: "portfoy", journey: "Portföy Tezleri",
      title: "MP Materials tezi: stratejik değer, finansal sonuç",
      summary: "Tedarik zinciri avantajı korunuyor; fiyatlama gücü ve marj dönüşümü henüz izlenmesi gereken iki ayrı eşik.",
      deepSummary: "Jeopolitik önem şirketin stratejik konumunu güçlendiriyor. Ancak yatırım tezinin finansal doğrulaması için uzun vadeli sözleşmeler, üretim verimi ve kalıcı marj genişlemesi birlikte görülmeli.",
      source: "Journey analizi", time: "4 dk", state: "new", confidence: "Orta",
      claims: ["Stratejik değer tek başına finansal getiri garantisi değildir.", "Marj dönüşümü tezin bir sonraki doğrulama eşiğidir."],
      chapters: ["Tez", "Pozitif sinyaller", "Riskler"],
      score: { relevance: 94, novelty: 71, impact: 89, trust: 76, mode: 87 }
    },
    {
      id: "emrah-video", type: "Video", journeyId: "tarih-guc", journey: "Tarih & Güç",
      title: "Emrah Safa Gürkan ile iktidar, kurumlar ve gündelik hayat",
      summary: "Sohbetin 18-31. dakikaları, güç ilişkilerinin kurumlar üzerinden nasıl kalıcılaştığını berrak biçimde anlatıyor.",
      deepSummary: "Konuşma, gücü yalnızca liderlerin niyetiyle değil kurumların teşvikleri, vergi kapasitesi ve gündelik pratiklerle açıklıyor. Journey için en özgün bölüm 18-31. dakikalar.",
      source: "YouTube", time: "38 dk", state: "saved", confidence: "Yüksek",
      claims: ["Kurumlar, bireylerden daha uzun ömürlü güç dağılımları üretir.", "Gündelik pratikler siyasi düzeni görünmez biçimde yeniden kurar."],
      chapters: ["00:00 · Giriş", "18:12 · Kurumlar", "31:05 · Gündelik hayat"],
      score: { relevance: 91, novelty: 80, impact: 76, trust: 90, mode: 95 }
    },
    {
      id: "the-game", type: "Film", journeyId: "sinema", journey: "Sinema",
      title: "Bu gece için: The Game",
      summary: "Akıcı, zihinsel oyunlu ve karakter merkezli. Silah aksiyonuna yaslanmadan gerilimi sürekli tutuyor.",
      deepSummary: "Prestige ile paylaştığı bilgi saklama ve algı oyunu yapısı, yüksek temposu ve karakter merkezli gerilimi nedeniyle profilinle güçlü eşleşiyor.",
      source: "Film seçkisi", time: "2 sa 9 dk", state: "new", confidence: "Yüksek",
      claims: ["Zihinsel oyun ve akıcı tempo birlikte güçlü eşleşme oluşturuyor.", "Aksiyon, anlatının merkezine geçmiyor."],
      chapters: ["Tempo · Yüksek", "Ton · Psikolojik", "Aksiyon · Düşük"],
      score: { relevance: 89, novelty: 73, impact: 62, trust: 82, mode: 97 }
    },
    {
      id: "ai-yuzeysel", type: "Video", journeyId: "ai-ekonomi", journey: "AI × Ekonomi",
      title: "2026'da yapay zekâ dünyasını değiştirecek",
      summary: "Yüksek tekrar ve düşük kaynak görünürlüğü nedeniyle öneri dışında bırakıldı.",
      deepSummary: "Başlık güçlü bir iddia taşıyor ancak kaynak göstermiyor ve bilinen gelişmeleri tekrarlıyor. Clickbait ve yenilik cezası sıralama puanını düşürdü.",
      source: "YouTube", time: "14 dk", state: "rejected", confidence: "Düşük",
      claims: ["Kaynak görünürlüğü yetersiz.", "Bilinen bilgiyi yeni gelişme gibi sunuyor."],
      chapters: ["Tekrar", "Kaynak eksikliği"], score: { relevance: 55, novelty: 18, impact: 31, trust: 22, mode: 40 }
    },
    {
      id: "sebekeler", type: "Rapor", journeyId: "ai-ekonomi", journey: "AI × Ekonomi",
      title: "Veri merkezleri ve şebeke bağlantı kuyruğu",
      summary: "Yeni kapasite kadar bağlantı süresinin de yatırım takvimlerini belirlediğini gösteren birincil veri seti.",
      deepSummary: "Birincil veriler, bağlantı başvurularının proje takvimindeki en uzun adımlardan biri hâline geldiğini gösteriyor. Bölgesel farklar yüksek; sonuç küresel ölçekte genellenirken dikkat gerekli.",
      source: "IEA", time: "12 dk", state: "saved", confidence: "Yüksek",
      claims: ["Bağlantı kuyruğu yeni kapasitenin devreye girişini geciktiriyor.", "Bölgesel şebeke yapıları sonuçları önemli ölçüde değiştiriyor."],
      chapters: ["Yönetici özeti", "Bölgesel veriler", "Metodoloji"], score: { relevance: 97, novelty: 88, impact: 93, trust: 98, mode: 86 }
    }
  ]
};

const modes = [["kesif", "Keşif"], ["derinlesme", "Derinleşme"], ["piyasa", "Piyasa"], ["film", "Film gecesi"], ["hafif", "Hafif"]];
const portfolioAssets = [
  { ticker: "NVDA", name: "NVIDIA", price: "187,44", change: "+2,84%", thesis: "AI altyapı liderliği", signal: "Enerji ve teslimat takvimi", bars: [42, 48, 45, 57, 54, 68, 73, 69, 82, 88, 84, 96] },
  { ticker: "MU", name: "Micron", price: "142,18", change: "+1,12%", thesis: "HBM talep döngüsü", signal: "Klasik bellek riski", bars: [54, 52, 61, 58, 64, 70, 67, 75, 72, 79, 83, 86] },
  { ticker: "MP", name: "MP Materials", price: "31,06", change: "-0,74%", thesis: "Stratejik tedarik zinciri", signal: "Marj doğrulaması bekleniyor", bars: [62, 59, 57, 63, 68, 61, 58, 55, 60, 64, 62, 59] },
  { ticker: "SNDK", name: "Sandisk", price: "54,90", change: "+0,45%", thesis: "Depolama yeniden fiyatlama", signal: "Talep kalitesi", bars: [46, 44, 48, 51, 49, 53, 57, 55, 61, 60, 63, 66] }
];
const portfolioMeta = {
  NVDA: { day: "182,10–189,72", volume: "214M", cap: "4,57T", risk: "Orta", thesisScore: 82, note: "Enerji erişimi teslimat takvimini yavaşlatabilir; talep görünümü güçlü." },
  MU: { day: "138,40–143,55", volume: "31M", cap: "158B", risk: "Orta", thesisScore: 76, note: "HBM talebi güçlü; klasik bellek döngüsü ayrı izlenmeli." },
  MP: { day: "30,72–31,80", volume: "6,4M", cap: "5,2B", risk: "Yüksek", thesisScore: 68, note: "Stratejik değer yüksek; finansal doğrulama için marj gelişimi gerekli." },
  SNDK: { day: "53,90–55,24", volume: "4,1M", cap: "8,1B", risk: "Orta", thesisScore: 64, note: "Depolama fiyatlaması toparlanıyor; talep kalitesi henüz net değil." }
};
const portfolioNews = [
  { time: "09:20", type: "TEZ ETKİSİ", title: "Veri merkezi enerji anlaşmaları teslimat takvimine giriyor", source: "Reuters · şirket açıklaması", impact: "NVDA büyüme hızını değil zamanlamasını etkileyebilir.", ticker: "NVDA" },
  { time: "08:10", type: "FİNANSAL", title: "HBM kapasite kullanımında yeni sinyal", source: "Micron yatırımcı sunumu", impact: "MU tezini destekliyor; fiyatlama kalitesi izlenmeli.", ticker: "MU" },
  { time: "Dün", type: "KARŞI KANIT", title: "Nadir toprak fiyatları marj baskısı yaratıyor", source: "USGS · piyasa verisi", impact: "MP stratejik değerinin finansal sonuca dönüşmesini geciktirebilir.", ticker: "MP" }
];
const academicPapers = [
  { id: "paper-energy", topic: "AI ekonomisi", year: 2026, title: "The Energy Cost of Scaling Artificial Intelligence", authors: "L. Chen, M. Alvarez, S. Patel", journal: "Nature Energy", access: "Açık erişim", doi: "10.1038/s41560-026-01482-1", citations: 84, abstract: "Çalışma, büyük ölçekli model eğitimi ve çıkarımının bölgesel elektrik talebi üzerindeki etkisini yaşam döngüsü verileriyle inceliyor.", fullText: "Araştırma; eğitim, çıkarım, soğutma ve şebeke karbon yoğunluğunu ayrı modeller. Sonuçlar, çıkarım talebinin eğitim maliyetini aşmaya başladığını; ancak donanım ve model verimliliğinin baz senaryoda toplam talebi yaklaşık yüzde 18 azaltabileceğini gösteriyor." },
  { id: "paper-productivity", topic: "AI ekonomisi", year: 2025, title: "Generative AI and the Reorganization of Knowledge Work", authors: "E. Brynjolfsson, D. Li", journal: "NBER Working Paper", access: "Tam metin", doi: "10.3386/w34118", citations: 312, abstract: "Üretken yapay zekânın görev dağılımı, beceri primi ve ekip organizasyonu üzerindeki etkilerini saha verileriyle ölçüyor.", fullText: "Saha deneyi, deneyimi düşük çalışanlarda daha yüksek üretkenlik kazanımı bulurken görevlerin yeniden paketlendiğini ve doğrulama işinin önem kazandığını gösteriyor." },
  { id: "paper-grid", topic: "Enerji", year: 2026, title: "Data Centers in the Interconnection Queue", authors: "R. Wilson, K. Ahmed", journal: "MIT Energy Initiative", access: "Açık erişim", doi: "10.2139/ssrn.5219042", citations: 41, abstract: "Veri merkezi bağlantı taleplerinin şebeke kuyruğu ve yeni üretim yatırımları üzerindeki etkisini analiz ediyor.", fullText: "Bölgesel bağlantı kayıtları, büyük yük taleplerinin mevcut kuyruk yöntemleriyle uyumsuz olduğunu ve esnek bağlantı sözleşmelerinin bekleme süresini azaltabileceğini gösteriyor." },
  { id: "paper-power", topic: "Tarih & güç", year: 2024, title: "Institutions, Incentives and Durable Power", authors: "A. Moretti", journal: "Comparative Political Studies", access: "Özet erişimi", doi: "10.1177/0010414024127719", citations: 127, abstract: "Kurumların kriz sonrası güç dağılımını nasıl kalıcılaştırdığını karşılaştırmalı tarihsel veriyle inceliyor.", fullText: "Tam metin yayıncı erişimi gerektiriyor. Journey OS, kaynak künyesini ve erişim durumunu açıkça gösterir; erişemediği içeriği varmış gibi sunmaz." }
];
const transcriptSegments = [
  { time: "00:00", speaker: "Sunucu", text: "Bugün yapay zekâ yatırımlarının yalnızca çiplerle açıklanamayacağını konuşacağız." },
  { time: "03:42", speaker: "Konuk", text: "Asıl sınırlayıcı katman enerji altyapısı ve şebekeye bağlanma süresi olmaya başladı." },
  { time: "08:16", speaker: "Konuk", text: "Bu her bölgede aynı değil; enerji piyasasının yapısı sonucu tamamen değiştiriyor." },
  { time: "14:05", speaker: "Sunucu", text: "Peki verimlilik kazanımları bu talebi dengeleyebilir mi?" },
  { time: "14:24", speaker: "Konuk", text: "Kısmen. Fakat daha ucuz çıkarım daha fazla kullanımı tetiklediği için rebound etkisini hesaba katmak gerekiyor." }
];
const sourceCatalog = [
  { id: "reuters", label: "Reuters", group: "Haber", note: "Şirket ve piyasa gelişmeleri" },
  { id: "ft", label: "Financial Times", group: "Haber", note: "Ekonomi ve politika analizi" },
  { id: "company-filings", label: "Şirket açıklamaları", group: "Portföy", note: "Birincil şirket kaynağı" },
  { id: "sec", label: "SEC / resmi bildirimler", group: "Portföy", note: "Finansal ve hukuki kayıtlar" },
  { id: "nature", label: "Nature", group: "Akademik", note: "Hakemli araştırmalar" },
  { id: "nber", label: "NBER", group: "Akademik", note: "Ekonomi çalışma makaleleri" },
  { id: "iea", label: "IEA", group: "Rapor", note: "Enerji verileri ve raporları" },
  { id: "oecd", label: "OECD", group: "Rapor", note: "Politika ve ekonomi verileri" },
  { id: "youtube-experts", label: "Seçili uzman kanalları", group: "Video", note: "Yalnızca senin onayladıkların" }
];
const recommendationPool = [
  { type: "Birincil rapor", format: "Rapor", sourceId: "iea", source: "IEA", title: "Veri merkezlerinin elektrik talebi: 2026 görünümü", summary: "Bölgesel elektrik talebi, şebeke bağlantı süresi ve yeni kapasiteyi aynı veri setinde inceliyor.", why: "AI × Ekonomi konundaki enerji darboğazı düşünceni doğrudan sınar.", minutes: 12, novelty: 91, counter: 18, trust: 99 },
  { type: "Şirket açıklaması", format: "Rapor", sourceId: "company-filings", source: "NVIDIA Investor Relations", title: "Yeni veri merkezi teslimat takvimi", summary: "Enerji erişiminin sevkiyat ve devreye alma takvimindeki rolünü açıklıyor.", why: "NVDA yatırım fikrindeki zamanlama riskine doğrudan bağlı.", minutes: 8, novelty: 86, counter: 22, trust: 96 },
  { type: "Karşı görüş", format: "Makale", sourceId: "nber", source: "NBER", title: "Verimlilik kazanımları enerji talebini dengeleyebilir mi?", summary: "Model ve donanım verimliliğinin yüksek talep tahminlerini aşağı çekebileceğini savunuyor.", why: "Mevcut düşüncene güçlü bir karşı görüş getiriyor.", minutes: 16, novelty: 88, counter: 96, trust: 95 },
  { type: "Haber analizi", format: "Makale", sourceId: "reuters", source: "Reuters", title: "Şebeke anlaşmaları yatırım kararlarını değiştiriyor", summary: "Yeni enerji anlaşmalarının şirketlerin yatırım takvimine etkisini özetliyor.", why: "Portföyündeki AI altyapı şirketleri için güncel bir değişiklik.", minutes: 6, novelty: 82, counter: 35, trust: 92 },
  { type: "Uzman söyleşisi", format: "Video", sourceId: "youtube-experts", source: "Seçili uzman kanalı", title: "Kurumlar, enerji ve teknolojik güç", summary: "Enerji altyapısının ekonomik ve siyasi gücü nasıl şekillendirdiğini konuşuyor.", why: "AI ekonomisi ile Tarih & Güç konularını birbirine bağlıyor.", minutes: 24, novelty: 78, counter: 44, trust: 86 }
];
const stored = safeParse(localStorage.getItem("journey-os-state"));
const state = {
  ...seed, ...(stored || {}),
  profile: { ...seed.profile, ...(stored?.profile || {}) },
  notifications: { ...seed.notifications, ...(stored?.notifications || {}) },
  personalFeed: {
    ...seed.personalFeed, ...(stored?.personalFeed || {}),
    engines: { ...seed.personalFeed.engines, ...(stored?.personalFeed?.engines || {}) },
    appearance: { ...seed.personalFeed.appearance, ...(stored?.personalFeed?.appearance || {}) },
    interests: stored?.personalFeed?.interests || seed.personalFeed.interests,
    sources: stored?.personalFeed?.sources || seed.personalFeed.sources,
    symbols: stored?.personalFeed?.symbols || seed.personalFeed.symbols
  },
  portfolioNotes: { ...seed.portfolioNotes, ...(stored?.portfolioNotes || {}) },
  videoNotes: stored?.videoNotes || seed.videoNotes,
  videoJob: stored?.videoJob?.url?.includes("demo") ? { ...seed.videoJob } : { ...seed.videoJob, ...(stored?.videoJob || {}) },
  exploreOptions: { ...seed.exploreOptions, ...(stored?.exploreOptions || {}) },
  recommendationSettings: { ...seed.recommendationSettings, ...(stored?.recommendationSettings || {}) },
  researchSchedules: stored?.researchSchedules || seed.researchSchedules,
  researchReports: stored?.researchReports || [],
  topicPreferences: { ...seed.topicPreferences, ...(stored?.topicPreferences || {}) },
  journeys: mergeStoredJourneys(stored?.journeys),
  items: mergeStoredItems(stored?.items),
  memories: stored?.memories || seed.memories,
  feedback: stored?.feedback || []
};

let route = location.hash.slice(1) || "today";
let exploreQuery = "";
let exploreResults = [];
let exploreLoading = false;
let exploreSearched = false;
let exploreError = "";
let liveRecommendationState = { status: "idle", items: [], error: "", generatedAt: "" };
let livePortfolio = {};
let liveAcademicState = { status: "idle", items: [], error: "", generatedAt: "", provider: "" };
let liveTranscriptSegments = [];
let personalFeedState = { status: "idle", items: [], errors: [], generatedAt: "", activeEngines: [], engineStatuses: [] };
let feedTurnDirection = "";
const app = document.querySelector("#app");
const toast = document.querySelector("#toast");
const modalRoot = document.querySelector("#modalRoot");
const runtimeConfig = window.JOURNEY_CONFIG || {};
const cloudEnabled = Boolean(runtimeConfig.supabaseUrl && runtimeConfig.supabasePublishableKey);
let cloudHydrated = !cloudEnabled;
let cloudSessionPromise;
let cloudSaveTimer;

function safeParse(value) { try { return JSON.parse(value || "null"); } catch { return null; } }
async function cloudSession() {
  if (!cloudEnabled) return null;
  if (cloudSessionPromise) return cloudSessionPromise;
  cloudSessionPromise = (async () => {
    const storageKey = "journey-os-cloud-session";
    let session = safeParse(localStorage.getItem(storageKey));
    const headers = { apikey: runtimeConfig.supabasePublishableKey, authorization: `Bearer ${runtimeConfig.supabasePublishableKey}`, "content-type": "application/json" };
    if (session?.access_token && Number(session.expires_at || 0) > Date.now() + 60_000) return session;
    if (session?.refresh_token) {
      const refreshed = await fetch(`${runtimeConfig.supabaseUrl}/auth/v1/token?grant_type=refresh_token`, { method: "POST", headers, body: JSON.stringify({ refresh_token: session.refresh_token }) });
      if (refreshed.ok) session = await refreshed.json();
    }
    if (!session?.access_token || Number(session.expires_at || 0) <= Date.now() + 60_000) {
      const created = await fetch(`${runtimeConfig.supabaseUrl}/auth/v1/signup`, { method: "POST", headers, body: JSON.stringify({ data: { app: "journey-os" } }) });
      const payload = await created.json().catch(() => ({}));
      if (!created.ok || !payload.access_token) throw new Error(payload.msg || payload.error_description || "Anonim Supabase oturumu açılamadı");
      session = payload;
    }
    session.expires_at = Date.now() + Number(session.expires_in || 3600) * 1000;
    localStorage.setItem(storageKey, JSON.stringify(session));
    return session;
  })().catch((error) => { cloudSessionPromise = null; throw error; });
  return cloudSessionPromise;
}
async function apiRequest(path, options = {}) {
  let target = path;
  const headers = { "content-type": "application/json", ...(options.headers || {}) };
  if (cloudEnabled) {
    const session = await cloudSession();
    target = `${runtimeConfig.supabaseUrl}/functions/v1/journey-api${path.replace(/^\/api/, "")}`;
    headers.apikey = runtimeConfig.supabasePublishableKey;
    headers.authorization = `Bearer ${session.access_token}`;
  }
  const response = await fetch(target, { ...options, headers });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || `Servis hatası (${response.status})`);
  return data;
}
function mergeStoredJourneys(journeys) {
  if (!journeys) return seed.journeys;
  const migrated = journeys.map((old) => {
    const fresh = seed.journeys.find((journey) => journey.id === old.id);
    return {
      ...(fresh || {}), ...old,
      questions: old.questions || fresh?.questions || [],
      events: (old.events || fresh?.events || []).map((event) => ({ kind: "Not", ...event }))
    };
  });
  return migrated.concat(seed.journeys.filter((fresh) => !migrated.some((old) => old.id === fresh.id)));
}
function mergeStoredItems(items) {
  if (!items) return seed.items;
  return seed.items.map((fresh) => ({ ...fresh, ...(items.find((old) => old.id === fresh.id) || {}) })).concat(items.filter((old) => !seed.items.some((fresh) => fresh.id === old.id)));
}
function escapeHtml(value = "") { return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char])); }
function cloudStateSnapshot() {
  const { researchReports, researchSchedules, ...snapshot } = state;
  return snapshot;
}
function persist() {
  localStorage.setItem("journey-os-state", JSON.stringify(state));
  if (!cloudEnabled || !cloudHydrated) return;
  clearTimeout(cloudSaveTimer);
  cloudSaveTimer = setTimeout(() => apiRequest("/api/state", { method: "PUT", body: JSON.stringify({ state: cloudStateSnapshot() }) }).catch((error) => console.warn("Bulut kaydı başarısız:", error.message)), 650);
}
async function hydrateCloudState() {
  if (!cloudEnabled) return;
  try {
    const result = await apiRequest("/api/state");
    if (result.state) {
      Object.assign(state, result.state);
      localStorage.setItem("journey-os-state", JSON.stringify(state));
    }
    cloudHydrated = true;
    if (!result.state) persist();
    render();
  } catch (error) {
    cloudHydrated = true;
    console.warn("Journey OS yerel modda devam ediyor:", error.message);
    showToast("Bulut bağlantısı kurulamadı; yerel veriler korunuyor");
  }
}
function itemById(id) { return state.items.find((item) => item.id === id); }
function journeyById(id) { return state.journeys.find((journey) => journey.id === id); }
function formatDate() { return new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" }).format(new Date()); }
function marketStateLabel(value) { return ({ REGULAR: "Piyasa açık", CLOSED: "Piyasa kapalı", PRE: "Açılış öncesi", PREPRE: "Açılış öncesi", POST: "Kapanış sonrası", POSTPOST: "Kapanış sonrası", UNKNOWN: "Son piyasa verisi" })[value] || "Son piyasa verisi"; }
function showToast(message) {
  toast.textContent = message; toast.classList.add("is-visible"); clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}
function setRoute(next) {
  route = next; location.hash = next;
  document.querySelectorAll("[data-route]").forEach((el) => el.classList.toggle("is-active", el.dataset.route === next));
  render(); window.scrollTo({ top: 0, behavior: "smooth" }); requestAnimationFrame(() => app.focus({ preventScroll: true }));
  if (next === "recommendations" && liveRecommendationState.status === "idle") refreshLiveRecommendations();
  if (["feed", "today", "video", "academic", "portfolio", "topics", "journey"].includes(next) && personalFeedState.status === "idle") refreshPersonalFeed();
  if (next === "portfolio") refreshPortfolioWatchlist();
  if (next === "academic" && liveAcademicState.status === "idle") refreshLiveAcademic();
  if (next === "profile") refreshBackendSchedules();
}
function render() {
  const views = { today: renderToday, feed: renderPersonalFeed, portfolio: renderPortfolio, video: renderVideo, academic: renderAcademic, recommendations: renderRecommendations, topics: renderTopics, journey: renderTopics, library: renderLibrary, explore: renderExplore, profile: renderProfile };
  app.innerHTML = (views[route] || renderToday)(); bindViewEvents();
}

function renderToday() {
  const liveFeature = personalFeedState.items[0] || null;
  const feature = liveFeature ? { ...liveFeature, confidence: `Canlı · puan ${liveFeature.score || "—"}`, time: `${liveFeature.readingMinutes || 2} dk` } : { id: "live-wait", title: "Canlı seçkin hazırlanıyor", summary: "Haber, akademi, YouTube, RSS, finans ve teknoloji motorları kişisel ilgi alanların için taranıyor.", source: "Gerçek kaynak motorları", confidence: "Bekleniyor", time: "—" };
  const activeJourney = journeyById(state.activeJourney) || state.journeys[0];
  const secondary = liveFeature ? personalFeedState.items.slice(1, 5).map((item) => ({ ...item, type: item.engine, journey: item.source, time: `${item.readingMinutes || 2} dk`, score: { relevance: item.score || 0 } })) : [];
  const sideItem = personalFeedState.items[1] || null;
  const liveUpdated = personalFeedState.generatedAt ? new Date(personalFeedState.generatedAt).toLocaleString("tr-TR", { hour: "2-digit", minute: "2-digit" }) : "canlı kaynaklar hazırlanıyor";
  const address = state.profile.communication.address === "Cihan diye hitap et" ? "Günaydın Cihan." : state.profile.communication.address === "Yalnızca günaydın de" ? "Günaydın." : "Bugün için seçtiklerin.";
  const intro = state.profile.communication.detail === "Doğrudan tam içerik" ? "Portföy ve akademik okumalar bugün önde. Kartları açtığında özet yerine ayrıntılı içerik ve kaynak bilgileriyle başlayacaksın." : state.profile.communication.detail === "Biraz ayrıntılı" ? "Portföyün ve akademik okumaların bugün önde. Önemli gelişmeleri kısa gerekçeleriyle birlikte sıraladım." : "Portföyün ve akademik okumaların bugün önde. Yaklaşık 18 dakikada gözden geçirebileceğin sakin bir seçki hazırladım.";
  return `<section class="page">
    <div class="today-heading">
      <div><div class="date-line">${formatDate()} · senin günlük seçkin</div><p class="eyebrow">Bugün sana göre seçilenler</p><h1 class="display">${address}<br>Dikkat etmeye değer üç şey var.</h1><p class="personal-intro">${intro}</p></div>
      <div class="mode-control" aria-label="Bugünkü tercih"><span>Bugün</span>${modes.map(([id, label]) => `<button class="mode-button ${state.mode === id ? "is-active" : ""}" data-mode="${id}">${label}</button>`).join("")}</div>
    </div>
    <div class="today-grid">
      <div>
        <div class="archive-stack">
          <article class="feature-card">
            <div class="card-meta"><span class="dot"></span> ${liveFeature ? "Canlı kaynaklardan seçildi" : "Kişisel seçki hazırlanıyor"} <span class="confidence">${feature.confidence}</span></div>
            <h2 class="feature-title">${escapeHtml(feature.title)}</h2><p class="feature-summary">${escapeHtml(feature.summary)}</p>
            <div class="impact-line"><strong>Neden şimdi?</strong> ${liveFeature ? escapeHtml(feature.reason || "İlgi alanların, kaynak güveni ve güncellik puanıyla öne çıktı.") : "Örnek içerik göstermiyoruz; yalnızca canlı kaynak sonucu geldiğinde burada açılır."}</div>
            <div class="feature-footer"><div class="source">${escapeHtml(feature.source)} · ${feature.time} · ${liveUpdated}</div><div class="actions">${liveFeature ? `<button class="button primary" data-live-url="${escapeHtml(feature.url)}">Kaynağı aç →</button>` : `<button class="button" data-feed-refresh ${personalFeedState.status === "loading" ? "disabled" : ""}>${personalFeedState.status === "loading" ? "Taranıyor…" : "Yeniden tara"}</button>`}</div></div>
          </article>
          <form class="prompt-bar" id="quickPrompt"><input name="prompt" aria-label="İçerik hakkında sor" placeholder="Bu içerikle konuş veya yeni bir soru bırak..." required><button aria-label="Gönder">→</button></form>
          <div class="journey-tabs">${state.journeys.map((journey) => `<button class="journey-tab ${journey.id === state.activeJourney ? "is-active" : ""}" data-today-journey="${journey.id}"><span class="dot"></span> ${journey.title}</button>`).join("")}</div>
        </div>
      </div>
      <aside class="marginalia"><p class="section-label">Zekâ marjinalleri</p>
        <div class="note"><i class="pin"></i><span class="note-kicker">Aktif hipotez</span><h3>${activeJourney.title}</h3><p>${activeJourney.hypothesis}</p></div>
        <div class="timeline-mark">Bugün · 07:15</div>
        <div class="note"><span class="note-kicker">${sideItem ? `${feedEngineLabels[sideItem.engine] || sideItem.engine} · ${escapeHtml(sideItem.source)}` : "Canlı kaynak bekleniyor"}</span><h3>${sideItem ? escapeHtml(sideItem.title) : "İkinci bir gerçek sonuç geldiğinde burada görünecek"}</h3><p>${sideItem ? escapeHtml(sideItem.summary) : "Geçmiş veya örnek öneri göstermiyoruz."}</p></div>
        <div class="timeline-mark">Dün · 21:40</div>
      </aside>
    </div>
    <section class="daily-edition"><div class="edition-heading"><div><p class="eyebrow">Günün kalan sayısı</p><h2>Dört kısa karar daha</h2></div><span>2 / 5 incelendi</span></div>
      <div class="edition-grid">${secondary.map((item, index) => `<button class="edition-card" ${liveFeature ? `data-live-url="${escapeHtml(item.url)}"` : `data-content="${item.id}"`}><span class="edition-index">0${index + 2}</span><span class="note-kicker">${escapeHtml(item.type)} · ${escapeHtml(item.journey)}</span><strong>${escapeHtml(item.title)}</strong><small>${item.time} · sana uygunluk ${averageScore(item.score)}</small></button>`).join("")}</div>
    </section>
    ${renderPersonalMap()}
  </section>`;
}

function renderPersonalMap() {
  const active = Object.entries(state.topicPreferences).filter(([, value]) => value.active);
  const visibility = (value) => value >= 5 ? "Bunu sık göster" : value >= 3 ? "Dengeli göster" : "Yalnızca iyi bir şey varsa";
  return `<section class="personal-shelf-section"><div class="settings-heading"><div><p class="eyebrow">Senin için düzenlendi</p><h2>Şu sıralar sende öne çıkanlar</h2></div><p>Bu sıralama, ayarlardaki kırmızı noktalara göre değişir. İstediğin zaman azaltabilir, artırabilir veya bir konuyu dinlendirebilirsin.</p></div><div class="personal-shelf">${active.map(([key, pref], index) => `<button class="shelf-card" data-route="${workspaceRoute(key)}"><span class="shelf-number">0${index + 1}</span><span class="shelf-mark ${pref.intensity < 4 ? "is-soft" : ""}"></span><strong>${pref.label}</strong><span>${pref.mode}</span><small>${visibility(pref.intensity)}</small></button>`).join("")}<button class="shelf-settings" data-route="profile"><span>Ayarla</span><strong>Burada ne görmek istediğini sen seç.</strong><small>Kişisel tercihlerini aç →</small></button></div></section>`;
}
function workspaceRoute(key) { return ({ portfolio: "portfolio", video: "video", academic: "academic", history: "topics", cinema: "topics" })[key] || "topics"; }

function portfolioWatchlist() {
  return [...new Set((state.personalFeed.symbols || []).map((symbol) => String(symbol).trim().toUpperCase()).filter(Boolean))].slice(0, 8);
}
function portfolioAssetFor(ticker) {
  const known = portfolioAssets.find((item) => item.ticker === ticker);
  const notes = state.portfolioNotes[ticker] || {};
  return {
    ticker, name: known?.name || ticker, price: "—", change: "—", bars: [],
    thesis: notes.thesis || known?.thesis || "Henüz bir yatırım düşüncesi yazmadın.",
    signal: notes.risk || known?.signal || "İzlemek istediğin riski ekle.",
  };
}
function portfolioMetaFor(ticker) {
  const known = portfolioMeta[ticker] || {};
  const notes = state.portfolioNotes[ticker] || {};
  return { day: "—", volume: "—", risk: known.risk || "Belirlenmedi", thesisScore: known.thesisScore || 50, note: notes.note || known.note || "Bu varlık için kendi notunu yazarak neyi takip ettiğini belirle." };
}
function formatPointDate(value) {
  if (!value) return "—";
  return new Date(value).toLocaleString("tr-TR", state.portfolioRange === "1H" ? { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" } : { day: "2-digit", month: "short", year: "numeric" });
}
function renderPortfolio() {
  const tickers = portfolioWatchlist();
  if (!tickers.length) return `<section class="page workspace-page"><header class="workspace-header"><div><p class="eyebrow">Canlı portföyün</p><h1 class="page-title">Önce takip etmek istediğin<br>bir sembol ekle.</h1><p class="page-copy">Sembol doğrulanır, ardından fiyat, grafik ve gerçek haberler canlı kaynaktan gelir.</p></div></header>${renderPortfolioEditor([])}</section>`;
  const ticker = tickers.includes(state.activeTicker) ? state.activeTicker : tickers[0];
  const baseAsset = portfolioAssetFor(ticker);
  const live = livePortfolio[ticker];
  const points = live?.status === "ready" ? live.data.points || [] : [];
  const min = points.length ? Math.min(...points.map((point) => point.close)) : 0;
  const max = points.length ? Math.max(...points.map((point) => point.close)) : 1;
  const bars = points.map((point) => 18 + ((point.close - min) / Math.max(.01, max - min)) * 82);
  const asset = live?.status === "ready" ? { ...baseAsset, name: live.data.name || baseAsset.name, price: live.data.price.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), change: `${live.data.change >= 0 ? "+" : ""}${live.data.change.toLocaleString("tr-TR", { maximumFractionDigits: 2 })}%`, bars } : baseAsset;
  const meta = portfolioMetaFor(ticker);
  const relevantNews = live?.status === "ready" ? live.data.news || [] : [];
  const marketTime = live?.status === "ready" ? new Date(live.data.asOf).toLocaleString("tr-TR") : "—";
  const fetchedTime = live?.status === "ready" ? new Date(live.data.fetchedAt).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) : "—";
  const selectedIndex = Math.max(0, Math.min(Number(state.portfolioPoint || 0), points.length - 1));
  const selectedPoint = points[selectedIndex] || points.at(-1);
  return `<section class="page workspace-page">
    <header class="workspace-header"><div><p class="eyebrow">Canlı portföyün · ${live?.status === "ready" ? live.data.provider : "bağlantı kuruluyor"}</p><h1 class="page-title">Portföyünü sen kur,<br>veriyi sistem izlesin.</h1><p class="page-copy">Listeyi ve yatırım notlarını düzenle. Bu ekran açıkken fiyat ve haberler dakikada bir yeniden alınır.</p></div><div class="workspace-status ${live?.status || ""}"><span class="red-signal"></span><strong>${live?.status === "loading" || live?.refreshing ? "Portföy güncelleniyor" : live?.status === "error" ? "Veri alınamadı" : `${relevantNews.length} güncel gelişme`}</strong><small>${live?.refreshError ? `Son yenileme başarısız: ${escapeHtml(live.refreshError)} · mevcut veri korunuyor` : live?.status === "ready" ? `Piyasa verisi ${marketTime} · alındı ${fetchedTime}` : live?.error || "Canlı bağlantı başlatılıyor"}</small><button class="button" data-refresh-portfolio ${live?.status === "loading" || live?.refreshing ? "disabled" : ""}>${live?.status === "loading" || live?.refreshing ? "Yenileniyor…" : "Tümünü yenile"}</button></div></header>
    ${renderPortfolioEditor(tickers)}
    <div class="asset-tabs">${tickers.map((symbol) => { const entry = livePortfolio[symbol]; const change = entry?.status === "ready" ? `${entry.data.change >= 0 ? "+" : ""}${entry.data.change.toLocaleString("tr-TR", { maximumFractionDigits: 2 })}%` : "—"; return `<div class="asset-tab-wrap"><button class="asset-tab ${symbol === ticker ? "is-active" : ""}" data-ticker="${symbol}"><strong>${symbol}</strong><span>${entry?.status === "ready" ? entry.data.price.toLocaleString("tr-TR", { maximumFractionDigits: 2 }) : entry?.status === "error" ? "Hata" : "Alınıyor"}</span><em class="${change.startsWith("-") ? "negative" : ""}">${change}</em></button><button class="asset-remove" data-remove-ticker="${symbol}" aria-label="${symbol} sembolünü kaldır">×</button></div>`; }).join("")}</div>
    <div class="portfolio-metrics"><div><span>Gün aralığı</span><strong>${live?.status === "ready" && Number.isFinite(live.data.dayLow) ? `${live.data.dayLow.toLocaleString("tr-TR")}–${live.data.dayHigh.toLocaleString("tr-TR")}` : "—"}</strong></div><div><span>Hacim</span><strong>${live?.status === "ready" && live.data.volume ? live.data.volume.toLocaleString("tr-TR") : "—"}</strong></div><div><span>Piyasa durumu</span><strong>${live?.status === "ready" ? marketStateLabel(live.data.marketState) : "—"}</strong></div><div><span>Veri zamanı</span><strong>${formatPointDate(live?.data?.asOf)}</strong></div><div><span>Not durumu</span><strong>${state.portfolioNotes[ticker] ? "Kişisel" : "Eksik"}</strong></div></div>
    <div class="portfolio-layout"><section class="market-panel modern"><div class="market-top"><div><span>${escapeHtml(asset.name)}</span><h2>${asset.price} <small>${live?.data?.currency || ""}</small></h2><em class="${asset.change.startsWith("-") ? "negative" : ""}">${asset.change}</em></div><div class="range-tabs">${["1H", "1A", "6A", "1Y"].map((range) => `<button class="${state.portfolioRange === range ? "is-active" : ""}" data-range="${range}">${range}</button>`).join("")}</div></div><div class="chart-inspection"><div><span>Seçili veri</span><strong>${selectedPoint ? `${formatPointDate(selectedPoint.date)} · ${selectedPoint.close.toLocaleString("tr-TR", { maximumFractionDigits: 2 })}` : "Veri bekleniyor"}</strong></div><p>${escapeHtml(meta.note)}</p></div>${asset.bars.length ? `<div class="price-chart interactive" aria-label="${asset.ticker} fiyat eğilimi">${asset.bars.map((height, index) => `<button style="--height:${height}%" class="${index === selectedIndex ? "current" : ""}" data-portfolio-point="${index}" title="${formatPointDate(points[index]?.date)} · ${points[index]?.close}"><i></i></button>`).join("")}</div><div class="chart-axis"><span>${formatPointDate(points[0]?.date)}</span><span>${formatPointDate(points.at(-1)?.date)}</span></div>` : `<div class="chart-live-empty"><span class="state-spinner"></span><strong>${live?.status === "error" ? "Bu sembol için veri alınamadı." : "Gerçek grafik verisi alınıyor."}</strong></div>`}<div class="portfolio-panel-tabs">${[["overview","Özet"],["thesis","Düşüncem"],["risks","Riskler"],["compare","Karşılaştır"]].map(([id,label]) => `<button class="${state.portfolioPanel === id ? "is-active" : ""}" data-portfolio-panel="${id}">${label}</button>`).join("")}</div>${renderPortfolioPanel(asset, meta, tickers)}</section>
      <aside class="portfolio-feed"><p class="section-label">Gerçek haberler & gelişmeler</p>${relevantNews.length ? relevantNews.map((news) => `<button class="market-news live-news" data-live-url="${escapeHtml(news.url)}"><div><span class="red-signal"></span><time>${news.published ? new Date(news.published).toLocaleString("tr-TR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }) : "Zaman yok"}</time><em>${news.type}</em></div><h3>${escapeHtml(news.title)}</h3><p>Haberi asıl kaynağında açarak ayrıntıyı ve bağlamı doğrula.</p><small>${escapeHtml(news.source)}</small></button>`).join("") : `<div class="live-empty"><strong>${live?.status === "loading" ? "Haberler taranıyor…" : "Bu sembol için yeni haber bulunamadı."}</strong><small>Sonuç yoksa örnek haber göstermiyoruz.</small></div>`}${live?.status === "ready" ? `<small class="freshness-note">${escapeHtml(live.data.freshnessNote)}</small>` : ""}</aside></div>
    ${renderRecommendationEngine("portfolio")}
  </section>`;
}
function renderPortfolioEditor(tickers) {
  return `<section class="portfolio-editor"><form id="portfolioAddForm"><label>Portföye sembol ekle<input name="ticker" maxlength="10" autocomplete="off" placeholder="Örn. AAPL" required></label><button class="button primary">Doğrula ve ekle</button><small class="form-message" data-portfolio-message>En fazla 8 sembol. Eklenmeden önce canlı piyasada doğrulanır.</small></form><span>${tickers.length} / 8 sembol</span></section>`;
}
function renderPortfolioPanel(asset, meta, tickers) {
  if (state.portfolioPanel === "thesis") return `<form class="portfolio-insight portfolio-note-form" id="portfolioNoteForm"><span>Bu varlık için düşüncen</span><label>Yatırım tezi<input name="thesis" value="${escapeHtml(asset.thesis)}" required></label><label>Takip notu<textarea name="note" required>${escapeHtml(meta.note)}</textarea></label><label>En önemli risk<input name="risk" value="${escapeHtml(asset.signal)}" required></label><button class="button primary">Notumu kaydet</button></form>`;
  if (state.portfolioPanel === "risks") return `<div class="portfolio-insight risk"><span>Yakından izleyeceğin risk</span><h3>${escapeHtml(asset.signal)}</h3><p>${escapeHtml(meta.note)}</p><button class="button" data-portfolio-panel="thesis">Düzenle</button></div>`;
  if (state.portfolioPanel === "compare") return `<div class="portfolio-compare">${tickers.map((ticker) => { const entry = livePortfolio[ticker]; return `<button data-ticker="${ticker}" class="${ticker === asset.ticker ? "is-active" : ""}"><strong>${ticker}</strong><span>${entry?.status === "ready" ? `${entry.data.change >= 0 ? "+" : ""}${entry.data.change.toLocaleString("tr-TR", { maximumFractionDigits: 2 })}%` : "—"}</span><small>${entry?.status === "ready" ? entry.data.price.toLocaleString("tr-TR", { maximumFractionDigits: 2 }) : "Veri alınıyor"}</small></button>`; }).join("")}</div>`;
  return `<div class="portfolio-insight"><span>Bugünkü kişisel notun</span><h3>${escapeHtml(asset.thesis)}</h3><p>${escapeHtml(meta.note)}</p><button class="button" data-portfolio-panel="thesis">Düşüncemi düzenle</button></div>`;
}
function renderVideo() {
  const job = state.videoJob;
  const statusCopy = { idle: ["Henüz video yok", "Bir YouTube bağlantısı ekle"], processing: ["Video hazırlanıyor", "Gerçek altyazı alınıyor…"], ready: ["Video notu hazır", "Altyazı ve arama kullanılabilir"], error: ["Video alınamadı", "Bağlantıyı veya altyazıyı kontrol et"] }[job.status] || ["Henüz video yok", "Bir bağlantı ekle"];
  return `<section class="page workspace-page"><header class="workspace-header"><div><p class="eyebrow">Video araştırma masan</p><h1 class="page-title">Gerçek altyazıda ara,<br>kendi notunu yaz.</h1><p class="page-copy">YouTube bağlantısını ekle. Sistem yalnızca videonun gerçekten sunduğu altyazıyı kullanır; örnek metin veya uydurma bölüm göstermez.</p></div><div class="workspace-status ${job.status}"><span class="red-signal"></span><strong>${statusCopy[0]}</strong><small>${statusCopy[1]}</small></div></header>
    <form class="video-ingest" id="videoIngestForm" novalidate><div><span>YouTube bağlantısı</span><input name="url" type="url" value="${escapeHtml(job.url || "")}" required placeholder="https://youtube.com/watch?v=..."><small class="form-message ${job.status === "error" ? "is-error" : ""}" role="status">${job.status === "error" ? escapeHtml(job.error) : "Herkese açık ve altyazısı bulunan YouTube videosu kullan."}</small></div><button class="button primary" ${job.status === "processing" ? "disabled" : ""}>${job.status === "processing" ? "Altyazı alınıyor…" : "Videoyu işle →"}</button></form>
    ${renderVideoState(job)}
    ${renderVideoNotebook()}
    ${renderRecommendationEngine("video")}
  </section>`;
}

function renderVideoState(job) {
  if (job.status === "idle") return `<section class="state-card"><span class="state-icon">＋</span><h2>Bir video eklediğinde gerçek döküm burada açılır.</h2><p>Altyazıda arama yapabilir, bir sorunun geçtiği bölümleri bulabilir ve kendi notlarını saklayabilirsin.</p></section>`;
  if (job.status === "processing") return `<section class="state-card is-loading" aria-live="polite"><span class="state-spinner"></span><h2>Videonun altyazısı alınıyor.</h2><p>Bu işlem YouTube'un sunduğu gerçek altyazı kaynağına bağlıdır.</p><div class="loading-lines"><i></i><i></i><i></i></div></section>`;
  if (job.status === "error") return `<section class="state-card is-error" role="alert"><span class="state-icon">!</span><h2>Bu bağlantı işlenemedi.</h2><p>${escapeHtml(job.error || "Video herkese açık olmayabilir veya altyazısı bulunmayabilir.")}</p></section>`;
  const segments = Array.isArray(job.segments) ? job.segments : liveTranscriptSegments;
  if (!segments.length) return `<section class="state-card is-error"><span class="state-icon">!</span><h2>Kaydedilmiş gerçek altyazı bulunamadı.</h2><p>Bağlantıyı yeniden işleyerek altyazıyı tekrar al.</p></section>`;
  return `<div class="video-engine"><aside class="video-summary"><div class="video-placeholder"><span>${segments.at(-1)?.time || "—"}</span><strong>${escapeHtml(job.title || "YouTube videosu")}</strong><small>Gerçek altyazı · ${segments.length} bölüm</small></div><div class="engine-steps"><span class="done">1 · Bağlantı doğrulandı</span><span class="done">2 · Altyazı alındı</span><span class="done">3 · Zaman kodları ayrıldı</span><span class="active">4 · Arama ve not hazır</span></div><div class="video-actions"><button class="button" data-video-summary="short">İlk bölümleri oku</button><button class="button primary" data-live-url="${escapeHtml(job.url)}">Videoyu aç ↗</button></div></aside>
    <section class="transcript-panel"><div class="transcript-head"><div><p class="section-label">Gerçek altyazı dökümü</p><h2>${escapeHtml(job.title || "Video dökümü")}</h2></div><input id="transcriptSearch" type="search" placeholder="Dökümde ara..."></div><div class="transcript-list">${segments.map((segment) => `<button class="transcript-row" data-transcript-text="${escapeHtml(segment.text.toLocaleLowerCase("tr"))}"><time>${escapeHtml(segment.time)}</time><span><strong>${escapeHtml(segment.speaker || "Konuşma")}</strong>${escapeHtml(segment.text)}</span></button>`).join("")}</div><form class="transcript-question" id="transcriptQuestion"><input name="question" value="${escapeHtml(job.question || "")}" required placeholder="Bu konu videoda nerede geçiyor?"><button aria-label="Sor">→</button></form>${job.answer ? `<div class="video-answer" aria-live="polite"><strong>Altyazıda bulunan bölümler</strong><p>${escapeHtml(job.answer)}</p></div>` : ""}</section></div>`;
}

function renderVideoNotebook() {
  return `<section class="video-notebook"><div><p class="eyebrow">Kendi yazı alanın</p><h2>Video not defteri</h2><p>Yorumun sana ait kalır ve profilinle birlikte saklanır.</p></div><form id="videoNoteForm"><input name="title" required placeholder="Not başlığı"><textarea name="text" required placeholder="Videodan ne öğrendin, neye katılmıyorsun?"></textarea><button class="button primary">Notu kaydet</button></form><div class="video-note-list">${state.videoNotes.length ? state.videoNotes.map((note) => `<article><div><strong>${escapeHtml(note.title)}</strong><small>${new Date(note.createdAt).toLocaleString("tr-TR")}</small></div><p>${escapeHtml(note.text)}</p><button class="icon-button" data-video-note-remove="${note.id}" aria-label="Notu sil">×</button></article>`).join("") : `<p class="empty">Henüz kendi notun yok.</p>`}</div></section>`;
}
function academicItems() { return liveAcademicState.items; }
function renderAcademic() {
  const topics = ["AI ekonomisi", "Enerji", "Tarih & güç"];
  const papers = academicItems();
  const visible = [...papers].sort((a, b) => state.academicSort === "newest" ? Number(b.year || 0) - Number(a.year || 0) : state.academicSort === "citations" ? Number(b.citations || 0) - Number(a.citations || 0) : academicRelevance(b) - academicRelevance(a));
  const updated = liveAcademicState.generatedAt ? new Date(liveAcademicState.generatedAt).toLocaleString("tr-TR", { hour: "2-digit", minute: "2-digit" }) : "henüz yenilenmedi";
  const openCount = visible.filter((paper) => paper.openAccess || paper.access !== "Özet erişimi").length;
  return `<section class="page workspace-page"><header class="workspace-header"><div><p class="eyebrow">İlgilendiğin alanlardan gerçek okumalar · ${liveAcademicState.provider || "OpenAlex"}</p><h1 class="page-title">Önce kaynak,<br>sonra yorum.</h1><p class="page-copy">Makaleyi kim yazmış, nerede yayımlanmış, tam metne erişiliyor mu ve kaynakçada nasıl geçiyor — hepsi aynı yerde.</p></div><div class="workspace-status ${liveAcademicState.status}"><span class="red-signal"></span><strong>${liveAcademicState.status === "loading" ? "Makaleler aranıyor" : liveAcademicState.status === "error" ? "Kaynağa ulaşılamadı" : `${visible.length} gerçek makale`}</strong><small>${liveAcademicState.error ? escapeHtml(liveAcademicState.error) : `${openCount} açık erişim · ${updated}`}</small><button class="button" data-refresh-academic ${liveAcademicState.status === "loading" ? "disabled" : ""}>${liveAcademicState.status === "loading" ? "Taranıyor…" : "Yenile"}</button></div></header>
    <div class="academic-toolbar"><div class="topic-pills">${topics.map((topic) => `<button class="${state.academicTopic === topic ? "is-active" : ""}" data-academic-topic="${topic}">${topic}</button>`).join("")}</div><label><span>Sırala</span><select data-academic-sort><option value="relevance" ${state.academicSort === "relevance" ? "selected" : ""}>Konularımla ilgisi</option><option value="newest" ${state.academicSort === "newest" ? "selected" : ""}>Yeni yayınlar</option><option value="citations" ${state.academicSort === "citations" ? "selected" : ""}>Atıf sayısı</option></select></label></div>
    <div class="academic-layout"><section class="paper-list">${visible.length ? visible.map((paper, index) => `<article class="paper-card"><div class="paper-index">${String(index + 1).padStart(2, "0")}</div><div><div class="paper-meta"><span>${escapeHtml(paper.journal)} · ${paper.year || "—"}</span><em class="${paper.access === "Özet erişimi" ? "limited" : ""}">${paper.access || (paper.openAccess ? "Açık erişim" : "Özet erişimi")}</em></div><h2>${escapeHtml(paper.title)}</h2><p class="authors">${escapeHtml(Array.isArray(paper.authors) ? paper.authors.join(", ") : paper.authors)}</p><p>${escapeHtml(paper.abstract)}</p><div class="paper-source"><span>${paper.doi ? `DOI ${escapeHtml(paper.doi)}` : "DOI paylaşılmadı"}</span><span>${paper.citations || 0} atıf</span></div><div class="actions"><button class="button ghost" data-cite-paper="${paper.id}">Kaynakçayı al</button><button class="button" data-paper="${paper.id}">Özeti oku</button>${paper.fullTextUrl || paper.url ? `<button class="button primary" data-live-url="${escapeHtml(paper.fullTextUrl || paper.url)}">${paper.fullTextUrl ? "Tam metni aç" : "Yayıncı sayfası"}</button>` : ""}</div></div></article>`).join("") : `<section class="state-card ${liveAcademicState.status === "loading" ? "is-loading" : ""}"><span class="${liveAcademicState.status === "loading" ? "state-spinner" : "state-icon"}">${liveAcademicState.status === "loading" ? "" : "0"}</span><h2>${liveAcademicState.status === "loading" ? "Gerçek makaleler aranıyor." : "Bu konuda doğrulanmış makale bulunamadı."}</h2><p>${escapeHtml(liveAcademicState.error || "Başka bir konu seçebilir veya yeniden tarayabilirsin.")}</p></section>`}</section><aside class="academic-side"><div class="source-policy"><p class="section-label">Kaynak konusunda açık olalım</p><h3>Erişemediğimiz metni varmış gibi göstermeyiz.</h3><ul><li>Yazar özeti ile yorumumuz ayrı</li><li>DOI ve yayıncı görünür</li><li>Açık erişim bilgisi belirtilir</li><li>Tam metin yalnızca gerçek bağlantı varsa açılır</li></ul></div><div class="citation-vault"><span>Canlı kaynak</span><strong>${liveAcademicState.provider || "OpenAlex"}</strong><small>son tarama ${updated}</small></div></aside></div>
    ${renderRecommendationEngine("academic")}
  </section>`;
}

function academicRelevance(paper) { return paper.openAccess ? 105 : 100; }

async function refreshLiveAcademic() {
  liveAcademicState = { ...liveAcademicState, status: "loading", items: [], error: "" }; if (route === "academic") render();
  try {
    const topicQueries = { "AI ekonomisi": "artificial intelligence economy productivity", "Enerji": "data centers electricity grid energy", "Tarih & güç": "institutions political power history" };
    const query = topicQueries[state.academicTopic] || state.academicTopic;
    const data = await apiRequest("/api/academic", { method: "POST", body: JSON.stringify({ query }) });
    liveAcademicState = { status: "ready", items: data.items || [], error: "", generatedAt: data.generatedAt, provider: data.provider || "OpenAlex" };
  } catch (error) { liveAcademicState = { ...liveAcademicState, status: "error", error: error.message }; }
  if (route === "academic") render();
}
async function refreshLiveRecommendations() {
  liveRecommendationState = { ...liveRecommendationState, status: "loading", items: [], error: "" };
  if (route === "recommendations") render();
  try {
    const activeJourney = journeyById(state.activeJourney) || state.journeys[0];
    const journeyInterest = { id: "active-journey", label: `${activeJourney.title} ${activeJourney.hypothesis}`, keywords: `${activeJourney.title} ${activeJourney.hypothesis}`.split(/\s+/).filter((word) => word.length > 3), intensity: 5, active: true };
    const data = await apiRequest("/api/feed", { method: "POST", body: JSON.stringify({ interests: [journeyInterest, ...state.personalFeed.interests.filter((item) => item.active)], engines: state.personalFeed.engines, sources: state.personalFeed.sources, symbols: state.personalFeed.symbols }) });
    const formatByEngine = { academic: "Makale", youtube: "Video", finance: "Rapor", news: "Rapor", rss: "Makale", hackernews: "Makale", social: "Rapor" };
    const trustByEngine = { academic: 96, finance: 93, news: 86, rss: 82, youtube: 80, hackernews: 78, social: 70 };
    const items = (data.items || []).filter((item) => item.url).map((item) => ({
      id: item.id, url: item.url, engine: item.engine, format: formatByEngine[item.engine] || "Makale", type: feedEngineLabels[item.engine] || "Kaynak", source: item.source || item.engine,
      title: item.title, summary: item.summary || "Kaynak özet paylaşmadı.", why: item.reason || `${activeJourney.title} ve seçtiğin ilgi alanlarıyla eşleşti.`, minutes: item.readingMinutes || 4,
      novelty: Math.min(100, 55 + Number(item.freshness || 20)), counter: Number(state.recommendationSettings.counter), trust: trustByEngine[item.engine] || 75, match: item.score || 70, published: item.published
    }));
    liveRecommendationState = { status: "ready", generatedAt: data.generatedAt, error: "", items };
  } catch (error) { liveRecommendationState = { status: "error", items: [], error: error.message, generatedAt: "" }; }
  if (route === "recommendations") render();
}async function refreshLivePortfolio(ticker, quiet = false) {
  if (!ticker) return;
  const previous = livePortfolio[ticker];
  livePortfolio[ticker] = previous?.status === "ready" ? { ...previous, refreshing: true, refreshError: "" } : { status: "loading" };
  if (!quiet && route === "portfolio") render();
  try {
    const data = await apiRequest(`/api/portfolio/${encodeURIComponent(ticker)}?range=${encodeURIComponent(state.portfolioRange)}`);
    livePortfolio[ticker] = { status: "ready", data, refreshing: false, refreshError: "" };
  } catch (error) {
    livePortfolio[ticker] = previous?.status === "ready" ? { ...previous, refreshing: false, refreshError: error.message } : { status: "error", error: error.message };
  }
  if (!quiet && route === "portfolio") render();
}
async function refreshPortfolioWatchlist() {
  const tickers = portfolioWatchlist();
  if (!tickers.length) { if (route === "portfolio") render(); return; }
  await Promise.allSettled(tickers.map((ticker) => refreshLivePortfolio(ticker, true)));
  if (route === "portfolio") render();
}async function refreshBackendSchedules() {
  try { const data = await apiRequest("/api/schedules"); state.researchSchedules = data.schedules; state.researchReports = data.reports.map((report) => ({ id: report.id, title: report.title, date: new Date(report.createdAt).toLocaleString("tr-TR"), summary: `${report.count || report.items?.length || 0} gerçek kaynak sonucu bulundu.`, items: report.items || [] })); persist(); if (route === "profile") render(); }
  catch {}
}

function getRecommendations() {
  if (liveRecommendationState.status !== "ready") return [];
  const settings = state.recommendationSettings;
  const selectedLabels = sourceCatalog.filter((source) => settings.sources.includes(source.id)).map((source) => source.label.toLocaleLowerCase("tr"));
  return liveRecommendationState.items.filter((item) => settings.formats.includes(item.format)).filter((item) => {
    if (settings.sourceStrictness !== "Yalnızca seçili kaynaklar") return true;
    const source = item.source.toLocaleLowerCase("tr");
    return selectedLabels.some((label) => source.includes(label) || label.includes(source));
  }).map((item) => {
    const source = item.source.toLocaleLowerCase("tr");
    const preferred = selectedLabels.some((label) => source.includes(label) || label.includes(source));
    const timeFit = item.minutes <= Number(settings.timeBudget) ? 100 : Math.max(25, 100 - (item.minutes - Number(settings.timeBudget)) * 5);
    const noveltyFit = 100 - Math.abs(item.novelty - Number(settings.novelty));
    return { ...item, match: Math.min(100, Math.round((item.match * .5) + (item.trust * .18) + (noveltyFit * .14) + (timeFit * .1) + (preferred ? 8 : 0))) };
  }).sort((a, b) => b.match - a.match);
}
function renderRecommendations() {
  const settings = state.recommendationSettings;
  const results = getRecommendations();
  const index = Math.min(state.recommendationIndex, Math.max(0, results.length - 1));
  const active = results[index];
  const groups = [...new Set(sourceCatalog.map((source) => source.group))];
  return `<section class="page recommendation-page">
    <header class="split-header"><div><p class="eyebrow">Kişisel seçki · ${liveRecommendationState.status === "ready" ? "canlı kaynaklar" : liveRecommendationState.status === "loading" ? "kaynaklar taranıyor" : liveRecommendationState.status === "error" ? "bağlantı hatası" : "yenilenmeyi bekliyor"}</p><h1 class="page-title">Ne görmek istediğini<br>sen tarif et.</h1></div><div><p class="page-copy">Kaynakları, karşı görüş oranını, yenilik düzeyini ve ayıracağın zamanı ayrı ayrı belirle. Seçki her değişiklikte yeniden sıralanır.</p><button class="button" data-refresh-recommendations ${liveRecommendationState.status === "loading" ? "disabled" : ""}>${liveRecommendationState.status === "loading" ? "Canlı kaynaklar taranıyor…" : "Canlı kaynakları yenile"}</button>${liveRecommendationState.error ? `<small class="service-error">${escapeHtml(liveRecommendationState.error)}</small>` : ""}</div></header>
    <div class="recommendation-layout"><aside class="recommendation-controls"><form id="recommendationForm">
      <div class="control-section"><div class="control-title"><strong>Zaman ve derinlik</strong><small>Bugünkü seçki</small></div><label>Ayıracağım süre<select name="timeBudget">${["10","20","30","45"].map((value) => `<option value="${value}" ${settings.timeBudget === value ? "selected" : ""}>${value} dakika</option>`).join("")}</select></label><label>Anlatım<select name="depth">${["Kısa", "Dengeli", "Derin"].map((value) => `<option ${settings.depth === value ? "selected" : ""}>${value}</option>`).join("")}</select></label></div>
      <div class="control-section"><div class="control-title"><strong>İçerik dengesi</strong><small>Kaydırarak değiştir</small></div><label class="range-control"><span>Yenilik <output>${settings.novelty}%</output></span><input name="novelty" type="range" min="0" max="100" value="${settings.novelty}"></label><label class="range-control"><span>Karşı görüş <output>${settings.counter}%</output></span><input name="counter" type="range" min="0" max="100" value="${settings.counter}"></label></div>
      <div class="control-section"><div class="control-title"><strong>Biçimler</strong><small>Birden fazla seçebilirsin</small></div><div class="format-options">${["Makale","Video","Rapor"].map((format) => `<label><input type="checkbox" name="formats" value="${format}" ${settings.formats.includes(format) ? "checked" : ""}><span>${format}</span></label>`).join("")}</div></div>
      <div class="control-section"><div class="control-title"><strong>Kaynak yaklaşımı</strong></div><select name="sourceStrictness">${["Seçili kaynaklar önce", "Yalnızca seçili kaynaklar", "Tüm güvenilir kaynaklar"].map((value) => `<option ${settings.sourceStrictness === value ? "selected" : ""}>${value}</option>`).join("")}</select></div>
    </form></aside>
    <main class="recommendation-preview">${active ? `<div class="paper-counter"><span>${index + 1} / ${results.length}</span><span>${settings.timeBudget} dakikalık seçki</span></div><article class="recommendation-paper" key="${active.title}"><div class="paper-source-line"><span>${active.type}</span><strong>${active.source}</strong><em>%${active.match} sana uygun</em></div><h2>${active.title}</h2><p class="paper-summary">${active.summary}</p><div class="paper-why"><span>Neden seçildi?</span><p>${active.why}</p></div><dl class="recommendation-facts"><div><dt>Okuma</dt><dd>${active.minutes} dk</dd></div><div><dt>Yenilik</dt><dd>%${active.novelty}</dd></div><div><dt>Karşı görüş</dt><dd>%${active.counter}</dd></div><div><dt>Kaynak</dt><dd>%${active.trust}</dd></div></dl><div class="paper-actions"><button class="button primary" data-live-url="${escapeHtml(active.url)}">Kaynağı aç ↗</button><button class="button ghost" data-rec-decision="skip">Bunu gösterme</button><button class="button" data-rec-decision="save">Arşive kaydet</button><button class="button primary" data-rec-decision="attach">Konuya ekle</button></div></article><div class="paper-navigation"><button class="button ghost" data-rec-page="prev" ${index === 0 ? "disabled" : ""}>← Önceki</button><button class="button" data-rec-page="next" ${index >= results.length - 1 ? "disabled" : ""}>Sonraki kâğıt →</button></div>` : `<section class="state-card ${liveRecommendationState.status === "loading" ? "is-loading" : ""}"><span class="${liveRecommendationState.status === "loading" ? "state-spinner" : "state-icon"}">${liveRecommendationState.status === "loading" ? "" : "0"}</span><h2>${liveRecommendationState.status === "loading" ? "Gerçek kaynaklar taranıyor." : liveRecommendationState.status === "error" ? "Öneri motoruna ulaşılamadı." : "Bu ayarlarla gerçek sonuç kalmadı."}</h2><p>${liveRecommendationState.error ? escapeHtml(liveRecommendationState.error) : "En az bir biçim seç veya kaynak yaklaşımını genişlet."}</p></section>`}</main></div>
    <section class="source-studio"><div class="settings-heading"><div><p class="eyebrow">Hedef kaynak seçkisi</p><h2>Hangi kaynaklara öncelik verelim?</h2></div><p>Seçtiğin kaynaklar sıralamada öne çıkar. “Yalnızca seçili kaynaklar” dersen diğerleri tamamen dışarıda kalır.</p></div>${groups.map((group) => `<div class="source-group"><strong>${group}</strong><div>${sourceCatalog.filter((source) => source.group === group).map((source) => `<label class="source-option"><input type="checkbox" data-source-id="${source.id}" ${settings.sources.includes(source.id) ? "checked" : ""}><span><b>${source.label}</b><small>${source.note}</small></span></label>`).join("")}</div></div>`).join("")}</section>
  </section>`;
}

function renderRecommendationEngine(type) {
  const copy = {
    portfolio: { title: "Portföyün için canlı kaynaklar", text: "Sembollerinle eşleşen finans ve haber sonuçları." },
    video: { title: "Gerçek video önerileri", text: "YouTube kaynaklarından ilgi alanlarına göre şu anda getirildi." },
    academic: { title: "Okuma listene eklenebilir", text: "Akademik motorun güncel ve erişilebilir sonuçları." }
  }[type];
  const symbols = portfolioWatchlist().map((symbol) => symbol.toLocaleLowerCase("tr"));
  const items = personalFeedState.items.filter((item) => {
    if (type === "video") return item.engine === "youtube";
    if (type === "academic") return item.engine === "academic";
    if (type === "portfolio") return item.engine === "finance" || (item.engine === "news" && symbols.some((symbol) => `${item.title} ${item.summary}`.toLocaleLowerCase("tr").includes(symbol)));
    return false;
  }).slice(0, 3);
  return `<section class="workspace-recommendations"><div><p class="eyebrow">Canlı seçki</p><h2>${copy.title}</h2><p>${copy.text}</p></div><div>${items.length ? items.map((item, index) => `<button data-live-url="${escapeHtml(item.url)}"><span class="red-signal ${index ? "muted" : ""}"></span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.source)} · %${item.score || 0} eşleşme</small></button>`).join("") : `<div class="live-empty"><strong>${personalFeedState.status === "loading" ? "Kaynaklar taranıyor…" : "Şu anda doğrulanmış sonuç yok."}</strong><small>Örnek kart göstermiyoruz; motoru yenileyebilirsin.</small></div>`}</div></section>`;
}

function renderJourneySuggestions(selected) {
  const words = `${selected.title} ${selected.hypothesis}`.toLocaleLowerCase("tr").split(/\s+/).filter((word) => word.length > 3);
  const items = personalFeedState.items.filter((item) => words.some((word) => `${item.title} ${item.summary}`.toLocaleLowerCase("tr").includes(word))).slice(0, 3);
  return `<section class="workspace-recommendations topic-engine"><div><p class="eyebrow">${escapeHtml(selected.title)} için canlı seçki</p><h2>Bu konuyu biraz daha açalım</h2><p>${escapeHtml(selected.hypothesis)}</p></div><div>${items.length ? items.map((item, index) => `<button data-live-url="${escapeHtml(item.url)}"><span class="red-signal ${index ? "muted" : ""}"></span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.source)} · ${feedEngineLabels[item.engine] || item.engine}</small></button>`).join("") : `<div class="live-empty"><strong>Bu konu için henüz gerçek sonuç yok.</strong><small>Gazeteyi yenilediğinde yeni kaynaklar burada görünür.</small></div>`}</div></section>`;
}
function renderTopics() {
  const selected = journeyById(state.activeJourney) || state.journeys[0];
  const linked = state.items.filter((item) => item.journeyId === selected.id && state.saved.includes(item.id));
  return `<section class="page">
    <header class="split-header"><div><p class="eyebrow">Takip ettiğin konular</p><h1 class="page-title">Her merakın<br>kendi defteri var.</h1></div><p class="page-copy">Sorularını, kaynaklarını ve fikrini değiştiren gelişmeleri konu konu bir arada tut. Böylece nereden başladığını ve bugün ne düşündüğünü görebilirsin.</p></header>
    <div class="journey-layout">
      <aside class="journey-list">${state.journeys.map((journey) => `<button class="journey-list-button ${journey.id === selected.id ? "is-active" : ""}" data-select-journey="${journey.id}"><strong>${journey.title}</strong><span>${journey.status} · %${journey.progress}</span><div class="progress"><i style="width:${journey.progress}%"></i></div></button>`).join("")}<button class="button ghost" id="newJourney">+ Yeni konu</button></aside>
      <article class="journey-detail">
        <div class="detail-top"><div><h2>${selected.title}</h2><div class="detail-meta"><span>${selected.started}</span><span>${selected.status}</span><span>Önem · ${selected.importance}</span></div></div><div class="actions"><button class="button ghost" data-edit-hypothesis="${selected.id}">Hipotezi düzenle</button><button class="button primary" data-add-event="${selected.id}">+ Kanıt / not</button></div></div>
        <div class="hypothesis"><span>Şu an ne düşünüyorsun?</span><p>${selected.hypothesis}</p></div>
        <div class="questions-block"><p class="section-label">Açık sorular</p>${selected.questions.map((question) => `<div class="question-row"><span>?</span><p>${question}</p></div>`).join("")}</div>
        <div class="linked-strip"><p class="section-label">Bağlı içerikler · ${linked.length}</p>${linked.length ? linked.map((item) => `<button data-content="${item.id}">${item.type} · ${item.title}</button>`).join("") : "<p>Henüz bağlı kayıt yok.</p>"}</div>
        <p class="section-label">Fikir değişiklikleri</p>${selected.events.map((event) => `<div class="event-line"><span class="event-date">${event.date} · ${event.kind || "Not"}</span><h3>${event.title}</h3><p>${event.text}</p></div>`).join("")}
      </article>
    </div>
    ${renderJourneySuggestions(selected)}
  </section>`;
}

function renderLibrary() {
  const filters = [["tumu", "Tümü"], ["saved", "Kaydedilen"], ["new", "Yeni"], ["rejected", "Reddedilen"]];
  const visible = state.demoEmptyLibrary ? [] : state.libraryFilter === "tumu" ? state.items : state.items.filter((item) => item.state === state.libraryFilter || (state.libraryFilter === "saved" && state.saved.includes(item.id)));
  return `<section class="page">
    <header class="split-header"><div><p class="eyebrow">Kişisel arşivin</p><h1 class="page-title">Dönmek istediklerin.</h1></div><p class="page-copy">Kaydettiğin videolar, makaleler, raporlar ve filmler burada. Verdiklerin kararlar sonraki seçimleri sana biraz daha yaklaştırır.</p></header>
    <div class="library-toolbar"><div class="filters">${filters.map(([id, label]) => `<button class="filter ${state.libraryFilter === id ? "is-active" : ""}" data-filter="${id}">${label}</button>`).join("")}</div><span>${visible.length} kayıt</span></div>
    <div class="library-grid">${visible.length ? visible.map((item) => `<article class="library-card" data-content-card="${item.id}"><div class="card-meta"><span class="status-mark ${item.state}"></span>${item.type} · ${item.journey}</div><h3>${item.title}</h3><p>${item.summary}</p><div class="mini-score">${scoreBars(item.score, true)}</div><footer><span>${item.source} · ${item.time}</span><div><button class="icon-button" data-content="${item.id}" aria-label="Analizi aç">↗</button><button class="icon-button" data-decision="${item.id}:saved" aria-label="${state.saved.includes(item.id) ? "Kaydı kaldır" : "Kaydet"}">${state.saved.includes(item.id) ? "✓" : "+"}</button></div></footer></article>`).join("") : `<div class="empty-state"><span>Henüz burada bir şey yok.</span><h2>Beğendiğin bir içerikte “Arşive kaydet” dediğinde burada görünür.</h2><div class="actions"><button class="button primary" data-route="explore">Bir şey keşfet</button>${state.demoEmptyLibrary ? `<button class="button ghost" data-library-demo="filled">Dolu durumu göster</button>` : ""}</div></div>`}</div>
  </section>`;
}

function renderExplore() {
  const examples = ["AI veri merkezlerinin enerji talebi için iki birincil kaynak ve bir karşı görüş bul.", "Portföyümdeki şirketler için son gelişmeleri ve güvenilir videoları getir.", "Tarih ve güç konumdaki açık sorular için güncel makale, RSS ve uzun sohbet bul."];
  return `<section class="page">
    <header class="split-header"><div><p class="eyebrow">Gerçek kaynaklarda ara</p><h1 class="page-title">Bugün neyin peşindesin?</h1></div><p class="page-copy">Ne aradığını kendi cümlelerinle anlat. Haber, akademi, YouTube, RSS, finans ve teknoloji kaynaklarını o anda tarayalım.</p></header>
    <div class="explore-shell"><form class="explore-box" id="exploreForm" novalidate><textarea name="query" aria-label="Araştırma talebi" placeholder="Örneğin: Enerji yatırımlarıyla ilgili güvenilir iki okuma bul..." required>${escapeHtml(exploreQuery)}</textarea><div class="explore-footer"><div class="context-chips"><button type="button" class="chip ${state.exploreOptions.context ? "is-active" : ""}" data-explore-option="context">Konularımı dikkate al</button><button type="button" class="chip ${state.exploreOptions.primary ? "is-active" : ""}" data-explore-option="primary">Akademik / birincil kaynak</button><button type="button" class="chip ${state.exploreOptions.counter ? "is-active" : ""}" data-explore-option="counter">Karşı görüş ekle</button></div><button class="button primary" ${exploreLoading ? "disabled" : ""}>${exploreLoading ? "Gerçek kaynaklar aranıyor…" : "Ara →"}</button></div><small class="form-message ${exploreError ? "is-error" : ""}" id="exploreMessage">${escapeHtml(exploreError || "En az üç kelimeyle ne aradığını anlat.")}</small></form>
      ${exploreLoading ? `<section class="state-card is-loading"><span class="state-spinner"></span><h2>Canlı motorlar taranıyor.</h2><p>Sonuçlar geçmiş örneklerden değil, şu anda erişilebilen kaynaklardan geliyor.</p></section>` : exploreResults.length ? `<div class="research-header"><p class="eyebrow">${exploreResults.length} gerçek sonuç · kaynak bağlantıları açık</p><button class="button ghost" data-clear-results>Yeni arama</button></div><div class="research-results">${exploreResults.map((result, index) => renderExploreResult(result, index)).join("")}</div>` : exploreSearched ? `<section class="state-card"><span class="state-icon">0</span><h2>Canlı kaynaklarda uygun sonuç bulunamadı.</h2><p>${escapeHtml(exploreError || "Birincil kaynak filtresini kaldırabilir veya aramayı biraz genişletebilirsin.")}</p><button class="button" data-clear-results>Aramayı düzenle</button></section>` : `<div class="example-prompts">${examples.map((text) => `<button class="example-prompt" data-example="${escapeHtml(text)}">${text}</button>`).join("")}</div>`}
    </div>
  </section>`;
}

function renderExploreResult(result, index) {
  return `<article class="research-card ${result.saved ? "is-saved" : ""}"><div class="result-number">${String(index + 1).padStart(2, "0")}</div><div><div class="card-meta"><span class="dot"></span>${escapeHtml(result.type)} · ${escapeHtml(result.source)} · ${escapeHtml(result.confidence)}</div><h3>${escapeHtml(result.title)}</h3><p>${escapeHtml(result.summary)}</p><div class="why-box"><strong>Neden sana göre?</strong>${escapeHtml(result.why)}</div><div class="score-grid">${scoreBars(result.score)}</div><div class="actions"><button class="button primary" data-live-url="${escapeHtml(result.url)}">Kaynağı aç ↗</button><button class="button" data-research-save="${index}" ${result.saved ? "disabled" : ""}>${result.saved ? "Arşivde ✓" : "Arşive kaydet"}</button><button class="button" data-research-attach="${index}" ${result.attached ? "disabled" : ""}>${result.attached ? "Konuya eklendi ✓" : "Bir konuya bağla"}</button><button class="button ghost" data-research-skip="${index}">Geç</button></div></div></article>`;
}
const feedEngineLabels = { news: "Haber", finance: "Finans", academic: "Akademi", youtube: "YouTube", rss: "RSS", hackernews: "Teknoloji", social: "X / sosyal" };

function fallbackFeedItems() {
  return state.items.filter((item) => item.state !== "rejected").map((item, index) => ({
    id: `fallback-${item.id}`, engine: item.type === "Video" ? "youtube" : item.type === "Piyasa notu" ? "finance" : item.type === "Makale" || item.type === "Rapor" ? "academic" : "rss",
    source: item.source, title: item.title, summary: item.summary, url: "", published: new Date(Date.now() - index * 3_600_000).toISOString(), score: averageScore(item.score), reason: `${item.journey} konunla eşleşiyor.`, readingMinutes: Number.parseInt(item.time) || 5
  }));
}

function feedEditionItems() {
  const items = personalFeedState.items;
  const pageSize = state.personalFeed.appearance.density === "compact" ? 8 : state.personalFeed.appearance.density === "calm" ? 4 : 6;
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  state.personalFeed.page = Math.min(state.personalFeed.page, pageCount - 1);
  return { items, pageSize, pageCount, visible: items.slice(state.personalFeed.page * pageSize, (state.personalFeed.page + 1) * pageSize) };
}

function renderPersonalFeed() {
  const config = state.personalFeed;
  const edition = feedEditionItems();
  const generated = personalFeedState.generatedAt ? new Date(personalFeedState.generatedAt).toLocaleString("tr-TR", { hour: "2-digit", minute: "2-digit" }) : "canlı veri bekleniyor";
  const enabledCount = Object.values(config.engines).filter(Boolean).length;
  const engineStatusMap = Object.fromEntries((personalFeedState.engineStatuses || []).map((entry) => [entry.engine, entry]));
  const engineStatus = (engine, enabled) => enabled ? engineStatusMap[engine] || { engine, status: personalFeedState.status === "loading" ? "checking" : "idle", itemCount: 0, message: personalFeedState.status === "loading" ? "Kontrol ediliyor" : "Baskıyla birlikte kontrol edilecek" } : { engine, status: "off", itemCount: 0, message: "Kapalı" };
  const readyCount = Object.entries(config.engines).filter(([engine, enabled]) => engineStatus(engine, enabled).status === "ready").length;
  const lead = edition.visible[0];
  return `<section class="page personal-feed-page" data-paper="${config.appearance.paper}" data-feed-font="${config.appearance.font}" style="--feed-columns:${config.appearance.columns}">
    <header class="feed-hero"><div><p class="eyebrow">Kişisel gazeten</p><h1 class="page-title">Takip ettiğin dünya,<br>senin baskında.</h1><p class="page-copy">Akademi, finans, haber, YouTube, X köprüleri ve eklediğin RSS kaynakları aynı akışta; sıralama yalnızca seçtiğin ilgi alanlarına göre.</p></div><div class="feed-health"><span class="red-signal"></span><strong>${personalFeedState.status === "loading" ? "Motorlar kontrol ediliyor" : `${readyCount} motor veri getiriyor`}</strong><small>${edition.items.length} içerik · ${enabledCount} motor seçili · ${generated}</small><button class="button" data-feed-refresh ${personalFeedState.status === "loading" ? "disabled" : ""}>${personalFeedState.status === "loading" ? "Kaynaklar okunuyor…" : "Yeni baskı hazırla"}</button></div></header>
    <div class="feed-workspace">
      <main class="newspaper-stage ${feedTurnDirection ? `is-turning-${feedTurnDirection}` : ""}">
        <article class="newspaper-sheet">
          <header class="newspaper-masthead"><span>JOURNEY</span><div><strong>KİŞİSEL BASKI</strong><small>${formatDate()} · Sayı ${String(state.personalFeed.page + 1).padStart(2, "0")}</small></div><span>OS</span></header>
          <div class="newspaper-rule"><span>${config.interests.filter((item) => item.active).slice(0, 4).map((item) => item.label).join(" · ") || "İlgi alanı ekle"}</span><em>${edition.pageCount} sayfa</em></div>
          ${personalFeedState.status === "error" ? `<section class="feed-empty"><h2>Kaynaklara ulaşamadım.</h2><p>${escapeHtml(personalFeedState.error)}</p><button class="button" data-feed-refresh>Tekrar dene</button></section>` : lead ? `<section class="edition-layout">
            <button class="lead-story" data-feed-item="${escapeHtml(lead.id)}" ${lead.url ? "" : "disabled"}><div class="story-kicker">${feedEngineLabels[lead.engine] || lead.engine} · ${escapeHtml(lead.source)}</div><h2>${escapeHtml(lead.title)}</h2><p>${escapeHtml(lead.summary)}</p><div class="story-footer"><span>%${lead.score} eşleşme</span><span>${lead.readingMinutes || 4} dk</span><span>${lead.published ? relativeFeedDate(lead.published) : ""}</span></div><small>${escapeHtml(lead.reason || "")}</small></button>
            <div class="edition-columns">${edition.visible.slice(1).map((item, index) => renderFeedStory(item, index)).join("")}</div>
          </section>` : `<section class="feed-empty"><h2>${personalFeedState.status === "loading" ? "Gerçek kaynaklar okunuyor." : "Bu baskıda içerik yok."}</h2><p>${personalFeedState.status === "loading" ? "Örnek haber göstermeden yeni sonuçları bekliyoruz." : "En az bir motoru aç veya yeni bir RSS kaynağı ekle."}</p></section>`}
          <footer class="newspaper-footer"><span>Kaynaklar otomatik özetlenir; asıl içerik her zaman kaynak sitesinde doğrulanır.</span><strong>${state.personalFeed.page + 1} / ${edition.pageCount}</strong></footer>
          <i class="paper-curl" aria-hidden="true"></i>
        </article>
        <div class="page-turn-controls"><button class="paper-handle previous" data-feed-page="prev" ${state.personalFeed.page === 0 ? "disabled" : ""}><span>←</span><strong>Önceki sayfa</strong></button><div class="page-dots">${Array.from({ length: Math.min(edition.pageCount, 8) }, (_, index) => `<button data-feed-page-index="${index}" class="${index === state.personalFeed.page ? "is-active" : ""}" aria-label="${index + 1}. sayfa"></button>`).join("")}</div><button class="paper-handle next" data-feed-page="next" ${state.personalFeed.page >= edition.pageCount - 1 ? "disabled" : ""}><strong>Sayfayı çevir</strong><span>→</span></button></div>
      </main>
      <aside class="feed-studio">
        <div class="studio-heading"><span>Baskı masası</span><h2>Gazeteni kur</h2><p>İstemediğin motoru kapat. Kaynağı, konuyu ve görünümü sen belirle.</p></div>
        <section class="studio-block"><div class="studio-title"><strong>Motorlar</strong><small>${readyCount} çalışıyor · ${enabledCount} seçili</small></div><div class="engine-switches">${Object.entries(config.engines).map(([engine, enabled]) => { const health = engineStatus(engine, enabled); return `<label class="engine-${health.status}"><span><i>${feedEngineIcon(engine)}</i><b>${feedEngineLabels[engine]}<small>${escapeHtml(health.message)}</small></b></span><input type="checkbox" data-feed-engine="${engine}" ${enabled ? "checked" : ""}><em title="${escapeHtml(health.message)}"></em></label>`; }).join("")}</div>${personalFeedState.errors?.length ? `<div class="engine-alerts">${personalFeedState.errors.map((error) => `<p><strong>${feedEngineLabels[error.engine] || error.engine}</strong>${escapeHtml(error.message)}</p>`).join("")}</div>` : ""}<p class="studio-note">YouTube ve RSS başlangıç kaynakları hazırdır. X doğrudan anahtarsız okunmaz; sosyal motoru için kendi HTTPS RSS köprünü eklemelisin.</p></section>
        <section class="studio-block"><div class="studio-title"><strong>İlgi alanların</strong><small>kırmızı yoğunluk</small></div><div class="interest-list">${config.interests.map((interest) => `<div class="interest-chip ${interest.active ? "" : "is-off"}"><button data-feed-interest-toggle="${interest.id}"><i style="--intensity:${interest.intensity}"></i><span>${escapeHtml(interest.label)}</span></button><button data-feed-interest-remove="${interest.id}" aria-label="Kaldır">×</button></div>`).join("")}</div><form id="feedInterestForm" class="inline-studio-form"><input name="label" required placeholder="Örn. iklim teknolojileri"><select name="intensity"><option value="5">Sık</option><option value="3">Dengeli</option><option value="1">Yalnız önemliyse</option></select><button>+</button></form></section>
        <section class="studio-block"><div class="studio-title"><strong>RSS ve kanal kaynakları</strong><small>${config.sources.length} özel kaynak</small></div><div class="source-mini-list">${config.sources.map((source) => `<div><span>${feedEngineLabels[source.kind] || "RSS"}</span><strong>${escapeHtml(source.label)}</strong><button data-feed-source-remove="${source.id}" aria-label="Kaynağı kaldır">×</button></div>`).join("") || `<p>Henüz özel kaynak eklemedin.</p>`}</div><form id="feedSourceForm" class="source-studio-form"><label>Ad<input name="label" required placeholder="Örn. Favori kanalım"></label><label>Tür<select name="kind"><option value="rss">RSS</option><option value="youtube">YouTube RSS</option><option value="social">X / sosyal RSS</option><option value="news">Haber</option></select></label><label class="source-url">HTTPS RSS / Atom adresi<input name="url" type="url" required placeholder="https://…/feed.xml"></label><button class="button">Kaynağı ekle</button><small class="form-message" data-feed-source-message>Yalnızca genel HTTPS adresleri kabul edilir.</small></form></section>
        <section class="studio-block appearance-studio"><div class="studio-title"><strong>Görünüm</strong><small>anında değişir</small></div><label>Kâğıt<select data-feed-appearance="paper"><option value="ivory" ${config.appearance.paper === "ivory" ? "selected" : ""}>Fildişi</option><option value="white" ${config.appearance.paper === "white" ? "selected" : ""}>Beyaz</option><option value="night" ${config.appearance.paper === "night" ? "selected" : ""}>Gece baskısı</option></select></label><label>Yazı<select data-feed-appearance="font"><option value="editorial" ${config.appearance.font === "editorial" ? "selected" : ""}>Editoryal</option><option value="modern" ${config.appearance.font === "modern" ? "selected" : ""}>Modern</option></select></label><label>Yoğunluk<select data-feed-appearance="density"><option value="calm" ${config.appearance.density === "calm" ? "selected" : ""}>Sakin</option><option value="balanced" ${config.appearance.density === "balanced" ? "selected" : ""}>Dengeli</option><option value="compact" ${config.appearance.density === "compact" ? "selected" : ""}>Yoğun</option></select></label><label>Sütun<select data-feed-appearance="columns"><option value="2" ${Number(config.appearance.columns) === 2 ? "selected" : ""}>2</option><option value="3" ${Number(config.appearance.columns) === 3 ? "selected" : ""}>3</option><option value="4" ${Number(config.appearance.columns) === 4 ? "selected" : ""}>4</option></select></label><label class="motion-toggle"><span>Sayfa çevirme efekti</span><input type="checkbox" data-feed-motion ${config.appearance.motion ? "checked" : ""}><i></i></label></section>
      </aside>
    </div>
  </section>`;
}

function renderFeedStory(item, index) {
  return `<button class="feed-story story-${index + 1}" data-feed-item="${escapeHtml(item.id)}" ${item.url ? "" : "disabled"}><div><span>${feedEngineLabels[item.engine] || item.engine}</span><em>%${item.score}</em></div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.summary)}</p><small>${escapeHtml(item.source)} · ${item.readingMinutes || 4} dk</small></button>`;
}

function feedEngineIcon(engine) { return ({ news: "N", finance: "₺", academic: "A", youtube: "▶", rss: "R", hackernews: "H", social: "X" })[engine] || "•"; }
function relativeFeedDate(value) { const hours = Math.max(0, Math.round((Date.now() - Date.parse(value)) / 3_600_000)); return hours < 1 ? "şimdi" : hours < 24 ? `${hours} sa önce` : `${Math.round(hours / 24)} gün önce`; }

async function refreshPersonalFeed() {
  personalFeedState = { ...personalFeedState, status: "loading", error: "" };
  if (["feed", "today", "video", "academic", "portfolio", "topics", "journey"].includes(route)) render();
  try {
    const payload = { interests: state.personalFeed.interests, engines: state.personalFeed.engines, sources: state.personalFeed.sources, symbols: state.personalFeed.symbols };
    const data = await apiRequest("/api/feed", { method: "POST", body: JSON.stringify(payload) });
    personalFeedState = { status: "ready", items: data.items || [], errors: data.errors || [], generatedAt: data.generatedAt, activeEngines: data.activeEngines || [], engineStatuses: data.engineStatuses || [], error: "" };
    state.personalFeed.page = 0; persist();
  } catch (error) { personalFeedState = { ...personalFeedState, status: "error", error: error.message }; }
  if (["feed", "today", "video", "academic", "portfolio", "topics", "journey"].includes(route)) render();
}

function turnFeedPage(nextPage, direction) {
  const edition = feedEditionItems();
  const page = Math.max(0, Math.min(edition.pageCount - 1, nextPage));
  if (page === state.personalFeed.page) return;
  feedTurnDirection = state.personalFeed.appearance.motion ? direction : "";
  state.personalFeed.page = page; persist(); render();
  if (feedTurnDirection) setTimeout(() => { feedTurnDirection = ""; if (route === "feed") render(); }, 520);
}

function renderProfile() {
  const groups = [["interests", "Merak ettiklerin"], ["grammar", "Sevdiğin anlatım"], ["negatives", "Görmek istemediklerin"]];
  return `<section class="page">
    <header class="split-header"><div><p class="eyebrow">Sana göre ayarla</p><h1 class="page-title">Burası senin gibi konuşsun.</h1></div><p class="page-copy">Neleri görmek istediğini, nasıl anlatılmasını sevdiğini ve ne zaman sessiz kalması gerektiğini buradan seç.</p></header>
    <div class="profile-sheet">${groups.map(([key, title]) => `<section class="profile-section"><div class="section-title-row"><h3>${title}</h3><button class="icon-button" data-add-tag="${key}" aria-label="${title} ekle">+</button></div><div class="tag-list">${state.profile[key].map((tag) => `<button class="tag" data-remove-tag="${key}:${escapeHtml(tag)}" title="Kaldır">${tag} ×</button>`).join("")}</div></section>`).join("")}
      <section class="profile-section"><h3>Seçkilerin dengesi</h3><div class="balance"><span style="--value:60">%60 <small>Doğrudan ilgili</small></span><span style="--value:20">%20 <small>Yeni bağlantı</small></span><span style="--value:10">%10 <small>Karşı görüş</small></span><span style="--value:10">%10 <small>Sürpriz</small></span></div></section>
    </div>
    <section class="settings-section"><div class="settings-heading"><div><p class="eyebrow">Benimle nasıl konuşsun?</p><h2>Dili de sana uysun.</h2></div><p>Kısa, açık ve gündelik bir anlatım seçebilirsin. Bu tercih özetlerin ve açıklamaların tonunu belirler.</p></div><div class="language-preferences"><label><span>Üslup</span><select data-communication="tone">${["Açık ve doğal", "Sıcak ve sohbet gibi", "Daha ciddi"].map((value) => `<option ${state.profile.communication.tone === value ? "selected" : ""}>${value}</option>`).join("")}</select></label><label><span>Ayrıntı</span><select data-communication="detail">${["Önce kısa özet", "Biraz ayrıntılı", "Doğrudan tam içerik"].map((value) => `<option ${state.profile.communication.detail === value ? "selected" : ""}>${value}</option>`).join("")}</select></label><label><span>Hitap</span><select data-communication="address">${["Cihan diye hitap et", "İsim kullanma", "Yalnızca günaydın de"].map((value) => `<option ${state.profile.communication.address === value ? "selected" : ""}>${value}</option>`).join("")}</select></label></div></section>
    <section class="settings-section"><div class="settings-heading"><div><p class="eyebrow">Kırmızı noktalar</p><h2>Bugün ne kadar yer kaplasın?</h2></div><p>Her konu için ne kadar içerik görmek istediğini seç. Beş nokta “bunu sık göster”, bir nokta “yalnızca gerçekten önemliyse göster” demek.</p></div><div class="preference-matrix">${Object.entries(state.topicPreferences).map(([key, preference]) => preferenceRow(key, preference)).join("")}</div></section>
    <section class="settings-section"><div class="settings-heading"><div><p class="eyebrow">Bildirimler</p><h2>Yalnızca gerçekten gerekliyse</h2></div><p>Kayda değer bir gelişme yoksa seni rahatsız etmez.</p></div><div class="notification-grid">
      ${notificationRow("daily", "Günlük sayı", "5-8 yüksek değerli içerik", `<input type="time" value="${state.notifications.dailyTime}" data-daily-time>`)}
      ${notificationRow("critical", "Önemli gelişme", "Bir konu veya portföy fikrini değiştirebilir")}
      ${notificationRow("weekend", "Hafta sonu seçkisi", "Video, makale, film ve kontrollü keşif")}
      ${notificationRow("quiet", "Sessiz kal", "Anlamlı değişiklik yoksa bildirim gönderme")}
    </div></section>
    <section class="settings-section"><div class="settings-heading"><div><p class="eyebrow">Senin hakkında öğrendiklerim</p><h2>Kontrol her zaman sende.</h2></div><button class="button ghost" id="exportProfile">Verilerimi dışa aktar</button></div><div class="memory-list">${state.memories.map((memory) => `<article class="memory-row"><span class="memory-type">${memory.type}</span><p>${memory.text}</p><span class="memory-status ${memory.status}">${memory.status === "approved" ? "Onaylı" : "Onay bekliyor"}</span><div class="actions">${memory.status === "pending" ? `<button class="button" data-memory-approve="${memory.id}">Onayla</button>` : ""}<button class="icon-button" data-memory-delete="${memory.id}" aria-label="Hafızayı sil">×</button></div></article>`).join("")}</div></section>
    <section class="settings-section schedule-studio"><div class="settings-heading"><div><p class="eyebrow">Araştırma ve bildirim programları</p><h2>Ne zaman araştırıp haber versin?</h2></div><p>Yerel MVP'de programlar tarayıcı açıkken çalışır. Sonraki sunucu sürümünde tarayıcı kapalıyken de devam eder.</p></div><form id="scheduleForm" class="schedule-form" novalidate><label>Ne araştırsın?<input name="title" required placeholder="Örn. NVDA tezini etkileyen haberler"></label><label>Konu<select name="topic">${state.journeys.map((journey) => `<option>${journey.title}</option>`).join("")}<option>Portföy</option></select></label><label>Sıklık<select name="frequency"><option value="hourly">Saat başı</option><option value="daily">Her gün</option><option value="weekly">Her hafta</option></select></label><label>Saat<input name="time" type="time" value="09:00"></label><label>Nerede?<select name="channel"><option>Uygulama</option><option>Tarayıcı bildirimi</option><option>E-posta (yakında)</option></select></label><button class="button primary">Program ekle</button><small class="form-message" data-schedule-message>Programı kaydettikten sonra “Şimdi çalıştır” ile hemen deneyebilirsin.</small></form><div class="schedule-list">${state.researchSchedules.map(renderSchedule).join("") || `<div class="empty">Henüz araştırma programı yok.</div>`}</div>${state.researchReports.length ? `<div class="recent-reports"><p class="section-label">Son raporlar</p>${state.researchReports.slice(0,3).map((report) => `<button data-report-id="${report.id}"><span>${report.date}</span><strong>${report.title}</strong><small>${report.summary}</small></button>`).join("")}</div>` : ""}</section>
    <section class="settings-section mvp-lab"><div class="settings-heading"><div><p class="eyebrow">MVP test alanı</p><h2>Her durumu tek tek dene.</h2></div><p>Bu düğmeler yalnızca yerel demo verisini değiştirir. İstediğin zaman başlangıç verisine dönebilirsin.</p></div><div class="test-grid">
      <button data-test-route="video:idle"><span>Video</span><strong>Boş durumu</strong><small>Bağlantı eklenmeden önce</small></button>
      <button data-test-route="video:processing"><span>Video</span><strong>Yükleniyor durumu</strong><small>İşlem devam ederken</small></button>
      <button data-test-route="video:error"><span>Video</span><strong>Hata durumu</strong><small>Geçersiz bağlantı</small></button>
      <button data-test-route="video:ready"><span>Video</span><strong>Başarılı durum</strong><small>Döküm ve soru-cevap</small></button>
      <button data-test-route="academic:limited"><span>Okumalar</span><strong>Kısıtlı erişim</strong><small>Yalnızca özet varsa</small></button>
      <button data-test-route="library:empty"><span>Arşiv</span><strong>Boş durum</strong><small>Henüz kayıt yoksa</small></button>
      <button data-test-route="topics:new"><span>Konularım</span><strong>Yeni konu formu</strong><small>Zorunlu alanları dene</small></button>
      <button data-test-route="topics:event"><span>Konularım</span><strong>Kanıt / not formu</strong><small>Zaman çizgisine ekle</small></button>
      <button data-test-route="topics:hypothesis"><span>Konularım</span><strong>Düşünceyi güncelle</strong><small>Önceki hâli koru</small></button>
      <button data-test-route="today:feedback"><span>Bugün</span><strong>Geri bildirim formu</strong><small>Tercih kaydını dene</small></button>
      <button data-test-route="content:attach"><span>İçerik</span><strong>Konuya bağlama</strong><small>Notla birlikte kaydet</small></button>
      <button data-test-route="explore:validation"><span>Keşfet</span><strong>Arama ve doğrulama</strong><small>Boş, yükleniyor ve sonuç</small></button>
      <button data-test-route="profile:tag"><span>Ayarlar</span><strong>Tercih ekleme</strong><small>Yeni merak ekle</small></button>
    </div><div class="test-footer"><span>Değişiklikler bu tarayıcıda saklanır.</span><button class="button ghost" id="resetDemo">Başlangıç verisine dön</button></div></section>
  </section>`;
}

function renderSchedule(schedule) {
  const frequency = { hourly: "Saat başı", daily: "Her gün", weekly: "Her hafta" }[schedule.frequency] || schedule.frequency;
  return `<article class="schedule-row ${schedule.enabled ? "" : "is-muted"}"><button class="schedule-toggle ${schedule.enabled ? "is-active" : ""}" data-schedule-toggle="${schedule.id}" aria-label="Programı aç veya kapat"><i></i></button><div><strong>${schedule.title}</strong><span>${schedule.topic} · ${frequency}${schedule.time ? ` · ${schedule.time}` : ""} · ${schedule.channel}</span><small>${schedule.lastRun ? `Son rapor: ${schedule.lastRun}` : "Henüz çalışmadı"}</small></div><div class="actions"><button class="button" data-schedule-run="${schedule.id}">Şimdi çalıştır</button><button class="icon-button" data-schedule-delete="${schedule.id}" aria-label="Programı sil">×</button></div></article>`;
}

function notificationRow(key, title, copy, extra = "") {
  return `<label class="notification-row"><span><strong>${title}</strong><small>${copy}</small></span>${extra}<input type="checkbox" data-notification="${key}" ${state.notifications[key] ? "checked" : ""}><i></i></label>`;
}
function preferenceRow(key, preference) {
  const modesByTopic = {
    portfolio: ["Kritik değişim", "Günlük özet", "Sessiz"], video: ["Derinleşme", "Hafif", "Bölüm önerisi"], academic: ["Birincil kaynak", "Karşı tez", "Yeni yayın"], history: ["Keşif", "Derinleşme", "Karşı tez"], cinema: ["Hafif", "Film gecesi", "Keşif"]
  };
  return `<article class="preference-row ${preference.active ? "" : "is-muted"}"><button class="topic-power" data-topic-active="${key}" aria-label="${preference.label} konusunu aç veya dinlendir"><span class="red-signal"></span></button><div><strong>${preference.label}</strong><small>${preference.intensity >= 5 ? "Bunu sık göster" : preference.intensity >= 3 ? "Dengeli göster" : "Yalnızca önemliyse"}</small></div><div class="red-meter" aria-label="${preference.label} görünürlük düzeyi">${[1,2,3,4,5].map((value) => `<button class="${value <= preference.intensity ? "is-active" : ""}" data-topic-intensity="${key}:${value}" aria-label="${value} seviye"></button>`).join("")}</div><select data-topic-mode="${key}">${modesByTopic[key].map((mode) => `<option ${preference.mode === mode ? "selected" : ""}>${mode}</option>`).join("")}</select></article>`;
}
function averageScore(score) { return Math.round(Object.values(score).reduce((sum, value) => sum + value, 0) / Object.values(score).length); }
function scoreBars(score, compact = false) {
  const labels = { relevance: "İlgi", novelty: "Yenilik", impact: "Önem", trust: "Kaynak", mode: "Bugüne uygun" };
  const entries = compact ? Object.entries(score).slice(0, 3) : Object.entries(score);
  return entries.map(([key, value]) => `<div class="score-bar"><span>${labels[key]}</span><i><b style="width:${value}%"></b></i><em>${value}</em></div>`).join("");
}

function isYouTubeUrl(value) {
  try { const host = new URL(value).hostname.replace(/^www\./, ""); return host === "youtube.com" || host === "m.youtube.com" || host === "youtu.be"; } catch { return false; }
}
function setVideoDemo(status) {
  const presets = {
    idle: { status: "idle", url: "", error: "", question: "", answer: "" },
    processing: { status: "processing", url: "https://youtube.com/watch?v=demo", error: "", question: "", answer: "" },
    error: { status: "error", url: "https://example.com/video", error: "Bu bir YouTube bağlantısı değil. youtube.com veya youtu.be adresi kullan.", question: "", answer: "" },
    ready: { status: "ready", url: "https://youtube.com/watch?v=demo", title: "AI yatırımlarının görünmeyen sınırı", error: "", question: "", answer: "" }
  };
  state.videoJob = { ...state.videoJob, ...presets[status] }; persist(); render();
}
function openRecommendation(kind, index) {
  const descriptions = {
    portfolio: ["Enerji anlaşmalarının teslimat takvimine etkisini portföy notuna ekleyebilirsin.", "HBM kapasitesi için yeni şirket açıklamasını inceleyebilirsin.", "MP tezi için marj baskısını gösteren karşı kanıtı okuyabilirsin."],
    video: ["Tarih ve güç konunla doğrudan bağlantılı 13 dakikalık bir bölüm.", "Mevcut düşünceni sınayan, kaynaklı bir karşı görüş.", "Yoğun olmayan bir gün için hafif ama nitelikli bir sohbet."],
    academic: ["Enerji talebi için doğrudan birincil veri.", "AI verimliliği konusunda güçlü bir karşı görüş.", "Kurumlar ve güç ilişkileri için geniş kapsamlı bir çalışma."]
  };
  const text = descriptions[kind]?.[index] || "Bu içerik ilgilendiğin konulara göre seçildi.";
  showModal(`<div class="modal-form compact"><p class="eyebrow">Neden sana göre?</p><h2>${text}</h2><p class="modal-copy">Bu MVP'de öneri kartı ayrıntı, kaydetme ve konuya bağlama akışlarını göstermek için açılır.</p><div class="actions"><button class="button ghost" data-close-modal>Şimdilik geç</button><button class="button" data-demo-save>Arşive kaydet</button><button class="button primary" data-route="explore">Benzerlerini bul</button></div></div>`);
  modalRoot.querySelector("[data-demo-save]")?.addEventListener("click", () => { closeModal(); showToast("Öneri arşive kaydedildi"); });
}

function openResetDemo() {
  showModal(`<div class="modal-form compact"><p class="eyebrow">Başlangıç verisine dön</p><h2>Yaptığın bütün yerel denemeler silinsin mi?</h2><p class="modal-copy">Eklediğin konular, geri bildirimler ve ayarlar başlangıç örneğine döner.</p><div class="actions"><button class="button ghost" data-close-modal>Vazgeç</button><button class="button primary" data-confirm-reset>Evet, sıfırla</button></div></div>`);
  modalRoot.querySelector("[data-confirm-reset]")?.addEventListener("click", () => { localStorage.removeItem("journey-os-state"); location.hash = "today"; location.reload(); });
}

function saveActiveRecommendation(decision) {
  const item = getRecommendations()[state.recommendationIndex]; if (!item) return;
  if (decision === "skip") { state.recommendationIndex = Math.min(state.recommendationIndex + 1, Math.max(0, getRecommendations().length - 1)); persist(); render(); showToast("Bu öneri geçildi"); return; }
  const id = `rec-${Date.now()}`;
  const activeJourney = journeyById(state.activeJourney) || state.journeys[0];
  state.items.unshift({ id, url: item.url, type: item.type, journeyId: decision === "attach" ? activeJourney.id : "", journey: decision === "attach" ? activeJourney.title : "Bağlanmadı", title: item.title, summary: item.summary, deepSummary: item.why, source: item.source, time: `${item.minutes} dk`, state: "saved", confidence: item.trust >= 95 ? "Yüksek" : "Orta", claims: [item.summary], chapters: ["Özet", "Kaynak", "Konuyla bağlantısı"], score: { relevance: item.match, novelty: item.novelty, impact: 86, trust: item.trust, mode: item.match } });
  state.saved.push(id);
  if (decision === "attach") activeJourney.events.unshift({ date: `${formatDate()} · Bugün`, title: `${item.title} konuya eklendi`, text: item.why, kind: "Seçki" });
  persist(); showToast(decision === "attach" ? `${activeJourney.title} konusuna eklendi` : "Arşive kaydedildi");
}

function nextScheduleTime(frequency) {
  const hours = frequency === "hourly" ? 1 : frequency === "daily" ? 24 : 168;
  return Date.now() + hours * 60 * 60 * 1000;
}
function runSchedule(id, automatic = false) {
  const schedule = state.researchSchedules.find((item) => item.id === id); if (!schedule || !schedule.enabled) return;
  const report = { id: `report-${Date.now()}`, title: schedule.title, date: new Date().toLocaleString("tr-TR", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }), summary: `${schedule.topic} için 3 kaynak incelendi; 1 önemli değişiklik ve 1 karşı görüş bulundu.` };
  state.researchReports.unshift(report); schedule.lastRun = report.date; schedule.nextRun = nextScheduleTime(schedule.frequency); persist();
  if (schedule.channel === "Tarayıcı bildirimi" && "Notification" in window) {
    const send = () => { if (Notification.permission === "granted") new Notification(schedule.title, { body: report.summary }); };
    if (Notification.permission === "default" && !automatic) Notification.requestPermission().then(send); else send();
  }
  if (!automatic) { render(); showToast("Araştırma raporu hazır"); }
}
function openReport(id) {
  const report = state.researchReports.find((item) => item.id === id); if (!report) return;
  showModal(`<div class="modal-form compact"><p class="eyebrow">${escapeHtml(report.date)}</p><h2>${escapeHtml(report.title)}</h2><p class="deep-summary">${escapeHtml(report.summary)}</p><div class="report-live-items">${report.items?.length ? report.items.map((item) => `<button class="button" data-report-url="${escapeHtml(item.url || "")}">${escapeHtml(item.title)} · ${escapeHtml(item.source || "kaynak")}</button>`).join("") : `<p>Bu raporda açılabilir kaynak kaydı bulunmuyor.</p>`}</div><button class="button primary" data-close-modal>Kapat</button></div>`);
  modalRoot.querySelectorAll("[data-report-url]").forEach((button) => button.addEventListener("click", () => { if (button.dataset.reportUrl) window.open(button.dataset.reportUrl, "_blank", "noopener,noreferrer"); }));
}function runDueSchedules() {
  state.researchSchedules.filter((schedule) => schedule.enabled && schedule.nextRun && Number(schedule.nextRun) <= Date.now()).forEach((schedule) => runSchedule(schedule.id, true));
}

function runTestRoute(value) {
  const [area, stateName] = value.split(":");
  closeModal();
  if (area === "video") { setRoute("video"); setVideoDemo(stateName); return; }
  if (area === "library") { state.demoEmptyLibrary = true; persist(); setRoute("library"); return; }
  if (area === "academic") { state.academicTopic = "Tarih & güç"; persist(); setRoute("academic"); setTimeout(() => openPaper("paper-power"), 30); return; }
  if (area === "topics") { setRoute("topics"); setTimeout(() => stateName === "new" ? openJourneyForm() : stateName === "event" ? openEventForm(state.activeJourney) : openHypothesisForm(state.activeJourney), 30); return; }
  if (area === "today") { setRoute("today"); setTimeout(() => openFeedback(state.items[0].id), 30); }
  if (area === "content") { setRoute("library"); setTimeout(() => openAttachForm(state.items[0].id), 30); return; }
  if (area === "explore") { exploreResults = []; exploreQuery = ""; exploreSearched = false; setRoute("explore"); return; }
  if (area === "profile") { setRoute("profile"); setTimeout(() => openTagForm("interests"), 30); }
}

function bindViewEvents() {
  document.querySelectorAll("[data-feed-refresh]").forEach((button) => button.addEventListener("click", refreshPersonalFeed));
  document.querySelectorAll("[data-feed-page]").forEach((button) => button.addEventListener("click", () => turnFeedPage(state.personalFeed.page + (button.dataset.feedPage === "next" ? 1 : -1), button.dataset.feedPage)));
  document.querySelectorAll("[data-feed-page-index]").forEach((button) => button.addEventListener("click", () => turnFeedPage(Number(button.dataset.feedPageIndex), Number(button.dataset.feedPageIndex) > state.personalFeed.page ? "next" : "prev")));
  document.querySelectorAll("[data-feed-item]").forEach((button) => button.addEventListener("click", () => { const item = personalFeedState.items.find((entry) => entry.id === button.dataset.feedItem); if (item?.url) window.open(item.url, "_blank", "noopener,noreferrer"); }));
  document.querySelectorAll("[data-live-url]").forEach((button) => button.addEventListener("click", () => window.open(button.dataset.liveUrl, "_blank", "noopener,noreferrer")));
  document.querySelectorAll("[data-feed-engine]").forEach((input) => input.addEventListener("change", () => { state.personalFeed.engines[input.dataset.feedEngine] = input.checked; state.personalFeed.page = 0; persist(); render(); refreshPersonalFeed(); }));
  document.querySelectorAll("[data-feed-interest-toggle]").forEach((button) => button.addEventListener("click", () => { const interest = state.personalFeed.interests.find((item) => item.id === button.dataset.feedInterestToggle); if (!interest) return; interest.active = !interest.active; persist(); render(); refreshPersonalFeed(); }));
  document.querySelectorAll("[data-feed-interest-remove]").forEach((button) => button.addEventListener("click", () => { state.personalFeed.interests = state.personalFeed.interests.filter((item) => item.id !== button.dataset.feedInterestRemove); persist(); render(); refreshPersonalFeed(); }));
  document.querySelector("#feedInterestForm")?.addEventListener("submit", (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const label = data.get("label").trim(); if (!label) return; state.personalFeed.interests.push({ id: `interest-${Date.now()}`, label, keywords: label.split(/[,\s]+/).filter((word) => word.length > 2), intensity: Number(data.get("intensity")), active: true }); persist(); render(); refreshPersonalFeed(); });
  document.querySelectorAll("[data-feed-source-remove]").forEach((button) => button.addEventListener("click", () => { state.personalFeed.sources = state.personalFeed.sources.filter((item) => item.id !== button.dataset.feedSourceRemove); persist(); render(); refreshPersonalFeed(); }));
  document.querySelector("#feedSourceForm")?.addEventListener("submit", async (event) => { event.preventDefault(); const form = event.currentTarget; const data = new FormData(form); const message = form.querySelector("[data-feed-source-message]"); try { const url = new URL(data.get("url")); if (url.protocol !== "https:") throw new Error("Kaynak HTTPS ile başlamalı."); const kind = data.get("kind"); state.personalFeed.sources.push({ id: `source-${Date.now()}`, label: data.get("label").trim(), kind, url: url.href, enabled: true }); if (kind in state.personalFeed.engines) state.personalFeed.engines[kind] = true; persist(); render(); await refreshPersonalFeed(); showToast("Yeni kaynak baskıya eklendi"); } catch (error) { message.textContent = error.message; message.classList.add("is-error"); } });
  document.querySelectorAll("[data-feed-appearance]").forEach((select) => select.addEventListener("change", () => { const key = select.dataset.feedAppearance; state.personalFeed.appearance[key] = key === "columns" ? Number(select.value) : select.value; state.personalFeed.page = 0; persist(); render(); }));
  document.querySelector("[data-feed-motion]")?.addEventListener("change", (event) => { state.personalFeed.appearance.motion = event.target.checked; persist(); });
  document.querySelectorAll("[data-ticker]").forEach((button) => button.addEventListener("click", () => { state.activeTicker = button.dataset.ticker; state.portfolioPoint = 9999; persist(); render(); if (!livePortfolio[state.activeTicker]) refreshLivePortfolio(state.activeTicker); }));
  document.querySelectorAll("[data-range]").forEach((button) => button.addEventListener("click", () => { state.portfolioRange = button.dataset.range; state.portfolioPoint = 9999; persist(); render(); refreshPortfolioWatchlist(); }));
  document.querySelectorAll("[data-portfolio-point]").forEach((button) => button.addEventListener("click", () => { state.portfolioPoint = Number(button.dataset.portfolioPoint); persist(); render(); }));
  document.querySelectorAll("[data-portfolio-panel]").forEach((button) => button.addEventListener("click", () => { state.portfolioPanel = button.dataset.portfolioPanel; persist(); render(); }));
  document.querySelector("#portfolioAddForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const message = form.querySelector("[data-portfolio-message]");
    const ticker = String(new FormData(form).get("ticker") || "").trim().toUpperCase().replace(/[^A-Z0-9.\-]/g, "");
    const tickers = portfolioWatchlist();
    if (!ticker) { message.textContent = "Geçerli bir piyasa sembolü yaz."; message.classList.add("is-error"); return; }
    if (tickers.includes(ticker)) { message.textContent = `${ticker} zaten portföyünde.`; message.classList.add("is-error"); return; }
    if (tickers.length >= 8) { message.textContent = "Portföy en fazla 8 sembol içerebilir."; message.classList.add("is-error"); return; }
    message.textContent = `${ticker} canlı piyasada doğrulanıyor…`; message.classList.remove("is-error");
    try {
      const data = await apiRequest(`/api/portfolio/${encodeURIComponent(ticker)}?range=${encodeURIComponent(state.portfolioRange)}`);
      state.personalFeed.symbols.push(ticker);
      state.portfolioNotes[ticker] ||= { thesis: "Henüz bir yatırım düşüncesi yazmadın.", note: "Neyi takip etmek istediğini buraya yaz.", risk: "İzlemek istediğin riski ekle." };
      state.activeTicker = ticker; state.portfolioPoint = 9999;
      livePortfolio[ticker] = { status: "ready", data, refreshing: false, refreshError: "" };
      persist(); render(); showToast(`${ticker} portföye eklendi`);
    } catch (error) { message.textContent = `Sembol doğrulanamadı: ${error.message}`; message.classList.add("is-error"); }
  });
  document.querySelectorAll("[data-remove-ticker]").forEach((button) => button.addEventListener("click", (event) => {
    event.stopPropagation();
    const ticker = button.dataset.removeTicker;
    state.personalFeed.symbols = portfolioWatchlist().filter((symbol) => symbol !== ticker);
    delete livePortfolio[ticker];
    if (state.activeTicker === ticker) state.activeTicker = state.personalFeed.symbols[0] || "";
    persist(); render(); showToast(`${ticker} portföyden kaldırıldı`);
  }));
  document.querySelector("#portfolioNoteForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    state.portfolioNotes[state.activeTicker] = { thesis: data.get("thesis").trim(), note: data.get("note").trim(), risk: data.get("risk").trim() };
    state.portfolioPanel = "overview"; persist(); render(); showToast("Portföy notun kaydedildi");
  });  document.querySelectorAll("[data-academic-topic]").forEach((button) => button.addEventListener("click", () => { state.academicTopic = button.dataset.academicTopic; persist(); render(); refreshLiveAcademic(); }));
  document.querySelector("[data-academic-sort]")?.addEventListener("change", (event) => { state.academicSort = event.target.value; persist(); render(); showToast("Okumalar yeniden sıralandı"); });
  document.querySelector("#videoIngestForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const url = new FormData(event.currentTarget).get("url").trim();
    if (!url || !isYouTubeUrl(url)) { state.videoJob = { ...state.videoJob, status: "error", url, error: !url ? "Önce bir YouTube bağlantısı ekle." : "youtube.com veya youtu.be bağlantısı kullan." }; persist(); render(); return; }
    state.videoJob = { status: "processing", url, title: "", error: "", answer: "", question: "", segments: [] }; persist(); render();
    try {
      const data = await apiRequest("/api/videos/transcript", { method: "POST", body: JSON.stringify({ url }) });
      const segments = (data.segments || []).map((segment) => ({ time: segment.time, speaker: "Konuşma", text: segment.text }));
      if (!segments.length) throw new Error("Bu videoda kullanılabilir altyazı bulunamadı.");
      liveTranscriptSegments = segments;
      state.videoJob = { ...state.videoJob, status: "ready", title: data.title || `YouTube videosu · ${(data.language || "").toUpperCase()} altyazı`, segments };
      persist(); render(); showToast("Gerçek video altyazısı hazır");
    } catch (error) { state.videoJob = { ...state.videoJob, status: "error", error: error.message, segments: [] }; persist(); render(); }
  });
  document.querySelectorAll("[data-video-summary]").forEach((button) => button.addEventListener("click", () => {
    const segments = state.videoJob.segments || [];
    const text = segments.slice(0, 6).map((segment) => `<p><strong>${escapeHtml(segment.time)}</strong> ${escapeHtml(segment.text)}</p>`).join("");
    showModal(`<div class="modal-form compact"><p class="eyebrow">Videonun gerçek ilk bölümleri</p><h2>${escapeHtml(state.videoJob.title || "Video dökümü")}</h2><div class="deep-summary">${text || "Altyazı bulunamadı."}</div><button class="button primary" data-close-modal>Tamam</button></div>`);
  }));
  document.querySelector("#transcriptQuestion")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = new FormData(event.currentTarget).get("question").trim(); if (!question) return;
    const keywords = question.toLocaleLowerCase("tr").split(/\s+/).filter((word) => word.length > 3);
    const matches = (state.videoJob.segments || []).map((segment) => ({ ...segment, hits: keywords.filter((word) => segment.text.toLocaleLowerCase("tr").includes(word)).length })).filter((segment) => segment.hits).sort((a, b) => b.hits - a.hits).slice(0, 3);
    state.videoJob.question = question;
    state.videoJob.answer = matches.length ? matches.map((segment) => `${segment.time}: ${segment.text}`).join(" · ") : "Bu ifadeyle eşleşen bir altyazı bölümü bulunamadı. Daha kısa anahtar kelimelerle tekrar ara.";
    persist(); render();
  });
  document.querySelector("#transcriptSearch")?.addEventListener("input", (event) => { const query = event.target.value.toLocaleLowerCase("tr"); document.querySelectorAll("[data-transcript-text]").forEach((row) => row.hidden = Boolean(query) && !row.dataset.transcriptText.includes(query)); });
  document.querySelector("#videoNoteForm")?.addEventListener("submit", (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); state.videoNotes.unshift({ id: `video-note-${Date.now()}`, title: data.get("title").trim(), text: data.get("text").trim(), videoUrl: state.videoJob.url || "", createdAt: new Date().toISOString() }); persist(); render(); showToast("Video notun kaydedildi"); });
  document.querySelectorAll("[data-video-note-remove]").forEach((button) => button.addEventListener("click", () => { state.videoNotes = state.videoNotes.filter((note) => note.id !== button.dataset.videoNoteRemove); persist(); render(); showToast("Not silindi"); }));
  document.querySelectorAll("[data-recommendation]").forEach((button) => button.addEventListener("click", () => { const [kind, index] = button.dataset.recommendation.split(":"); openRecommendation(kind, Number(index)); }));
  document.querySelectorAll("#recommendationForm select").forEach((select) => select.addEventListener("change", () => { state.recommendationSettings[select.name] = select.value; state.recommendationIndex = 0; persist(); render(); refreshLiveRecommendations(); }));
  document.querySelectorAll("#recommendationForm input[type='range']").forEach((input) => { input.addEventListener("input", () => { input.closest("label").querySelector("output").textContent = `${input.value}%`; state.recommendationSettings[input.name] = Number(input.value); persist(); }); input.addEventListener("change", () => { state.recommendationIndex = 0; render(); refreshLiveRecommendations(); }); });
  document.querySelectorAll("#recommendationForm input[name='formats']").forEach((input) => input.addEventListener("change", () => { state.recommendationSettings.formats = [...document.querySelectorAll("#recommendationForm input[name='formats']:checked")].map((item) => item.value); state.recommendationIndex = 0; persist(); render(); refreshLiveRecommendations(); }));
  document.querySelectorAll("[data-source-id]").forEach((input) => input.addEventListener("change", () => { const id = input.dataset.sourceId; state.recommendationSettings.sources = input.checked ? [...new Set([...state.recommendationSettings.sources, id])] : state.recommendationSettings.sources.filter((source) => source !== id); state.recommendationIndex = 0; persist(); render(); refreshLiveRecommendations(); }));
  document.querySelectorAll("[data-rec-page]").forEach((button) => button.addEventListener("click", () => { const count = getRecommendations().length; state.recommendationIndex = button.dataset.recPage === "next" ? Math.min(count - 1, state.recommendationIndex + 1) : Math.max(0, state.recommendationIndex - 1); persist(); render(); }));
  document.querySelectorAll("[data-rec-decision]").forEach((button) => button.addEventListener("click", () => saveActiveRecommendation(button.dataset.recDecision)));
  document.querySelector("[data-refresh-recommendations]")?.addEventListener("click", refreshLiveRecommendations);
  document.querySelector("[data-refresh-academic]")?.addEventListener("click", refreshLiveAcademic);
  document.querySelector("[data-refresh-portfolio]")?.addEventListener("click", refreshPortfolioWatchlist);
  document.querySelectorAll("[data-paper]").forEach((button) => button.addEventListener("click", () => openPaper(button.dataset.paper)));
  document.querySelectorAll("[data-cite-paper]").forEach((button) => button.addEventListener("click", () => openCitation(button.dataset.citePaper)));
  document.querySelectorAll("[data-mode]").forEach((button) => button.addEventListener("click", () => { state.mode = button.dataset.mode; persist(); render(); showToast(`Mod: ${button.textContent}`); }));
  document.querySelectorAll("[data-today-journey]").forEach((button) => button.addEventListener("click", () => { state.activeJourney = button.dataset.todayJourney; persist(); render(); }));
  document.querySelectorAll("[data-select-journey]").forEach((button) => button.addEventListener("click", () => { state.activeJourney = button.dataset.selectJourney; persist(); render(); }));
  document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => { state.libraryFilter = button.dataset.filter; persist(); render(); }));
  document.querySelectorAll("[data-content]").forEach((button) => button.addEventListener("click", (event) => { event.stopPropagation(); openContent(button.dataset.content); }));
  document.querySelectorAll("[data-content-card]").forEach((card) => card.addEventListener("click", () => openContent(card.dataset.contentCard)));
  document.querySelectorAll("[data-decision]").forEach((button) => button.addEventListener("click", (event) => { event.stopPropagation(); const [id, decision] = button.dataset.decision.split(":"); applyDecision(id, decision); }));
  document.querySelectorAll("[data-open-feedback]").forEach((button) => button.addEventListener("click", () => openFeedback(button.dataset.openFeedback)));
  document.querySelector("#quickPrompt")?.addEventListener("submit", (event) => { event.preventDefault(); const query = new FormData(event.currentTarget).get("prompt").trim(); if (!query) return; setRoute("explore"); runExploreSearch(query); });
  document.querySelector("#newJourney")?.addEventListener("click", openJourneyForm);
  document.querySelector("[data-edit-hypothesis]")?.addEventListener("click", (event) => openHypothesisForm(event.currentTarget.dataset.editHypothesis));
  document.querySelector("[data-add-event]")?.addEventListener("click", (event) => openEventForm(event.currentTarget.dataset.addEvent));
  document.querySelectorAll("[data-explore-option]").forEach((chip) => chip.addEventListener("click", () => { const key = chip.dataset.exploreOption; exploreQuery = document.querySelector("#exploreForm textarea")?.value || exploreQuery; state.exploreOptions[key] = !state.exploreOptions[key]; persist(); render(); }));
  document.querySelectorAll("[data-example]").forEach((button) => button.addEventListener("click", () => { const field = document.querySelector("#exploreForm textarea"); field.value = button.dataset.example; field.focus(); }));
  document.querySelector("#exploreForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = new FormData(event.currentTarget).get("query").trim();
    const message = document.querySelector("#exploreMessage");
    if (query.split(/\s+/).filter(Boolean).length < 3) { message.textContent = "Biraz daha ayrıntı ver; en az üç kelime yaz."; message.classList.add("is-error"); event.currentTarget.querySelector("textarea").focus(); return; }
    await runExploreSearch(query);
  });  document.querySelector("[data-clear-results]")?.addEventListener("click", () => { exploreResults = []; exploreQuery = ""; exploreError = ""; exploreLoading = false; exploreSearched = false; render(); });
  document.querySelectorAll("[data-research-save]").forEach((button) => button.addEventListener("click", () => saveResearchResult(Number(button.dataset.researchSave), false)));
  document.querySelectorAll("[data-research-attach]").forEach((button) => button.addEventListener("click", () => saveResearchResult(Number(button.dataset.researchAttach), true)));
  document.querySelectorAll("[data-research-skip]").forEach((button) => button.addEventListener("click", () => { exploreResults.splice(Number(button.dataset.researchSkip), 1); render(); showToast("Sonuç elendi"); }));
  document.querySelectorAll("[data-add-tag]").forEach((button) => button.addEventListener("click", () => openTagForm(button.dataset.addTag)));
  document.querySelectorAll("[data-remove-tag]").forEach((button) => button.addEventListener("click", () => { const split = button.dataset.removeTag.indexOf(":"); const key = button.dataset.removeTag.slice(0, split); const tag = button.dataset.removeTag.slice(split + 1); state.profile[key] = state.profile[key].filter((item) => item !== tag); persist(); render(); }));
  document.querySelectorAll("[data-notification]").forEach((input) => input.addEventListener("change", () => { state.notifications[input.dataset.notification] = input.checked; persist(); showToast("Bildirim tercihi güncellendi"); }));
  document.querySelector("[data-daily-time]")?.addEventListener("change", (event) => { state.notifications.dailyTime = event.target.value; persist(); });
  document.querySelectorAll("[data-memory-approve]").forEach((button) => button.addEventListener("click", () => { const memory = state.memories.find((item) => item.id === button.dataset.memoryApprove); memory.status = "approved"; persist(); render(); showToast("Çıkarım onaylandı"); }));
  document.querySelectorAll("[data-memory-delete]").forEach((button) => button.addEventListener("click", () => { state.memories = state.memories.filter((item) => item.id !== button.dataset.memoryDelete); persist(); render(); showToast("Hafızadan silindi"); }));
  document.querySelectorAll("[data-topic-intensity]").forEach((button) => button.addEventListener("click", () => { const [key, value] = button.dataset.topicIntensity.split(":"); state.topicPreferences[key].intensity = Number(value); state.topicPreferences[key].active = true; persist(); render(); showToast(`${state.topicPreferences[key].label} yoğunluğu ${value}/5`); }));
  document.querySelectorAll("[data-topic-active]").forEach((button) => button.addEventListener("click", () => { const pref = state.topicPreferences[button.dataset.topicActive]; pref.active = !pref.active; persist(); render(); }));
  document.querySelectorAll("[data-topic-mode]").forEach((select) => select.addEventListener("change", () => { state.topicPreferences[select.dataset.topicMode].mode = select.value; persist(); showToast("Bu konu için tercihin güncellendi"); }));
  document.querySelectorAll("[data-communication]").forEach((select) => select.addEventListener("change", () => { state.profile.communication[select.dataset.communication] = select.value; persist(); showToast("Anlatım tercihin kaydedildi"); }));
  document.querySelector("#scheduleForm")?.addEventListener("submit", async (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const title = data.get("title").trim(); const message = event.currentTarget.querySelector("[data-schedule-message]"); if (title.length < 5) { message.textContent = "Ne araştırılacağını biraz daha açık yaz."; message.classList.add("is-error"); return; } const frequency = data.get("frequency"); try { const schedule = await apiRequest("/api/schedules", { method: "POST", body: JSON.stringify({ title, topic: data.get("topic"), frequency, time: frequency === "hourly" ? "" : data.get("time"), channel: data.get("channel"), settings: state.recommendationSettings }) }); state.researchSchedules.unshift(schedule); persist(); render(); showToast("Sunucu araştırma programı eklendi"); } catch (error) { message.textContent = error.message; message.classList.add("is-error"); } });
  document.querySelectorAll("[data-schedule-toggle]").forEach((button) => button.addEventListener("click", async () => { const schedule = state.researchSchedules.find((item) => item.id === button.dataset.scheduleToggle); const enabled = !schedule.enabled; try { await apiRequest(`/api/schedules/${encodeURIComponent(schedule.id)}`, { method: "PATCH", body: JSON.stringify({ enabled }) }); schedule.enabled = enabled; persist(); render(); } catch (error) { showToast(error.message); } }));
  document.querySelectorAll("[data-schedule-run]").forEach((button) => button.addEventListener("click", async () => { button.disabled = true; button.textContent = "Araştırılıyor…"; try { await apiRequest(`/api/schedules/${encodeURIComponent(button.dataset.scheduleRun)}/run`, { method: "POST" }); await refreshBackendSchedules(); showToast("Gerçek kaynak raporu hazır"); } catch (error) { showToast(error.message); button.disabled = false; button.textContent = "Şimdi çalıştır"; } }));
  document.querySelectorAll("[data-schedule-delete]").forEach((button) => button.addEventListener("click", async () => { try { await apiRequest(`/api/schedules/${encodeURIComponent(button.dataset.scheduleDelete)}`, { method: "DELETE" }); state.researchSchedules = state.researchSchedules.filter((item) => item.id !== button.dataset.scheduleDelete); persist(); render(); showToast("Program silindi"); } catch (error) { showToast(error.message); } }));
  document.querySelectorAll("[data-report-id]").forEach((button) => button.addEventListener("click", () => openReport(button.dataset.reportId)));
  document.querySelectorAll("[data-test-route]").forEach((button) => button.addEventListener("click", () => runTestRoute(button.dataset.testRoute)));
  document.querySelectorAll("[data-library-demo]").forEach((button) => button.addEventListener("click", () => { state.demoEmptyLibrary = button.dataset.libraryDemo === "empty"; persist(); render(); }));
  document.querySelector("#resetDemo")?.addEventListener("click", openResetDemo);
  document.querySelector("#exportProfile")?.addEventListener("click", exportProfile);
}

function applyDecision(id, decision) {
  const item = itemById(id); if (!item) return;
  if (decision === "saved") {
    const exists = state.saved.includes(id); state.saved = exists ? state.saved.filter((savedId) => savedId !== id) : [...state.saved, id]; item.state = exists ? "new" : "saved";
    showToast(exists ? "Kayıt kaldırıldı" : "Arşive kaydedildi");
  } else { item.state = decision; if (decision === "rejected") state.saved = state.saved.filter((savedId) => savedId !== id); showToast(decision === "rejected" ? "İçerik elendi" : "Karar kaydedildi"); }
  persist(); render(); closeModal();
}

function openPaper(id) {
  const paper = academicItems().find((item) => item.id === id); if (!paper) return;
  const authors = Array.isArray(paper.authors) ? paper.authors.join(", ") : paper.authors;
  const accessUrl = paper.fullTextUrl || paper.url || (paper.doi ? `https://doi.org/${paper.doi}` : "");
  const fullText = paper.fullText || "Tam metni uygulama içine kopyalamıyoruz. Erişim varsa aşağıdaki doğrulanmış kaynak bağlantısından açabilirsin.";
  showModal(`<article class="paper-reader"><div class="reader-head"><div><p class="eyebrow">${escapeHtml(paper.journal)} · ${paper.year || "—"} · ${paper.access}</p><h2>${escapeHtml(paper.title)}</h2><p>${escapeHtml(authors)}</p></div><div class="trust-stamp"><span>Atıf</span><strong>${paper.citations || 0}</strong><small>${paper.doi ? "DOI görünür" : "DOI yok"}</small></div></div><div class="reader-layout"><section><p class="section-label">Sağlayıcının özeti</p><p class="deep-summary">${escapeHtml(paper.abstract)}</p><p class="section-label">Tam içerik durumu</p><p class="paper-fulltext">${escapeHtml(fullText)}</p><div class="access-notice ${paper.access === "Özet erişimi" ? "limited" : ""}"><strong>${paper.fullTextUrl ? "Açık tam metin bağlantısı bulundu" : "Yayıncı sayfası / özet erişimi"}</strong><span>${paper.fullTextUrl ? "Bağlantı OpenAlex erişim kaydından geliyor." : "Erişemediğimiz metni varmış gibi göstermiyoruz."}</span></div>${accessUrl ? `<a class="button primary" href="${escapeHtml(accessUrl)}" target="_blank" rel="noopener noreferrer">${paper.fullTextUrl ? "Tam metni aç →" : "Kaynak sayfasını aç →"}</a>` : ""}</section><aside><p class="section-label">Kaynak bilgisi</p><dl><dt>DOI</dt><dd>${escapeHtml(paper.doi || "Paylaşılmadı")}</dd><dt>Dergi</dt><dd>${escapeHtml(paper.journal)}</dd><dt>Yazarlar</dt><dd>${escapeHtml(authors)}</dd><dt>Erişim</dt><dd>${paper.access}</dd></dl><button class="button" data-copy-citation="${paper.id}">Kaynakçayı kopyala</button></aside></div></article>`);
  modalRoot.querySelector("[data-copy-citation]")?.addEventListener("click", () => { navigator.clipboard?.writeText(citationFor(paper)); showToast("Kaynakça kopyalandı"); });
}
function openCitation(id) {
  const paper = academicItems().find((item) => item.id === id); if (!paper) return;
  showModal(`<div class="modal-form compact"><p class="eyebrow">Kaynakça</p><h2>Doğrulanabilir künye</h2><div class="citation-card"><span>APA 7</span><p>${citationFor(paper)}</p></div><div class="citation-card"><span>DOI</span><p>${paper.doi}</p></div><button class="button primary" data-copy-citation="${paper.id}">Kaynakçayı kopyala</button></div>`);
  modalRoot.querySelector("[data-copy-citation]")?.addEventListener("click", () => { navigator.clipboard?.writeText(citationFor(paper)); showToast("Kaynakça kopyalandı"); });
}
function citationFor(paper) { const authors = Array.isArray(paper.authors) ? paper.authors.join(", ") : paper.authors; return `${authors || "Yazar bilgisi yok"} (${paper.year || "t.y."}). ${paper.title}. ${paper.journal}.${paper.doi ? ` https://doi.org/${paper.doi}` : ""}`; }

function openContent(id) {
  const item = itemById(id); if (!item) return;
  showModal(`<div class="content-detail"><div class="content-detail-head"><div><p class="eyebrow">${item.type} · ${item.journey}</p><h2>${item.title}</h2><p>${item.summary}</p></div><div class="trust-stamp"><span>Kaynak durumu</span><strong>${item.confidence}</strong><small>${item.source}</small></div></div>
    <div class="content-columns"><section><p class="section-label">Biraz daha ayrıntı</p><p class="deep-summary">${item.deepSummary}</p><p class="section-label">Ana iddialar</p><ol class="claim-list">${item.claims.map((claim) => `<li>${claim}</li>`).join("")}</ol><p class="section-label">Bölümler</p><div class="chapter-list">${item.chapters.map((chapter) => `<button>${chapter}</button>`).join("")}</div></section><aside><p class="section-label">Sana uygunluk · ${averageScore(item.score)}</p><div class="score-grid vertical">${scoreBars(item.score)}</div><div class="journey-impact"><strong>Bu konuyla bağlantısı</strong><p>${journeyById(item.journeyId)?.hypothesis || "Bu içerik henüz bir konuya bağlı değil."}</p></div></aside></div>
    <div class="decision-bar"><span>Zamanını koruyan karar</span><div class="actions">${item.url ? `<button class="button primary" data-live-url="${escapeHtml(item.url)}">Asıl kaynağı aç ↗</button>` : ""}<button class="button ghost" data-modal-feedback="${item.id}">Konu iyi / format kötü</button><button class="button ghost" data-modal-decision="${item.id}:rejected">Atla</button><button class="button" data-modal-decision="${item.id}:summary">Özet yeterli</button><button class="button primary" data-modal-attach="${item.id}">Journey'ye bağla</button></div></div></div>`);
  modalRoot.querySelector("[data-live-url]")?.addEventListener("click", (event) => window.open(event.currentTarget.dataset.liveUrl, "_blank", "noopener,noreferrer"));
  modalRoot.querySelectorAll("[data-modal-decision]").forEach((button) => button.addEventListener("click", () => { const [itemId, decision] = button.dataset.modalDecision.split(":"); applyDecision(itemId, decision); }));
  modalRoot.querySelector("[data-modal-feedback]")?.addEventListener("click", () => openFeedback(item.id));
  modalRoot.querySelector("[data-modal-attach]")?.addEventListener("click", () => openAttachForm(item.id));
}

function openAttachForm(itemId) {
  const item = itemById(itemId);
  showModal(`<form class="modal-form" id="attachForm"><p class="eyebrow">Bir konuya bağla</p><h2>Bu içeriği nereye ekleyelim?</h2><p class="modal-copy">${item.title}</p><label>Konu<select name="journeyId">${state.journeys.map((journey) => `<option value="${journey.id}" ${journey.id === item.journeyId ? "selected" : ""}>${journey.title}</option>`).join("")}</select></label><label>Kısa not<textarea name="note" placeholder="Bu içerik düşünceni nasıl etkiliyor?"></textarea></label><button class="button primary">Konuya ekle</button></form>`);
  modalRoot.querySelector("#attachForm").addEventListener("submit", (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const journey = journeyById(data.get("journeyId")); item.journeyId = journey.id; item.journey = journey.title; item.state = "saved"; if (!state.saved.includes(item.id)) state.saved.push(item.id); if (data.get("note")) journey.events.unshift({ date: `${formatDate()} · Bugün`, title: `${item.type} konuya eklendi`, text: data.get("note"), kind: "Bağlı içerik" }); persist(); closeModal(); showToast(`${journey.title} konusuna eklendi`); render(); });
}

function openJourneyForm() {
  showModal(`<form class="modal-form" id="journeyForm"><p class="eyebrow">Yeni konu</p><h2>Yeni bir merakı başlat</h2><label>Başlık<input name="title" required placeholder="Örn. Enerji & Jeopolitik"></label><label>Şu anki düşüncen<textarea name="hypothesis" required placeholder="Bu konuda şu anda ne düşünüyorsun?"></textarea></label><div class="form-row"><label>Önem<select name="importance"><option>Yüksek</option><option selected>Orta</option><option>Düşük</option></select></label><label>İlk soru<input name="question" required placeholder="Neyi öğrenmek istiyorsun?"></label></div><button class="button primary">Konuyu başlat</button></form>`);
  modalRoot.querySelector("#journeyForm").addEventListener("submit", (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const title = data.get("title").trim(); const id = `${slugify(title)}-${Date.now().toString().slice(-4)}`; state.journeys.unshift({ id, title, status: "Yeni konu", progress: 10, started: formatDate(), importance: data.get("importance"), hypothesis: data.get("hypothesis"), questions: [data.get("question")], events: [{ date: `${formatDate()} · Bugün`, title: "Konu başladı", text: data.get("question"), kind: "Başlangıç" }] }); state.activeJourney = id; persist(); closeModal(); render(); showToast("Yeni konu oluşturuldu"); });
}
function slugify(value) { return value.toLocaleLowerCase("tr").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }

function openEventForm(journeyId) {
  showModal(`<form class="modal-form" id="eventForm"><p class="eyebrow">Journey hafızası</p><h2>Kanıt veya fikir değişikliği ekle</h2><label>Tür<select name="kind"><option>Kanıt</option><option>Karşı kanıt</option><option>Fikir değişikliği</option><option>Not</option><option>Açık soru</option></select></label><label>Başlık<input name="title" required></label><label>Neden önemli?<textarea name="text" required></textarea></label><button class="button primary">Zaman çizgisine ekle</button></form>`);
  modalRoot.querySelector("#eventForm").addEventListener("submit", (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); journeyById(journeyId).events.unshift({ date: `${formatDate()} · Bugün`, kind: data.get("kind"), title: data.get("title"), text: data.get("text") }); persist(); closeModal(); render(); showToast("Konu notların güncellendi"); });
}
function openHypothesisForm(journeyId) {
  const journey = journeyById(journeyId);
  showModal(`<form class="modal-form" id="hypothesisForm"><p class="eyebrow">Kullanıcı onayı gerekli</p><h2>Hipotezi güncelle</h2><label>Mevcut düşüncen<textarea name="hypothesis" required>${journey.hypothesis}</textarea></label><label>Değişikliğin nedeni<textarea name="reason" required placeholder="Hangi kanıt fikrini değiştirdi?"></textarea></label><button class="button primary">Onayla ve kaydet</button></form>`);
  modalRoot.querySelector("#hypothesisForm").addEventListener("submit", (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const old = journey.hypothesis; journey.hypothesis = data.get("hypothesis"); journey.events.unshift({ date: `${formatDate()} · Bugün`, title: "Hipotez kullanıcı tarafından güncellendi", text: `${data.get("reason")} Önceki: ${old}`, kind: "Fikir değişikliği" }); persist(); closeModal(); render(); showToast("Hipotez güncellendi"); });
}

function openFeedback(itemId) {
  const item = itemById(itemId);
  showModal(`<form class="modal-form" id="feedbackForm"><p class="eyebrow">Seçkini iyileştir</p><h2>Neyi beğenmedin?</h2><p class="modal-copy">${item.title}</p><div class="feedback-options"><label><input type="radio" name="signal" value="topic" required><span><strong>Konu ilgimi çekmedi</strong><small>Benzer konuları daha az göster</small></span></label><label><input type="radio" name="signal" value="format"><span><strong>Konu iyi, anlatım kötü</strong><small>Bu anlatım biçimini daha az göster</small></span></label><label><input type="radio" name="signal" value="known"><span><strong>Bunu zaten biliyordum</strong><small>Daha yeni içerikler getir</small></span></label><label><input type="radio" name="signal" value="clickbait"><span><strong>Başlık yanıltıcı / kaynak zayıf</strong><small>Bu kaynağı daha dikkatli değerlendir</small></span></label></div><label>Kısa not <input name="note" placeholder="İsteğe bağlı"></label><button class="button primary">Tercihimi kaydet</button></form>`);
  modalRoot.querySelector("#feedbackForm").addEventListener("submit", (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); state.feedback.push({ id: `f${Date.now()}`, itemId, signal: data.get("signal"), note: data.get("note"), date: new Date().toISOString() }); if (data.get("signal") === "clickbait") item.state = "rejected"; persist(); closeModal(); render(); showToast("Tercihin kaydedildi"); });
}

function openTagForm(key) {
  const labels = { interests: "Merak", grammar: "Sevdiğin anlatım", negatives: "Görmek istemediğin şey" };
  showModal(`<form class="modal-form compact" id="tagForm" novalidate><p class="eyebrow">Profili düzenle</p><h2>${labels[key]} ekle</h2><label>Yeni değer<input name="tag" required autofocus></label><small class="form-message" data-form-message>Örneğin: enerji politikaları</small><button class="button primary">Ekle</button></form>`);
  modalRoot.querySelector("#tagForm").addEventListener("submit", (event) => { event.preventDefault(); const tag = new FormData(event.currentTarget).get("tag").trim(); const message = event.currentTarget.querySelector("[data-form-message]"); if (!tag) { message.textContent = "Bu alan boş bırakılamaz."; message.classList.add("is-error"); return; } if (state.profile[key].some((item) => item.toLocaleLowerCase("tr") === tag.toLocaleLowerCase("tr"))) { message.textContent = "Bu tercih zaten listende."; message.classList.add("is-error"); return; } state.profile[key].push(tag); persist(); closeModal(); render(); showToast("Yeni tercih eklendi"); });
}

async function runExploreSearch(query) {
  exploreQuery = query;
  exploreLoading = true;
  exploreSearched = true;
  exploreResults = [];
  exploreError = "";
  render();
  const words = query.split(/[\s,;]+/).map((word) => word.trim()).filter((word) => word.length > 2);
  const interests = [{ id: `search-${Date.now()}`, label: query, keywords: words, intensity: 5, active: true }];
  if (state.exploreOptions.context) interests.push(...state.personalFeed.interests.filter((item) => item.active));
  if (state.exploreOptions.counter) interests.push({ id: "counter", label: `${query} karşı görüş eleştiri`, keywords: [...words, "counterargument", "critique"], intensity: 4, active: true });
  try {
    const engines = { ...state.personalFeed.engines, news: true, academic: true, youtube: true, rss: true, hackernews: true };
    const data = await apiRequest("/api/feed", { method: "POST", body: JSON.stringify({ interests, engines, sources: state.personalFeed.sources, symbols: state.personalFeed.symbols }) });
    const typeByEngine = { academic: "Akademik çalışma", youtube: "Video", finance: "Piyasa kaynağı", news: "Haber", rss: "RSS okuması", hackernews: "Teknoloji bağlantısı", social: "Sosyal kaynak" };
    let items = (data.items || []).filter((item) => item.url);
    if (state.exploreOptions.primary) items = items.filter((item) => item.engine === "academic" || item.openAccess);
    exploreResults = items.slice(0, 18).map((item) => ({
      id: item.id,
      engine: item.engine,
      url: item.url,
      type: item.engine === "academic" && item.openAccess ? "Açık erişim akademik çalışma" : typeByEngine[item.engine] || "Kaynak",
      source: item.source || feedEngineLabels[item.engine] || item.engine,
      confidence: item.engine === "academic" || item.engine === "finance" ? "yüksek kaynak güveni" : "doğrudan kaynak",
      title: item.title,
      summary: item.summary || "Kaynak özet paylaşmadı; ayrıntı için asıl sayfayı aç.",
      why: state.exploreOptions.context ? (item.reason || "Araman ve kişisel ilgi alanlarınla eşleşti.") : "Yalnızca yazdığın arama ve kaynak kalitesine göre seçildi.",
      score: { relevance: item.score || 70, novelty: Math.min(100, 55 + Number(item.freshness || 20)), impact: item.score || 70, trust: item.engine === "academic" ? 96 : item.engine === "finance" ? 92 : 82, mode: item.score || 70 }
    }));
    exploreError = exploreResults.length ? "" : "Motorlar yanıt verdi ancak bu filtreyle doğrulanabilir sonuç bulamadı.";
  } catch (error) {
    exploreError = error.message;
  } finally {
    exploreLoading = false;
    render();
  }
}
function saveResearchResult(index, attach) {
  const result = exploreResults[index]; if (!result) return;
  if ((attach && result.attached) || (!attach && result.saved)) return;
  const id = `research-${Date.now()}`;
  const activeJourney = journeyById(state.activeJourney) || state.journeys[0];
  state.items.unshift({ id, url: result.url, type: result.type, journeyId: attach ? activeJourney.id : "", journey: attach ? activeJourney.title : "Bağlanmadı", title: result.title, summary: result.summary, deepSummary: result.why, source: result.source, time: "6 dk", state: "saved", confidence: result.confidence, claims: [result.summary], chapters: ["Özet", "Kaynak", "Konuyla bağlantısı"], score: result.score });
  state.saved.push(id);
  if (attach) activeJourney.events.unshift({ date: `${formatDate()} · Bugün`, title: `${result.title} bağlandı`, text: result.why, kind: "Keşif sonucu" });
  result.saved = true; result.attached = attach || result.attached; persist(); render(); showToast(attach ? `${activeJourney.title} konusuna eklendi` : "Arşive kaydedildi");
}

function showModal(content) {
  modalRoot.innerHTML = `<div class="modal-shell"><button class="modal-backdrop" data-close-modal aria-label="Pencereyi kapat"></button><section class="modal-panel" role="dialog" aria-modal="true"><button class="modal-close" data-close-modal aria-label="Kapat">×</button>${content}</section></div>`;
  modalRoot.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", closeModal));
  document.body.classList.add("modal-open");
  setTimeout(() => modalRoot.querySelector("input, textarea, select, button")?.focus(), 0);
}
function closeModal() { modalRoot.innerHTML = ""; document.body.classList.remove("modal-open"); }
function exportProfile() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }); const link = document.createElement("a");
  link.href = URL.createObjectURL(blob); link.download = "journey-os-profile.json"; link.click(); URL.revokeObjectURL(link.href); showToast("Profil verileri indirildi");
}

function openPalette() { const palette = document.querySelector("#commandPalette"); palette.hidden = false; document.querySelector("#globalSearch").value = ""; renderSearchResults(""); setTimeout(() => document.querySelector("#globalSearch").focus(), 0); }
function closePalette() { document.querySelector("#commandPalette").hidden = true; }
function renderSearchResults(query) {
  const q = query.toLocaleLowerCase("tr");
  const matches = [...state.journeys.map((journey) => ({ title: journey.title, meta: `Konu · ${journey.status}`, route: "topics", journey: journey.id })), ...state.items.map((item) => ({ title: item.title, meta: `${item.type} · ${item.journey}`, route: "library", item: item.id }))].filter((result) => !q || `${result.title} ${result.meta}`.toLocaleLowerCase("tr").includes(q));
  document.querySelector("#searchResults").innerHTML = matches.length ? matches.slice(0, 8).map((result, index) => `<button class="search-result" data-result="${index}"><strong>${result.title}</strong><span>${result.meta}</span></button>`).join("") : `<div class="empty">Sonuç bulunamadı.</div>`;
  document.querySelectorAll("[data-result]").forEach((button) => button.addEventListener("click", () => { const result = matches[Number(button.dataset.result)]; if (result.journey) state.activeJourney = result.journey; persist(); closePalette(); setRoute(result.route); if (result.item) setTimeout(() => openContent(result.item), 50); }));
}

document.addEventListener("click", (event) => { const routeButton = event.target.closest("[data-route]"); if (routeButton) { event.preventDefault(); closeModal(); setRoute(routeButton.dataset.route); } });
document.querySelector("#searchButton").addEventListener("click", openPalette);
document.querySelector("#profileButton").addEventListener("click", () => setRoute("profile"));
document.querySelector("[data-close-palette]").addEventListener("click", closePalette);
document.querySelector("#globalSearch").addEventListener("input", (event) => renderSearchResults(event.target.value));
window.addEventListener("hashchange", () => { const next = location.hash.slice(1); if (next && next !== route) setRoute(next); });
document.addEventListener("keydown", (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); openPalette(); } if (event.key === "Escape") { closePalette(); closeModal(); } });

const liveRefreshTimer = window.setInterval(() => {
  if (document.visibilityState !== "visible") return;
  if (route === "portfolio") refreshPortfolioWatchlist();
  if (["feed", "today", "video", "academic", "topics", "journey"].includes(route) && personalFeedState.status !== "loading" && Date.now() - Date.parse(personalFeedState.generatedAt || 0) > 300_000) refreshPersonalFeed();
  if (route === "academic" && liveAcademicState.status !== "loading" && Date.now() - Date.parse(liveAcademicState.generatedAt || 0) > 900_000) refreshLiveAcademic();
}, 60_000);
window.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") return;
  if (route === "portfolio") refreshPortfolioWatchlist();
  if (["feed", "today", "video", "academic", "topics", "journey"].includes(route) && personalFeedState.status === "idle") refreshPersonalFeed();
  if (route === "academic" && liveAcademicState.status === "idle") refreshLiveAcademic();
});
window.addEventListener("pagehide", () => window.clearInterval(liveRefreshTimer), { once: true });

setRoute(route);
hydrateCloudState();
