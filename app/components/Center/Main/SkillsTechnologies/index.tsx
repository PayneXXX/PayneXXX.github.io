import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/Center/SectionHeader";
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandPrisma,
  IconBrandTailwind,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandGit,
  IconBrandGithub,
  IconBrandRust,
  IconBrandPython,
  IconBrandThreejs,
  IconBrandVite,
  IconBrandVue,
  IconBrandRadixUi,
  IconBrandDocker,
} from "@tabler/icons-react";
import { useSiteContent } from "@/hooks/useSiteContent";
import type { SkillIconKey } from "@/types";

const skillIconMap: Record<SkillIconKey, typeof IconBrandReact> = {
  nextjs: IconBrandNextjs,
  react: IconBrandReact,
  nodejs: IconBrandNodejs,
  mongodb: IconBrandMongodb,
  mysql: IconBrandMysql,
  prisma: IconBrandPrisma,
  tailwind: IconBrandTailwind,
  javascript: IconBrandJavascript,
  typescript: IconBrandTypescript,
  git: IconBrandGit,
  github: IconBrandGithub,
  rust: IconBrandRust,
  python: IconBrandPython,
  threejs: IconBrandThreejs,
  vite: IconBrandVite,
  vue: IconBrandVue,
  radix: IconBrandRadixUi,
  docker: IconBrandDocker,
};

export default function SkillsTechnologies() {
  const {
    home: { skills },
  } = useSiteContent();

  return (
    <>
      <SectionHeader>{skills.title}</SectionHeader>
      <ul className="flex flex-wrap items-center justify-center gap-2 px-4 py-2">
        {skills.items.map((skill) => {
          const Icon = skill.icon ? skillIconMap[skill.icon] : null;

          return (
            <li key={skill.name}>
              <Button variant="outline">
                {Icon && <Icon data-icon="inline-start" />}
                {skill.name}
              </Button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
