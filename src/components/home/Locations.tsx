import { ArrowUpRight } from "lucide-react";

type Locale = "en" | "tr";

const content = {
  en: {
    kicker: "Locations",

    titleFirst: "Local insight.",
    titleSecond: "International perspective.",

    sideFirst: "Three cities.",
    sideSecond: "One creative standard.",

    locations: [
      {
        city: "Bodrum",
        no: "01",
        subtitle: "Hospitality Culture",
        text:
          "Where hospitality is lived, not studied. Our connection to the Aegean shapes how we understand hotels, restaurants and destination brands.",
      },
      {
        city: "Istanbul",
        no: "02",
        subtitle: "Creative & Commercial Energy",
        text:
          "A city where culture, commerce and creativity collide. The centre of our multidisciplinary creative perspective.",
      },
      {
        city: "Lisbon",
        no: "03",
        subtitle: "European Perspective",
        text:
          "Our bridge to a wider European hospitality and lifestyle landscape — local insight with an international point of view.",
      },
    ],
  },

  tr: {
    kicker: "Lokasyonlar",

    titleFirst: "Yerel içgörü.",
    titleSecond: "Uluslararası perspektif.",

    sideFirst: "Üç şehir.",
    sideSecond: "Tek yaratıcı standart.",

    locations: [
      {
        city: "Bodrum",
        no: "01",
        subtitle: "Hospitality Kültürü",
        text:
          "Hospitality'nin yalnızca öğrenilmediği, yaşandığı yer. Ege ile kurduğumuz bağ; otelleri, restoranları ve destinasyon markalarını nasıl anladığımızı şekillendiriyor.",
      },
      {
        city: "İstanbul",
        no: "02",
        subtitle: "Yaratıcı & Ticari Enerji",
        text:
          "Kültürün, ticaretin ve yaratıcılığın kesiştiği şehir. Çok disiplinli yaratıcı bakış açımızın merkezlerinden biri.",
      },
      {
        city: "Lizbon",
        no: "03",
        subtitle: "Avrupa Perspektifi",
        text:
          "Avrupa hospitality ve lifestyle dünyasına açılan noktamız. Yerel içgörüyü uluslararası bir perspektifle bir araya getiriyoruz.",
      },
    ],
  },
};

export default function Locations({
  locale,
}: {
  locale: Locale;
}) {
  const t = content[locale];

  return (
    <section className="locations-section">
      <div className="section-kicker locations-kicker">
        <span>07</span>
        <span>{t.kicker}</span>
      </div>

      <div className="locations-head">
        <h2>
          {t.titleFirst}
          <br />
          <em>{t.titleSecond}</em>
        </h2>

        <p>
          {t.sideFirst}
          <br />
          {t.sideSecond}
        </p>
      </div>

      <div className="location-list">
        {t.locations.map((location) => (
          <a
            href="#"
            className="location-row"
            key={location.no}
          >
            <span className="location-no">
              {location.no}
            </span>

            <h3>{location.city}</h3>

            <div className="location-copy">
              <span>{location.subtitle}</span>

              <p>{location.text}</p>
            </div>

            <span className="location-arrow">
              <ArrowUpRight
                size={20}
                strokeWidth={1.2}
              />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}