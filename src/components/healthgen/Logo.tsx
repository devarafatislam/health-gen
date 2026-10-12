
import { site } from "@/lib/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label="Healthgen home">
      <img
        src="/favicon.png"
        alt="Healthgen logo"
        className="size-10 rounded-full object-contain"
        width={40}
        height={40}
      />
      {!compact && (
        <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
          {site.name}
        </span>
      )}
    </a>
  );
}
