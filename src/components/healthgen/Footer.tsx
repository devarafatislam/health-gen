import { Mail } from "lucide-react";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {site.description}
          </p>
        </div>
        <nav aria-label="Quick links">
          <h3 className="text-sm font-bold text-foreground">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {site.navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-primary-deep">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Health and safety">
          <h3 className="text-sm font-bold text-foreground">Health & Safety</h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href="#privacy"
                className="text-sm text-muted-foreground transition-colors hover:text-primary-deep"
              >
                Privacy & Safety
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-sm text-muted-foreground transition-colors hover:text-primary-deep"
              >
                Medical Disclaimer
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-bold text-foreground">Download & Contact</h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href="/download/healthgen.apk"
                download="healthgen.apk"
                className="text-sm font-medium text-primary-deep hover:underline"
              >
                Download for Android
              </a>
            </li>
            {site.contactEmail && (
              <li>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary-deep"
                >
                  <Mail className="size-4" aria-hidden />
                  {site.contactEmail}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6">
          © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
