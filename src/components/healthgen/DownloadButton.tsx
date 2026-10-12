import { Download } from "lucide-react";
import { APK_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  variant?: "primary" | "outline" | "large";
  className?: string;
};

/** Shared APK download button used across navbar, hero, download and final CTA. */
export function DownloadButton({ label = "Download App", variant = "primary", className }: Props) {
  const styles = {
    primary:
      "bg-primary text-primary-foreground shadow-md shadow-primary/25 hover:-translate-y-0.5 hover:bg-primary-deep hover:shadow-lg hover:shadow-primary/25",
    outline:
      "border border-primary/30 bg-card text-primary-deep hover:-translate-y-0.5 hover:bg-secondary",
    large:
      "bg-card text-primary-deep shadow-lg transition-all hover:-translate-y-0.5 hover:bg-secondary hover:shadow-xl px-8 py-4 text-base",
  }[variant];

  return (
    <a
      href={APK_URL}
      download="healthgen.apk"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        styles,
        className,
      )}
    >
      <Download className="size-4" aria-hidden />
      {label}
    </a>
  );
}
