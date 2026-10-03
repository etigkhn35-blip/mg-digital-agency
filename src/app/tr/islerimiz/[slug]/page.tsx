import { notFound } from "next/navigation";

import CaseStudy from "@/components/work/CaseStudy";
import {
  getProject,
  projects,
} from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <CaseStudy
      project={project}
      locale="tr"
    />
  );
}