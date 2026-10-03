import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const insights = [
  {
    no: "01",
    slug: "hotel-marketing-2026",
    category: "Hospitality Marketing",
    title:
      "The digital behaviours reshaping hotel marketing in 2026",
    excerpt:
      "How the way guests discover, research and choose hotels is changing.",
    read: "6 min",
    visual: "insight-green",
  },
  {
    no: "02",
    slug: "geo-ai-search-hospitality",
    category: "GEO & AI",
    title:
      "From Google to AI: Is your brand visible in the new search era?",
    excerpt:
      "What changing search behaviour means for hospitality and lifestyle brands.",
    read: "8 min",
    visual: "insight-burgundy",
  },
  {
    no: "03",
    slug: "restaurant-social-media",
    category: "Social Media",
    title:
      "Why aesthetics alone are not enough for restaurant social media",
    excerpt:
      "The journey from attractive content to brand perception and commercial value.",
    read: "5 min",
    visual: "insight-gold",
  },
  {
    no: "04",
    slug: "direct-booking-hotel-brand",
    category: "Hospitality & Growth",
    title:
      "Direct booking isn't simply a performance marketing problem",
    excerpt:
      "How brand, experience and trust influence direct booking behaviour.",
    read: "7 min",
    visual: "insight-forest",
  },
  {
    no: "05",
    slug: "luxury-brand-digital-experience",
    category: "Premium Brands",
    title:
      "What should a luxury brand feel like digitally?",
    excerpt:
      "How speed, design, content and detail shape premium perception online.",
    read: "6 min",
    visual: "insight-wine",
  },
  {
    no: "06",
    slug: "content-hospitality-brands",
    category: "Content",
    title:
      "The difference between producing content and building a hospitality brand",
    excerpt:
      "Less content for content's sake. More consistency, meaning and memory.",
    read: "5 min",
    visual: "insight-stone",
  },
];

export default function InsightsPage() {
  const featured = insights[0];
  const rest = insights.slice(1);

  return (
    <main className="inner-site">
      <header className="royal-header">
        <Link href="/en" className="royal-brand">
          <span className="royal-monogram">M&G</span>
          <span className="royal-brand-name">DIGITAL</span>
        </Link>

        <nav className="royal-nav">
          <Link href="/en/work">Work</Link>
          <Link href="/en/expertise">Expertise</Link>
          <Link href="/en/services">Services</Link>
          <Link href="/en/about">About</Link>
          <Link href="/en/insights">Insights</Link>
        </nav>

        <div className="royal-actions">
          <div className="royal-language">
            <Link href="/tr">TR</Link>
            <span>/</span>
            <Link href="/en" className="active">
              EN
            </Link>
          </div>

          <Link href="/en/contact" className="royal-contact">
            Start a Project
            <ArrowUpRight size={13} strokeWidth={1.4} />
          </Link>
        </div>
      </header>

      <section className="insights-hero">
        <div className="inner-hero-top">
          <div className="royal-eyebrow">
            <span className="royal-diamond" />
            Insights
          </div>

          <span>M&G / JOURNAL</span>
        </div>

        <div className="insights-hero-main">
          <h1>
            Ideas.
            <br />
            Observations.
            <br />
            Perspective.
          </h1>

          <div>
            <p>
              Notes on hospitality, gastronomy,
              digital culture, technology and the
              changing world of brands.
            </p>

            <span>
              Hospitality · Culture · Digital
            </span>
          </div>
        </div>
      </section>

      <section className="insights-featured">
        <div className="insights-section-top">
          <span>01</span>
          <span>Featured</span>
          <span>2026</span>
        </div>

        <Link
          href={`/en/insights/${featured.slug}`}
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
              Read article
              <ArrowRight size={14} strokeWidth={1.4} />
            </span>
          </div>
        </Link>
      </section>

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
                href={`/en/insights/${insight.slug}`}
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
                <Link href={`/en/insights/${insight.slug}`}>
                  {insight.title}
                </Link>
              </h2>

              <p>{insight.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="insights-note">
        <div className="insights-note-index">
          <span>02</span>
          <span>M&G Journal</span>
        </div>

        <div className="insights-note-content">
          <span className="royal-diamond" />

          <h2>
            Rather than simply following trends,
            we look at what change actually means
            for brands.
          </h2>

          <p>
            Notes from the intersection of strategy,
            technology, culture and hospitality.
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
          From thinking to making
        </p>

        <h2>
          If there&apos;s something worth
          <br />
          talking about, let&apos;s begin.
        </h2>

        <Link href="/en/contact" className="final-button">
          Start a project
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
            <span className="footer-label">Explore</span>
            <Link href="/en/work">Work</Link>
            <Link href="/en/expertise">Expertise</Link>
            <Link href="/en/services">Services</Link>
            <Link href="/en/about">About</Link>
            <Link href="/en/insights">Insights</Link>
          </div>

          <div className="footer-column">
            <span className="footer-label">Locations</span>
            <span>Bodrum</span>
            <span>Istanbul</span>
            <span>Lisbon</span>
          </div>

          <div className="footer-column">
            <span className="footer-label">Contact</span>

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
          <Link href="/en">Home ↑</Link>
        </div>
      </footer>
    </main>
  );
}