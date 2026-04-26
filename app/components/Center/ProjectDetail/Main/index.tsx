import type { ProjectRecord, ProjectSlug } from "@/content";
import { useLanguage } from "@/provider/language-provider";
import { OverviewTab } from "./OverviewTab";
import { ReadmeTab } from "./ReadmeTab";
import { WebsiteTab } from "./WebsiteTab";

type MainProps = {
  project: ProjectRecord[ProjectSlug];
};

export default function Main({ project }: MainProps) {
  const { locale } = useLanguage();

  return (
    <>
      <OverviewTab project={project} />
      <ReadmeTab locale={locale} slug={project.slug} />
      <WebsiteTab githubUrl={project.links?.github} />
    </>
  );
}
