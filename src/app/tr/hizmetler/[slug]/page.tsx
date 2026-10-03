import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
} from "lucide-react";

import {
  getService,
  services,
} from "@/data/services";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.tr.title} | M&G Digital`,
    description: service.tr.intro,
  };
}

export default async function ServiceDetailPageTR({
  params,
}: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const s = service.tr;

  return (
    <main className="service-detail-page">

      {/* NAVIGATION */}

      <header className="service-detail-nav">
        <Link href="/tr/hizmetler">
          <ArrowLeft
            size={15}
            strokeWidth={1.3}
          />
          Hizmetler
        </Link>

        <Link
          href="/tr"
          className="service-detail-logo"
        >
          M&G
        </Link>

        <Link
          href={`/en/services/${service.slug}`}
        >
          <strong>TR</strong> / EN
        </Link>
      </header>

      {/* HERO */}

      <section className="service-detail-hero">
        <div className="service-detail-meta">
          <span>
            Hizmet / {service.no}
          </span>

          <span>
            {s.eyebrow}
          </span>
        </div>

        <h1>{s.title}</h1>

        <div className="service-detail-intro">
          <span>M&G Digital</span>

          <p>{s.intro}</p>
        </div>
      </section>

      {/* APPROACH */}

      <section className="service-statement">
        <span className="service-section-number">
          {service.no}
        </span>

        <div>
          <span className="service-mini-label">
            Yaklaşımımız
          </span>

          <h2>
            Uygulamadan
            <br />
            önce <em>strateji.</em>
          </h2>

          <p>{s.description}</p>
        </div>
      </section>

      {/* CAPABILITIES */}

      <section className="service-capabilities">
        <div className="service-capabilities-head">
          <span>Neler Yapıyoruz?</span>

          <span>
            {String(s.capabilities.length).padStart(
              2,
              "0"
            )}
          </span>
        </div>

        <div className="service-capability-list">
          {s.capabilities.map(
            (capability, index) => (
              <div
                className="service-capability-row"
                key={capability}
              >
                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <h3>{capability}</h3>

                <Check
                  size={18}
                  strokeWidth={1.1}
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* PROCESS */}

      <section className="service-process">
        <div className="service-process-title">
          <span>Nasıl Çalışıyoruz?</span>

          <h2>
            İçgörüden
            <br />
            <em>etkiye.</em>
          </h2>
        </div>

        <div className="service-process-grid">
          <div>
            <span>01</span>
            <h3>Anlıyoruz</h3>
            <p>
              Markayı, hedef kitleyi, pazarı
              ve ticari gerçekleri analiz
              ediyoruz.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Tanımlıyoruz</h3>
            <p>
              Uygulamaya geçmeden önce
              stratejiyi, öncelikleri ve
              kreatif yönü belirliyoruz.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Üretiyoruz</h3>
            <p>
              Stratejiyi içeriğe,
              kampanyalara ve dijital
              deneyimlere dönüştürüyoruz.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Büyütüyoruz</h3>
            <p>
              Ölçüyor, öğreniyor ve sürekli
              optimize ediyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="service-detail-cta">
        <span>
          Aklınızda bir proje mi var?
        </span>

        <h2>
          Keşfedilmeye
          <br />
          değer bir şey
          <br />
          <em>yaratalım.</em>
        </h2>

        <Link href="/tr#contact">
          Bir proje başlatalım

          <ArrowUpRight
            size={21}
            strokeWidth={1.1}
          />
        </Link>
      </section>
    </main>
  );
}