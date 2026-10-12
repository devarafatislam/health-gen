import { Activity, Lightbulb, Pill } from "lucide-react";
import { DownloadButton } from "./DownloadButton";
import { PhoneMockup } from "./PhoneMockup";

const values = [
  { icon: Activity, label: "Smart Health Tracking" },
  { icon: Lightbulb, label: "Personalized Wellness Tips" },
  { icon: Pill, label: "Medicine Reminders" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-secondary/70 via-background to-background"
    >
      <div className="blob -left-32 top-10 size-96 bg-secondary" aria-hidden />
      <div className="blob -right-24 bottom-0 size-80 bg-accent" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-28 lg:pt-20">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/80 px-4 py-2 text-xs font-semibold text-primary-deep shadow-sm backdrop-blur">
            <span className="size-2 rounded-full bg-primary ring-4 ring-primary/10" aria-hidden />
            Your Personal Health Companion
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
            Take Control of Your Health,{" "}
            <span className="bg-gradient-to-r from-primary-deep to-primary bg-clip-text text-transparent">
              Every Day.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            Track your health, understand your symptoms, stay on top of your medication, and
            discover helpful wellness insights — all in one simple app.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <DownloadButton
              label="Download for Android"
              className="px-7 py-3.5 text-base shadow-lg shadow-primary/20"
            />
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-border/80 bg-card/80 px-7 py-3.5 text-base font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Explore Features
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {values.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <span className="flex size-7 items-center justify-center rounded-full bg-secondary text-primary-deep">
                  <Icon className="size-3.5" aria-hidden />
                </span>
                {label}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-md text-xs leading-relaxed text-muted-foreground">
            Healthgen provides general health information and is not a substitute for professional
            medical advice.
          </p>
        </div>

        <div className="reveal relative mx-auto flex items-end justify-center gap-3 rounded-[2rem] border border-white/70 bg-white/35 px-3 py-8 shadow-[0_30px_90px_-55px_rgba(20,80,50,0.45)] backdrop-blur-sm sm:gap-5 sm:px-6 sm:py-10">
          <div className="blob -right-8 top-1/4 size-40 bg-accent/80" aria-hidden />
          <PhoneMockup screen="symptoms" className="float-slower hidden w-44 sm:block" />
          <PhoneMockup screen="dashboard" className="float-slow relative z-10 w-56 sm:w-64" />
          <PhoneMockup screen="reminders" className="float-slower hidden w-44 xl:block" />
        </div>
      </div>
    </section>
  );
}
