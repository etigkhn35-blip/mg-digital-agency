import { notFound } from "next/navigation";

import Article from "@/components/insights/Article";
import {
  getInsight,
  insights,
} from "@/data/insights";

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const insight = getInsight(slug);

  if (!insight) {
    notFound();
  }

  return (
    <Article
      insight={insight}
      locale="tr"
    />
  );
}