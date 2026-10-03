import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const principles = [
  {
    no: "01",
    title: "Önce Anlarız",
    text:
      "Markayı, hedef kitlesini ve ticari hedeflerini anlamadan üretime başlamayız.",
  },
  {
    no: "02",
    title: "Sadeleştiririz",
    text:
      "Karmaşık problemleri net stratejilere ve uygulanabilir yaratıcı fikirlere dönüştürürüz.",
  },
  {
    no: "03",
    title: "Birlikte Üretiriz",
    text:
      "Strateji, kreatif, içerik, büyüme ve teknolojiyi birbirinden koparmayız.",
  },
  {
    no: "04",
    title: "Sonucu Takip Ederiz",
    text:
      "İşi yayına almak son değil. Ölçer, öğrenir, geliştirir ve büyütürüz.",
  },
];

export default function AboutPage() {
  return (
    <main className="inner-site">
      {/* HEADER */}

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

      <section className="about-page-hero">
        <div className="inner-hero-top">
          <div className="royal-eyebrow">
            <span className="royal-diamond" />
            Hakkımızda
          </div>

          <span>M&G / 03</span>
        </div>

        <div className="about-hero-grid">
          <div className="about-hero-copy">
            <h1>
              Bağımsız.
              <br />
              Meraklı.
              <br />
              Sonuç odaklı.
            </h1>

            <p>
              Turizm ve yaşam tarzı markaları için
              strateji, kreatif, içerik, büyüme ve
              teknolojiyi bir araya getiren bağımsız
              bir dijital ajansız.
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
              <span>İstanbul</span>
              <span>Lizbon</span>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}

      <section className="about-manifesto">
        <div className="inner-index">
          <span>01</span>
          <span>Bakış Açımız</span>
        </div>

        <div className="about-manifesto-content">
          <p className="about-manifesto-small">
            M&G Digital
          </p>

          <h2>
            İnsanlar bir markayla artık kapısından
            içeri girdiklerinde değil, onu ilk kez
            ekranlarında gördüklerinde tanışıyor.
          </h2>

          <div className="about-manifesto-copy">
            <p>
              Bu nedenle dijitali yalnızca bir
              iletişim kanalı olarak görmüyoruz.
              Dijital; markanın ilk izlenimi,
              hikayesi, vitrini ve çoğu zaman
              ilk satış noktası.
            </p>

            <p>
              İşimiz, gerçek dünyadaki deneyimin
              değerini dijitalde kaybetmeden
              anlatmak ve doğru insanlara
              ulaştırmak.
            </p>
          </div>
        </div>
      </section>

      {/* STATEMENT */}

      <section className="about-statement">
        <div className="about-statement-top">
          <span>M&G / POINT OF VIEW</span>
          <span>HOSPITALITY · CULTURE · GROWTH</span>
        </div>

        <div className="about-statement-content">
          <span className="royal-diamond" />

          <p>Bizim için mesele</p>

          <h2>
            daha fazla içerik üretmek değil.
            <br />
            Daha güçlü bir marka yaratmak.
          </h2>
        </div>
      </section>

      {/* ROOTS */}

      <section className="about-roots">
        <div className="about-roots-heading">
          <div>
            <div className="royal-eyebrow royal-eyebrow-dark">
              <span className="royal-diamond" />
              Nereden Geliyoruz?
            </div>

            <h2>
              Turizmin içinden gelen
              bir bakış açısı.
            </h2>
          </div>

          <p>
            Misafir davranışını, sezonu, destinasyonu,
            deneyimi ve turizm markalarının günlük
            gerçeklerini biliyoruz.
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
              Turizm bizim için
              yalnızca bir uzmanlık alanı değil.
            </h3>

            <p>
              Otellerin, restoranların ve
              destinasyonların dijital ihtiyaçlarını
              yalnızca pazarlama perspektifinden
              değerlendirmiyoruz.
            </p>

            <p>
              Misafirin karar sürecini, markayla
              kurduğu ilişkiyi ve gerçek deneyimin
              dijitalde nasıl temsil edildiğini
              birlikte ele alıyoruz.
            </p>

            <Link href="/tr/uzmanlik">
              Uzmanlığımızı keşfet

              <ArrowRight
                size={14}
                strokeWidth={1.4}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATIONS / NETWORK */}

      <section className="about-network">
        <div className="about-network-heading">
          <span>02</span>

          <div>
            <p>Yerel içgörü.</p>

            <h2>
              Uluslararası
              perspektif.
            </h2>
          </div>

          <p className="about-network-intro">
            Farklı şehirlerden bakıyor,
            aynı yaratıcı standardı koruyoruz.
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
            <h3>İstanbul</h3>
            <p>Türkiye</p>
            <small>41° N · 29° E</small>
          </article>

          <article>
            <span>03</span>
            <h3>Lizbon</h3>
            <p>Portugal</p>
            <small>38° N · 09° W</small>
          </article>
        </div>
      </section>

      {/* PRINCIPLES */}

      <section className="about-principles">
        <div className="about-principles-heading">
          <div className="royal-eyebrow royal-eyebrow-dark">
            <span className="royal-diamond" />
            Nasıl Çalışıyoruz?
          </div>

          <h2>
            Az karmaşa.
            <br />
            Net düşünce.
            <br />
            Güçlü iş.
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

      {/* CULTURE */}

      <section className="about-culture">
        <div className="about-culture-label">
          <span>03</span>
          <span>M&G Digital</span>
        </div>

        <div className="about-culture-content">
          <span className="royal-diamond" />

          <h2>
            Büyük ajans katmanları olmadan,
            büyük marka standardında çalışıyoruz.
          </h2>

          <p>
            Daha yakın iletişim, daha hızlı karar,
            daha az bürokrasi ve işe doğrudan dahil
            olan bir ekip.
          </p>

          <Link href="/tr/iletisim">
            Bizimle tanışın

            <ArrowUpRight
              size={14}
              strokeWidth={1.4}
            />
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
          Birlikte ne yaratabiliriz?
        </p>

        <h2>
          Markanızı bir sonraki
          <br />
          seviyeye taşıyalım.
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
          <span>© 2026 M&G Digital Agency</span>
          <span>Bodrum · Istanbul · Lisbon</span>
          <Link href="/tr">Ana Sayfa ↑</Link>
        </div>
      </footer>
    </main>
  );
}