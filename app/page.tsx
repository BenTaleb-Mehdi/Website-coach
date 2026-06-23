// app/page.tsx
import type { Metadata } from "next";
import Hero from "./components/sections/Hero";
import AboutSection from "./components/sections/AboutSection";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import ComingSoonCard from "./components/ComingSoonCard";
import { transformations } from "./data/portfolioData";
import ContactSection from "./components/sections/ContactSection";
import ServicesSection from "./components/sections/ServicesSection";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "COACH SAAD BOUHARRAT. | Coach Fitness Élite en Ligne",
  description: "Coaching 1-on-1 basé sur les données pour les professionnels occupés. Programmes d'entraînement personnalisés, frameworks macro de précision & check-ins hebdomadaires. Transformez votre corps sans conjectures.",
  openGraph: {
    title: "COACH SAAD BOUHARRAT. | Coach Fitness Élite en Ligne",
    description: "Coaching 1-on-1 basé sur les données pour les professionnels occupés. Programmes d'entraînement personnalisés, frameworks macro de précision & check-ins hebdomadaires.",
  },
};

export default function HomePage() {
  return (
    <div className="bg-background text-zinc-900 dark:text-white min-h-screen selection:bg-[#82FF00] selection:text-black">
      <Hero />
  <AboutSection />
      {/* Transformations Section */}
      <section className="px-5 md:px-8 max-w-7xl mx-auto py-16 md:py-20 border-t border-zinc-200 dark:border-zinc-900/60">
        <div className="text-center space-y-2 mb-10">
          <div className="text-[10px] font-black uppercase tracking-widest text-[#82FF00]">Galerie</div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
            Transformations Clients
          </h2>
          <div className="w-10 h-[2px] bg-[#82FF00] mx-auto mt-3 rounded-full shadow-[0_0_8px_#82FF00]" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {transformations.slice(0, 3).map((client) =>
            client.status === "comingSoon" ? (
              <ComingSoonCard
                key={client.id}
                clientName={client.clientName}
                achievement={client.achievement}
              />
            ) : (
              <BeforeAfterSlider
                key={client.id}
                beforeImg={client.beforeImg!}
                afterImg={client.afterImg!}
                clientName={client.clientName}
                achievement={client.achievement}
                duration={client.duration}
              />
            )
          )}
        </div>
      </section>

    
      <ServicesSection />
      <ContactSection />
   
    </div>
  );
}