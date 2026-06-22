"use client";

import Image from "next/image";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  // Your original philosophy content - 100% untouched
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

  // Your original certifications content - 100% untouched
  const certifications = [
    "NASM Certified Personal Trainer",
    "ISS Nutrition Specialist",
    "Precision Nutrition Level 1 Coach",
    "FMS Level 2 Movement Analyst",
  ];

  // Original features checklist
  const features = [
    "Premium Dynamic Custom Splits",
    "Tailored High-Performance Fuel Layouts",
    "Weekly Biomarker Monitoring Metrics",
    "Direct Private Telegram Hotline Access",
  ];

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
                  The Mindset
                </span>
                {/* FIXED: Changed text-white to text-zinc-900 dark:text-white */}
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white leading-none">
                  Your Coach, <span className="text-[#82FF00]">Your Ally</span>
                </h1>
              </div>

              {/* FIXED: Changed text-zinc-300 to text-zinc-600 dark:text-zinc-300 */}
              <p className="text-zinc-600 dark:text-zinc-300 text-sm md:text-base font-medium leading-relaxed max-w-xl">
                No generalized workout routines or standard generic meal printouts. We
                program specific anatomical and metabolic strategies custom designed for
                your physiological breakdown.
              </p>

              <ul className="space-y-3.5 pt-2">
                {features.map((feature, idx) => (
                  /* FIXED: Changed text-white to text-zinc-900 dark:text-white */
                  <li key={idx} className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-wide text-zinc-900 dark:text-white">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#82FF00]/40 bg-[#82FF00]/10 text-[10px] text-[#82FF00]">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Coach Image & KPIs */}
            <div className="space-y-5">
              <div className="relative rounded-3xl overflow-hidden border-t-2 border-l-2 border-[#82FF00] bg-zinc-900 h-[450px]">
                <Image
                  src="/images/profile/about-profile.jpg"
                  alt="Coach Assaad"
                  fill
                  priority
                  className="object-cover "
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-zinc-800/50 flex flex-col">
                  <span className="text-[9px] font-black tracking-widest text-[#82FF00] uppercase">
                    Head Coach
                  </span>
                  <span className="text-base font-black uppercase tracking-tight text-white">
                    Assaad
                  </span>
                </div>
              </div>

              {/* KPI Performance Metrics Grid (Stays dark/high-contrast in both modes) */}
              <div className="grid grid-cols-2 gap-5">
                <div className="p-6 rounded-2xl bg-[#82FF00] text-black flex flex-col justify-between aspect-square lg:aspect-video">
                  <span className="text-3xl md:text-4xl font-black tracking-tighter uppercase">1500+</span>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest leading-tight text-black/80">Hours Training Sessions</span>
                </div>
                <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-zinc-800/80 text-white flex flex-col justify-between aspect-square lg:aspect-video">
                  <span className="text-3xl md:text-4xl font-black tracking-tighter uppercase">8+</span>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest leading-tight text-zinc-400">Years Active Experience</span>
                </div>
                <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-zinc-800/80 text-white flex flex-col justify-between aspect-square lg:aspect-video">
                  <span className="text-3xl md:text-4xl font-black tracking-tighter uppercase">97%</span>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest leading-tight text-zinc-400">Client Retention Rates</span>
                </div>
                <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-zinc-800/80 text-white flex flex-col justify-between aspect-square lg:aspect-video">
                  <span className="text-3xl md:text-4xl font-black tracking-tighter uppercase">3x</span>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest leading-tight text-zinc-400">Certified Elite Frameworks</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Philosophy Section */}
        <section className="px-5 md:px-8 max-w-7xl mx-auto py-16 border-t border-zinc-200 dark:border-zinc-900/60">
          <div className="max-w-3xl mb-12">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#82FF00] mb-2">My Principles</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white">THE COACHING DOGMA</h2>
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
              <div className="text-[10px] font-black uppercase tracking-widest text-[#82FF00]">Verified Credentials</div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white">EDUCATED TO DEVELOP</h2>
              {/* FIXED: Changed text-zinc-500 to text-zinc-600 dark:text-zinc-400 */}
              <p className="text-zinc-600 dark:text-zinc-400 text-sm font-medium leading-relaxed">
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
      </main>

  
    </div>
  );
}