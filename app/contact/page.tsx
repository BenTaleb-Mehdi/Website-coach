// app/contact/page.tsx
import type { Metadata } from "next";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Postuler au Coaching Élite",
  description: "Prêt à vous transformer ? Soumettez votre candidature pour un coaching premium 1-on-1. Coach Saad Bouharrat examine chaque soumission sous 24 heures.",
  openGraph: {
    title: "Postuler au Coaching Élite | COACH SAAD BOUHARRAT.",
    description: "Prêt à vous transformer ? Soumettez votre candidature pour un coaching premium 1-on-1. Coach Saad Bouharrat examine chaque soumission sous 24 heures.",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-background text-zinc-900 dark:text-white min-h-screen pt-20 flex flex-col justify-between">
      <div className="w-full flex-grow flex items-center justify-center">
        <ContactSection />
      </div>
   
    </div>
  );
}