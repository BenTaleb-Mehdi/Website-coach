// app/about/page.tsx
"use client";

import AboutSection from "../components/sections/AboutSection";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  const philosophy = [
    {
      title: "Scientific Programming",
      desc: "Every rep, set, and Rest Time is computed. No guesswork, just pure anatomical adaptation and progressive overload metrics built for your frame.",
    },
    {
      title: "Biofeedback Synchronization",
      desc: "We analyze sleep quality, HRV, stress levels, and digestive biomarkers. When variables stall, we pivot to ensure your endocrine system thrives.",
    },
    {
      title: "Sustainable Fuel Layouts",
      desc: "Rigid diets fail. We design flexible macronutrient protocols that integrate seamlessly with business lunches, client dinners, and travel schedules.",
    },
  ];

  const certifications = [
    "NASM Certified Personal Trainer",
    "ISS Nutrition Specialist",
    "Precision Nutrition Level 1 Coach",
    "FMS Level 2 Movement Analyst",
  ];

  return (
    <div className="bg-background text-zinc-900 dark:text-white min-h-screen pt-20 flex flex-col justify-between">
      <div>
        <AboutSection />

        {/* Philosophy Section */}
        <section className="px-5 md:px-8 max-w-7xl mx-auto py-16 border-t border-zinc-200 dark:border-zinc-900/60">
          <div className="max-w-3xl mb-12">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#82FF00] mb-2">My Principles</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">THE COACHING DOGMA</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {philosophy.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="p-6 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-zinc-200 dark:border-zinc-800/80 shadow-sm dark:shadow-md hover:border-[#82FF00]/40 dark:hover:border-[#82FF00]/40 transition-colors"
              >
                <div className="text-[#82FF00] font-black text-sm mb-3">0{index + 1}.</div>
                <h3 className="text-lg font-black uppercase tracking-tight mb-2">{item.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Credentials & Certifications */}
        <section className="px-5 md:px-8 max-w-7xl mx-auto py-16 border-t border-zinc-200 dark:border-zinc-900/60 bg-zinc-50/50 dark:bg-zinc-950/20 rounded-3xl mb-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-[10px] font-black uppercase tracking-widest text-[#82FF00]">Verified Credentials</div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">EDUCATED TO DEVELOP</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-relaxed">
                Elite results demand elite knowledge. I continue to study under top biomechanics experts globally to ensure my clients receive bleeding-edge programming.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="p-5 rounded-xl bg-white dark:bg-[#0D0D0D] border border-zinc-200 dark:border-zinc-800/80 flex items-center gap-3.5 shadow-sm"
                >
                  <span className="w-8 h-8 rounded-lg bg-[#82FF00]/10 flex items-center justify-center text-[#82FF00] font-black text-sm">
                    ★
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide text-zinc-700 dark:text-zinc-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}