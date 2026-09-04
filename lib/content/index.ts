import { Locale, PortfolioContent } from "./types";
import { fr } from "./fr";
import { en } from "./en";

const CONTENT_BY_LOCALE: Record<Locale, PortfolioContent> = { fr, en };

export function getContent(locale: string): PortfolioContent {
  return CONTENT_BY_LOCALE[locale as Locale] ?? CONTENT_BY_LOCALE.fr;
}

export type { Locale, PortfolioContent } from "./types";
