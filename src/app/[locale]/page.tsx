import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";

type Locale = "en" | "tr";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const content = {
  en: {
    nav: [
      { label: "Work", href: "/en/work" },
      { label: "Expertise", href: "/en/expertise" },
      { label: "Services", href: "/en/services" },
      { label: "About", href: "/en/about" },
      { label: "Insights", href: "/en/insights" },
    ],

    contact: "Start a Project",

    hero: {
      eyebrow: "Independent Hospitality & Lifestyle Agency",
      title: "Distinctive brands for remarkable places.",
      text:
        "We combine strategy, creative, content and growth to shape how exceptional hospitality and lifestyle brands are discovered and experienced.",
      locations: "Bodrum · Istanbul · Lisbon",
      discover: "Discover our work",
      note: "Strategy · Creative · Content · Growth",
    },

    intro: {
      eyebrow: "M&G Digital",
      title:
        "Built for brands where experience matters.",
      text:
        "Hotels, restaurants and lifestyle brands are experienced digitally long before a guest arrives. We make that first impression count.",
      link: "Our expertise",
    },

    work: {
      eyebrow: "Selected Work",
      title: "A selection of places, brands and experiences.",
      all: "View all work",
      view: "View project",
    },
  },

  tr: {
    nav: [
      { label: "İşlerimiz", href: "/tr/islerimiz" },
      { label: "Uzmanlık", href: "/tr/uzmanlik" },
      { label: "Hizmetler", href: "/tr/hizmetler" },
      { label: "Hakkımızda", href: "/tr/hakkimizda" },
      { label: "İçgörüler", href: "/tr/icgoruler" },
    ],

    contact: "Bir Proje Başlatalım",

    hero: {
      eyebrow: "Turizm & Yaşam Tarzı Odaklı Bağımsız Ajans",
      title: "Özel mekanlar için güçlü markalar.",
      text:
        "Strateji, kreatif, içerik ve büyümeyi bir araya getirerek seçkin turizm ve yaşam tarzı markalarının nasıl keşfedildiğini ve deneyimlendiğini tasarlıyoruz.",
      locations: "Bodrum · İstanbul · Lizbon",
      discover: "İşlerimizi keşfet",
      note: "Strateji · Kreatif · İçerik · Büyüme",
    },

    intro: {
      eyebrow: "M&G Digital",
      title:
        "Deneyimin önemli olduğu markalar için çalışıyoruz.",
      text:
        "Oteller, restoranlar ve yaşam tarzı markaları misafir daha mekana gelmeden dijital dünyada deneyimleniyor. Biz o ilk karşılaşmayı tasarlıyoruz.",
      link: "Uzmanlığımız",
    },

    work: {
      eyebrow: "Seçili İşler",
      title: "Mekanlar, markalar ve deneyimlerden seçkimiz.",
      all: "Tüm işleri incele",
      view: "Projeyi incele",
    },
  },
};

const projects = [
  {
    no: "01",
    slug: "splendid-palace-hotel",
    name: "Splendid Palace Hotel",
    visual: "royal-project-one",

    en: {
      category: "Hospitality",
      location: "Büyükada · Istanbul",
    },

    tr: {
      category: "Otel & Konaklama",
      location: "Büyükada · İstanbul",
    },
  },

  {
    no: "02",
    slug: "spektr-boutique-hotel",
    name: "Spektr Boutique Hotel",
    visual: "royal-project-two",

    en: {
      category: "Hospitality",
      location: "Bodrum · Türkiye",
    },

    tr: {
      category: "Otel & Konaklama",
      location: "Bodrum · Türkiye",
    },
  },

  {
    no: "03",
    slug: "the-istanbul-butcher",
    name: "The Istanbul Butcher",
    visual: "royal-project-three",

    en: {
      category: "Food & Beverage",
      location: "Istanbul · Türkiye",
    },

    tr: {
      category: "Yeme & İçme",
      location: "İstanbul · Türkiye",
    },
  },
];

export default async function HomePage({
  params,
}: PageProps) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "tr") {
    notFound();
  }

  const lang = locale as Locale;
  const t = content[lang];

  const contactHref =
    lang === "tr" ? "/tr/iletisim" : "/en/contact";

  const workHref =
    lang === "tr" ? "/tr/islerimiz" : "/en/work";

  const expertiseHref =
    lang === "tr" ? "/tr/uzmanlik" : "/en/expertise";

  return (
    <main className="royal-site">
      {/* =========================
          HEADER
      ========================= */}

      <header className="royal-header">
        <Link href={`/${lang}`} className="royal-brand">
          <span className="royal-monogram">M&G</span>

          <span className="royal-brand-name">
            DIGITAL
          </span>
        </Link>

        <nav className="royal-nav">
          {t.nav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="royal-actions">
          <div className="royal-language">
            <Link
              href="/tr"
              className={
                lang === "tr" ? "active" : ""
              }
            >
              TR
            </Link>

            <span>/</span>

            <Link
              href="/en"
              className={
                lang === "en" ? "active" : ""
              }
            >
              EN
            </Link>
          </div>

          <Link
            href={contactHref}
            className="royal-contact"
          >
            {t.contact}

            <ArrowUpRight
              size={13}
              strokeWidth={1.4}
            />
          </Link>
        </div>
      </header>

      {/* =========================
          HERO
      ========================= */}

      <section className="royal-hero">
        <div className="royal-hero-frame">
          <div className="royal-hero-copy">
            <div className="royal-eyebrow">
              <span className="royal-diamond" />
              {t.hero.eyebrow}
            </div>

            <h1>{t.hero.title}</h1>

            <p className="royal-hero-text">
              {t.hero.text}
            </p>

            <div className="royal-hero-actions">
              <a
                href="#selected-work"
                className="royal-primary-link"
              >
                {t.hero.discover}

                <ArrowDownRight
                  size={15}
                  strokeWidth={1.4}
                />
              </a>

              <span>{t.hero.locations}</span>
            </div>
          </div>

          <div className="royal-hero-visual">
            <div className="royal-visual-inner">
              <div className="royal-visual-light" />

              <span className="royal-visual-index">
                M&G / 01
              </span>

              <div className="royal-visual-mark">
                <span>M</span>
                <i>&</i>
                <span>G</span>
              </div>

              <div className="royal-visual-bottom">
                <span>Hospitality</span>
                <span>Culture</span>
                <span>Growth</span>
              </div>
            </div>
          </div>

          <div className="royal-hero-footer">
            <span>{t.hero.note}</span>

            <span>EST. 2026</span>
          </div>
        </div>
      </section>

      {/* =========================
          INTRO
      ========================= */}

      <section className="royal-intro">
        <div className="royal-intro-index">
          <span>01</span>
          <span>{t.intro.eyebrow}</span>
        </div>

        <div className="royal-intro-main">
          <h2>{t.intro.title}</h2>

          <div className="royal-intro-detail">
            <p>{t.intro.text}</p>

            <Link href={expertiseHref}>
              {t.intro.link}

              <ArrowRight
                size={14}
                strokeWidth={1.4}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          SELECTED WORK
      ========================= */}

      <section
        className="royal-work"
        id="selected-work"
      >
        <div className="royal-work-header">
          <div>
            <div className="royal-eyebrow royal-eyebrow-dark">
              <span className="royal-diamond" />
              {t.work.eyebrow}
            </div>

            <h2>{t.work.title}</h2>
          </div>

          <Link
            href={workHref}
            className="royal-all-work"
          >
            {t.work.all}

            <ArrowUpRight
              size={14}
              strokeWidth={1.4}
            />
          </Link>
        </div>

        <div className="royal-projects">
          {projects.map((project) => {
            const projectContent = project[lang];

            const href =
              lang === "tr"
                ? `/tr/islerimiz/${project.slug}`
                : `/en/work/${project.slug}`;

            return (
              <article
                className="royal-project"
                key={project.slug}
              >
                <Link
                  href={href}
                  className={`royal-project-visual ${project.visual}`}
                >
                  <div className="royal-project-art" />

                  <span className="royal-project-number">
                    {project.no}
                  </span>

                  <span className="royal-project-category">
                    {projectContent.category}
                  </span>

                  <span className="royal-project-open">
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.3}
                    />
                  </span>
                </Link>

                <div className="royal-project-info">
                  <div>
                    <h3>{project.name}</h3>

                    <span>
                      {projectContent.location}
                    </span>
                  </div>

                  <Link href={href}>
                    {t.work.view}

                    <ArrowRight
                      size={13}
                      strokeWidth={1.4}
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
            {/* =========================
          EXPERTISE
      ========================= */}

      <section className="royal-expertise">
        <div className="section-rail">
          <span>02</span>
          <span>
            {lang === "tr" ? "Uzmanlık" : "Expertise"}
          </span>
        </div>

        <div className="expertise-content">
          <div className="section-heading">
            <div>
              <div className="royal-eyebrow royal-eyebrow-dark">
                <span className="royal-diamond" />

                {lang === "tr"
                  ? "En iyi bildiğimiz dünya"
                  : "The world we know best"}
              </div>

              <h2>
                {lang === "tr"
                  ? "Turizm bizim için bir sektör değil. İçinden geldiğimiz dünya."
                  : "Hospitality isn't simply a sector we serve. It's the world we come from."}
              </h2>
            </div>

            <p>
              {lang === "tr"
                ? "Markayı, misafiri ve deneyimi aynı bütünün parçaları olarak görüyoruz."
                : "We see the brand, the guest and the experience as parts of the same whole."}
            </p>
          </div>

          <div className="expertise-list">
            <Link
              href={
                lang === "tr"
                  ? "/tr/uzmanlik"
                  : "/en/expertise"
              }
              className="expertise-item"
            >
              <span className="expertise-no">01</span>

              <div>
                <h3>
                  {lang === "tr"
                    ? "Otel & Konaklama"
                    : "Hotels & Hospitality"}
                </h3>

                <p>
                  {lang === "tr"
                    ? "Oteller · Tatil Köyleri · Destinasyonlar"
                    : "Hotels · Resorts · Destinations"}
                </p>
              </div>

              <span className="expertise-arrow">
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.3}
                />
              </span>
            </Link>

            <Link
              href={
                lang === "tr"
                  ? "/tr/uzmanlik"
                  : "/en/expertise"
              }
              className="expertise-item"
            >
              <span className="expertise-no">02</span>

              <div>
                <h3>
                  {lang === "tr"
                    ? "Yeme & İçme"
                    : "Food & Beverage"}
                </h3>

                <p>
                  {lang === "tr"
                    ? "Restoranlar · Gastronomi · Deneyimler"
                    : "Restaurants · Gastronomy · Experiences"}
                </p>
              </div>

              <span className="expertise-arrow">
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.3}
                />
              </span>
            </Link>

            <Link
              href={
                lang === "tr"
                  ? "/tr/uzmanlik"
                  : "/en/expertise"
              }
              className="expertise-item"
            >
              <span className="expertise-no">03</span>

              <div>
                <h3>
                  {lang === "tr"
                    ? "Premium & Yaşam Tarzı"
                    : "Premium & Lifestyle"}
                </h3>

                <p>
                  {lang === "tr"
                    ? "Premium Markalar · Mekanlar · Deneyimler"
                    : "Premium Brands · Places · Experiences"}
                </p>
              </div>

              <span className="expertise-arrow">
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.3}
                />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          NUMBERS
      ========================= */}

      <section className="royal-numbers">
        <div className="numbers-top">
          <span>
            {lang === "tr"
              ? "M&G / Perspektif"
              : "M&G / Perspective"}
          </span>

          <span>BODRUM · ISTANBUL · LISBON</span>
        </div>

        <div className="numbers-grid">
          <div className="number-item">
            <strong>03</strong>

            <span>
              {lang === "tr"
                ? "Şehir"
                : "Cities"}
            </span>
          </div>

          <div className="number-item">
            <strong>360°</strong>

            <span>
              {lang === "tr"
                ? "Dijital Yaklaşım"
                : "Digital Approach"}
            </span>
          </div>

          <div className="number-item">
            <strong>01</strong>

            <span>
              {lang === "tr"
                ? "Yaratıcı Standart"
                : "Creative Standard"}
            </span>
          </div>

          <div className="number-statement">
            <span className="royal-diamond" />

            <p>
              {lang === "tr"
                ? "Yerel içgörü. Uluslararası perspektif."
                : "Local insight. International perspective."}
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICES
      ========================= */}

      <section className="royal-services">
        <div className="services-heading">
          <div className="section-rail section-rail-light">
            <span>03</span>
            <span>
              {lang === "tr"
                ? "Hizmetler"
                : "Services"}
            </span>
          </div>

          <div>
            <div className="royal-eyebrow">
              <span className="royal-diamond" />

              {lang === "tr"
                ? "Tek çatı altında"
                : "Under one roof"}
            </div>

            <h2>
              {lang === "tr"
                ? "Markanın ihtiyaç duyduğu disiplinleri tek bir yaratıcı sistemde buluşturuyoruz."
                : "The disciplines your brand needs, brought together in one creative system."}
            </h2>
          </div>
        </div>

        <div className="services-list">
          {[
            {
              no: "01",
              en: "Strategy",
              tr: "Strateji",
              enSub:
                "Positioning · Digital Strategy · Brand Direction",
              trSub:
                "Konumlandırma · Dijital Strateji · Marka Yönü",
            },
            {
              no: "02",
              en: "Creative",
              tr: "Kreatif",
              enSub:
                "Creative Direction · Campaigns · Design",
              trSub:
                "Kreatif Direktörlük · Kampanya · Tasarım",
            },
            {
              no: "03",
              en: "Content",
              tr: "İçerik",
              enSub:
                "Photography · Video · Social Media",
              trSub:
                "Fotoğraf · Video · Sosyal Medya",
            },
            {
              no: "04",
              en: "Growth",
              tr: "Büyüme",
              enSub:
                "Performance · SEO · GEO · Digital Growth",
              trSub:
                "Performans · SEO · GEO · Dijital Büyüme",
            },
            {
              no: "05",
              en: "Technology",
              tr: "Teknoloji",
              enSub:
                "Web · Digital Products · Experience",
              trSub:
                "Web · Dijital Ürünler · Deneyim",
            },
          ].map((service) => (
            <Link
              key={service.no}
              href={
                lang === "tr"
                  ? "/tr/hizmetler"
                  : "/en/services"
              }
              className="service-row"
            >
              <span className="service-number">
                {service.no}
              </span>

              <h3>
                {lang === "tr"
                  ? service.tr
                  : service.en}
              </h3>

              <p>
                {lang === "tr"
                  ? service.trSub
                  : service.enSub}
              </p>

              <span className="service-arrow">
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.3}
                />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================
          CLIENTS
      ========================= */}

      <section className="royal-clients">
        <div className="clients-heading">
          <div>
            <span>04</span>

            <span>
              {lang === "tr"
                ? "Seçili Markalar"
                : "Selected Clients"}
            </span>
          </div>

          <p>
            {lang === "tr"
              ? "Birlikte değer ürettiğimiz markalardan bazıları."
              : "A selection of brands we've created value with."}
          </p>
        </div>

        <div className="client-names">
          <span>SPLENDID PALACE</span>
          <span>SPEKTR</span>
          <span>MYNOS</span>
          <span>THE ISTANBUL BUTCHER</span>
          <span>LA LARA</span>
          <span>THE ONE BODRUM</span>
        </div>
      </section>

      {/* =========================
          LOCATIONS
      ========================= */}

      <section className="royal-locations">
        <div className="locations-heading">
          <div>
            <div className="royal-eyebrow royal-eyebrow-dark">
              <span className="royal-diamond" />

              {lang === "tr"
                ? "Lokasyonlar"
                : "Locations"}
            </div>

            <h2>
              {lang === "tr"
                ? "Üç şehir. Tek yaratıcı standart."
                : "Three cities. One creative standard."}
            </h2>
          </div>

          <p>
            {lang === "tr"
              ? "Yerel içgörüyü uluslararası bir bakış açısıyla bir araya getiriyoruz."
              : "Combining local insight with an international point of view."}
          </p>
        </div>

        <div className="location-grid">
          <div className="location-card location-bodrum">
            <div className="location-image">
              <span>01</span>
              <span>Türkiye</span>
            </div>

            <div className="location-info">
              <h3>Bodrum</h3>

              <p>
                Turgut Reis Cd. No:259 D:1
                <br />
                Gümbet · Bodrum
              </p>
            </div>
          </div>

          <div className="location-card location-istanbul">
            <div className="location-image">
              <span>02</span>
              <span>Türkiye</span>
            </div>

            <div className="location-info">
              <h3>İstanbul</h3>

              <p>
                Dikilitaş Mah. Emirhan Cad.
                <br />
                Beşiktaş · İstanbul
              </p>
            </div>
          </div>

          <div className="location-card location-lisbon">
            <div className="location-image">
              <span>03</span>
              <span>Portugal</span>
            </div>

            <div className="location-info">
              <h3>
                {lang === "tr"
                  ? "Lizbon"
                  : "Lisbon"}
              </h3>

              <p>
                R. de São Bento 31
                <br />
                Lisboa · Portugal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================= */}

      <section className="royal-final">
        <div className="final-ornament">
          <span />
          <i>M&G</i>
          <span />
        </div>

        <p className="final-kicker">
          {lang === "tr"
            ? "Aklınızda bir proje mi var?"
            : "Have a project in mind?"}
        </p>

        <h2>
          {lang === "tr" ? (
            <>
              Misafirleriniz zaten sizi arıyor.
              <br />
              Bulduklarında gördüklerini sevmelerini
              sağlayalım.
            </>
          ) : (
            <>
              Your guests are already looking for you.
              <br />
              Let&apos;s make them love what they find.
            </>
          )}
        </h2>

        <Link
          href={
            lang === "tr"
              ? "/tr/iletisim"
              : "/en/contact"
          }
          className="final-button"
        >
          {lang === "tr"
            ? "Bir proje başlatalım"
            : "Start a project"}

          <ArrowUpRight
            size={15}
            strokeWidth={1.4}
          />
        </Link>
      </section>

      <Footer locale={locale === "tr" ? "tr" : "en"} />
    </main>
  );
}