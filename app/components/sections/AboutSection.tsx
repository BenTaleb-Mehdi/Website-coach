// components/sections/AboutSection.tsx
"use client";
import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function AboutSection() {
  const checkmarks = [
    "Premium Dynamic Custom Splits",
    "Tailored High-Performance Fuel Layouts",
    "Weekly Biomarker Monitoring Metrics",
    "Direct Private Telegram Hotline Access",
  ];

  const stats = [
    { value: "1500+", label: "Hours Training Sessions", highlight: true },
    { value: "8+", label: "Years Active Experience" },
    { value: "97%", label: "Client Retention Rates" },
    { value: "3x", label: "Certified Elite Frameworks" },
  ];

  return (
    <section className="bg-transparent text-zinc-900 dark:text-white px-5 md:px-8 w-full max-w-7xl mx-auto py-16 md:py-20 border-t border-zinc-200 dark:border-zinc-900/60">
      <div className="grid lg:grid-cols-12 gap-10 items-center">

        {/* Left Copy Block */}
        <div className="lg:col-span-6 space-y-5">
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-widest text-[#82FF00]"
          >
            The Mindset
          </motion.div>
          <motion.h2
            custom={1} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.92]"
          >
            YOUR COACH,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#82FF00] to-[#c8ff6e]">
              YOUR ALLY
            </span>
          </motion.h2>
          <motion.p
            custom={2} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-lg leading-relaxed font-medium"
          >
            No generalized workout routines or standard generic meal printouts. We program specific anatomical and metabolic strategies custom designed for your physiological breakdown.
          </motion.p>

          <motion.ul
            custom={3} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="space-y-3 pt-2"
          >
            {checkmarks.map((item, i) => (
              <li key={i} className="flex items-center gap-3 font-semibold text-sm text-zinc-700 dark:text-zinc-300">
                <span className="flex-shrink-0 w-5 h-5 rounded-md bg-[#82FF00]/10 border border-[#82FF00]/30 flex items-center justify-center text-[#82FF00]">
                  <Check className="w-3 h-3" />
                </span>
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

 
        <div className="lg:col-span-6 space-y-3">
       

          {/* Stat Grid */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                custom={i + 1} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className={`p-4 md:p-5 rounded-2xl flex flex-col justify-between aspect-square transition-all duration-300 hover:scale-[1.02] ${
                  stat.highlight
                    ? "bg-[#82FF00] text-black shadow-xl shadow-[#82FF00]/15 hover:shadow-[#82FF00]/25"
                    : "bg-white dark:bg-[#0D0D0D] border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm dark:shadow-md"
                }`}
              >
                <div className={`text-2xl md:text-3xl font-black tracking-tight leading-none ${stat.highlight ? "text-black" : "text-zinc-900 dark:text-white"}`}>
                  {stat.value}
                </div>
                <div className={`text-[9px] font-bold uppercase tracking-widest leading-snug ${stat.highlight ? "text-black/70" : "text-zinc-500"}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}