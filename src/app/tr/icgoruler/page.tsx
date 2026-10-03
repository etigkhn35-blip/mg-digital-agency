import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const insights = [
  {
    no: "01",
    slug: "hotel-marketing-2026",
    category: "Turizm Pazarlaması",
    title:
      "2026'da otel pazarlamasını değiştiren dijital davranışlar",
    excerpt:
      "Misafirlerin otel keşfetme, araştırma ve rezervasyon kararları nasıl değişiyor?",
    read: "6 dk.",
    visual: "insight-green",
    featured: true,
  },
  {
    no: "02",
    slug: "geo-ai-search-hospitality",
    category: "GEO & AI",
    title:
      "Google'dan yapay zekaya: Markanız yeni arama çağında görünür mü?",
    excerpt:
      "Arama davranışı değişirken otel ve yaşam tarzı markalarının GEO stratejisi.",
    read: "8 dk.",
    visual: "insight-burgundy",
  },
  {
    no: "03",
    slug: "restaurant-social-media",
    category: "Sosyal Medya",
    title:
      "Restoran sosyal medyasında estetik neden tek başına yetmiyor?",
    excerpt:
      "Güzel içerikten marka algısına ve ticari sonuca uzanan yol.",
    read: "5 dk.",
    visual: "insight-gold",
  },
  {
    no: "04",
    slug: "direct-booking-hotel-brand",
    category: "Otel & Büyüme",
    title:
      "Doğrudan rezervasyon yalnızca performans pazarlaması problemi değil",
    excerpt:
      "Marka, deneyim ve güven doğrudan rezervasyon davranışını nasıl etkiliyor?",
    read: "7 dk.",
    visual: "insight-forest",
  },
  {
    no: "05",
    slug: "luxury-brand-digital-experience",
    category: "Premium Markalar",
    title:
      "Lüks bir markanın dijital deneyimi nasıl hissettirmeli?",
    excerpt:
      "Premium algının hız, tasarım, içerik ve detaylarla kurulan dijital tarafı.",
    read: "6 dk.",
    visual: "insight-wine",
  },
  {
    no: "06",
    slug: "content-hospitality-brands",
    category: "İçerik",
    title:
      "Turizm markaları için içerik üretmek ile marka anlatmak arasındaki fark",
    excerpt:
      "Daha fazla içerik değil, daha tutarlı ve hatırlanabilir bir dünya yaratmak.",
    read: "5 dk.",
    visual: "insight-stone",
  },
];

export default function InsightsPage() {
  const featured = insights[0];
  const rest = insights.slice(1);

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

      {/* HERO */}

      <section className="insights-hero">
        <div className="inner-hero-top">
          <div className="royal-eyebrow">
            <span className="royal-diamond" />
            İçgörüler
          </div>

          <span>M&G / JOURNAL</span>
        </div>

        <div className="insights-hero-main">
          <h1>
            Fikirler.
            <br />
            Gözlemler.
            <br />
            Perspektif.
          </h1>

          <div>
            <p>
              Turizm, gastronomi, dijital kültür,
              teknoloji ve markaların değişen dünyası
              üzerine notlarımız.
            </p>

            <span>
              Hospitality · Culture · Digital
            </span>
          </div>
        </div>
      </section>

      {/* FEATURED */}

      <section className="insights-featured">
        <div className="insights-section-top">
          <span>01</span>
          <span>Öne Çıkan</span>
          <span>2026</span>
        </div>

        <Link
          href={`/tr/icgoruler/${featured.slug}`}
          className="featured-insight"
        >
          <div
            className={`featured-insight-visual ${featured.visual}`}
          >
            <div className="insight-art" />

            <span className="featured-insight-no">
              {featured.no}
            </span>

            <div className="featured-insight-mark">
              M&G
              <small>JOURNAL</small>
            </div>

            <span className="featured-insight-arrow">
              <ArrowUpRight size={18} strokeWidth={1.3} />
            </span>
          </div>

          <div className="featured-insight-copy">
            <div>
              <span>{featured.category}</span>
              <span>{featured.read}</span>
            </div>

            <h2>{featured.title}</h2>

            <p>{featured.excerpt}</p>

            <span className="insight-read-link">
              Yazıyı oku
              <ArrowRight size={14} strokeWidth={1.4} />
            </span>
          </div>
        </Link>
      </section>

      {/* JOURNAL */}

      <section className="insights-journal">
        <div className="insights-journal-heading">
          <div className="royal-eyebrow royal-eyebrow-dark">
            <span className="royal-diamond" />
            Journal
          </div>

          <span>02 — 06</span>
        </div>

        <div className="insights-grid">
          {rest.map((insight) => (
            <article className="insight-card" key={insight.slug}>
              <Link
                href={`/tr/icgoruler/${insight.slug}`}
                className={`insight-card-visual ${insight.visual}`}
              >
                <div className="insight-art" />

                <span>{insight.no}</span>

                <span className="insight-card-open">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.3}
                  />
                </span>
              </Link>

              <div className="insight-card-meta">
                <span>{insight.category}</span>
                <span>{insight.read}</span>
              </div>

              <h2>
                <Link href={`/tr/icgoruler/${insight.slug}`}>
                  {insight.title}
                </Link>
              </h2>

              <p>{insight.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* NEWSLETTER / POV */}

      <section className="insights-note">
        <div className="insights-note-index">
          <span>02</span>
          <span>M&G Journal</span>
        </div>

        <div className="insights-note-content">
          <span className="royal-diamond" />

          <h2>
            Trendleri takip etmekten çok,
            değişimin markalar için ne anlama
            geldiğini anlamaya çalışıyoruz.
          </h2>

          <p>
            Strateji, teknoloji, kültür ve
            turizmin kesişiminden notlar.
          </p>
        </div>
      </section>

      <section className="royal-final">
        <div className="final-ornament">
          <span />
          <i>M&G</i>
          <span />
        </div>

        <p className="final-kicker">
          Fikirden projeye
        </p>

        <h2>
          Konuşacak bir şeyimiz
          <br />
          varsa başlayalım.
        </h2>

        <Link href="/tr/iletisim" className="final-button">
          Bir proje başlatalım
          <ArrowUpRight size={15} strokeWidth={1.4} />
        </Link>
      </section>

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