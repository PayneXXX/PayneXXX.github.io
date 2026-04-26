import { useLanguage } from "@/provider/language-provider";
import { getSiteContent } from "@/content";

export function useSiteContent() {
  const { locale } = useLanguage();
  return getSiteContent(locale);
}
