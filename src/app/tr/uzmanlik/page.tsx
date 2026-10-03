import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const expertise = [
  {
    no: "01",
    title: "Otel & Konaklama",
    text:
      "Otel markalarını yalnızca konaklama ürünü olarak değil; destinasyon, deneyim ve yaşam tarzının bir bütünü olarak ele alıyoruz.",
    tags: [
      "Oteller",
      "Tatil Köyleri",
      "Destinasyonlar",
      "Butik Oteller",
    ],
    visual: "expertise-visual-green",
  },
  {
    no: "02",
    title: "Yeme & İçme",
    text:
      "Restoran ve gastronomi markalarının karakterini dijital dünyada iştah uyandıran, tutarlı ve güçlü deneyimlere dönüştürüyoruz.",
    tags: [
      "Restoranlar",
      "Gastronomi",
      "Mekanlar",
      "Deneyimler",
    ],
    visual: "expertise-visual-burgundy",
  },
  {
    no: "03",
    title: "Premium & Yaşam Tarzı",
    text:
      "Premium markaların dijital kimliğini, estetik değerini ve hedef kitlesiyle kurduğu ilişkiyi bütünsel olarak tasarlıyoruz.",
    tags: [
      "Premium Markalar",
      "Yaşam Tarzı",
      "Mekanlar",
      "Deneyimler",
    ],
    visual: "expertise-visual-gold",
  },
];

export default function ExpertisePage() {
  return (
    <main className="inner-site">
      {/* HEADER */}

      <header className="royal-header">
        <Link href="/tr" className="royal-brand">
          <span className="royal-monogram">
            M&G
          </span>

          <span className="royal-brand-name">
            DIGITAL
          </span>
        </Link>

        <nav className="royal-nav">
          <Link href="/tr/islerimiz">
            İşlerimiz
          </Link>

          <Link href="/tr/uzmanlik">
            Uzmanlık
          </Link>

          <Link href="/tr/hizmetler">
            Hizmetler
          </Link>

          <Link href="/tr/hakkimizda">
            Hakkımızda
          </Link>

          <Link href="/tr/icgoruler">
            İçgörüler
          </Link>
        </nav>

        <div className="royal-actions">
          <div className="royal-language">
            <Link
              href="/tr"
              className="active"
            >
              TR
            </Link>

            <span>/</span>

            <Link href="/en">
              EN
            </Link>
          </div>

          <Link
            href="/tr/iletisim"
            className="royal-contact"
          >
            Bir Proje Başlatalım

            <ArrowUpRight
              size={13}
              strokeWidth={1.4}
            />
          </Link>
        </div>
      </header>

      {/* HERO */}

      <section className="expertise-page-hero">
        <div className="inner-hero-top">
          <div className="royal-eyebrow">
            <span className="royal-diamond" />
            Uzmanlık
          </div>

          <span>M&G / 01</span>
        </div>

        <div className="expertise-hero-grid">
          <div>
            <h1>
              En iyi bildiğimiz
              <br />
              dünya.
            </h1>
          </div>

          <div className="expertise-hero-copy">
            <p>
              Turizm bizim için hizmet verdiğimiz
              bir sektör değil. İçinden geldiğimiz
              dünya.
            </p>

            <span>
              Hospitality · Gastronomy · Lifestyle
            </span>
          </div>
        </div>

        <div className="expertise-hero-band">
          <span>
            Yerel içgörü
          </span>

          <i />

          <span>
            Uluslararası perspektif
          </span>

          <i />

          <span>
            Tek yaratıcı standart
          </span>
        </div>
      </section>

      {/* INTRO */}

      <section className="expertise-intro">
        <div className="inner-index">
          <span>01</span>
          <span>Yaklaşımımız</span>
        </div>

        <div className="expertise-intro-content">
          <h2>
            Bir markanın dijital dünyada nasıl
            göründüğünden önce, insanların onu
            nasıl hissetmesini istediğimizi
            düşünüyoruz.
          </h2>

          <div className="expertise-intro-bottom">
            <p>
              Otel, restoran ve yaşam tarzı
              markalarının ihtiyaçlarını içeriden
              biliyoruz. Bu nedenle stratejiyi
              estetikten, içeriği performanstan,
              dijitali gerçek deneyimden ayrı
              değerlendirmiyoruz.
            </p>

            <p>
              Her projeye markanın dünyasını,
              hedef kitlesini ve ticari hedeflerini
              birlikte anlayarak başlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERTISE AREAS */}

      <section className="expertise-areas">
        <div className="expertise-area-heading">
          <div className="royal-eyebrow royal-eyebrow-dark">
            <span className="royal-diamond" />
            Uzmanlık Alanları
          </div>

          <span>01 — 03</span>
        </div>

        <div className="expertise-area-list">
          {expertise.map((item) => (
            <article
              className="expertise-area"
              key={item.no}
            >
              <div
                className={`expertise-area-visual ${item.visual}`}
              >
                <div className="expertise-area-art" />

                <span className="expertise-area-number">
                  {item.no}
                </span>

                <span className="expertise-area-mark">
                  M&G
                </span>
              </div>

              <div className="expertise-area-copy">
                <span className="expertise-area-index">
                  {item.no}
                </span>

                <h2>
                  {item.title}
                </h2>

                <p>
                  {item.text}
                </p>

                <div className="expertise-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href="/tr/iletisim">
                  Bu alanda konuşalım

                  <ArrowRight
                    size={14}
                    strokeWidth={1.4}
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}

      <section className="expertise-philosophy">
        <div className="philosophy-top">
          <span>M&G DIGITAL</span>
          <span>BODRUM · ISTANBUL · LISBON</span>
        </div>

        <div className="philosophy-content">
          <span className="royal-diamond" />

          <h2>
            Turizmi pazarlamıyoruz.
            <br />
            İnsanların onu istemesini
            sağlıyoruz.
          </h2>

          <p>
            Strateji, kreatif ve teknolojiyi;
            markanın gerçek dünyadaki deneyimini
            daha güçlü hale getirmek için
            kullanıyoruz.
          </p>
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
          Markanız için ne yapabiliriz?
        </p>

        <h2>
          Doğru insanlara ulaşan,
          <br />
          hatırlanmaya değer bir marka yaratalım.
        </h2>

        <Link
          href="/tr/iletisim"
          className="final-button"
        >
          Bir proje başlatalım

          <ArrowUpRight
            size={15}
            strokeWidth={1.4}
          />
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
            <span className="footer-label">
              Keşfet
            </span>

            <Link href="/tr/islerimiz">
              İşlerimiz
            </Link>

            <Link href="/tr/uzmanlik">
              Uzmanlık
            </Link>

            <Link href="/tr/hizmetler">
              Hizmetler
            </Link>

            <Link href="/tr/hakkimizda">
              Hakkımızda
            </Link>

            <Link href="/tr/icgoruler">
              İçgörüler
            </Link>
          </div>

          <div className="footer-column">
            <span className="footer-label">
              Lokasyonlar
            </span>

            <span>Bodrum</span>
            <span>İstanbul</span>
            <span>Lizbon</span>
          </div>

          <div className="footer-column">
            <span className="footer-label">
              İletişim
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

          <Link href="/tr">
            Ana Sayfa ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}