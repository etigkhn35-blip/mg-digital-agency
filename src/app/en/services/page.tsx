import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    no: "01",
    title: "Strategy",
    intro:
      "We define where the brand stands, who it speaks to and how it should grow in the digital world.",
    items: [
      "Brand Positioning",
      "Digital Strategy",
      "Communication Strategy",
      "Market & Competitor Analysis",
      "Growth Roadmap",
    ],
    visual: "service-detail-green",
  },
  {
    no: "02",
    title: "Creative",
    intro:
      "We translate strategy into a distinctive, consistent and ownable visual world.",
    items: [
      "Creative Direction",
      "Campaign Concepts",
      "Visual Language",
      "Digital Design",
      "Brand Communication",
    ],
    visual: "service-detail-burgundy",
  },
  {
    no: "03",
    title: "Content",
    intro:
      "We build content systems that express the character of the brand and remain effective across digital channels.",
    items: [
      "Photography",
      "Video",
      "Social Content",
      "Editorial Content",
      "Content Planning",
    ],
    visual: "service-detail-gold",
  },
  {
    no: "04",
    title: "Growth",
    intro:
      "We build performance and organic growth systems that turn visibility into measurable commercial value.",
    items: [
      "Performance Marketing",
      "SEO",
      "GEO / AI Visibility",
      "Digital Campaigns",
      "Measurement & Optimisation",
    ],
    visual: "service-detail-wine",
  },
  {
    no: "05",
    title: "Technology",
    intro:
      "We complete the digital brand experience with fast, refined and user-focused digital products.",
    items: [
      "Web Design",
      "Web Development",
      "Digital Experience",
      "Landing Pages",
      "Conversion Optimisation",
    ],
    visual: "service-detail-forest",
  },
];

export default function ServicesPage() {
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

      <section className="services-page-hero">
        <div className="inner-hero-top">
          <div className="royal-eyebrow">
            <span className="royal-diamond" />
            Services
          </div>

          <span>M&G / 02</span>
        </div>

        <div className="services-hero-main">
          <div>
            <h1>
              From strategy
              <br />
              to growth.
            </h1>

            <p className="services-hero-small">
              One creative system.
            </p>
          </div>

          <div className="services-hero-card">
            <span className="services-card-index">01 — 05</span>

            <div className="services-card-mark">
              <span>M</span>
              <i>&</i>
              <span>G</span>
            </div>

            <p>
              STRATEGY · CREATIVE
              <br />
              CONTENT · GROWTH
              <br />
              TECHNOLOGY
            </p>
          </div>

          <div className="services-hero-copy">
            <p>
              We treat the disciplines a brand needs
              not as separate services, but as one
              connected system working towards the
              same objective.
            </p>

            <span>Bodrum · Istanbul · Lisbon</span>
          </div>
        </div>
      </section>

      <section className="services-intro">
        <div className="inner-index">
          <span>01</span>
          <span>What We Do</span>
        </div>

        <div className="services-intro-content">
          <h2>
            Looking good isn't enough. The work
            should contribute to the growth of the brand.
          </h2>

          <div>
            <p>
              That's why strategy, creative, content,
              performance and technology sit around
              the same table.
            </p>

            <p>
              Each discipline strengthens the next.
              The result is a more coherent brand,
              a stronger digital experience and a
              more measurable growth system.
            </p>
          </div>
        </div>
      </section>

      <section className="service-details">
        <div className="service-details-header">
          <div className="royal-eyebrow royal-eyebrow-dark">
            <span className="royal-diamond" />
            Disciplines
          </div>

          <span>01 — 05</span>
        </div>

        <div className="service-detail-list">
          {services.map((service) => (
            <article className="service-detail" key={service.no}>
              <div className="service-detail-heading">
                <span>{service.no}</span>
                <h2>{service.title}</h2>
              </div>

              <div
                className={`service-detail-visual ${service.visual}`}
              >
                <div className="service-detail-art" />

                <span className="service-detail-visual-no">
                  M&G / {service.no}
                </span>

                <span className="service-detail-symbol">
                  {service.no}
                </span>
              </div>

              <div className="service-detail-copy">
                <p>{service.intro}</p>

                <div className="service-capabilities">
                  {service.items.map((item, index) => (
                    <div key={item}>
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <strong>{item}</strong>
                    </div>
                  ))}
                </div>

                <Link href="/en/contact">
                  Discuss this service
                  <ArrowRight size={14} strokeWidth={1.4} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-process">
        <div className="process-header">
          <span>M&G / HOW WE WORK</span>
          <span>01 — 04</span>
        </div>

        <div className="process-intro">
          <div>
            <span className="royal-diamond" />

            <h2>
              Making complex
              <br />
              processes simple.
            </h2>
          </div>

          <p>
            Rather than forcing every project into
            the same formula, we define the need,
            assemble the right team and move forward
            with a measurable roadmap.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-item">
            <span>01</span>
            <h3>Discover</h3>
            <p>
              Understanding the brand, its objectives
              and current position.
            </p>
          </div>

          <div className="process-item">
            <span>02</span>
            <h3>Define</h3>
            <p>
              Creating the positioning, strategy and
              roadmap.
            </p>
          </div>

          <div className="process-item">
            <span>03</span>
            <h3>Create</h3>
            <p>
              Translating strategy into creative and
              digital output.
            </p>
          </div>

          <div className="process-item">
            <span>04</span>
            <h3>Grow</h3>
            <p>
              Measuring, refining and building
              sustainable growth.
            </p>
          </div>
        </div>
      </section>

      <section className="services-principle">
        <div className="services-principle-label">
          <span>02</span>
          <span>M&G Digital</span>
        </div>

        <div>
          <p>For us, great work</p>

          <h2>
            protects the character of the brand
            while serving its commercial ambitions.
          </h2>

          <Link href="/en/work">
            Explore our work
            <ArrowUpRight size={14} strokeWidth={1.4} />
          </Link>
        </div>
      </section>

      <section className="royal-final">
        <div className="final-ornament">
          <span />
          <i>M&G</i>
          <span />
        </div>

        <p className="final-kicker">
          Not sure where to begin?
        </p>

        <h2>
          Let&apos;s define what your brand
          <br />
          actually needs.
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