// app/contact/page.tsx
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-background text-zinc-900 dark:text-white min-h-screen pt-20 flex flex-col justify-between">
      <div className="w-full flex-grow flex items-center justify-center">
        <ContactSection />
      </div>
   
    </div>
  );
}