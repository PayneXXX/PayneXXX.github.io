import type { Config } from "@react-router/dev/config";
import { knowledgeSlugs, projectSlugs } from "./app/content";

export default {
  appDirectory: "app",
  ssr: true,
  async prerender({ getStaticPaths }) {
    return [
      ...getStaticPaths(),
      ...projectSlugs.map((slug) => `/${slug}`),
      ...knowledgeSlugs.map((slug) => `/knowledge/${slug}`),
    ];
  },
} satisfies Config;
