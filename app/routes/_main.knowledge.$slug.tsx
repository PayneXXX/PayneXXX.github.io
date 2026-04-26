import { useEffect, useState } from "react";
import { IconChevronLeft } from "@tabler/icons-react";
import { Link, ScrollRestoration, useViewTransitionState } from "react-router";
import { ModeToggle } from "@/components/ModeToggle";
import SectionFrame from "@/components/Center/SectionFrame";
import { NotFound } from "@/components/Center/ProjectDetail/NotFound";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { TransitionImage } from "@/components/TransitionImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useKnowledgeItem } from "@/hooks/useKnowledge";
import { useLanguage } from "@/provider/language-provider";
import { useSiteContent } from "@/hooks/useSiteContent";
import type { Route } from "./+types/_main.knowledge.$slug";

export function loader({ params }: Route.LoaderArgs) {
  return {
    slug: params.slug,
  };
}

export default function KnowledgeDetailRoute({
  loaderData,
}: Route.ComponentProps) {
  const { slug } = loaderData;
  const item = useKnowledgeItem(slug);
  const { locale } = useLanguage();
  const { ui } = useSiteContent();
  const [markdown, setMarkdown] = useState("");
  const [isMarkdownLoading, setIsMarkdownLoading] = useState(true);
  const [markdownError, setMarkdownError] = useState<string | null>(null);
  const isKnowledgeTransitioning = useViewTransitionState(`/knowledge/${slug}`);
  const transitionName = isKnowledgeTransitioning
    ? `knowledge-cover-${slug}`
    : "none";

  useEffect(() => {
    let isCurrent = true;
    const markdownPaths =
      locale === "zh-CN"
        ? [`/markdown/knowledge/${slug}_cn.md`, `/markdown/knowledge/${slug}.md`]
        : [`/markdown/knowledge/${slug}.md`];

    async function loadMarkdown() {
      setIsMarkdownLoading(true);
      setMarkdownError(null);

      try {
        const nextMarkdown = await fetchFirstMarkdown(markdownPaths);

        if (!isCurrent) {
          return;
        }

        setMarkdown(nextMarkdown);
      } catch {
        if (!isCurrent) {
          return;
        }

        setMarkdown("");
        setMarkdownError(ui.projectDetail.readmeError);
      } finally {
        if (isCurrent) {
          setIsMarkdownLoading(false);
        }
      }
    }

    if (item) {
      loadMarkdown();
    }

    return () => {
      isCurrent = false;
    };
  }, [item, locale, slug, ui.projectDetail.readmeError]);

  return (
    <>
      <ScrollRestoration />
      <SectionFrame>
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2 text-lg font-semibold leading-tight text-title">
            <Button variant="ghost" size="icon-sm" asChild>
              <Link
                to="/#knowledge"
                state={{ viewTransitionKnowledgeSlug: slug }}
                viewTransition
              >
                <IconChevronLeft data-icon="inline-start" />
              </Link>
            </Button>
            Knowledge
          </div>
          <ModeToggle />
        </div>
      </SectionFrame>

      {item ? (
        <>
          <SectionFrame>
            <div className="p-4">
              <TransitionImage
                transitionName={transitionName}
                src={item.cover}
                alt={item.title}
              />
            </div>
          </SectionFrame>

          <SectionFrame>
            <div className="flex flex-col gap-4 p-5 sm:p-8">
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-3xl font-semibold tracking-tight text-title">
                  {item.title}
                </h1>
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.summary}
                </p>
              </div>

              <div className="double-divider" />

              {isMarkdownLoading ? (
                <p className="text-sm text-muted-foreground">
                  {ui.projectDetail.readmeLoading}
                </p>
              ) : markdownError ? (
                <p className="text-sm text-muted-foreground">{markdownError}</p>
              ) : (
                <MarkdownArticle>{markdown}</MarkdownArticle>
              )}
            </div>
          </SectionFrame>
        </>
      ) : (
        <SectionFrame>
          <NotFound />
        </SectionFrame>
      )}
    </>
  );
}

async function fetchFirstMarkdown(paths: string[]) {
  for (const path of paths) {
    const response = await fetch(path);

    if (response.ok) {
      return response.text();
    }
  }

  throw new Error("Markdown file not found.");
}
