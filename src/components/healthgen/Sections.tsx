import {
  Activity,
  BookOpenText,
  BrainCircuit,
  CheckCircle2,
  ClipboardList,
  Download,
  History,
  Lightbulb,
  MapPin,
  Pill,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="inline-flex rounded-full bg-secondary px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary-deep">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

/* ---------- C. Trust / value proposition ---------- */
export function TrustSection() {
  const cards = [
    {
      icon: BookOpenText,
      title: "Stay Informed",
      text: "Keep your health information organized and review your records over time.",
    },
    {
      icon: Sparkles,
      title: "Build Healthy Habits",
      text: "Receive general wellness suggestions and develop more consistent health routines.",
    },
    {
      icon: MapPin,
      title: "Find Care Nearby",
      text: "Explore nearby healthcare facilities and access available contact information.",
    },
  ];
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title="Your Health Journey, All in One Place"
          description="Make everyday health tracking simpler with helpful tools designed around your routine."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="reveal group rounded-3xl border border-border/80 bg-card p-7 shadow-[0_10px_35px_-28px_rgba(20,80,50,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary-deep transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- D. Features ---------- */
const features = [
  {
    icon: UserRound,
    title: "Personal Health Profile",
    points: [
      "Store essential profile information.",
      "Record age and relevant health measurements.",
      "Keep health information organized in one place.",
    ],
  },
  {
    icon: Activity,
    title: "Daily Health Tracking",
    points: [
      "Record blood pressure, blood sugar, temperature, and other supported metrics.",
      "Review previously recorded measurements.",
      "Maintain a consistent health diary.",
    ],
  },
  {
    icon: ClipboardList,
    title: "Symptom Diary",
    points: [
      "Log symptoms such as fever, cough, and headaches.",
      "Record dates and relevant notes.",
      "Review symptom history to support conversations with healthcare professionals.",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Health Guidance",
    points: [
      "Receive general information based on your entered symptoms.",
      "Get appropriate next-step guidance and safety information.",
      "AI guidance is general information — never a diagnosis.",
    ],
  },
  {
    icon: Lightbulb,
    title: "Personalized Wellness Tips",
    points: [
      "General wellness and lifestyle suggestions.",
      "Encouragement for healthy routines based on available information.",
      "No unsupported medical claims.",
    ],
  },
  {
    icon: Pill,
    title: "Medicine Reminders",
    points: [
      "Configure medication names, schedules, and reminder times.",
      "Remember your prescribed medication routines.",
      "Healthgen never recommends changing medication or dosage.",
    ],
  },
  {
    icon: MapPin,
    title: "Nearby Healthcare Facilities",
    points: [
      "Discover hospitals, clinics, and pharmacies with map support.",
      "See available contact information and locations.",
      "Location permission is requested only when needed.",
    ],
  },
  {
    icon: History,
    title: "Health History",
    points: [
      "Keep previous records accessible.",
      "Review trends in your recorded information.",
      "Measurements presented clearly, without diagnostic conclusions.",
    ],
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Features"
          title="Everything You Need for Smarter Health Tracking"
          description="Simple tools that help you stay organized, informed, and proactive about your health."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, points }) => (
            <article
              key={title}
              className="reveal group rounded-3xl border border-border/80 bg-card p-6 shadow-[0_10px_35px_-28px_rgba(20,80,50,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary-deep transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-bold text-foreground">{title}</h3>
              <ul className="mt-3 space-y-1.5">
                {points.map((p) => (
                  <li key={p} className="text-[13px] leading-relaxed text-muted-foreground">
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- E. App preview ---------- */
export function AppPreviewSection() {
  return (
    <section className="overflow-hidden bg-linear-to-b from-surface to-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title="Meet Your New Health Companion"
          description="A clean, simple experience designed around your daily routine. Illustrative previews of the app experience."
        />
        <div className="reveal mt-14 grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          <PhoneMockup screen="dashboard" className="w-full max-w-56" />
          <PhoneMockup screen="metrics" className="w-full max-w-56" />
          <PhoneMockup screen="symptoms" className="w-full max-w-56" />
          <PhoneMockup screen="reminders" className="w-full max-w-56" />
          <PhoneMockup screen="nearby" className="w-full max-w-56" />
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Illustrative designs representing app features — not actual screenshots.
        </p>
      </div>
    </section>
  );
}

/* ---------- F. How it works ---------- */
export function HowItWorksSection() {
  const steps = [
    {
      icon: Download,
      title: "Download Healthgen",
      text: "Download the Android APK from the official website.",
    },
    {
      icon: UserRound,
      title: "Set Up Your Profile",
      text: "Enter the relevant information requested by the application.",
    },
    {
      icon: Activity,
      title: "Track Your Health",
      text: "Record health measurements and symptoms when needed.",
    },
    {
      icon: CheckCircle2,
      title: "Stay Organized",
      text: "Review your records, use available wellness guidance, and manage reminders.",
    },
  ];
  return (
    <section id="how-it-works" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title="Getting Started Is Simple" />
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="reveal relative rounded-3xl border border-border/80 bg-card p-7 shadow-[0_10px_35px_-28px_rgba(20,80,50,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <span className="font-display text-4xl font-extrabold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-4 flex size-10 items-center justify-center rounded-xl bg-secondary text-primary-deep">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- G. Benefits ---------- */
export function BenefitsSection() {
  const benefits = [
    "Keep health records organized.",
    "Monitor manually entered measurements.",
    "Maintain a history of symptoms.",
    "Build more consistent health routines.",
    "Remember scheduled medication.",
    "Find nearby healthcare facilities where supported.",
  ];
  return (
    <section id="benefits" className="bg-surface py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div className="reveal">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Small Daily Actions. Better Health Awareness.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Healthgen turns everyday tracking into a simple habit that keeps you informed about your
            own health.
          </p>
          <ul className="mt-8 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <span className="text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal relative flex justify-center">
          <div className="blob size-72 bg-accent" aria-hidden />
          <PhoneMockup screen="metrics" className="float-slow relative w-64" />
        </div>
      </div>
    </section>
  );
}

/* ---------- H. Privacy & safety ---------- */
export function PrivacySection() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Responsible data handling",
      text: "Your health information is collected, used, and stored only to provide the app's features. We request permissions only when necessary.",
    },
    {
      icon: BookOpenText,
      title: "Transparent policies",
      text: "Review our privacy policy to understand how your information is handled, including any third-party services that process data.",
    },
    {
      icon: BrainCircuit,
      title: "Honest AI guidance",
      text: "AI-generated information is general and educational. It must never delay emergency treatment or professional care.",
    },
  ];
  return (
    <section id="privacy" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title="Your Health Information Deserves Care"
          description="Our approach to responsible health technology."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="reveal rounded-3xl border border-border/80 bg-card p-7 shadow-[0_10px_35px_-28px_rgba(20,80,50,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary-deep">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
        <div className="reveal mt-10 rounded-3xl border border-primary/20 bg-linear-to-br from-secondary to-card p-7 shadow-sm sm:p-9">
          <h3 className="flex items-center gap-2 font-bold text-primary-deep">
            <ShieldCheck className="size-5" aria-hidden />
            Medical Safety Notice
          </h3>
          <p className="mt-3 leading-relaxed text-foreground">
            Healthgen provides general health information for educational and informational
            purposes. It does not provide a medical diagnosis and is not a substitute for
            professional medical advice, diagnosis, or treatment. For urgent or concerning symptoms,
            seek appropriate medical care.
          </p>
        </div>
      </div>
    </section>
  );
}
