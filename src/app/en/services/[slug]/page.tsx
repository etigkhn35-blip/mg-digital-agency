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
    title: `${service.en.title} | M&G Digital`,
    description: service.en.intro,
  };
}

export default async function ServiceDetailPage({
  params,
}: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const s = service.en;

  return (
    <main className="service-detail-page">

      {/* NAVIGATION */}

      <header className="service-detail-nav">
        <Link href="/en/services">
          <ArrowLeft
            size={15}
            strokeWidth={1.3}
          />
          Services
        </Link>

        <Link
          href="/en"
          className="service-detail-logo"
        >
          M&G
        </Link>

        <Link
          href={`/tr/hizmetler/${service.slug}`}
        >
          TR / <strong>EN</strong>
        </Link>
      </header>

      {/* HERO */}

      <section className="service-detail-hero">
        <div className="service-detail-meta">
          <span>
            Service / {service.no}
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

      {/* STATEMENT */}

      <section className="service-statement">
        <span className="service-section-number">
          {service.no}
        </span>

        <div>
          <span className="service-mini-label">
            Our approach
          </span>

          <h2>
            Strategy before
            <br />
            <em>execution.</em>
          </h2>

          <p>{s.description}</p>
        </div>
      </section>

      {/* CAPABILITIES */}

      <section className="service-capabilities">
        <div className="service-capabilities-head">
          <span>Capabilities</span>

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
          <span>How we work</span>

          <h2>
            From insight
            <br />
            to <em>impact.</em>
          </h2>
        </div>

        <div className="service-process-grid">
          <div>
            <span>01</span>
            <h3>Understand</h3>
            <p>
              We start with the brand,
              audience, market and commercial
              reality.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Define</h3>
            <p>
              We define the strategy,
              priorities and creative direction
              before execution begins.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Create</h3>
            <p>
              Strategy becomes content,
              campaigns and digital
              experiences.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Grow</h3>
            <p>
              We measure, learn and optimise
              continuously.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="service-detail-cta">
        <span>
          Have a project in mind?
        </span>

        <h2>
          Let&apos;s make
          <br />
          something worth
          <br />
          <em>discovering.</em>
        </h2>

        <Link href="/en#contact">
          Start a project

          <ArrowUpRight
            size={21}
            strokeWidth={1.1}
          />
        </Link>
      </section>
    </main>
  );
}