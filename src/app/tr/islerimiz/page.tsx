import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    no: "01",
    slug: "splendid-palace-hotel",
    name: "Splendid Palace Hotel",
    location: "Büyükada · İstanbul",
    category: "Otel & Konaklama",
    year: "2026",
    className: "work-visual-green",
  },
  {
    no: "02",
    slug: "spektr-boutique-hotel",
    name: "Spektr Boutique Hotel",
    location: "Bodrum · Türkiye",
    category: "Otel & Konaklama",
    year: "2026",
    className: "work-visual-burgundy",
  },
  {
    no: "03",
    slug: "the-istanbul-butcher",
    name: "The Istanbul Butcher",
    location: "İstanbul · Türkiye",
    category: "Yeme & İçme",
    year: "2026",
    className: "work-visual-gold",
  },
  {
    no: "04",
    slug: "mynos-yalikavak",
    name: "Mynos Yalıkavak",
    location: "Yalıkavak · Bodrum",
    category: "Yeme & İçme",
    year: "2026",
    className: "work-visual-forest",
  },
  {
    no: "05",
    slug: "the-one-bodrum",
    name: "The One Bodrum",
    location: "Bodrum · Türkiye",
    category: "Otel & Yaşam Tarzı",
    year: "2026",
    className: "work-visual-wine",
  },
  {
    no: "06",
    slug: "la-lara",
    name: "La Lara",
    location: "Türkiye",
    category: "Otel & Konaklama",
    year: "2026",
    className: "work-visual-stone",
  },
];

export default function WorkPage() {
  return (
    <main className="inner-site">
      <header className="royal-header">
        <Link href="/tr" className="royal-brand">
          <span className="royal-monogram">M&G</span>
          <span className="royal-brand-name">DIGITAL</span>
        </Link>

        <nav className="royal-nav">
          <Link href="/tr/islerimiz">İşlerimiz</Link>
          <Link href="/tr/uzmanlik">Uzmanlık</Link>
          <Link href="/tr/hizmetler">Hizmetler</Link>
          <Link href="/tr/hakkimizda">Hakkımızda</Link>
          <Link href="/tr/icgoruler">İçgörüler</Link>
        </nav>

        <div className="royal-actions">
          <div className="royal-language">
            <Link href="/tr" className="active">
              TR
            </Link>
            <span>/</span>
            <Link href="/en">EN</Link>
          </div>

          <Link href="/tr/iletisim" className="royal-contact">
            Bir Proje Başlatalım
            <ArrowUpRight size={13} strokeWidth={1.4} />
          </Link>
        </div>
      </header>

      {/* PAGE HERO */}

      <section className="work-page-hero">
        <div className="work-page-hero-top">
          <div className="royal-eyebrow">
            <span className="royal-diamond" />
            Seçili Çalışmalar
          </div>

          <span>01 — 06</span>
        </div>

        <div className="work-page-title">
          <h1>
            Markalar.
            <br />
            Mekanlar.
            <br />
            Deneyimler.
          </h1>

          <div>
            <p>
              Turizm, gastronomi ve yaşam tarzı dünyasında
              markaların nasıl keşfedildiğini, algılandığını
              ve deneyimlendiğini yeniden tasarlıyoruz.
            </p>

            <span>Bodrum · İstanbul · Lizbon</span>
          </div>
        </div>
      </section>

      {/* FILTER */}

      <section className="work-filter">
        <span className="work-filter-label">Filtrele</span>

        <div>
          <button className="active">Tümü</button>
          <button>Otel & Konaklama</button>
          <button>Yeme & İçme</button>
          <button>Yaşam Tarzı</button>
        </div>

        <span className="work-count">06 Proje</span>
      </section>

      {/* PROJECTS */}

      <section className="work-page-grid">
        {projects.map((project) => (
          <article className="work-page-project" key={project.slug}>
            <Link
              href={`/tr/islerimiz/${project.slug}`}
              className={`work-page-visual ${project.className}`}
            >
              <div className="work-page-art" />

              <div className="work-page-visual-top">
                <span>{project.no}</span>
                <span>{project.year}</span>
              </div>

              <span className="work-page-open">
                <ArrowUpRight size={17} strokeWidth={1.3} />
              </span>
            </Link>

            <div className="work-page-meta">
              <div>
                <h2>{project.name}</h2>
                <p>{project.location}</p>
              </div>

              <span>{project.category}</span>
            </div>
          </article>
        ))}
      </section>

      {/* WORK CTA */}

      <section className="work-page-cta">
        <div className="work-cta-line">
          <span />
          <i>M&G</i>
          <span />
        </div>

        <p>Bir sonraki proje sizin olabilir.</p>

        <h2>
          Birlikte dikkat çekici
          <br />
          bir şey yaratalım.
        </h2>

        <Link href="/tr/iletisim">
          Bir proje başlatalım
          <ArrowUpRight size={14} strokeWidth={1.4} />
        </Link>
      </section>

      {/* FOOTER */}

      <footer className="royal-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <span>M&G</span>
            <small>DIGITAL</small>

            <p>
              Hospitality & Lifestyle
              <br />
              Growth Agency
            </p>
          </div>

          <div className="footer-column">
            <span className="footer-label">Keşfet</span>
            <Link href="/tr/islerimiz">İşlerimiz</Link>
            <Link href="/tr/uzmanlik">Uzmanlık</Link>
            <Link href="/tr/hizmetler">Hizmetler</Link>
            <Link href="/tr/hakkimizda">Hakkımızda</Link>
            <Link href="/tr/icgoruler">İçgörüler</Link>
          </div>

          <div className="footer-column">
            <span className="footer-label">Lokasyonlar</span>
            <span>Bodrum</span>
            <span>İstanbul</span>
            <span>Lizbon</span>
          </div>

          <div className="footer-column">
            <span className="footer-label">İletişim</span>

            <a href="tel:+905528418095">
              +90 552 841 80 95
            </a>

            <a href="mailto:gokhan.cebeci@mgdigitalagency.tr">
              gokhan.cebeci@mgdigitalagency.tr
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 M&G Digital Agency</span>
          <span>Bodrum · Istanbul · Lisbon</span>
          <Link href="/tr">Ana Sayfa ↑</Link>
        </div>
      </footer>
    </main>
  );
}