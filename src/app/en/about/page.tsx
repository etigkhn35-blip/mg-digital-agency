import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const principles = [
  {
    no: "01",
    title: "Understand First",
    text:
      "We don't start creating until we understand the brand, its audience and its commercial objectives.",
  },
  {
    no: "02",
    title: "Make It Clear",
    text:
      "We turn complex problems into clear strategies and ideas people can act on.",
  },
  {
    no: "03",
    title: "Create Together",
    text:
      "Strategy, creative, content, growth and technology never work in isolation.",
  },
  {
    no: "04",
    title: "Follow the Result",
    text:
      "Launch is not the finish line. We measure, learn, improve and grow.",
  },
];

export default function AboutPage() {
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

          <Link
            href="/en/contact"
            className="royal-contact"
          >
            Start a Project
            <ArrowUpRight size={13} strokeWidth={1.4} />
          </Link>
        </div>
      </header>

      <section className="about-page-hero">
        <div className="inner-hero-top">
          <div className="royal-eyebrow">
            <span className="royal-diamond" />
            About
          </div>

          <span>M&G / 03</span>
        </div>

        <div className="about-hero-grid">
          <div className="about-hero-copy">
            <h1>
              Independent.
              <br />
              Curious.
              <br />
              Growth-minded.
            </h1>

            <p>
              An independent digital agency bringing
              strategy, creative, content, growth and
              technology together for hospitality and
              lifestyle brands.
            </p>
          </div>

          <div className="about-hero-visual">
            <div className="about-hero-art" />

            <span className="about-visual-top">
              EST. 2026
            </span>

            <div className="about-visual-monogram">
              <span>M</span>
              <i>&</i>
              <span>G</span>
            </div>

            <div className="about-visual-bottom">
              <span>Bodrum</span>
              <span>Istanbul</span>
              <span>Lisbon</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-manifesto">
        <div className="inner-index">
          <span>01</span>
          <span>Our Point of View</span>
        </div>

        <div className="about-manifesto-content">
          <p className="about-manifesto-small">
            M&G Digital
          </p>

          <h2>
            People no longer meet a brand when
            they walk through its doors. They meet
            it the first time it appears on a screen.
          </h2>

          <div className="about-manifesto-copy">
            <p>
              That's why we don't see digital as
              simply another communication channel.
              It is the brand's first impression,
              story, storefront and often its first
              point of sale.
            </p>

            <p>
              Our job is to translate the value of
              the real-world experience into digital
              without losing what makes it special.
            </p>
          </div>
        </div>
      </section>

      <section className="about-statement">
        <div className="about-statement-top">
          <span>M&G / POINT OF VIEW</span>
          <span>HOSPITALITY · CULTURE · GROWTH</span>
        </div>

        <div className="about-statement-content">
          <span className="royal-diamond" />

          <p>For us, the goal isn't</p>

          <h2>
            to create more content.
            <br />
            It&apos;s to build a stronger brand.
          </h2>
        </div>
      </section>

      <section className="about-roots">
        <div className="about-roots-heading">
          <div>
            <div className="royal-eyebrow royal-eyebrow-dark">
              <span className="royal-diamond" />
              Where We Come From
            </div>

            <h2>
              A point of view shaped
              by hospitality.
            </h2>
          </div>

          <p>
            We understand guest behaviour, seasonality,
            destinations, experience and the everyday
            realities of hospitality brands.
          </p>
        </div>

        <div className="about-roots-grid">
          <div className="about-root-visual">
            <div className="about-root-art" />

            <span>01</span>

            <div>
              <strong>Hospitality</strong>
              <small>From experience to digital</small>
            </div>
          </div>

          <div className="about-root-copy">
            <span>01 / 03</span>

            <h3>
              Hospitality is more than
              an area of expertise for us.
            </h3>

            <p>
              We don't look at hotels, restaurants
              and destinations solely through a
              marketing lens.
            </p>

            <p>
              We consider the guest journey, the
              relationship with the brand and how
              the real experience is represented
              digitally as one connected system.
            </p>

            <Link href="/en/expertise">
              Explore our expertise

              <ArrowRight
                size={14}
                strokeWidth={1.4}
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="about-network">
        <div className="about-network-heading">
          <span>02</span>

          <div>
            <p>Local insight.</p>

            <h2>
              International
              perspective.
            </h2>
          </div>

          <p className="about-network-intro">
            Different cities. The same creative
            standard.
          </p>
        </div>

        <div className="about-city-grid">
          <article>
            <span>01</span>
            <h3>Bodrum</h3>
            <p>Türkiye</p>
            <small>37° N · 27° E</small>
          </article>

          <article>
            <span>02</span>
            <h3>Istanbul</h3>
            <p>Türkiye</p>
            <small>41° N · 29° E</small>
          </article>

          <article>
            <span>03</span>
            <h3>Lisbon</h3>
            <p>Portugal</p>
            <small>38° N · 09° W</small>
          </article>
        </div>
      </section>

      <section className="about-principles">
        <div className="about-principles-heading">
          <div className="royal-eyebrow royal-eyebrow-dark">
            <span className="royal-diamond" />
            How We Work
          </div>

          <h2>
            Less noise.
            <br />
            Clear thinking.
            <br />
            Strong work.
          </h2>
        </div>

        <div className="about-principles-list">
          {principles.map((principle) => (
            <article key={principle.no}>
              <span>{principle.no}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-culture">
        <div className="about-culture-label">
          <span>03</span>
          <span>M&G Digital</span>
        </div>

        <div className="about-culture-content">
          <span className="royal-diamond" />

          <h2>
            The standards of a large agency,
            without the layers of one.
          </h2>

          <p>
            Closer communication, faster decisions,
            less bureaucracy and a team directly
            involved in the work.
          </p>

          <Link href="/en/contact">
            Meet M&G

            <ArrowUpRight
              size={14}
              strokeWidth={1.4}
            />
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
          What could we create together?
        </p>

        <h2>
          Let&apos;s take your brand
          <br />
          further.
        </h2>

        <Link
          href="/en/contact"
          className="final-button"
        >
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