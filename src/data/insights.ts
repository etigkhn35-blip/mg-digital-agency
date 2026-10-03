export type InsightLocaleContent = {
  title: string;
  excerpt: string;
  readTime: string;

  intro: string;

  sections: {
    title: string;
    paragraphs: string[];
  }[];

  quote: string;

  closing: string;
};

export type Insight = {
  slug: string;
  no: string;

  category: {
    en: string;
    tr: string;
  };

  date: string;

  en: InsightLocaleContent;
  tr: InsightLocaleContent;
};

export const insights: Insight[] = [
  {
    slug: "hotel-marketing-2026",
    no: "01",

    category: {
      en: "Hospitality",
      tr: "Otel & Konaklama",
    },

    date: "2026",

    en: {
      title:
        "Hotel marketing in 2026: from visibility to desire",

      excerpt:
        "Why successful hotel marketing is no longer only about being found — but about becoming the place people want to experience.",

      readTime: "6 min read",

      intro:
        "For years, hotel marketing focused heavily on visibility: ranking on search engines, appearing on booking platforms and reaching potential guests through paid media. Visibility still matters. But visibility alone no longer creates preference.",

      sections: [
        {
          title:
            "Being discovered is only the beginning.",

          paragraphs: [
            "A potential guest can encounter dozens of hotels within minutes. Search, social media, maps, booking platforms and increasingly AI-powered discovery tools have made access to information almost effortless.",

            "That changes the role of marketing. The question is no longer simply whether a hotel can be found. The question is what happens after it is found.",

            "Does the brand create curiosity? Does the photography communicate atmosphere? Does the website reinforce the promise? Does the destination feel desirable? Together, these signals shape preference long before a booking decision is made.",
          ],
        },

        {
          title:
            "Hotels compete through perception before they compete through price.",

          paragraphs: [
            "Rooms, amenities and locations can often appear similar when reduced to a booking interface. Brand perception creates differentiation where functional information cannot.",

            "This is why creative direction, content, positioning and digital experience cannot operate as separate disciplines. They collectively determine how the property is understood and remembered.",

            "A strong hotel brand gives people a reason to choose it before tactical incentives enter the conversation.",
          ],
        },

        {
          title:
            "The digital experience is now part of the hospitality experience.",

          paragraphs: [
            "For many guests, the first interaction with a hotel happens on a screen. The website, social feed, search result or piece of content becomes the first lobby they enter.",

            "That first impression should carry the same level of intention as the physical experience. Hospitality begins before arrival.",
          ],
        },
      ],

      quote:
        "Visibility gets a hotel into consideration. Desire gives people a reason to choose it.",

      closing:
        "The strongest hotel marketing connects discovery, brand, content and conversion into one continuous experience. Being visible remains essential. Becoming desirable is what creates preference.",
    },

    tr: {
      title:
        "2026'da otel pazarlaması: görünürlükten arzuya",

      excerpt:
        "Başarılı otel pazarlaması artık yalnızca bulunmakla ilgili değil. Asıl mesele, insanların deneyimlemek istediği yer olabilmek.",

      readTime: "6 dk okuma",

      intro:
        "Otel pazarlaması uzun yıllar boyunca büyük ölçüde görünürlük üzerine kuruldu: arama motorlarında bulunmak, rezervasyon platformlarında yer almak ve reklamlarla potansiyel misafire ulaşmak. Görünürlük hâlâ önemli. Ancak tek başına tercih yaratmaya yetmiyor.",

      sections: [
        {
          title:
            "Keşfedilmek artık yalnızca başlangıç.",

          paragraphs: [
            "Potansiyel bir misafir birkaç dakika içinde onlarca otelle karşılaşabiliyor. Arama motorları, sosyal medya, haritalar, rezervasyon platformları ve giderek yaygınlaşan yapay zekâ destekli keşif araçları bilgiye ulaşmayı son derece kolaylaştırdı.",

            "Bu durum pazarlamanın rolünü değiştiriyor. Soru artık yalnızca bir otelin bulunup bulunamadığı değil; bulunduktan sonra ne hissettirdiği.",

            "Marka merak uyandırıyor mu? Fotoğraflar atmosferi taşıyor mu? Web sitesi verilen sözü destekliyor mu? Destinasyon arzu edilir görünüyor mu? Bütün bu sinyaller rezervasyon kararından çok önce tercihi şekillendiriyor.",
          ],
        },

        {
          title:
            "Oteller fiyat üzerinden rekabet etmeden önce algı üzerinden rekabet ediyor.",

          paragraphs: [
            "Odalar, imkanlar ve lokasyonlar bir rezervasyon ekranına indirgendiklerinde birbirine oldukça benzer görünebilir. Fonksiyonel bilginin farklılaştıramadığı noktada marka algısı devreye girer.",

            "Bu nedenle kreatif yön, içerik, konumlandırma ve dijital deneyim birbirinden bağımsız alanlar olarak çalışamaz. Markanın nasıl anlaşıldığını ve hatırlandığını birlikte belirlerler.",

            "Güçlü bir otel markası, indirim veya kampanya devreye girmeden önce insanlara onu seçmeleri için bir neden verir.",
          ],
        },

        {
          title:
            "Dijital deneyim artık konaklama deneyiminin bir parçası.",

          paragraphs: [
            "Birçok misafir için otelle ilk temas bir ekran üzerinden gerçekleşiyor. Web sitesi, sosyal medya hesabı, arama sonucu veya karşılaşılan bir içerik, misafirin girdiği ilk lobi haline geliyor.",

            "Bu ilk temasın da fiziksel deneyim kadar özenli olması gerekiyor. Misafirperverlik artık otele varıldığında başlamıyor.",
          ],
        },
      ],

      quote:
        "Görünürlük oteli seçenekler arasına sokar. Arzu ise insanların onu seçmesi için neden yaratır.",

      closing:
        "Güçlü otel pazarlaması; keşif, marka, içerik ve dönüşümü birbirinden koparmadan tek bir deneyime dönüştürür. Görünür olmak hâlâ gerekli. Tercih yaratan şey ise arzu edilir olmaktır.",
    },
  },

  {
    slug: "geo-ai-search-hospitality",
    no: "02",

    category: {
      en: "SEO & GEO",
      tr: "SEO & GEO",
    },

    date: "2026",

    en: {
      title:
        "How AI search is changing hotel discovery",

      excerpt:
        "Search is moving beyond ten blue links. What hotels should understand about visibility inside AI-generated answers.",

      readTime: "7 min read",

      intro:
        "Hotel discovery is beginning to expand beyond traditional search results. Travellers increasingly encounter recommendations, summaries and comparisons generated directly by AI-powered interfaces.",

      sections: [
        {
          title:
            "Search is becoming an answer, not only a list.",

          paragraphs: [
            "Traditional search encouraged users to move between links, compare websites and assemble information themselves. AI-assisted discovery can compress parts of that journey into a single response.",

            "For hospitality brands, this creates a new visibility question: not only where the website ranks, but whether the brand can be understood and represented clearly by the systems interpreting information about it.",
          ],
        },

        {
          title:
            "Clear brand information becomes increasingly valuable.",

          paragraphs: [
            "A hotel exists digitally across many surfaces: its own website, editorial coverage, local information, social platforms and other references across the web.",

            "Consistency across those surfaces helps create a clearer picture of what the property is, where it is, what makes it distinctive and who it is relevant for.",

            "GEO does not replace good SEO, strong content or a technically sound website. It expands the visibility conversation.",
          ],
        },

        {
          title:
            "The goal remains the same: become a meaningful choice.",

          paragraphs: [
            "Technology changes how discovery happens, but the strategic objective remains familiar. Brands still need clarity, authority, relevance and a distinctive reason to be considered.",

            "The new search landscape makes those fundamentals more important, not less.",
          ],
        },
      ],

      quote:
        "The future of search visibility is not only about being indexed. It is about being understood.",

      closing:
        "Hotels should think about SEO and AI visibility as connected parts of a broader discovery strategy: technically accessible, clearly positioned and supported by useful, consistent information.",
    },

    tr: {
      title:
        "Yapay zekâ aramaları otellerin keşfedilme biçimini nasıl değiştiriyor?",

      excerpt:
        "Arama deneyimi klasik sonuç sayfalarının ötesine geçiyor. Otellerin yapay zekâ tarafından üretilen yanıtlardaki görünürlük hakkında bilmesi gerekenler.",

      readTime: "7 dk okuma",

      intro:
        "Otel keşfi klasik arama sonuçlarının ötesine genişlemeye başladı. Kullanıcılar artık öneriler, özetler ve karşılaştırmalarla doğrudan yapay zekâ destekli arayüzlerin içinde karşılaşabiliyor.",

      sections: [
        {
          title:
            "Arama yalnızca sonuç listesi değil, giderek doğrudan bir yanıt haline geliyor.",

          paragraphs: [
            "Klasik arama deneyiminde kullanıcı bağlantılar arasında dolaşır, web sitelerini karşılaştırır ve bilgiyi kendisi bir araya getirirdi. Yapay zekâ destekli keşif, bu yolculuğun bazı aşamalarını tek bir yanıt içinde birleştirebiliyor.",

            "Bu durum otel markaları için yeni bir görünürlük sorusu yaratıyor: yalnızca web sitesinin hangi sırada bulunduğu değil, marka hakkındaki bilgileri yorumlayan sistemlerin onu ne kadar açık biçimde anlayabildiği de önem kazanıyor.",
          ],
        },

        {
          title:
            "Net ve tutarlı marka bilgisi daha değerli hale geliyor.",

          paragraphs: [
            "Bir otelin dijital varlığı yalnızca kendi web sitesinden oluşmaz. Editoryal içerikler, yerel bilgiler, sosyal platformlar ve web üzerindeki farklı referanslar markanın dijital resmini birlikte oluşturur.",

            "Bu alanlar arasındaki tutarlılık; tesisin ne olduğunu, nerede bulunduğunu, neyle farklılaştığını ve kimler için anlamlı olduğunu daha açık hale getirir.",

            "GEO; iyi SEO'nun, güçlü içeriğin veya teknik olarak sağlıklı bir web sitesinin yerine geçmez. Görünürlük kavramını genişletir.",
          ],
        },

        {
          title:
            "Hedef değişmiyor: anlamlı bir seçenek haline gelmek.",

          paragraphs: [
            "Teknoloji insanların markaları nasıl keşfettiğini değiştiriyor ancak stratejik hedef tanıdık kalıyor. Markaların hâlâ netliğe, güvenilirliğe, alaka düzeyine ve tercih edilmelerini sağlayacak güçlü bir farklılığa ihtiyacı var.",

            "Yeni arama dünyası bu temelleri daha az değil, daha önemli hale getiriyor.",
          ],
        },
      ],

      quote:
        "Arama görünürlüğünün geleceği yalnızca indekslenmek değil, doğru anlaşılmakla ilgili.",

      closing:
        "Oteller SEO ve yapay zekâ görünürlüğünü daha geniş bir keşif stratejisinin bağlantılı parçaları olarak ele almalı: teknik olarak erişilebilir, açık biçimde konumlandırılmış ve tutarlı bilgilerle desteklenen bir dijital varlık.",
    },
  },

  {
    slug: "restaurant-social-media",
    no: "03",

    category: {
      en: "Food & Beverage",
      tr: "Yeme & İçme",
    },

    date: "2026",

    en: {
      title:
        "Restaurant social media should create appetite, not just content",

      excerpt:
        "The difference between filling a content calendar and building a digital presence that makes people want a table.",

      readTime: "5 min read",

      intro:
        "Restaurants rarely struggle to find things to post. Dishes, cocktails, interiors and events provide an endless stream of material. The real challenge is turning that material into desire.",

      sections: [
        {
          title:
            "Frequency is not the same as presence.",

          paragraphs: [
            "Publishing consistently can keep a restaurant active online, but activity alone does not create a distinctive brand.",

            "People should be able to understand something about the atmosphere, personality and experience before they ever walk through the door.",
          ],
        },

        {
          title:
            "Food needs context.",

          paragraphs: [
            "A beautiful plate can attract attention. But restaurants are experienced through far more than food: lighting, sound, service, people, location and social energy all influence the memory of a place.",

            "Strong restaurant content brings those elements together rather than treating every post as an isolated product shot.",
          ],
        },

        {
          title:
            "The objective is not engagement for its own sake.",

          paragraphs: [
            "Digital attention becomes commercially meaningful when it creates curiosity, preference and eventually intent.",

            "The best restaurant communication makes people imagine themselves at the table.",
          ],
        },
      ],

      quote:
        "A restaurant feed should not simply show what is served. It should make people want to be there.",

      closing:
        "Content calendars are useful operational tools. Brands are built when the individual pieces create one recognisable and desirable world.",
    },

    tr: {
      title:
        "Restoran sosyal medyası içerik değil, iştah yaratmalı",

      excerpt:
        "Bir içerik takvimini doldurmakla insanların gerçekten masa ayırtmak istediği dijital bir marka yaratmak arasındaki fark.",

      readTime: "5 dk okuma",

      intro:
        "Restoranlar genellikle paylaşacak konu bulmakta zorlanmaz. Tabaklar, kokteyller, mekan ve etkinlikler sürekli içerik üretir. Asıl mesele bu malzemeyi arzuya dönüştürebilmektir.",

      sections: [
        {
          title:
            "Paylaşım sıklığı güçlü bir dijital varlıkla aynı şey değil.",

          paragraphs: [
            "Düzenli paylaşım restoranı dijital dünyada aktif tutabilir ancak aktivite tek başına ayırt edici bir marka yaratmaz.",

            "İnsanların daha kapıdan girmeden mekanın atmosferi, karakteri ve deneyimi hakkında bir şeyler hissedebilmesi gerekir.",
          ],
        },

        {
          title:
            "Yemeğin bağlama ihtiyacı var.",

          paragraphs: [
            "Güzel bir tabak dikkat çekebilir. Ancak restoran deneyimi yemekten çok daha fazlasıdır. Işık, ses, servis, insanlar, lokasyon ve mekanın sosyal enerjisi hafızada kalan deneyimi birlikte oluşturur.",

            "Güçlü restoran içeriği her paylaşımı bağımsız bir ürün fotoğrafı olarak görmek yerine bu unsurları aynı hikâyenin içinde buluşturur.",
          ],
        },

        {
          title:
            "Amaç yalnızca etkileşim almak değil.",

          paragraphs: [
            "Dijital dikkat; merak, tercih ve sonunda gerçek bir niyet oluşturduğunda ticari anlam kazanır.",

            "İyi restoran iletişimi insanların kendilerini o masada hayal etmesini sağlar.",
          ],
        },
      ],

      quote:
        "Bir restoran hesabı yalnızca ne servis edildiğini göstermemeli. İnsanlara orada olmak istemelisin dedirtmeli.",

      closing:
        "İçerik takvimleri operasyonu düzenler. Marka ise tek tek içeriklerin birlikte tanınabilir ve arzu edilir bir dünya oluşturmasıyla ortaya çıkar.",
    },
  },

  {
    slug: "direct-booking-hotel-brand",
    no: "04",

    category: {
      en: "Hospitality",
      tr: "Otel & Konaklama",
    },

    date: "2026",

    en: {
      title:
        "Direct booking starts with brand perception",

      excerpt:
        "Before optimisation, booking engines and media campaigns, guests need a reason to choose the hotel itself.",

      readTime: "6 min read",

      intro:
        "Direct booking is often discussed as a conversion problem. Conversion matters, but optimisation can only work with the demand and confidence the brand has already created.",

      sections: [
        {
          title:
            "The booking engine cannot create preference.",

          paragraphs: [
            "A fast, clear booking journey removes friction. It does not answer the more fundamental question of why the guest should choose one property over another.",

            "That decision begins earlier through positioning, content, reputation and the overall digital experience.",
          ],
        },

        {
          title:
            "Trust and desire work together.",

          paragraphs: [
            "Guests need confidence that the experience will match the promise. At the same time, rational reassurance alone rarely creates excitement.",

            "Strong hotel brands combine credibility with emotional appeal.",
          ],
        },

        {
          title:
            "Conversion should complete the brand experience.",

          paragraphs: [
            "The transition from inspiration to booking should feel continuous. Visual language, messaging and user experience should reinforce rather than weaken the perception created earlier in the journey.",
          ],
        },
      ],

      quote:
        "You cannot optimise someone into wanting a hotel they never wanted in the first place.",

      closing:
        "Direct booking performance becomes stronger when brand, experience and conversion are treated as one connected system rather than separate marketing tasks.",
    },

    tr: {
      title:
        "Direkt rezervasyon marka algısıyla başlar",

      excerpt:
        "Optimizasyon, rezervasyon motorları ve reklam kampanyalarından önce misafirin oteli tercih etmek için güçlü bir nedeni olmalı.",

      readTime: "6 dk okuma",

      intro:
        "Direkt rezervasyon çoğu zaman bir dönüşüm problemi olarak ele alınıyor. Dönüşüm elbette önemli; ancak optimizasyon yalnızca markanın daha önce yarattığı talep ve güven kadar güçlü çalışabilir.",

      sections: [
        {
          title:
            "Rezervasyon motoru tercih yaratamaz.",

          paragraphs: [
            "Hızlı ve anlaşılır bir rezervasyon deneyimi sürtünmeyi azaltır. Ancak misafirin neden bir tesisi diğerine tercih etmesi gerektiği sorusunu tek başına cevaplayamaz.",

            "Bu karar daha önce; konumlandırma, içerik, itibar ve genel dijital deneyim üzerinden şekillenmeye başlar.",
          ],
        },

        {
          title:
            "Güven ve arzu birlikte çalışır.",

          paragraphs: [
            "Misafirin gerçek deneyimin verilen sözle örtüşeceğine güvenmesi gerekir. Ancak yalnızca rasyonel güvence çoğu zaman heyecan yaratmaz.",

            "Güçlü otel markaları güvenilirliği duygusal çekimle birleştirir.",
          ],
        },

        {
          title:
            "Dönüşüm marka deneyimini tamamlamalı.",

          paragraphs: [
            "İlhamdan rezervasyona geçiş kesintisiz hissettirmeli. Görsel dil, mesaj ve kullanıcı deneyimi yolculuğun daha önceki aşamalarında yaratılan algıyı zayıflatmak yerine güçlendirmeli.",
          ],
        },
      ],

      quote:
        "İnsanların en başta istemediği bir oteli yalnızca optimizasyon yaparak arzu edilir hale getiremezsiniz.",

      closing:
        "Direkt rezervasyon performansı; marka, deneyim ve dönüşüm birbirinden bağımsız pazarlama işleri yerine bağlantılı tek bir sistem olarak ele alındığında güçlenir.",
    },
  },

  {
    slug: "luxury-brand-digital-experience",
    no: "05",

    category: {
      en: "Luxury & Lifestyle",
      tr: "Premium & Yaşam Tarzı",
    },

    date: "2026",

    en: {
      title:
        "Luxury loses value when the digital experience feels ordinary",

      excerpt:
        "Why premium positioning has to survive every digital touchpoint — from search to social and website experience.",

      readTime: "5 min read",

      intro:
        "Premium perception is built through consistency. A beautifully designed physical experience can lose part of its value when the digital journey surrounding it feels generic.",

      sections: [
        {
          title:
            "Luxury is communicated through detail.",

          paragraphs: [
            "Digital luxury is rarely about adding more decoration. It is often expressed through restraint, confidence, typography, imagery, pace and attention to interaction.",

            "Small inconsistencies can weaken a premium position because expectations are higher.",
          ],
        },

        {
          title:
            "Every touchpoint participates in the brand.",

          paragraphs: [
            "Search results, social content, mobile experience, website performance and enquiry flows may seem operationally separate. To the audience, they belong to one brand.",

            "The quality of that continuity influences how premium the overall experience feels.",
          ],
        },

        {
          title:
            "Restraint can be more powerful than excess.",

          paragraphs: [
            "Premium brands do not need every interaction to demand attention. Confidence often comes from knowing what to remove, what to emphasise and where to create space.",
          ],
        },
      ],

      quote:
        "Premium positioning is not a visual layer. It is the quality of the entire experience.",

      closing:
        "Luxury survives digitally when strategy, design, content and technology all protect the same standard.",
    },

    tr: {
      title:
        "Dijital deneyim sıradansa premium marka algısı değer kaybeder",

      excerpt:
        "Premium konumlandırmanın aramadan sosyal medyaya ve web deneyimine kadar her dijital temas noktasında korunması gerekiyor.",

      readTime: "5 dk okuma",

      intro:
        "Premium algı tutarlılıkla oluşur. Fiziksel dünyada son derece özenli tasarlanmış bir deneyim, çevresindeki dijital yolculuk sıradan hissettirdiğinde değerinin bir bölümünü kaybedebilir.",

      sections: [
        {
          title:
            "Lüks detaylarla iletişim kurar.",

          paragraphs: [
            "Dijital dünyada lüks çoğu zaman daha fazla dekorasyon anlamına gelmez. Sadelik, özgüven, tipografi, görsel dil, tempo ve etkileşim detayları üzerinden hissedilir.",

            "Beklenti daha yüksek olduğu için küçük tutarsızlıklar bile premium konumlandırmayı zayıflatabilir.",
          ],
        },

        {
          title:
            "Her temas noktası markanın bir parçasıdır.",

          paragraphs: [
            "Arama sonuçları, sosyal medya içeriği, mobil deneyim, web sitesi performansı ve iletişim akışları operasyonel olarak ayrı alanlar gibi görünebilir. Kullanıcı açısından hepsi aynı markaya aittir.",

            "Bu devamlılığın kalitesi genel deneyimin ne kadar premium hissedildiğini etkiler.",
          ],
        },

        {
          title:
            "Sadelik bazen fazlalıktan daha güçlüdür.",

          paragraphs: [
            "Premium markaların her etkileşimde dikkat çekmeye çalışması gerekmez. Özgüven çoğu zaman neyin çıkarılacağını, neyin vurgulanacağını ve nerede alan bırakılacağını bilmekten gelir.",
          ],
        },
      ],

      quote:
        "Premium konumlandırma görsel bir katman değil, bütün deneyimin kalite standardıdır.",

      closing:
        "Lüks dijital dünyada; strateji, tasarım, içerik ve teknoloji aynı standardı birlikte koruduğunda değerini sürdürür.",
    },
  },

  {
    slug: "content-hospitality-brands",
    no: "06",

    category: {
      en: "Content",
      tr: "İçerik",
    },

    date: "2026",

    en: {
      title:
        "The best hospitality content sells the feeling, not the room",

      excerpt:
        "A room can be copied. A feeling cannot. The role of visual storytelling in building preference.",

      readTime: "5 min read",

      intro:
        "Hospitality content becomes more powerful when it stops behaving like a catalogue. Guests are not only evaluating rooms. They are imagining how a place might make them feel.",

      sections: [
        {
          title:
            "Features are easy to compare. Feelings are harder to copy.",

          paragraphs: [
            "Room size, amenities and facilities are useful information, but competitors can often offer similar features.",

            "Atmosphere, character, sense of place and the emotional world surrounding a property create a different kind of value.",
          ],
        },

        {
          title:
            "Visual storytelling gives context to hospitality.",

          paragraphs: [
            "A strong content system moves beyond isolated room photography. It shows mornings, details, people, food, architecture, landscape and the rhythm of the destination.",

            "Together these moments allow audiences to imagine an experience rather than simply inspect a product.",
          ],
        },

        {
          title:
            "Consistency turns content into memory.",

          paragraphs: [
            "Individual images may attract attention. A consistent visual world creates recognition.",

            "Over time, that consistency helps a hospitality brand occupy a clearer position in the audience's mind.",
          ],
        },
      ],

      quote:
        "People remember how a place made them imagine they would feel.",

      closing:
        "The strongest hospitality content does more than document a property. It creates a world people can already picture themselves entering.",
    },

    tr: {
      title:
        "İyi turizm içeriği odayı değil, hissi anlatır",

      excerpt:
        "Bir oda benzer olabilir. Yarattığı his olmak zorunda değil. Tercih yaratmada görsel hikâye anlatımının rolü.",

      readTime: "5 dk okuma",

      intro:
        "Turizm içeriği katalog gibi davranmayı bıraktığında daha güçlü hale gelir. Misafir yalnızca odaları değerlendirmez; bir yerin kendisine nasıl hissettireceğini de hayal eder.",

      sections: [
        {
          title:
            "Özellikleri karşılaştırmak kolaydır. Hissi kopyalamak daha zordur.",

          paragraphs: [
            "Oda büyüklüğü, imkanlar ve tesis özellikleri faydalı bilgilerdir ancak rakipler çoğu zaman benzer özellikler sunabilir.",

            "Atmosfer, karakter, mekan duygusu ve tesisin etrafında oluşan duygusal dünya ise farklı bir değer yaratır.",
          ],
        },

        {
          title:
            "Görsel hikâye anlatımı konaklama deneyimine bağlam kazandırır.",

          paragraphs: [
            "Güçlü bir içerik sistemi yalnızca oda fotoğraflarından oluşmaz. Sabahları, detayları, insanları, gastronomiyi, mimariyi, manzarayı ve destinasyonun ritmini de anlatır.",

            "Bu anlar bir araya geldiğinde kullanıcı ürünü incelemek yerine deneyimi hayal etmeye başlar.",
          ],
        },

        {
          title:
            "Tutarlılık içeriği hafızaya dönüştürür.",

          paragraphs: [
            "Tek bir görsel dikkat çekebilir. Tutarlı bir görsel dünya ise tanınırlık yaratır.",

            "Zaman içinde bu tutarlılık markanın insanların zihninde daha net bir yere sahip olmasını sağlar.",
          ],
        },
      ],

      quote:
        "İnsanlar bir yerin onlara nasıl hissettireceğini hayal ettiklerini hatırlar.",

      closing:
        "Güçlü turizm içeriği tesisi yalnızca belgelemekle kalmaz. İnsanların kendilerini daha şimdiden içinde hayal edebildiği bir dünya kurar.",
    },
  },
];

export function getInsight(slug: string) {
  return insights.find(
    (insight) => insight.slug === slug
  );
}

export function getNextInsight(slug: string) {
  const index = insights.findIndex(
    (insight) => insight.slug === slug
  );

  if (index === -1) {
    return undefined;
  }

  return insights[(index + 1) % insights.length];
}