/** APK stored in the frontend's public directory. */
export const APK_URL = "/download/healthgen.apk";

export const site = {
  name: "Healthgen",
  tagline: "Your Smart Health Companion",
  description:
    "Healthgen helps you track daily health information, keep a symptom diary, manage medicine reminders, and discover nearby healthcare facilities — all in one simple Android app.",
  // Replace with real contact details before launch.
  contactEmail: import.meta.env["VITE_CONTACT_EMAIL"] as string | undefined,
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Benefits", href: "#benefits" },
    { label: "FAQ", href: "#faq" },
  ],
};
