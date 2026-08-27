import {
  Blocks,
  Coffee,
  Cloud,
  Bot,
  Radio,
  FlaskConical,
  Landmark,
  Zap,
  ShoppingCart,
  Scale,
  Rocket,
  Building2,
  GraduationCap,
  Sandwich,
  PenLine,
  Swords,
  Users,
  Code2,
  Compass,
  Handshake,
  Mic,
  Target,
  SquareTerminal,
  Network,
  Link2,
  Cog,
  Briefcase,
  Award,
  Check,
  CheckCircle2,
  Eye,
  Heart,
  Globe,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

type IconComponent = React.ComponentType<{
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}>;

export const ICONS: Record<string, IconComponent> = {
  architecture: Blocks,
  jvm: Coffee,
  cloud: Cloud,
  ai: Bot,
  data: Radio,
  quality: FlaskConical,
  finance: Landmark,
  energy: Zap,
  retail: ShoppingCart,
  justice: Scale,
  rocket: Rocket,
  institution: Building2,
  graduation: GraduationCap,
  sandwich: Sandwich,
  github: GithubIcon,
  pen: PenLine,
  linkedin: LinkedinIcon,
  chess: Swords,
  leadership: Users,
  developer: Code2,
  compass: Compass,
  handshake: Handshake,
  mic: Mic,
  target: Target,
  terminal: SquareTerminal,
  network: Network,
  link: Link2,
  gear: Cog,
  briefcase: Briefcase,
  award: Award,
  check: Check,
  celebrate: CheckCircle2,
  eye: Eye,
  heart: Heart,
  globe: Globe,
};

export function Icon({
  name,
  size = 20,
  className,
  style,
}: {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const Component = ICONS[name];
  if (!Component) return <span className={className} style={style}>{name}</span>;
  return <Component size={size} className={className} style={style} />;
}
