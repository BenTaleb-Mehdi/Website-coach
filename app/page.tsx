// app/page.tsx
import Hero from "./components/sections/Hero";
import AboutSection from "./components/sections/AboutSection";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import { transformations } from "./data/portfolioData";
import ContactSection from "./components/sections/ContactSection";
import ServicesSection from "./components/sections/ServicesSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="bg-background text-zinc-900 dark:text-white min-h-screen selection:bg-[#82FF00] selection:text-black">
      <Hero />
  <AboutSection />
      {/* Transformations Section */}
      <section className="px-5 md:px-8 max-w-7xl mx-auto py-16 md:py-20 border-t border-zinc-200 dark:border-zinc-900/60">
        <div className="text-center space-y-2 mb-10">
          <div className="text-[10px] font-black uppercase tracking-widest text-[#82FF00]">Gallery</div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
            Client Transformations
          </h2>
          <div className="w-10 h-[2px] bg-[#82FF00] mx-auto mt-3 rounded-full shadow-[0_0_8px_#82FF00]" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {transformations.slice(0, 3).map((client) => (
            <BeforeAfterSlider
              key={client.id}
              beforeImg={client.beforeImg}
              afterImg={client.afterImg}
              clientName={client.clientName}
              achievement={client.achievement}
              duration={client.duration}
            />
          ))}
        </div>
      </section>

    
      <ServicesSection />
      <ContactSection />
   
    </div>
  );
}