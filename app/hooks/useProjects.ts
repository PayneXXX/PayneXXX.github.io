import { useLanguage } from "@/provider/language-provider";
import {
  getSiteContent,
  type ProjectRecord,
  type ProjectSlug,
} from "@/content";

export function useProjects() {
  const { locale } = useLanguage();
  return getSiteContent(locale).projects;
}

function hasProject(
  projects: ProjectRecord,
  slug: string,
): slug is ProjectSlug {
  return Object.hasOwn(projects, slug);
}

export function useProject(slug: string) {
  const projects = useProjects();

  if (!hasProject(projects, slug)) {
    return undefined;
  }

  return projects[slug];
}
