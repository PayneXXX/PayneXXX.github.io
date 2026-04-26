import { useSiteContent } from "@/hooks/useSiteContent";

export function useKnowledgeItems() {
  const {
    home: { knowledge },
  } = useSiteContent();

  return knowledge.items;
}

export function useKnowledgeItem(slug: string) {
  return useKnowledgeItems().find((item) => item.id === slug);
}
