// app/contact/page.tsx
import type { Metadata } from "next";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Apply for Elite Coaching",
  description: "Ready to transform? Submit your application for premium 1-on-1 coaching. Coach Saad Bouharrat reviews every submission within 24 hours.",
  openGraph: {
    title: "Apply for Elite Coaching | COACH SAAD BOUHARRAT.",
    description: "Ready to transform? Submit your application for premium 1-on-1 coaching. Coach Saad Bouharrat reviews every submission within 24 hours.",
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