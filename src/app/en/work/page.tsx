import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    no: "01",
    slug: "splendid-palace-hotel",
    name: "Splendid Palace Hotel",
    location: "Büyükada · Istanbul",
    category: "Hospitality",
    year: "2026",
    className: "work-visual-green",
  },
  {
    no: "02",
    slug: "spektr-boutique-hotel",
    name: "Spektr Boutique Hotel",
    location: "Bodrum · Türkiye",
    category: "Hospitality",
    year: "2026",
    className: "work-visual-burgundy",
  },
  {
    no: "03",
    slug: "the-istanbul-butcher",
    name: "The Istanbul Butcher",
    location: "Istanbul · Türkiye",
    category: "Food & Beverage",
    year: "2026",
    className: "work-visual-gold",
  },
  {
    no: "04",
    slug: "mynos-yalikavak",
    name: "Mynos Yalıkavak",
    location: "Yalıkavak · Bodrum",
    category: "Food & Beverage",
    year: "2026",
    className: "work-visual-forest",
  },
  {
    no: "05",
    slug: "the-one-bodrum",
    name: "The One Bodrum",
    location: "Bodrum · Türkiye",
    category: "Hospitality & Lifestyle",
    year: "2026",
    className: "work-visual-wine",
  },
  {
    no: "06",
    slug: "la-lara",
    name: "La Lara",
    location: "Türkiye",
    category: "Hospitality",
    year: "2026",
    className: "work-visual-stone",
  },
];

export default function WorkPage() {
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

      <section className="work-page-hero">
        <div className="work-page-hero-top">
          <div className="royal-eyebrow">
            <span className="royal-diamond" />
            Selected Work
          </div>

          <span>01 — 06</span>
        </div>

        <div className="work-page-title">
          <h1>
            Brands.
            <br />
            Places.
            <br />
            Experiences.
          </h1>

          <div>
            <p>
              We shape how hospitality, gastronomy and
              lifestyle brands are discovered, understood
              and experienced.
            </p>

            <span>Bodrum · Istanbul · Lisbon</span>
          </div>
        </div>
      </section>

      <section className="work-filter">
        <span className="work-filter-label">Filter</span>

        <div>
          <button className="active">All</button>
          <button>Hospitality</button>
          <button>Food & Beverage</button>
          <button>Lifestyle</button>
        </div>

        <span className="work-count">06 Projects</span>
      </section>

      <section className="work-page-grid">
        {projects.map((project) => (
          <article className="work-page-project" key={project.slug}>
            <Link
              href={`/en/work/${project.slug}`}
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

      <section className="work-page-cta">
        <div className="work-cta-line">
          <span />
          <i>M&G</i>
          <span />
        </div>

        <p>Your brand could be next.</p>

        <h2>
          Let&apos;s create something
          <br />
          worth remembering.
        </h2>

        <Link href="/en/contact">
          Start a project
          <ArrowUpRight size={14} strokeWidth={1.4} />
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