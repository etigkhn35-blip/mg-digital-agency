import Link from "next/link";
import { MessageCircle } from "lucide-react";

type FooterProps = {
  locale: "tr" | "en";
};

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.4"
        cy="6.6"
        r="0.8"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.4 8.2H3.2V20h3.2V8.2ZM4.8 3A1.9 1.9 0 1 0 4.8 6.8 1.9 1.9 0 0 0 4.8 3ZM20.8 13.2c0-3.6-1.9-5.3-4.5-5.3-2.1 0-3 1.1-3.5 1.9V8.2H9.6V20h3.2v-5.8c0-1.5.3-3 2.2-3 1.9 0 1.9 1.8 1.9 3.1V20h3.2l.7-6.8Z" />
    </svg>
  );
}

export default function Footer({
  locale,
}: FooterProps) {
  const isTR = locale === "tr";

  const homeHref = isTR ? "/tr" : "/en";
  const workHref = isTR
    ? "/tr/islerimiz"
    : "/en/work";
  const expertiseHref = isTR
    ? "/tr/uzmanlik"
    : "/en/expertise";
  const servicesHref = isTR
    ? "/tr/hizmetler"
    : "/en/services";
  const aboutHref = isTR
    ? "/tr/hakkimizda"
    : "/en/about";
  const insightsHref = isTR
    ? "/tr/icgoruler"
    : "/en/insights";
  const contactHref = isTR
    ? "/tr/iletisim"
    : "/en/contact";

  /*
    Gerçek M&G profil adreslerini verdiğinde
    sadece bu iki satırı değiştireceğiz.
  */

  const instagramUrl =
    "https://www.instagram.com/";

  const linkedinUrl =
    "https://www.linkedin.com/";

  const whatsappUrl =
    "https://wa.me/905528418095";

  return (
    <footer className="royal-footer">
      <div className="footer-top">
        {/* BRAND */}

        <div className="footer-brand">
          <Link
            href={homeHref}
            className="footer-logo"
          >
            <span>M&G</span>
            <small>DIGITAL</small>
          </Link>

          <p>
            Hospitality & Lifestyle
            <br />
            Growth Agency
          </p>

          {/* SOCIAL */}

          <div className="footer-social">
            <span className="footer-social-label">
              {isTR
                ? "Bizi Takip Edin"
                : "Follow"}
            </span>

            <div className="footer-social-icons">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <MessageCircle
                  size={17}
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </div>
        </div>

        {/* EXPLORE */}

        <div className="footer-column">
          <span className="footer-label">
            {isTR ? "Keşfet" : "Explore"}
          </span>

          <Link href={workHref}>
            {isTR ? "İşlerimiz" : "Work"}
          </Link>

          <Link href={expertiseHref}>
            {isTR
              ? "Uzmanlık"
              : "Expertise"}
          </Link>

          <Link href={servicesHref}>
            {isTR
              ? "Hizmetler"
              : "Services"}
          </Link>

          <Link href={aboutHref}>
            {isTR
              ? "Hakkımızda"
              : "About"}
          </Link>

          <Link href={insightsHref}>
            {isTR
              ? "İçgörüler"
              : "Insights"}
          </Link>

          <Link href={contactHref}>
            {isTR
              ? "İletişim"
              : "Contact"}
          </Link>
        </div>

        {/* LOCATIONS */}

        <div className="footer-column">
          <span className="footer-label">
            {isTR
              ? "Lokasyonlar"
              : "Locations"}
          </span>

          <span>Bodrum</span>
          <span>Istanbul</span>
          <span>Lisbon</span>
        </div>

        {/* CONTACT */}

        <div className="footer-column footer-contact-column">
          <span className="footer-label">
            {isTR
              ? "İletişim"
              : "Contact"}
          </span>

          <a href="tel:+905528418095">
            +90 552 841 80 95
          </a>

          <a href="mailto:gokhan.cebeci@mgdigitalagency.tr">
            gokhan.cebeci@
            <br />
            mgdigitalagency.tr
          </a>

          <Link
            href={contactHref}
            className="footer-project-link"
          >
            {isTR
              ? "Bir Proje Başlatalım →"
              : "Start a Project →"}
          </Link>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">
        <span>
          © 2026 M&G Digital Agency
        </span>

        <span>
          Bodrum · Istanbul · Lisbon
        </span>

        <Link href={homeHref}>
          {isTR
            ? "Ana Sayfa ↑"
            : "Home ↑"}
        </Link>
      </div>
    </footer>
  );
}