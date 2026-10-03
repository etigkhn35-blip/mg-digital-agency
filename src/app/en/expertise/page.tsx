import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const expertise = [
  {
    no: "01",
    title: "Hotels & Hospitality",
    text:
      "We approach hospitality brands as complete worlds shaped by destination, experience, culture and lifestyle.",
    tags: [
      "Hotels",
      "Resorts",
      "Destinations",
      "Boutique Hotels",
    ],
    visual: "expertise-visual-green",
  },
  {
    no: "02",
    title: "Food & Beverage",
    text:
      "We translate the character of restaurants and gastronomy brands into distinctive digital experiences.",
    tags: [
      "Restaurants",
      "Gastronomy",
      "Places",
      "Experiences",
    ],
    visual: "expertise-visual-burgundy",
  },
  {
    no: "03",
    title: "Premium & Lifestyle",
    text:
      "We shape the digital identity, aesthetic value and audience relationship of premium lifestyle brands.",
    tags: [
      "Premium Brands",
      "Lifestyle",
      "Places",
      "Experiences",
    ],
    visual: "expertise-visual-gold",
  },
];

export default function ExpertisePage() {
  return (
    <main className="inner-site">
      <header className="royal-header">
        <Link href="/en" className="royal-brand">
          <span className="royal-monogram">
            M&G
          </span>

          <span className="royal-brand-name">
            DIGITAL
          </span>
        </Link>

        <nav className="royal-nav">
          <Link href="/en/work">
            Work
          </Link>

          <Link href="/en/expertise">
            Expertise
          </Link>

          <Link href="/en/services">
            Services
          </Link>

          <Link href="/en/about">
            About
          </Link>

          <Link href="/en/insights">
            Insights
          </Link>
        </nav>

        <div className="royal-actions">
          <div className="royal-language">
            <Link href="/tr">
              TR
            </Link>

            <span>/</span>

            <Link
              href="/en"
              className="active"
            >
              EN
            </Link>
          </div>

          <Link
            href="/en/contact"
            className="royal-contact"
          >
            Start a Project

            <ArrowUpRight
              size={13}
              strokeWidth={1.4}
            />
          </Link>
        </div>
      </header>

      <section className="expertise-page-hero">
        <div className="inner-hero-top">
          <div className="royal-eyebrow">
            <span className="royal-diamond" />
            Expertise
          </div>

          <span>M&G / 01</span>
        </div>

        <div className="expertise-hero-grid">
          <h1>
            The world
            <br />
            we know best.
          </h1>

          <div className="expertise-hero-copy">
            <p>
              Hospitality isn't simply an industry
              we serve. It's the world we come from.
            </p>

            <span>
              Hospitality · Gastronomy · Lifestyle
            </span>
          </div>
        </div>

        <div className="expertise-hero-band">
          <span>Local insight</span>
          <i />
          <span>International perspective</span>
          <i />
          <span>One creative standard</span>
        </div>
      </section>

      <section className="expertise-intro">
        <div className="inner-index">
          <span>01</span>
          <span>Our Approach</span>
        </div>

        <div className="expertise-intro-content">
          <h2>
            Before deciding how a brand should
            look online, we decide how people
            should feel about it.
          </h2>

          <div className="expertise-intro-bottom">
            <p>
              We understand the needs of hotels,
              restaurants and lifestyle brands
              from within. Strategy, aesthetics,
              content and performance are never
              treated as separate disciplines.
            </p>

            <p>
              Every project begins by understanding
              the brand, its audience and its
              commercial ambitions as one.
            </p>
          </div>
        </div>
      </section>

      <section className="expertise-areas">
        <div className="expertise-area-heading">
          <div className="royal-eyebrow royal-eyebrow-dark">
            <span className="royal-diamond" />
            Areas of Expertise
          </div>

          <span>01 — 03</span>
        </div>

        <div className="expertise-area-list">
          {expertise.map((item) => (
            <article
              className="expertise-area"
              key={item.no}
            >
              <div
                className={`expertise-area-visual ${item.visual}`}
              >
                <div className="expertise-area-art" />

                <span className="expertise-area-number">
                  {item.no}
                </span>

                <span className="expertise-area-mark">
                  M&G
                </span>
              </div>

              <div className="expertise-area-copy">
                <span className="expertise-area-index">
                  {item.no}
                </span>

                <h2>{item.title}</h2>

                <p>{item.text}</p>

                <div className="expertise-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href="/en/contact">
                  Discuss this expertise

                  <ArrowRight
                    size={14}
                    strokeWidth={1.4}
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise-philosophy">
        <div className="philosophy-top">
          <span>M&G DIGITAL</span>
          <span>BODRUM · ISTANBUL · LISBON</span>
        </div>

        <div className="philosophy-content">
          <span className="royal-diamond" />

          <h2>
            We don't market hospitality.
            <br />
            We make people want it.
          </h2>

          <p>
            Strategy, creativity and technology
            are tools we use to make the real-world
            brand experience stronger.
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
          What can we do for your brand?
        </p>

        <h2>
          Let&apos;s build a brand that reaches
          <br />
          the right people and stays with them.
        </h2>

        <Link
          href="/en/contact"
          className="final-button"
        >
          Start a project

          <ArrowUpRight
            size={15}
            strokeWidth={1.4}
          />
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
            <span className="footer-label">
              Explore
            </span>

            <Link href="/en/work">Work</Link>
            <Link href="/en/expertise">Expertise</Link>
            <Link href="/en/services">Services</Link>
            <Link href="/en/about">About</Link>
            <Link href="/en/insights">Insights</Link>
          </div>

          <div className="footer-column">
            <span className="footer-label">
              Locations
            </span>

            <span>Bodrum</span>
            <span>Istanbul</span>
            <span>Lisbon</span>
          </div>

          <div className="footer-column">
            <span className="footer-label">
              Contact
            </span>

            <a href="tel:+905528418095">
              +90 552 841 80 95
            </a>

            <a href="mailto:gokhan.cebeci@mgdigitalagency.tr">
              gokhan.cebeci@mgdigitalagency.tr
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 M&G Digital Agency
          </span>

          <span>
            Bodrum · Istanbul · Lisbon
          </span>

          <Link href="/en">
            Home ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}