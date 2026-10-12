import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { DownloadButton } from "./DownloadButton";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/70 bg-background/85 shadow-sm shadow-foreground/[0.03] backdrop-blur-xl"
          : "border-transparent bg-background/70 backdrop-blur-md"
      }`}
    >
      <nav
        className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6"
        aria-label="Main"
      >
        <Logo />
        <ul className="hidden items-center gap-7 md:flex">
          {site.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <DownloadButton />
        </div>
        <button
          className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-secondary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-background px-4 pb-5 pt-2 md:hidden">
          <ul className="space-y-1">
            {site.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 px-3">
            <DownloadButton className="w-full" />
          </div>
        </div>
      )}
    </header>
  );
}
