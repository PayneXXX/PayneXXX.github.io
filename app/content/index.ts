import enContent from "./en";
import zhContent from "./zh";
import type { ProjectMap, SiteContent, SiteLanguage } from "../types";

export type ProjectSlug = Extract<keyof typeof enContent.projects, string>;
export type ProjectRecord = ProjectMap<ProjectSlug>;
export type KnowledgeSlug = (typeof enContent.home.knowledge.items)[number]["id"];
type LocalizedSiteContent = Omit<SiteContent, "projects"> & {
  projects: ProjectRecord;
};

export const projectSlugs = Object.keys(enContent.projects) as ProjectSlug[];
export const knowledgeSlugs = enContent.home.knowledge.items.map(
  (item) => item.id,
) as KnowledgeSlug[];

const contentByLanguage: Record<SiteLanguage, LocalizedSiteContent> = {
  "en-US": enContent,
  "zh-CN": zhContent,
};

export function getSiteContent(language: SiteLanguage) {
  return contentByLanguage[language];
}

export function formatContentTemplate(
  template: string,
  values: Record<string, string | number>,
) {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    if (!Object.hasOwn(values, key)) {
      return match;
    }

    return String(values[key]);
  });
}
