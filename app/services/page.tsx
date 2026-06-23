// app/services/page.tsx
"use client";

import { useEffect } from "react";
import ServicesSection from "../components/sections/ServicesSection";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ServicesPage() {
  const steps = [
    {
      step: "01",
      title: "Audit Complet",
      desc: "Remplissez un questionnaire approfondi sur vos biomarqueurs, votre mode de vie, vos antécédents de blessures et votre alimentation.",
    },
    {
      step: "02",
      title: "Construction Sur Mesure",
      desc: "Recevez vos programmes d'entraînement mécaniques personnalisés et vos metrics de suivi biofeedback directement dans notre application.",
    },
    {
      step: "03",
      title: "Optimisation Hebdomadaire",
      desc: "Téléchargez des vidéos de check-in bimensuelles. Nous analysons les variables (digestion, sommeil, charge) et ajustons instantanément.",
    },
  ];

  const faqs = [
    {
      q: "À qui s'adresse ce programme de coaching ?",
      a: "Il est conçu pour les professionnels occupés, les entrepreneurs et les athlètes qui souhaitent une programmation personnalisée et basée sur la science pour optimiser leur composition corporelle et leur énergie sans perdre des heures à la salle.",
    },
    {
      q: "Ai-je besoin d'une salle de sport équipée ?",
      a: "Non. Je programme selon votre environnement. Que vous vous entraîniez dans une salle commerciale, une salle à domicile minimaliste ou une salle d'hôtel en voyage, votre plan sera optimisé pour votre équipement.",
    },
    {
      q: "Comment fonctionnent les check-ins vidéo hebdomadaires ?",
      a: "Chaque week-end, vous soumettez vos logs de performance, données de biofeedback et courtes vidéos de mouvement. J'enregistre une réponse vidéo personnalisée pour analyser la forme, auditer les metrics et définir les ajustements.",
    },
    {
      q: "Y a-t-il une période d'engagement minimum ?",
      a: "Je recommande au moins 12 semaines pour une véritable adaptation physiologique. Cependant, le coaching est facturé mensuellement et vous pouvez suspendre ou annuler à tout moment avec un préavis de 7 jours.",
    },
  ];

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Coaching Élite en Ligne & Programme Hybride | Coach Saad Bouharrat";
  }, []);

  return (
    <div className="bg-background text-zinc-900 dark:text-white min-h-screen pt-20 flex flex-col justify-between">
      <div>
        <ServicesSection />

        {/* Onboarding Timeline Section */}
        <section className="px-5 md:px-8 max-w-7xl mx-auto py-16 border-t border-zinc-200 dark:border-zinc-900/60">
          <div className="max-w-3xl mb-12">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#82FF00] mb-2">Le Plan</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">PARCOURS D'INTÉGRATION</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {steps.map((item, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900/40 relative shadow-xs"
              >
                <span className="text-[#82FF00] font-black text-2xl absolute top-6 right-6 opacity-30">{item.step}</span>
                <h3 className="text-base font-black uppercase tracking-tight mb-2.5">{item.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="px-5 md:px-8 max-w-4xl mx-auto py-16 border-t border-zinc-200 dark:border-zinc-900/60 mb-16">
          <div className="text-center space-y-2 mb-10">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#82FF00]">Réponses</div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">FOIRE AUX QUESTIONS</h2>
            <div className="w-10 h-[2px] bg-[#82FF00] mx-auto mt-3 rounded-full shadow-[0_0_8px_#82FF00]" />
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#0D0D0D] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-sm font-bold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">{faq.q}</span>
                    <span className="text-[#82FF00] ml-4 transition-transform duration-300 flex-shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 border-t border-zinc-100 dark:border-zinc-900/60 pt-4">
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed font-medium">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>

 
    </div>
  );
}