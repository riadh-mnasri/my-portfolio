"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = locale === "fr" ? "en" : "fr";

  return (
    <button
      type="button"
      onClick={() => {
        const hash = typeof window !== "undefined" ? window.location.hash : "";
        router.replace(`${pathname}${hash}`, { locale: otherLocale });
      }}
      className="flex items-center rounded-full text-xs font-semibold glass overflow-hidden"
      style={{ border: "1px solid rgba(212,175,55,0.3)" }}
      aria-label="Switch language"
    >
      <span
        className="px-2.5 py-1.5"
        style={{
          background: locale === "fr" ? "#D4AF37" : "transparent",
          color: locale === "fr" ? "#0A0A0F" : "#94A3B8",
        }}
      >
        FR
      </span>
      <span
        className="px-2.5 py-1.5"
        style={{
          background: locale === "en" ? "#D4AF37" : "transparent",
          color: locale === "en" ? "#0A0A0F" : "#94A3B8",
        }}
      >
        EN
      </span>
    </button>
  );
}
