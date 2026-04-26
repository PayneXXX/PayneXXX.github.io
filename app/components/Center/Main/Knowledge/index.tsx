import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Link, useViewTransitionState } from "react-router";
import SectionHeader from "@/components/Center/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { TransitionImage } from "@/components/TransitionImage";
import { useSiteContent } from "@/hooks/useSiteContent";
import type { KnowledgeEntry } from "@/types";

function KnowledgeCard({
  item,
  viewDetailsLabel,
}: {
  item: KnowledgeEntry;
  viewDetailsLabel: string;
}) {
  const knowledgeHref = `/knowledge/${item.id}`;
  const isKnowledgeTransitioning = useViewTransitionState(knowledgeHref);
  const transitionName = isKnowledgeTransitioning
    ? `knowledge-cover-${item.id}`
    : "none";

  return (
    <Link
      to={knowledgeHref}
      viewTransition
      data-knowledge-slug={item.id}
      className="group flex w-full flex-col p-4 text-left transition-colors hover:bg-muted/30 sm:p-6"
    >
      <div className="flex flex-col gap-4 transition-all duration-300 group-hover:-translate-y-1">
        <TransitionImage
          transitionName={transitionName}
          src={item.cover}
          alt={item.title}
        />

        <div className="flex flex-col gap-2.5 px-2.5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="min-w-0 flex-1 truncate text-xl font-semibold leading-tight text-foreground">
              {item.title}
            </h3>
            <Badge variant="outline" className="shrink-0 bg-muted">
              {item.tags[0]}
            </Badge>
          </div>

          <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
            {item.summary}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {item.tags.slice(1).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[0.7rem]">
                {tag}
              </Badge>
            ))}
          </div>

          <span className="flex items-center gap-1 pt-2 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
            {viewDetailsLabel}
            <IconArrowNarrowRight data-icon="inline-end" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Knowledge() {
  const {
    home: { knowledge },
  } = useSiteContent();

  const rows = knowledge.items.reduce<KnowledgeEntry[][]>((nextRows, item) => {
    const currentRow = nextRows[nextRows.length - 1];

    if (!currentRow || currentRow.length === 2) {
      nextRows.push([item]);
    } else {
      currentRow.push(item);
    }

    return nextRows;
  }, []);

  return (
    <>
      <SectionHeader>{knowledge.title}</SectionHeader>
      {rows.map((row, rowIndex) => (
        <div key={row.map((item) => item.id).join("-")}>
          <div className="md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-stretch">
            {row[0] ? (
              <KnowledgeCard
                item={row[0]}
                viewDetailsLabel={knowledge.viewDetailsLabel}
              />
            ) : null}
            <div className="double-divider md:hidden" />
            <div
              className="relative hidden overflow-hidden md:block"
              style={{ width: 5 }}
            >
              <div
                className="double-divider absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90"
                style={{ width: 2000 }}
              />
            </div>
            {row[1] ? (
              <KnowledgeCard
                item={row[1]}
                viewDetailsLabel={knowledge.viewDetailsLabel}
              />
            ) : null}
          </div>
          {rowIndex < rows.length - 1 && <div className="double-divider" />}
        </div>
      ))}
    </>
  );
}
