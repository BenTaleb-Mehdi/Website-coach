"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { aboutData } from "../data/portfolioData";

export default function AboutPage() {
  // Your original philosophy content - 100% untouched
  const philosophy = [
    {
      title: "Programmation Scientifique",
      desc: "Chaque répétition, série et temps de repos est calculé. Aucune conjecture, juste une adaptation anatomique pure et des metrics de surcharge progressive conçues pour votre morphologie.",
    },
    {
      title: "Synchronisation du Biofeedback",
      desc: "Nous analysons la qualité du sommeil, la VFC, les niveaux de stress et les biomarqueurs digestifs. Quand les variables stagnent, nous pivotons pour que votre système endocrinien prospère.",
    },
    {
      title: "Plans Alimentaires Durables",
      desc: "Les régimes rigides échouent. Nous concevons des protocoles macro-nutritionnels flexibles qui s'intègrent parfaitement aux déjeuners d'affaires, dîners clients et horaires de voyage.",
    },
  ];

  const certifications = [
    "Coach Personnel Certifié NASM",
    "Spécialiste en Nutrition ISS",
    "Coach Precision Nutrition Niveau 1",
    "Analyste de Mouvement FMS Niveau 2",
  ];

  const features = [
    "Fractionnements Dynamiques Premium",
    "Plans Nutritionnels Haute Performance",
    "Suivi Hebdomadaire des Biomarqueurs",
    "Accès Direct Hotline Telegram Privée",
  ];

  useEffect(() => {
    document.title = "Qui Est Coach Saad Bouharrat ? | 8+ Ans | 500+ Transformations";
  }, []);

  return (
    <div className="bg-background text-zinc-900 dark:text-white min-h-screen flex flex-col justify-between pt-15">
      <main className="flex-grow">
        
        {/* Coach Hero Section */}
        <section className="px-5 md:px-8 max-w-7xl mx-auto pt-12 lg:pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Text Mindset Content */}
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#82FF00]">
                  La Mentalité
                </span>
                {/* FIXED: Changed text-white to text-zinc-900 dark:text-white */}
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white leading-none">
                  Ton Coach, <span className="text-[#82FF00]">Ton Allié</span>
                </h1>
              </div>

              {/* FIXED: Changed text-zinc-300 to text-zinc-600 dark:text-zinc-300 */}
              <p className="text-zinc-600 dark:text-zinc-300 text-sm md:text-base font-medium leading-relaxed max-w-xl">
                Pas de routines d'entraînement généralisées ni de plans alimentaires standardisés. Nous
                programmons des stratégies anatomiques et métaboliques spécifiques, conçues sur mesure pour
                votre profil physiologique.
              </p>

              <ul className="space-y-3.5 pt-2">
                {features.map((feature, idx) => (
                  /* FIXED: Changed text-white to text-zinc-900 dark:text-white */
                  <li key={idx} className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-wide text-zinc-900 dark:text-white">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#82FF00]/40 bg-[#82FF00]/10 text-[#82FF00]">
                      <Check className="w-3 h-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Coach Image & KPIs */}
            <div className="space-y-5">
              <div className="relative rounded-3xl overflow-hidden border-t-2 border-l-2 border-[#82FF00] bg-zinc-900 h-[300px] sm:h-[400px] lg:h-[450px]">
                <Image
                  src="/images/profile/about-profile.jpg"
                  alt="Coach Saad Bouharrat — coach fitness premium en ligne — Larache Maroc"
                  fill
                  priority
                  className="object-cover "
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-zinc-800/50 flex flex-col">
                  <span className="text-[9px] font-black tracking-widest text-[#82FF00] uppercase">
                    Coach Principal
                  </span>
                  <span className="text-base font-black uppercase tracking-tight text-white">
                    Assaad
                  </span>
                </div>
              </div>

              {/* KPI Performance Metrics Grid */}
              <div className="grid grid-cols-2 gap-5">
                {aboutData.stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-2xl flex flex-col justify-between aspect-square lg:aspect-video ${
                      i === 0
                        ? "bg-[#82FF00] text-black"
                        : "bg-[#0D0D0D] border border-zinc-800/80 text-white"
                    }`}
                  >
                    <span className="text-3xl md:text-4xl font-black tracking-tighter uppercase">{stat.value}</span>
                    <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest leading-tight ${i === 0 ? "text-black/80" : "text-zinc-400"}`}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Philosophy Section */}
        <section className="px-5 md:px-8 max-w-7xl mx-auto py-16 border-t border-zinc-200 dark:border-zinc-900/60">
          <div className="max-w-3xl mb-12">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#82FF00] mb-2">Mes Principes</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white">THE COACHING DOGMA</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                <h3 className="text-lg font-black uppercase tracking-tight mb-2 text-zinc-900 dark:text-white">{item.title}</h3>
                {/* FIXED: Changed text-zinc-500 to text-zinc-600 dark:text-zinc-400 for better light mode contrast */}
                <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Credentials & Certifications */}
        <section className="px-5 md:px-8 max-w-7xl mx-auto py-16 border-t border-zinc-200 dark:border-zinc-900/60 bg-zinc-50/50 dark:bg-zinc-950/20 rounded-3xl mb-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-[10px] font-black uppercase tracking-widest text-[#82FF00]">Diplômes</div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white">FORMÉ POUR DÉVELOPPER</h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm font-medium leading-relaxed">
                Des résultats élite exigent des connaissances élite. Je continue d'étudier auprès des meilleurs experts en biomécanique dans le monde pour garantir à mes clients une programmation de pointe.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="p-5 rounded-xl bg-white dark:bg-[#0D0D0D] border border-zinc-200 dark:border-zinc-800/80 flex items-center gap-3.5 shadow-sm"
                >
                  <span className="w-8 h-8 rounded-lg bg-[#82FF00]/10 flex items-center justify-center text-[#82FF00]">
                    <Star className="w-4 h-4 fill-current" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide text-zinc-700 dark:text-zinc-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

  
    </div>
  );
}