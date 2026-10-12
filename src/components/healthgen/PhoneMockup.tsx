import {
  Activity,
  Bell,
  CalendarCheck,
  HeartPulse,
  MapPin,
  Pill,
  Thermometer,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type MockScreen =
  | "dashboard"
  | "metrics"
  | "symptoms"
  | "reminders"
  | "nearby"
  | "profile";

/**
 * Illustrative in-app screen mockup (not an actual app screenshot).
 * Renders a stylized phone frame with a mini UI representing a feature.
 */
export function PhoneMockup({
  screen,
  className,
}: {
  screen: MockScreen;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-56 shrink-0 rounded-[2.2rem] border border-border bg-foreground p-2 shadow-2xl shadow-primary/20",
        className,
      )}
      role="img"
      aria-label={`Illustrative mockup of the Healthgen ${screen} screen`}
    >
      <div className="overflow-hidden rounded-[1.7rem] bg-surface">
        {/* notch */}
        <div className="flex justify-center bg-card pt-2">
          <div className="h-4 w-20 rounded-full bg-foreground/90" />
        </div>
        <div className="space-y-2.5 p-3 pb-5">
          <ScreenBody screen={screen} />
        </div>
      </div>
    </div>
  );
}

function Row({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-card p-2 shadow-sm">
      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary-deep">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="truncate text-[10px] font-semibold text-foreground">{title}</p>
        <p className="truncate text-[9px] text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}

function Bar({ w, tone = "bg-primary" }: { w: string; tone?: string }) {
  return (
    <div className="h-1.5 rounded-full bg-secondary">
      <div className={cn("h-full rounded-full", tone)} style={{ width: w }} />
    </div>
  );
}

function Header({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between px-0.5">
      <p className="text-[11px] font-bold text-foreground">{title}</p>
      <HeartPulse className="size-3.5 text-primary" aria-hidden />
    </div>
  );
}

function ScreenBody({ screen }: { screen: MockScreen }) {
  switch (screen) {
    case "dashboard":
      return (
        <>
          <Header title="Good morning" />
          <div className="rounded-xl bg-primary p-2.5 text-primary-foreground">
            <p className="text-[9px] opacity-80">Today's wellness score</p>
            <p className="text-lg font-extrabold">82</p>
            <Bar w="82%" tone="bg-primary-foreground/80" />
          </div>
          <Row icon={<Activity className="size-3.5" />} title="Blood pressure" sub="120/80 mmHg · 8:00 AM" />
          <Row icon={<Pill className="size-3.5" />} title="Next reminder" sub="Vitamin D · 1:00 PM" />
        </>
      );
    case "metrics":
      return (
        <>
          <Header title="Health Metrics" />
          <div className="rounded-xl bg-card p-2.5 shadow-sm">
            <p className="text-[9px] text-muted-foreground">Blood sugar (mg/dL)</p>
            <div className="mt-1.5 flex items-end gap-1">
              {[40, 65, 50, 80, 60, 72, 55].map((h, i) => (
                <div key={i} className="w-full rounded-sm bg-primary/80" style={{ height: 8 + h / 3 }} />
              ))}
            </div>
          </div>
          <Row icon={<Thermometer className="size-3.5" />} title="Temperature" sub="98.4°F · yesterday" />
          <Row icon={<TrendingUp className="size-3.5" />} title="7-day trend" sub="Stable" />
        </>
      );
    case "symptoms":
      return (
        <>
          <Header title="Symptom Diary" />
          <Row icon={<CalendarCheck className="size-3.5" />} title="Mild headache" sub="Today · note added" />
          <Row icon={<CalendarCheck className="size-3.5" />} title="Cough" sub="Mon · improving" />
          <Row icon={<CalendarCheck className="size-3.5" />} title="Fever" sub="Last week · resolved" />
          <div className="rounded-xl bg-accent p-2 text-center text-[9px] font-medium text-accent-foreground">
            + Log a symptom
          </div>
        </>
      );
    case "reminders":
      return (
        <>
          <Header title="Medicine Reminders" />
          <Row icon={<Pill className="size-3.5" />} title="Vitamin D" sub="Daily · 1:00 PM" />
          <Row icon={<Pill className="size-3.5" />} title="Omega 3" sub="Daily · 9:00 PM" />
          <Row icon={<Bell className="size-3.5" />} title="Next dose in" sub="2h 15m" />
        </>
      );
    case "nearby":
      return (
        <>
          <Header title="Care Nearby" />
          <div className="flex h-16 items-center justify-center rounded-xl bg-secondary">
            <MapPin className="size-6 text-primary" aria-hidden />
          </div>
          <Row icon={<MapPin className="size-3.5" />} title="City Clinic" sub="0.8 km · Open now" />
          <Row icon={<MapPin className="size-3.5" />} title="Care Pharmacy" sub="1.2 km" />
        </>
      );
    case "profile":
      return (
        <>
          <Header title="Health Profile" />
          <div className="flex items-center gap-2 rounded-xl bg-card p-2.5 shadow-sm">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              HG
            </span>
            <div>
              <p className="text-[10px] font-semibold text-foreground">My Profile</p>
              <p className="text-[9px] text-muted-foreground">Age 32 · 70 kg</p>
            </div>
          </div>
          <div className="space-y-1.5 rounded-xl bg-card p-2.5 shadow-sm">
            <Bar w="70%" />
            <Bar w="45%" />
            <Bar w="85%" />
          </div>
        </>
      );
  }
}
