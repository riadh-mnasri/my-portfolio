"use client";
import { useMemo, useState } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ExternalLink, Search } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { GithubIcon } from "@/components/ui/SocialIcons";
import type { CatalogPageContent } from "@/lib/content/catalog";

function matches(query: string, app: CatalogPageContent["categories"][number]["apps"][number]): boolean {
  if (!query) return true;
  const haystack = [app.name, app.desc, ...app.tags, ...app.techStack].join(" ").toLowerCase();
  return haystack.includes(query.toLowerCase());
}

export function AppCatalog({ content }: { content: CatalogPageContent }) {
  const locale = useLocale();
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      content.categories
        .map((category) => ({
          ...category,
          apps: category.apps.filter((app) => matches(query, app)),
        }))
        .filter((category) => category.apps.length > 0),
    [content.categories, query],
  );

  return (
    <>
      <header className="sticky top-0 z-50" style={{ background: "rgba(10,10,15,0.92)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <Link href="/" locale={locale} className="text-sm text-[#94A3B8] hover:text-[#F1F5F9] transition-colors flex-shrink-0">
            {content.backLabel}
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.2)" }}>
            {content.label}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] leading-tight mb-4">
            {content.titlePrefix}
            <span className="gradient-text">{content.titleHighlight}</span>
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="relative max-w-xl mx-auto mb-16">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={content.searchPlaceholder}
            className="w-full glass rounded-xl py-3 pl-11 pr-4 text-sm text-[#F1F5F9] placeholder:text-[#94A3B8] outline-none focus:border-[rgba(212,175,55,0.4)]"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          />
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[#94A3B8]">{content.noResults}</p>
        )}

        <div className="space-y-14">
          {filtered.map((category) => (
            <section key={category.slug}>
              <h2 className="text-xl font-bold text-[#F1F5F9] mb-6 flex items-center gap-3">
                {category.label}
                <span className="text-xs font-normal text-[#94A3B8]">
                  {category.apps.length}
                </span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.apps.map((app) => (
                  <GlowCard key={app.slug} className="h-full flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="font-mono font-semibold text-[#F1F5F9]">{app.name}</span>
                    </div>
                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-4 flex-1">{app.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {app.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded text-xs"
                          style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-[#94A3B8] mb-4">
                      {app.techStack.join(" · ")}
                    </div>
                    <div className="flex items-center gap-4 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      {app.liveUrl && (
                        <a href={app.liveUrl} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:underline">
                          <ExternalLink size={12} /> {content.liveLabel}
                        </a>
                      )}
                      <a href={app.repoUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[#94A3B8] hover:text-[#F1F5F9] transition-colors">
                        <GithubIcon size={12} /> {content.codeLabel}
                      </a>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
