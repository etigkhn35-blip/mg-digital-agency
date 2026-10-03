import { ArrowUpRight } from "lucide-react";

type Locale = "en" | "tr";

const content = {
  en: {
    kicker: "Capabilities",
    title: (
      <>
        One brand.
        <br />
        One team.
        <br />
        <em>Every touchpoint.</em>
      </>
    ),
    description:
      "Strategy, creativity, production, technology and performance — connected under one growth system.",
    services: [
      "Strategy",
      "Social Media",
      "Photography & Film",
      "SEO & GEO",
      "Paid Media",
      "Web Experience",
      "Branding",
      "Influencer & PR",
      "Events",
    ],
  },

  tr: {
    kicker: "Yeteneklerimiz",
    title: (
      <>
        Tek marka.
        <br />
        Tek ekip.
        <br />
        <em>Tüm temas noktaları.</em>
      </>
    ),
    description:
      "Strateji, yaratıcılık, prodüksiyon, teknoloji ve performansı tek bir büyüme sistemi altında birleştiriyoruz.",
    services: [
      "Strateji",
      "Sosyal Medya",
      "Fotoğraf & Film",
      "SEO & GEO",
      "Dijital Reklam",
      "Web Deneyimi",
      "Markalaşma",
      "Influencer & PR",
      "Etkinlikler",
    ],
  },
};

export default function Services({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="services-section">
      <div className="section-kicker services-kicker">
        <span>05</span>
        <span>{t.kicker}</span>
      </div>

      <div className="services-head">
        <h2>{t.title}</h2>
        <p>{t.description}</p>
      </div>

      <div className="services-list">
        {t.services.map((service, index) => (
          <a href="#" className="service-row" key={service}>
            <span>{String(index + 1).padStart(2, "0")}</span>

            <h3>{service}</h3>

            <span className="service-arrow">
              <ArrowUpRight size={20} strokeWidth={1.2} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}