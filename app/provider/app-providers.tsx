import type { ReactNode } from "react";
import { DividerStyleProvider } from "@/provider/divider-style-provider";
import { LanguageProvider } from "@/provider/language-provider";
import { ThemeProvider } from "@/provider/theme-provider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <DividerStyleProvider>
          {children}
        </DividerStyleProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
