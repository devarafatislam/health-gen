
import { site } from "@/lib/site";
import { DownloadButton } from "./DownloadButton";
import { Logo } from "./Logo";

export function DownloadSection() {
  return (
    <section id="download" className="relative overflow-hidden bg-primary py-20 lg:py-24">
      <div className="blob -left-20 top-0 size-80 bg-primary-foreground/10" aria-hidden />
      <div className="blob -right-16 bottom-0 size-72 bg-primary-deep/40" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <img
          src="/favicon.png"
          alt="Healthgen app icon"
          className="mx-auto size-20 rounded-full bg-card object-contain p-1 shadow-lg"
          width={80}
          height={80}
        />
        <h2 className="mt-6 text-3xl font-extrabold text-primary-foreground sm:text-4xl">
          Your Health Journey Starts Here
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/85">
          Download {site.name} and bring your everyday health tracking tools
          into one convenient place.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <DownloadButton label="Download Android APK" variant="large" />
          <p className="text-sm text-primary-foreground/75">
            Android app · Direct APK download
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-lg rounded-2xl bg-primary-foreground/10 p-6 text-left">
          <h3 className="text-sm font-bold text-primary-foreground">
            Installing an APK outside the Play Store
          </h3>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-primary-foreground/85">
            <li>Download the APK file to your Android device.</li>
            <li>When prompted, allow installation from your browser or file manager.</li>
            <li>Open the downloaded file and tap Install.</li>
            <li>Open {site.name} and set up your profile.</li>
          </ol>
        </div>
        <a
          href="#features"
          className="mt-8 inline-block text-sm font-semibold text-primary-foreground underline underline-offset-4 hover:text-primary-foreground/80"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

export function FinalCTASection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="reveal flex justify-center">
          <Logo compact />
        </div>
        <h2 className="reveal mt-6 text-3xl font-extrabold text-foreground sm:text-4xl">
          Make Health Tracking Part of Your Everyday Routine
        </h2>
        <p className="reveal mt-4 text-lg text-muted-foreground">
          Start organizing your health information with {site.name}.
        </p>
        <div className="reveal mt-8">
          <DownloadButton label="Download Healthgen" className="px-8 py-3.5 text-base" />
        </div>
      </div>
    </section>
  );
}
