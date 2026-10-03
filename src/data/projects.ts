export type ProjectCategory =
  | "hospitality"
  | "food"
  | "lifestyle"
  | "branding";

export type ProjectTheme =
  | "warm"
  | "stone"
  | "dark"
  | "sea"
  | "sand"
  | "olive";

export type ProjectLocaleContent = {
  location: string;
  title: string;
  services: string[];

  intro: string;

  challengeTitle: string;
  challenge: string;

  approachTitle: string;
  approach: string;

  directionTitle: string;
  direction: string;

  closing: string;
};

export type Project = {
  slug: string;
  no: string;
  category: ProjectCategory;
  client: string;
  year: string;
  theme: ProjectTheme;

  en: ProjectLocaleContent;
  tr: ProjectLocaleContent;
};

export const projects: Project[] = [
  {
    slug: "splendid-palace-hotel",
    no: "01",
    category: "hospitality",
    client: "Splendid Palace Hotel",
    year: "2026",
    theme: "warm",

    en: {
      location: "Büyükada · Istanbul",

      title:
        "Heritage Hospitality.\nContemporary Storytelling.",

      services: [
        "Social Media",
        "Creative Direction",
        "Content Production",
        "Campaigns",
        "Events",
      ],

      intro:
        "A hospitality brand shaped by history, place and character. Our work focuses on translating that distinctive world into a contemporary digital language without losing the atmosphere that makes it memorable.",

      challengeTitle:
        "A heritage story needs more than nostalgia.",

      challenge:
        "The challenge is to respect the history of the property while ensuring the brand remains culturally relevant, visually distinctive and desirable to a contemporary audience.",

      approachTitle:
        "Turning heritage into a living digital world.",

      approach:
        "We approach the brand as an experience rather than a collection of posts. Creative direction, content and communication work together to express the architecture, atmosphere, destination and rituals surrounding the hotel.",

      directionTitle:
        "Historic character. Contemporary rhythm.",

      direction:
        "The visual direction balances elegance and restraint with a more immediate digital rhythm, allowing the heritage of the property to remain central while the communication feels current.",

      closing:
        "A historic hospitality brand presented with the confidence and clarity of a contemporary destination.",
    },

    tr: {
      location: "Büyükada · İstanbul",

      title:
        "Köklü Bir Miras.\nÇağdaş Bir Hikâye.",

      services: [
        "Sosyal Medya",
        "Kreatif Direktörlük",
        "İçerik Prodüksiyonu",
        "Kampanyalar",
        "Etkinlikler",
      ],

      intro:
        "Tarih, mekan ve karakterle şekillenmiş bir otel markası. Çalışmamızın odağında, Splendid Palace'ın kendine özgü dünyasını kaybetmeden çağdaş bir dijital dile taşımak yer alıyor.",

      challengeTitle:
        "Köklü bir hikâye yalnızca nostaljiyle anlatılamaz.",

      challenge:
        "Temel mesele, yapının tarihine ve karakterine saygı duyarken markayı günümüz misafiri için kültürel olarak güncel, görsel olarak güçlü ve arzu edilir tutmak.",

      approachTitle:
        "Mirası yaşayan bir dijital dünyaya dönüştürmek.",

      approach:
        "Markayı birbirinden bağımsız sosyal medya paylaşımları olarak değil, bütünsel bir deneyim olarak ele alıyoruz. Kreatif yön, içerik ve iletişim; mimariyi, atmosferi, destinasyonu ve otelin ritüellerini aynı hikâyenin parçaları haline getiriyor.",

      directionTitle:
        "Tarihi karakter. Çağdaş ritim.",

      direction:
        "Görsel yön; zarafet ve sadeliği daha güncel bir dijital ritimle bir araya getiriyor. Böylece otelin mirası merkezde kalırken iletişim bugünün dünyasına ait hissettiriyor.",

      closing:
        "Tarihi bir otel markasının, çağdaş bir destinasyon kadar güçlü ve kendinden emin anlatımı.",
    },
  },

  {
    slug: "spektr-boutique-hotel",
    no: "02",
    category: "hospitality",
    client: "Spektr Boutique Hotel",
    year: "2026",
    theme: "stone",

    en: {
      location: "Bodrum · Türkiye",

      title:
        "A Boutique Hospitality\nStory Told Through Content.",

      services: [
        "Social Media",
        "Photography",
        "Video",
        "Digital Communication",
      ],

      intro:
        "A boutique hospitality experience shaped by Bodrum's light, pace and sense of place. The digital language is designed to make that atmosphere tangible before the guest arrives.",

      challengeTitle:
        "Selling a stay without reducing it to rooms.",

      challenge:
        "Boutique hospitality is defined by details that are difficult to communicate through conventional hotel marketing. The challenge is to make atmosphere, intimacy and location part of the decision-making experience.",

      approachTitle:
        "Content built around the feeling of being there.",

      approach:
        "Photography, video and social communication are treated as one continuous visual narrative, bringing together architecture, details, lifestyle and the surrounding destination.",

      directionTitle:
        "Natural. Quiet. Distinctive.",

      direction:
        "The creative direction favours natural textures, controlled compositions and an understated visual rhythm that allows the property to feel premium without becoming distant.",

      closing:
        "A boutique hotel presented not simply as somewhere to stay, but somewhere to experience.",
    },

    tr: {
      location: "Bodrum · Türkiye",

      title:
        "Bir Butik Otel Hikâyesi.\nİçerikle Anlatıldı.",

      services: [
        "Sosyal Medya",
        "Fotoğraf",
        "Video",
        "Dijital İletişim",
      ],

      intro:
        "Bodrum'un ışığı, temposu ve mekan duygusuyla şekillenen butik bir konaklama deneyimi. Dijital dil, misafir daha gelmeden bu atmosferi hissettirmek üzere kurgulanıyor.",

      challengeTitle:
        "Bir konaklamayı yalnızca odalar üzerinden anlatmamak.",

      challenge:
        "Butik otelleri farklılaştıran detayların klasik otel pazarlamasıyla aktarılması kolay değil. Atmosferi, samimiyeti ve lokasyonu karar sürecinin bir parçası haline getirmek gerekiyor.",

      approachTitle:
        "Orada olma hissi etrafında şekillenen içerik.",

      approach:
        "Fotoğraf, video ve sosyal medya iletişimini tek bir görsel hikâyenin parçaları olarak ele alıyoruz. Mimari, detaylar, yaşam tarzı ve destinasyon aynı dünyanın içinde buluşuyor.",

      directionTitle:
        "Doğal. Sakin. Kendine özgü.",

      direction:
        "Kreatif yön; doğal dokular, kontrollü kompozisyonlar ve sakin bir görsel ritim üzerinden ilerliyor. Böylece marka premium hissini korurken ulaşılmaz bir görüntüye dönüşmüyor.",

      closing:
        "Yalnızca kalınacak bir yer değil, yaşanacak bir deneyim olarak anlatılan butik bir otel.",
    },
  },

  {
    slug: "the-istanbul-butcher",
    no: "03",
    category: "food",
    client: "The Istanbul Butcher",
    year: "2026",
    theme: "dark",

    en: {
      location: "Istanbul · Türkiye",

      title:
        "Quiet Luxury,\nServed Digitally.",

      services: [
        "Creative Direction",
        "Photography",
        "Video",
        "Performance",
      ],

      intro:
        "A premium dining brand where product, craft and atmosphere need to communicate with the same level of confidence as the experience itself.",

      challengeTitle:
        "Premium without becoming predictable.",

      challenge:
        "The challenge is to communicate quality and exclusivity without falling into the visual clichés often associated with premium restaurant marketing.",

      approachTitle:
        "Making restraint part of the appetite.",

      approach:
        "Creative direction focuses on product, texture, detail and atmosphere. Photography and video create desire through controlled compositions rather than visual excess.",

      directionTitle:
        "Dark tones. Precise detail. Strong appetite.",

      direction:
        "A restrained visual language gives the product room to lead, while typography, movement and composition reinforce the premium character of the brand.",

      closing:
        "A dining experience translated into a digital identity with confidence, restraint and appetite.",
    },

    tr: {
      location: "İstanbul · Türkiye",

      title:
        "Sessiz Lüks.\nDijitalde Servis Edildi.",

      services: [
        "Kreatif Direktörlük",
        "Fotoğraf",
        "Video",
        "Performans Pazarlaması",
      ],

      intro:
        "Ürün, ustalık ve atmosferin; gerçek deneyim kadar kendinden emin bir biçimde iletişim kurması gereken premium bir gastronomi markası.",

      challengeTitle:
        "Premium olmak ama tahmin edilebilir olmamak.",

      challenge:
        "Temel mesele kalite ve ayrıcalık hissini, premium restoran iletişiminde sık karşılaşılan görsel klişelere düşmeden aktarabilmek.",

      approachTitle:
        "Sadeliği iştahın bir parçası yapmak.",

      approach:
        "Kreatif yönü ürün, doku, detay ve atmosfer etrafında kuruyoruz. Fotoğraf ve video, görsel kalabalık yerine kontrollü kompozisyonlarla arzu yaratıyor.",

      directionTitle:
        "Koyu tonlar. Net detaylar. Güçlü iştah.",

      direction:
        "Sade ve kontrollü görsel dil ürünün öne çıkmasına alan açarken tipografi, hareket ve kompozisyon markanın premium karakterini destekliyor.",

      closing:
        "Kendinden emin, sade ve iştah uyandıran bir dijital kimliğe dönüşen gastronomi deneyimi.",
    },
  },

  {
    slug: "mynos-yalikavak",
    no: "04",
    category: "food",
    client: "Mynos Yalıkavak",
    year: "2026",
    theme: "sea",

    en: {
      location: "Yalıkavak · Bodrum",

      title:
        "Aegean Spirit.\nDigital Appetite.",

      services: [
        "Social Media",
        "Content Production",
        "Restaurant Marketing",
      ],

      intro:
        "A restaurant experience connected to Yalıkavak, the Aegean and the social rhythm of Bodrum.",

      challengeTitle:
        "Turning a location into part of the brand.",

      challenge:
        "The restaurant experience is shaped not only by the menu but by its setting, atmosphere and relationship with Yalıkavak. Digital communication needs to capture the complete experience.",

      approachTitle:
        "Food, place and lifestyle in one narrative.",

      approach:
        "Content moves between product, people, atmosphere and destination, building a more complete picture of what it feels like to spend time at Mynos.",

      directionTitle:
        "Aegean energy with a refined edge.",

      direction:
        "The visual system combines the freshness of the coast with a controlled premium aesthetic, creating communication that feels both social and distinctive.",

      closing:
        "A restaurant brand where the destination becomes part of the appetite.",
    },

    tr: {
      location: "Yalıkavak · Bodrum",

      title:
        "Ege Ruhu.\nDijital İştah.",

      services: [
        "Sosyal Medya",
        "İçerik Prodüksiyonu",
        "Restoran Pazarlaması",
      ],

      intro:
        "Yalıkavak, Ege ve Bodrum'un sosyal ritmiyle doğrudan ilişkili bir restoran deneyimi.",

      challengeTitle:
        "Lokasyonu markanın bir parçasına dönüştürmek.",

      challenge:
        "Mynos deneyimini yalnızca menü değil; bulunduğu yer, atmosfer ve Yalıkavak'la kurduğu ilişki şekillendiriyor. Dijital iletişimin de bu bütünsel deneyimi taşıması gerekiyor.",

      approachTitle:
        "Yemek, mekan ve yaşam tarzını tek hikâyede buluşturmak.",

      approach:
        "İçerik; ürün, insanlar, atmosfer ve destinasyon arasında hareket ederek Mynos'ta geçirilen zamanın nasıl hissettirdiğine dair daha bütünsel bir dünya kuruyor.",

      directionTitle:
        "Rafine bir Ege enerjisi.",

      direction:
        "Görsel sistem sahilin tazeliğini kontrollü bir premium estetikle bir araya getiriyor; iletişimin hem sosyal hem de kendine özgü hissettirmesini sağlıyor.",

      closing:
        "Destinasyonun iştahın bir parçasına dönüştüğü restoran markası.",
    },
  },

  {
    slug: "the-one-bodrum",
    no: "05",
    category: "hospitality",
    client: "The One Bodrum",
    year: "2026",
    theme: "sand",

    en: {
      location: "Bodrum · Türkiye",

      title:
        "A Destination\nMade Desirable.",

      services: [
        "Social Media",
        "Content Production",
        "Performance Marketing",
      ],

      intro:
        "A hospitality brand positioned around the emotional value of the destination as much as the property itself.",

      challengeTitle:
        "From accommodation to desire.",

      challenge:
        "The challenge is to move beyond functional hotel communication and create a stronger emotional reason to choose the property and the destination.",

      approachTitle:
        "Building desire before the booking.",

      approach:
        "Content and performance work together: one creates the world people want to enter, while the other brings that world to audiences with intent.",

      directionTitle:
        "Warm. Aspirational. Effortless.",

      direction:
        "The visual language uses warm destination cues, lifestyle moments and restrained compositions to build an aspirational but accessible brand world.",

      closing:
        "A destination-led digital experience designed to turn attention into intent.",
    },

    tr: {
      location: "Bodrum · Türkiye",

      title:
        "Arzu Edilen\nBir Destinasyon.",

      services: [
        "Sosyal Medya",
        "İçerik Prodüksiyonu",
        "Performans Pazarlaması",
      ],

      intro:
        "Konaklama ürününün yanı sıra destinasyonun yarattığı duygusal değer üzerinden konumlanan bir otel markası.",

      challengeTitle:
        "Konaklamadan arzuya.",

      challenge:
        "Temel mesele fonksiyonel otel iletişiminin ötesine geçerek hem tesisi hem de destinasyonu seçmek için daha güçlü bir duygusal neden yaratmak.",

      approachTitle:
        "Rezervasyondan önce arzuyu oluşturmak.",

      approach:
        "İçerik ve performans birlikte çalışıyor: biri insanların dahil olmak istediği dünyayı yaratırken diğeri bu dünyayı doğru niyete sahip kitlelerle buluşturuyor.",

      directionTitle:
        "Sıcak. Arzu edilir. Zahmetsiz.",

      direction:
        "Görsel dil; sıcak destinasyon detaylarını, yaşam tarzı anlarını ve kontrollü kompozisyonları bir araya getirerek ulaşılabilir ama güçlü bir dünya oluşturuyor.",

      closing:
        "İlgiyi niyete dönüştürmek için tasarlanan destinasyon odaklı bir dijital deneyim.",
    },
  },

  {
    slug: "la-lara",
    no: "06",
    category: "branding",
    client: "La Lara",
    year: "2026",
    theme: "olive",

    en: {
      location: "Türkiye",

      title:
        "Brand Experience.\nDesigned End to End.",

      services: [
        "Brand Experience",
        "Website",
        "Digital Communication",
        "Creative Direction",
      ],

      intro:
        "A brand experience designed as one connected system across identity, digital communication and web.",

      challengeTitle:
        "Consistency across every digital touchpoint.",

      challenge:
        "A brand loses strength when its website, communication and visual identity feel like separate worlds. The challenge is to create one recognisable experience across every interaction.",

      approachTitle:
        "One brand. One system.",

      approach:
        "Creative direction, digital communication and web experience are developed around a shared visual and strategic language, creating consistency from first impression to deeper interaction.",

      directionTitle:
        "Refined, natural and intentionally quiet.",

      direction:
        "The visual direction relies on restraint, space, typography and carefully controlled detail rather than unnecessary decoration.",

      closing:
        "A connected brand experience designed to feel coherent wherever the audience encounters it.",
    },

    tr: {
      location: "Türkiye",

      title:
        "Uçtan Uca\nMarka Deneyimi.",

      services: [
        "Marka Deneyimi",
        "Web Sitesi",
        "Dijital İletişim",
        "Kreatif Direktörlük",
      ],

      intro:
        "Kimlik, dijital iletişim ve web deneyiminin tek bir sistem olarak ele alındığı bütünsel bir marka deneyimi.",

      challengeTitle:
        "Her dijital temas noktasında tutarlılık.",

      challenge:
        "Web sitesi, iletişim ve görsel kimlik birbirinden farklı dünyalar gibi hissettirdiğinde marka gücünü kaybeder. Amaç, her temas noktasında tanınabilir tek bir deneyim yaratmak.",

      approachTitle:
        "Tek marka. Tek sistem.",

      approach:
        "Kreatif yön, dijital iletişim ve web deneyimini ortak bir görsel ve stratejik dil etrafında geliştirerek ilk karşılaşmadan daha derin etkileşimlere kadar tutarlı bir yapı oluşturuyoruz.",

      directionTitle:
        "Rafine, doğal ve bilinçli şekilde sade.",

      direction:
        "Görsel yön; gereksiz dekorasyon yerine sadelik, boşluk, tipografi ve kontrollü detaylar üzerinden ilerliyor.",

      closing:
        "Markayla nerede karşılaşılırsa karşılaşılsın aynı bütünlüğü hissettirmek üzere tasarlanan bağlantılı bir deneyim.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex(
    (project) => project.slug === slug
  );

  if (index === -1) {
    return undefined;
  }

  return projects[(index + 1) % projects.length];
}