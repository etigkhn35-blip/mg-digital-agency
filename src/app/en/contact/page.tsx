import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";

const BODRUM_MAP_URL =
  "https://www.google.com/maps/dir/?api=1&destination=37.0394703,27.4108849";

export default function ContactPage() {
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

      <section className="contact-hero">
        <div className="inner-hero-top">
          <div className="royal-eyebrow">
            <span className="royal-diamond" />
            Contact
          </div>

          <span>M&G / 05</span>
        </div>

        <div className="contact-hero-grid">
          <div className="contact-hero-title">
            <h1>
              Let&apos;s make
              <br />
              something
              <br />
              remarkable.
            </h1>
          </div>

          <div className="contact-hero-copy">
            <p>
              A new brand, a new project or a digital
              problem worth solving? Let&apos;s talk.
            </p>

            <div>
              <span>NEW BUSINESS</span>

              <a href="mailto:gokhan.cebeci@mgdigitalagency.tr">
                gokhan.cebeci@mgdigitalagency.tr
              </a>
            </div>
          </div>

          <div className="contact-hero-monogram">
            <div className="contact-monogram-inner">
              <span className="contact-monogram-top">
                EST. 2026
              </span>

              <div>
                <strong>M</strong>
                <i>&</i>
                <strong>G</strong>
              </div>

              <small>
                BODRUM · ISTANBUL · LISBON
              </small>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-project">
        <div className="contact-project-heading">
          <div className="inner-index">
            <span>01</span>
            <span>Tell Us About It</span>
          </div>

          <div>
            <p>Have a project in mind?</p>

            <h2>
              Let&apos;s start with
              <br />
              a few details.
            </h2>
          </div>
        </div>

        <form className="contact-form">
          <div className="contact-field">
            <label htmlFor="name">Your Name</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Full name"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="company">Brand / Company</label>

            <input
              id="company"
              name="company"
              type="text"
              placeholder="Brand or company name"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="hello@brand.com"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="phone">Phone</label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+90"
            />
          </div>

          <div className="contact-field contact-field-full">
            <label>How can we help?</label>

            <div className="contact-services-select">
              <label>
                <input type="checkbox" name="services" value="strategy" />
                <span>Strategy</span>
              </label>

              <label>
                <input type="checkbox" name="services" value="creative" />
                <span>Creative</span>
              </label>

              <label>
                <input type="checkbox" name="services" value="content" />
                <span>Content</span>
              </label>

              <label>
                <input type="checkbox" name="services" value="growth" />
                <span>Growth</span>
              </label>

              <label>
                <input type="checkbox" name="services" value="technology" />
                <span>Technology</span>
              </label>
            </div>
          </div>

          <div className="contact-field contact-field-full">
            <label htmlFor="message">
              Tell us about the project
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us a little about your brand, your goals or the project you'd like to work on."
            />
          </div>

          <div className="contact-submit-row">
            <p>
              By submitting this form, you agree that
              we may contact you about your project.
            </p>

            <button type="submit">
              Send Project
              <ArrowUpRight size={15} strokeWidth={1.4} />
            </button>
          </div>
        </form>
      </section>

      <section className="contact-direct">
        <div className="contact-direct-top">
          <span>M&G / DIRECT</span>
          <span>02</span>
        </div>

        <div className="contact-direct-grid">
          <div className="contact-direct-title">
            <span className="royal-diamond" />

            <h2>
              Not a fan
              <br />
              of forms?
            </h2>

            <p>
              Reach us directly.
            </p>
          </div>

          <a
            href="mailto:gokhan.cebeci@mgdigitalagency.tr"
            className="contact-direct-card"
          >
            <div>
              <Mail size={18} strokeWidth={1.3} />
              <span>EMAIL</span>
            </div>

            <strong>
              gokhan.cebeci
              <br />
              @mgdigitalagency.tr
            </strong>

            <ArrowUpRight
              className="contact-direct-arrow"
              size={17}
              strokeWidth={1.3}
            />
          </a>

          <a
            href="tel:+905528418095"
            className="contact-direct-card"
          >
            <div>
              <Phone size={18} strokeWidth={1.3} />
              <span>PHONE</span>
            </div>

            <strong>
              +90 552
              <br />
              841 80 95
            </strong>

            <ArrowUpRight
              className="contact-direct-arrow"
              size={17}
              strokeWidth={1.3}
            />
          </a>
        </div>
      </section>

      <section className="contact-locations">
        <div className="contact-locations-heading">
          <div>
            <div className="royal-eyebrow royal-eyebrow-dark">
              <span className="royal-diamond" />
              Locations
            </div>

            <h2>
              Three cities.
              <br />
              One creative standard.
            </h2>
          </div>

          <p>
            Working across Bodrum, Istanbul and Lisbon,
            combining local insight with an international
            perspective.
          </p>
        </div>

        <div className="contact-location-grid">
          <article>
            <span>01</span>

            <div>
              <h3>Bodrum</h3>
              <small>Türkiye</small>
            </div>

            <p>
              Turgut Reis Cd. No:259 D:1
              <br />
              Gümbet, 48400 Bodrum / Muğla
            </p>

            <a
              href={BODRUM_MAP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Directions
              <ArrowUpRight size={13} strokeWidth={1.3} />
            </a>
          </article>

          <article>
            <span>02</span>

            <div>
              <h3>Istanbul</h3>
              <small>Türkiye</small>
            </div>

            <p>
              Dikilitaş Mah. Emirhan Cad.
              <br />
              No:3 D:3, Beşiktaş / Istanbul
            </p>

            <span className="contact-location-note">
              M&G DIGITAL
            </span>
          </article>

          <article>
            <span>03</span>

            <div>
              <h3>Lisbon</h3>
              <small>Portugal</small>
            </div>

            <p>
              R. de São Bento 31
              <br />
              1200-815 Lisboa / Portugal
            </p>

            <span className="contact-location-note">
              M&G DIGITAL
            </span>
          </article>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="contact-map-info">
          <div>
            <span>03</span>
            <span>Bodrum Office</span>
          </div>

          <h2>
            From the Aegean
            <br />
            to the world.
          </h2>

          <p>
            Monday — Saturday
            <br />
            08:00 — 20:00
          </p>

          <a
            href={BODRUM_MAP_URL}
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
            <ArrowUpRight size={13} strokeWidth={1.3} />
          </a>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps?q=37.0394703,27.4108849&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="M&G Digital Bodrum Office"
          />
        </div>
      </section>

      <section className="contact-final">
        <div className="final-ornament">
          <span />
          <i>M&G</i>
          <span />
        </div>

        <p>
          Good work starts with a good conversation.
        </p>

        <h2>
          Let&apos;s start
          <br />
          yours.
        </h2>

        <a href="mailto:gokhan.cebeci@mgdigitalagency.tr">
          gokhan.cebeci@mgdigitalagency.tr
          <ArrowUpRight size={15} strokeWidth={1.4} />
        </a>
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