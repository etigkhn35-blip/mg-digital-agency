type Locale = "en" | "tr";

const clients = [
  "Maça Kızı",
  "Scorpios",
  "Yalıkavak Marina",
  "Maxx Royal",
  "The Grand Tarabya",
  "Wyndham Hotels",
  "Istanbul Airport",
  "METT Hotel",
  "Caresse Resort",
  "Spektr Boutique Hotel",
  "Mynos Yalıkavak",
  "La Lara",
];

const content = {
  en: {
    kicker: "Selected Clients",
    label: "Brands we've shared the journey with.",
    titleFirst: "Good company",
    titleSecond: "keeps good company.",
  },

  tr: {
    kicker: "Seçili Markalar",
    label: "Yolculuğunu paylaştığımız markalar.",
    titleFirst: "İyi işler,",
    titleSecond: "iyi markalarla büyür.",
  },
};

export default function Clients({
  locale,
}: {
  locale: Locale;
}) {
  const t = content[locale];

  return (
    <section className="clients-section">
      <div className="section-kicker">
        <span>06</span>
        <span>{t.kicker}</span>
      </div>

      <div className="clients-head">
        <p>{t.label}</p>

        <h2>
          {t.titleFirst}
          <br />
          <em>{t.titleSecond}</em>
        </h2>
      </div>

      <div className="client-grid">
        {clients.map((client, index) => (
          <div
            className="client-cell"
            key={client}
          >
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <strong>{client}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}