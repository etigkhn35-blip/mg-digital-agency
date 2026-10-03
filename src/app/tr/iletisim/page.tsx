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

      <section className="contact-hero">
        <div className="inner-hero-top">
          <div className="royal-eyebrow">
            <span className="royal-diamond" />
            İletişim
          </div>

          <span>M&G / 05</span>
        </div>

        <div className="contact-hero-grid">
          <div className="contact-hero-title">
            <h1>
              Birlikte
              <br />
              iyi bir şey
              <br />
              yapalım.
            </h1>
          </div>

          <div className="contact-hero-copy">
            <p>
              Yeni bir marka, yeni bir proje ya da
              çözmek istediğiniz dijital bir problem
              varsa konuşalım.
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

      {/* PROJECT FORM */}

      <section className="contact-project">
        <div className="contact-project-heading">
          <div className="inner-index">
            <span>01</span>
            <span>Projenizi Anlatın</span>
          </div>

          <div>
            <p>Yeni bir proje mi var?</p>

            <h2>
              Birkaç detayla
              <br />
              başlayalım.
            </h2>
          </div>
        </div>

        <form className="contact-form">
          <div className="contact-field">
            <label htmlFor="name">Adınız</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Ad Soyad"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="company">Marka / Şirket</label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Marka veya şirket adı"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email">E-posta</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="ornek@marka.com"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="phone">Telefon</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+90"
            />
          </div>

          <div className="contact-field contact-field-full">
            <label>Nasıl yardımcı olabiliriz?</label>

            <div className="contact-services-select">
              <label>
                <input type="checkbox" name="services" value="strategy" />
                <span>Strateji</span>
              </label>

              <label>
                <input type="checkbox" name="services" value="creative" />
                <span>Kreatif</span>
              </label>

              <label>
                <input type="checkbox" name="services" value="content" />
                <span>İçerik</span>
              </label>

              <label>
                <input type="checkbox" name="services" value="growth" />
                <span>Büyüme</span>
              </label>

              <label>
                <input type="checkbox" name="services" value="technology" />
                <span>Teknoloji</span>
              </label>
            </div>
          </div>

          <div className="contact-field contact-field-full">
            <label htmlFor="message">Proje hakkında</label>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Markanızdan, hedefinizden veya üzerinde çalışmak istediğiniz projeden kısaca bahsedin."
            />
          </div>

          <div className="contact-submit-row">
            <p>
              Formu göndererek sizinle proje hakkında
              iletişime geçmemizi kabul etmiş olursunuz.
            </p>

            <button type="submit">
              Projeyi Gönder
              <ArrowUpRight size={15} strokeWidth={1.4} />
            </button>
          </div>
        </form>
      </section>

      {/* DIRECT CONTACT */}

      <section className="contact-direct">
        <div className="contact-direct-top">
          <span>M&G / DIRECT</span>
          <span>02</span>
        </div>

        <div className="contact-direct-grid">
          <div className="contact-direct-title">
            <span className="royal-diamond" />

            <h2>
              Formlarla
              <br />
              aranız yoksa.
            </h2>

            <p>
              Doğrudan bize ulaşabilirsiniz.
            </p>
          </div>

          <a
            href="mailto:gokhan.cebeci@mgdigitalagency.tr"
            className="contact-direct-card"
          >
            <div>
              <Mail size={18} strokeWidth={1.3} />
              <span>E-POSTA</span>
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
              <span>TELEFON</span>
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

      {/* LOCATIONS */}

      <section className="contact-locations">
        <div className="contact-locations-heading">
          <div>
            <div className="royal-eyebrow royal-eyebrow-dark">
              <span className="royal-diamond" />
              Lokasyonlar
            </div>

            <h2>
              Üç şehir.
              <br />
              Tek yaratıcı standart.
            </h2>
          </div>

          <p>
            Bodrum, İstanbul ve Lizbon&apos;dan
            çalışıyor; markalara yerel içgörüyle
            uluslararası perspektifi bir arada
            sunuyoruz.
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
              Yol Tarifi
              <ArrowUpRight size={13} strokeWidth={1.3} />
            </a>
          </article>

          <article>
            <span>02</span>

            <div>
              <h3>İstanbul</h3>
              <small>Türkiye</small>
            </div>

            <p>
              Dikilitaş Mah. Emirhan Cad.
              <br />
              No:3 D:3, Beşiktaş / İstanbul
            </p>

            <span className="contact-location-note">
              M&G DIGITAL
            </span>
          </article>

          <article>
            <span>03</span>

            <div>
              <h3>Lizbon</h3>
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

      {/* MAP */}

      <section className="contact-map-section">
        <div className="contact-map-info">
          <div>
            <span>03</span>
            <span>Bodrum Office</span>
          </div>

          <h2>
            Ege&apos;den
            <br />
            dünyaya.
          </h2>

          <p>
            Pazartesi — Cumartesi
            <br />
            08:00 — 20:00
          </p>

          <a
            href={BODRUM_MAP_URL}
            target="_blank"
            rel="noreferrer"
          >
            Google Maps&apos;te Aç
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

      {/* FINAL */}

      <section className="contact-final">
        <div className="final-ornament">
          <span />
          <i>M&G</i>
          <span />
        </div>

        <p>
          İyi işler iyi konuşmalarla başlar.
        </p>

        <h2>
          Sizinkini
          <br />
          başlatalım.
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