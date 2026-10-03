import { ArrowUpRight } from "lucide-react";

type Locale = "en" | "tr";

const content = {
  en: {
    kicker: "Expertise",
    label: "Where we belong",

    title: (
      <>
        Hospitality is not
        <br />
        an industry we <em>serve.</em>
        <br />
        It&apos;s part of our DNA.
      </>
    ),

    items: [
      {
        title: "Hospitality",
        subtitle: "Hotels · Resorts · Destinations",
        text:
          "We understand seasonality, guest behaviour, destination dynamics and the moments that turn consideration into desire.",
      },
      {
        title: "Food & Beverage",
        subtitle: "Restaurants · Gastronomy · Experiences",
        text:
          "From the first visual impression to the table itself, we build restaurant brands people want to experience.",
      },
      {
        title: "Luxury & Lifestyle",
        subtitle: "Premium Brands · Places · Experiences",
        text:
          "For brands where perception is part of the product, every digital touchpoint has to feel intentional.",
      },
    ],
  },

  tr: {
    kicker: "Uzmanlık",
    label: "En iyi bildiğimiz dünya",

    title: (
      <>
        Turizm bizim için
        <br />
        hizmet verdiğimiz bir <em>sektör değil.</em>
        <br />
        İçinden geldiğimiz dünya.
      </>
    ),

    items: [
      {
        title: "Otel & Konaklama",
        subtitle: "Oteller · Tatil Köyleri · Destinasyonlar",
        text:
          "Sezon dinamiklerini, misafir davranışlarını, destinasyon gerçeklerini ve bir markayı arzu edilen bir deneyime dönüştüren detayları biliyoruz.",
      },
      {
        title: "Yeme & İçme",
        subtitle: "Restoranlar · Gastronomi · Deneyimler",
        text:
          "İlk görsel karşılaşmadan masadaki deneyime kadar insanların yalnızca gördüğü değil, deneyimlemek istediği restoran markaları yaratıyoruz.",
      },
      {
        title: "Premium & Yaşam Tarzı",
        subtitle: "Premium Markalar · Mekanlar · Deneyimler",
        text:
          "Algının ürünün bir parçası olduğu markalarda her dijital temas noktasını aynı özen, estetik ve marka standardıyla tasarlıyoruz.",
      },
    ],
  },
};

export default function Expertise({
  locale,
}: {
  locale: Locale;
}) {
  const t = content[locale];

  return (
    <section
      className={`expertise-section locale-${locale}`}
    >
      <div className="section-kicker">
        <span>04</span>
        <span>{t.kicker}</span>
      </div>

      <div className="expertise-intro">
        <p>{t.label}</p>

        <h2>{t.title}</h2>
      </div>

      <div className="expertise-list">
        {t.items.map((item, index) => (
          <a
            href="#"
            className="expertise-row"
            key={item.title}
          >
            <span className="expertise-no">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="expertise-name">
              <h3>{item.title}</h3>
              <span>{item.subtitle}</span>
            </div>

            <p>{item.text}</p>

            <span className="expertise-arrow">
              <ArrowUpRight
                size={22}
                strokeWidth={1.2}
              />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}