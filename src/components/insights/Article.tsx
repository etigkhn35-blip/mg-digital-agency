import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import {
  getNextInsight,
  type Insight,
} from "@/data/insights";

type Locale = "tr" | "en";

type ArticleProps = {
  insight: Insight;
  locale: Locale;
};

export default function Article({
  insight,
  locale,
}: ArticleProps) {
  const content = insight[locale];
  const nextInsight = getNextInsight(insight.slug);

  const isTR = locale === "tr";

  const homeHref = isTR ? "/tr" : "/en";
  const insightsHref = isTR
    ? "/tr/icgoruler"
    : "/en/insights";

  const contactHref = isTR
    ? "/tr/iletisim"
    : "/en/contact";

  const nextHref = nextInsight
    ? isTR
      ? `/tr/icgoruler/${nextInsight.slug}`
      : `/en/insights/${nextInsight.slug}`
    : insightsHref;

  return (
    <main className="article-page">
      <header className="royal-header">
        <Link href={homeHref} className="royal-brand">
          <span className="royal-monogram">M&G</span>
          <span className="royal-brand-name">
            DIGITAL
          </span>
        </Link>

        <nav className="royal-nav">
          <Link
            href={isTR ? "/tr/islerimiz" : "/en/work"}
          >
            {isTR ? "İşlerimiz" : "Work"}
          </Link>

          <Link
            href={isTR ? "/tr/uzmanlik" : "/en/expertise"}
          >
            {isTR ? "Uzmanlık" : "Expertise"}
          </Link>

          <Link
            href={isTR ? "/tr/hizmetler" : "/en/services"}
          >
            {isTR ? "Hizmetler" : "Services"}
          </Link>

          <Link
            href={isTR ? "/tr/hakkimizda" : "/en/about"}
          >
            {isTR ? "Hakkımızda" : "About"}
          </Link>

          <Link href={insightsHref}>
            {isTR ? "İçgörüler" : "Insights"}
          </Link>
        </nav>

        <div className="royal-actions">
          <div className="royal-language">
            <Link
              href={`/tr/icgoruler/${insight.slug}`}
              className={isTR ? "active" : ""}
            >
              TR
            </Link>

            <span>/</span>

            <Link
              href={`/en/insights/${insight.slug}`}
              className={!isTR ? "active" : ""}
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

      <section className="article-hero">
        <div className="article-hero-top">
          <Link href={insightsHref}>
            <ArrowLeft
              size={13}
              strokeWidth={1.4}
            />

            {isTR
              ? "Tüm İçgörüler"
              : "All Insights"}
          </Link>

          <div>
            <span>{insight.no}</span>
            <span>M&G JOURNAL</span>
          </div>
        </div>

        <div className="article-hero-main">
          <div className="article-hero-meta">
            <span>
              {insight.category[locale]}
            </span>

            <span>{insight.date}</span>

            <span>{content.readTime}</span>
          </div>

          <h1>{content.title}</h1>

          <p>{content.excerpt}</p>
        </div>

        <div className="article-hero-bottom">
          <span>M&G DIGITAL</span>

          <span>
            HOSPITALITY · CULTURE · DIGITAL
          </span>
        </div>
      </section>

      {/* OPENING */}

      <section className="article-opening">
        <div className="article-side-index">
          <span>01</span>

          <span>
            {isTR ? "Perspektif" : "Perspective"}
          </span>
        </div>

        <div className="article-opening-copy">
          <p>{content.intro}</p>
        </div>
      </section>

      {/* EDITORIAL VISUAL */}

      <section className="article-visual">
        <div className="article-visual-frame">
          <span>{insight.no}</span>

          <div className="article-visual-mark">
            <strong>M&G</strong>
            <small>JOURNAL</small>
          </div>

          <span>{insight.category[locale]}</span>
        </div>
      </section>

      {/* BODY */}

      <article className="article-body">
        <div className="article-body-index">
          <span>02</span>
          <span>Journal</span>
        </div>

        <div className="article-body-content">
          {content.sections.map(
            (section, sectionIndex) => (
              <section
                className="article-section"
                key={section.title}
              >
                <div className="article-section-number">
                  {String(sectionIndex + 1).padStart(
                    2,
                    "0"
                  )}
                </div>

                <h2>{section.title}</h2>

                <div className="article-paragraphs">
                  {section.paragraphs.map(
                    (paragraph) => (
                      <p key={paragraph}>
                        {paragraph}
                      </p>
                    )
                  )}
                </div>
              </section>
            )
          )}
        </div>
      </article>

      {/* QUOTE */}

      <section className="article-quote">
        <div className="article-quote-top">
          <span>M&G / POV</span>
          <span>{insight.no}</span>
        </div>

        <div className="article-quote-content">
          <span className="royal-diamond" />

          <blockquote>
            “{content.quote}”
          </blockquote>
        </div>
      </section>

      {/* CLOSING */}

      <section className="article-conclusion">
        <div className="article-side-index">
          <span>03</span>

          <span>
            {isTR ? "Son Not" : "Final Note"}
          </span>
        </div>

        <div>
          <p>{content.closing}</p>

          <Link href={contactHref}>
            {isTR
              ? "Bunu markanız için konuşalım"
              : "Let's talk about what this means for your brand"}

            <ArrowUpRight
              size={14}
              strokeWidth={1.4}
            />
          </Link>
        </div>
      </section>

      {/* NEXT ARTICLE */}

      {nextInsight && (
        <Link
          href={nextHref}
          className="article-next"
        >
          <div className="article-next-top">
            <span>
              {isTR
                ? "Sıradaki İçgörü"
                : "Next Insight"}
            </span>

            <span>{nextInsight.no}</span>
          </div>

          <div className="article-next-main">
            <div>
              <span>
                {nextInsight.category[locale]}
              </span>

              <h2>
                {nextInsight[locale].title}
              </h2>

              <p>
                {nextInsight[locale].readTime}
              </p>
            </div>

            <div className="article-next-arrow">
              <ArrowRight
                size={24}
                strokeWidth={1.2}
              />
            </div>
          </div>
        </Link>
      )}

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
              {isTR ? "Keşfet" : "Explore"}
            </span>

            <Link href={isTR ? "/tr/islerimiz" : "/en/work"}>
              {isTR ? "İşlerimiz" : "Work"}
            </Link>

            <Link href={isTR ? "/tr/uzmanlik" : "/en/expertise"}>
              {isTR ? "Uzmanlık" : "Expertise"}
            </Link>

            <Link href={isTR ? "/tr/hizmetler" : "/en/services"}>
              {isTR ? "Hizmetler" : "Services"}
            </Link>

            <Link href={isTR ? "/tr/hakkimizda" : "/en/about"}>
              {isTR ? "Hakkımızda" : "About"}
            </Link>

            <Link href={insightsHref}>
              {isTR ? "İçgörüler" : "Insights"}
            </Link>
          </div>

          <div className="footer-column">
            <span className="footer-label">
              {isTR ? "Lokasyonlar" : "Locations"}
            </span>

            <span>Bodrum</span>
            <span>Istanbul</span>
            <span>Lisbon</span>
          </div>

          <div className="footer-column">
            <span className="footer-label">
              {isTR ? "İletişim" : "Contact"}
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
          <span>© 2026 M&G Digital Agency</span>
          <span>Bodrum · Istanbul · Lisbon</span>

          <Link href={homeHref}>
            {isTR ? "Ana Sayfa ↑" : "Home ↑"}
          </Link>
        </div>
      </footer>
    </main>
  );
}