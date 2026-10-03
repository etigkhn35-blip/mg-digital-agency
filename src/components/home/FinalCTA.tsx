import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

type Locale = "en" | "tr";

const content = {
  en: {
    cta: {
      kicker: "Have a project in mind?",
      titleFirst: "Your guests are",
      titleSecond: "already",
      titleItalic: "looking.",
      textFirst: "Let's make sure",
      textSecond: "they like what they find.",
      button: "Start a project",
    },

    footer: {
      navigate: "Navigate",
      locations: "Locations",
      contact: "Contact",
      social: "Follow",

      links: {
        work: "Work",
        expertise: "Expertise",
        services: "Services",
        about: "About",
        insights: "Insights",
      },

      cities: {
        bodrum: "Bodrum",
        istanbul: "Istanbul",
        lisbon: "Lisbon",
      },

      email: "Email",
      phone: "Call",

      tagline: "Hospitality & Lifestyle Growth Agency",
      back: "Back to top ↑",
    },
  },

  tr: {
    cta: {
      kicker: "Aklınızda bir proje mi var?",
      titleFirst: "Misafirleriniz",
      titleSecond: "zaten sizi",
      titleItalic: "arıyor.",
      textFirst: "Bulduklarında gördüklerini",
      textSecond: "sevmelerini sağlayalım.",
      button: "Bir proje başlatalım",
    },

    footer: {
      navigate: "Keşfet",
      locations: "Lokasyonlar",
      contact: "İletişim",
      social: "Takip Edin",

      links: {
        work: "İşlerimiz",
        expertise: "Uzmanlık",
        services: "Hizmetler",
        about: "Hakkımızda",
        insights: "İçgörüler",
      },

      cities: {
        bodrum: "Bodrum",
        istanbul: "İstanbul",
        lisbon: "Lizbon",
      },

      email: "E-posta",
      phone: "Telefon",

      tagline: "Turizm & Yaşam Tarzı Odaklı Büyüme Ajansı",
      back: "Başa dön ↑",
    },
  },
};

const contact = {
  phoneDisplay: "+90 552 841 80 95",
  phoneHref: "tel:+905528418095",

  email: "gokhan.cebeci@mgdigitalagency.tr",
  emailHref: "mailto:gokhan.cebeci@mgdigitalagency.tr",

  whatsapp: "https://wa.me/905528418095",

  // Gerçek sosyal medya URL'lerini sonra bağlarız.
  instagram: "#",
  linkedin: "#",
};

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
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

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        cx="17.5"
        cy="6.5"
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
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
      />

      <path d="M8 10v7" />
      <path d="M8 7.5v.01" />
      <path d="M12 17v-4a3 3 0 0 1 6 0v4" />
      <path d="M12 10v7" />
    </svg>
  );
}

export default function FinalCTA({
  locale,
}: {
  locale: Locale;
}) {
  const t = content[locale];

  /* =========================================
     LOCALE ROUTES
  ========================================== */

  const routes =
    locale === "tr"
      ? {
          home: "/tr",
          work: "/tr/islerimiz",
          expertise: "/tr/uzmanlik",
          services: "/tr/hizmetler",
          about: "/tr/hakkimizda",
          insights: "/tr/icgoruler",
          contact: "/tr/iletisim",
        }
      : {
          home: "/en",
          work: "/en/work",
          expertise: "/en/expertise",
          services: "/en/services",
          about: "/en/about",
          insights: "/en/insights",
          contact: "/en/contact",
        };

  return (
    <>
      {/* =========================================
          FINAL CTA
      ========================================== */}

      <section className="final-cta">
        <div className="final-cta-glow" />

        <span className="final-label">
          {t.cta.kicker}
        </span>

        <h2>
          {t.cta.titleFirst}
          <br />

          {t.cta.titleSecond}{" "}
          <em>{t.cta.titleItalic}</em>
        </h2>

        <div className="final-bottom">
          <p>
            {t.cta.textFirst}
            <br />
            {t.cta.textSecond}
          </p>

          <Link href={routes.contact}>
            <span>{t.cta.button}</span>

            <span className="final-arrow">
              <ArrowUpRight
                size={28}
                strokeWidth={1.1}
              />
            </span>
          </Link>
        </div>
      </section>

      {/* =========================================
          FOOTER
      ========================================== */}

      <footer className="footer">

        {/* LOGO */}

        <Link
          href={routes.home}
          className="footer-brand"
          aria-label="M&G Digital"
        >
          <span>M&G</span>
          <small>DIGITAL</small>
        </Link>

        {/* NAVIGATION */}

        <div className="footer-col">
          <span>{t.footer.navigate}</span>

          <Link href={routes.work}>
            {t.footer.links.work}
          </Link>

          <Link href={routes.expertise}>
            {t.footer.links.expertise}
          </Link>

          <Link href={routes.services}>
            {t.footer.links.services}
          </Link>

          <Link href={routes.about}>
            {t.footer.links.about}
          </Link>

          <Link href={routes.insights}>
            {t.footer.links.insights}
          </Link>
        </div>

        {/* LOCATIONS */}

        <div className="footer-col">
          <span>{t.footer.locations}</span>

          <Link href={`${routes.about}#locations`}>
            {t.footer.cities.bodrum}
          </Link>

          <Link href={`${routes.about}#locations`}>
            {t.footer.cities.istanbul}
          </Link>

          <Link href={`${routes.about}#locations`}>
            {t.footer.cities.lisbon}
          </Link>
        </div>

        {/* CONTACT */}

        <div className="footer-col footer-contact">
          <span>{t.footer.contact}</span>

          <a href={contact.emailHref}>
            {contact.email}
          </a>

          <a href={contact.phoneHref}>
            {contact.phoneDisplay}
          </a>

          <Link href={routes.contact}>
            {locale === "tr"
              ? "İletişim sayfası"
              : "Contact page"}
          </Link>
        </div>

        {/* =========================================
            SOCIAL
        ========================================== */}

        <div className="footer-social">
          <span className="footer-social-label">
            {t.footer.social}
          </span>

          <div className="footer-social-links">

            {/* Instagram */}

            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <InstagramIcon />
            </a>

            {/* LinkedIn */}

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>

            {/* WhatsApp */}

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
              className="whatsapp-link"
            >
              <MessageCircle
                size={21}
                strokeWidth={1.4}
              />
            </a>

            {/* Email */}

            <a
              href={contact.emailHref}
              aria-label={t.footer.email}
              title={t.footer.email}
            >
              <Mail
                size={20}
                strokeWidth={1.4}
              />
            </a>

            {/* Phone */}

            <a
              href={contact.phoneHref}
              aria-label={t.footer.phone}
              title={t.footer.phone}
            >
              <Phone
                size={19}
                strokeWidth={1.4}
              />
            </a>

          </div>
        </div>

        {/* =========================================
            FOOTER BOTTOM
        ========================================== */}

        <div className="footer-bottom">
          <span>
            © 2026 M&G DIGITAL AGENCY
          </span>

          <span>
            {t.footer.tagline}
          </span>

          <a href="#top">
            {t.footer.back}
          </a>
        </div>
      </footer>
    </>
  );
}