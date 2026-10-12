import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Healthgen?",
    a: "Healthgen is a smart health diary and AI-powered primary health advisor for Android. It helps you track daily health information, keep a symptom diary, manage medicine reminders, explore wellness tips, and discover nearby healthcare facilities.",
  },
  {
    q: "Is Healthgen a medical diagnosis app?",
    a: "No. Healthgen provides general health information for educational purposes only. It does not provide a medical diagnosis and is not a substitute for professional medical advice, diagnosis, or treatment. For urgent or concerning symptoms, seek appropriate medical care.",
  },
  {
    q: "Can I track my daily health measurements?",
    a: "Yes. You can record blood pressure, blood sugar, temperature, and other supported metrics, then review your previously recorded measurements and trends over time.",
  },
  {
    q: "Does Healthgen support medicine reminders?",
    a: "Yes. You can configure medication names, schedules, and reminder times to help you remember your prescribed routines. Healthgen never recommends changing your medication or dosage.",
  },
  {
    q: "Can I find nearby hospitals and clinics?",
    a: "Yes, where supported. Healthgen can help you discover nearby hospitals, clinics, and pharmacies using map functionality, with available contact information. Location permission is requested only when needed.",
  },
  {
    q: "How do I download and install the Android APK?",
    a: "Tap any Download button on this page to get the APK file. When prompted, allow installation from your browser or file manager, open the downloaded file, and tap Install.",
  },
  {
    q: "How does Healthgen handle my health information?",
    a: "The app requests permissions only when needed for a feature. Review the privacy information provided with the app before entering personal health details, and share only information you are comfortable providing.",
  },
  {
    q: "Is Healthgen available for iOS?",
    a: "Healthgen is currently available for Android only. An iOS version has not been released at this time.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="reveal text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</p>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="reveal mt-10 space-y-3">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem
              key={q}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-5 shadow-sm"
            >
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline sm:text-base">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
