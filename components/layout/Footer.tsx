import { CONTENT } from "@/lib/content";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const { links } = CONTENT;
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] py-10 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="gradient-text font-bold text-lg">Riadh MNASRI</span>
        <p className="text-xs text-[#94A3B8] text-center">
          © {new Date().getFullYear()} · Senior Software Architect & Lead Developer · Paris
        </p>
        <div className="flex gap-4">
          <a href={links.github} target="_blank" rel="noopener noreferrer"
            className="text-[#94A3B8] hover:text-[#6366F1] transition-colors">
            <GithubIcon size={18} />
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-[#94A3B8] hover:text-[#6366F1] transition-colors">
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
