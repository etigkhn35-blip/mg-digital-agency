import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    no: "01",
    title: "Strateji",
    intro:
      "Markanın nerede durduğunu, kime konuştuğunu ve dijital dünyada nasıl büyümesi gerektiğini netleştiriyoruz.",
    items: [
      "Marka Konumlandırma",
      "Dijital Strateji",
      "İletişim Stratejisi",
      "Rakip & Pazar Analizi",
      "Büyüme Yol Haritası",
    ],
    visual: "service-detail-green",
  },
  {
    no: "02",
    title: "Kreatif",
    intro:
      "Stratejiyi güçlü, tutarlı ve markaya özgü bir görsel dünyaya dönüştürüyoruz.",
    items: [
      "Kreatif Direktörlük",
      "Kampanya Konseptleri",
      "Görsel Dil",
      "Dijital Tasarım",
      "Marka İletişimi",
    ],
    visual: "service-detail-burgundy",
  },
  {
    no: "03",
    title: "İçerik",
    intro:
      "Markanın karakterini anlatan, dikkat çeken ve dijital kanallarda sürdürülebilir içerik sistemleri kuruyoruz.",
    items: [
      "Fotoğraf",
      "Video",
      "Sosyal Medya İçeriği",
      "Editoryal İçerik",
      "İçerik Planlama",
    ],
    visual: "service-detail-gold",
  },
  {
    no: "04",
    title: "Büyüme",
    intro:
      "Görünürlüğü ticari değere dönüştüren performans ve organik büyüme sistemleri oluşturuyoruz.",
    items: [
      "Performance Marketing",
      "SEO",
      "GEO / AI Görünürlüğü",
      "Dijital Kampanyalar",
      "Ölçümleme & Optimizasyon",
    ],
    visual: "service-detail-wine",
  },
  {
    no: "05",
    title: "Teknoloji",
    intro:
      "Markanın dijital deneyimini hızlı, estetik ve kullanıcı odaklı ürünlerle tamamlıyoruz.",
    items: [
      "Web Tasarım",
      "Web Geliştirme",
      "Dijital Deneyim",
      "Landing Page",
      "Dönüşüm Optimizasyonu",
    ],
    visual: "service-detail-forest",
  },
];

export default function ServicesPage() {
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

      <section className="services-page-hero">
        <div className="inner-hero-top">
          <div className="royal-eyebrow">
            <span className="royal-diamond" />
            Hizmetler
          </div>

          <span>M&G / 02</span>
        </div>

        <div className="services-hero-main">
          <div>
            <h1>
              Stratejiden
              <br />
              büyümeye.
            </h1>

            <p className="services-hero-small">
              Tek bir yaratıcı sistem.
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
              Markanın ihtiyaç duyduğu disiplinleri
              birbirinden bağımsız hizmetler olarak
              değil, aynı hedefe çalışan tek bir
              sistem olarak ele alıyoruz.
            </p>

            <span>
              Bodrum · İstanbul · Lizbon
            </span>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="services-intro">
        <div className="inner-index">
          <span>01</span>
          <span>Ne Yapıyoruz?</span>
        </div>

        <div className="services-intro-content">
          <h2>
            Güzel görünen işler üretmek yetmez.
            Markanın büyümesine katkı sağlaması gerekir.
          </h2>

          <div>
            <p>
              Bu nedenle strateji, kreatif, içerik,
              performans ve teknolojiyi aynı masa
              etrafında buluşturuyoruz.
            </p>

            <p>
              Her disiplin diğerini besliyor. Sonuç;
              daha tutarlı bir marka, daha güçlü bir
              dijital deneyim ve daha ölçülebilir bir
              büyüme sistemi.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS */}

      <section className="service-details">
        <div className="service-details-header">
          <div className="royal-eyebrow royal-eyebrow-dark">
            <span className="royal-diamond" />
            Disiplinler
          </div>

          <span>01 — 05</span>
        </div>

        <div className="service-detail-list">
          {services.map((service) => (
            <article
              className="service-detail"
              key={service.no}
            >
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

                <Link href="/tr/iletisim">
                  Bu hizmet hakkında konuşalım
                  <ArrowRight size={14} strokeWidth={1.4} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS STRIP */}

      <section className="services-process">
        <div className="process-header">
          <span>M&G / ÇALIŞMA MODELİ</span>
          <span>01 — 04</span>
        </div>

        <div className="process-intro">
          <div>
            <span className="royal-diamond" />
            <h2>
              Karmaşık süreçleri
              <br />
              sadeleştiriyoruz.
            </h2>
          </div>

          <p>
            Her projeyi aynı kalıba sokmak yerine
            ihtiyacı belirliyor, doğru ekibi kuruyor
            ve ölçülebilir bir yol haritasıyla
            ilerliyoruz.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-item">
            <span>01</span>
            <h3>Keşif</h3>
            <p>
              Markayı, hedefleri ve mevcut durumu
              anlamak.
            </p>
          </div>

          <div className="process-item">
            <span>02</span>
            <h3>Strateji</h3>
            <p>
              Doğru konumlandırmayı ve yol haritasını
              oluşturmak.
            </p>
          </div>

          <div className="process-item">
            <span>03</span>
            <h3>Üretim</h3>
            <p>
              Stratejiyi kreatif ve dijital çıktılara
              dönüştürmek.
            </p>
          </div>

          <div className="process-item">
            <span>04</span>
            <h3>Büyüme</h3>
            <p>
              Sonuçları ölçmek, geliştirmek ve
              sürdürülebilir hale getirmek.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLE */}

      <section className="services-principle">
        <div className="services-principle-label">
          <span>02</span>
          <span>M&G Digital</span>
        </div>

        <div>
          <p>Bizim için iyi iş;</p>

          <h2>
            markanın karakterini korurken
            ticari hedeflerine de hizmet eder.
          </h2>

          <Link href="/tr/islerimiz">
            İşlerimizi incele
            <ArrowUpRight size={14} strokeWidth={1.4} />
          </Link>
        </div>
      </section>

      {/* CTA */}

      <section className="royal-final">
        <div className="final-ornament">
          <span />
          <i>M&G</i>
          <span />
        </div>

        <p className="final-kicker">
          Nereden başlayacağınızı bilmiyor musunuz?
        </p>

        <h2>
          Markanızın neye ihtiyacı olduğunu
          <br />
          birlikte belirleyelim.
        </h2>

        <Link href="/tr/iletisim" className="final-button">
          Bir proje başlatalım
          <ArrowUpRight size={15} strokeWidth={1.4} />
        </Link>
      </section>

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