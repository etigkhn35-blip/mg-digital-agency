type Locale = "en" | "tr";

const content = {
  en: {
    kicker: "M&G in numbers",
    statement: ["One agency.", "Multiple markets.", "One standard."],
    stats: [
      { number: "80+", label: "Brands" },
      { number: "240+", label: "Projects" },
      { number: "7", label: "Countries" },
      { number: "3", label: "Cities" },
    ],
    locations: ["Bodrum", "Istanbul", "Lisbon"],
  },

  tr: {
    kicker: "Rakamlarla M&G",
    statement: ["Tek ajans.", "Birden fazla pazar.", "Tek standart."],
    stats: [
      { number: "80+", label: "Marka" },
      { number: "240+", label: "Proje" },
      { number: "7", label: "Ülke" },
      { number: "3", label: "Şehir" },
    ],
    locations: ["Bodrum", "İstanbul", "Lizbon"],
  },
};

export default function Numbers({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="numbers-section">
      <div className="numbers-top">
        <span>{t.kicker}</span>

        <p>
          {t.statement.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>

      <div className="numbers-grid">
        {t.stats.map((stat, index) => (
          <div className="stat" key={stat.label}>
            <span className="stat-index">
              {String(index + 1).padStart(2, "0")}
            </span>

            <strong>{stat.number}</strong>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="numbers-locations">
        {t.locations.map((location, index) => (
          <span
            key={location}
            style={{ display: "contents" }}
          >
            <span>{location}</span>
            {index < t.locations.length - 1 && <i />}
          </span>
        ))}
      </div>
    </section>
  );
}