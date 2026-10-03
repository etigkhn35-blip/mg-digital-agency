import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import {
  getNextProject,
  type Project,
} from "@/data/projects";

type Locale = "tr" | "en";

type CaseStudyProps = {
  project: Project;
  locale: Locale;
};

const categoryNames = {
  tr: {
    hospitality: "Otel & Konaklama",
    food: "Yeme & İçme",
    lifestyle: "Yaşam Tarzı",
    branding: "Marka Deneyimi",
  },

  en: {
    hospitality: "Hospitality",
    food: "Food & Beverage",
    lifestyle: "Lifestyle",
    branding: "Brand Experience",
  },
};

export default function CaseStudy({
  project,
  locale,
}: CaseStudyProps) {
  const content = project[locale];

  const nextProject = getNextProject(project.slug);

  const isTR = locale === "tr";

  const homeHref = isTR ? "/tr" : "/en";

  const workHref = isTR
    ? "/tr/islerimiz"
    : "/en/work";

  const contactHref = isTR
    ? "/tr/iletisim"
    : "/en/contact";

  const nextHref = nextProject
    ? isTR
      ? `/tr/islerimiz/${nextProject.slug}`
      : `/en/work/${nextProject.slug}`
    : workHref;

  const nextContent = nextProject?.[locale];

  return (
    <main className="case-study">
      {/* HEADER */}

      <header className="royal-header">
        <Link href={homeHref} className="royal-brand">
          <span className="royal-monogram">
            M&G
          </span>

          <span className="royal-brand-name">
            DIGITAL
          </span>
        </Link>

        <nav className="royal-nav">
          <Link href={workHref}>
            {isTR ? "İşlerimiz" : "Work"}
          </Link>

          <Link
            href={
              isTR
                ? "/tr/uzmanlik"
                : "/en/expertise"
            }
          >
            {isTR ? "Uzmanlık" : "Expertise"}
          </Link>

          <Link
            href={
              isTR
                ? "/tr/hizmetler"
                : "/en/services"
            }
          >
            {isTR ? "Hizmetler" : "Services"}
          </Link>

          <Link
            href={
              isTR
                ? "/tr/hakkimizda"
                : "/en/about"
            }
          >
            {isTR ? "Hakkımızda" : "About"}
          </Link>

          <Link
            href={
              isTR
                ? "/tr/icgoruler"
                : "/en/insights"
            }
          >
            {isTR ? "İçgörüler" : "Insights"}
          </Link>
        </nav>

        <div className="royal-actions">
          <div className="royal-language">
            <Link
              href={`/tr/islerimiz/${project.slug}`}
              className={
                locale === "tr" ? "active" : ""
              }
            >
              TR
            </Link>

            <span>/</span>

            <Link
              href={`/en/work/${project.slug}`}
              className={
                locale === "en" ? "active" : ""
              }
            >
              EN
            </Link>
          </div>

          <Link
            href={contactHref}
            className="royal-contact"
          >
            {isTR
              ? "Bir Proje Başlatalım"
              : "Start a Project"}

            <ArrowUpRight
              size={13}
              strokeWidth={1.4}
            />
          </Link>
        </div>
      </header>

      {/* HERO */}

      <section
        className={`case-hero case-theme-${project.theme}`}
      >
        <div className="case-hero-top">
          <Link href={workHref}>
            <ArrowLeft
              size={13}
              strokeWidth={1.4}
            />

            {isTR
              ? "Tüm İşler"
              : "All Work"}
          </Link>

          <div>
            <span>{project.no}</span>
            <span>{project.year}</span>
          </div>
        </div>

        <div className="case-hero-main">
          <div className="case-hero-title">
            <span>
              {
                categoryNames[locale][
                  project.category
                ]
              }
            </span>

            <h1>{project.client}</h1>
          </div>

          <div className="case-hero-statement">
            {content.title
              .split("\n")
              .map((line) => (
                <span key={line}>{line}</span>
              ))}
          </div>
        </div>

        <div className="case-hero-bottom">
          <span>{content.location}</span>

          <span>
            M&G DIGITAL / CASE STUDY
          </span>
        </div>
      </section>

      {/* PROJECT INFORMATION */}

      <section className="case-intro">
        <div className="case-index">
          <span>01</span>

          <span>
            {isTR
              ? "Proje"
              : "The Project"}
          </span>
        </div>

        <div className="case-intro-main">
          <p className="case-intro-lead">
            {content.intro}
          </p>

          <div className="case-project-info">
            <div>
              <span>
                {isTR
                  ? "Müşteri"
                  : "Client"}
              </span>

              <strong>
                {project.client}
              </strong>
            </div>

            <div>
              <span>
                {isTR
                  ? "Lokasyon"
                  : "Location"}
              </span>

              <strong>
                {content.location}
              </strong>
            </div>

            <div>
              <span>
                {isTR
                  ? "Yıl"
                  : "Year"}
              </span>

              <strong>
                {project.year}
              </strong>
            </div>
          </div>
        </div>

        <div className="case-services">
          <span>
            {isTR
              ? "Hizmetler"
              : "Services"}
          </span>

          <div>
            {content.services.map(
              (service, index) => (
                <div key={service}>
                  <span>
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <strong>
                    {service}
                  </strong>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* HERO IMAGE PLACEHOLDER */}

      <section
        className={`case-large-visual case-theme-${project.theme}`}
      >
        <div className="case-large-art" />

        <span className="case-large-index">
          M&G / {project.no}
        </span>

        <div className="case-large-mark">
          <span>M</span>
          <i>&</i>
          <span>G</span>
        </div>

        <span className="case-large-caption">
          {project.client} · {project.year}
        </span>
      </section>

      {/* CHALLENGE */}

      <section className="case-text-section">
        <div className="case-section-index">
          <span>02</span>

          <span>
            {isTR
              ? "Mesele"
              : "The Challenge"}
          </span>
        </div>

        <div className="case-text-content">
          <h2>
            {content.challengeTitle}
          </h2>

          <p>
            {content.challenge}
          </p>
        </div>
      </section>

      {/* VISUAL PAIR */}

      <section className="case-visual-pair">
        <div
          className={`case-visual case-visual-tall case-theme-${project.theme}`}
        >
          <div className="case-art-secondary" />

          <span>01</span>

          <small>
            {project.client}
          </small>
        </div>

        <div
          className={`case-visual case-visual-short case-theme-${project.theme}`}
        >
          <div className="case-art-tertiary" />

          <span>02</span>

          <small>
            M&G Digital
          </small>
        </div>
      </section>

      {/* APPROACH */}

      <section className="case-approach">
        <div className="case-section-index">
          <span>03</span>

          <span>
            {isTR
              ? "Yaklaşım"
              : "The Approach"}
          </span>
        </div>

        <div className="case-approach-content">
          <span className="royal-diamond" />

          <h2>
            {content.approachTitle}
          </h2>

          <p>
            {content.approach}
          </p>
        </div>
      </section>

      {/* CREATIVE DIRECTION */}

      <section className="case-direction">
        <div className="case-direction-heading">
          <div className="case-section-index">
            <span>04</span>

            <span>
              {isTR
                ? "Kreatif Yön"
                : "Creative Direction"}
            </span>
          </div>

          <div>
            <h2>
              {content.directionTitle}
            </h2>

            <p>
              {content.direction}
            </p>
          </div>
        </div>

        <div className="case-direction-grid">
          <div
            className={`case-direction-card case-theme-${project.theme}`}
          >
            <div className="case-direction-art-one" />

            <span>01</span>
          </div>

          <div
            className={`case-direction-card case-theme-${project.theme}`}
          >
            <div className="case-direction-art-two" />

            <span>02</span>
          </div>

          <div
            className={`case-direction-card case-theme-${project.theme}`}
          >
            <div className="case-direction-art-three" />

            <span>03</span>
          </div>
        </div>
      </section>

      {/* CLOSING */}

      <section className="case-closing">
        <span className="royal-diamond" />

        <p>
          {isTR
            ? "Sonuç"
            : "Outcome"}
        </p>

        <h2>
          {content.closing}
        </h2>
      </section>

      {/* NEXT PROJECT */}

      {nextProject && nextContent && (
        <Link
          href={nextHref}
          className={`case-next case-theme-${nextProject.theme}`}
        >
          <div className="case-next-top">
            <span>
              {isTR
                ? "Sıradaki Proje"
                : "Next Project"}
            </span>

            <span>
              {nextProject.no}
            </span>
          </div>

          <div className="case-next-main">
            <div>
              <span>
                {
                  categoryNames[locale][
                    nextProject.category
                  ]
                }
              </span>

              <h2>
                {nextProject.client}
              </h2>

              <p>
                {nextContent.location}
              </p>
            </div>

            <div className="case-next-arrow">
              <ArrowRight
                size={25}
                strokeWidth={1.2}
              />
            </div>
          </div>
        </Link>
      )}

      {/* FOOTER */}

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
              {isTR
                ? "Keşfet"
                : "Explore"}
            </span>

            <Link href={workHref}>
              {isTR
                ? "İşlerimiz"
                : "Work"}
            </Link>

            <Link
              href={
                isTR
                  ? "/tr/uzmanlik"
                  : "/en/expertise"
              }
            >
              {isTR
                ? "Uzmanlık"
                : "Expertise"}
            </Link>

            <Link
              href={
                isTR
                  ? "/tr/hizmetler"
                  : "/en/services"
              }
            >
              {isTR
                ? "Hizmetler"
                : "Services"}
            </Link>

            <Link
              href={
                isTR
                  ? "/tr/hakkimizda"
                  : "/en/about"
              }
            >
              {isTR
                ? "Hakkımızda"
                : "About"}
            </Link>
          </div>

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

          <div className="footer-column">
            <span className="footer-label">
              {isTR
                ? "İletişim"
                : "Contact"}
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

          <Link href={homeHref}>
            {isTR
              ? "Ana Sayfa ↑"
              : "Home ↑"}
          </Link>
        </div>
      </footer>
    </main>
  );
}