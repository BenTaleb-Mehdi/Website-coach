// app/services/page.tsx
"use client";

import ServicesSection from "../components/sections/ServicesSection";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ServicesPage() {
  const steps = [
    {
      step: "01",
      title: "Comprehensive Audit",
      desc: "Complete an in-depth biomarker, lifestyle, injury history, and dietary assessment questionnaire.",
    },
    {
      step: "02",
      title: "Custom Construction",
      desc: "Receive your tailored mechanical workout splits and biofeedback tracking metrics directly in our app.",
    },
    {
      step: "03",
      title: "Weekly Optimization",
      desc: "Upload bi-weekly check-in videos. We analyze variables (digestion, sleep, load) and adjust variables instantly.",
    },
  ];

  const faqs = [
    {
      q: "Who is this coaching program for?",
      a: "This is designed for busy professionals, entrepreneurs, and athletes who want custom, science-backed programming to optimize body composition and energy without wasting hours in the gym.",
    },
    {
      q: "Do I need a fully equipped commercial gym?",
      a: "No. I program according to your environment. Whether you train in a commercial gym, a minimalist home gym, or hotel gyms while traveling, your plan will be optimized for your gear.",
    },
    {
      q: "How do weekly video check-ins work?",
      a: "Every weekend, you submit your performance logs, biofeedback data, and brief movement videos. I record a personalized video response reviewing form, auditing metrics, and defining target updates.",
    },
    {
      q: "Is there a minimum commitment period?",
      a: "I recommend at least 12 weeks to see true physiological adaptation. However, coaching is billed monthly and you can pause or cancel at any time with a 7-day notice.",
    },
  ];

  // Keep track of active FAQ index
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="bg-background text-zinc-900 dark:text-white min-h-screen pt-20 flex flex-col justify-between">
      <div>
        <ServicesSection />

        {/* Onboarding Timeline Section */}
        <section className="px-5 md:px-8 max-w-7xl mx-auto py-16 border-t border-zinc-200 dark:border-zinc-900/60">
          <div className="max-w-3xl mb-12">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#82FF00] mb-2">The Blueprint</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">CLIENT ONBOARDING PATHWAY</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
            <div className="text-[10px] font-black uppercase tracking-widest text-[#82FF00]">Answers</div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">FREQUENTLY ASKED</h2>
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
                    <span className="text-[#82FF00] font-black text-sm ml-4 transition-transform duration-300">
                      {isOpen ? "−" : "+"}
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

      <Footer />
    </div>
  );
}