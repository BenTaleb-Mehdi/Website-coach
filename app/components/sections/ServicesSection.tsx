// components/sections/ServicesSection.tsx
"use client";
import { motion } from "framer-motion";
import { servicesData, contactData, siteConfig } from "../../data/portfolioData";
import { Check } from "lucide-react";
import WhatsAppIcon from "../WhatsAppIcon";

export default function ServicesSection() {
  const cleanPhone = contactData.phone.replace(/[^0-9]/g, "");

  const handleWhatsAppRedirect = (programTitle: string) => {
    const message = `Bonjour ${siteConfig.coachName}, je suis intéressé par le programme "${programTitle}". Pouvons-nous discuter pour commencer ?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-transparent text-zinc-900 dark:text-white px-5 md:px-8 max-w-7xl mx-auto py-16 md:py-20 border-t border-zinc-200 dark:border-zinc-900/60">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-12">
        <div className="text-[10px] font-black uppercase tracking-widest text-[#82FF00]">
          Programmes Élite
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
          CHOISISSEZ VOTRE PARCOURS
        </h2>
        <div className="w-10 h-[2px] bg-[#82FF00] mx-auto mt-3 rounded-full shadow-[0_0_8px_#82FF00]" />
      </div>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.5, ease: "easeOut" }}
            className="relative p-7 rounded-3xl bg-white dark:bg-[#0D0D0D] border border-zinc-200 dark:border-zinc-800/80 flex flex-col justify-between hover:border-[#82FF00]/30 transition-all duration-300 group shadow-lg dark:shadow-xl hover:shadow-[#82FF00]/5 overflow-hidden"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#82FF00]/0 to-[#82FF00]/0 group-hover:from-[#82FF00]/4 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-3xl" />

            <div className="relative">
              <div className="flex justify-between items-start gap-2 mb-3">
                <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white group-hover:text-[#82FF00] transition-colors duration-200">
                  {service.title}
                </h3>
                {index === 1 && (
                  <span className="flex-shrink-0 text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-[#82FF00] text-black rounded-full">
                    Populaire
                  </span>
                )}
              </div>
              <p className="text-zinc-500 text-xs leading-relaxed font-medium mb-6">
                {service.description}
              </p>

              <ul className="space-y-2.5 border-t border-zinc-100 dark:border-zinc-800/80 pt-5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs font-semibold text-zinc-600 dark:text-zinc-400 gap-2.5">
                    <span className="text-[#82FF00] flex-shrink-0"><Check className="w-3 h-3" /></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => handleWhatsAppRedirect(service.title)}
              className="relative mt-7 w-full py-3.5 flex items-center justify-center gap-2 rounded-xl font-black uppercase tracking-widest bg-zinc-900 text-white dark:bg-zinc-800/85 hover:bg-[#82FF00] hover:text-black dark:hover:bg-[#82FF00] dark:hover:text-black transition-all duration-300 text-[11px] border border-zinc-800 hover:border-transparent hover:shadow-lg hover:shadow-[#82FF00]/20 cursor-pointer"
            >
              <WhatsAppIcon />
              Discuter sur WhatsApp
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}