import SectionHeader from "@/components/Center/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { useSiteContent } from "@/hooks/useSiteContent";
import type { DeckEntry } from "@/types";

function DeckItem({ deck }: { deck: DeckEntry }) {
  return (
    <article className="p-4 sm:p-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 px-2.5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h3 className="text-xl font-semibold leading-tight text-foreground">
              {deck.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {deck.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {deck.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-muted">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <p className="px-2.5 text-sm leading-6 text-muted-foreground">
          {deck.description}
        </p>

        <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-muted p-1">
          <iframe
            src={deck.src}
            title={deck.title}
            className="block size-full rounded-lg border-0 bg-background"
          />
        </div>
      </div>
    </article>
  );
}

export default function Decks() {
  const {
    home: { decks },
  } = useSiteContent();

  return (
    <>
      <SectionHeader>{decks.title}</SectionHeader>
      {decks.items.map((deck, index) => (
        <div key={deck.id}>
          <DeckItem deck={deck} />
          {index < decks.items.length - 1 && <div className="double-divider" />}
        </div>
      ))}
    </>
  );
}
